import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getFirestore, addDoc, collection } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
const roleta = window.document.getElementById("roleta")
window.addEventListener("DOMContentLoaded", function() {
  roleta.classList.add("start")
})
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
const db = getFirestore();

function onUserStateChanged(callback) {
  onAuthStateChanged(auth, callback);
}
const arquivo_json = [
  {
    "marca": "Vonixx",
    "nome": "V-MOL",
    "tipo": "Lava Autos",
    "descricao": "Lava autos biodegradável, pH levemente básico, ideal para remoção de barro e óleo sem agredir a superfície.",
    "estoque": 0,
    "imagem": "https://a-static.mlcdn.com.br/1500x1500/v-mol-l-shampoo-desengraxante-neutro-automotivo-lava-autos-detergente-vonixx/loja-yamase/vmol5l/7e2e1c6b86eb00e78d099acda5f99719.jpeg",
    "link": "https://www.amazon.com.br/VONIXX-2050116-V-MOL-1-5L/dp/B0BW4NDV3N"
  },
  {
    "marca": "Vonixx",
    "nome": "V-FLOC",
    "tipo": "Lava Autos",
    "descricao": "Lava autos de alta performance, pH neutro, indicado para lavagem suave e eficiente sem remover ceras.",
    "estoque": 0,
    "imagem": "https://casadosoldador.com.br/files/products_images/40420/lava-autos-shampoo-v-floc-1-5l-vonixx-casa-do-soldador-01%20(1).webp?1750968706",
    "link": "https://store.vonixx.com.br/limpeza/lava-autos/neutro/v-floc"
  },
  {
    "marca": "Vonixx",
    "nome": "Impact",
    "tipo": "Limpador Universal",
    "descricao": "Produto ecológico e não corrosivo para remover insetos, gordura e encardidos de superfícies diversas.",
    "estoque": 0,
    "imagem": "https://static.machadoautoparts.com.br/public/machadoautoparts/imagens/produtos/impact-limpeza-pesada-1-5l-vonixx-67c1e354a0e4b.jpg",
    "link": ""
  },
  {
    "marca": "Vonixx",
    "nome": "Izer",
    "tipo": "Descontaminante Ferroso",
    "descricao": "Remove resíduos de ferro e partículas metálicas com eficiência e segurança, preparando a superfície.",
    "estoque": 0,
    "imagem": "https://cdn.awsli.com.br/600x450/1373/1373016/produto/106668764/b447cda747.jpg",
    "link": ""
  },
  {
    "marca": "Vonixx",
    "nome": "Strike",
    "tipo": "Removedor",
    "descricao": "Remove piche, cola de adesivos, etiquetas e ferrugem, com alto rendimento.",
    "estoque": 0,
    "imagem": "https://images.tcdn.com.br/img/img_prod/1060217/strike_643_1_0247f7240e42b81a9b2c51dc1f44d27a.png",
    "link": ""
  },
  {
    "marca": "Vonixx",
    "nome": "Vertex",
    "tipo": "Limpeza de Estofados",
    "descricao": "Limpeza profunda de estofados automotivos e residenciais em uma única etapa.",
    "estoque": 0,
    "imagem": "https://images.tcdn.com.br/img/img_prod/1034705/limpador_de_estofados_vertex_limpeza_profunda_vonixx_1529_2_ff02545cf4a6f5dc0aa190cd954bfc1f.png",
    "link": ""
  },
  {
    "marca": "Vonixx",
    "nome": "Blend",
    "tipo": "Cera Híbrida",
    "descricao": "Cera spray de SiO2 e carnaúba, protege até 4 meses, promove brilho e hidrorrepelência.",
    "estoque": 0,
    "imagem": "https://images.tcdn.com.br/img/img_prod/1060217/blend_all_in_one_511_1_76f6996d57f9f61009def63bb002e049.png",
    "link": ""
  },
  {
    "marca": "Vonixx",
    "nome": "Sinergy Wheel",
    "tipo": "Coating para Rodas",
    "descricao": "Spray coating que protege rodas por até 6 meses, resistente a altas temperaturas.",
    "estoque": 0,
    "imagem": "https://down-br.img.susercontent.com/file/br-11134207-7r98o-lopi827f6zlef9",
    "link": ""
  },
  {
    "marca": "Vonixx",
    "nome": "Prizm",
    "tipo": "Limpeza de Vidros",
    "descricao": "Restaura transparência de vidros, remove marcas de água e impurezas incrustadas.",
    "estoque": 0,
    "imagem": "https://cdn.awsli.com.br/2500x2500/1771/1771500/produto/22632578105ced7945b.jpg",
    "link": ""
  },
  {
    "marca": "Vonixx",
    "nome": "Verniz de Motor",
    "tipo": "Proteção de Motor",
    "descricao": "Protege, dá brilho e renova superfícies do motor: plásticas, metálicas, pintadas e borrachas.",
    "estoque": 0,
    "imagem": "https://images.tcdn.com.br/img/img_prod/1060217/verniz_de_motor_671_1_b7af572ab71aec372004dc0b46985601.png",
    "link": ""
  },
  {
    "marca": "Vonixx",
    "nome": "Intense",
    "tipo": "Renovador de Plásticos",
    "descricao": "Renova plásticos com proteção UV, acabamento natural e toque seco, durando até 6 meses.",
    "estoque": 0,
    "imagem": "https://images.tcdn.com.br/img/img_prod/1060217/intense_599_1_c6614f7928e26ac8cfef586633c51891.png",
    "link": ""
  },
  {
    "marca": "Vonixx",
    "nome": "Glazy",
    "tipo": "Limpa Vidros",
    "descricao": "Produto multifuncional para limpeza de vidros, reduz atrito e risco de riscos.",
    "estoque": 0,
    "imagem": "https://images.tcdn.com.br/img/img_prod/1060217/glazy_1025_1_a3504ab822b18151bf687f68a3c50665.png",
    "link": ""
  },
  {
    "marca": "Vonixx",
    "nome": "Delet",
    "tipo": "Limpeza de Pneus",
    "descricao": "Limpador de alta performance para pneus e borrachas, devolvendo a cor original.",
    "estoque": 0,
    "imagem": "https://images.tcdn.com.br/img/img_prod/1060217/delet_897_1_4ec24dfdf6bb7557b7981e1a8af97c22.png",
    "link": ""
  },
  {
    "marca": "Vintex",
    "nome": "Alumax",
    "tipo": "Desincrustante Ácido",
    "descricao": "Limpeza de rodas, chassis, motores, baús de alumínio, inox e madeira.",
    "estoque": 0,
    "imagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnYbrquBVvNtmCDwQE7GATewoA3YwEC6_rmw&s",
    "link": ""
  },
  {
    "marca": "Vintex",
    "nome": "Darker",
    "tipo": "Renovador de Pneus",
    "descricao": "Renova pneus e borrachas, formando filme preto resistente e de alta durabilidade.",
    "estoque": 0,
    "imagem": "https://vintex.com.br/wp-content/uploads/2024/06/DARKER-15L-NOVA-TAMPA-e1721329267664.png",
    "link": ""
  },
  {
    "marca": "Protelim",
    "nome": "Revitax",
    "tipo": "Revitalizador de Plásticos",
    "descricao": "Revitaliza e protege plásticos internos e externos com SiO2 e proteção UV.",
    "estoque": 0,
    "imagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVGbkvitG82fCgpzEntLb_IiF483_j2VVwOw&s",
    "link": ""
  },
  {
    "marca": "Protelim",
    "nome": "Multi 200",
    "tipo": "Desengraxante Multiuso",
    "descricao": "Desengraxante alcalino biodegradável, concentrado e de alto rendimento.",
    "estoque": 0,
    "imagem": "https://protelim.com.br/wp-content/uploads/2021/09/mult-200-5l-ok.jpg",
    "link": ""
  },
  {
    "marca": "Protelim",
    "nome": "Power Tire",
    "tipo": "Selante de Pneus",
    "descricao": "Selante de longa duração que mantém o brilho e a hidrorrepelência por semanas.",
    "estoque": 0,
    "imagem": "https://protelim.com.br/wp-content/uploads/2021/09/power-tire-novo.jpg",
    "link": ""
  },
  {
    "marca": "Easytech",
    "nome": "Couro Quick Detailer",
    "tipo": "Cuidado de Couro",
    "descricao": "Limpa e hidrata superfícies de couro em uma única etapa, mantendo a textura e prolongando a durabilidade.",
    "estoque": 0,
    "imagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF2awODZKetd8g77_0aGoSUy4jjt76yR2W5g&s",
    "link": ""
  },
  {
    "marca": "Easytech",
    "nome": "Plurimol",
    "tipo": "Shampoo Automotivo",
    "descricao": "Shampoo concentrado para lavagem pesada de veículos, remove sujeira, graxa e resíduos sem danificar a pintura.",
    "estoque": 0,
    "imagem": "https://images.tcdn.com.br/img/img_prod/1109830/plurimol_shampoo_automotivo_lavagem_pesada_desengraxante_concentrado_1_5l_easytech_2287_1_1784a6e8257a8dbf220325f54a430f15.jpg",
    "link": ""
  },
  {
    "marca": "Easytech",
    "nome": "Insignia Rain",
    "tipo": "Tratamento de Vidros",
    "descricao": "Vitrificador que cria efeito repelente à água e chuva no para-brisa, melhorando visibilidade e segurança.",
    "estoque": 0,
    "imagem": "https://images.tcdn.com.br/img/img_prod/1109830/90_insignia_rain_easytech_vitrificador_de_vidros_parabrisa_cristalizador_repelente_de_agua_e_chuva_para_2185_2_262586b999da80c81df38001c9003f0c.jpg",
    "link": ""
  },
  {
    "marca": "Easytech",
    "nome": "Melon Colors",
    "tipo": "Shampoo Automotivo",
    "descricao": "Shampoo neutro concentrado para lavagem de carros, com alta diluição, mantendo brilho e proteção da pintura.",
    "estoque": 0,
    "imagem": "https://images.tcdn.com.br/img/img_prod/1109830/melon_colors_rosa_500ml_easytech_shampoo_detergente_lava_autos_automotivo_neutro_concentrado_1_400_2277_1_b17171005402521d0615aa81e0e83d60.jpg",
    "link": ""
  }
]
let tamanho = "Indefinido";  
let preco = 0;  
let n = 0;
var input = window.document.getElementById("input");
const seta_esquerda = window.document.getElementById("seta-esquerda");
const seta_direita = window.document.getElementById("seta-direita");
input.addEventListener("input", function () {
  const products = document.querySelectorAll(".products"); 
  if (input.value != "") {
    products.forEach((product) => {
      if (product.id.toLowerCase().includes(input.value.toLowerCase())) {
        product.style.display = "block";
        roleta.style.transform = `translateX(0px)`;
      } else {
        product.style.display = "none";
      }
    });
  } else {
    seta_esquerda.style.display = "block";
    seta_direita.style.display = "block";
    products.forEach((product) => {
      product.style.display = "block";
    });
  }
});

