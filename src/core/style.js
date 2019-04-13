// @ts-check
// Module core/style
// Inserts the CSS that ReSpec uses into the document.
//
// IMPORTANT NOTE
//  To add you own styles, create a plugin that declares the css as a dependency
//  and create a build of your new ReSpec profile.
//
// CONFIGURATION
//  - noReSpecCSS: if you're using a profile that loads this module but you don't want
//    the style, set this to true
import { addStylesheet } from "../core/utils.js";

export const name = "core/style";

// Opportunistically inserts the style, with the chance to reduce some FOUC
addStylesheet("../assets/respec2.css", "respec-mainstyle")

export function run(conf) {
  if (conf.noReSpecCSS) {
    document.getElementById("respec-mainstyle").remove();
  }
}
