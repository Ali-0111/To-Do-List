"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/re-start.png */ \"./src/icons/re-start.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/enter.svg */ \"./src/icons/enter.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/three-dots.png */ \"./src/icons/three-dots.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/trash.svg */ \"./src/icons/trash.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/done.svg */ \"./src/icons/done.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  font-size: 62.5%;\\r\\n\\r\\n  --bg: #f1f2f5;\\r\\n\\r\\n  background-color: var(--bg);\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  border: none;\\r\\n}\\r\\n\\r\\n.flex-col {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.flex-row {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\ninput:focus {\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\nli {\\r\\n  margin: 1rem 0;\\r\\n  list-style: none;\\r\\n  padding-top: 0.5rem;\\r\\n}\\r\\n\\r\\n/****************** section:page1 ***********/\\r\\n\\r\\n.page1 {\\r\\n  width: 90%;\\r\\n  margin: 0 auto;\\r\\n  height: 100vh;\\r\\n}\\r\\n\\r\\n/************* container for the todo list ********/\\r\\n.container {\\r\\n  border: 1px solid var(--bg);\\r\\n  box-shadow: 5px 1px 8px var(--bg);\\r\\n  width: 60%;\\r\\n  background-color: white;\\r\\n  border-radius: 1rem;\\r\\n}\\r\\n\\r\\n.list {\\r\\n  padding: 1rem;\\r\\n  padding-top: 0;\\r\\n}\\r\\n\\r\\n/*********** inside the list *************/\\r\\n.main-head {\\r\\n  font-size: 1rem;\\r\\n}\\r\\n\\r\\n/*********** form section */\\r\\n\\r\\n.addForm {\\r\\n  border-bottom: 1px solid gray;\\r\\n  padding-bottom: 1rem;\\r\\n}\\r\\n\\r\\n.add-input {\\r\\n  border: none;\\r\\n  font-size: 1rem;\\r\\n}\\r\\n\\r\\n::placeholder {\\r\\n  font-style: italic;\\r\\n}\\r\\n\\r\\n/************* items section  */\\r\\n.restart,\\r\\n.enter,\\r\\n.moreBtn {\\r\\n  width: 1.8rem;\\r\\n  height: 1.8rem;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.restart {\\r\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") no-repeat;\\r\\n  background-size: 1.8rem;\\r\\n}\\r\\n\\r\\n.enter {\\r\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") no-repeat;\\r\\n  background-size: 1.8rem;\\r\\n}\\r\\n\\r\\n.todo {\\r\\n  display: flex;\\r\\n  justify-content: flex-start;\\r\\n  align-items: center;\\r\\n  position: relative;\\r\\n  font-size: 1rem;\\r\\n}\\r\\n\\r\\n/* .check {\\r\\n  border: 2px solid #dbdee7;\\r\\n  width: 1rem;\\r\\n  height: 1rem;\\r\\n  background: transparent;\\r\\n\\r\\n} */\\r\\n\\r\\n.check {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.check-btn {\\r\\n  display: block;\\r\\n  margin-inline: 1rem;\\r\\n  width: 1.8rem;\\r\\n  height: 1.8rem;\\r\\n  background-color: white;\\r\\n  border: 2px solid var(--bg);\\r\\n}\\r\\n\\r\\n.check-btn::before {\\r\\n  content: '';\\r\\n  display: none;\\r\\n  width: 6px;\\r\\n  height: 3px;\\r\\n  background-color: white;\\r\\n  transform: rotate(42deg);\\r\\n  position: relative;\\r\\n  top: 6px;\\r\\n}\\r\\n\\r\\n.check-btn::after {\\r\\n  content: '';\\r\\n  display: none;\\r\\n  width: 12px;\\r\\n  height: 3px;\\r\\n  background-color: white;\\r\\n  transform: rotate(-54deg);\\r\\n  position: relative;\\r\\n  top: 2px;\\r\\n  left: 3px;\\r\\n}\\r\\n\\r\\n.check:checked ~ .check-btn {\\r\\n  background-color: blue;\\r\\n  border-color: blue;\\r\\n}\\r\\n\\r\\n.check:checked ~ .check-btn::before,\\r\\n.check:checked ~ .check-btn::after {\\r\\n  display: inline-block;\\r\\n}\\r\\n\\r\\n.moreBtn {\\r\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \") no-repeat;\\r\\n  background-size: 1.8rem;\\r\\n  position: absolute;\\r\\n  right: 0;\\r\\n}\\r\\n\\r\\n.item-text {\\r\\n  text-align: start;\\r\\n  padding: 0.5rem;\\r\\n  border: none;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.clear-btn {\\r\\n  width: 100%;\\r\\n  border: none;\\r\\n  background-color: var(--bg);\\r\\n  padding: 1rem;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.scratch {\\r\\n  text-decoration: line-through;\\r\\n}\\r\\n\\r\\n.delete-Task-Btn {\\r\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \") no-repeat;\\r\\n  background-size: 1.8rem;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.mark {\\r\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_4___ + \") no-repeat;\\r\\n  background-size: 1.8rem;\\r\\n  border: none;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_todoList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/todoList.js */ \"./src/modules/todoList.js\");\n/* harmony import */ var _modules_editFunctionality_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/editFunctionality.js */ \"./src/modules/editFunctionality.js\");\n/* harmony import */ var _modules_remove_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/remove.js */ \"./src/modules/remove.js\");\n\r\n\r\n\r\n\r\n\r\nwindow.onload = () => {\r\n  _modules_todoList_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].show();\r\n  _modules_editFunctionality_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].setControlls();\r\n  _modules_remove_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].setControlls();\r\n};\r\n\r\n_modules_todoList_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].enterBtn.onclick = (e) => {\r\n  e.preventDefault();\r\n  _modules_todoList_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addTodo();\r\n  _modules_todoList_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].show();\r\n  _modules_editFunctionality_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].setControlls();\r\n  _modules_remove_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].setControlls();\r\n};\r\n\r\n_modules_todoList_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].clearBtn.onclick = () => {\r\n  _modules_todoList_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deleteCompleted();\r\n  _modules_todoList_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].show();\r\n  _modules_editFunctionality_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].setControlls();\r\n  _modules_remove_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].setControlls();\r\n};\r\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/editFunctionality.js":
/*!******************************************!*\
  !*** ./src/modules/editFunctionality.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _todoList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoList.js */ \"./src/modules/todoList.js\");\n\r\n\r\nclass EditOption {\r\n  constructor() {\r\n    this.setControlls = () => {\r\n      this.threeDots = document.querySelectorAll('.moreBtn');\r\n      this.threeDots.forEach((btn, index) => {\r\n        btn.addEventListener('click', () => {\r\n          this.enableEdition(index);\r\n          this.Description[index].focus();\r\n        });\r\n      });\r\n      this.Description = document.querySelectorAll('.item-text');\r\n      this.Description.forEach((input, index) => {\r\n        input.addEventListener('focusin', () => {\r\n          this.enableEdition(index);\r\n        });\r\n      });\r\n    };\r\n  }\r\n\r\n  enableEdition(i) {\r\n    this.delteTaskBtn = document.getElementById(`delete-Btn${i + 1}`);\r\n    this.delteTaskBtn.classList.add('delete-Task-Btn');\r\n    this.delteTaskBtn.onclick = () => {\r\n      _todoList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].db = _todoList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].db.filter((t, index) => index !== i);\r\n      _todoList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].show();\r\n      _todoList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].save();\r\n      this.setControlls();\r\n    };\r\n\r\n    const input = this.Description[i];\r\n\r\n    input.removeAttribute('readonly');\r\n    input.addEventListener('keydown', (e) => {\r\n      if (e.key === 'Enter') {\r\n        this.saveEdition(i, input);\r\n      }\r\n    });\r\n    this.threeDots[i].addEventListener('blur', (e) => {\r\n      if (!e.target.classList.contains('moreBtn')) {\r\n        this.saveEdition(i, input);\r\n      }\r\n    });\r\n    input.addEventListener('keydown', (e) => {\r\n      if (e.key === 'Escape') {\r\n        input.value = _todoList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].db[i].description;\r\n        this.disableEdition(input);\r\n      }\r\n    });\r\n  }\r\n\r\n  saveEdition(i, input) {\r\n    _todoList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].db[i].description = input.value;\r\n    this.disableEdition(input);\r\n  }\r\n\r\n  disableEdition(input) {\r\n    input.setAttribute('readonly', true);\r\n    _todoList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].show();\r\n    _todoList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].save();\r\n    this.setControlls();\r\n  }\r\n}\r\nconst Edit = new EditOption();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);\n\n//# sourceURL=webpack://to-do-list/./src/modules/editFunctionality.js?");

