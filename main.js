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
let PlayerInput = 'bottomleft';
let PlayerInputObject = createInputObject(PlayerInput, playerOne.name, playerOne.marker);
gameboardObject.gameboard.push(PlayerInputObject);

++counter;
console.log(counter);
PlayerInput = 'topright';
checkMove(PlayerInput, counter);

++counter;
PlayerInput = 'center';
checkMove(PlayerInput, counter);

++counter
PlayerInput = 'topmiddle';
checkMove(PlayerInput, counter);

//third move check for win now
++counter;
PlayerInput = 'bottomright';
checkMove(PlayerInput, counter);

++counter;
PlayerInput = 'topleft';
checkMove(PlayerInput, counter);

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
        console.log(`${player.name} wins`);
    } if (found1 && found4 && found7 || found2 && found5 && found8 || found3 && found6 && found9){
        console.log(`${player.name} wins`);
    } if (found1 && found5 && found9 || found3 && found5 && found7){
        console.log(`${player.name} wins`);
    } 
}
checkForWin(playerOne);
checkForWin(PlayerTwo);






