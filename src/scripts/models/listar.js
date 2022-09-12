import { Api } from "./api.js";
import { ModalPost } from "./modalPost.js";
import { Render } from "./render.js";

const token = localStorage.getItem("@redeSocial:token")
if(!token) {
    window.location.assign("/index.html")
}

async function getOwnUser() {
    const user = await Api.getUser()
    Render.createUserInf(user)
}
getOwnUser()

async function renderUsers() {
    const users = await Api.getUserByPage()
    console.log(users);
    Render.createUsers(users)
}
renderUsers()

async function renderPosts() {
    const users = await Api.getPostByPage()
    console.log(users);
    Render.createPosts(users)
    //Render.modalPost(users)
}
renderPosts()

/*async function modalPost() {
    const posts = await Api.getPostByPage()
}
modalPost()*/


/*async function newPost() {

}*/