"use strict";
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
return (self["webpackChunksomeLibName"] = self["webpackChunksomeLibName"] || []).push([["home"],{

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./공룡.jpeg */ \"./공룡.jpeg\");\n/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/client */ \"../node_modules/react-dom/client.js\");\n\n\n\n\nvar App = function App() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: _jpeg__WEBPACK_IMPORTED_MODULE_1__\n  }));\n};\n\nvar root = react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot(document.getElementById(\"root\"));\nroot.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://someLibName/./app.js?");

/***/ }),

/***/ "../node_modules/react-dom/client.js":
/*!*******************************************!*\
  !*** ../node_modules/react-dom/client.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nvar m = __webpack_require__(/*! react-dom */ \"../node_modules/react-dom/index.js\");\nif (false) {} else {\n  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;\n  exports.createRoot = function(c, o) {\n    i.usingClientEntryPoint = true;\n    try {\n      return m.createRoot(c, o);\n    } finally {\n      i.usingClientEntryPoint = false;\n    }\n  };\n  exports.hydrateRoot = function(c, h, o) {\n    i.usingClientEntryPoint = true;\n    try {\n      return m.hydrateRoot(c, h, o);\n    } finally {\n      i.usingClientEntryPoint = false;\n    }\n  };\n}\n\n\n//# sourceURL=webpack://someLibName/../node_modules/react-dom/client.js?");

/***/ }),

/***/ "./공룡.jpeg":
/*!*****************!*\
  !*** ./공룡.jpeg ***!
  \*****************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/04e2cbadb405eb375e93.jpeg\";\n\n//# sourceURL=webpack://someLibName/./%EA%B3%B5%EB%A3%A1.jpeg?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./app.js"));
/******/ return __webpack_exports__;
/******/ }
]);
});