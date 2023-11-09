let signUpBtn = document.querySelector(".rightside_navbar .primaryBtn");
let subscribeBtn = document.querySelector(".footer_rightside .primaryBtn");
let subscribeInput = document.getElementById("subscribe_footer");
let regEmail = new RegExp("^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$");


signUpBtn.addEventListener("click",()=>{
    window.open("http://127.0.0.1:5500/client/html/pages/create_account/create_account.html")
})

subscribeBtn.addEventListener("click",()=>{
    if(regEmail.test(subscribeInput.value)){
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


    
    

