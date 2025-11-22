const gameboardObject = (function (){
    const gameboard = [];
    let counter = 1;
    return { gameboard, counter };
})();

const PlayersObject = (function (){
    const players = [];
    return { players };
})();

const displayController = (function (){
    // displaycontroller Object IIFE
    const container = document.querySelector(".container");
    container.style.width = '456px';
    container.style.height = '456px';
    container.style.display = 'flex';
    container.style.flexWrap = 'wrap';

    for (let i = 0; i < 9; i++){
        const div = document.createElement("div");
        div.classList.add(`box${i}`);
        div.style.background = 'red';
        div.style.border = 'thin solid blue';
        div.style.width = '150px';
        div.style.height = '150px';
        container.appendChild(div);
    }

    const renderContent = function(a){
        for (let i = 0; i < 8; i++){
            let move = a[i].Marker;
            let choice = a[i].choice;

            if (choice === 'topleft'){
                container.children[0].textContent = move;
            } if (choice === 'topright'){
                container.children[2].textContent = move;
            } if (choice === 'topmiddle'){
                container.children[1].textContent = move;
            } if (choice === 'middleleft'){
                container.children[3].textContent = move;
            } if (choice === 'center'){
                container.children[4].textContent = move;
            } if (choice === 'middleright'){
                container.children[5].textContent = move;
            } if (choice === 'bottomleft'){
                container.children[6].textContent = move;
            } if (choice === 'bottommiddle'){
                container.children[7].textContent = move;
            } if (choice === 'bottomright'){
                container.children[8].textContent = move;
            } 
        }
    } 

    const winnerText = function(winner) {
        const GameOver = document.querySelector(".winner");
        if (GameOver){
            return;
        }
        const div = document.createElement("div");
        div.classList.add("winner");
        div.textContent = `Congratulations ${winner}, YOU WON!`;
        const body = document.querySelector("body");
        body.appendChild(div);
    }

    let boxClickHandler; 

    const addMarkerToScreen = function(playerOne,PlayerTwo){ 
        const boxes = document.querySelectorAll(".container > div");
        
        boxClickHandler = function(e){
            const box = e.target;
            if (box.textContent === "X" || box.textContent === "O"){
                    console.log(box.textContent);
                    alert('place already taken, chose another place');
                    return;
                }
                if (gameboardObject.counter % 2 == 0){
                    box.textContent = "O";
                    gameboardObject.counter++;
                    let PlayerInputObject = createInputObject(box.classList.value, PlayerTwo.name, PlayerTwo.marker);
                    gameboardObject.gameboard.push(PlayerInputObject);
                    checkForWin(playerOne);
                    checkForWin(PlayerTwo);
                    return;
                } else {
                    box.textContent = "X";
                    gameboardObject.counter++;
                    let PlayerInputObject = createInputObject(box.classList.value, playerOne.name, playerOne.marker);
                    gameboardObject.gameboard.push(PlayerInputObject);
                    checkForWin(playerOne);
                    checkForWin(PlayerTwo);
                    return;
                }    
        }
        boxes.forEach((box) => {
            box.addEventListener("click", boxClickHandler);
        })   
    }

    const removeEventListeners = function(){
        const boxes = document.querySelectorAll(".container > div");
        const GameOver = document.querySelector(".winner");
                if (GameOver){
                    boxes.forEach((box) => {
                        box.removeEventListener("click", boxClickHandler);
                    })
                    return;
                }
    }

    const addNamesToScreen = function(playerOne, PlayerTwo){
        const div = document.createElement("div");
        div.textContent = `PlayerOne = ${playerOne.name} , PlayerTwo = ${PlayerTwo.name}`;  
        const playerInfo = document.querySelector(".playerinfo");
        playerInfo.appendChild(div);
    }

    const resetScreen = function(){
        gameboardObject.counter = 1;

        // remove markers from gameboard UI
        const boxes = document.querySelectorAll(".container > div");
        boxes.forEach((box) => {
        box.textContent = null;
        })   

        removeEventListeners();

        gameboardObject.gameboard = [];

        // remove winnertext
        const winner = document.querySelector(".winner");
        winner.remove();

        //remove players info
        const playerInfo = document.querySelector(".playerinfo");
        playerInfo.firstElementChild.remove();
        return;
    }

    return { renderContent, winnerText, addMarkerToScreen, addNamesToScreen, resetScreen, removeEventListeners };
})();

function createPlayer(name, marker){
    return { name , marker }
}

function createInputObject(input,playername, marker){
    let playerName = playername;
    let Marker = marker;
    let choice = input;
    return { playerName, Marker, choice }
}

function checkForWin(player){
    const found1 = gameboardObject.gameboard.some(a => a.choice === 'box0' && a.playerName === player.name);
    const found2 = gameboardObject.gameboard.some(a => a.choice === 'box1' && a.playerName === player.name);
    const found3 = gameboardObject.gameboard.some(a => a.choice === 'box2' && a.playerName === player.name);
    const found4 = gameboardObject.gameboard.some(a => a.choice === 'box3' && a.playerName === player.name);
    const found5 = gameboardObject.gameboard.some(a => a.choice === 'box4' && a.playerName === player.name);
    const found6 = gameboardObject.gameboard.some(a => a.choice === 'box5' && a.playerName === player.name);
    const found7 = gameboardObject.gameboard.some(a => a.choice === 'box6' && a.playerName === player.name);
    const found8 = gameboardObject.gameboard.some(a => a.choice === 'box7' && a.playerName === player.name);
    const found9 = gameboardObject.gameboard.some(a => a.choice === 'box8' && a.playerName === player.name);

    if (found1 && found2 && found3 || found4 && found5 && found6 || found7 && found8 && found9){
        displayController.winnerText(player.name);    
        return;
    } if (found1 && found4 && found7 || found2 && found5 && found8 || found3 && found6 && found9){
        displayController.winnerText(player.name); 
        return;
    } if (found1 && found5 && found9 || found3 && found5 && found7){
        displayController.winnerText(player.name);    
        return;
    } 
}

function startGame(){
let playerOneName = prompt("Please enter the name for playerone");
let playerTwoName = prompt("Please enter the name for playertwo");

let playerOne = createPlayer(playerOneName, 'X');
let PlayerTwo = createPlayer(playerTwoName, 'O');

PlayersObject.players.push(playerOne, PlayerTwo);
// console.log(PlayersObject.players[PlayersObject.players.length -2]);

displayController.addNamesToScreen(PlayersObject.players[PlayersObject.players.length -2], PlayersObject.players[PlayersObject.players.length -1]);
displayController.addMarkerToScreen(PlayersObject.players[PlayersObject.players.length -2], PlayersObject.players[PlayersObject.players.length -1]);
}

const newGameButton = document.querySelector("#newgame");
newGameButton.addEventListener("click", function (e) {
    console.log("newgame button eventlistener works");
    displayController.resetScreen();
    startGame();
});

startGame();




