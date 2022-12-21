/*Help text
const rock = 0;
const paper = 1;
const scissor = 2;
*/

function setPlayerChoice (choice) {
    let playerChoice =
playerChoice = choice ;
return (playerChoice);
}; 



    

let playerselction10 = prompt ("What is your choice", "Rock/Paper/Scissor");

//this listens to button clicks and sets playerselection
//id=buttonrock .addEventListener("click", function() {});

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
    else if (playerselection1 == "Rock" && computerselection1 == "Scissor"){
        return ("Player Win with Rock")}
    else if (playerselection1 == "Paper" && computerselection1 == "Rock"){
        return ("Player Win with Paper") }
    else if (playerselection1 == "Scissor" && computerselection1 == "Paper"){
        return ("Player Win with Scissor") }
    else if (playerselection1 == "Rock" && computerselection1 == "Paper"){
        return ("Computer Win with Paper") }
    else if (playerselection1 == "Scissor" && computerselection1 == "Rock"){
        return ("Computer Win with Rock") }
    else {     
        return ("Computer Win with Scissor")}
    }

alert (game());



//insert a function that records each result of the game and keep tabs of scores

/* This is for logging result of each game
let roundwinner = [];
roundwinner[1] = "Player";
roundwinner[2] = "Player";
roundwinner[3] = "Player";
roundwinner[4] = "Player";
roundwinner[5] = "Player";

console.log (roundwinner); */