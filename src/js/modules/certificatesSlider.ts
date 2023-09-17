import Splide from '@splidejs/splide';

function initSlider(): void {
	const slider = new Splide('#certificateSlider', {
		type: 'loop',
		perPage: 1,
		mediaQuery: 'min',
		gap: 32,
	});

	slider.mount();
}

initSlider();
