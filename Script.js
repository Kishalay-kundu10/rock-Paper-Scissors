let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const genCompChoice = () => {
    let compChoice = ["rock","Paper","Scissors"]
    let c= Math.floor(Math.random()*3)
    return compChoice[c];
}

const showWinner = (userWin , userChoice, compChoice) => {
    if(userWin){
        msg.innerText = ` YOU WIN ! ${userChoice}  beats ${compChoice}`;
        document.querySelector("#msg").style.backgroundColor="#80ff99";
        userScore++;
        document.querySelector("#user-score").innerText=userScore;
    }
    else{
        msg.innerText = ` YOU LOSE! ${compChoice} beats ${userChoice} `;
        document.querySelector("#msg").style.backgroundColor="#ff0054";
        compScore++;
        document.querySelector("#comp-score").innerText=compScore;
    }
}

const playGame= (userChoice) => {

    const compChoice  = genCompChoice();
    console.log(compChoice);
        if(userChoice === compChoice){
            msg.innerText = `well it's a draw . Play Again ! `;
            document.querySelector("#msg").style.backgroundColor="#006d77";
            
        }
        else{
            let userWin =true ;
            if(userChoice === "rock"){
                userWin = compChoice === "Paper" ? false : true ;
            }
            else if(userChoice === "Paper"){
                userWin = compChoice === "Scissors" ? false : true ;
            }
            else{
                userWin = compChoice === "rock" ? false : true ;
            }
            showWinner(userWin , userChoice , compChoice); 
        }
        

}

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
            let userChoice=choice.getAttribute("id");
            console.log(userChoice);
            playGame(userChoice);
    }) 
});