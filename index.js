for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

function handleClick() {
  const buttomInnerHTML = this.innerHTML;
  makeSound(buttomInnerHTML);

}

addEventListener("keydown", (e) => {
    makeSound(e.key);
});



function makeSound(key){
    let audio;
    let isSound = true;
    switch (key) {
        case "w":
          audio = new Audio("./sounds/tom-1.mp3");
          break;
        case "a":
          audio = new Audio("./sounds/tom-2.mp3");
    
          break;
        case "s":
          audio = new Audio("./sounds/tom-3.mp3");
    
          break;
        case "d":
          audio = new Audio("./sounds/tom-4.mp3");
    
          break;
        case "j":
          audio = new Audio("./sounds/kick-bass.mp3");
    
          break;
        case "k":
          audio = new Audio("./sounds/snare.mp3");
    
          break;
        case "l":
          audio = new Audio("./sounds/crash.mp3");
          break;
    
        default:
            console.log(key);
            isSound = false;
          break;
    
       
      }
      if(isSound){
         audio.play();
         buttonAnimation(key);
      }
     

}


function buttonAnimation(currentKey){
    const activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(() => {
        activeButton.classList.remove("pressed");
    }, 100);
}