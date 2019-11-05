//Declare variables:
let playerOneChoice = ""
let playerTwoChoice = ""

const playerOneClickedRock = () => {
  console.log('Player One clicked on rock')

  // remember player one chose rock
  playerOneChoice = 'rock'
  theWinner()

  //find the section with the class player-one
  // let playerOne = document.querySelector('.player-one')
  let playerOne = document.querySelector('.player-one .buttons')
  //add the class name 'hidden' so it goes away
  playerOne.classList.toggle('hidden')
  playerOne.replaceChild(playerOneChoice, document.querySelector('.player-one .player'))

  //   document.getElementById("okButton")
  //         .addEventListener("click", function() {
  //   document.getElementById("welcome").hidden = true;
  //   document.getElementById("awesome").hidden = false;
  // }, false);
}

const playerOneClickedPaper = () => {
  console.log('Player One clicked on paper')

  // remember player one chose paper
  playerOneChoice = 'paper'
  theWinner()

  //find the section with the class player-one
  // let playerOne = document.querySelector('.player-one')
  let playerOne = document.querySelector('.player-one .buttons')
  //add the class name 'hidden' so it goes away
  playerOne.classList.toggle('hidden')
  playerOne.replaceChild(playerOneChoice, document.querySelector('.player-one .player'))
}

const playerOneClickedScissors = () => {
  console.log('Player One clicked on scissors')

  // remember player one chose scissors
  playerOneChoice = 'scissors'
  theWinner()

  //find the section with the class player-one
  // let playerOne = document.querySelector('.player-one')
  let playerOne = document.querySelector('.player-one .buttons')
  //add the class name 'hidden' so it goes away
  playerOne.classList.toggle('hidden')
  playerOne.replaceChild(playerOneChoice, document.querySelector('.player-one .player'))
}

const playerTwoClickedRock = () => {
  console.log('Player Two clicked on rock')

  // remember player two chose rock
  playerTwoChoice = 'rock'
  theWinner()

  //find the section with the class player-two
  // let playerTwo = document.querySelector('.player-two')
  let playerTwo = document.querySelector('.player-two .buttons')
  //add the class name 'hidden' so it goes away
  playerTwo.classList.toggle('hidden')
  playerTwo.replaceChild(playerTwoChoice, document.querySelector('.player-two .player'))
}

const playerTwoClickedPaper = () => {
  console.log('Player Two clicked on paper')

  // remember player two chose paper
  playerTwoChoice = 'paper'
  theWinner()

  //find the section with the class player-two
  // let playerTwo = document.querySelector('.player-two')
  let playerTwo = document.querySelector('.player-two .buttons')
  //add the class name 'hidden' so it goes away
  playerTwo.classList.toggle('hidden')
  playerTwo.replaceChild(playerTwoChoice, document.querySelector('.player-two .player'))
}

const playerTwoClickedScissors = () => {
  console.log('Player Two clicked on scissors')

  // remember player two chose scissors
  playerTwoChoice = 'scissors'
  theWinner()

  //find the section with the class player-two
  // let playerTwo = document.querySelector('.player-two')
  let playerTwo = document.querySelector('.player-two .buttons')
  //add the class name 'hidden' so it goes away
  playerTwo.classList.toggle('hidden')
  playerTwo.replaceChild(playerTwoChoice, document.querySelector('.player-two .player'))
}

const theWinner = () => {
  let winner = 'Roshambo!!!'

  if (playerOneChoice === 'rock' && playerTwoChoice === 'scissors' ||
    playerOneChoice === 'paper' && playerTwoChoice === 'rock' ||
    playerOneChoice === 'scissors' && playerTwoChoice === 'paper') {
    winner = 'Player One Wins!'
  }

  //If Else Display Player 2 Wins
  //If Player 1 chooses Scissors and Player 2 chooses Rock
  //If Player 1 chooses Paper and Player 2 chooses Scissors
  //If Player 1 chooses Rock and Player 2 chooses Paper
  //Display Player 2 Wins

  else if (playerOneChoice === 'scissors' && playerTwoChoice === 'rock' ||
    playerOneChoice === 'paper' && playerTwoChoice === 'scissors' ||
    playerOneChoice === 'rock' && playerTwoChoice === 'paper') {
    winner = 'Player Two Wins!'
  }
  else if (playerOneChoice === 'scissors' && playerTwoChoice === 'scissors' ||
    playerOneChoice === 'rock' && playerTwoChoice === 'rock' ||
    playerOneChoice === 'paper' && playerTwoChoice === 'paper') {
    winner = "It's a Tie!"
  }

  //Update h1 to display who is the winner / tie
  //find the h1 tag
  let header = document.querySelector('h1')

  //change the text of h1 to display the winner
  header.textContent = winner

}

const main = () => {
  //Player One
  //Add Click Events for Player One Buttons
  let playerOneRockButton = document.querySelector('.player-one  .rock')
  playerOneRockButton.addEventListener('click', playerOneClickedRock)

  let playerOnePaperButton = document.querySelector('.player-one  .paper')
  playerOnePaperButton.addEventListener('click', playerOneClickedPaper)

  let playerOneScissorsButton = document.querySelector('.player-one  .scissors')
  playerOneScissorsButton.addEventListener('click', playerOneClickedScissors)

  let playerTwoRockButton = document.querySelector('.player-two  .rock')
  playerTwoRockButton.addEventListener('click', playerTwoClickedRock)

  let playerTwoPaperButton = document.querySelector('.player-two  .paper')
  playerTwoPaperButton.addEventListener('click', playerTwoClickedPaper)

  let playerTwoScissorsButton = document.querySelector('.player-two  .scissors')
  playerTwoScissorsButton.addEventListener('click', playerTwoClickedScissors)

}

document.addEventListener('DOMContentLoaded', main)
