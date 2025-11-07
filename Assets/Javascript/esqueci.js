import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {
  getAuth,
  sendPasswordResetEmail,
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

const email = document.getElementById("email");
const botao = document.getElementById("envio");
const aviso = document.getElementById("aviso");

async function enviarEmailRedefinicao() {
  const emailValue = email.value.trim();

  if (!emailValue) {
    aviso.innerHTML = "Informe um e-mail válido.";
    return;
  }

  try {
    const actionCodeSettings = {
      url: "https://joao-habib-da-silva.github.io/spumanovo/Pages/login.html",
      handleCodeInApp: false,
    };

    await sendPasswordResetEmail(auth, emailValue, actionCodeSettings);

    aviso.innerHTML = `E-mail de redefinição enviado para <b>${emailValue}</b>. Verifique sua caixa de entrada`;
    email.value = ""; 
  } catch (error) {
    console.error(error);
    if (error.code === "auth/user-not-found") {
      aviso.innerHTML = "Nenhuma conta encontrada com esse e-mail.";
    } else if (error.code === "auth/invalid-email") {
      aviso.innerHTML = "E-mail inválido. Tente novamente.";
    } else {
      aviso.innerHTML = `⚠️ Erro ao enviar o e-mail: ${error.code}`;
    }
  }
}

botao.addEventListener("click", enviarEmailRedefinicao);
