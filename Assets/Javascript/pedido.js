import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {getFirestore, collection, getDocs
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import {
  getAuth,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
const select_mode = window.document.getElementById("modo-dark-and-light");
const select_mode_bolinha = window.document.getElementById("bolinha");
const html = window.document.documentElement;
const header = document.getElementById("header");
const nav = window.document.getElementById("menu");
const login = window.document.getElementById("loginoubotao");
const menu_for_phones = document.getElementById("menu-for-phones");
select_mode.addEventListener("click", function () {
  select_mode_bolinha.classList.toggle("ativado");
  html.classList.toggle("ativado");
  if (html.classList.contains("ativado")) {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }
});
document.addEventListener("DOMContentLoaded", function () {
  header.classList.add("start");
  menu_for_phones.classList.add("start");
  login.classList.add("start");
  nav.classList.add("start");
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    bolinha.classList.remove("ativado");
    html.classList.remove("ativado");
  } else {
    bolinha.classList.add("ativado");
    html.classList.add("ativado");
  }
});
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
const buttonlogin = window.document.getElementById("login-botao");
const use = window.document.getElementById("user");
function onUserStateChanged(callback) {
  onAuthStateChanged(auth, callback);
}

onUserStateChanged((user) => {
  if (user) {
    buttonlogin.style.display = "none";
    use.style.display = "flex";
    const name_area = window.document.getElementById("nome");
    name_area.innerHTML = user.email;
  } else {
    buttonlogin.style.display = "flex";
    use.style.display = "none";
  }
});
const pedido_botao = window.document.getElementById("pedido-botao");
pedido_botao.addEventListener("click", function () {
  const pedidosdiv = window.document.getElementById("area-pedido");
  location.href = "./produto.html#area-pedido";
});
const input_rua = window.document.getElementById("pedidos")
const analisar = window.document.getElementById("analisar")
analisar.addEventListener("click",  async function() {
        const querySnapshot = await getDocs(collection(db, "pedidos"));
        let achou = false;
        querySnapshot.forEach((doc) => {
            const datas = doc.data()
            console.log(datas)
        })
})