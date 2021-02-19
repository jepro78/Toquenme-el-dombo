let onsound1 = document.getElementById("sound1");
let onsound2 = document.getElementById("sound2");
let onsound3 = document.getElementById("sound3");
let onsound4 = document.getElementById("sound4");
let onsound5 = document.getElementById("sound5");
let onsound6 = document.getElementById("sound6");
let onsound7 = document.getElementById("sound7");
let onsound8 = document.getElementById("sound8");

let dombobtn1 = document.getElementById("dombo1");
let dombobtn2 = document.getElementById("dombo2");
let dombobtn3 = document.getElementById("dombo3");
let dombobtn4 = document.getElementById("dombo4");
let dombobtn5 = document.getElementById("dombo5");
let dombobtn6 = document.getElementById("dombo6");
let dombobtn7 = document.getElementById("dombo7");
let dombobtn8 = document.getElementById("dombo8");

let dombocombo = document.querySelector(".btn-dombo-9th");

dombobtn1.addEventListener("click", () => {
    onsound1.load();
    onsound1.play();
});

dombobtn2.addEventListener("click", () => {
    onsound2.load();
    onsound2.play();
});

dombobtn3.addEventListener("click", () => {
    onsound3.load();
    onsound3.play();
});

dombobtn4.addEventListener("click", () => {
    onsound3.load();
    onsound3.play();
});

dombobtn5.addEventListener("click", () => {
    onsound4.load();
    onsound4.play();
});

dombobtn6.addEventListener("click", () => {
    onsound6.load();
    onsound6.play();
});

dombobtn7.addEventListener("click", () => {
    onsound7.load();
    onsound7.play();
});

dombobtn8.addEventListener("click", () => {
    onsound8.load();
    onsound8.play();
});

dombocombo.addEventListener("click", () => {
    onsound1.play() + onsound2.play() + onsound3.play() + onsound4.play() + onsound8.play() + onsound5.play() + onsound6.play() + onsound7.play();
});