const sonic = document.querySelector(".sonic");
const eggman = document.querySelector(".eggman");
const fundo = document.querySelector(".fundo");
const green = document.querySelector(".background")

window.onload = () => {
    green.volume = 0.1;
    green.play();
}
    
function eggman_laugh () {
    const eggmanlaugh = document.querySelector(".laugh")
            eggmanlaugh.volume = 0.2
            eggmanlaugh.loop = false;
            eggmanlaugh.play()
}

const jump = () => {
    sonic.classList.add("jump");
    sonic.src = "./img/Sonic-Jump.gif";
    
    setTimeout(() => {
        sonic.classList.remove("jump");
        sonic.src = "./img/Sonic.gif";
    },900);
};

const loop = setInterval(() => {
    const eggmanPosition = eggman.offsetLeft;
    const sonicPosition = +window.getComputedStyle(sonic).bottom.replace("px", "");
    if (eggmanPosition < 110 && eggmanPosition > 0 && sonicPosition < 220 ) {
        eggman.style.animation = "none";
        eggman.style.left = `${eggmanPosition}px`;

        sonic.style.animation = "none";
        sonic.src = "./img/Sonic-Loss.gif";
        sonic.style.width = "240px";

        fundo.src = "./img/GameoverSMB-1.png";
        eggman_laugh()
        
    }

},10);

document.addEventListener("click", jump);
document.addEventListener("click", jump_sound = () => {
    const jumpinho = document.querySelector(".jumpinho");
    jumpinho.volume = 0.2;
    jumpinho.play();
  })

