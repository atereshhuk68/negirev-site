import "photoswipe/style.css";
import PhotoSwipeLightbox from "photoswipe/lightbox";

export const lightboxGallery = (() => {
  const lightbox = new PhotoSwipeLightbox({
    gallery: "#lightgallery",
    children: "a",
    counter: false,
    zoom: false,
    pswpModule: () => import("photoswipe"),
  });

  return {
    init() {
      lightbox.init();
    },
  };
})();
