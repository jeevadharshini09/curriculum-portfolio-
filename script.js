Script 
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMessage = document.getElementById("formMessage");

  if (!name || !email || !phone || !message) {
    formMessage.textContent = "Please fill out all fields!";
    formMessage.style.color = "red";
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    formMessage.textContent = "Please enter a valid email address!";
    formMessage.style.color = "red";
    return;
  }

  if (!/^[0-9]{10}$/.test(phone)) {
    formMessage.textContent = "Please enter a valid 10-digit phone number!";
    formMessage.style.color = "red";
    return;
  }

  formMessage.textContent = Thank you, ${name}! Your message has been sent.;
  formMessage.style.color = "green";
  document.getElementById("contactForm").reset();
});