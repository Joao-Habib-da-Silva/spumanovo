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

const select_mode = document.getElementById("modo-dark-and-light");
const select_mode_bolinha = document.getElementById("bolinha");
const html = document.documentElement;
const header = document.getElementById("header");
const nav = document.getElementById("menu");
const login = document.getElementById("loginoubotao");
const menu_for_phones = document.getElementById("menu-for-phones");
const buttonlogin = document.getElementById("login-botao");
const use = document.getElementById("user");

if (select_mode && select_mode_bolinha) {
  select_mode.addEventListener("click", function () {
    select_mode_bolinha.classList.toggle("ativado");
    html.classList.toggle("ativado");
    localStorage.setItem(
      "theme",
      html.classList.contains("ativado") ? "light" : "dark"
    );
  });
}

document.addEventListener("DOMContentLoaded", function () {
  [header, menu_for_phones, login, nav].forEach((el) =>
    el?.classList.add("start")
  );

  onUserStateChanged(async (user) => {
    if (user) {
      buttonlogin?.style.setProperty("display", "none");
      use?.style.setProperty("display", "flex");
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
      buttonlogin?.style.setProperty("display", "flex");
      use?.style.setProperty("display", "none");
    }
  });

  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    select_mode_bolinha?.classList.remove("ativado");
    html.classList.remove("ativado");
  } else {
    select_mode_bolinha?.classList.add("ativado");
    html.classList.add("ativado");
  }
});

function onUserStateChanged(callback) {
  onAuthStateChanged(auth, callback);
}

const pedido_botao = document.getElementById("pedido-botao");
pedido_botao?.addEventListener("click", () => {
  location.href = "./produto.html#area-pedido";
});

async function realizarPedido(id) {
  try {
    const pedidoRef = doc(db, "pedidos", id);
    await updateDoc(pedidoRef, { execucao_feita: true });
    alert("Pedido marcado como realizado!");
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
    const codigo = document.getElementById("codigo");
    if (!codigo || codigo.value !== "JRADV") {
      alert("Código incorreto!");
      return;
    }

    try {
      const querySnapshot = await getDocs(collection(db, "pedidos"));
      const lista = document.getElementById("lista");
      if (!lista) return;
      lista.innerHTML = "";

      querySnapshot.forEach((docSnap) => {
        const datas = docSnap.data();
        const idPedido = docSnap.id;
        let plano,
          adicional_1 = "",
          adicional_2 = "";
        const enderecos = (datas.endereco || "").toLowerCase();

        if (!datas.plano_detalhado) {
          plano = "Lavagem Simples";
          adicional_1 = datas.revitalizacao_plasticos
            ? ", Com revitalização"
            : ", Sem revitalização";
          adicional_2 = datas.aplicacao_cera
            ? ", Com aplicação de cera"
            : ", Sem aplicação de cera";
        } else plano = "Lavagem Detalhada";

        let tele = datas.telefone_do_cliente || "";
        tele = tele.replace(/\D/g, "");
        if (!tele.startsWith("55")) tele = "55" + tele;

        const div = document.createElement("div");
        div.classList.add("pedidoslista");
        div.innerHTML = `
          <div class="esquerda-pedido">
            <h1>${datas.carro || "Carro não informado"}, ${
          datas.endereco || "Endereço não informado"
        }</h1>
            <div class="conteudo">
              <p class="preco">Preço: R$ ${datas.preco || "0"}</p>
              <p class="telefone">Telefone: ${tele}</p>
              <div class="detalhes"><p>${plano} ${adicional_1} ${adicional_2}</p></div>
            </div>
          </div>
          <div class="direita-pedido">
            <a href="https://wa.me/${tele}?text=${encodeURIComponent(
          "Olá, tudo bem? Vi seu pedido aqui!"
        )}"
               class="realizar"
               data-id="${idPedido}"
               target="_blank">Realizar pedido</a>
          </div>`;

        if (enderecos.includes(input_rua_value) && !datas.execucao_feita) {
          div.style.display = "flex";
          lista.appendChild(div);
        }
      });

      const botoes = document.querySelectorAll(".realizar");
      botoes.forEach((botao) => {
        botao.addEventListener("click", async (e) => {
          e.preventDefault();
          const id = e.target.dataset.id;
          if (id) {
            await realizarPedido(id);
            window.open(e.target.href, "_blank");
          }
        });
      });
    } catch (error) {
      console.error("Erro ao buscar pedidos:", error);
      alert("Erro ao carregar pedidos. Verifique sua conexão.");
    }
  });
}

async function atualizarUsuarioParaProfissional(userId) {
  try {
    const userRef = doc(db, "users", userId);
    const userSnap = await getDoc(userRef);
    if (userSnap.exists()) {
      await updateDoc(userRef, { tipo: "profissional" });
      alert("Usuário atualizado para profissional com sucesso!");
    } else {
      alert("Documento do usuário não encontrado.");
    }
  } catch (error) {
    console.error("Erro ao atualizar usuário:", error);
    alert("Erro ao atualizar usuário. Tente novamente.");
  }
}
