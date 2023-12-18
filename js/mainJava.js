/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/home.js":
/*!********************!*\
  !*** ./js/home.js ***!
  \********************/
/***/ (() => {

eval("if (document.getElementById(\"homePage\") != null) {\n  var backgroundSlidingLeft = function () {\n    $(\"#water-bg\").animate({\n      \"background-position-x\": \"0px\",\n      \"background-position-y\": \"-=100px\"\n    }, 1500, \"linear\", backgroundSlidingLeft);\n  };\n  var timeout;\n  function changeText() {\n    var elem = document.getElementById(\"loaderBtn\");\n    elem.innerHTML = \"Loading\";\n    clearTimeout(timeout);\n    timeout = setTimeout(function () {\n      elem.innerHTML = \"ENTER\";\n      elem.disabled = false;\n    }, 2000);\n  }\n  changeText();\n  document.getElementById(\"loaderBtn\").addEventListener(\"click\", function (e) {\n    const morse1 = document.querySelector(\"#morse1\");\n    const morse2 = document.querySelector(\"#morse2\");\n    const morse3 = document.querySelector(\"#morse3\");\n    const morse4 = document.querySelector(\"#morse4\");\n    const morse5 = document.querySelector(\"#morse5\");\n    const morse6 = document.querySelector(\"#morse6\");\n    const morse7 = document.querySelector(\"#morse7\");\n    const morse8 = document.querySelector(\"#morse8\");\n    const morse9 = document.querySelector(\"#morse9\");\n    backgroundSlidingLeft();\n\n    // console.log(\"play!!!\");\n    // var video = document.getElementById(\"myVideo\");\n    // video.play();\n\n    $(\"#loaderBtn\").css(\"opacity\", \"0\");\n    $(\"#section1\").delay(2100).queue(function () {\n      const titleWrapper = document.querySelector(\".title-wrapper\");\n      titleWrapper.classList.add(\"animate-down\");\n    });\n    const Loader = document.querySelector(\".loader-wrapper\");\n    Loader.classList.add(\"loader-off\");\n    document.querySelectorAll(\".txt-reveal\").forEach(reveal => {\n      reveal.classList.add(\"show-span\");\n    });\n    document.querySelectorAll(\".pre-save-btn\").forEach(reveal => {\n      reveal.classList.remove(\"hidden\");\n    });\n    document.querySelectorAll(\".campaign-footer\").forEach(reveal => {\n      reveal.classList.remove(\"hidden\");\n    });\n    document.querySelectorAll(\".listen\").forEach(reveal => {\n      reveal.classList.remove(\"hidden\");\n    });\n    document.querySelectorAll(\".icon-wrapper\").forEach(reveal => {\n      reveal.classList.remove(\"hidden\");\n    });\n    document.querySelectorAll(\".footer\").forEach(reveal => {\n      reveal.classList.remove(\"hidden\");\n    });\n    document.querySelectorAll(\".header\").forEach(reveal => {\n      reveal.classList.remove(\"hidden\");\n    });\n    morse1.classList.add(\"morse1\");\n    morse2.classList.add(\"morse2\");\n    morse3.classList.add(\"morse3\");\n    morse4.classList.add(\"morse4\");\n    morse5.classList.add(\"morse5\");\n    morse6.classList.add(\"morse6\");\n    morse7.classList.add(\"morse7\");\n    morse8.classList.add(\"morse8\");\n    morse9.classList.add(\"morse9\");\n    var audio = document.querySelector(\"#player\");\n    audio.play();\n  });\n  (function ($) {\n    $.fn.animateBgPosition = function (x, y, speed) {\n      var pos = this.css(\"background-position\").split(\" \");\n      this.x = parseInt(pos[0], 10) || 0;\n      this.y = parseInt(pos[1], 10) || 0;\n      $.Animation(this, {\n        x: x,\n        y: y\n      }, {\n        duration: speed\n      }).progress(function (e) {\n        // this.css(\n        //   \"background-position\",\n        //   e.tweens[0].now + \"%\" + e.tweens[1].now + \"%\"\n        // );\n        this.css(\"transform\", e.tweens[0].now + \"%\" + e.tweens[1].now + \"%\");\n      });\n      return this;\n    };\n    $(function () {\n      $(\"#loaderBtn\").click(function () {\n        // $(\"#bg\").animateBgPosition(50, 50, 3000);\n        $(\"#sza-gif\").addClass(\"centered-bg\");\n      });\n    });\n  })(jQuery);\n  document.getElementById(\"apple-form-trigger\").addEventListener(\"click\", function (e) {\n    const element = document.querySelector(\"#apple_form\");\n    const element2 = document.querySelector(\"#presave\");\n    if (element.classList.contains(\"apple-form-show\")) {\n      element.classList.remove(\"apple-form-show\");\n      element2.classList.add(\"preSave-show\");\n      // $(\"#title-img\").css(\"display\", \"flex\");\n    } else {\n      element.classList.add(\"apple-form-show\");\n      element2.classList.remove(\"preSave-show\");\n\n      // $(\"#title-img\").css(\"display\", \"none\");\n    }\n  });\n\n  document.getElementById(\"apple-presave-back\").addEventListener(\"click\", function (e) {\n    const element = document.querySelector(\"#apple_form\");\n    const element2 = document.querySelector(\"#presave\");\n    if (element.classList.contains(\"apple-form-show\")) {\n      element.classList.remove(\"apple-form-show\");\n      element2.classList.add(\"preSave-show\");\n    } else {\n      element.classList.add(\"apple-form-show\");\n      element2.classList.remove(\"preSave-show\");\n    }\n  });\n\n  // Wrap your logic in a button click event.\n  document.getElementById(\"appleSM\").addEventListener(\"click\", function (e) {\n    // Create a new SMEAppleMusic object with your parameters.\n    var sm = new SMEAppleMusic({\n      ae: {\n        ae: \"7d966967c22fe575eae042270621e3c2f218f9800e9d9a320a8ccb08322ccecd\",\n        brand_id: \"3450049\",\n        segment_id: \"1728044\",\n        activities: '{\"actions\":{\"presave\":101581},\"mailing_list_optins\":{\"a0S0800000Um0rpEAB\":101582}}'\n      },\n      am: {\n        dev_token: \"\",\n        save_mode: \"library\",\n        custom_playlist_name: \"\",\n        new_apple_presave: true,\n        resources: {\n          playlists: [],\n          albums: []\n        }\n      },\n      sf: {\n        form: \"234801\",\n        default_mailing_list: \"\"\n      },\n      smf: {\n        campaign_id: \"234801\",\n        campaign_key: \"d257fe8537d98b68d9135806fb11ef7b\"\n      }\n    });\n    document.getElementById(\"apple_music_form\").addEventListener(\"submit\", function (e) {\n      e.preventDefault();\n      // Grab the email address value.\n      var email = document.getElementById(\"apple_music_email_address\").value;\n      // Pass the email address and opt in status\n      // This can be true or false depending on if the user is forced into the list, or chooses via a checkbox or similar.\n      sm.doActions(email, false, [\"a0S0800000Um0rpEAB\"]).then(function (res) {\n        $(\".input-wrapper\").css(\"display\", \"none\");\n        $(\"#apple-error\").css(\"display\", \"none\");\n        $(\"#apple-success\").css(\"display\", \"block\");\n      }).catch(function (err) {\n        $(\"#apple-error\").css(\"display\", \"block\");\n        console.log(err);\n      });\n    });\n  });\n  jQuery(document).ready(function ($) {\n    $(\"#sza-newsletter\").on(\"submit\", function (e) {\n      // Prevent default browser actions on form submission.\n      e.preventDefault();\n      // Get all the form user submitted data and get it ready to be sent.\n      var data = $(this).serialize();\n      // POST all the data to the SMF submission endpoint URL.\n      $.ajax({\n        type: \"POST\",\n        url: \"https://subs.sonymusicfans.com/submit\",\n        dataType: \"json\",\n        data: data,\n        xhrFields: {\n          withCredentials: false\n        },\n        success: function (data) {\n          // Do things on successful submission.\n          $(\".newsletterinput-wrapper\").css(\"display\", \"none\");\n          $(\"#newsletter-error\").css(\"display\", \"none\");\n          $(\"#newsletter-success\").css(\"display\", \"block\");\n          $(\".newsletterinput-wrapper\").css(\"display\", \"none\");\n        },\n        error: function (err) {\n          // Do things when submission has an error.\n          $(\"#newsletter-error\").css(\"display\", \"block\");\n        }\n      });\n    });\n  });\n  $(document).ready(function () {\n    var elem = document.getElementById(\"apple-submit\");\n    if (window.location.href.indexOf(\"?state=thank-you\") > -1) {\n      elem.innerHTML = \"Thank you!\";\n      $(\".preSave-wrapper\").css(\"display\", \"none\");\n      const morse1 = document.querySelector(\"#morse1\");\n      const morse2 = document.querySelector(\"#morse2\");\n      const morse3 = document.querySelector(\"#morse3\");\n      const morse4 = document.querySelector(\"#morse4\");\n      const morse5 = document.querySelector(\"#morse5\");\n      const morse6 = document.querySelector(\"#morse6\");\n      const morse7 = document.querySelector(\"#morse7\");\n      const morse8 = document.querySelector(\"#morse8\");\n      const morse9 = document.querySelector(\"#morse9\");\n      backgroundSlidingLeft();\n      $(\"#loaderBtn\").css(\"opacity\", \"0\");\n      $(\"#sza-gif\").addClass(\"centered-bg\");\n      $(\"body\").delay(2300).queue(function () {\n        $(\".footer-btn\").css(\"opacity\", \"1\");\n        $(\".footer-btn\").css(\"pointer-events\", \"all\");\n        $(\".thankyou\").css(\"pointer-events\", \"all\");\n        $(\".thankyou\").css(\"opacity\", \"1\");\n      });\n      $(\"#section1\").delay(2100).queue(function () {\n        const titleWrapper = document.querySelector(\".title-wrapper\");\n        titleWrapper.classList.add(\"animate-down\");\n      });\n      const Loader = document.querySelector(\".loader-wrapper\");\n      Loader.classList.add(\"loader-off\");\n      document.querySelectorAll(\".txt-reveal\").forEach(reveal => {\n        reveal.classList.add(\"show-span\");\n      });\n      document.querySelectorAll(\".pre-save-btn\").forEach(reveal => {\n        reveal.classList.remove(\"hidden\");\n      });\n      document.querySelectorAll(\".legal\").forEach(reveal => {\n        reveal.classList.remove(\"hidden\");\n      });\n      morse1.classList.add(\"morse1\");\n      morse2.classList.add(\"morse2\");\n      morse3.classList.add(\"morse3\");\n      morse4.classList.add(\"morse4\");\n      morse5.classList.add(\"morse5\");\n      morse6.classList.add(\"morse6\");\n      morse7.classList.add(\"morse7\");\n      morse8.classList.add(\"morse8\");\n      morse9.classList.add(\"morse9\");\n      var audio = document.querySelector(\"#player\");\n      audio.play();\n    } else {\n      elem.innerHTML = \"Go\";\n    }\n  });\n\n  // $(document).ready(function () {\n  //   if (window.location.href.indexOf(\"?state=thank-you\") > -1) {\n  //     $(\".header\").css(\"opacity\", \"1\");\n  //     $(\".desktop\").css(\"display\", \"none\");\n  //     $(\".mobile\").css(\"display\", \"none\");\n  //     $(\".thankyou-banner\").css(\"display\", \"block\");\n  //   }\n  // });\n}\n\n//# sourceURL=webpack://boilerplate_threejs/./js/home.js?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_base_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/base.css */ \"./css/base.css\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./js/home.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _videos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./videos */ \"./js/videos.js\");\n/* harmony import */ var _videos__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_videos__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _tour__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tour */ \"./js/tour.js\");\n/* harmony import */ var _tour__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tour__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n// Javascript\n\nvar isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);\n\n//# sourceURL=webpack://boilerplate_threejs/./js/index.js?");

/***/ }),

