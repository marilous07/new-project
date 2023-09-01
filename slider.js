document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper('.swiper-container', {
        loop: true, // Enable infinite loop
        pagination: {
            el: '.swiper-pagination', // Add pagination
            clickable: true, // Allow clicking on pagination to navigate
        },
        navigation: {
            nextEl: '.swiper-button-next', // Add next button
            prevEl: '.swiper-button-prev', // Add previous button
        },
        autoplay: {
            delay: 5000, // Autoplay delay in milliseconds (5 seconds in this example)
        },
    });

    // Add event listeners for custom next and previous buttons
    document.querySelector('.prev').addEventListener('click', () => swiper.slidePrev());
    document.querySelector('.next').addEventListener('click', () => swiper.slideNext());
});