var seletor = window.document.getElementById("seletor-de-marcas");
seletor.addEventListener("change", function () {
  const products = document.querySelectorAll(".products");
  if (seletor.value == "todos") {
    products.forEach((product) => {
      product.style.display = "block";
    });
  } else {
    products.forEach((product) => {
      if (
        (input.value.toLowerCase() == "" &&
          product.id.toLowerCase().includes(seletor.value.toLowerCase())) ||
        (input.value.toLowerCase() != "" &&
          product.id.toLowerCase().includes(seletor.value.toLowerCase()) &&
          product.id.toLowerCase().includes(input.value.toLowerCase()))
      ) {
        product.style.display = "block";
        roleta.style.transform = `translateX(0px)`;
      } else {
        product.style.display = "none";
      }
    });
  }
});

seta_direita.addEventListener("click", function () {
  n += 1;
  let roletorgrau = 178;
  if (window.innerWidth > 1600) {
    roletorgrau = 70;
  }
  if (n > 0) {
    seta_esquerda.classList.add("opacidade");
    roleta.style.transform = `translateX(${n * -roletorgrau}vh)`;
  } else {
    roleta.style.transform += `translateX(0px)`;
    seta_direita.classList.add("desabilitado");
  }
  console.log(n);
});

seta_esquerda.addEventListener("click", function () {
  n -= 1;
  if (n < 0) {
    n = 0;
  }
  if (n < 1) {
    seta_esquerda.classList.remove("opacidade");
    roleta.style.transform = `translateX(0px)`;
  } else {
    if (n == 4) {
      seta_direita.classList.remove("desabilitado");
    }
    roleta.style.transform = `translateX(${n * -roletorgrau}vh)`;
  }
  console.log(n);
});

