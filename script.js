// Select all keys
const keys = document.querySelectorAll('.key');


//Listeners 
// Add an event listener to all keys
keys.forEach((key) => {
  key.addEventListener('click', () => playNote(key));
});


// Handlers 
function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note);
  // Reset note audio
  noteAudio.currentTime = 0;

  // Play the note 
  noteAudio.play();

  // Add active class
  key.classList.add('active');

  // 
  noteAudio.addEventListener('ended', () => {
    key.classList.remove('active');

  });
}


