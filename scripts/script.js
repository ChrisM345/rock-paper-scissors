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
        return "Tie! You both picked " + playerSelection;
    }
    if (playerSelection == 'Rock' && computerSelection == 'Scissors'){
        return "You Win! " + playerSelection + " beats " + computerSelection;
    }
    if (playerSelection == 'Paper' && computerSelection == 'Rock'){
        return "You Win! " + playerSelection + " beats " + computerSelection;
    }
    if (playerSelection == 'Scissors' && computerSelection == 'Paper'){
        return "You Win! " + playerSelection + " beats " +computerSelection;
    }
    return "You Lose! " + playerSelection + " loses to " + computerSelection;
}