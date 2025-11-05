const gameboardObject = (function createGameboardObject(){
    const gameboard = ['X','X','X','O','X','X','X','O','O'];
    return { gameboard }
})();

console.log(gameboardObject.gameboard);