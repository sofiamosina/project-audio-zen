// All sounds are taken from zapsplat.com
function reset() {
  // Stop all sounds
  location.reload();
}
function makeSound(event) {
  // Play sounds
  // Determine which sound to play by name attribute
  event.style.backgroundColor = "#344C3A";
  let sound = new Audio(`./audio/${event.name}.mp3`);
  sound.play();

  sound.onended = function () {
    sound.play();
  };
}
