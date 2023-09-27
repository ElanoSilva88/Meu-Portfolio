const header = document.getElementById("header");
const navHeader = document.getElementById("nav_header");
const content = document.getElementById("content");
var showSidebar = false;

function toggleSidebar() {
  showSidebar = !showSidebar;
  if (showSidebar) {
    nav_header.style.marginLeft = "-10vw";
    nav_header.style.animationName = "showSidebar";
    content.style.filter = "blur(2px)";
  } else {
    nav_header.style.marginLeft = "-100vw";
    nav_header.style.animationName = "";
    content.style.filter = "";
  }
}
function closeSidebar() {
  if (showSidebar) {
    toggleSidebar();
  }
}
window.addEventListener('resize', function(event) {
  if(window.innerWidth > 768 && showSidebar) {
    toggleSidebar();
  }
});
