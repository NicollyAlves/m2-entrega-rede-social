import { Render } from "./render.js"

export class ModalPost {
    
    static async modalPost() {
        const modal = document.getElementById("modalPost")
        modal.classList.toggle("hidd")
        //modal.style.animation = "down 5s ease"
    }
    
    static async closeModal() {
        const modal = document.getElementById("modalPost")
        modal.classList.add("hidd")
    }
}