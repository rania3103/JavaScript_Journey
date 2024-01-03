const min = 1;
const max = 150;
const answer = Math.floor(Math.random() * (max - min)) + min;
let attempts = 0;
let guess;
let running = true;
let win = false;
console.log(answer);
while (running){
    guess = window.prompt(`Guess number between ${min} and ${max}`);
    if (isNaN(guess)){
        alert("plz enter a number");
    }
    else{
        if (Number(guess) == answer){
            console.log("congratulations");
            win = true;
            break;
        }
        else{
            attempts++;
        }
    }
    if (attempts == 3 && !win){
        console.log("sorry, you lose");
        break;
    }

}
