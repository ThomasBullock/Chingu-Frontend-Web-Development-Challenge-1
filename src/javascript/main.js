(function(global){

// console.log(global.smoothScroll);

global.smoothScroll.init();


let message = 'Application is running!'

console.log(message)

// Off Canvas	
const offCanvasMenuBtn = document.querySelector('.navbar__menu-toggle');
const offCanvasMenu = document.querySelector('.offcanvas-nav');
const offCanvasFadeScreen = document.querySelector('.offcanvas-fade-screen');
const menuIcon = document.querySelector('.navbar__menu-icon');


offCanvasMenuBtn.addEventListener('click', (e) => {
	offCanvasMenu.classList.toggle('offcanvas-nav--show');
	offCanvasFadeScreen.classList.toggle('offcanvas-fade-screen--show');
	// toggle menu icon when when is opened
	(menuIcon.textContent == 'menu') ? menuIcon.textContent = 'clear' : menuIcon.textContent = 'menu';
})


// Gallery
const galleryItems = Array.from(document.querySelectorAll('.gallery__img'));
galleryItems.forEach( (picture) =>  {
	picture.addEventListener('mouseover', function(e) {
		const caption = e.target.nextElementSibling;
		caption.classList.toggle('gallery__caption--hover');
	}, false);
	picture.addEventListener('mouseleave', function(e) {
		const caption = e.target.nextElementSibling;
		caption.classList.toggle('gallery__caption--hover');
	}, false);	
})

// Features
const processNumbers = Array.from(document.querySelectorAll('.features__icon'));
const processList = Array.from(document.querySelectorAll('.features__list-item'));

processNumbers.forEach( (item) => {
	item.addEventListener('mouseenter', (e) => {
		// select the correct item from process list with the number return from e.target.textContent
		var number = parseInt(e.target.textContent);
		processList[number - 1].classList.toggle('features__list-item--highlight')
	})

	item.addEventListener('mouseleave', (e) => {
		// select the correct item from process list with the number return from e.target.textContent
		var number = parseInt(e.target.textContent);
		processList[number - 1].classList.toggle('features__list-item--highlight')
	})	

})





		
	
}(window));