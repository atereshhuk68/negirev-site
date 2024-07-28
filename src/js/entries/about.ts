import "@scss/entries/about.scss";

import { commonModule } from "../common";

import { certificatesSlider } from "../modules/certificatesSlider.ts";
import { lightboxGallery } from "../modules/gallery.ts";

(async () => {
  await commonModule();

  certificatesSlider!.init();
  lightboxGallery.init();
})();
