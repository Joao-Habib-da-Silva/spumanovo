const olho_senha = window.document.getElementById("abrir-fechar")
const senha = window.document.getElementById("senhas")
const select_mode = window.document.getElementById("modo-dark-and-light")
const bolinha = window.document.getElementById("bolinha")
const html = window.document.documentElement
olho_senha.addEventListener("click", function() {
    if(olho_senha.classList.contains("bx-show")) {
        olho_senha.classList.remove("bx-show")
        olho_senha.classList.add("bx-hide")
        senha.type ="password"
    }
    else {
        olho_senha.classList.remove("bx-hide")
        olho_senha.classList.add("bx-show")
        senha.type = "text"
    }
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