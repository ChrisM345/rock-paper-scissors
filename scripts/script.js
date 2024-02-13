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
    
    if (playerSelection == computerSelection){
        console.log("Tie! You both picked " + playerSelection);
        return 'tie';
    }
    if (playerSelection == 'Rock' && computerSelection == 'Scissors'){
        console.log("You Win! " + playerSelection + " beats " + computerSelection);
        return 1;
    }
    if (playerSelection == 'Paper' && computerSelection == 'Rock'){
        console.log("You Win! " + playerSelection + " beats " + computerSelection);
        return 1;
    }
    if (playerSelection == 'Scissors' && computerSelection == 'Paper'){
        console.log("You Win! " + playerSelection + " beats " +computerSelection);
        return 1;
    }
    console.log("You Lose! " + playerSelection + " loses to " + computerSelection);
    return 0;
}

function playGame(){
    playerRoundsWon = 0;
    computerRoundsWon = 0;
    for (let i = 0; i < 5; i++){
        playerChoice = prompt("Rock, Paper, or Scissors?");
        playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();
        while (playerChoice != 'Rock' && playerChoice != "Paper" && playerChoice != "Scissors"){
            playerChoice = prompt("Incorrect choice. Rock, Paper, or Scissors?")
            playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();
        }

        result = playRound(playerChoice, getComputerChoice())
        switch(result){
            case 'tie':
                break;
            case 1:
                playerRoundsWon++;
                break;
            case 0:
                computerRoundsWon++;
                break;
        }
    }
    if (playerRoundsWon == computerRoundsWon) {winner = 'Final Result: A Tie!'}
    else if (playerRoundsWon > computerRoundsWon) {winner = 'Final Result: You Win!'}
    else {winner = 'Final Result: You Lose!'}

    console.log(`You won ${playerRoundsWon} rounds and the computer won ${computerRoundsWon}. ${winner}`)
}

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