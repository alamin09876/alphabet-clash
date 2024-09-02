function randomNumber() {
  const alphabet = randamAlphabet();
  const currentNumber = document.getElementById("current-number");
  currentNumber.innerText = alphabet;
  setElementBackgroundColor(alphabet);
}

function handleKeyboardButtonPress(event) {
  const expectedPress = event.key;
  console.log(expectedPress);

  const currentAlphabetElement = document.getElementById("current-number");
  const currentAlphabet = currentAlphabetElement.innerText;
  const elementPressed = currentAlphabet.toLowerCase();

  console.log(expectedPress, elementPressed);

  if (expectedPress === elementPressed) {
    console.log("You can get a score");
    removeElementBackgroundColor(expectedPress);
    randomNumber();
  } else {
    console.log("You loss a life. Try again");
  }
}

document.addEventListener("keyup", handleKeyboardButtonPress);

function play() {
  hideElementId("home-screen");
  showElementId("play-ground");
  randomNumber();
}

//   const homeScreen = document.getElementById("home-screen");
//   homeScreen.classList.add("hidden");

//   const playGround = document.getElementById("play-ground");
//   playGround.classList.remove("hidden");
