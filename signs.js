
function playSound(e){
    //Links audio clip to key
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    //Links visual to key stroke
    const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
    if(!audio) return;
    //reset audio clip key is press(or we'll have to wait for it to finish)
    audio.currentTime = 0;
    //plays audio
    audio.play();
    key.classList.add('playing');
  
  }
  
  
  function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
  }
  
  const keys = document.querySelectorAll('.key');
  keys.forEach(key =>key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);