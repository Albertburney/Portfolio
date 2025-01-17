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

document.addEventListener("DOMContentLoaded", function () {
    const projects = document.querySelectorAll('.project');

    // Add fade-in animation
    projects.forEach((project, index) => {
        setTimeout(() => {
            project.style.opacity = 1;
            project.style.transition = "opacity 0.6s ease-in";
        }, index * 200); // Delay each project fade-in
    });
});

function toggleProjectDetails(projectId) {
    const project = document.querySelector(`.project:nth-child(${projectId})`);
    const main = document.querySelector('main');
    const overlay = document.querySelector('.project-overlay') || document.createElement('div');

    if (!overlay.parentNode) {
        overlay.className = 'project-overlay';
        document.body.appendChild(overlay);
    }

    if (project) {
        if (!project.classList.contains('expanded')) {
            // Move project to body for correct stacking
            const clone = project.cloneNode(true);
            clone.classList.add('expanded');
            document.body.appendChild(clone);

            overlay.classList.add('active');
            main.classList.add('blur-background');

            overlay.addEventListener('click', () => {
                document.body.removeChild(clone);
                overlay.classList.remove('active');
                main.classList.remove('blur-background');
            });
        }
    }
}



