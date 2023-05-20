// if (typeof jQuery == 'undefined'){
//     console.log('oops! I still have to link my jQuery properly!');
//   } else {console.log('I did it! I linked jQuery and this js file!')};



const $container = $("#container")
console.log($container)

const $h1 = $('<h1>')
$h1.text("Hogwarts")
$("#container").append($h1)

//// YEAR 2 /////
const $h2 = $('<h2>');
$h2.text("Jonathan");
$("body").append($h2);

const $h3 = $('<h3>');
$h3.text("Hufflepuff");
$("body").append($h3);

const $h4 = $('<h4>');
$h4.addClass("dog").text("Sniper");
$("body").append($h4);
const $p = $('<p>');
$p.text("Holly Wand with Unicorn Hair Core");
$("body").append($p);

const $ul = $('<ul>').attr('storage', 'trunk');
const $liButterBeer = $('<li>').text('Butter Beer');
const $liInvisibilityCloak = $('<li>').addClass('secret').text('Invisibility Cloak');
const $liMagicMap = $('<li>').addClass('secret').text('Magic Map');
const $liTimeTurner = $('<li>').addClass('secret').text('Time Turner');
const $liLeash = $('<li>').addClass('petType').text('Leash');
const $liBeans = $('<li>').text('Bertie Botts Every Flavor, Jelly Beans');

$ul.append($liButterBeer, $liInvisibilityCloak, $liMagicMap, $liTimeTurner, $liLeash, $liBeans);
$container.append($ul);