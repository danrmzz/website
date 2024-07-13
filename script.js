// JavaScript to prevent default action
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    // Optional: Implement custom navigation here
    // For example, scroll to a section without changing the URL
    const sectionId = this.getAttribute('href').substring(1);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
});



document.addEventListener("DOMContentLoaded", function() {
  const elements = document.querySelectorAll('.fade-in');

  function checkVisibility() {
      const windowHeight = window.innerHeight;
      elements.forEach(element => {
          const position = element.getBoundingClientRect().top;
          if (position < windowHeight - 100) { // Adjust 100 to control when the animation starts
              element.classList.add('visible');
          }
      });
  }

  window.addEventListener('scroll', checkVisibility);
  checkVisibility(); // Initial check on load
});