
let environmentElements = [ "stars", "debris", "spaceship", "PLANET" ];

let mainEntity = {
    name: "SEQEFTA AQUA",
    type: "giant celestial body",
    mood: "conflicted",
};

let count=0;

$("#Main-Entity").click(function () {

    count = count + 1;

    let arrayPosition = count - 1;

    let mood = mainEntity.mood[arrayPosition];

    let message = "<p>Celestial Squirtle has traveled " + count + " times to get here.</p>";

    message = message + "<p> It feels very " + mainEntity.mood + ".</p>";

    message = message + "<p> Its real name is " + mainEntity.name + ".</p>";

    message = message + "<p>Around the area: " + environmentElements + ".</p>";
    
    message = message + "<p>Classification: Aqua is an unknown " + mainEntity.type + ".</p>";

    $("#output").html(message);

    console.log(count);
    console.log(arrayPosition);

});

let Droids = {
    nickname: "3PO & R2",
    type: "Protocol & Astromech Droids",
    mood: "nonplussed",
    systems: "ANOMALY",
    system: "HOSTILE"
};


$("#Droids").click(function () {

    count = count + 1;

    let arrayPosition = count - 1;

    let mood = Droids.mood[arrayPosition];

    let message = "<p> Maintenance disruptions: " + count + " </p>";

    message = message + "<p>The Droids are totally, and utterly " + Droids.mood + ".</p>";

    message = message + "<p> C3PO & R2D2 are " + Droids.type + " respectively.</p>";

    message = message + "<p> They are casually referred to as " + Droids.nickname + ".</p>";

    message = message + "<p> C3PO's systems can only calculate a mystery... an " + Droids.systems + ".</p>";
    
    message = message + "<p>R2D2's system's detect a " + Droids.system + " presence.</p>"


    $("#output2").html(message);

    console.log(count);
    console.log(arrayPosition);

});

$("#main2").click(function () {
  $(this).toggleClass("boosted");
  $("#condition").text("**Boop Boop Boop Beep!**");
});

$("#main2").hover(
  function () {
    $("#chatter").stop(true, true).slideDown(250);
    $("#condition").text("***Beep Boop Boop Beep!!***");
  },
  function () {
    $("#chatter").stop(true, true).slideUp(250);
    $("#condition").text("*Boop...*");
  }
);


let messagesC=["Oh good heavens R2, please be quiet! Hello, giant... The galaxy is in grave danger, and we've recently obtained information that could change the course of this galactic turmoil. What do you want from us", 
    "..? Oh!? So you mean us no harm", "? We really are in need of assistance, and you have proven you can be an invaluable ally", 
    ". So, do you have other powers? I can identify all sorts of life and phenomena but you... you're different-" ];
let counterC=0


let messagesS=["I see everything, and the effort you rebels have been putting the past decade has... enthused me. I know about the plans, and the recent destruction of Scariff, my Totem Planet... I'm here to finally intervene",
 ". No, I saved you all for a reason-", " I'm open to join you're cause-"];
let counterS=0

$("#character-c").click( function(){

    if ( counterC ==3 ) {
    $("#answer").css("display", "flex");
    $("#convo").append( messagesC [counterC] );
    counterC = counterC +1;
    counterS=1000;
    }

    else if(counterC == counterS) {
     $("#convo").append( messagesC [counterC] );
    counterC = counterC + 1;
    }

});


$("#character-s").click( function(){

    if(counterS < counterC) {
    $("#convo2").append(messagesS [counterS]);
    counterS=counterS+1;
    }
    
});

$("#answer-flashbang").click(function () {

    $("body").css( "background-image", "none" );
    $("#convo2").append("<p> Like it? Don't interrupt me again.  </p>");
    $("#answer").css("display", "none");


});


