const genButton = document.getElementById("generate");
const userName = document.getElementById("userName");
const roundText = document.getElementById("round");
const scoreU =  document.getElementById("scoreU");
const scoreC =  document.getElementById("scoreC");
let round = 0;
let name = '';
let sumU = 0, sumC = 0;
let randomKey = 0;
const cardsMap = new Map([
    ["clubs", new Map([
        [6, "./cards/6clubs.png"],
        [7, "./cards/7clubs.png"],
        [8, "./cards/8clubs.png"],
        [9, "./cards/9clubs.png"],
        [10, "./cards/10clubs.png"],
        [11, "./cards/aceclubs.png"],
        [2, "./cards/jackclubs.png"],
        [3, "./cards/queenclubs.png"],
        [4, "./cards/kingclubs.png"]
    ])],
    ["diamonds", new Map([
        [6, "./cards/6diamonds.png"],
        [7, "./cards/7diamonds.png"],
        [8, "./cards/8diamonds.png"],
        [9, "./cards/9diamonds.png"],
        [10, "./cards/10diamonds.png"],
        [11, "./cards/acediamonds.png"],
        [2, "./cards/jackdiamonds.png"],
        [3, "./cards/queendiamonds.png"],
        [4, "./cards/kingdiamonds.png"]
    ])],
    ["hearts", new Map([
        [6, "./cards/6hearts.png"],
        [7, "./cards/7hearts.png"],
        [8, "./cards/8hearts.png"],
        [9, "./cards/9hearts.png"],
        [10, "./cards/10hearts.png"],
        [11, "./cards/acehearts.png"],
        [2, "./cards/jackhearts.png"],
        [3, "./cards/queenhearts.png"],
        [4, "./cards/kinghearts.png"]
    ])],
    ["spades", new Map([
        [6, "./cards/6spades.png"],
        [7, "./cards/7spades.png"],
        [8, "./cards/8spades.png"],
        [9, "./cards/9spades.png"],
        [10, "./cards/10spades.png"],
        [11, "./cards/acespades.png"],
        [2, "./cards/jackspades.png"],
        [3, "./cards/queenspades.png"],
        [4, "./cards/kingspades.png"]
    ])]
]);
const suits = Array.from(cardsMap.keys()); 
const randomSuit = suits[Math.floor(Math.random() * suits.length)];
const selectMapSuit = cardsMap.get(randomSuit);
let imgU , imgC ;
function Start() {
    if (name != ''){
        if (round == 3){
            alert("It's the end of game!");
            genButton.disabled = true;
            if (sumU > sumC){alert("YOU WIN!");}
            else if (sumC > sumU){alert("YOU LOST!");}
        }
        else{
            generate("cardU", "user");
            sumU += randomKey;
            generate("cardC","computer");
            sumC +=randomKey;
            round ++;
            roundText.innerHTML = `${round}/ 3`;
            scoreU.innerHTML = sumU;
            scoreC.innerHTML = sumC;
            Highlight(scoreU,scoreC,sumU,sumC);
        }  
    } 
    else{
        name = prompt("Enter your name: ");
        if (name == '') {alert("ENTER NAME!");
        } else {userName.innerHTML = name; }
    }
}
function generate(cardId, type){
    const suitValues = Array.from(selectMapSuit.keys());
    const randomKeyIndex = Math.floor(Math.random() * suitValues.length); // Рандомний індекс
    randomKey = suitValues[randomKeyIndex]; 
    const cardPicture = selectMapSuit.get(randomKey); 
    const img = document.createElement("img");
    if (type === "user" && imgU) {
        imgU.remove();
    } else if (type === "computer" && imgC) {
        imgC.remove();
    }
    img.src = cardPicture;
    img.alt = `Card ${randomSuit} key ${randomKey} cardpicture ${cardPicture}`;
    const cardDiv = document.getElementById(cardId);
    cardDiv.appendChild(img);
    
    if (type === "user") {
        imgU = img;
    } else if (type === "computer") {
        imgC = img;
    }
}
function Highlight(inputU, inputC, numU, numC){
    if (numU > numC){
        inputC.style.backgroundColor = "rgba(234, 186, 186, 0.7)";    
        inputU.style.backgroundColor = "rgba(181, 233, 181, 0.7)";
    }else if (numU < numC){
        inputU.style.backgroundColor = "rgba(234, 186, 186, 0.7)";    
        inputC.style.backgroundColor = "rgba(181, 233, 181, 0.7)";    
    }     
}

