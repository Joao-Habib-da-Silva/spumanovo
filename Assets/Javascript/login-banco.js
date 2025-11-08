import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js"
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCH7lpKD9aMWorbk_pk3mxlcGXt21GM6lM",
  authDomain: "spuma-banco.firebaseapp.com",
  projectId: "spuma-banco",
  storageBucket: "spuma-banco.appspot.com",
  messagingSenderId: "447336546434",
  appId: "1:447336546434:web:23802d28de45fbedc2349b",
  measurementId: "G-4BJ95WYKF5",
};
const aviso = window.document.getElementById("aviso")
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const botao = window.document.getElementById("button-enviar")
const botao_google = window.document.getElementById("google-button")
const db = getFirestore(app);
var provider = new GoogleAuthProvider()
provider.addScope('email');
provider.addScope('profile');
async function criarDocumentoUsuario(user, tipo = "google") {
    try {
        await setDoc(doc(db, "users", user.uid), {
            nome: user.displayName || "",
            email: user.email,
            criadoEm: new Date(), 
            nascimento: "",
            telefone: "",
            cep: "",
            rua: "",
            bairro: "",
            cidade: "",
            estado: "",
            provedor: tipo,
          });
        console.log("Documento criado para usuário Google:", user.email);
    } catch (error) {
        console.error("Erro ao criar documento:", error);
    }
}
botao.addEventListener("click", async function() {
    try {
        const email = window.document.getElementById("email").value.trim()
        const senha = window.document.getElementById("senhas").value
        const cred = await signInWithEmailAndPassword(auth, email, senha)
        location.href = "https://joao-habib-da-silva.github.io/spumanovo/";
      }catch(error) {
         if (error.code === "permission-denied") {
           aviso.innerHTML =
             "Permissão negada. Verifique as regras do Firestore.";
         } else if (error.code === "unavailable") {
           aviso.innerHTML = "Serviço indisponível. Tente mais tarde.";
         } else if (error.code === "deadline-exceeded") {
           aviso.innerHTML = "Operação demorou demais. Verifique a conexão.";
         } else if (error.code === "resource-exhausted") {
           aviso.innerHTML = "Limite de uso excedido. Atualize o plano.";
         } else if (error.code === "invalid-argument") {
           aviso.innerHTML = "Dados inválidos. Contate o suporte.";
         }
      }
})
botao_google.addEventListener("click", async function() {
  try {
    const result = await signInWithPopup(auth, provider)
    const user = result.user
    await criarDocumentoUsuario(user, "google");
    history.back()
    return user
  }catch(error) {
    console.log(error)
    throw error
  }
})
