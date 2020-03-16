let petName = prompt("Name your duck");
alert("You named your duck "+petName);
let userName = prompt("what is your name?");
alert("Welcome "+userName);

//to give pet a name and user a name for play time

let energy = 10
let hunger = 10
let thirst = 10
let boredom = 0

// setting the variable names and values

function feed(){
    document.getElementById("boredomMeter").innerHTML = (petName+"'s boredom is at "+boredom+" out of 100")
    if(thirst >0 && boredom <100){
    document.getElementById("order").innerHTML = (petName+" has started eating");
    hunger = hunger+10 ;
    document.getElementById("hungerMeter").innerHTML = (petName+" has "+hunger+" fullness left");
    thirst = thirst-3;
    document.getElementById("thirstMeter").innerHTML = (petName+" has "+thirst+" hydration left");
    energy = energy+2;
    document.getElementById("energyMeter").innerHTML = (petName+" has "+energy+" energy left");
    boredom = boredom+5;
    document.getElementById("boredomMeter").innerHTML = (petName+"'s boredom is at "+boredom+" out of 100");
}
if(boredom >=100){
    document.getElementById("boredomMeter").innerHTML = (petName+"'s boredom is at "+boredom+" out of 100, it is too bored to eat, please play with them");
}
    if(thirst <=0){
        document.getElementById("thirstMeter").innerHTML = (petName+" is to thirsty to eat at "+thirst+" thirst, drink more water first")
    }
}

// function to feed pet linked to html feed button

function water(){
    document.getElementById("boredomMeter").innerHTML = (petName+"'s boredom is at "+boredom+" out of 100")
    if(hunger > 0 && boredom <100){
    document.getElementById("order").innerHTML = (petName+" has took a drink");
    thirst = thirst+10 ;
    document.getElementById("thirstMeter").innerHTML = (petName+" has "+thirst+" hydration left");
    hunger = hunger-1;
    document.getElementById("hungerMeter").innerHTML = (petName+" has "+hunger+" fullness left");
    energy = energy+1;
    document.getElementById("energyMeter").innerHTML = (petName+" has "+energy+" energy left");
    boredom = boredom+2;
    document.getElementById("boredomMeter").innerHTML = (petName+"'s boredom is at "+boredom+" out of 100");
}
    if (boredom >= 100){
        document.getElementById("boredomMeter").innerHTML = (petName+"'s boredom is at "+boredom+" out of 100, it is too bored to drink, please play with them");
    }
    
if (hunger <=0) {
    document.getElementById("hungerMeter").innerHTML = (petName+" is to hungry to want to drink at "+hunger+" hunger, eat more food first")
}

}

// function to water pet linked to html water button

function play(){
    document.getElementById("boredomMeter").innerHTML = (petName+"'s boredom is at "+boredom+" out of 100")
    if(hunger >0 && thirst >0 && energy >0) {
    document.getElementById("order").innerHTML = (petName+" is playing with you, "+userName);
    boredom = boredom-10 
    document.getElementById("boredomMeter").innerHTML = (petName+"'s boredom is at "+boredom+" out of 100");
    energy = energy-3;
    document.getElementById("energyMeter").innerHTML = (petName+" has "+energy+" energy left");
    thirst = thirst-5 ;
    document.getElementById("thirstMeter").innerHTML = (petName+" has "+thirst+" hydration left");
    hunger = hunger-5;
    document.getElementById("hungerMeter").innerHTML = (petName+" has "+hunger+" fullness left");
    }
    if (hunger <=0) {
        document.getElementById("hungerMeter").innerHTML = (petName+" is to hungry to want to play at "+hunger+" hunger, eat more food first")
    }
    if (thirst <=0) {
        document.getElementById("thirstMeter").innerHTML = (petName+" is to thirsty to play at "+thirst+" thirst, drink more water first")
    }
    if (energy <=0) {
        document.getElementById("energyMeter").innerHTML = (petName+" has "+energy+" energy left and is too tired to play, let them eat and drink to rest up first")
    }
    if (boredom <=0) {
        document.getElementById("boredomMeter").innerHTML = (petName+"'s boredom is at "+boredom+" out of 100 so does not want to play")
    }
}

// function to play with pet linked to html play button


document.getElementById("energyMeter").innerHTML = (petName+" has "+energy+" energy left")
document.getElementById("hungerMeter").innerHTML = (petName+" has "+hunger+" fullness left")
document.getElementById("thirstMeter").innerHTML = (petName+" has "+thirst+" hydration left")
document.getElementById("boredomMeter").innerHTML = (petName+"'s boredom is at "+boredom+" out of 100")

// making text from html show as above values at start

// document.addEventListener('keydown', logKey);
// function logKey(){
// if (event.code === "KeyA") {
//     document.getElementById("order").innerHTML = (petName+" has started eating apples");
// }
// if (event.code ==="KeyS"){
//     document.getElementById("order").innerHTML = (petName+" has started eating stew");
// }
// }

//test of being able to press key on keyboard to press html button on website