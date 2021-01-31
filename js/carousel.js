let $ = document.querySelector.bind(document);

let carouselItems = $('#carousel-items');
let carouselBtn = $('#carousel-btn');
let carouselBtnRight = $('#carousel-btn-right');
let carouselBtnLeft = $('#carousel-btn-left');

carouselBtn.addEventListener('click', (event) => {
	event.preventDefault();
	if() {
		carouselItems.scrollBy(300, 0);
	} else {
		carouselItems.scrollBy(-300, 0);
	}
});
