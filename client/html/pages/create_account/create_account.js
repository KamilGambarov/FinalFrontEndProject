let usernameInput = document.getElementById("usernameInput");
let emailInput = document.getElementById("emailInput");
let passwordInput = document.getElementById("passwordInput");
let confirmInput = document.getElementById("confirmInput");

let validationExc = document.createElement("span");

let regUsername = new RegExp("^[a-zA-Z0-9_-]{4,16}$");
let regEmail = new RegExp("^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$");
let regPass = new RegExp("^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$");

let loginBtn = document.querySelector(".rightside_navbar .primaryBtn");

let regitserBtn = document.querySelector(".rightside_content .primaryBtn");

regitserBtn.addEventListener("click", ()=>{
    validationExc.textContent = "";
    if(regUsername.test(usernameInput.value) && regEmail.test(emailInput.value) && regPass.test(passwordInput.value) && passwordInput.value == confirmInput.value){
        let user = {
            username: `${usernameInput.value}`,
            email: `${emailInput.value}`,
            password: `${passwordInput.value}`
        }
        createAccount(user);
    }
    else{
    if(!regUsername.test(usernameInput.value)){
        validationExc.textContent = "Incorrect format of username";
        usernameInput.after(validationExc);
    }
    if(!regEmail.test(emailInput.value)){
        validationExc.textContent = "Incorrect format of email";
        emailInput.after(validationExc);
    }
    if(!regPass.test(passwordInput.value)){
        validationExc.textContent = "Password must consist at least 1 uppercase, 1 lowercase word 1 digit and 1 special symbol";
        passwordInput.after(validationExc);
    }
    else if(passwordInput.value != confirmInput.value){
        validationExc.textContent = "Passwords must be same";
        confirmInput.after(validationExc);
    }
   }
})

async function createAccount(user){
    let response = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        headers: {
            "CONTENT-TYPE": "application/json",
        },
        body: JSON.stringify(user),
    })
    if(response.status === 200){
        usernameInput.value = "";
        emailInput.value = "";
        passwordInput.value = "";
        confirmInput.value = "";
        Toastify({
            text: "User Created",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                color: "white",
                background: "green"
            },
            onClick: function(){} // Callback after click
          }).showToast();
    }else{
        let data = await response.json();
        Toastify({
            text: data.error,
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                color: "white",
                background: "red"
            },
            onClick: function(){} // Callback after click
          }).showToast();
    }
}

loginBtn.addEventListener("click", ()=>{
    window.open("http://127.0.0.1:5500/client/html/pages/login/login.html", "_self")
})