
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
    let description = document.querySelector("[js-description]");
    description.innerHTML = description.innerHTML.substr(0, 110);
}

initButton();
initCard();