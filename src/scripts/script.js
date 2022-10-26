const openMobileMenu = () => {
  const sidebar = document.getElementById("sidebar");
  const toggleMenu = document.getElementById("togglemenu");
  toggleMenu.classList.remove("close");
  toggleMenu.classList.add("open");
  sidebar.classList.add("left-0");
  sidebar.classList.remove("-left-80");
};

const closeMobileMenu = () => {
  const sidebar = document.getElementById("sidebar");
  const toggleMenu = document.getElementById("togglemenu");
  toggleMenu.classList.remove("open");
  toggleMenu.classList.add("close");
  sidebar.classList.add("-left-80");
  sidebar.classList.remove("left-0");
};

registerSwipeEvent(document);
document.addEventListener(SWIPE_TYPES.right, openMobileMenu);
document.addEventListener(SWIPE_TYPES.left, closeMobileMenu);

document.getElementById("togglemenu").addEventListener("click", (e) => {
  const sidebar = document.getElementById("sidebar");
  if (sidebar.classList.contains("left-0")) closeMobileMenu();
  else openMobileMenu();
});
