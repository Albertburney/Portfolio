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

// Elements to type
const nameText = "Tushar Albert Burney";
const introText = "I’ve learned the golden rule: if the code works, don’t touch it—because one innocent tweak can turn you into a full-time bug exterminator!";

// Get the HTML elements for the text
const nameElement = document.querySelector('.name');
const introElement = document.querySelector('.intro');

// Function to create typing effect
function typeEffect(element, text, speed, callback) {
    let index = 0;

    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        } else if (callback) {
            callback();  // Call the callback function after typing is complete
        }
    }

    type();
}

// Start typing the name and intro with a delay between them
typeEffect(nameElement, nameText, 100, function() {
    setTimeout(function() {
        typeEffect(introElement, introText, 50);
    }, 500); // Add a short delay before typing intro text
});

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("networkCanvas");
  const ctx = canvas.getContext("2d");

  // Adjust canvas size to fit the window
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Center of the screen
  const centerX = window.innerWidth / 2; // Center horizontally
const centerY = window.innerHeight / 4; // Move higher vertically


  // Number of network points and their radius
  const points = 30;
  const networkRadius = 149; // Radius of the network circle
  let angleOffset = 0;  // For rotating the network

  // Create a network of points
  const networkPoints = [];
  for (let i = 0; i < points; i++) {
      const angle = (i / points) * (2 * Math.PI);
      const x = centerX + Math.cos(angle) * networkRadius;
      const y = centerY + Math.sin(angle) * networkRadius;
      networkPoints.push({ x, y });
  }

  // Function to rotate the network points
  function rotateNetwork() {
      angleOffset += 0.01;  // Adjust speed of rotation
      for (let i = 0; i < networkPoints.length; i++) {
          const point = networkPoints[i];
          const angle = (i / points) * (2 * Math.PI) + angleOffset;
          point.x = centerX + Math.cos(angle) * networkRadius;
          point.y = centerY + Math.sin(angle) * networkRadius;
      }
  }

  // Draw lines to simulate network connections
  function drawNetworkConnections() {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

      // Draw the network connections
      ctx.strokeStyle = "rgba(97, 218, 251, 0.8)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let i = 0; i < networkPoints.length; i++) {
          const pointA = networkPoints[i];
          for (let j = i + 1; j < networkPoints.length; j++) {
              const pointB = networkPoints[j];
              const distance = Math.hypot(pointB.x - pointA.x, pointB.y - pointA.y);

              // Only draw lines if points are close enough
              if (distance < 250) {
                  ctx.moveTo(pointA.x, pointA.y);
                  ctx.lineTo(pointB.x, pointB.y);
              }
          }
      }
      ctx.stroke();
  }

  // Draw animated dots moving around the center
  function drawMovingDots() {
      ctx.fillStyle = "rgba(97, 218, 251, 1)";
      networkPoints.forEach(point => {
          ctx.beginPath();
          ctx.arc(point.x, point.y, 2, 0, 2 * Math.PI);
          ctx.fill();
      });
  }

  // Main animation loop
  function animate() {
      rotateNetwork();
      drawNetworkConnections();
      drawMovingDots();
      requestAnimationFrame(animate);
  }

  animate();
});

document.addEventListener("DOMContentLoaded", () => {
  const heartIcon = document.getElementById("heart-icon");
  const notification = document.getElementById("notification");
  const canvas = document.getElementById("fireworks-canvas");
  const ctx = canvas.getContext("2d");

  // Resize the canvas to the window size
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let particles = [];
  const colors = ["255,20,97", "24,255,146", "90,135,255", "251,243,140"];

  // Firework Particle Class
  class Particle {
      constructor(x, y, color) {
          this.x = x;
          this.y = y;
          this.color = color;
          this.radius = Math.random() * 4 + 1;
          this.xVelocity = Math.random() * 4 - 2;
          this.yVelocity = Math.random() * 4 - 2;
          this.opacity = 1;
          this.fade = Math.random() * 0.03 + 0.01;
      }

      draw() {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
          ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
          ctx.fill();
      }

      update() {
          this.x += this.xVelocity;
          this.y += this.yVelocity;
          this.opacity -= this.fade;
      }
  }

  // Create Fireworks
  function createFireworks(x, y) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      for (let i = 0; i < 30; i++) {
          particles.push(new Particle(x, y, color));
      }
  }

  // Animate Fireworks
  function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles = particles.filter((particle) => particle.opacity > 0);

      particles.forEach((particle) => {
          particle.update();
          particle.draw();
      });

      requestAnimationFrame(animate);
  }

  // Show notification and trigger fireworks on heart click
  heartIcon.addEventListener("click", (event) => {
      // Show notification
      notification.classList.add("show");

      // Trigger fireworks at heart position
      const rect = heartIcon.getBoundingClientRect();
      createFireworks(rect.left + rect.width / 2, rect.top);

      // Hide the notification after 5 seconds
      setTimeout(() => {
          notification.classList.remove("show");
      }, 5000);
  });

  animate();
});
