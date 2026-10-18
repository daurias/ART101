// the clicker button program

let count=1;

$("#needy-button").click( function(){
    // what to do when the button is clicked
    count = count / 2;
    $("#needy-button").html(" I was kicked " + count + "times");
});
 