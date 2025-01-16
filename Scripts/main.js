document.addEventListener("DOMContentLoaded", () => {
    const logoText = document.getElementById("logo-text");
    const messageToType = "Hello World"; // Fixed message to type
    let charIndex = 0;
  
    // Clear initial text for typewriter effect
    logoText.textContent = '';  
  
    function typeWriter() {
        if (charIndex < messageToType.length) {
            const char = messageToType.charAt(charIndex);
            const span = document.createElement('span');
            span.textContent = char;
            logoText.appendChild(span);
            charIndex++;
            setTimeout(typeWriter, 125); // Speed of typing effect
        }
    }
  
    typeWriter();  // Start the typing effect
  });