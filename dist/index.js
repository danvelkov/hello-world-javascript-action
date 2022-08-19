/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 442:
/***/ ((module) => {

module.exports = eval("require")("@actions/core");


/***/ }),

/***/ 671:
/***/ ((module) => {

module.exports = eval("require")("@actions/github");


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
const core = __nccwpck_require__(442);
const github = __nccwpck_require__(671);

try {
  const result = getAllVariants();
  console.log(result);
} catch (error) {
  core.setFailed(error.message);
}

function getAllVariants() {
  let idArray = [];
  var httpResponse = httpClient.get("https://myvariant.info/v1/query?q=cadd.phred:%3E70&cdk*&size=1&from=0");
  const myVariantJSON = JSON.parse(httpResponse.text);
  let total = myVariantJSON.total;
  let i = 0;
  do {
      console.log("\n\n\n\n\n" + total);
      var httpResponseNext = httpClient.get("https://myvariant.info/v1/query?q=cadd.phred:%3E70&cdk*&size=5&from=" + i);
      const myVariantJSONNext = JSON.parse(httpResponseNext.text);
      myVariantJSONNext.hits.forEach(hit => {
          console.log(JSON.stringify(hit._id))
          idArray.push(hit._id)

      })
      i += 5;
      total -= 5;
      console.log(idArray)
      console.log(idArray.length)
  } while (total > 952)
	  
  core.setOutput("time", idArray);
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
}
})();

module.exports = __webpack_exports__;
/******/ })()
;