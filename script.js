
var UIcontrol = (function(){
    var DOMstrings = {
        textInput: document.querySelector("#textInput"),
        submitButton: document.querySelector("#submit")

    }

    return {
        getInput: function(){
            DOMstrings.submitButton.addEventListener("click", function(e){
                e.preventDefault();
                return DOMstrings.textInput.value;
            })
        }
    }

    
  

})()




function checker(uictrl){
    
    var playerScore = 0;
    var computerScore = 0;
    for(var i = 0; i < 50; i++){
        var inputComputer = "";
        var randomNumber = Math.floor(Math.random() * 3);
            if (randomNumber === 1){
                inputComputer = "rock";
            } else if (randomNumber === 2){
                inputComputer = "paper";
            } else {
                inputComputer = "scissors";
            }
    if(playerScore === 5 || computerScore === 5){
        if(playerScore > computerScore){
            console.log("GAME OVER - Player Wins " + playerScore + " - " + computerScore + "!!!" );
        } else if (computerScore > playerScore){
            console.log("GAME OVER - Computer wins " + computerScore + " - " + playerScore + "!!!" );
        } else {
            console.lot("GAME OVER - Draw " + playerScore + " - " + computerScore);
        }
        break;
    } else {
    var inputPlayer = uictrl.getInput();
    if (inputPlayer == "rock" && inputComputer == "scissors"){
        playerScore ++;
        console.log("Player Wins!");
        console.log("***************");
        console.log("Total scores: Player " + playerScore + " - " + computerScore + " Computer");
        console.log("***************");
        
    } else if (inputPlayer === "exit"){
        break;
    } else if (inputPlayer == "rock" && inputComputer == "paper"){
                 computerScore ++;
                 console.log("Computer Wins!");
                 console.log("***************");
                 console.log("Total scores: Player " + playerScore + " - " + computerScore + " Computer");
                 console.log("***************");
    } else if (inputPlayer == "paper" && inputComputer == "scissors"){
               computerScore ++;
                 console.log("Computer Wins!");
                 console.log("***************");
                 console.log("Total scores: Player " + playerScore + " - " + computerScore + " Computer");
                 console.log("***************");
    } else if (inputPlayer == "paper" && inputComputer == "rock"){
               playerScore ++;
               console.log("Player Wins!");
                console.log("***************");
                console.log("Total scores: Player " + playerScore + " - " + computerScore + " Computer");
                console.log("***************");
    } else if (inputPlayer == "scissors" && inputComputer == "rock"){
                computerScore ++;
                 console.log("Computer Wins!");
                 console.log("***************");
                 console.log("Total scores: Player " + playerScore + " - " + computerScore + " Computer");
                 console.log("***************");
    } else if (inputPlayer == "scissors" && inputComputer == "paper"){
                playerScore ++;
               console.log("Player Wins!");
                console.log("***************");
                console.log("Total scores: Player " + playerScore + " - " + computerScore + " Computer");
                console.log("***************");
    } else { console.log("Draw!");
             console.log("***************");
             console.log("Total scores: Player " + playerScore + " - " + computerScore + " Computer");
             console.log("***************");
           } 
    }
    
    
    }
}

checker(UIcontrol);
