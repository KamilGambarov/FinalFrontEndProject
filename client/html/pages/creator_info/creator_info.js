let searchParameters = new URLSearchParams(window.location.search);
let creatorId = searchParameters.get("creator_id");
let creator_img = document.querySelector(".creator_img img");
let creator_name = document.querySelector(".left_content>h1");
let volume = document.querySelector(".stat1>p");
let sold_nft = document.querySelector(".stat2>p");
let followers = document.querySelector(".stat3>p");
let bio = document.querySelector(".bio>span");
let chainId = document.querySelector(".right_content .primaryBtn:first-child>span");
let nftCards = document.querySelector(".cards");




async function getCreatorInfo(){
    let response = await fetch(`https://finalfrontendproject.onrender.com/api/creators/${creatorId}`);
    let creatorInfo = await response.json();
    fillCreatorInfo(creatorInfo);
    fillCreatorsNFTs(creatorInfo);
    chainId.addEventListener("click", ()=>{
        navigator.clipboard.writeText(creatorInfo.chainId);
        Toastify({
            text: "Copied to clipboard",
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
    })
}

function fillCreatorInfo(creator){
    creator_img.src = `../../../../${creator.profileImgPath}`;
    creator_name.textContent = creator.name;
    volume.textContent = creator.volume;
    sold_nft.textContent = creator.nftSold;
    followers.textContent = creator.followers;
    bio.textContent = creator.bio;
    chainId.textContent = creator.chainId.substring(0,6)+ "..." + creator.chainId.substring(creator.chainId.length-4,creator.chainId.length);
}

function fillCreatorsNFTs(creator){
    creator.nfts.forEach(element => {
    let card = document.createElement("div");
    let card_topside = document.createElement("div");
    card_topside.className = "topside";
    let card_topside_img = document.createElement("img");
    card_topside_img.src = `../../../../${element.imgPath}`;
    let card_bottomside = document.createElement("div");
    card_bottomside.className = "bottomside";
    let card_bottomside_h3 = document.createElement("h3");
    card_bottomside_h3.textContent = element.name;
    let card_bottomside_div1 = document.createElement("div");
    let card_bottomside_div1_img = document.createElement("img");
    card_bottomside_div1_img.src = `../../../../${creator.profileImgPath}`;
    let card_bottomside_div1_p = document.createElement("p");
    card_bottomside_div1_p.textContent = creator.name;
    let card_bottomside_div2 = document.createElement("div");
    let card_bottomside_div2_div1 = document.createElement("div");
    let card_bottomside_div2_div2 = document.createElement("div");
    let card_bottomside_div2_div1_price = document.createElement("p");
    card_bottomside_div2_div1_price.textContent = "Price";
    let card_bottomside_div2_div1_price_value = document.createElement("p");
    card_bottomside_div2_div1_price_value = element.price.value + " " + element.price.currency;
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

getCreatorInfo();