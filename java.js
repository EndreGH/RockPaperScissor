const rock = "rock";
const paper = "paper";
const scissor = "scissor";


window.onload = function(){

    document.getElementById('playerselectionlist').innerHTML = playerselection;
};



let computerselection =
function randomselect()
{return Math.floor(Math.random() *3);};

//if (computerselection() == 2) {
  //console.log (1);
    //}   else if (computerselection() == 1) {
    //console.log (2);
    //}   else { 
      //  console.log (3);
        //}

id=buttonrock .addEventListener("click", function() { playerselection = 1 });
let playerselection = 2

console.log ("Player" + playerselection)
console.log ("Computer" + computerselection())

function winner(){
if (playerselection == computerselection()) {
return ("draw");
}
else {return ("player win")}
}


console.log (winner());