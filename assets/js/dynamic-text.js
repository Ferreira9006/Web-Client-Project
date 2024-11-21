const words = ["Manage Bookings", "Track Pet Care", "Communicate with Owners"]; // List of words
let currentWordIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
const speed = 150; // Typing/Deleting speed

const dynamicText = document.getElementById('dynamic-text');

function typeEffect() {
    const currentWord = words[currentWordIndex];
    
    if (isDeleting) {
        // Deleting characters
        dynamicText.innerHTML = currentWord.substring(0, currentCharIndex) + '<span class="cursor"></span>';
        currentCharIndex--;
        if (currentCharIndex < 0) {
            isDeleting = false;
            currentWordIndex = (currentWordIndex + 1) % words.length; // Move to next word
            setTimeout(typeEffect, 500); // Pause before typing next word
        } else {
            setTimeout(typeEffect, speed);
        }
    } else {
        // Typing characters
        dynamicText.innerHTML = currentWord.substring(0, currentCharIndex) + '<span class="cursor"></span>';
        currentCharIndex++;
        if (currentCharIndex > currentWord.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1000); // Pause before starting to delete
        } else {
            setTimeout(typeEffect, speed);
        }
    }
}

// Start the typing effect when the page loads
window.onload = () => {
    typeEffect();
};
