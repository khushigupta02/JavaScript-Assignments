let cards = [
    {
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.etsystatic.com%2Fil%2F40d440%2F1019735565%2Fil_570xN.1019735565_jykf.jpg%3Fversion%3D0&f=1&nofb=1",
        value: 1,
        status: "closed"
    },
    {
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.etsystatic.com%2Fil%2F40d440%2F1019735565%2Fil_570xN.1019735565_jykf.jpg%3Fversion%3D0&f=1&nofb=1",
        value: 1,
        status: "closed"
    },
    {
        image: "https://nerdreactor.com/wp-content/uploads/2015/01/10891735_1199437380083856_5125518678902682432_n.jpg", // Green Latern 
        value: 2,
        status: "closed"
    },
    {
        image: "https://nerdreactor.com/wp-content/uploads/2015/01/10891735_1199437380083856_5125518678902682432_n.jpg", // Green Latern 
        value: 2,
        status: "closed"
    },
    {
        image: "https://quotesboxes.com/wp-content/uploads/2019/10/Joker-Quotes-Joker-new-t-shirt-2019-Joaquin-Phoenix-Joker.jpg", // Joker
        value: 3,
        status: "closed"
    },
    {
        image: "https://quotesboxes.com/wp-content/uploads/2019/10/Joker-Quotes-Joker-new-t-shirt-2019-Joaquin-Phoenix-Joker.jpg", // Joker
        value: 3,
        status: "closed"
    },
    {
        image: "https://nerdreactor.com/wp-content/uploads/2019/04/nightwing-800x480.jpeg", // Night Wing
        value: 4,
        status: "closed"
    },
    {
        image: "https://nerdreactor.com/wp-content/uploads/2019/04/nightwing-800x480.jpeg", // Night Wing
        value: 4,
        status: "closed"
    },
    {
        image: "https://bbts1.azureedge.net/images/p/full/2018/08/d31a3692-3845-47f6-810d-de678b6b9667.jpg", // Doomsday
        value: 5,
        status: "closed"
    },
    {
        image: "https://bbts1.azureedge.net/images/p/full/2018/08/d31a3692-3845-47f6-810d-de678b6b9667.jpg", // Doomsday
        value: 5,
        status: "closed"
    }
]

// Shuffling algorithm.

for (let i=cards.length-1; i>=0; i--){
    let j = Math.floor(Math.random()*(i+1));
    let temp = cards[i];
    cards[i] = cards[j];
    cards[j] = temp;
}

// console.log(cards);

// Making the cards appear on the screen.

displayCards = (cards) => {
    let img_tag = "";

    for (let i=0; i<cards.length; i++) {
        img_tag += `<div class="card" style="background-image: url('${cards[i].image}')">
                    <div class="overlay ${cards[i].status}" onclick="open_cards(${i});"></div>
                    </div>\n`
    }
    document.getElementById("cards").innerHTML = img_tag;
}

displayCards(cards);

// Game Logic

let flag=0, val1=null, val2=null, score = 0;

open_cards = (index) => {
    cards[index].status = "opened";
    // card[index];
    displayCards(cards);
    if (flag === 0){
        val1 = cards[index].value;
        flag = 1;
    } else if (flag === 1){
        val2 = cards[index].value;
    
        if (val1 === val2){
            score++;
            document.getElementById("score").innerText = score;
            // alert("You WIN!!");
            val1 = val2 = null;
            flag = 0;
        } else {
            alert("Game Over!!");
            location.reload();
        }
    }
}