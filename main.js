const gameboardObject = (function createGameboardObject(){
    const gameboard = [];
    return { gameboard }
})();

function createPlayer(name, marker){
    return { name , marker }
}

const playerOne = createPlayer('hicham', 'X');
const PlayerTwo = createPlayer('amine', 'O');

function gameFlowController(){
}

function createInputObject(input,playername, marker){
    let playerName = playername;
    let Marker = marker;
    let choice = input;
    return { playerName, Marker, choice }
}

let PlayerInput = 'topleft';
let PlayerInputObject = createInputObject(PlayerInput, playerOne.name, playerOne.marker);
gameboardObject.gameboard.push(PlayerInputObject);

PlayerInput = 'topleft';
// check if a move was already done on the gameboard
if (gameboardObject.gameboard.some(e => e.choice === PlayerInput) ){
    console.log(`${PlayerInput} was found in the gameboard, which means this move was already done.`);
    PlayerInput = 'topright';
    PlayerInputObject = createInputObject(PlayerInput, PlayerTwo.name, PlayerTwo.marker);
    gameboardObject.gameboard.push(PlayerInputObject);
} else {
    PlayerInputObject = createInputObject(PlayerInput, PlayerTwo.name, PlayerTwo.marker);
    gameboardObject.gameboard.push(PlayerInputObject);
}