/***/ }),

/***/ "./src/modules/remove.js":
/*!*******************************!*\
  !*** ./src/modules/remove.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _todoList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoList.js */ \"./src/modules/todoList.js\");\n/* harmony import */ var _editFunctionality_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editFunctionality.js */ \"./src/modules/editFunctionality.js\");\n\r\n\r\n\r\nclass RemoveCompleted {\r\n  constructor() {\r\n    this.setControlls = () => {\r\n      this.checkInputs = document.querySelectorAll('.check');\r\n      this.checkButtons = document.querySelectorAll('.check-btn');\r\n      this.checkButtons.forEach((checkBox, index) => {\r\n        checkBox.addEventListener('click', () => {\r\n          this.check(index);\r\n        });\r\n      });\r\n    };\r\n  }\r\n\r\n  check(i) {\r\n    if (!_todoList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].db[i].completed) {\r\n      _todoList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].db[i].completed = true;\r\n    } else {\r\n      _todoList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].db[i].completed = false;\r\n    }\r\n    _todoList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].show();\r\n    _todoList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].save();\r\n    _editFunctionality_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setControlls();\r\n    this.setControlls();\r\n  }\r\n}\r\nconst marked = new RemoveCompleted();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (marked);\n\n//# sourceURL=webpack://to-do-list/./src/modules/remove.js?");

