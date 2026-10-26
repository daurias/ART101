
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