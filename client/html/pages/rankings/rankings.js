let ranking_cards = document.querySelector(".rankings_cards");

getRankings();

async function getRankings (){
    let response = await fetch("http://127.0.0.1:3000/api/creators");
    let rankings = await response.json();
    fillRankings(rankings);
}

function fillRankings(rankings){
    rankings.forEach(element => {
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
        ranking_volume.textContent = element.followers;
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