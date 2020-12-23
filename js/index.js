const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navItemsList = document.getElementsByClassName('navegacao-itens')[0];
toggleButton.addEventListener('click', () => {
		navItemsList.classList.toggle('active');
});
