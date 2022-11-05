//menu para desktop
const menuDesktop = document.querySelector(".menu-container-desktop")

function toggleMenu(){
	menuDesktop.classList.toggle('inactive')
}


//menu para mobile
const menuMobile = document.querySelector(".menu-container-mobile")


function toggleMenuMobile(){
	menuMobile.classList.toggle("inactive-mobile")

	const isMenuMobileOpen = !menuMobile.classList.contains("inactive-mobile")
	const idCards = document.querySelector("#id-cards")
	if (isMenuMobileOpen) {
    	idCards.classList.add("inactive-imgs")
	}else {
		idCards.classList.remove("inactive-imgs")
	}
}

//menu de compras para desktop
const menuCartDesktop = document.querySelector(".main-container")

function toggleCart(){
	menuCartDesktop.classList.toggle("inactive-cart")
}