arquivo_json.forEach(async(produto) => {
  const divs = window.document.createElement("div");
  divs.classList.add("products");
  divs.id =
    produto["nome"].toLowerCase() +
    " " +
    produto["tipo"].toLowerCase() +
    " " +
    produto["marca"].toLowerCase();
  divs.innerHTML = ` <div class="produtos-cima" >
    <h1>${produto["nome"]}</h1>
    </div>
    <div class="produtos-meio">
    <div class="imagem-area"><img src="${produto.imagem}"></div>
    <p class="descricao">
    ${produto["descricao"]}</p>
    </div>
    <div class="produtos-comeco">
        <div class="produtos-comeco-esquerdo">
    </div>
        <div class="produtos-comeco-direito">
            <a href="${produto.link}"> <button>Quero</button></a>
        </div>
    </div>
    </div>
    `;
  roleta.appendChild(divs);
});

const area_pedido = window.document.getElementById("pedido");
const forapedido = window.document.getElementById("forapedido");
forapedido.addEventListener("click", function() {
  forapedido.style.display = "none";
  area_pedido.style.display = "none";
});

const botao_sair_pedido = window.document.getElementById("sair-botao");
botao_sair_pedido.addEventListener("click", function () {
  forapedido.style.display = "none";
  area_pedido.style.display = "none";
});

