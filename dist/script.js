
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
        console.log(button);
    });
}

const initCard = function () {
    let description = document.querySelector("[js-description]");
    console.log(description);
    description.innerHTML = description.innerHTML.substr(0, 110);
}

initButton();
initCard();