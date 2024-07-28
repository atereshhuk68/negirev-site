import "@splidejs/splide/css/core";
import "../../scss/modules/slider.scss";
import Splide from "@splidejs/splide";

export const reviewsSlider = (() => {
  const reviewsSliderContainer: HTMLElement | null =
    document.querySelector("#reviewsSlider");

  if (!reviewsSliderContainer) return;

  const slider = new Splide(reviewsSliderContainer, {
    type: "loop",
    perPage: 1,
    mediaQuery: "min",
    gap: 32,
    pagination: true,
  });

  function beforeSliderMount() {
    slider.on("mounted", () => {
      const sliders =
        reviewsSliderContainer?.querySelectorAll(".splide__slide");

      if (!sliders) return;

      for (const slide of sliders) {
        slide.role = "listitem";
      }

      const slidesList = reviewsSliderContainer?.querySelector(".splide__list");

      if (!slidesList) return;

      slidesList.role = "list";
    });
  }

  function init() {
    beforeSliderMount();
    slider.mount();
  }

  return {
    init,
  };
})();
