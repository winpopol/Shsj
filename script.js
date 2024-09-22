const button = document.querySelector("#flee");

// Use both mouse and touch events for mobile compatibility
["mouseover", "click", "touchstart"].forEach(function (type) {
    button.addEventListener(type, function (e) {
        // Prevent default behavior for touch events
        if (type === "touchstart") {
            e.preventDefault(); // Prevent the default touch behavior
        }

        // Calculate new random positions
        const top = getRandomNum(window.innerHeight - this.offsetHeight);
        const left = getRandomNum(window.innerWidth - this.offsetWidth);

        console.log("go to top:", top);
        console.log("go to left:", left);

        // Move the button to the new position
        moveElement(this, "left", left);
        moveElement(this, "top", top);
    });
});

const moveElement = (element, animeType, pixels) => {
    anime({
        targets: element,
        [animeType]: `${pixels}px`,
        easing: "easeOutElastic(1, .5)", // Animation easing effect
    }).play();
};

const getRandomNum = (num) => {
    return Math.floor(Math.random() * num); // Generate a random number
};
