const eventToCharCode = (event) => event.key.toUpperCase().charCodeAt();

window.onkeypress = (event) => {
  const keyCode = eventToCharCode(event);

  const key = document.querySelector(`.key[data-key="${keyCode}"]`);
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);

  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
};

window.onkeyup = (event) => {
  const keyCode = eventToCharCode(event);
  const key = document.querySelector(`.key[data-key="${keyCode}"]`);

  key.classList.remove('playing');
};
