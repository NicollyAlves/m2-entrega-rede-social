import { Api } from "./api.js";
import { Render } from "./render.js";

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
}
renderPosts()