document.addEventListener("scroll", () => {
    const navbar = document.getElementById("mainNavbar");
    if (window.scrollY > 50) {
      navbar.classList.add("fixed-top", "shadow-sm"); // Add 'fixed-top' and optional shadow
    } else {
      navbar.classList.remove("fixed-top", "shadow-sm");
    }
  });