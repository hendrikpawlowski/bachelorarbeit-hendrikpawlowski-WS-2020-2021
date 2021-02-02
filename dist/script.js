// const animateHover = function () {
//     this.classList.add("animateHover");

//     // EventListener wird während der Animation entfernt, damit nicht mehrere Animationen gleichzeitig spielen können
//     this.removeEventListener("mouseover", animateHover);
// }

const stopAnimations = function () {
    // this.classList.remove("animateHover");
    this.classList.remove("animate");

    //this.classList.remove("animatePressed");


    // this.classList.remove("runClickAnimation");
    // this.classList.remove("pressed");


    console.log("ANIMATION END")

    // Der entfernte EventListener wird wieder hinzugefügt
    // this.addEventListener("mouseover", animateHover);
}

// const animatePressed = function () {
//     this.classList.add("animatePressed");
//     this.classList.remove("animateHover");
//     //     this.classList.add("pressed");
// }

// const animateReleased = function () {
//     this.classList.remove("animatePressed");
//     console.log("mouse up");
//     // this.classList.add("animateReleased");
// }

const animateBubbles = function () {
    this.classList.add("animate")
}

let button = document.querySelector(".button");
// button.addEventListener("mouseover", animateHover);
button.addEventListener("animationend", stopAnimations);

// button.addEventListener("mousedown", animatePressed);
// button.addEventListener("mouseup", animateReleased);
button.addEventListener("mouseup", animateBubbles);

