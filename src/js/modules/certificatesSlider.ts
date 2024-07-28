import "@splidejs/splide/css/core";
import "../../scss/modules/slider.scss";
import Splide from "@splidejs/splide";

export const certificatesSlider = (() => {
  const certificatesSliderContainer: HTMLElement | null =
    document.querySelector("#certificateSlider");

  if (!certificatesSliderContainer) return;

  const slider = new Splide(certificatesSliderContainer, {
    type: "loop",
    perPage: 1,
    mediaQuery: "min",
    gap: 32,
  });

  function beforeSliderMount() {
    slider.on("mounted", () => {
      const sliders =
        certificatesSliderContainer?.querySelectorAll(".splide__slide");

      if (!sliders) return;

      for (const slide of sliders) {
        slide.role = "listitem";
      }

      const slidesList =
        certificatesSliderContainer?.querySelector(".splide__list");

      if (!slidesList) return;

      slidesList.role = "list";
    });
  }

  function init(): void {
    beforeSliderMount();
    slider.mount();
  }

  return {
    init,
  };
})();
