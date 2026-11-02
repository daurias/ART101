
// A says
let messagesA=["How are you doing", "Sorry to hear that", "What color would you like it to be?", "so pick one"];
let counterA=0

// B says
let messagesB=["Terrible", "Color of the background sucks", "Not this one"];
let counterB=0

// when A is clicked
// A speaks when counterA = counterB
$("#character-a").click( function(){

    if ( counterA ==3 ) {
    $("#answers").css("display", "flex");
    $("#chat").append("<p>Superman:" +messagesA [counterA]+ "</p>");
    counterA = counterA +1;
    counterB=1000;
    }

    else if(counterA == counterB) {
     $("#chat").append("<p>Superman:" +messagesA [counterA]+ "</p>");
    counterA = counterA + 1;
    }

});

// when B is clicked
// N speaks when counterB <counterA
$("#character-b").click( function(){

    if(counterB < counterA) {
    $("#chat").append("<p>Batman:" +messagesB [counterB]+ "</p>");
    counterB=counterB+1;
    }
    
});


// make the buttons work

$("#answer-red").click(function () {

    $("body").css( "background-color", "red" );
    $("#chat").append("<p>superman: how did u do that</p>");
    $("#answers").css("display", "none");


});

$("#answer-blue").click(function () {

    $("body").css( "background-color", "blue" );
    $("#chat").append("<p>batman: still do not like it</p>");
    $("#answers").css("display", "none");


});