$(document).ready(() => {
    
    
//program generates a random number between 19 and 120
    var randomNumber = Math.floor(Math.random() * 101 + 19);
    $("#randomNumbers").text(randomNumber);

//Each crystal should have a random hidden value between 1 - 12.
    var button1 = Math.floor(Math.random() * 12) + 1;
    var button2 = Math.floor(Math.random() * 12) + 1;
    var button3 = Math.floor(Math.random() * 12) + 1;
    var button4 = Math.floor(Math.random() * 12) + 1;
 //player clicks the crystals to display value to score
    var total = 0;
    var wins = 0;
    var losses = 0;
    var totScore = 0;
   
    $("#totScore").text(total);
    $("#numWins").text(wins);
    $("#numLosses").text(losses);

//reset function

function reset () {
    var randomNumber = Math.floor(Math.random() * 101 + 19);
    console.log(randomNumber);
    $("#randomNumbers").text(randomNumber);
    var button1 = Math.floor(Math.random() * 12) + 1;
    var button2 = Math.floor(Math.random() * 12) + 1;
    var button3 = Math.floor(Math.random() * 12) + 1;
    var button4 = Math.floor(Math.random() * 12) + 1;
    
    total = 0;
    $("#totScore").text(total);
    
    
}

function winner () {
    alert("Winner, Winner, Chicken Dinner!");
    wins++;
    $("#numWins").text(wins);
    reset();
}

function loser () {
    alert("Oh no you've lost to Jumanji!");
    losses++;
    $("#numLosses").text(losses);
    reset();
}

$("#button1").on("click", function() {

    total = total + button1;
    $("#totScore").text(total);

    if (total == randomNumber) {
        winner();
        document.getElementById("numWins").textContent = wins;
        reset();
    }  else if (total > randomNumber) {
        loser();
        document.getElementById("numLosses").textContent = losses;
        reset();
    }


});

$("#button2").on("click", function() {

    total = total + button2;
    $("#totScore").text(total);

    if (total == randomNumber) {
        winner();
        document.getElementById("numWins").textContent = wins;
        reset();
    }  else if (total > randomNumber) {
        loser();
        document.getElementById("numLosses").textContent = losses;
        reset();
    }


});

$("#button3").on("click", function() {

    total = total + button3;
    $("#totScore").text(total);

    if (total == randomNumber) {
        winner();
        document.getElementById("numWins").textContent = wins;
        reset();
    }  else if (total > randomNumber) {
        loser();
        document.getElementById("numLosses").textContent = losses;
        reset();
    }


});

$("#button4").on("click", function() {

    total = total + button4;
    $("#totScore").text(total);

    if (total == randomNumber) {
        winner();
        document.getElementById("numWins").textContent = wins;
        reset();
    }  else if (total > randomNumber) {
        loser();
        document.getElementById("numLosses").textContent = losses;
        reset();
    }


});






























});