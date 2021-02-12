
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

const initDropdown = function () {

    let listOfDropdownContainer = document.querySelectorAll("[js-dropdown-container]");
    listOfDropdownContainer.forEach(dropdownContainer => {
        let dropdownToggle = dropdownContainer.querySelector("[js-toggle-dropdown]");

        // handle CSS classes
        const close = function (element) {
            element.classList.remove("is-open");
            // element.classList.add("close");
        }

        const open = function (element) {
            // element.classList.remove("close");
            element.classList.add("is-open");
        }

        document.addEventListener("click", function () {
            close(dropdownContainer);
        });

        // Wenn irgendwo außerhalb der Nav geklickt wird, wird die Navigation geschlossen
        dropdownContainer.addEventListener("click", function (event) {
            event.stopPropagation();
        });

        dropdownToggle.addEventListener("click", function () {

            // Hier wird geschaut, ob die Navigation offen oder geschlossen ist
            if (!dropdownContainer.classList.contains("is-open")) {
                console.log("NOT is-open");
                open(dropdownContainer);
            } else if (dropdownContainer.classList.contains("is-open")) {
                console.log("is-open");
                close(dropdownContainer);
            }
        });
    });
}

const initCarousel = function () {

    let listOfCarouselContainer = document.querySelectorAll("[js-carousel-container]");

    listOfCarouselContainer.forEach(carouselContainer => {

        let marginIndex = 0;
        let slideIndex = 0;
        let pressed;

        // For Styling
        let listOfItem = carouselContainer.querySelectorAll("[js-item]");
        let firstItem = listOfItem[0];
        firstItem.style.marginLeft = marginIndex + "px";
        let marginBetweenItems = parseInt(getComputedStyle(firstItem).marginRight);
        let itemWidth = firstItem.getBoundingClientRect().width;
        // let transitionSlide = firstItem.style.transitionDuration;
        // firstItem.style.transitionDuration = "1s";
        // console.log("transition " + transitionSlide);
        // const transitionSlide = getComputedStyle(firstItem).transitionDuration;
        // console.log(firstItem.style.transitionDuration);
        // console.log(transitionSlide);


        // Controls
        let prev = carouselContainer.querySelector("[js-prev]");
        let next = carouselContainer.querySelector("[js-next]");

        // Indicator
        let indicatorContainer = carouselContainer.querySelector("[js-indicator-container]");
        let listOfIndicator = indicatorContainer.querySelectorAll("[js-indicator]");

        const eventHandlerIndicator = function () {
            if (pressed === "next") {
                listOfIndicator[slideIndex - 1].classList.remove("move-right");
                indicatorContainer.insertBefore(listOfIndicator[slideIndex - 1], listOfIndicator[slideIndex + 1]);
                listOfIndicator[slideIndex].classList.remove("move-left");
                listOfIndicator = carouselContainer.querySelectorAll("[js-indicator]");
            } else if (pressed === "prev") {
                listOfIndicator[slideIndex + 1].classList.remove("move-left");
                listOfIndicator[slideIndex].classList.remove("move-right");
                indicatorContainer.insertBefore(listOfIndicator[slideIndex + 1], listOfIndicator[slideIndex]);
                listOfIndicator = carouselContainer.querySelectorAll("[js-indicator]");
            }

            prev.addEventListener("click", prevPressed);
            next.addEventListener("click", nextPressed);
        }

        listOfIndicator.forEach(indicator => {
            indicator.addEventListener("transitionend", eventHandlerIndicator);
        });

        const updateIndicator = function (n) {

            pressed = n;
            if (pressed === "next") {
                listOfIndicator[slideIndex - 1].classList.add("move-right");
                listOfIndicator[slideIndex].classList.add("move-left");
            }
            else if (pressed === "prev") {
                listOfIndicator[slideIndex + 1].classList.add("move-left");
                listOfIndicator[slideIndex].classList.add("move-right");
            }
        }

        const updateSlideIndex = function (n) {
            slideIndex += n;
        }

        const prevPressed = function () {
            if (slideIndex !== 0) {
                marginIndex += itemWidth + marginBetweenItems;
                firstItem.style.marginLeft = marginIndex + "px";
                updateSlideIndex(-1);
                updateIndicator("prev");

                /**
                 * Damit keine ungewollten Bugs entstehen, wird der EventHandler der Controls removed, während die Animation ausgeführt wird
                 * so kann nicht merhmals auf einen Button gedrückt werden
                 */
                prev.removeEventListener("click", prevPressed);
                next.removeEventListener("click", nextPressed);

                carouselContainer.classList.add("animate");
                carouselContainer.classList.add("prev");
            }
        }

        const nextPressed = function () {
            if (slideIndex !== listOfItem.length - 1) {
                marginIndex -= itemWidth + marginBetweenItems;
                firstItem.style.marginLeft = marginIndex + "px";
                updateSlideIndex(1);
                updateIndicator("next");

                /**
                 * Damit keine ungewollten Bugs entstehen, wird der EventHandler der Controls removed, während die Animation ausgeführt wird
                 * so kann nicht merhmals auf einen Button gedrückt werden
                 */
                prev.removeEventListener("click", prevPressed);
                next.removeEventListener("click", nextPressed);

                carouselContainer.classList.add("animate");
                carouselContainer.classList.add("next");
            }
        }

        firstItem.addEventListener("transitionend", () => {
            console.log("ended sliding");
            carouselContainer.classList.remove("animate");
            carouselContainer.classList.remove("next");
            carouselContainer.classList.remove("prev");
        });
        prev.addEventListener("click", prevPressed);
        next.addEventListener("click", nextPressed);
    });
}

const initNavigation = function () {

    let listOfNavContainer = document.querySelectorAll("[js-nav-container]");
    listOfNavContainer.forEach(navContainer => {
        let navToggle = navContainer.querySelector("[js-toggle-nav]");

        document.addEventListener("click", function () {
            close(navContainer);
        });

        // Wenn irgendwo außerhalb der Nav geklickt wird, wird die Navigation geschlossen
        navContainer.addEventListener("click", function (event) {
            event.stopPropagation();
        });

        navToggle.addEventListener("click", function () {

            // Hier wird geschaut, ob die Navigation offen oder geschlossen ist
            if (navContainer.classList.contains("is-open")) {
                navContainer.classList.remove("is-open");
            } else {
                navContainer.classList.add("is-open");
            }
        });
    });
}

initButton();
initCard();
initDropdown();
initCarousel();
initNavigation();

window.addEventListener("resize", function () {
    initCarousel();
}); 