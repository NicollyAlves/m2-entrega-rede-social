export class Api {

    static baseUrl = "https://m2-rede-social.herokuapp.com/api/"
    static urlUser = `https://m2-rede-social.herokuapp.com/api/users/?limit=10&offset=1`
    static urlPost = `https://m2-rede-social.herokuapp.com/api/posts/?page=1/`
    static token = localStorage.getItem("@redeSocial:token")
    static headersNoAuth = {
        "Content-Type": "application/json"
    }
    static headersAuth = {
        "Content-Type": "application/json",
        Authorization: `Token ${this.token}`
    }

    static async loginUser(body) {
        const userLogin = await fetch(`${this.baseUrl}users/login/`, {
            method: "POST",
            headers: this.headersAuth,
            body: JSON.stringify(body)
        })
        .then(res => res.json())
        .then(res => {
            localStorage.setItem("@redeSocial:token", res.token)
            localStorage.setItem("@redeSocial:user_uuid", res.user_uuid)


            if(res.token && res.user_uuid){
                window.location.assign("../../src/pages/dashboard.html")
            }

            console.log(res);
            return res
        })
        .catch(err => console.log(err))

        return userLogin
    }

    static async criarUser(body) {
        const user = await fetch(`${this.baseUrl}users/`, {
            method: "POST",
            headers: this.headersNoAuth,
            body: JSON.stringify(body)
        })
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.log(err))

        return user
    }

    static async getUser() {
        const user = await fetch(`${this.baseUrl}users/${localStorage.getItem("@redeSocial:user_uuid")}/`, {
            method: "GET",
            headers: this.headersAuth
        })
        .then(res => res.json())
        .catch(err => console.log(err))

        return user
    }

    static async getUserByPage(page = Api.urlUser) {
        const pages = await fetch(page, {
            method: "GET",
            headers: this.headersAuth
        })
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.log(err))
        return pages
    }

    static async getPostByPage(page = Api.urlPost) {
        const pages = await fetch(page, {
            method: "GET",
            headers: this.headersAuth
        })
        .then(res => res.json())
        .catch(err => console.log(err))
        return pages
    }

    static async newPost(body) {
        const post = await fetch(`${this.baseUrl}posts/`, {
            method: "POST", 
            headers: this.headersAuth,
            body: JSON.stringify(body)
        })
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.log(err))

        return post
    }

    
}