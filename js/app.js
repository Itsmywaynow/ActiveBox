const header = document.querySelector('.header');
const introTitle = document.querySelector('.intro-title');
const navLinks = document.querySelectorAll('.nav__link')
// scroll intro title pink
window.addEventListener('scroll', checkPos);

window.addEventListener('DOMContentLoader', checkPos)

function checkPos(){
	let posY = window.pageYOffset;

	if (posY > 0) {
		introTitle.classList.add('pink');
	}else {
		introTitle.classList.remove('pink');
	}	
}
// /scroll
window.addEventListener('click', function(){
	let counter = 0;
	counter++;
	console.log(counter);
});

// navLinks.addEventListener('click', function(){
// 	console.log('click');                        не работает для всех ссылок
// })

for(let navItem of navLinks) {   
	navItem.addEventListener('click', function(){
		console.log(navItem.text);
	});
}