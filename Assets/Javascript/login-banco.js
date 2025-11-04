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
botao.addEventListener("click", async function logar() {
    try {
        const email = window.document.getElementById("email").value
        const senha = window.document.getElementById("senhas").value
        const cred = await signInWithEmailAndPassword(auth, email, senha)
        const avisa = window.document.getElementById("aviso")
        console.log("user cadastrado")
        history.back()
      }catch(error) {
        console.error(error)
        
        }
})
window.document.addEventListener("keydown", (event) => {
  if(event.key == "Enter") {
    logar()
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