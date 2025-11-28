console.log("Hello World");


//method that allows the program to get some random number from a max value passed as a parameter
function getRandomInt (max){
    return Math.floor(Math.random() * max); 
} //in this case, if it passed 3 as argument of this function, will return numbers between 0 and 2; in this case (0, 1 or 2)

//method to get the value of the computer
function getComputerValue(){
    //variable that carries the number 
    let value = getRandomInt(3);
    //presenting the random number 
    /////console.log(value); 
    //if statement to give the value that must be shown when the number is given
    if (value == 0){
        return "Rock"; 
    } else if (value == 1){
        return "Paper"; 
    } else { 
        return "Scissor"; 
    } //seeing that the value gonna be 0, 1 or 2, it's logic that will go to the last else just if the value is equal to 2
}

//showing the value of the computer, to see if the following methods are working properly
console.log(`Computer chooses ${getComputerValue()}`); 

//method to get the value the user gonna choose on the prompt
function getHumanValue(){
    let value = prompt("Type your option"); 
    return value; 
}

//seeing the value typed by the user 
console.log(`Typed value is ${getHumanValue()}`); 