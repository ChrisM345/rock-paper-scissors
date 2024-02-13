let playerRoundsWon = 0;
let computerRoundsWon = 0;
let ties = 0;

function getComputerChoice(){
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

function playRound(playerSelection, computerSelection){
    const pSelect = document.querySelector('.pChoice');
    const cSelect = document.querySelector('.cChoice');
    const pText = "Player Choice: ";
    const cText = "Computer Choice: ";
    pSelect.innerText = pText + playerSelection;
    cSelect.innerText = cText + computerSelection;
    resultText = document.querySelector('.result-text');
    pWins = document.querySelector('.pWins');
    cWins = document.querySelector('.cWins');
    tiesSection = document.querySelector('.ties');
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
};


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