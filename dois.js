const audio = new Audio("/dois.mp3");
document.body.appendChild(audio);

const interval = setInterval(() => {
  const now = new Date();
  if (now >= 1645579342000) {
    audio.play();
    clearInterval(interval);
  }
}, 500);
