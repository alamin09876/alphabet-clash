function hideElementId(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}

function showElementId(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}

function setElementBackgroundColor(elementId) {
  const setElementColour = document.getElementById(elementId);
  setElementColour.classList.add("bg-orange-500");
}
function removeElementBackgroundColor(elementId) {
  const setElementColour = document.getElementById(elementId);
  setElementColour.classList.remove("bg-orange-500");
}

function randamAlphabet() {
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const randam = alphabetString.split("");

  const randamNumber = Math.random() * 25;
  const number = Math.round(randamNumber);

  const alphabetRandom = randam[number];
  return alphabetRandom;
}
