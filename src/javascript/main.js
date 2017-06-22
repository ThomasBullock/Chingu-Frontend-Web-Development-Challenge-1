(function(global){

let message = 'Application is running!'

console.log(message)
	
const offCanvasMenuBtn = document.querySelector('.navbar__menu-toggle');
const offCanvasMenu = document.querySelector('.offcanvas-nav');
const offCanvasFadeScreen = document.querySelector('.offcanvas-fade-screen');

offCanvasMenuBtn.addEventListener('click', (e) => {
	offCanvasMenu.classList.toggle('offcanvas-nav--show');
	offCanvasFadeScreen.classList.toggle('offcanvas-fade-screen--show')
}) 	
		
	
}(window));