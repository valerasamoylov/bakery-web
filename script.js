let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

if (navBarToggle) {
  navBarToggle.addEventListener("click", function() {
    mainNav.classList.toggle("active");
  });
}
