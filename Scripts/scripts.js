document.addEventListener("DOMContentLoaded", () => {
  const logoText = document.getElementById("logo-text");
  const textToType = logoText.textContent;
  const fonts = ["'Courier New', Courier, monospace", "'Arial', sans-serif", "'Times New Roman', Times, serif", "'Verdana', sans-serif", "'Georgia', serif"];
  logoText.textContent = '';  // Clear initial text for typewriter effect
  let index = 0;

  function getRandomFont() {
      return fonts[Math.floor(Math.random() * fonts.length)];
  }

  function typeWriter() {
      if (index < textToType.length) {
          const char = textToType.charAt(index);
          const span = document.createElement('span');
          span.textContent = char;
          span.style.fontFamily = getRandomFont();  // Set a random font for each character
          logoText.appendChild(span);
          index++;
          setTimeout(typeWriter, 125); // Speed of typing effect
      } else {
          setTimeout(deleteText, 1000); // Wait before deleting the text
      }
  }

  function deleteText() {
      const spanElements = logoText.querySelectorAll('span');
      if (spanElements.length > 0) {
          spanElements[spanElements.length - 1].remove();
          index--;
          setTimeout(deleteText, 50); // Speed of deletion effect
      } else {
          setTimeout(typeWriter, 1000); // Wait before starting the typing again
      }
  }

  typeWriter();  // Start the typewriter effect
});

document.addEventListener('DOMContentLoaded', function() {
  const profileImage = document.getElementById('profile-image');
  const secretText = document.getElementById('secret-text');

  // Text for the Easter egg
  const secretMessage = 'Hey,Easter egg found! Git hub Link - ';

  // When the image is clicked, show the secret text
  profileImage.addEventListener('click', function() {
      // Add door opening animation to the image
      profileImage.classList.add('open-door');

      // Wait for 1 second (duration of the animation) before showing the text
      setTimeout(function() {
          secretText.textContent = secretMessage;
          secretText.style.display = 'block'; // Show the secret text
      }, 1000); // Delay of 1 second to match animation duration
  });

  // Reload the page after 30 minutes (1800 seconds)
  setTimeout(function() {
      location.reload();
  }, 1800000); // 30 minutes = 1800000 milliseconds
});

