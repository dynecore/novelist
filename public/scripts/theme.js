const root = document.documentElement;
const toggle = document.getElementById("themeToggle");
const icon = document.getElementById("themeIcon");

// Recuperar preferencia del usuario o usar "auto"
let theme = localStorage.getItem("theme") || "auto";

function applyTheme() {
  root.classList.remove("dark", "theme-red", "theme-green");

  switch (theme) {
    case "dark":
      root.classList.add("dark");
      icon.className = "fa-solid fa-sun";
      break;
    case "light":
      icon.className = "fa-solid fa-moon";
      break;
    case "red":
      root.classList.add("theme-red");
      icon.className = "fa-solid fa-heart";
      break;
    case "green":
      root.classList.add("theme-green");
      icon.className = "fa-solid fa-leaf";
      break;
    case "auto":
    default:
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        root.classList.add("dark");
      }
      icon.className = "fa-solid fa-circle-half-stroke";
      break;
  }
}

toggle.addEventListener("click", () => {
  theme =
    theme === "light"
      ? "dark"
      : theme === "dark"
      ? "red"
      : theme === "red"
      ? "green"
      : theme === "green"
      ? "auto"
      : "light";

  localStorage.setItem("theme", theme);
  applyTheme();
});

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", () => {
    if (theme === "auto") applyTheme();
  });

applyTheme();
