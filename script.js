//your JS code here. If required.
// Helper: Set a cookie with name, value, and expiration in days
function setCookie(name, value, days = 365) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
}

// Helper: Get a cookie value by name
function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (let cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === name) return value;
  }
  return null;
}

// Apply cookies on page load (if they exist)
window.addEventListener("DOMContentLoaded", () => {
  const savedFontSize = getCookie("fontsize");
  const savedFontColor = getCookie("fontcolor");

  if (savedFontSize) {
    document.documentElement.style.setProperty("--fontsize", `${savedFontSize}px`);
    document.getElementById("fontsize").value = savedFontSize;
  }

  if (savedFontColor) {
    document.documentElement.style.setProperty("--fontcolor", savedFontColor);
    document.getElementById("fontcolor").value = savedFontColor;
  }
});

// Save preferences when form is submitted
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent page reload

  const fontSize = document.getElementById("fontsize").value;
  const fontColor = document.getElementById("fontcolor").value;

  // Save cookies
  setCookie("fontsize", fontSize);
  setCookie("fontcolor", fontColor);

  // Apply immediately
  document.documentElement.style.setProperty("--fontsize", `${fontSize}px`);
  document.documentElement.style.setProperty("--fontcolor", fontColor);
});
