const gameboardObject = (function createGameboardObject(){
    const gameboard = [];
    return { gameboard }
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

function checkMove(PlayerInput, counter){
    // 2nd move is 2nd player
    if (counter % 2 === 0){
        if (gameboardObject.gameboard.some(e => e.choice === PlayerInput) ){
        console.log(`${PlayerInput} was found in the gameboard, which means this move was already done.`);
        // PlayerInput = 'topright';
        // PlayerInputObject = createInputObject(PlayerInput, PlayerTwo.name, PlayerTwo.marker);
        // gameboardObject.gameboard.push(PlayerInputObject);
}       else {
            PlayerInputObject = createInputObject(PlayerInput, PlayerTwo.name, PlayerTwo.marker);
            gameboardObject.gameboard.push(PlayerInputObject);
}
    } else {
        if (gameboardObject.gameboard.some(e => e.choice === PlayerInput) ){
        console.log(`${PlayerInput} was found in the gameboard, which means this move was already done.`);
        PlayerInput = 'topright';
        PlayerInputObject = createInputObject(PlayerInput, playerOne.name, playerOne.marker);
        gameboardObject.gameboard.push(PlayerInputObject);
}       else {
            PlayerInputObject = createInputObject(PlayerInput, playerOne.name, playerOne.marker);
            gameboardObject.gameboard.push(PlayerInputObject);
}
    }   
}

function gameFlowController(){
}

let counter = 1;
let PlayerInput = 'topleft';
let PlayerInputObject = createInputObject(PlayerInput, playerOne.name, playerOne.marker);
gameboardObject.gameboard.push(PlayerInputObject);

++counter;
console.log(counter);
PlayerInput = 'topright';
checkMove(PlayerInput, counter);

++counter;
PlayerInput = 'middleleft';
checkMove(PlayerInput, counter);

++counter
PlayerInput = 'middleright';
checkMove(PlayerInput, counter);

//third move check for win now
++counter;
PlayerInput = 'bottomleft';
checkMove(PlayerInput, counter);

function checkForWin(){

}






