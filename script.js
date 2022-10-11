let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts")




form.addEventListener("submit", (e) =>{
    e.preventDefault()

    formValidation()
})


const formValidation = () => {
    if(input.value === ""){
        msg.textContent ="No Input, Please Write Something"
    }else{
        msg.textContent = "There an Input go on"
        msg.style.color = "green"
        acceptData()
    }
}

let data = {}

const acceptData = () => {
    data["text"] = input.value
    createPost()
    console.log(data)
}

let createPost = () => {
    posts.innerHTML += `
<div>
     <p>${data.text}</p>
        <span class="options">
            <i onclick="editPost(this)" class="fas fa-edit"></i>
            <i onclick="deletePost(this)" class="fas fa-trash-alt"></i>
        </span>
</div>
    `;
    input.value = ""
}

let deletePost = (e) => {
    e.parentElement.parentElement.remove()
}

let editPost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove() ;
}