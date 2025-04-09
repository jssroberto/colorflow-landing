function toggleNavbar() {
  const navbarLinks = document.querySelector(".navbar-links");
  navbarLinks.classList.toggle("show");
  console.log("Navbar toggled");
}
document.addEventListener("DOMContentLoaded", () => {
  function hideNavbarOnClick() {
    const navbarLinks = document.querySelector(".navbar-links");
    const links = navbarLinks.querySelectorAll("a");
    links.forEach((link) => {
      link.addEventListener("click", () => {
        navbarLinks.classList.remove("show");
      });
    });
  }

  // Initialize functions
  hideNavbarOnClick();
});