/***/ }),

/***/ "./src/modules/todoList.js":
/*!*********************************!*\
  !*** ./src/modules/todoList.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass List {\r\n  constructor() {\r\n    this.db = JSON.parse(localStorage.getItem('data')) || [];\r\n    this.resetBtn = document.querySelector('.restart');\r\n    this.input = document.querySelector('.add-input');\r\n    this.enterBtn = document.querySelector('.enter');\r\n    this.items = document.querySelector('.items');\r\n    this.clearBtn = document.querySelector('.clear-btn');\r\n  }\r\n\r\n  addTodo() {\r\n    // new object will be added to array\r\n\r\n    this.db.push({\r\n      description: this.input.value,\r\n      completed: false,\r\n      index: this.db.length + 1,\r\n    });\r\n\r\n    this.input.value = '';\r\n\r\n    // storage updated\r\n    this.save();\r\n  }\r\n\r\n  deleteCompleted() {\r\n    this.db = this.db.filter((task) => !task.completed);\r\n    this.save();\r\n  }\r\n\r\n  makeIndex() {\r\n    this.db.forEach((element, i) => {\r\n      element.index = i + 1;\r\n    });\r\n  }\r\n\r\n  save() {\r\n    this.makeIndex();\r\n    localStorage.setItem('data', JSON.stringify(this.db));\r\n  }\r\n\r\n  show() {\r\n    this.items.innerHTML = this.db.map((element) => (`\r\n      <li class = \"todo\">\r\n        <input type=\"checkbox\" class=\"check\" ></input>\r\n        <span class=\"check-btn  ${element.completed ? 'mark' : ''}\"></span>\r\n        <input readonly\r\n      class=\"item-text ${element.completed ? 'scratch' : ''}\"\r\n      value=\"${element.description}\">\r\n        <button\r\n        id=\"delete-Btn${element.index}\"\r\n        class=\"moreBtn\"\r\n        type\"button\">\r\n      </button>\r\n      </li>`\r\n    )).join('');\r\n  }\r\n}\r\n\r\nconst list = new List();\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (list);\n\n//# sourceURL=webpack://to-do-list/./src/modules/todoList.js?");

/***/ }),

/***/ "./src/icons/done.svg":
/*!****************************!*\
  !*** ./src/icons/done.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1751bc1518a6b7cf64e9.svg\";\n\n//# sourceURL=webpack://to-do-list/./src/icons/done.svg?");

/***/ }),

/***/ "./src/icons/enter.svg":
/*!*****************************!*\
  !*** ./src/icons/enter.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"24599cac983df594cd65.svg\";\n\n//# sourceURL=webpack://to-do-list/./src/icons/enter.svg?");

/***/ }),

/***/ "./src/icons/re-start.png":
/*!********************************!*\
  !*** ./src/icons/re-start.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a4872574a0ae9fb8c0a9.png\";\n\n//# sourceURL=webpack://to-do-list/./src/icons/re-start.png?");

/***/ }),

/***/ "./src/icons/three-dots.png":
/*!**********************************!*\
  !*** ./src/icons/three-dots.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a67d1e9eab922857994f.png\";\n\n//# sourceURL=webpack://to-do-list/./src/icons/three-dots.png?");

/***/ }),

/***/ "./src/icons/trash.svg":
/*!*****************************!*\
  !*** ./src/icons/trash.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0fa30be5be1738c898a3.svg\";\n\n//# sourceURL=webpack://to-do-list/./src/icons/trash.svg?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);