const botao_pedido = window.document.getElementById("criar-pedido");
botao_pedido.addEventListener("click", function pedir() {
  area_pedido.style.display = "block";
  forapedido.style.display = "flex";
  window.document.body.classList.add("pedidoaberto")
});

const finalizar_pedido = window.document.getElementById("finaliza-pedido");
const carro = document.getElementById("carro");
carro.value = "";

carro.addEventListener("input", function() {
  try {
    const carro_array = carro.value.split(" ");
    const make = carro_array[0];
    const model = carro_array[1];
    const year = carro_array[2];
    console.log("Palavras detectadas:", carro_array);
    if (!make || !model || !year) {
      console.warn("Digite: fabricante modelo ano (ex: toyota corolla 2020)");
      return;
    }
    const callbackName = "carQueryCallback_" + Date.now();
    window[callbackName] = function(data) {
      if (!data.Trims || data.Trims.length === 0) {
        console.warn("Nenhum dado encontrado para esse carro.");
        tamanho = "Indefinido"; 
      } else {
        const peso = parseInt(data["Trims"][0]["model_weight_kg"], 10);
        const comprimento = data["Trims"][0]["model_length_mm"] / 1000;
        if (peso <= 1500 && comprimento < 4.20) {
          tamanho = "Pequeno";
        } else if (peso <= 2500 && comprimento <= 4.70) {
          tamanho = "Medio";
        } else if (comprimento > 4.7) {
          tamanho = "Grande";
        } else {
          tamanho = "Indefinido";
        }
      }
      document.body.removeChild(script);
      delete window[callbackName];
    };
    const script = document.createElement("script");
    script.src = `https://www.carqueryapi.com/api/0.3/?callback=${callbackName}&cmd=getTrims&make=${make}&model=${model}&year=${year}`;
    document.body.appendChild(script);
  } catch (error) {
    console.error("Erro:", error);
  }
});
const primeiro_botao = document.getElementById("primeirobotao");
primeiro_botao.checked = false
const segundo_botao = document.getElementById("segundobotao");
segundo_botao.checked = false
primeiro_botao.addEventListener("change", function() { 
  if (primeiro_botao.checked) {
    if (tamanho === "Pequeno") {
      preco = 80;
    } else if (tamanho === "Medio") {
      preco = 90;
    } else if (tamanho === "Grande") {
      preco = 100;
    } else {
      preco = 50; 
    }
    valor.innerHTML = `R$ ${preco}`;
  }
});

