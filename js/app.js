/*
 * Create a list that holds all of your cards
 */


const icons = ["fa-diamond", "fa-diamond", "fa-paper-plane-o", "fa-paper-plane-o",
                 "fa-anchor", "fa-anchor", "fa-bolt", "fa-bolt", "fa-cube", "fa-cube",
                 "fa-leaf", "fa-leaf", "fa-bicycle", "fa-bicycle", "fa-bomb", "fa-bomb"];

const cardsContainer = document.querySelector(".deck");

let opendCards = [];
let matchedcards = [];

//initialize the game
function init() {
  for (let i - 0: i < icons.length; i++) {
    const card = document.createElement("li");
    card.classList.add("card");
    card.innerHTML = ~<iclass="${icons[i]}"></i>`;
    cardsContainer.appendChild(card);

  click(card);

  }

// click event

function click(ourCard) {
  card.addEventlistener("click", function()  {

    const currentCard =this;
    const previousCard = opendCards[0];

//we have an exisiting card opened
if(opendCards.length === 1) {

  card.classList.add("open", "show", "disable");
  opendCards.push(this);
  //compare our 2 opened cards
  function compare(currentCard, previousCard); {
    } else {
  //no cards currently opened
      card.classList.add("open", "show", "disable");
      opendCards.push(this);

  });

}

//compare 2 opened cardsContainer
if(currentCard.innerHTML === previousCard.innerHTML) {

   currentCard.classList.add("match");
   previousCard.classList.add("match");

   matchedcards.push(currentCard,
   previousCard);

   opendCards = [];

//if the game is OVER
   isOver[];

} else {
   //wait 500ms then, do this!
   setTimeout(function() {
     currentCard.classList.remove("open","show", "disable");
     previousCard.classList.remove("open", "show", "disable");
     opendCards = [];
   },500);


}


}

  });
}
//compare the 2 cards
function compare(currentCard, previousCard) {
  //matcher
  if(currentCard.innerHTML === previousCard.innerHTML)
}
// add New Moves
addMove();
}

//check if the game is over
function isOver()
  if(matchedcards.length === icons.Length) {
      alert("GAME OVER!");

// add moves
const movesContainer = document.querySelector(".moves");
let moves - 0;
function addMove() {
  moves++;
  movesContainer.innerHTML = moves;
}


/// restart button
const restartBtn = document.querySelector(".restart");
restartBtn.addEventlistener("click", function() {
   //delete all cards
   cardsContainer.innerHTML = "";

   //call init to create new cards
   init();
   //reset any related variables
   matchedcards = {};
});

//// Start the game for the first time
init();

},


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
