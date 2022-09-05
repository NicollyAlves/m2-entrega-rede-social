export class Modais {
    static abrirLogin() {
        const btnCadastro = document.getElementById("registro")
        const btnLogin = document.querySelector("#login")
        const modal = document.getElementById("modalLogin")

            btnLogin.addEventListener("click", () => {
                modal.classList.toggle("hidden")
                btnLogin.style.backgroundColor = "#495057"
                btnCadastro.style.backgroundColor = "#212529"
                this.abrirCadastro()
            })
    }
    static abrirCadastro() {
        const btnCadastro = document.getElementById("registro")
        const btnLogin = document.querySelector("#login")
        const modal = document.getElementById("modalCadastro")
        
        console.log(btnCadastro);
        
        btnCadastro.addEventListener("click", () => {
            modal.classList.toggle("hidden")
            btnCadastro.style.backgroundColor = "#495057"
            btnLogin.style.backgroundColor = "#212529"
            this.abrirLogin()
        })
    }
    static irParaCadastro() {
        const pgRegistro = document.querySelector("#btnPagRegistro")
        const modalLogin = document.getElementById("modalLogin")
        const modal = document.getElementById("modalCadastro")
        pgRegistro.addEventListener("click", () => {
            modal.classList.toggle("hidden")
            modalLogin.classList.toggle("hidden")
        })
    }
}

Modais.abrirLogin()
Modais.abrirCadastro()
Modais.irParaCadastro()