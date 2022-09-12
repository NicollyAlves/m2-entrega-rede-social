import { Api } from "./api.js"

export class Modais {
    static abrirLogin() {
        const btnCadastro = document.getElementById("registro")
        const btnLogin = document.querySelector("#login")
        const modal = document.getElementById("modalLogin")

            btnLogin.addEventListener("click", () => {
                modal.classList.toggle("hidden")
                btnLogin.style.backgroundColor = "#495057"
                btnCadastro.style.backgroundColor = "#212529"
            })
    }
    static abrirCadastro() {
        const btnCadastro = document.getElementById("registro")
        const btnLogin = document.querySelector("#login")
        const modal = document.getElementById("modalCadastro")
        
        btnCadastro.addEventListener("click", () => {
            modal.classList.toggle("hidden")
            btnCadastro.style.backgroundColor = "#495057"
            btnLogin.style.backgroundColor = "#212529"
        })
    }
    static irParaCadastro() {
        const pgRegistro = document.querySelector("#btnPagRegistro")
        const modalLogin = document.getElementById("modalLogin")
        const modal = document.getElementById("modalCadastro")
        pgRegistro.addEventListener("click", async (event) => {
            event.preventDefault()
            modalLogin.classList.toggle("hidden")
            modal.classList.toggle("hidden")
        })
    }

    static irParaLogin() {
        const pgLogin = document.querySelector("#btnPagLogin")
        const modalCadastro = document.getElementById("modalCadastro")
        const modal = document.getElementById("modalLogin")
        const voltar = document.getElementById("voltarLogin")
        pgLogin.addEventListener("click", async (event) => {
            event.preventDefault()
            modalCadastro.classList.toggle("hidden")
            modal.classList.toggle("hidden")
        })
        voltar.addEventListener("click", async (event) => {
            event.preventDefault()
            modalCadastro.classList.toggle("hidden")
            modal.classList.toggle("hidden")
        })
    }
}

Modais.abrirLogin()
Modais.abrirCadastro()
Modais.irParaCadastro()
Modais.irParaLogin()