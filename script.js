// Smooth scroll to section
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav a[href^='#']");
  
    navLinks.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
  
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  });
  