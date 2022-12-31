const toggleButton = document.getElementsByClassName("navbrand-toggle")[0];
const navItems = document.getElementsByClassName("nav-item")[0];

toggleButton.addEventListener("click", () => {
  navItems.classList.toggle("active");
});

const switchButton = document.getElementById("switch");

switchButton.addEventListener("click", () => {
  document.body.classList.toggle("theme");
  if (document.bidy.classList.contains("theme")) {
    switchButton.class = "fa-regular fa-sun";
  } else {
    switchButton.class = "fa-solid fa-moon-stars";
  }
});
