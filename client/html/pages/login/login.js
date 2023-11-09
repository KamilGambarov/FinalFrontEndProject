let usernameInput = document.getElementById("usernameInput");
let passwordInput = document.getElementById("passwordInput");
let validationExc = document.createElement("span");

let loginBtn = document.querySelector(".rightside_content .primaryBtn");

loginBtn.addEventListener("click", ()=>{
    validationExc.textContent = "";
    let loginUser = {
        username: usernameInput.value,
        password: passwordInput.value
    }
    login(loginUser);
})

async function login (user){
    let response = await fetch("http://localhost:3000/api/login", {
        method: "post",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(user)
    })
    if(response.status != 200){
        validationExc.textContent = "User not found! Wrong email or password.";
        validationExc.style.color = "red";
        passwordInput.after(validationExc);
        Toastify({
            text: "Login Error",
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
    }else{
        usernameInput.value = "";
        passwordInput.value = "";
        Toastify({
            text: "Login Success",
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
    }

}

let signUpBtn = document.querySelector(".rightside_navbar .primaryBtn");

signUpBtn.addEventListener("click",()=>{
    window.open("http://127.0.0.1:5500/client/html/pages/create_account/create_account.html", "_self")
})