/***/ "./js/tour.js":
/*!********************!*\
  !*** ./js/tour.js ***!
  \********************/
/***/ (() => {

eval("if (document.getElementById(\"tourPage\") != null) {\n  var backgroundSlidingLeft = function () {\n    $(\"#water-bg\").animate({\n      \"background-position-x\": \"0px\",\n      \"background-position-y\": \"-=100px\"\n    }, 1500, \"linear\", backgroundSlidingLeft);\n  };\n  backgroundSlidingLeft();\n  $(\"#section1\").delay(2100).queue(function () {\n    const titleWrapper = document.querySelector(\".title-wrapper\");\n    titleWrapper.classList.add(\"animate-down\");\n  });\n  document.querySelectorAll(\".txt-reveal\").forEach(reveal => {\n    reveal.classList.add(\"show-span\");\n  });\n  document.querySelectorAll(\".listen\").forEach(reveal => {\n    reveal.classList.remove(\"hidden\");\n  });\n  document.querySelectorAll(\".icon-wrapper\").forEach(reveal => {\n    reveal.classList.remove(\"hidden\");\n  });\n  document.querySelectorAll(\".footer\").forEach(reveal => {\n    reveal.classList.remove(\"hidden\");\n  });\n  document.querySelectorAll(\".header\").forEach(reveal => {\n    reveal.classList.remove(\"hidden\");\n  });\n}\n\n//# sourceURL=webpack://boilerplate_threejs/./js/tour.js?");

/***/ }),

