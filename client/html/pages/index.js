let signUpBtn = document.querySelector(".rightside_navbar .primaryBtn");
let subscribeBtn = document.querySelector(".footer_rightside .primaryBtn");
let subscribeInput = document.getElementById("subscribe_footer");
let regexEmail = new RegExp("^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$");
let nftBtn = document.querySelector(".navbar .leftside_navbar");
let marketplaceBtn = document.querySelector(".navbar .rightside_navbar .marketplace");
let burgerBtn = document.querySelector(".navbar .burgerBtn")
let sidebar = document.querySelector(".rightside_navbar>div:last-child");
let sidebar_signUp = document.querySelector(".rightside_navbar>div:last-child .primaryBtn");


signUpBtn.addEventListener("click",()=>{
    window.open("https://final-front-end-project.vercel.app/client/html/pages/create_account/create_account.html")
})

sidebar_signUp.addEventListener("click",()=>{
    window.open("https://final-front-end-project.vercel.app/client/html/pages/create_account/create_account.html")
})

subscribeBtn.addEventListener("click",()=>{
    if(regexEmail.test(subscribeInput.value)){
        Toastify({
            text: "Success subscribe",
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
          subscribeInput.value = "";
    }
    else{
        Toastify({
            text: "Error subscribe",
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
})

nftBtn.addEventListener("click", ()=>{
    window.open("https://final-front-end-project.vercel.app/client/html/pages/home/home.html", "_self")
})

marketplaceBtn.addEventListener("click", ()=>{
    window.open("https://final-front-end-project.vercel.app/client/html/pages/marketplace/marketplace.html");
})


burgerBtn.addEventListener("click", (e)=>{
    e.stopPropagation();
    sidebar.className = "sidebar_open";
})


window.addEventListener("click", (e)=>{
    e.stopPropagation();
    sidebar.className = "sidebar_closed";
})

sidebar.addEventListener("click", (e)=>{
    e.stopPropagation();
})
    

