let $ = document.querySelector.bind(document);

let carouselItems = $('#carousel-items');
let carouselBtn = $('#carousel-btn');
let carouselBtnRight = $('#carousel-btn-right');
let carouselBtnLeft = $('#carousel-btn-left');

carouselBtn.addEventListener('click', (event) => {
	event.preventDefault();
	if(event.path[2].querySelector('.carousel-angle-right')) {
		carouselItems.scrollBy(300, 0);
	} 
});

carouselBtn.addEventListener('click', (event) => {
	event.preventDefault();
	if(event.path[2].querySelector('.carousel-angle-left')) {
		carouselItems.scrollBy(-300, 0);
	} 
});
