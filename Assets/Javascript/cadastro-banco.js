import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import { atomicStore } from "three/tsl";
const firebaseConfig = {
  apiKey: "AIzaSyCH7lpKD9aMWorbk_pk3mxlcGXt21GM6lM",
  authDomain: "spuma-banco.firebaseapp.com",
  projectId: "spuma-banco",
  storageBucket: "spuma-banco.appspot.com",
  messagingSenderId: "447336546434",
  appId: "1:447336546434:web:23802d28de45fbedc2349b",
  measurementId: "G-4BJ95WYKF5",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const cadastroligar = document.getElementById("button-enviar");
cadastroligar.addEventListener("click", async function cadastrar() {
  const email = document.getElementById("email").value.trim();
  const nome = window.document.getElementById("nome-cadastro").value;
  const senha = document.getElementById("senha1").value;
  const data = document.getElementById("idade").value;
  const cep = window.document.getElementById("cep").value;
  const telefone = window.document.getElementById("telefone").value
  const rua = window.document.getElementById("rua").value;
  const bairro = window.document.getElementById("bairro").value;
  const cidade = window.document.getElementById("cidade").value;
  const estado = window.document.getElementById("estado").value;
  const check_politicas = window.document.getElementById("check-politicas")
  const check_diretrizes = window.document.getElementById("check-termos")
  const aviso = window.document.getElementById("aviso")
 
  if (!nome ||!email || !senha || !data || !cep || !rua || !bairro || !cidade || !estado || !telefone || !check_politicas.checked || !check_diretrizes.checked) {
    aviso.style.display = "block"
    aviso.innerHTML = "<h1>Preencha todos os campos</h1>"
    return;
  }
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
    const user = userCredential.user;

    await setDoc(doc(db, "users", user.uid), {
      nome: nome,
      email: user.email,
      nascimento: data,
      telefone: telefone,
      criadoEm: new Date(),
      cep: cep,
      rua: rua,
      bairro: bairro,
      cidade: cidade,
      estado: estado,
      tipo: "cliente",
    });
    aviso.innerHTML = "<h1>Cadastrado com sucesso</h1>"
    history.back()
  } catch (error) {
    aviso.style.color = "red"
    console.log(error)
   if(error.code === "auth/email-already-in-use") {
    aviso.innerHTML = "Esse email já está sendo usado"
   }else if (error.code === "auth/invalid-email"){
    aviso.innerHTML = "Email invalido, tente novamente"
   }
   else if(error.code === "auth/weak-password") {
    aviso.innerHTML = "Senha fraca, deve ter pelo menos seis caracteres"
   }
   else if(error.code == "auth/operation-not-allowed") {
    aviso.innerHTML = "O cadastro está desabilitado no nosso console. Contate o suporte imediatamente"
   }
   else if(error.code == "auth/too-many-requests") {
    aviso.innerHTML = "Você tentou cadastrar muitas vezes, aguarde um pouco, e tente novamente"
   }
   else if(error.code == "auth/network-request-failed") {
    aviso.innerHTML ="Verifique sua rede "
   }
  }
});