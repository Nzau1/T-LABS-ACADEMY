// main.js

// Initialize tilt effect for card
VanillaTilt.init(document.querySelectorAll(".card"), {
  max: 15,
  speed: 400,
  glare: true,
  "max-glare": 0.5
});

// Function to handle login
function attemptLogin() {
  const username = document.querySelector('.username-input').value;
  const email = document.querySelector('.email-input').value;
  const password = document.querySelector('.password-input').value;

  // Basic validation - replace with real authentication as needed
  if (username && email && password) {
      // Redirect to the main academy page
      window.location.href = "WEB.HTML";
  } else {
      alert("Please enter all fields.");
  }
}
