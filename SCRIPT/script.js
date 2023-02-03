console.log ('The Rabbit and the Turtle');
//De illustraties zijn zelf gemaakt in Adobe Illustrator

var namen = ['Haas', 'Schildpad', 'Niemand']
var pElement = document.querySelector('.naam');
var raadKnop = document.querySelector('.raad');

var turtleClass = 'turtleClass'
var turtleClassCount = 0
var rabbitClass = 'rabbitClass'
var rabbitClassCount = 0

var startElement = document.querySelector('start');

// Images
var turtleElement = document.getElementById('turtle-img');
var rabbitElement = document.getElementById('rabbit-img');

//Felicitatie
var turtleTextElement = document.getElementById ('turtletext');
var rabbitTextElement = document.getElementById ('rabbittext');
console.log(rabbitTextElement);

//Beweging
var counterHaas = 0;
var counterSchilpad = 0;

//Eindstreep
var finishline = window.screen.width

// Sound
var sound1 = new Audio('../Audio/starten.wav');

sound1.addEventListener ('ended', (event) => {
   console.log('eind')
   window.location.replace('spel.html');

})

// Bronvermelding: https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/ended_event

function play() {
   console.log('speel muziek')
   sound1.play();
}


function toonRandomNaam() {
   var randomGetal = Math.random()* namen.length ;
   console.log('namen',namen.length)

   randomGetal = Math.floor(randomGetal);

   console.log (randomGetal)
   pElement.textContent = namen[randomGetal];
}
if(raadKnop) {
   raadKnop.addEventListener('click', toonRandomNaam, false);
}

// Ben geholpen door: Jorn Veltrop


function haasBeweegt(){
   counterHaas++
   console.log('haas beweegt naar voor', )
   console.log(rabbitElement.offsetLeft);
   rabbitClassCount ++;
   var example = rabbitClass + rabbitClassCount;
   console.log('example', example)
   rabbitElement.classList.add(example)


   if (rabbitElement.offsetLeft > finishline){
      console.log('rabbit heeft gewonnen')
      rabbitTextElement.classList.remove("hidden");
      
   }
}

function schilpadBeweegt(){
   counterSchilpad++
   console.log('schilpad beweegt naar voor', counterSchilpad)
   console.log(turtleElement.offsetLeft);

   turtleClassCount ++;
   var example = turtleClass + turtleClassCount;
   console.log('example', example)
   turtleElement.classList.add(example)

   if (turtleElement.offsetLeft > finishline){
      console.log('turtle heeft gewonnen')
      turtleTextElement.classList.remove("hidden");
   }
}
 
document.addEventListener('keydown', (event) => {
   var keyName = event.key;

   if (event.key === 's'){
      schilpadBeweegt()
   }
   
   if (event.key === 'h'){
      haasBeweegt()
   }
 });




