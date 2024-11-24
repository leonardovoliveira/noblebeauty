
const textElement = document.getElementById('text');
const text = 'Noble Beauty';
let index = 0;

function typeText() {
	if (index <= text.length) {
	  textElement.innerHTML = text.slice(0, index);
	  index++;
	}
	
	if (index > text.length) {
		setTimeout(() => {
		  textElement.innerHTML = text;
		  setTimeout(() => {
			textElement.innerHTML = '';
			index = 0;
			setTimeout(typeText, 60);
		  }, 5000);
		}, 60);
	  } else {
		setTimeout(typeText, 60);
	  }
	}
	
	typeText();

document.addEventListener('DOMContentLoaded', function() {
	const hamburguer = document.querySelector('.menu-hamburguer');
	
	hamburguer.addEventListener('click', function() {
		hamburguer.classList.toggle('menu-ativo');
	});
});

const swiper = new Swiper('.swiper', {
	spaceBetween: 1,
	slidesPerView: 3.4,
	pagination: {
		el: '.swiper-pagination',
		type: '',
	},
	autoplay: {
		delay: 1500,
	},
}
);