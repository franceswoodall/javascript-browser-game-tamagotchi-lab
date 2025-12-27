/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/

const state = {
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
    updateStates();
    checkGameOver(); 
    render(); 
}; 

const render = () => {
    boredomStatEl.textContent = state.boredom; 
    hungerStatEl.textContent = state.hunger; 
    sleepinessStatEl.textContent = state.sleepiness; 
    if (gameOver === true) {
        clearInterval(timer); 
    }
}; 
render(); 


const getRandomNumber = () => Math.floor(Math.random() * 4);

const updateStates = () => {
    for (let key in state) {
        state[key] += getRandomNumber(); 
    }
}; 

init(); 

const checkGameOver = () => {
    for (let key in state) {
        if (state[key] >=10) {
            gameOver = true;
        }
    }
};
/*----------------------------- Event Listeners -----------------------------*/


