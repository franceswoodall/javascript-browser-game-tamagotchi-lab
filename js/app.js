/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/

const objState = {
    boredom: 0,
    hunger: 0, 
    sleepiness: 0, 
}

let timer; 

let gameOver = false;



/*------------------------ Cached Element References ------------------------*/

const boredomStatEl = document.getElementById('boredom-stat'); 
// console.log('testing boredom-stat', boredomStatEl); 

const hungerStatEl = document.getElementById('hunger-stat'); 
// console.log('testing hunger-stat', hungerStatEl); 

const sleepinessStatEl = document.getElementById('sleepiness-stat'); 
// console.log('testing sleep stat', sleepinessStatEl); 

const playBtnEl = document.getElementById('play'); 
// console.log('testing playBtn', playBtnEl);

const feedBtnEl = document.getElementById('feed'); 
// console.log('testing feedBtn', feedBtnEl); 

const sleepBtnEl = document.getElementById('sleep'); 
// console.log('testing sleepBtn', sleepBtnEl); 

const gameMessageEl = document.getElementById('game-state-wrapper'); 
// console.log('testing game message', gameMessageEl); 

const resetBtnEl = document.getElementById('restart'); 
// console.log('testing resetBtn', resetBtnEl);




/*-------------------------------- Functions --------------------------------*/

const init = () => {
    timer = setInterval(runGame, 2000); 
}; 

const runGame = () => {
    console.log('the game is running'); 
}; 

const render = () => {
}; 

/*----------------------------- Event Listeners -----------------------------*/


