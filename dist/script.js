
const initButton = function () {
    const stopAnimations = function () {
        this.classList.remove("animate");
    }

    const animateBubbles = function () {
        this.classList.add("animate")
    }

    let listOfButtons = document.querySelectorAll(".button");

    listOfButtons.forEach(button => {
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
        let slideIndex = 0;
        let listOfItems = carouselContainer.querySelectorAll("[js-item]");
        let prevBtn = carouselContainer.querySelector("[js-prev]");
        let nextBtn = carouselContainer.querySelector("[js-next]");

        const updateSlideIndex = function (n) {
            slideIndex += n;

            if (slideIndex === listOfItems.length) slideIndex = 0;
            if (slideIndex === -1) slideIndex = listOfItems.length - 1;
            console.log(slideIndex);
            return slideIndex;
        }

        const getPrevItem = function (slideIndex) {
            if (slideIndex === 0) return listOfItems[listOfItems.length - 1];

            return listOfItems[slideIndex - 1];
        }

        const getCurrentItem = function (slideIndex) {
            return listOfItems[slideIndex];
        }

        const getNextItem = function (slideIndex) {
            if (slideIndex === listOfItems.length - 1) return listOfItems[0];

            return listOfItems[slideIndex + 1];
        }

        const changeSlide = function (n) {
            getPrevItem(slideIndex).classList.remove("left");
            getCurrentItem(slideIndex).classList.remove("active");
            getNextItem(slideIndex).classList.remove("right");

            slideIndex = updateSlideIndex(n);

            getPrevItem(slideIndex).classList.add("left");
            getCurrentItem(slideIndex).classList.add("active");
            getNextItem(slideIndex).classList.add("right");
        }

        getPrevItem(slideIndex).classList.add("left");
        getNextItem(slideIndex).classList.add("right");

        prevBtn.addEventListener("click", () => {
            changeSlide(-1);
        });
        nextBtn.addEventListener("click", () => {
            changeSlide(1);
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