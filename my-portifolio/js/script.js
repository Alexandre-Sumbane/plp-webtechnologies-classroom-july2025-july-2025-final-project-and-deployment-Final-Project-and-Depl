// Menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Contact form validation
function validateForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if(name === '' || email === '' || message === '') {
    alert('Please fill in all fields!');
    return false;
  }
  alert('Message sent successfully!');
  return true;
}
