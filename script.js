const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const navbar = document.getElementById("navbar");

openMenu.onclick = () => {
    openMenu.style.display = "none"
    closeMenu.style.display = "flex"
    navbar.style.display = "flex"
}

closeMenu.onclick = () => {
    openMenu.style.display = "flex"
    closeMenu.style.display = "none"
    navbar.style.display = "none"
}