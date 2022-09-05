export class Render {
    static createUserInf(data) {
        const header = document.querySelector("header")

        const div1 = document.createElement("div")
        const img = document.createElement("img")
        const div2 = document.createElement("div")
        const nome = document.createElement("h2")
        const trab = document.createElement("h3")
        const seguid = document.createElement("h4")

        const div3 = document.createElement("div")
        const inputTit = document.createElement("input")
        const inputDesc = document.createElement("input")

        const postar = document.createElement("button")

        img.src = data.image
        img.alt = `foto de perfil de ${data.username}`

        div2.classList.add("principalText")
        nome.innerText = data.username
        trab.innerText = data.work_at
        seguid.innerText = data.followers_amount

        div3.classList.add("inputsHeader")
        inputTit.id = "tituloPost"
        inputTit.type = "text"
        inputTit.placeholder = "Digitar o título do post"

        inputDesc.id = "contPost"
        inputDesc.type = "text"
        inputDesc.placeholder = "Digitar o conteúdo do post"

        postar.innerText = "Postar"

        div2.append(nome, trab)
        div1.append(img, div2, seguid)
        div3.append(inputTit, inputDesc)
        header.append(div1, div3, postar)
    }
    /*static async showUsers() {
        this.getUsers(await Api.getPostByPage().then(res => res.results))
    }

    static async getUsers(list) {
        for(let i = 0; i<3; i++){
            this.createUsers(list)
            console.log(list);
        }
    }*/
    
    /*static async renderCreateUsers(user) {
        
        
        for(let i = 0; i<3; i++){
            const users = Render.createUsers(user)
            
            section.appendChild(users)
        }
    }*/
    
    static createUsers(data) {
        const section = document.getElementById("sectionUsers")
        
        for(let i = 0; i < 3; i++){
            const div1 = document.createElement("div")
            const div2 = document.createElement("div")
            const img = document.createElement("img")
            const div3 = document.createElement("div")
            const nome = document.createElement("h2")
            const trab = document.createElement("h3")
            const seguir = document.createElement("button")
    
            img.src = data.results[i].image
            img.alt = `Foto de perfil de ${data.results[i].username}`
    
            div3.classList.add("textSeguir")
            nome.innerText = data.results[i].username
            trab.innerText = data.results[i].work_at
    
            seguir.innerText = "Seguir"
            seguir.id = "seguir"
    
            div3.append(nome, trab)
            div2.append(img, div3)
            div1.append(div2, seguir)
            section.appendChild(div1)
        }
        return section
    }

    static createPosts(data) {
        const main = document.querySelector("main")
        for(let i = 0; i < data.results.length; i++){
            const section = document.createElement("section")
            const div1    = document.createElement("div")
            const img     = document.createElement("img")
            const div2    = document.createElement("div")
            const nome    = document.createElement("h2")
            const trab    = document.createElement("h3")
            const div3    = document.createElement("div")
            const titulo  = document.createElement("h2")
            const cont    = document.createElement("h3")
            const div4    = document.createElement("div")
            const abrir   = document.createElement("button")
            const heart   = document.createElement("img")
            const num     = document.createElement("p")
            
            div2.classList.add("text")
            div3.classList.add("body")
            div4.classList.add("infos")
            
            section.id       = "sectionPosts"
            img.src          = data.results[i].author.image
            nome.innerText   = data.results[i].author.username
            trab.innerText   = data.results[i].author.work_at
            titulo.innerText = data.results[i].title
            cont.innerText   = data.results[i].description
            abrir.innerText  = 'Abrir post'
            heart.src        = "/src/assets/heartBlack.png"
            num.innerText    = data.results[i].likes.length

            div4.append(abrir, heart, num)
            div3.append(titulo, cont, div4)
            div2.append(nome, trab)
            div1.append(img, div2)
            section.append(div1, div3)

            main.appendChild(section)
        }
        return main
    }
}