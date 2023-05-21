const Game = require("./classes/Game");
const gamesToPlay = 5000;
let gamesPlayed = 0;
const winningHands = {};

while (gamesPlayed < gamesToPlay) {
  if (gamesPlayed == gamesToPlay - 1) {
    console.log("Final hand");
    const sorted = Object.entries(winningHands)
      .map(([hand, score]) => ({ hand, score }))
      .sort((a, b) => b.score - a.score);
    console.log(sorted.slice(0, 10));
  }
  new Game({ players: [1, 2, 3, 4], winningHands });
  gamesPlayed++;
}

// Example usage
// const cards = [new Card("Hearts", "A"), new Card("Spades", "K"), new Card("Diamonds", "Q"), new Card("Clubs", "J"), new Card("Hearts", "10"), new Card("Hearts", "9"), new Card("Spades", "8")];
// const bestHand = getBestHand(cards);

// console.log("Best hand:", bestHand.name);
