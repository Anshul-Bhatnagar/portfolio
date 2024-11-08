// Smooth Scroll Animation for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic Text Effect
const highlight = document.querySelector('.highlight');
const textArray = ["Developer", "Coder", "Writer"];
let textIndex = 0;

function changeText() {
    highlight.textContent = textArray[textIndex];
    textIndex = (textIndex + 1) % textArray.length;
}

setInterval(changeText, 2000);

// Contact Form
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for contacting me! I will respond shortly.');
    this.reset();
});
