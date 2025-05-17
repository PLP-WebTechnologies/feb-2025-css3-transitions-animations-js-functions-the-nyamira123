// Load stored background color preference
window.onload = function () {
  const savedColor = localStorage.getItem('bgColor');
  if (savedColor) {
    document.body.style.backgroundColor = savedColor;
    document.getElementById('welcomeMessage').textContent = "Welcome Back! 🎈";
  }
};

document.getElementById('animateBtn').addEventListener('click', () => {
  const box = document.getElementById('animBox');
  box.classList.toggle('animate');
});

document.getElementById('savePrefs').addEventListener('click', () => {
  const newColor = prompt("Enter your favorite background color (e.g., #ffcc00 or blue):");
  if (newColor) {
    document.body.style.backgroundColor = newColor;
    localStorage.setItem('bgColor', newColor);
    alert("Your background color has been saved! 🎨");
  }
});