segundo_botao.addEventListener("change", function() {  
  if (segundo_botao.checked) {
    if (tamanho === "Pequeno") {
      preco = 150;
    } else if (tamanho === "Medio") {
      preco = 170;
    } else if (tamanho === "Grande") {
      preco = 190;
    } else {
      preco = 50; 
    }
    valor.innerHTML = `R$ ${preco}`;
  }
});
const cera = window.document.getElementById("aplicacao-cera");
cera.checked = false
cera.addEventListener("change", function() {
  if (cera.checked) {
    preco += 20;
  } else {
    preco -= 20;
  }
  valor.innerHTML = `R$ ${preco}`;
});
const telefone = window.document.getElementById("telefone")
const revitalizar = window.document.getElementById("plasticos");
revitalizar.checked = false
revitalizar.addEventListener("change", function() {
  if (revitalizar.checked) {
    preco += 20;
  } else {
    preco -= 20;
  }
  valor.innerHTML = `R$ ${preco}`;
});

let usuarioAtual = null;
onUserStateChanged((user) => {
  usuarioAtual = user;
  if (!user) {
    console.warn("Nenhum usuário logado no momento.");
  } else {
    console.log("Usuário autenticado:", user.email);
  }
});

finalizar_pedido.addEventListener("click", async function () {
  const valor_rua = window.document.getElementById("rua").value;
  if (!valor_rua || !carro.value) {
    console.log("Insira todos os campos")
    return;
  }
  if (preco === 0 || preco === undefined) {
    console.log("ERRO")
    return;
  }
  if (tamanho === "Indefinido") {
    preco = 50;
  }
  if (!usuarioAtual) {
    window.location.href = "https://joao-habib-da-silva.github.io/spumanovo/Pages/login.html";
    return;
  }
  try {
    const valor_carro = carro.value;
    const primeirobotao_value = primeiro_botao.checked;
    if(!primeiro_botao_value) {
      const adicionais_div = window.document.getElementById("aplicacoesadicionais")
      adicionais_div.style.display = "none"
    }
    const segundobotao_value = segundo_botao.checked;
    const cera_value = cera.checked;
    const telefone_value = telefone.value
    const plastico_value = revitalizar.checked;

    const docRef = await addDoc(collection(db, "pedidos"), {
      cliente_uid: usuarioAtual.uid,
      cliente_email: usuarioAtual.email,
      carro: valor_carro,
      telefone_do_cliente: telefone_value,
      endereco: valor_rua,
      tamanho: tamanho,
      preco: preco,
      plano_simples: primeirobotao_value,
      plano_detalhado: segundobotao_value,
      aplicacao_cera: cera_value,
      revitalizacao_plasticos: plastico_value,
      execucao_feita: false,
      criado_em: new Date().toISOString()
    });
    console.log("Pedido feito!")
    location.reload()
  } catch (error) {
    console.error("Erro ao criar pedido:", error);
  }
});
