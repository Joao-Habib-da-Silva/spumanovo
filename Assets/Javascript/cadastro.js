import {privacidade, termos} from "./conteudo.js"
const olho_senha = window.document.querySelectorAll(".abrir-fechar")
const senha = window.document.querySelectorAll(".senhas")
const select_mode = window.document.getElementById("modo-dark-and-light")
const bolinha = window.document.getElementById("bolinha")
const html = window.document.documentElement
const button_politica = window.document.getElementById("politicas")
const button_termos = window.document.getElementById("termos")
const explicacao = window.document.getElementById("explicacao")
const cep = window.document.getElementById("cep")
const rua = window.document.getElementById("rua")
const cidade = window.document.getElementById("cidade")
const estado = window.document.getElementById("estado")
const bairro = window.document.getElementById("bairro")
cep.addEventListener("input", async function() {
    try {
        const api = await fetch(`https://viacep.com.br/ws/${cep.value}/json`)
        if(!api.ok) {
            throw new Error(error)
        }else {
            const data = await api.json()
            cidade.value = `${data["localidade"]}`
            estado.value = `${data["estado"]}`
            bairro.value = `${data["bairro"]}`
            rua.value = `${data["logradouro"]}`
        }
    }catch(error) {
      console.error(error)  
    }
})
const fora = window.document.getElementById("fora")
button_politica.addEventListener("click", function() {
    explicacao.classList.add("ligado")
    fora.classList.add("ligado")
    explicacao.innerHTML = `${privacidade}`
})
fora.addEventListener("click", function() {
    fora.style.display = "none"
})
button_termos.addEventListener("click", function() {
    fora.classList.add("ligado")
    explicacao.classList.add("ligado")
    explicacao.innerHTML = `${termos}`
})
olho_senha.forEach((olho, index) => {
    
olho.addEventListener("click", function() {
    if(olho.classList.contains("bx-show")) {
        olho.classList.remove("bx-show")
        olho.classList.add("bx-hide")
        senha[index].type ="password"
    }
    else {
        olho.classList.remove("bx-hide")
        olho.classList.add("bx-show")
        senha[index].type = "text"
    }
})
})
select_mode.addEventListener("click", function() {
    bolinha.classList.toggle("ativado")
    html.classList.toggle("ativado")
    if(window.document.documentElement.classList.contains("ativado")) {
        localStorage.setItem("theme", "light")
    }
    else {
        localStorage.setItem("theme", "dark")
    }
})
window.document.addEventListener("DOMContentLoaded", function() {
    const theme = localStorage.getItem("theme")

    if (theme == "dark") {
        bolinha.classList.remove("ativado")
        html.classList.remove("ativado")
    }
    else {
        bolinha.classList.add("ativado")
        html.classList.add("ativado")
    }
})