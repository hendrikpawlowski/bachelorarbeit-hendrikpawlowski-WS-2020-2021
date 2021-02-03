
const initButton = function () {

    const stopAnimations = function () {
        this.classList.remove("animate");
    }

    const animateBubbles = function () {
        this.classList.add("animate")
    }

    let button = document.querySelector(".button.prin_8");
    button.addEventListener("mouseup", animateBubbles);
    button.addEventListener("animationend", stopAnimations);
}

const initCard = function () {

    const stopAnimations = function () {
        this.classList.remove("mouseleave");
        console.log("animation end");
    }

    const mouseenter = function () {
        this.classList.add("mouseenter");
    }

    const mouseleave = function () {
        this.classList.remove("mouseenter");
        this.classList.add("mouseleave");
        console.log("mouseleave");
    }

    let card = document.querySelector(".card")
    card.addEventListener("mouseenter", mouseenter);
    card.addEventListener("mouseleave", mouseleave);
    card.addEventListener("animationend", stopAnimations);

    let description = document.querySelector("[js-description]");
    description.innerHTML = description.innerHTML.substr(0, 116);
    console.log(description);
}

initButton();
initCard();