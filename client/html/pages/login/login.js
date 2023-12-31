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
    let response = await fetch("https://finalfrontendproject.onrender.com/api/login", {
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
          window.open("https://final-front-end-project.vercel.app/client/html/pages/home/home.html", "_self")
    }

}

let signUpBtn = document.querySelector(".rightside_navbar .primaryBtn");

signUpBtn.addEventListener("click",()=>{
    window.open("https://final-front-end-project.vercel.app/client/html/pages/create_account/create_account.html", "_self")
})