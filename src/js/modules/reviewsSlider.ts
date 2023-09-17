import Splide from '@splidejs/splide';

function initSlider(): void {
	const slider = new Splide('#reviewsSlider', {
		type: 'loop',
		perPage: 1,
		mediaQuery: 'min',
		gap: 32,
		pagination: true,
	});

	slider.mount();
}

initSlider();
