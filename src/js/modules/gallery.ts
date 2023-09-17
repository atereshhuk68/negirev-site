import 'photoswipe/style.css';
import PhotoSwipeLightbox from 'photoswipe/lightbox';

const lightbox = new PhotoSwipeLightbox({
	gallery: '#lightgallery',
	children: 'a',
	counter: false,
	zoom: false,
	pswpModule: () => import('photoswipe'),
});
lightbox.init();
