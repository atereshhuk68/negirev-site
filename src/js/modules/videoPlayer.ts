const videoPlayerMockup = document.querySelector('.videoPlayerMockup')!;
const videoPlayer: HTMLVideoElement = document.getElementById('videoPlayer')!;

videoPlayerMockup.addEventListener('click', function () {
	(this as HTMLDivElement).classList.add('hidden');

	const videoPath: string | undefined = videoPlayer?.dataset.src;
	videoPlayer?.classList.remove('hidden');
	if (videoPath) {
		videoPlayer?.setAttribute('src', videoPath);
		videoPlayer?.removeAttribute('data-src');
		videoPlayer?.play();
	}
});
