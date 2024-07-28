import { createSvgSpriteElement } from "./modules/svgSprite.ts";
import { mobileMenu } from "./modules/mobileMenu.ts";
import { siteScrollToBehavior } from "./modules/scrollTo.ts";

export const commonModule = async () => {
  createSvgSpriteElement.init();
  mobileMenu.init();
  siteScrollToBehavior.init();
};
