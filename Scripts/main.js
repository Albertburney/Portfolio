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

  // JavaScript for fade-in animation on page load
document.addEventListener("DOMContentLoaded", function () {
    const projects = document.querySelectorAll('.project');

    projects.forEach((project, index) => {
        setTimeout(() => {
            project.style.opacity = 1;
            project.style.transition = "opacity 0.6s ease-in";
        }, index * 200);  // Delay each project fade-in
    });
});
