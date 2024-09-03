function randomNumber() {
  const alphabet = randamAlphabet();
  const currentNumber = document.getElementById("current-number");
  currentNumber.innerText = alphabet;
  setElementBackgroundColor(alphabet);
}

function handleKeyboardButtonPress(event) {
  const expectedPress = event.key;
  // console.log(expectedPress);

  if (expectedPress == "Escape") {
    gameOver();
  }

  const currentAlphabetElement = document.getElementById("current-number");
  const currentAlphabet = currentAlphabetElement.innerText;
  const elementPressed = currentAlphabet.toLowerCase();

  console.log(expectedPress, elementPressed);

  if (expectedPress === elementPressed) {
    // const currentScoreElement = document.getElementById("current-score");
    // const currentScoreText = currentScoreElement.innerText;
    // const currentScore = parseInt(currentScoreText);
    // const newScore = currentScore + 1;
    // currentScoreElement.innerText = newScore;

    const currentScore = currentScoreAndLife("current-score");

    const newScore = currentScore + 1;

    setCurrentValueById("current-score", newScore);

    removeElementBackgroundColor(expectedPress);
    randomNumber();
  } else {
    // const currentLifeElement = document.getElementById("current-life");
    // const currentLifeText = currentLifeElement.innerText;
    // const currentLife = parseInt(currentLifeText);
    // const newLife = currentLife - 1;
    // currentLifeElement.innerText = newLife;

    const currentLife = currentScoreAndLife("current-life");
    const newLife = currentLife - 1;
    setCurrentValueById("current-life", newLife);

    if (newLife === 0) {
      gameOver();
    }
  }
}

document.addEventListener("keyup", handleKeyboardButtonPress);

function play() {
  hideElementId("home-screen");
  hideElementId("final-score");
  showElementId("play-ground");

  setCurrentValueById("current-score", 0);
  setCurrentValueById("current-life", 5);
  randomNumber();
}

function gameOver() {
  hideElementId("play-ground");
  showElementId("final-score");

  const lastScore = currentScoreAndLife("current-score");
  setCurrentValueById("last-score", lastScore);

  const currentElement = getElementTextById("current-number");
  console.log(currentElement);

  removeElementBackgroundColor(currentElement);
}

//   const homeScreen = document.getElementById("home-screen");
//   homeScreen.classList.add("hidden");

//   const playGround = document.getElementById("play-ground");
//   playGround.classList.remove("hidden");
