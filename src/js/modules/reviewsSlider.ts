import Splide from '@splidejs/splide';

function initSlider(): void {
	const slider = new Splide('#reviewsSlider', {
		perPage: 1,
		mediaQuery: 'min',
		gap: 32,
		pagination: true,
		autoHeight: true,
	});

	slider.mount();

	slider.refresh();
}

initSlider();
