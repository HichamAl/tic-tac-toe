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

    let counter = 1;
    for (let i = 0; i < 9; i++){
        const div = document.createElement("div");
        div.classList.add(`box${counter}`); 
        counter++;
        div.style.background = 'red';
        div.style.border = 'thin solid blue';
        div.style.width = '150px';
        div.style.height = '150px';
        container.appendChild(div);
    }

    const renderContent = (a) => a;
    return { renderContent }
})();

console.log(displayController.renderContent(gameboardObject.gameboard));

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
    const found1 = gameboardObject.gameboard.some(a => a.choice === 'topleft' && a.playerName === player.name);
    const found2 = gameboardObject.gameboard.some(a => a.choice === 'topmiddle' && a.playerName === player.name);
    const found3 = gameboardObject.gameboard.some(a => a.choice === 'topright' && a.playerName === player.name);
    const found4 = gameboardObject.gameboard.some(a => a.choice === 'middleleft' && a.playerName === player.name);
    const found5 = gameboardObject.gameboard.some(a => a.choice === 'center' && a.playerName === player.name);
    const found6 = gameboardObject.gameboard.some(a => a.choice === 'middleright' && a.playerName === player.name);
    const found7 = gameboardObject.gameboard.some(a => a.choice === 'bottomleft' && a.playerName === player.name);
    const found8 = gameboardObject.gameboard.some(a => a.choice === 'bottommiddle' && a.playerName === player.name);
    const found9 = gameboardObject.gameboard.some(a => a.choice === 'bottomright' && a.playerName === player.name);

    if (found1 && found2 && found3 || found4 && found5 && found6 || found7 && found8 && found9){
        return player.name;
    } if (found1 && found4 && found7 || found2 && found5 && found8 || found3 && found6 && found9){
        return player.name;
    } if (found1 && found5 && found9 || found3 && found5 && found7){
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

const winner = gameFlowController();
console.log(`winner is ${winner}`);
console.log(displayController.renderContent(gameboardObject.gameboard));








