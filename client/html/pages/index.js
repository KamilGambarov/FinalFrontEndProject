let signUpBtn = document.querySelector(".rightside_navbar .primaryBtn");
let subscribeBtn = document.querySelector(".footer_rightside .primaryBtn");
let subscribeInput = document.getElementById("subscribe_footer");
let regexEmail = new RegExp("^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$");
let nftBtn = document.querySelector(".navbar .leftside_navbar");
let marketplaceBtn = document.querySelector(".navbar .rightside_navbar .marketplace");

signUpBtn.addEventListener("click",()=>{
    window.open("http://127.0.0.1:5500/client/html/pages/create_account/create_account.html")
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
    window.open("http://127.0.0.1:5500/client/html/pages/home/home.html", "_self")
})

marketplaceBtn.addEventListener("click", ()=>{
    window.open("http://127.0.0.1:5500/client/html/pages/marketplace/marketplace.html");
})



    
    

