const pianoKeys = document.querySelectorAll(".piano-keys .key"),
    volumeSlider = document.querySelector(".volume-slider input"),

    keysCheckbox = document.querySelector(".keys-checkbox input");

let allKeys=[],
 audio = new Audio("./tunes/a.wav");

const playTone = key => {
  audio.src = `./tunes/${key}.wav`;
  audio.play();
  const clickedKey = document.querySelector(`[data-key="${key}"]`);
  clickedKey.classList.add("active");

  setTimeout(() => {
    clickedKey.classList.remove("active");  
},150);

}

pianoKeys.forEach(key => {

  allKeys.push(key.dataset.key);

  console.log(key.dataset.key);
  key.addEventListener("click", () => playTone(key.dataset.key));

  

  // const clickedKey = document.querySelector(`.key[data-key="${key.dataset.key}"]`);
  // clickedKey.classList.add("active");
  // setTimeout(() => {
  //     clickedKey.classList.remove("active");
  // }, 100)
});
//la fonction pour changer le volume ne fonctionne pas
const handleVolume =(e)=> {
    audio.volume = e.target.value;
  }
  
audio.volume = volumeSlider.value;
volumeSlider.addEventListener("input", handleVolume);




const showHideKeys = () => {
  pianoKeys.forEach(key => key.classList.toggle("hide"));
}
keysCheckbox.addEventListener("click", showHideKeys);

document.addEventListener("keydown", e => {
  if (allKeys.includes(e.key)) playTone(e.key);
});
//la meme chose mais trop long

/*const pressedKey = (e) => {
    playTone(e.key);
}
document.addEventListener("keydown", pressedKey);*/



