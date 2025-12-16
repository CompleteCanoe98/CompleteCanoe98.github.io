const textElement = document.getElementById('typewriter');
const phrases = ["Machine Learning Models.", "Network Protocols.", "Embedded Systems.", "Python Applications."];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        textElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        textElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }

    if (isDeleting){
        typeSpeed = 50;
    }
    else{
        typeSpeed = 100;
    }

    if (isDeleting == false && charIndex == currentPhrase.length) {
        isDeleting = true;
        typeSpeed = 2000; // Wait 2 seconds before deleting
    } else if (isDeleting == true && charIndex == 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500;
    }

    setTimeout(typeEffect, typeSpeed);
}

// Start the effect
document.addEventListener('DOMContentLoaded', typeEffect);