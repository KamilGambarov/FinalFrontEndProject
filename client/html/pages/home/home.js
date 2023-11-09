let section3_cards = document.querySelector(".section3_content>.cards");
let subscribeInput_section = document.getElementById("subscribe_section");
let subscribeBtn_section = document.querySelector(".section8_content .rightside .primaryBtn");

async function getCreators (){
    let response = await fetch("http://127.0.0.1:3000/api/creators");
    let creators = await response.json();
    fillCreators(creators);
}

function fillCreators(data){
    data.forEach(element => {
        let card = document.createElement("div");
        let card_number = document.createElement("div");
        card_number.className = "number";
        let card_number_div = document.createElement("div");
        let card_number_text = document.createElement("p");
        card_number_text.textContent = element.id;
        let creator_img = document.createElement("img");
        creator_img.src = `../../../../${element.profileImgPath}`;
        let creator_name = document.createElement("h3");
        creator_name.textContent = element.name;
        let creator_value_currency = document.createElement("p");
        creator_value_currency.textContent = "Total sales: " + element.totalSale.value + " " + element.totalSale.currency

        section3_cards.append(card);
        card.append(card_number);
        card_number.append(card_number_div);
        card_number_div.append(card_number_text);
        card.append(creator_img)
        card.append(creator_name);
        card.append(creator_value_currency);

        creatorInfo(card, element);
    });
}

function creatorInfo (card, creator){
    card.addEventListener("click", ()=>{
        window.open(`http://127.0.0.1:5500/client/html/pages/creator_info/creator_info.html?creator_id=${creator.id}`);
    })
}

subscribeBtn_section.addEventListener("click", ()=>{
    if(regEmail.test(subscribeInput_section.value)){
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
          subscribeInput_section.value = "";
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

getCreators();
