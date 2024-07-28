import "@scss/entries/home.scss";

import { commonModule } from "../common";

/* Script for this page */
import { addVideoOnPage } from "../modules/videoPlayer.ts";
import { reviewsSlider } from "../modules/reviewsSlider.ts";

(async () => {
  await commonModule();

  addVideoOnPage.init();
  reviewsSlider!.init();
})();
