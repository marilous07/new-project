document.addEventListener("DOMContentLoaded", function () {
    // Get all "Explore" buttons
    const exploreButtons = document.querySelectorAll(".explore-button");

    // Add click event listeners to each button
    exploreButtons.forEach((button) => {
        button.addEventListener("click", function () {
            // Get the destination name from the "data-destination" attribute
            const destinationName = button.getAttribute("data-destination");

            // Show an alert with the selected destination
            alert(`You've selected ${destinationName}!`);
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Get all tour elements
    const tours = document.querySelectorAll(".tour");

    // Add click event listeners to each tour
    tours.forEach((tour) => {
        tour.addEventListener("click", function () {
            // Highlight the clicked tour
            tours.forEach((t) => t.classList.remove("selected"));
            tour.classList.add("selected");
        });
    });
});

