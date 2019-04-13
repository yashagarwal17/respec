import { addStylesheet } from "../core/utils.js";

// @ts-check
/**
Currently used only for adding 'assert' class to algorithm lists
*/

export const name = "core/algorithms";

export async function run() {
  const elements = Array.from(document.querySelectorAll("ol.algorithm li"));
  elements
    .filter(li => li.textContent.trim().startsWith("Assert: "))
    .forEach(li => li.classList.add("assert"));
  if (document.querySelector(".assert")) {
    addStylesheet("../assets/algorithms.css");
  }
}
