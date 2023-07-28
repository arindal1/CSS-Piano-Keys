let pianoContainer = document.getElementsByClassName("piano-container");
const base = "./audio/";

// Function to play the audio for the given key number
function playAudio(keyNumber) {
  const number = keyNumber <= 9 ? "0" + keyNumber : keyNumber;
  new Audio(`${base}key${number}.mp3`).play();
}

window.onload = () => {
  // 24keys
  for (let index = 1; index <= 24; index++) {
    let div = document.createElement("div");
    div.classList.add("key", index <= 10 ? "black-key" : "white-key");

    // For playing audio on click
    div.addEventListener("click", () => {
      playAudio(index);
    });

    pianoContainer[0].appendChild(div);
  }

  // Event listener for keyboard key press
  document.addEventListener("keydown", (event) => {
    // Map keyboard keys to piano key numbers (adjust as needed)
    const keyToPianoKey = {
      "2": 1,
      "3": 2,
      "5": 3,
      "6": 4,
      "7": 5,
      "s": 6,
      "d": 7,
      "g": 8,
      "h": 9,
      "j": 10,
      "q": 11,
      "w": 12,
      "e": 13,
      "r": 14,
      "t": 15,
      "y": 16,
      "u": 17,
      "z": 18,
      "x": 19,
      "c": 20,
      "v": 21,
      "b": 22,
      "n": 23,
      "m": 24,
    };

    // Check if the pressed key corresponds to a piano key
    const key = event.key.toLowerCase();
    if (keyToPianoKey.hasOwnProperty(key)) {
      // Play the audio corresponding to the piano key
      playAudio(keyToPianoKey[key]);
    }
  });
};
