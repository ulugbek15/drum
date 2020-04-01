
function playSound(evt){
	const audio = document.querySelector(`audio[data-key='${evt.keyCode}'`)
	const key = document.querySelector(`.key[data-key='${evt.keyCode}'`)
	if(!audio) return; // stop the function from running all together
	audio.currentTime = 0; //rewind to the start
	audio.play();
	key.classList.add('playing')
}

function removeTransition(evt){
	console.log(evt)
	if(evt.propertyName !== 'transform') return; // skip it if  it is not a trnsform
	this.classList.remove('playing')

}

const keys = document.querySelectorAll('.key');
keys.forEach(key =>key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown',playSound);