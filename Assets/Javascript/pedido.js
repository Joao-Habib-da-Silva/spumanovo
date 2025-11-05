import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {getFirestore, 
  collection, 
  getDocs, 
  doc, 
  updateDoc
} 
from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import {
  getAuth,
  onAuthStateChanged
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
async function realizarPedido(id) {
  const pedidoRef = doc(db, "pedidos", id);
  await updateDoc(pedidoRef, {
    execucao_feita: true 
  });
  alert("Pedido atualizado com sucesso!");
}
const input_rua = window.document.getElementById("pedidos")
const analisar = window.document.getElementById("analisar")
analisar.addEventListener("click", async function () {
  const input_rua_value = input_rua.value.toLowerCase();
  const querySnapshot = await getDocs(collection(db, "pedidos"));
  const lista = window.document.getElementById("lista");
  lista.innerHTML = ""; 
  querySnapshot.forEach((docSnap) => {
    const datas = docSnap.data();
    const idPedido = docSnap.id; 
    let plano;
    let adicional_1;
    let adicional_2;
    const enderecos = datas.endereco;
    if (!datas.plano_detalhado) {
      plano = "Lavagem Simples";
      adicional_1 = datas.revitalizacao_plasticos
        ? ", Com revitalização"
        : ", Sem revitalização";
      adicional_2 = datas.aplicacao_cera
        ? ", Com aplicação de cera"
        : ", Sem aplicação de cera";
    } else {
      plano = "Lavagem Detalhada";
    }
    const div = document.createElement("div");
    div.classList.add("pedidoslista");
    div.innerHTML = `
      <div class="esquerda-pedido">
        <h1>${datas.carro}, ${datas.endereco}</h1>
        <p class="preco">Preço: R$ ${datas.preco}</p>
        <p class="telefone">Telefone: ${datas.telefone_do_cliente}</p>
        <div class="detalhes">
          <p>${plano} ${adicional_1} ${adicional_2}</p>
        </div>
      </div>
      <div class="direita-pedido">
        <a href="https://wa.me/55${datas.telefone_do_cliente}?text=${encodeURIComponent("Olá, tudo bem? Vi seu pedido aqui!")}"><button class="realizar" data-id="${idPedido}">Realizar pedido</button></a>
      </div>
    `;

    if (datas.endereco.includes(input_rua_value) && !datas.execucao_feita) {
      div.style.display = "flex";
    } else {
      div.style.display = "none";
    }

    lista.appendChild(div);
  });
  const botoes = document.querySelectorAll(".realizar");
  botoes.forEach((botao) => {
    botao.addEventListener("click", async (e) => {
      const id = e.target.dataset.id; 
            await realizarPedido(id);
    });
  });
});
