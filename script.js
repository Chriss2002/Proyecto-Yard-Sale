//menu para desktop
const menuDesktop = document.querySelector(".menu-container-desktop")
//menu para mobile
const menuMobile = document.querySelector(".menu-container-mobile")
const mainCart = document.querySelector(".main-container")
//menu de compras para desktop
const menuCartDesktop = document.querySelector(".main-container")
//contenedor de productos
let cardsContainer = document.querySelector(".cards-container")
//
const detailProduct = document.querySelector(".detail-product--container")


function toggleMenu(){
	menuDesktop.classList.toggle('inactive')
}

function toggleMenuMobile(){
	menuMobile.classList.toggle("inactive-mobile")


	const isMenuMobileOpen = !menuMobile.classList.contains("inactive-mobile")
	const idCards = document.querySelector("#id-cards")
	if (isMenuMobileOpen) {
    	idCards.classList.add("inactive-imgs")
    	detailProduct.classList.add("inactive")
	}else {
		idCards.classList.remove("inactive-imgs")
		detailProduct.classList.remove("inactive")
	}

	if(!menuCartDesktop.classList.contains("inactive-cart")){
		menuMobile.classList.toggle("inactive-menu")
	}

	if(menuMobile.classList.contains("inactive-menu")){
		idCards.classList.remove("inactive-imgs")
	}
}


function toggleCart(){
	menuCartDesktop.classList.toggle("inactive-cart")

	if(!menuMobile.classList.contains("inactive-mobile")){
		menuCartDesktop.classList.toggle("inactive-cart")
	}
}


//
/*<div class="product-card">
    <img src="imgs/estante.png" class="product-img">
    <div class="price-container">
        <div>
            <p class="price">$120</p>
            <p class="description-main-imgs">Round shelf</p>
        </div>
        <img src="icons/agregar-carrito.svg">
    </div>
</div>*/

const productCards = [];

productCards.push({
	img: "https://images.pexels.com/photos/1149601/pexels-photo-1149601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	price: 120,
	name: "Bike",
	cart: "icons/agregar-carrito.svg"
})
productCards.push({
	img: "https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	price: 650,
	name: "Laptop",
	cart: "icons/agregar-carrito.svg"
})
productCards.push({
	img: "https://images.pexels.com/photos/11772524/pexels-photo-11772524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	price: 1200,
	name: "Phone",
	cart: "icons/agregar-carrito.svg"
})


function mainCards(arr){
	for(product of arr){
		let productCard = document.createElement("div")
		productCard.classList.add("product-card")	

		let image = document.createElement("img")
		image.setAttribute("src", product.img)
		image.classList.add("product-img")
		image.addEventListener("click", openDetailProduct)


		let priceContainer = document.createElement("div")
		priceContainer.classList.add("price-container")	

		let divPrice = document.createElement("div")	

		let price = document.createElement("p")
		price.innerText = "$ " + product.price
		price.classList.add("price")	

		let description = document.createElement("p")
		description.innerText = product.name
		description.classList.add("description-main-imgs")	

		let cartImg = document.createElement("img")
		cartImg.setAttribute("src", product.cart)	

	    divPrice.appendChild(price)
	    divPrice.appendChild(description)	
	

	    priceContainer.appendChild(divPrice)
	    priceContainer.appendChild(cartImg)
	    	

		productCard.appendChild(image)
		productCard.appendChild(priceContainer)	

		cardsContainer.appendChild(productCard)	
	}
}

mainCards(productCards)


/**/
const buttonCloseDetailProduct = document.querySelector(".close-detail")

function openDetailProduct(){
	detailProduct.classList.remove("inactive-detail")
	console.log("hola")
}

buttonCloseDetailProduct.addEventListener("click", closeDetailProduct)
function closeDetailProduct(){
	detailProduct.classList.add("inactive-detail")
	console.log("holaa")
}



