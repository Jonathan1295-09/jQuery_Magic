// if (typeof jQuery == 'undefined'){
//     console.log('oops! I still have to link my jQuery properly!');
//   } else {console.log('I did it! I linked jQuery and this js file!')};


///// QUERY FOR MY DIV WITH ID OF CONTAINER//////////
const $container = $("#container")
console.log($container)

///////// YEAR 1 ///////
const $h1 = $('<h1>')
$h1.text("Hogwarts")
$("#container").append($h1)

//// YEAR 2 /////
const $h2 = $('<h2>');
$h2.text("Jonathan");
$("body").append($h2);

///// ELEMENT HOUSE/////
const $h3 = $('<h3>');
$h3.text("Hufflepuff");
$("body").append($h3);

//// PET ELEMENT NAME //////
const $h4 = $('<h4>');
$h4.addClass("dog").text("Sniper");
$("body").append($h4);

///// MY WAND ELEMENT //////
const $p = $('<p>');
$p.text("Holly Wand with Unicorn Hair Core");
$("body").append($p);




//////// YEAR 3 UL/LI /////////// LIST OF ITEMS BELOW//////
const $ul = $('<ul>').attr('storage', 'trunk');

const $liButter = $('<li>').text('Butter Beer');

const $liInvisibility = $('<li>').addClass('secret').text('Invisibility Cloak');

const $liMagic = $('<li>').addClass('secret').text('Magic Map');

const $liTime = $('<li>').addClass('secret').text('Time Turner');

const $liLeash = $('<li>').addClass('dog').text('Leash');

const $liBeans = $('<li>').text('Bertie Botts Every Flavor, Jelly Beans');

$ul.append($liButter, $liInvisibility, $liMagic, $liTime, $liLeash, $liBeans);
$container.append($ul);

          //////////
/////////// Year 5 /////////////
          //////////

//Break Your Wand!//
$p.remove();

//Class was hard!//
$liButter.remove();

//Get A New Wand!//
$p.insertAfter($p).text("A New Wand");

//New Wand Color//
$p.css('color', 'indigo');

//Pet Going on De mission//
$h4.removeClass("dog");
$h3.addClass("dog");

//Pet Successful mission Got the Goods//
$h3.removeClass("dog");
$h4.addClass("dog");

           /////////////
///////////// Year 6 /////////////
           /////////////

//Update Class//
$("secret").hide("slow").delay(2000);

// Show belongings //
$(".secret").show("slow");

// Adding Class "Cabbage"
$h4.text("text").addClass("cabbage");

// adding color to class cabbage check main css //

// Fixing pets leash //
$h4.text("leash").removeClass("cabbage");


      /////////////////
/////////  Year 7 /////////
     ////////////////

// Class Update //
$("h5").text("Fall 2018");

// Buying More Butter Beer! //
$liButter.insertBefore($liInvisibility)


// Whoops!!!!! //
$ul.attr("storage", "chest");

