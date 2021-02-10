
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
    // let listOfElements = document.querySelectorAll("[js-item]");
    // console.log(listOfElements);

    // // element.scrollLeft = 0;

    // let next = document.querySelector("[js-next]").addEventListener("click", () => {
    //     console.log("CLICKED");
    //     // console.log(listOfElements[0].style.marginLeft);
    //     let margin = listOfElements[0].getBoundingClientRect();
    //     console.log(margin);
    //     let width = listOfElements[0].getBoundingClientRect().width;
    //     let newMargin = margin + width * -1;
    //     console.log(newMargin);
    //     listOfElements[0].style.marginLeft = newMargin + "px";

    //     // console.log(element.scrollLeft);

    // })

    let listOfCarouselContainer = document.querySelectorAll("[js-carousel-container]");

    listOfCarouselContainer.forEach(carouselContainer => {

        let marginIndex = 0;
        let slideIndex = 0;
        let listOfItem = carouselContainer.querySelectorAll("[js-item]");
        let firstItem = listOfItem[0];
        firstItem.style.marginLeft = marginIndex + "px";
        let marginBetweenItems = parseInt(getComputedStyle(firstItem).marginRight);
        let itemWidth = firstItem.getBoundingClientRect().width;
        let prev = carouselContainer.querySelector("[js-prev]");
        let next = carouselContainer.querySelector("[js-next]");
        let indicatorContainer = carouselContainer.querySelector("[js-indicator-container]");
        let listOfIndicator = indicatorContainer.querySelectorAll("[js-indicator]");
        // console.log(`margin: ${parseInt(getComputedStyle(firstItem).marginRight)}`);


        const updateIndicator = function (indicatorIndex) {
            console.log("updateContainer");
            console.log(listOfIndicator[0]);

            console.log(slideIndex);
            if (indicatorIndex === 1) {
                console.log("indicator next");
                listOfIndicator[slideIndex - 1].classList.add("move-right");
                listOfIndicator[slideIndex].classList.add("move-left");

                // indicatorContainer.insertBefore(listOfIndicator[slideIndex - 1], listOfIndicator[slideIndex + 1]);

            }
            else if (indicatorIndex === -1) {
                console.log("indicator prev");
                indicatorContainer.insertBefore(listOfIndicator[slideIndex + 1], listOfIndicator[slideIndex]);

            }

            // Update listOfIndicator
            listOfIndicator = carouselContainer.querySelectorAll("[js-indicator]");
        }

        updateIndicator();

        prev.addEventListener("click", () => {
            if (slideIndex !== 0) {
                marginIndex += itemWidth + marginBetweenItems;
                slideIndex -= 1;
                firstItem.style.marginLeft = marginIndex + "px";
                updateIndicator(-1, slideIndex);
            }
        });
        next.addEventListener("click", () => {
            if (slideIndex !== listOfItem.length - 1) {
                marginIndex -= itemWidth + marginBetweenItems;
                slideIndex += 1;
                firstItem.style.marginLeft = marginIndex + "px";
                updateIndicator(1, slideIndex);
            }
        });
    });
}

const initNavigation = function () {

    let listOfNavContainer = document.querySelectorAll("[js-nav-container]");
    listOfNavContainer.forEach(navContainer => {
        let navToggle = navContainer.querySelector("[js-toggle-nav]");

        // handle CSS classes
        const close = function (element) {
            element.classList.remove("open");
            element.classList.add("close");
        }

        const open = function (element) {
            element.classList.remove("close");
            element.classList.add("open");
        }

        document.addEventListener("click", function () {
            close(navContainer);
        });

        // Wenn irgendwo außerhalb der Nav geklickt wird, wird die Navigation geschlossen
        navContainer.addEventListener("click", function (event) {
            event.stopPropagation();
        });

        navToggle.addEventListener("click", function () {

            // Hier wird geschaut, ob die Navigation offen oder geschlossen ist
            if (navContainer.classList.contains("close")) {
                open(navContainer);
            } else if (navContainer.classList.contains("open")) {
                close(navContainer);
            }
        });
    });
}

initButton();
initCard();
initDropdown();
initCarousel();
initNavigation();

window.addEventListener('resize', () => {
    initCarousel();
});