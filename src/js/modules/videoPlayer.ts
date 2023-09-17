import video from '../../assets/video/video.mp4?url';

const videoPlayerMockup = document.querySelector('.videoPlayerMockup')!;
const videoPlayer: any = document.getElementById('videoPlayer')!;

videoPlayerMockup.addEventListener('click', function () {
	videoPlayerMockup.classList.add('hidden');
	videoPlayer?.classList.remove('hidden');
	videoPlayer?.setAttribute('src', video);
	videoPlayer?.removeAttribute('data-src');
	videoPlayer?.play();
});
