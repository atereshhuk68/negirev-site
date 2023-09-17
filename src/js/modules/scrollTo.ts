const hdm = document.getElementById('headerMobileMenu')!;
const hb = document.getElementById('headerBurger')!;

function cmm(): void {
	hdm.classList.add('hidden');
	hdm.classList.remove('flex');

	document.body.classList.remove('overflow-hidden');

	hb.classList.remove('is-active');
}

const scrollToLinks: NodeListOf<HTMLLinkElement> = document.querySelectorAll('.scrollTo');

if (scrollToLinks.length !== 0) {
	scrollToLinks.forEach((item) => {
		item.addEventListener('click', function (evt) {
			evt.preventDefault();

			if (!hdm.classList.contains('hidden')) {
				cmm();
			}

			const toGo = this.getAttribute('href');
			const section = document.querySelector(`${toGo}`);

			if (section) {
				const yCord = section.getBoundingClientRect().top;

				window.scrollTo({
					top: yCord,
					left: 0,
					behavior: 'smooth',
				});
			}
		});
	});
}
