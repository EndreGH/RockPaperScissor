const rock = 0;
const paper = 1;
const scissor = 2;





//this listens to button clicks and sets playerselection
//id=buttonrock .addEventListener("click", function() {});
//let playerselection = ""



function setPlayerChoice (choice) {
    let playerChoice =
playerChoice = choice ;
return (playerChoice);
}; 


let roundwinner = [];
roundwinner[1] = "Player";
roundwinner[2] = "Player";
roundwinner[3] = "Player";
roundwinner[4] = "Player";
roundwinner[5] = "Player";

console.log (roundwinner);


    





let playerselction10 = "Rock";


//prompt("What is your choice", "Rock/Paper/Scissor");

/*if (playerselction10 != null) {
    document.getElementById("playerselection100").innerHTML =
    "Player selected " + playerselction10;
}
*/


//generates random computer number
const computerselect50 = function () {
    const result = Math.floor(Math.random() *3);
    return result;
        }

//translates random computer number
const translatedCompSelection = function () {
    let computerselection2 = computerselect50()
    if (computerselection2 == 0) {
  return ("Rock");
    }   else if (computerselection2 == 1) {
    return ("Paper");
    }   else { 
        return ("Scissor");
        }
    }

function game(){ 
    let computerselection1 = translatedCompSelection()
    let playerselection1 = playerselction10
    document.getElementById("playerselection100").innerHTML = "Player selected " + playerselection1;
    document.getElementById("computerselection100").innerHTML = "Computer selected " + computerselection1;
    if (playerselection1 === computerselection1) {
    return ("draw");
    }
    else {     
        return ("player win")}
    }

console.log (game());
