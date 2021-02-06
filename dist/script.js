
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

const initNavigation = function () {

    const toggleNav = function () {

    }

    let listOfNavContainer = document.querySelectorAll("[js-nav-container]");
    listOfNavContainer.forEach(navContainer => {
        let navToggle = navContainer.querySelector("[js-toggle-nav]");

        navToggle.addEventListener("click", function () {

            // Hier wird geschaut, ob die Navigation offen oder geschlossen ist
            if (navContainer.classList.contains("close")) {
                // navIcon.src = "./icons/arrow-left-icon.svg";
                navContainer.classList.remove("close");
                navContainer.classList.add("open");
            } else if (navContainer.classList.contains("open")) {
                // navIcon.src = "./icons/menu-icon.svg";
                navContainer.classList.remove("open");
                navContainer.classList.add("close");
            }
        });
    });

}

initButton();
initCard();
initNavigation();