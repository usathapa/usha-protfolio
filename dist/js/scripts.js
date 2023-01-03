const toggleButton = document.getElementsByClassName("navbrand-toggle")[0];
const navItems = document.getElementsByClassName("nav-item")[0];

toggleButton.addEventListener("click", () => {
  navItems.classList.toggle("active");
});

const switchButton = document.getElementById("switch");
const iconImg = document.getElementById("icon-img");

switchButton.addEventListener("click", () => {
  document.body.classList.toggle("theme");
  if (document.body.classList.contains("theme")) {
    iconImg.src = "images/moon.png";
  } else {
    iconImg.src = "images/sun.png";
  }
});
