let playerRoundsWon = 0;
let computerRoundsWon = 0;
let ties = 0;

function getComputerChoice(){
    //Use Math.random to get three possible options
    number = Math.floor(Math.random() * 3);
    switch(number){
        case 0:
            return "Rock";
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
        default:
            return "Incorrect value for computer choice";
    }
}

function resetGame() {
    console.log("resetting")
    for (const button of buttons){
        button.disabled = false;
    }
    const gameEndedSection = document.querySelector('.gameEndedSection');
    gameEndedSection.remove();
    playerRoundsWon = 0;
    computerRoundsWon = 0;
    ties = 0;
    document.querySelector('.pWins').innerText = playerRoundsWon;
    document.querySelector('.cWins').innerText = computerRoundsWon;
    document.querySelector('.ties').innerText = ties;
    document.querySelector('.result-text').innerText = 'Result Pending:';
    document.querySelector('.pChoice').innerText = 'Player Choice:';
    document.querySelector('.cChoice').innerText = 'Computer Choice:';
}
function gameEnded(){
    console.log("game ended!")
    //Disable all buttons as the game has ended
    for (const button of buttons){
        button.disabled = true;
    }

    //Game has ended message. Add this information in a new div to prepare for reset
    const gameEndedSection = document.createElement('div');
    gameEndedSection.className = 'gameEndedSection';
    const buttonSection = document.querySelector('.buttons');
    const para = document.createElement('p');
    para.innerText = resultText.innerText + ' The game has ended! Would you like to play again?';
    gameEndedSection.appendChild(para);

    //Add reset button asking player if they want to play again
    reset = document.createElement('button');
    reset.className = 'button';
    reset.innerText = 'Reset'
    gameEndedSection.append(reset);
    buttonSection.appendChild(gameEndedSection);
    reset.addEventListener('click', () => {
        resetGame();
    })
}
function playRound(playerSelection, computerSelection){
    //Select html sections for updating player and computer choice
    const pSelect = document.querySelector('.pChoice');
    const cSelect = document.querySelector('.cChoice');
    const pText = "Player Choice: ";
    const cText = "Computer Choice: ";

    pSelect.innerText = pText + playerSelection;
    cSelect.innerText = cText + computerSelection;

    //Select results sections to update them
    resultText = document.querySelector('.result-text');
    pWins = document.querySelector('.pWins');
    cWins = document.querySelector('.cWins');
    tiesSection = document.querySelector('.ties');

    //Logic for rock-paper-scissors
    if (playerSelection == computerSelection){
        ties++;
        resultText.innerText = `Result: It's a tie!`
        tiesSection.innerText = ties;
    }
    else if (playerSelection == 'Rock' && computerSelection == 'Scissors'){
        playerRoundsWon++;
        resultText.innerText = `Result: You Win!`;
        pWins.innerText = playerRoundsWon;
    }
    else if (playerSelection == 'Paper' && computerSelection == 'Rock'){
        playerRoundsWon++;
        resultText.innerText = `Result: You Win!`;
        pWins.innerText = playerRoundsWon;
    }
    else if (playerSelection == 'Scissors' && computerSelection == 'Paper'){
        playerRoundsWon++;
        resultText.innerText = `Result: You Win!`;
        pWins.innerText = playerRoundsWon;
    } else {
        computerRoundsWon++;
        resultText.innerText = `Result: You Lose!`;
        cWins.innerText = computerRoundsWon;
    }
    if (playerRoundsWon == 5 || computerRoundsWon == 5){
        gameEnded();
    }
};


//Attach event listeners to the buttons for rock, paper, and scissors.
const rock = document.querySelector('.rock');
rock.addEventListener('click', (e) => {
    console.log("rock");
    playRound(e.target.innerText, getComputerChoice())
})

const paper = document.querySelector('.paper');
paper.addEventListener('click', (e) =>{
    console.log('paper')
    playRound(e.target.innerText, getComputerChoice())
})

const scissors = document.querySelector('.scissors');
scissors.addEventListener('click', (e) => {
    console.log('scissors')
    playRound(e.target.innerText, getComputerChoice());
})

const buttons = document.getElementsByTagName('button');