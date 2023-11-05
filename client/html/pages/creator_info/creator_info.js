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
    let response = await fetch(`http://localhost:3000/api/creators/${creatorId}`);
    let creatorInfo = await response.json();
    fillCreatorInfo(creatorInfo);
    fillCreatorsNFTs(creatorInfo.nfts);
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

function fillCreatorsNFTs(nfts){
    nfts.forEach(element => {
    let card = document.createElement("div");
    let card_topside = document.createElement("div");
    card_topside.className = "topside";
    let card_topside_img = document.createElement("img");
    card_topside_img.src = `../../../../${element.imgPath}`;
    console.log(card_topside_img.src);
    let card_bottomside = document.createElement("div");
    card_bottomside.className = "bottomside";
    let card_bottomside_h3 = document.createElement("h3");
    card_bottomside_h3.textContent = element.name;
    let card_bottomside_div1 = document.createElement("div");
    let card_bottomside_div1_price = document.createElement("p");
    let card_bottomside_div2 = document.createElement("div");
    let card_bottomside_div2_highestBid = document.createElement("p");
    nftCards.append(card);
    card.append(card_topside);
    card_topside.append(card_topside_img);
    card.append(card_bottomside);
    card_bottomside.append(card_bottomside_h3);
    });
}

getCreatorInfo();