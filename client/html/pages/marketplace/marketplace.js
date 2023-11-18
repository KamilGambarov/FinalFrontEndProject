let nftCards = document.querySelector(".cards");
let moreBtn = document.querySelector(".section5_content .primaryBtn");
let searchInput = document.querySelector(".content .container input");
let spinner1 = document.querySelector(".content .spinner");
let spinner2 = document.querySelector(".section5_content .spinner");
let spinner3 = document.querySelector(".cards .big_spinner");


getNFTs(6);

let id=0;
searchInput.addEventListener("keyup", (e)=>{
    spinner1.style.display = "initial";
    clearTimeout(id);
    id = setTimeout(()=>{
        nftCards.innerHTML = "";
        getNFTs(6, 0, searchInput.value.trim());
    }, 500)
})

moreBtn.addEventListener("click", ()=>{
    spinner2.style.display = "initial";
    if(searchInput.value == ""){
        getNFTs(6,nftCards.children.length);
    }
    else{
        getNFTs(3,nftCards.children.length,searchInput.value);
    }
})

async function getNFTs(pageSize, skip=0, searchString=""){
    moreBtn.disabled = true;
    spinner3.style.display = "initial";
    let response = await fetch("https://finalfrontendproject.onrender.com/api/nfts", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            skip: skip,
            pageSize: pageSize,
            searchStr: searchString,
        })
    })
    spinner1.style.display = "none";
    spinner2.style.display = "none";
    spinner3.style.display = "none";

    let data = await response.json();
    fillNFTs(data);
    moreBtn.disabled = false;
    if(!data.hasMore){
        moreBtn.style.display = "none";
    }
    else{
        moreBtn.style.display = "initial";

    }
}

function fillNFTs(data){
    data.nfts.forEach(element => {
    let card = document.createElement("div");
    let card_topside = document.createElement("div");
    card_topside.className = "topside";
    let card_topside_img = document.createElement("img");
    card_topside_img.src = `../../../../${element.imgPath}`
    let card_bottomside = document.createElement("div");
    card_bottomside.className = "bottomside";
    let card_bottomside_h3 = document.createElement("h3"); 
    card_bottomside_h3.textContent = element.name;  
    let card_bottomside_div1 = document.createElement("div");
    let card_bottomside_div1_img = document.createElement("img");
    card_bottomside_div1_img.src = `../../../../${element.creator.profileImgPath}`
    let card_bottomside_div1_p = document.createElement("p");
    card_bottomside_div1_p.textContent = element.creator.name;
    let card_bottomside_div2 = document.createElement("div");
    let card_bottomside_div2_div1 = document.createElement("div");
    let card_bottomside_div2_div2 = document.createElement("div");
    let card_bottomside_div2_div1_price = document.createElement("p");
    card_bottomside_div2_div1_price.textContent = "Price";
    let card_bottomside_div2_div1_price_value = document.createElement("p");
    card_bottomside_div2_div1_price_value.textContent = element.creator.totalSale.value + " " + element.creator.totalSale.currency;
    let card_bottomside_div2_div2_highestBid = document.createElement("p");
    card_bottomside_div2_div2_highestBid.textContent = "Highest Bid";
    let card_bottomside_div2_div2_highestBid_value = document.createElement("p");
    card_bottomside_div2_div2_highestBid_value.textContent = element.highestBid.value + " " + element.highestBid.currency;

    nftCards.append(card);
    card.append(card_topside);
    card_topside.append(card_topside_img);
    card.append(card_bottomside);
    card_bottomside.append(card_bottomside_h3);
    card_bottomside.append(card_bottomside_div1);
    card_bottomside.append(card_bottomside_div2);
    card_bottomside_div1.append(card_bottomside_div1_img);
    card_bottomside_div1.append(card_bottomside_div1_p);
    card_bottomside_div2.append(card_bottomside_div2_div1);
    card_bottomside_div2.append(card_bottomside_div2_div2); 
    card_bottomside_div2_div1.append(card_bottomside_div2_div1_price);
    card_bottomside_div2_div1.append(card_bottomside_div2_div1_price_value);
    card_bottomside_div2_div2.append(card_bottomside_div2_div2_highestBid);
    card_bottomside_div2_div2.append(card_bottomside_div2_div2_highestBid_value);
    });
}


