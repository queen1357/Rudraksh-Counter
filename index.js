let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")


let count = 0



function increment() {
  
    count += 1
    countEl.textContent = count
    
} 

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    
    
}

function playSound() {
    var audio = document.getElementById("myAudio");
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }
