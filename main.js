const gameboardObject = (function (){
    const gameboard = [];
    return { gameboard }
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
        const div = document.createElement("div");
        div.textContent = `Congratulations ${winner}, YOU WON!`;
        const body = document.querySelector("body");
        body.appendChild(div);
    }

    const addMarkerToScreen = function(){  
        let counter = 1;
        const boxes = document.querySelectorAll(".container > div");
        boxes.forEach((box) => {
            box.addEventListener("click", () => {
                if (box.textContent){
                    alert('place already taken, chose another place');
                    return;
                }
                if (counter % 2 == 0){
                    box.textContent = "O";
                    counter++;
                    PlayerInputObject = createInputObject(box.classList.value, PlayerTwo.name, PlayerTwo.marker);
                    gameboardObject.gameboard.push(PlayerInputObject);
                    checkForWin(playerOne);
                    checkForWin(PlayerTwo);
                } else {
                    box.textContent = "X";
                    counter++;
                    PlayerInputObject = createInputObject(box.classList.value, playerOne.name, playerOne.marker);
                    gameboardObject.gameboard.push(PlayerInputObject);
                    checkForWin(playerOne);
                    checkForWin(PlayerTwo);       
                }    
            })
        })   
    }

    return { renderContent, winnerText, addMarkerToScreen };
})();

function createPlayer(name, marker){
    return { name , marker }
}

const playerOne = createPlayer('hicham', 'X');
const PlayerTwo = createPlayer('amine', 'O');

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
        return player.name;
    } if (found1 && found4 && found7 || found2 && found5 && found8 || found3 && found6 && found9){
        displayController.winnerText(player.name);     
        return player.name;
    } if (found1 && found5 && found9 || found3 && found5 && found7){
        displayController.winnerText(player.name);   
        return player.name;
    } 
}

function checkMove(PlayerInput, playername){
    if (playername === 'playerone') {
        if (gameboardObject.gameboard.some(e => e.choice === PlayerInput)) {
            console.log(`this move was already done. ${PlayerInput}`);
        } else {
            PlayerInputObject = createInputObject(PlayerInput, playerOne.name, playerOne.marker);
            gameboardObject.gameboard.push(PlayerInputObject);
        }
    } else {
        if (gameboardObject.gameboard.some(e => e.choice === PlayerInput)) {
            console.log(`this move was already done. ${PlayerInput}`);
        } else {
            PlayerInputObject = createInputObject(PlayerInput, PlayerTwo.name, PlayerTwo.marker);
            gameboardObject.gameboard.push(PlayerInputObject);
        }
    }
}

function gameFlowController(){

let PlayerOneInput = 'topleft';
checkMove(PlayerOneInput,'playerone')

let PlayerTwoInput = 'topright';
checkMove(PlayerTwoInput);

PlayerOneInput = 'middleleft';
checkMove(PlayerOneInput,'playerone');

PlayerTwoInput = 'middleright';
checkMove(PlayerTwoInput);

//third move check for win now
PlayerOneInput = 'topmiddle';
checkMove(PlayerOneInput,'playerone');
let playerOneWins = checkForWin(playerOne);
if (playerOneWins){
    return playerOneWins;
} 

PlayerTwoInput = 'center';
checkMove(PlayerTwoInput);
let playerTwoWins = checkForWin(PlayerTwo);
if (playerTwoWins) {
    return playerTwoWins;
}

PlayerOneInput = 'bottommiddle';
checkMove(PlayerOneInput,'playerone');
playerOneWins = checkForWin(playerOne);
if (playerOneWins){
    return playerOneWins;
} 

PlayerTwoInput = 'bottomright';
checkMove(PlayerTwoInput);
playerTwoWins = checkForWin(PlayerTwo);
if (playerTwoWins) {
    return playerTwoWins;
}

PlayerOneInput = 'bottomleft';
checkMove(PlayerOneInput,'playerone');
playerOneWins = checkForWin(playerOne);
if (playerOneWins){
    return playerOneWins;
} 
}

// const winner = gameFlowController();
// displayController.renderContent(gameboardObject.gameboard), displayController.winnerText(winner);

displayController.addMarkerToScreen();




