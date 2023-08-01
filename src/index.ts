// TypeScript code
const userMenuButton = document.querySelector<HTMLElement>("#user-menu-button");
const userMenu = document.querySelector<HTMLElement>("#user-menu");

if (userMenuButton && userMenu) {
  userMenuButton.addEventListener("click", function () {
    userMenu.classList.toggle("hidden"); 
  });
}
const mobileMenuButton = document.querySelector<HTMLElement>('[aria-controls="mobile-menu"]');
const mobileMenu = document.querySelector<HTMLElement>('#mobile-menu');

if (mobileMenuButton && mobileMenu) {
  mobileMenuButton.addEventListener('click', function () {
    mobileMenu.classList.toggle('open');
  });
  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
      mobileMenu.classList.remove('open');
    }
  });
}



