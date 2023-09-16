import Splide from '@splidejs/splide';

function initSlider(): void {
	const slider = new Splide('#reviewsSlider', {
		perPage: 1,
		mediaQuery: 'min',
		gap: 32,
		pagination: true,
	});

	slider.mount();

	slider.on('inactive', function (slide) {
		console.log(slide);
	});
	slider.on('active', function (slide) {
		console.log(slide);
	});
}

initSlider();
