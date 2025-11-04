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
        const email = window.document.getElementById("email").value
        const senha = window.document.getElementById("senhas").value
        const cred = await signInWithEmailAndPassword(auth, email, senha)
        const avisa = window.document.getElementById("aviso")
        avisa.style.display = "block"
        avisa.innerHTML = `<p>Usuário cadastrado</p>`
        history.back()
      }catch(error) {
        console.error(error)
        avisa.style.display = "block"
        if (error.code === "auth/invalid-email") {
          avisa.innerHTML = "<h1>Email inválido</h1>";
        } else if (error.code === "auth/user-not-found") {
          avisa.innerHTML = "<h1>Usuário não encontrado</h1>";
        } else if (error.code === "auth/wrong-password") {
          avisa.innerHTML = "<h1>Senha incorreta</h1>";
        } else {
          avisa.innerHTML = "<h1>Erro ao fazer login. Tente novamente.</h1>";
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
    console.error(error)
    throw error
  }
})