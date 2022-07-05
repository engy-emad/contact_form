const inputName = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelector(".error");
const errorEmail = document.querySelector("#error");
const errorMessage = document.querySelector(".error_message");
let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

console.log(errorNodes);
// validata data

function nameInput() {
    if (inputName.value.length < 1) {

        inputName.classList.add("error-border");
        errorNodes.innerText = "Name cannot be blank";

    } else {
        console.log("error");
        errorNodes.innerText = "";
        inputName.classList.remove("error-border");
    }
}

function enterEmail() {
    if (!email.value.match(mailformat)) {
        email.classList.add("error-border");
        console.log("error ddddff");
        errorEmail.innerText = "Invaild email address";
    } else if (email.value.match(mailformat)) {

        email.classList.remove("error-border");
        errorEmail.innerText = "";

    } else {
        console.log("error");
        errorEmail.innerText = "Invaild email address";
        email.classList.add("error-border");
    }


}


function enterMessage() {
    if (message.value.length < 10) {

        message.classList.add("error-border");
        errorMessage.innerText = "Please enter your message";
        message.classList.add("error-border");

    } else {

        errorMessage.innerText = "";
        message.classList.remove("error-border");
    }
}

function validateForm() {

    nameInput();
    enterEmail();
    enterMessage()
}