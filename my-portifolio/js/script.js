// Menu toggle
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav ul");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}

// Close menu when clicking on a link
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});

// Contact form validation
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    if (name === "" || email === "" || subject === "" || message === "") {
      alert("Please fill in all fields!");
      return false;
    }

    const telefone = "258847566176";

    const texto = `Olá! Me chamo ${name}, Email: ${email},  assunto: ${subject}, ${message}`;
    const msgFormatada = encodeURIComponent(texto);

    const url = `https://wa.me/${telefone}?text=${msgFormatada}`;

    console.log(url);

    window.open(url, "_blank");

    alert("Message sent successfully!");
    this.reset();
    return true;
  });
}

// Add scroll effect to header
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (header) {
    if (window.scrollY > 100) {
      header.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.1)";
    } else {
      header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
    }
  }
});

// Add active class to current page in navigation
document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    const linkHref = link.getAttribute("href");
    if (
      linkHref === currentPage ||
      (currentPage === "" && linkHref === "index.html") ||
      (currentPage === "" && linkHref === "index.html")
    ) {
      link.style.color = "var(--accent)";
    }
  });
});
