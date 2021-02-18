let onsound1 = document.getElementById("sound1");
let onsound2 = document.getElementById("sound2");
let onsound3 = document.getElementById("sound3");
let onsound4 = document.getElementById("sound4");

let dombobtn1 = document.querySelector(".dombo1");
let dombobtn2 = document.querySelector(".dombo2");
let dombobtn3 = document.querySelector(".dombo3");
let dombobtn4 = document.querySelector(".dombo4");

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
    onsound4.load();
    onsound4.play();
});

dombocombo.addEventListener("click", () => {
    onsound1.play() + onsound2.play(); + onsound3.play(); + onsound4.play();
});