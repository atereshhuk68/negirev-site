import video from "/video/video.mp4?url";

export const addVideoOnPage = (() => {
  const videoPlayerMockup = document.querySelector(".videoPlayerMockup")!;
  const videoPlayer: any = document.getElementById("videoPlayer")!;

  function handleClickCreateVideoSrcTag() {
    videoPlayerMockup.classList.add("hidden");
    videoPlayer?.classList.remove("hidden");
    videoPlayer?.setAttribute("src", video);
    videoPlayer?.removeAttribute("data-src");
    videoPlayer?.play();
  }

  function init() {
    videoPlayerMockup.addEventListener("click", handleClickCreateVideoSrcTag);
  }

  return {
    init,
  };
})();
