import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
function onUserStateChanged(callback) {
  onAuthStateChanged(auth, callback);
}
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


let n = 0;
var input = window.document.getElementById("input");
const roleta = window.document.getElementById("roleta");
var seta_esquerda = window.document.getElementById("seta-esquerda");
var seta_direita = window.document.getElementById("seta-direita");
console.log(window.innerWidth)
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
  if(seletor.value == "todos") {
    products.forEach((product) => {
      product.style.display = "block"
    })
  }
  else {
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
  });}
});

seta_direita.addEventListener("click", function () {
  n += 1;
  let roletorgrau = 82.5
  if(window.innerWidth > 1600) {
    roletorgrau= 66
  }
  if (n > 0) {
    seta_esquerda.classList.add("opacidade");
    roleta.style.transform = `translateX(${n * -roletorgrau}rem)`;
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
    roleta.style.transform = `translateX(${n * -82.5}rem)`;
  }
  console.log(n);
});
arquivo_json.forEach((produto) => {
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
const area_pedido = window.document.getElementById("pedido")
const forapedido = window.document.getElementById("forapedido")
forapedido.addEventListener("click", function() {
  forapedido.style.display = "none"
  area_pedido.style.display = "none"
})
const botao_sair_pedido = window.document.getElementById("sair-botao")
botao_sair_pedido.addEventListener("click", function () {
  forapedido.style.display = "none"
  area_pedido.style.display = "none"
})
const botao_pedido = window.document.getElementById("criar-pedido")
botao_pedido.addEventListener("click", function() {
  area_pedido.style.display = "block"
  forapedido.style.display = "block"
})
const finalizar_pedido = window.document.getElementById("finaliza-pedido")
finalizar_pedido.addEventListener("click", function() {
 onUserStateChanged(user => {
  const valor_rua = window.document.getElementById("rua").value
  if (user) {
    if(user.rua != "") {
      valor_rua.value = user.rua
    }
 const formas_de_pagamento = window.document.getElementById("right-centro-pedido")
  const carro = window.document.getElementById("carro").value
  const aviso = window.document.getElementById("aviso")
  if(!valor_rua || !carro){
    aviso.innerHTML = "Você não inseriu todos os campos obrigatórios!"
  } else {
   
    formas_de_pagamento.classList.add("abriu")
  } 
  } else {
    window.location.href = "https://joao-habib-da-silva.github.io/spumanovo/Pages/login.html"
  }
})
})