
let secret=7;
let answer= prompt("please enter the secret number");
let guess= parseInt(answer);
let randomGuess= Math.floor(Math.random()*7);


while(answer!==secret){  

alert("incorrect guess");


if (answer>secret){
  alert("Too high");
}
 if(answer<secret){
  alert("Too low");
}

}
while(answer==secret){
  alert("correct guess!")
}

    















