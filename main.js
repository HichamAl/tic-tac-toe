const gameboardObject = (function createGameboardObject(){
    const gameboard = ['X','X','X','O','X','X','X','O','O'];
    return { gameboard }
})();

console.log(`This is the gameboard: ${gameboardObject.gameboard}`);

function createPlayer(name, icon){
    return { name , icon }
}

const user1 = createPlayer('hicham', 'X');
const user2 = createPlayer('amine', 'O');
console.log(`All players: Player1: ${user1.name} with icon ${user1.icon}, Player2: ${user2.name} with icon ${user2.icon}.`);


function game(user1, user2){
    // deze functie beheert de flow van de game

    // als een van de 8 manieren om te winnen in boter kaas en eieren dan einde ronde

    // of gelijkspel, als niemand heeft gewonnen en er geen plekken meer over zijn 

}