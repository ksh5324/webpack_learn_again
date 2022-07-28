/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	//CommonJS2 Comment
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	//AMD Comment
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	//CommonJS Comment
	else if(typeof exports === 'object')
		exports["someLibName"] = factory();
	//Root Comment
	else
		root["someLibName"] = factory();
})(self, () => {
return (self["webpackChunksomeLibName"] = self["webpackChunksomeLibName"] || []).push([["main"],{

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ (() => {

eval("var b = 4;\nconsole.log(b + 1);\n\n//# sourceURL=webpack://someLibName/./index.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./index.js"));
/******/ return __webpack_exports__;
/******/ }
]);
});