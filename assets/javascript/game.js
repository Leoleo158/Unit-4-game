$(document).ready(() => {
    
    
//program generates a random number between 19 and 120
    let randomNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
    $("#randomNumber").html(randomNumber);

//Each crystal should have a random hidden value between 1 - 12.
    let button1 = Math.floor(Math.random() * 12) + 1;
    let button2 = Math.floor(Math.random() * 12) + 1;
    let button3 = Math.floor(Math.random() * 12) + 1;
    let button4 = Math.floor(Math.random() * 12) + 1;




























});