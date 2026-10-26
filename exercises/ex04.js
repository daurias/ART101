// the clicker button program

let count=0;
let colorsCount=0;

// an indexed array of data
let colors=["green", "orange", "brown", "yellow",  "gold", "purple", "red", "pink"];

let buttonText="";

$("#needy-button").click( function(){

    count = count +1;

    console.log(count);
    console.log(colors[colorsCount]);


    buttonText="I was kicked " + count + "times and the color is " + colors[colorsCount];

    $("#needy-button").html( buttonText );

    $("body").css( "background-color", colors[colorsCount] );

    //$("body").append(" <img width='50' src='" +colors[count-1] +".jpg'>" );

    if ( (count >= 16 ) { $("#needy-button").after("<p>my mood is... agitated </p>");  }

     else if( count >= 13 ) { $("#needy-button").after("<p>my mood is... really agitated </p>");  }

     else if (count >= 5 ) { $("#needy-button").after("<p>my mood is... surprised! </p>"); }

    //if( (count >= 5 ) && ( count < 13) ) { $("#needy-button").after("<p>my mood is... agitated </p>");  }

    // if( count >= 13 ) { $("#needy-button").after("<p>my mood is... really agitated </p>");  }

   // if (count >= 16) { $("#needy-button").after("<p>my mood is... surprised! </p>"); }

    colorsCount = colorsCount +1;


    if( colorsCount => 8 ) { colorsCount = 0; };


});
 