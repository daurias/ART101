function askNumber(whatNumber) {
    let userNumber = prompt("Guess 1-10?");

    if (userNumber == whatNumber) {
        $("#output").html("Ayy congrats, u got it!");
    }
    else {
        $("#output").html("Better luck next time...");
    }
}

$("#good-button").click(function () {
    askNumber(8);
});