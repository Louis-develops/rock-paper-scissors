//1. GETTING DATA FROM THE UI AND THE COMPUTER
let model = (function() {
    
    // dom strings:
    const domStrings = {
        userInput: "#textInput",
        submit: "#submit",
        gamePlay: ".gameplay"
    }
        return {

            // A. Get user input
            getUserInput: function(){

                return document.querySelector(domStrings.userInput).value;
               
            },

            // B. Get computer input
            compInput: function() {
                let optionsArray = ["rock", "paper", "scissors"];
                let randNum = Math.floor(Math.random()* 3);
                console.log(randNum)
                return optionsArray[randNum];
            },

            // C. Make DOM elements public
            getDomStrings: function(){
                return domStrings;
            }
        }
})();

// 2. USER INTERFACE CONTROLLER
let UI = (function(){
    
    return {
        insertHTML: function(outcome, playerScore, computerScore){
            return `
                <div class="text">
                    <p>${outcome}! Score: Player ${playerScore} - ${computerScore} Computer</p>
                </div>
            `
        },

        gameOver: function(outcome, playerScore, computerScore){
            return `
                <div class="text">
                    <p>GAME OVER - ${outcome}! FINAL SCORE: Player ${playerScore} - ${computerScore} Computer</p>
                </div>
            `
        }
    }
})()

// 3. APP CONTROLLER
let controller = (function(mdl, ui){
    // (imported domStrings from model):
    let DOM = mdl.getDomStrings();
    let gamePlay = document.querySelector(DOM.gamePlay);
    let userInput = "scissors";
    let compInput;
    let score = {
        player: 0,
        computer: 0
    }

    console.log(gamePlay)

    // a. Get user Input

        document.querySelector(DOM.submit).addEventListener("click", (e) => {
            e.preventDefault();
            userInput = mdl.getUserInput();

            // b. get computer Input
                compInput = mdl.compInput();

            // c. check whether the player wins, the computer wins or if its a draw
            if(score.player !== 5 && score.computer !== 5){
                if(userInput === compInput){
                    gamePlay.insertAdjacentHTML("beforeend", ui.insertHTML("Draw", score.player, score.computer));
                } else if(userInput === "rock" || userInput === "Rock" && compInput === "paper"){
                    score.computer += 1;
                    gamePlay.insertAdjacentHTML("beforeend", ui.insertHTML("Computer wins", score.player, score.computer));
                } else if(userInput === "rock" || userInput === "Rock" && compInput === "scissors"){
                    score.player += 1;
                    gamePlay.insertAdjacentHTML("beforeend", ui.insertHTML("Player wins", score.player, score.computer));
                } else if(userInput === "paper" || userInput === "Paper" && compInput === "scissors"){
                    score.computer += 1;
                    gamePlay.insertAdjacentHTML("beforeend", ui.insertHTML("Computer wins", score.player, score.computer));
                } else if (userInput === "paper" || userInput === "Paper" && compInput === "rock"){
                    score.player += 1;
                    gamePlay.insertAdjacentHTML("beforeend", ui.insertHTML("Player wins", score.player, score.computer));
                } else if (userInput === "scissors" || userInput === "Scissors" && compInput === "rock"){
                    score.player += 1;
                    gamePlay.insertAdjacentHTML("beforeend", ui.insertHTML("Player wins", score.player, score.computer));
                } else if (userInput === "rock" || userInput === "Rock" && compInput === "paper"){
                    score.computer += 1;
                    gamePlay.insertAdjacentHTML("beforeend", ui.insertHTML("Computer wins", score.player, score.computer));
                } else if (userInput === "scissors" || userInput === "Scissors" && compInput === "paper"){
                    score.computer += 1;
                    gamePlay.insertAdjacentHTML("beforeend", ui.insertHTML("Computer wins", score.player, score.computer));
                }
            } else if (score.player === 5 && score.computer < 5){
                gamePlay.insertAdjacentHTML("beforeend", ui.gameOver("Player wins", score.player, score.computer));
            } else if (score.player === 5 && score.computer === 5){
                gamePlay.insertAdjacentHTML("beforeend", ui.gameOver("Draw", score.player, score.computer));
            } else if (score.computer === 5 && score.player < 5){
                gamePlay.insertAdjacentHTML("beforeend", ui.gameOver("Computer wins", score.player, score.computer));
            }
                
        });
    
})(model, UI)

/**
 * TODO LIST
 * 1. Put end of game if else statements into a function to check at each if else statement (maybe?);
 * 2. Add another line to the sentence that states the choice from the user and computer e.g: User input: Rock. Computer input: Scissors.
 * 3. Remove the first HTML element if there are too many on the screen
 * 5. Add the possibility to change the score limit
 * 6. Fix the width of the GAME OVER string so that it goes onto a new line (play game until win to see error)
 * 7. Add the possibility of a second player (way in future)
 */



