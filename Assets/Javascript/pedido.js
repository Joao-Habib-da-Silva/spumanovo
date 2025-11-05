import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  updateDoc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import {
  getAuth,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

const select_mode = document.getElementById("modo-dark-and-light");
const select_mode_bolinha = document.getElementById("bolinha");
const html = document.documentElement;
const header = document.getElementById("header");
const nav = document.getElementById("menu");
const login = document.getElementById("loginoubotao");
const menu_for_phones = document.getElementById("menu-for-phones");

if (select_mode && select_mode_bolinha) {
  select_mode.addEventListener("click", function () {
    select_mode_bolinha.classList.toggle("ativado");
    html.classList.toggle("ativado");
    if (html.classList.contains("ativado")) {
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", "dark");
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  if (header) header.classList.add("start");
  if (menu_for_phones) menu_for_phones.classList.add("start");
  if (login) login.classList.add("start");
  if (nav) nav.classList.add("start");
  verificarEstado();
  onUserStateChanged(async (user) => {
    if (user) {
      if (buttonlogin) buttonlogin.style.display = "none";
      if (use) use.style.display = "flex";
      const name_area = document.getElementById("nome");
      if (name_area) name_area.innerHTML = user.email;
      try {
        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          const userData = userSnap.data();
          const profissionalTela = document.getElementById("tela");
          if (userData.tipo === "profissional" && profissionalTela) {
            profissionalTela.style.display = "none";
          }
        }
      } catch (error) {
        console.error("Erro ao verificar tipo de usuário:", error);
      }
    } else {
      if (buttonlogin) buttonlogin.style.display = "flex";
      if (use) use.style.display = "none";
    }
  });
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    if (select_mode_bolinha) select_mode_bolinha.classList.remove("ativado");
    html.classList.remove("ativado");
  } else {
    if (select_mode_bolinha) select_mode_bolinha.classList.add("ativado");
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
const buttonlogin = document.getElementById("login-botao");
const use = document.getElementById("user");

function onUserStateChanged(callback) {
  onAuthStateChanged(auth, callback);
}

const pedido_botao = document.getElementById("pedido-botao");
if (pedido_botao) {
  pedido_botao.addEventListener("click", function () {
    location.href = "./produto.html#area-pedido";
  });
}

async function realizarPedido(id) {
  try {
    const pedidoRef = doc(db, "pedidos", id);
    await updateDoc(pedidoRef, { execucao_feita: true });
    alert("Pedido atualizado com sucesso!");
  } catch (error) {
    console.error("Erro ao atualizar pedido:", error);
    alert("Erro ao atualizar pedido. Tente novamente.");
  }
}

const input_rua = document.getElementById("pedidos");
const analisar = document.getElementById("analisar");

if (analisar) {
  analisar.addEventListener("click", async function () {
    const input_rua_value = input_rua ? input_rua.value.toLowerCase() : "";
    try {
      const querySnapshot = await getDocs(collection(db, "pedidos"));
      const lista = document.getElementById("lista");
      if (lista) lista.innerHTML = "";
      querySnapshot.forEach((docSnap) => {
        const datas = docSnap.data();
        const idPedido = docSnap.id;
        let plano,
          adicional_1 = "",
          adicional_2 = "";
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
        let tele = datas.telefone_do_cliente || "";
        tele = tele.replace(/\D/g, "");
        if (!tele.startsWith("55")) {
          tele = "55" + tele;
        }
        div.innerHTML = `
          <div class="esquerda-pedido">
            <h1>${datas.carro || "Carro não informado"}, ${
          datas.endereco || "Endereço não informado"
        }</h1>
            <div class="conteudo">
              <p class="preco">Preço: R$ ${datas.preco || "0"}</p>
              <p class="telefone">Telefone: ${tele}</p>
              <div class="detalhes">
                <p>${plano} ${adicional_1} ${adicional_2}</p>
              </div>
            </div>
          </div>
          <div class="direita-pedido">
            <a href="https://wa.me/${tele}?text=${encodeURIComponent(
          "Olá, tudo bem? Vi seu pedido aqui!"
        )}">
              <button class="realizar" data-id="${idPedido}">Realizar pedido</button>
            </a>
          </div>
        `;
        if (
          enderecos &&
          enderecos.toLowerCase().includes(input_rua_value) &&
          !datas.execucao_feita
        ) {
          div.style.display = "flex";
        } else {
          div.style.display = "none";
        }
        if (lista) lista.appendChild(div);
      });
      const botoes = document.querySelectorAll(".realizar");
      botoes.forEach((botao) => {
        botao.addEventListener("click", async (e) => {
          const id = e.target.dataset.id;
          if (id) await realizarPedido(id);
        });
      });
    } catch (error) {
      console.error("Erro ao buscar pedidos:", error);
      alert("Erro ao carregar pedidos. Verifique sua conexão.");
    }
  });
}

function marcarCheckbox() {
  const checkbox = document.getElementById("formulario");
  if (checkbox) {
    checkbox.checked = true;
  
    localStorage.setItem("formularioFeito", "true");
  }
}

async function atualizarUsuarioParaProfissional(userId) {
  try {
    const userRef = doc(db, "users", userId);
    const userSnap = await getDoc(userRef);
    if (userSnap.exists()) {
      await updateDoc(userRef, {
        tipo: "profissional",
      });
      alert("Usuário atualizado para profissional com sucesso!");
    } else {
      alert(
        "Documento do usuário não encontrado. Verifique se o usuário está registrado."
      );
    }
  } catch (error) {
    console.error("Erro ao atualizar usuário:", error);
    alert("Erro ao atualizar usuário. Tente novamente.");
  }
}

function verificarEstado() {
  const urlParams = new URLSearchParams(window.location.search);
  const formSubmitted = urlParams.get("formSubmitted");
  if (formSubmitted === "true") {
    marcarCheckbox();
    const user = auth.currentUser;
    if (user) {
      atualizarUsuarioParaProfissional(user.uid);
    }
    const newUrl = window.location.pathname;
    window.history.replaceState({}, document.title, newUrl);
  }
  if (localStorage.getItem("formularioFeito") === "true") {
    const checkbox = document.getElementById("formulario");
    if (checkbox) {
      checkbox.checked = true;
    }
  }
}
