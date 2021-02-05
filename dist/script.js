
const initButton = function () {
    const stopAnimations = function () {
        this.classList.remove("animate");
    }

    const animateBubbles = function () {
        this.classList.add("animate")
    }

    let buttonList = document.querySelectorAll(".button");

    buttonList.forEach(button => {
        button.addEventListener("mouseup", animateBubbles);
        button.addEventListener("animationend", stopAnimations);
    });
}

const initCard = function () {
    let cardListDescription = document.querySelectorAll("[js-description]");
    cardListDescription.forEach(description => {
        description.innerHTML = description.innerHTML.substr(0, 100);
    });
}

initButton();
initCard();