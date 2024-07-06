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