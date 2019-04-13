// const im = document.createElement("script");
// im.type = "importmap";
// im.textContent = JSON.stringify({
//   imports: {
//     hyperhtml: "http://localhost:8082/hyperhtml.js",
//     idb: "http://localhost:8082/idb.js",
//     marked: "http://localhost:8082/marked.js",
//     pluralize: "http://localhost:8082/pluralize.js",
//     text: "http://localhost:8082/text.js",
//     webidl2: "http://localhost:8082/webidl2.js",
//   },
// });
// document.head.appendChild(im);

const modules = [
  // order is significant
  "./core/base-runner",
  "./core/ui",
  "./core/reindent",
  "./core/location-hash",
  "./core/l10n",
  "./w3c/defaults",
  "./core/style",
  "./w3c/style",
  "./w3c/l10n",
  "./core/github",
  "./core/data-include",
  "./core/markdown",
  "./w3c/headers",
  "./w3c/abstract",
  "./core/data-transform",
  "./core/data-abbr",
  "./core/inlines",
  "./w3c/conformance",
  "./core/dfn",
  "./core/pluralize",
  "./core/examples",
  "./core/issues-notes",
  "./core/requirements",
  "./core/best-practices",
  "./core/figures",
  "./core/webidl",
  "./core/data-cite",
  "./core/biblio",
  "./core/webidl-index",
  "./core/link-to-dfn",
  "./core/render-biblio",
  "./core/contrib",
  "./core/fix-headers",
  "./core/structure",
  "./core/informative",
  "./core/id-headers",
  "./core/caniuse",
  "./ui/save-html",
  "./ui/search-specref",
  "./ui/dfn-list",
  "./ui/about-respec",
  "./core/seo",
  "./w3c/seo",
  "./core/highlight",
  "./core/webidl-clipboard",
  "./core/data-tests",
  "./core/list-sorter",
  "./core/highlight-vars",
  "./core/algorithms",
  /* Linter must be the last thing to run */
  "./core/linter",
];

(async () => {
  const loadedModules = await Promise.all(modules.map(m => import(`${m}.js`)));

  console.log(loadedModules);
  render(h("h1", null, "Hello world"), document.body);
})().then(() => console.log("ready"));

// // In case everything else fails, we want the error
// window.addEventListener("error", ev => {
//   console.error(ev.error, ev.message, ev);
// });

// define(, (runner, { ui }, ...plugins) => {
//   ui.show();
//   const loadPromise = new Promise(r => {
//     if (document.readyState !== "loading") {
//       r();
//       return;
//     }
//     document.addEventListener("DOMContentLoaded", r)
//   });
//   loadPromise.then(async () => {
//     try {
//       await runner.runAll(plugins);
//     } catch (err) {
//       console.error(err);
//     } finally {
//       ui.enable();
//     }
//   });
// });
