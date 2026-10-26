let count = 0;

let billyAlien = {
    name: "Silly Billy",
    species: "alien",
    favoriteFood: "confusing code",
    moods: ["content", "bubbly", "sassy", "deadly", "droopy", "aimless"]
};

$("#needy-button").click(function () {

    count = count + 1;

    let arrayPosition = count - 1;

    let currentMood = billyAlien.moods[arrayPosition];

    let message = "<p>I've been pummeled " + count + " times.</p>";

    message = message + "<p>I'm feeling a little... " + currentMood + ".</p>";

    message = message + "<p>My name is " + billyAlien.name + ".</p>";

    message = message + "<p>I am an " + billyAlien.species + ".</p>";

    message = message + "<p>My favorite food is " + billyAlien.favoriteFood + ".</p>";


    $("#output").html(message);

    console.log(count);
    console.log(arrayPosition);
    console.log(currentMood);

});