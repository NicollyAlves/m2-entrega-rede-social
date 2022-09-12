import { Api } from "./api.js";

class SignUp {
    
    static login() {
        const token = localStorage.getItem("@redeSocial:token")
        const user_uuid = localStorage.getItem("@redeSocial:user_uuid")
        
        if(token && user_uuid) {
            window.location.assign("/src/pages/dashboard.html")
        }

        const emailLogin = document.getElementById("emailLogin")
        const passLogin = document.getElementById("passLogin")
        const btnLogin = document.getElementById("btnLogar")

        btnLogin.addEventListener("click", (event) => {
            event.preventDefault()

            const data = {
                email: emailLogin.value,
                password: passLogin.value
            }

            console.log(data);

            Api.loginUser(data)
        })
    }

    static createUser() {
        const nome = document.querySelector("#nome")
        const email = document.querySelector("#email")
        const senha = document.querySelector("#pass")
        const trabalho = document.querySelector("#trabalho")
        const imagem = document.querySelector("#imagem")
        const btnSignUp = document.getElementById("btnRegistrar")
        
        btnSignUp.addEventListener("click", async (event) => {
            event.preventDefault()

            const data = {
                username: nome.value,
                email:    email.value,
                password: senha.value,
                work_at:  trabalho.value,
                image:    imagem.value
            }

            console.log(data);
            
            await Api.criarUser(data)
        })
    }

}
SignUp.login()
SignUp.createUser()