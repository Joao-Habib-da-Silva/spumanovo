import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {
  getAuth,
  confirmPasswordReset,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

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
const params = new URLSearchParams(window.location.search);
const oobCode = params.get("oobCode");
const aviso = window.document.getElementById("aviso")
const senha = window.document.getElementById("senha")
const botao = window.document.getElementById("envio-de-senha")
botao.addEventListener("click", async function() {
    const senha_value = senha.value.trim()
    if(!senha_value || senha_value.length < 6) {
        aviso.innerHTML = "Senha de no minimo 6 caracteres."
        return;
    }
    if(!oobCode) {
        aviso.innerHTML = "Código de redefinição ausente/invalido"
    }
          botao.disabled = true;
          try {
        await confirmPasswordReset(auth, oobCode, senha_value);
        aviso.innerHTML = "Senha redefinida com sucesso.";
        setTimeout(() => {
          window.location.href = "";
        }, 2500);
      } catch (error) {
        console.error(error);
        if (error.code === "auth/invalid-action-code") {
          msg.innerHTML = "Link inválido ou expirado.";
        } else {
          msg.innerHTML = "Erro ao redefinir senha. Tente novamente.";
        }
      } finally {
        botao.disabled = false;
      }
})