let ranking_cards = document.querySelector(".rankings_cards");
let changeBtn = document.querySelector(".rankings div:nth-child(4) span:nth-child(2)");
let nftSoldBtn = document.querySelector(".rankings div:nth-child(4) span:nth-child(3)");
let volumeBtn = document.querySelector(".rankings div:nth-child(4) span:nth-child(4)");
let clicked = 0;
let sortParam = 0;

nftSoldBtn.addEventListener("click", ()=>{
    clicked+=1;
    sortParam = 2;
    if(clicked%2 == 1){
        getSortedRankings();
    }
    else{
        getRankings();
    }
})

volumeBtn.addEventListener("click", ()=>{
    clicked+=1;
    sortParam = 3;
    if(clicked%2 == 1){
        getSortedRankings();
    }
    else{
        getRankings();
    }
})

changeBtn.addEventListener("click", ()=>{
    clicked+=1;
    sortParam = 1;
    if(clicked%2 == 1){
        getSortedRankings();
    }
    else{
        getRankings();
    }
})

getRankings();

async function getSortedRankings (){
    let response = await fetch("http://127.0.0.1:3000/api/creators");
    let rankings = await response.json();
    if(sortParam==1){
        let sortedRankings = rankings.sort((a,b)=>b.totalSale.value - a.totalSale.value);
        fillRankings(sortedRankings);
    }
    else if(sortParam==2){
        let sortedRankings = rankings.sort((a,b)=>b.nftSold - a.nftSold);
        fillRankings(sortedRankings);
    }
    else if(sortParam==3){
        let sortedRankings = rankings.sort((a,b)=>b.totalSale.value - a.totalSale.value);
        fillRankings(sortedRankings);
    }

}

async function getRankings (){
    let response = await fetch("http://127.0.0.1:3000/api/creators");
    let rankings = await response.json();
    fillRankings(rankings);
}

function fillRankings(object){
    ranking_cards.innerHTML = "";
    object.forEach(element => {
        let card = document.createElement("div");
        card.className = "card";
        let ranking_id = document.createElement("div");
        ranking_id.className = "number";
        let ranking_id_number = document.createElement("span");
        ranking_id_number.textContent = element.id; 
        let ranking_img = document.createElement("img");
        ranking_img.src = `../../../../${element.profileImgPath}`;
        let ranking_name = document.createElement("div");
        ranking_name.className = "artist_name";
        ranking_name.textContent = element.name;
        let ranking_change = document.createElement("div");
        ranking_change.className = "change";
        ranking_change.textContent = element.totalSale.value + " " + element.totalSale.currency;
        let ranking_NFTs = document.createElement("div");
        ranking_NFTs.className = "NFTs_sold";
        ranking_NFTs.textContent = element.nftSold;
        let ranking_volume = document.createElement("div");
        ranking_volume.className = "volume";
        ranking_volume.textContent = element.volume;
        let deleteBtn = document.createElement("button");
        deleteBtn.className = "primaryBtn";
        deleteBtn.textContent = "Delete";
        deleteBtn.style.width = "50px";
        deleteBtn.style.position = "absolute";
        deleteBtn.style.right = "10px";

        ranking_cards.append(card);
        card.append(ranking_id);
        ranking_id.append(ranking_id_number);
        card.append(ranking_img);
        card.append(ranking_name);
        card.append(ranking_change);
        card.append(ranking_NFTs);
        card.append(ranking_volume);
        card.append(deleteBtn);

        deleteBtn.addEventListener("click", ()=>{
            deleteCreator(element, card);
        })
  
    });
}


async function deleteCreator(ranking, card){
    if(confirm(`Are you sure to delete creator with id ${ranking.id}?`)){
        let response = fetch(`http://localhost:3000/api/creators/${ranking.id}`, {
            method: "DELETE",
        });
        if((await response).status == 200){
            card.remove();
        }
    }

}


