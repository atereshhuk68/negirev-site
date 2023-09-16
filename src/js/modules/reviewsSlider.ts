import Splide from '@splidejs/splide';

function initSlider(): void {
	const slider = new Splide('#reviewsSlider', {
		perPage: 1,
		mediaQuery: 'min',
		gap: 32,
		pagination: true,
	});

	const bar: any = document.querySelector('.reviews-progress-bar');

	slider.on('mounted move', function () {
		let end = slider.Components.Controller.getEnd() + 1;
		let rate = Math.min((slider.index + 1) / end, 1);
		bar.style.width = String(100 * rate) + '%';
	});

	slider.mount();
}

initSlider();
