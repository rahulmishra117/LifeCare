window.onload = () => {
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
