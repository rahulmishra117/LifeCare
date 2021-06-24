const changeNav = changeNavBar();
const navbar = document.querySelector(".navbar");

function changeNavBar() {
	let timer;
	return function () {
		if (timer) clearTimeout(timer);
		timer = setTimeout(() => {
			if (window.pageYOffset >=0) navbar.classList.add("sticky");
			else navbar.classList.remove("sticky");
		},200);
	};
}

window.onload = () => {
	changeNav()

	let menuButton = document.querySelector(".menu");
	let responsiveNavbar = document.querySelector(".navbar-links-responsive");
	let closeButton = document.querySelector(".close");

	menuButton.addEventListener("click", () => {
		responsiveNavbar.classList.add("navbar-glide");
	});

	closeButton.addEventListener("click", () => {
		responsiveNavbar.classList.remove("navbar-glide");
	});
};
