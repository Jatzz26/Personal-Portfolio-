// Smooth Scrolling for Navbar Links
const navbarLinks = document.querySelectorAll('.navbar h4');

navbarLinks.forEach(link => {
      link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.textContent.toLowerCase();
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                  top: targetSection.offsetTop - 70, // Adjust for header height
                  behavior: 'smooth',
            });
      });
});

// Example Contact Form Validation (if added in future)
function validateContactForm() {
      const email = document.getElementById('contact-email').value;
      const message = document.getElementById('contact-message').value;

      if (!email || !message) {
            alert('Please fill in both fields.');
            return false;
      }
      return true;
}

document.addEventListener("DOMContentLoaded", function () {
      const contactNav = document.querySelector('.navbar h4:nth-child(5)');
      const contactSection = document.getElementById('contact');

      contactNav.addEventListener('click', function () {
            contactSection.scrollIntoView({ behavior: 'smooth' });
      });
});


const menuToggle = document.getElementById("menu-toggle");
const sidebar = document.getElementById("sidebar");

menuToggle.addEventListener("click", () => {
      sidebar.classList.toggle("open");
});

