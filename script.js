document.addEventListener('DOMContentLoaded', () => {
    const words = ["Innovative", "Catering", "In-Fligh", "Data", "AI", "Secure"];
    const colors = ["#fec910", "#3eb7ad", "#ae2267", "#1b807b"];
    const wordElement = document.getElementById('word');

    let currentWordIndex = 0;

    // Set initial color
    wordElement.style.color = colors[0];

    function changeWord() {
        // Animate the word going up
        wordElement.style.transform = "translateY(-100%)";

        // After animation completes, change the word and reset position
        setTimeout(() => {
            currentWordIndex = (currentWordIndex + 1) % words.length;
            const nextColor = colors[currentWordIndex % colors.length];

            // Update the word text
            wordElement.textContent = words[currentWordIndex];
            // Reset position
            wordElement.style.transition = 'none';
            wordElement.style.transform = 'translateY(100%)';
            // Force reflow to apply transition cleanly
            void wordElement.offsetWidth;

            // Apply new color
            wordElement.style.color = nextColor;

            // Animate it back into view
            wordElement.style.transition = 'transform 0.5s ease-in-out';
            wordElement.style.transform = 'translateY(0)';
        }, 500); // Matches the transition duration
    }

    // Change word every 2 seconds
    setInterval(changeWord, 2000);
});
