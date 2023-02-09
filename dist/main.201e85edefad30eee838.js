/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://Webpack/./src/index.css?");

/***/ }),

/***/ "./src/Calculator.ts":
/*!***************************!*\
  !*** ./src/Calculator.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nexports.__esModule = true;\r\n__webpack_require__(/*! ./index.css */ \"./src/index.css\");\r\nvar input = document.getElementById('input'), number = document.querySelectorAll('.numbers div'), operator = document.querySelectorAll('.operators div'), result = document.getElementById('result'), clear = document.getElementById('clear'), resultDisplayed = false;\r\nfor (var i = 0; i < number.length; i++) {\r\n    number[i].addEventListener(\"click\", function (e) {\r\n        var currentString = input.innerHTML;\r\n        var lastChar = currentString[currentString.length - 1];\r\n        if (resultDisplayed === false) {\r\n            input.innerHTML += e.target.innerHTML;\r\n        }\r\n        else if (resultDisplayed === true && lastChar === \"+\" || lastChar === \"-\" || lastChar === \"×\" || lastChar === \"÷\") {\r\n            resultDisplayed = false;\r\n            input.innerHTML += e.target.innerHTML;\r\n        }\r\n        else {\r\n            resultDisplayed = false;\r\n            input.innerHTML = \"\";\r\n            input.innerHTML += e.target.innerHTML;\r\n        }\r\n    });\r\n}\r\nfor (var i = 0; i < operator.length; i++) {\r\n    operator[i].addEventListener(\"click\", function (e) {\r\n        var currentString = input.innerHTML;\r\n        var lastChar = currentString[currentString.length - 1];\r\n        if (lastChar === \"+\" || lastChar === \"-\" || lastChar === \"×\" || lastChar === \"÷\") {\r\n            var newString = currentString.substring(0, currentString.length - 1) + e.target.innerHTML;\r\n            input.innerHTML = newString;\r\n        }\r\n        else if (currentString.length == 0) {\r\n            console.log(\"enter a number first\");\r\n        }\r\n        else {\r\n            input.innerHTML += e.target.innerHTML;\r\n        }\r\n    });\r\n}\r\nresult.addEventListener(\"click\", function () {\r\n    var inputString = input.innerHTML;\r\n    var numbers = inputString.split(/\\+|\\-|\\×|\\÷/g);\r\n    var operators = inputString.replace(/[0-9]|\\./g, \"\").split(\"\");\r\n    console.log(inputString);\r\n    console.log(operators);\r\n    console.log(numbers);\r\n    console.log(\"----------------------------\");\r\n    var divide = operators.indexOf(\"÷\");\r\n    while (divide != -1) {\r\n        numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);\r\n        operators.splice(divide, 1);\r\n        divide = operators.indexOf(\"÷\");\r\n    }\r\n    var multiply = operators.indexOf(\"×\");\r\n    while (multiply != -1) {\r\n        numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);\r\n        operators.splice(multiply, 1);\r\n        multiply = operators.indexOf(\"×\");\r\n    }\r\n    var subtract = operators.indexOf(\"-\");\r\n    while (subtract != -1) {\r\n        numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);\r\n        operators.splice(subtract, 1);\r\n        subtract = operators.indexOf(\"-\");\r\n    }\r\n    var add = operators.indexOf(\"+\");\r\n    while (add != -1) {\r\n        numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));\r\n        operators.splice(add, 1);\r\n        add = operators.indexOf(\"+\");\r\n    }\r\n    input.innerHTML = numbers[0];\r\n    resultDisplayed = true;\r\n});\r\nclear.addEventListener(\"click\", function () {\r\n    input.innerHTML = \"\";\r\n});\r\n\n\n//# sourceURL=webpack://Webpack/./src/Calculator.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/Calculator.ts");
/******/ 	
/******/ })()
;