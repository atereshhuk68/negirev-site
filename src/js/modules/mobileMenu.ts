const headerNavContainer = document.querySelector('.headerNavContainer')!;
const headerSocialContainer = document.querySelector('.headerSocialContainer')!;

const headerNav = document.getElementById('headerNav')!;
const headerSocial = document.getElementById('headerSocial')!;

const headerMobileMenu = document.getElementById('headerMobileMenu')!;

const headerBurger = document.getElementById('headerBurger')!;

headerBurger.addEventListener('click', () => {});

function openMobileMenu(): void {
	headerMobileMenu.classList.remove('hidden');
	headerMobileMenu.classList.add('flex');

	headerBurger.classList.add('is-active');
}

function closeMobileMenu(): void {
	headerMobileMenu.classList.add('hidden');
	headerMobileMenu.classList.remove('flex');

	headerBurger.classList.remove('is-active');
}

function toggleMobileMenu(): void {
	if (headerMobileMenu.classList.contains('hidden')) {
		openMobileMenu();
	} else {
		closeMobileMenu();
	}
}

function moveHeaderElements(): void {
	if (window.matchMedia('(max-width: 991.98px)').matches) {
		headerMobileMenu.insertAdjacentElement('beforeend', headerNav);
		headerMobileMenu.insertAdjacentElement('beforeend', headerSocial);
	} else {
		headerNavContainer.insertAdjacentElement('beforeend', headerNav);
		headerSocialContainer.insertAdjacentElement('beforeend', headerSocial);
	}
}

function initListeners(): void {
	window.addEventListener('resize', moveHeaderElements);
	moveHeaderElements();
	headerBurger.addEventListener('click', toggleMobileMenu);
}

initListeners();
