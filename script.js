// Lightbox Gallery
function openLightbox() {
    document.getElementById('lightbox').style.display = 'block';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

let slideIndex = 1;
showLightboxSlides(slideIndex);

function plusSlides(n) {
    showLightboxSlides(slideIndex += n);
}

function currentSlide(n) {
    showLightboxSlides(slideIndex = n);
}

function showLightboxSlides(n) {
    let i;
    let slides = document.getElementsByClassName("lightbox-slides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}



// Friendship Start Timer
let friendshipStartDate = new Date("2022-04-03T17:00:00"); // Friendship start date and time

function updateFriendshipTimer() {
    let now = new Date().getTime();
    let distance = now - friendshipStartDate.getTime();

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('f-days').innerText = days;
    document.getElementById('f-hours').innerText = hours;
    document.getElementById('f-minutes').innerText = minutes;
    document.getElementById('f-seconds').innerText = seconds;
}

let friendshipTimerInterval = setInterval(updateFriendshipTimer, 1000);