/***/ "./js/videos.js":
/*!**********************!*\
  !*** ./js/videos.js ***!
  \**********************/
/***/ (() => {

eval("if (document.getElementById(\"videoPage\") != null) {\n  var backgroundSlidingLeft = function () {\n    $(\"#water-bg\").animate({\n      \"background-position-x\": \"0px\",\n      \"background-position-y\": \"-=100px\"\n    }, 1500, \"linear\", backgroundSlidingLeft);\n  };\n  backgroundSlidingLeft();\n  $(\"#section1\").delay(2100).queue(function () {\n    const titleWrapper = document.querySelector(\".title-wrapper\");\n    titleWrapper.classList.add(\"animate-down\");\n  });\n  document.querySelectorAll(\".txt-reveal\").forEach(reveal => {\n    reveal.classList.add(\"show-span\");\n  });\n  document.querySelectorAll(\".listen\").forEach(reveal => {\n    reveal.classList.remove(\"hidden\");\n  });\n  document.querySelectorAll(\".icon-wrapper\").forEach(reveal => {\n    reveal.classList.remove(\"hidden\");\n  });\n  document.querySelectorAll(\".footer\").forEach(reveal => {\n    reveal.classList.remove(\"hidden\");\n  });\n  document.querySelectorAll(\".header\").forEach(reveal => {\n    reveal.classList.remove(\"hidden\");\n  });\n}\n\n//# sourceURL=webpack://boilerplate_threejs/./js/videos.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./css/base.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./css/base.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://boilerplate_threejs/./css/base.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://boilerplate_threejs/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://boilerplate_threejs/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./css/base.css":
/*!**********************!*\
  !*** ./css/base.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_base_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./base.css */ \"./node_modules/css-loader/dist/cjs.js!./css/base.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_base_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_base_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_base_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_base_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://boilerplate_threejs/./css/base.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://boilerplate_threejs/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://boilerplate_threejs/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://boilerplate_threejs/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://boilerplate_threejs/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://boilerplate_threejs/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://boilerplate_threejs/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/index.js");
/******/ 	
/******/ })()
;