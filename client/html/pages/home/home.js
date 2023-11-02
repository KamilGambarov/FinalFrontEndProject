let section3_cards = document.querySelector(".section3_content>.cards")


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
        console.log(creator_img);
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
    });
}

getCreators();
