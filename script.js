// Makes it so the url doesn't change when clicking items in the navbar
document.addEventListener('DOMContentLoaded', function() {
    // Select all navbar links
    const navLinks = document.querySelectorAll('.vertical-nav a');

    navLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Get the target section ID from the href attribute
        const targetId = this.getAttribute('href').replace('#', '');
        const targetSection = document.getElementById(targetId);

        // Scroll to the target section
        targetSection.scrollIntoView({
          behavior: 'smooth', // Optional: for smooth scrolling
          block: 'start'
        });
      });
    });
  });

  document.querySelectorAll('.vertical-nav ul li a').forEach(item => {
    item.addEventListener('click', function(event) {
      const navDot = document.querySelector('.nav-dot');
      const itemRect = event.currentTarget.getBoundingClientRect();
      const itemCenterY = (itemRect.top + (itemRect.height / 2) + window.scrollY) - 321;
  
      navDot.style.top = `${itemCenterY}px`;
    });
  });
  
