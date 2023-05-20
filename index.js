const header = document.querySelector(".main-header");
const menuOpen = document.querySelector(".menu-open");
const menuClose = document.querySelector(".menu-close");
menuOpen.addEventListener("click", function () {
	header.classList.toggle("nav-open");
	menuOpen.style.display = "none";
	menuClose.style.display = "block";
});
menuClose.addEventListener("click", function () {
	header.classList.toggle("nav-open");

	menuClose.style.display = "none";
	menuOpen.style.display = "block";
});
