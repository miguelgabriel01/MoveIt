webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Countdown.tsx":
/*!**************************************!*\
  !*** ./src/components/Countdown.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_jonas_M_sica_moveit_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/components/Countdown.module.css */ \"./src/styles/components/Countdown.module.css\");\n/* harmony import */ var _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nvar _jsxFileName = \"/home/jonas/M\\xFAsica/moveit-next/src/components/Countdown.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\nfunction Countdown() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(25 * 60),\n      time = _useState[0],\n      setTime = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      active = _useState2[0],\n      setActive = _useState2[1]; //o valor do click do botão sempre vai iniciar como falso\n\n\n  var minutes = Math.floor(time / 60); //arredonda o valor\n\n  var seconds = time % 60;\n\n  var _String$padStart$spli = String(minutes).padStart(2, '0').split(''),\n      _String$padStart$spli2 = Object(_home_jonas_M_sica_moveit_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_String$padStart$spli, 2),\n      minuteLeft = _String$padStart$spli2[0],\n      minuteRight = _String$padStart$spli2[1]; //divide a string com dois indices em dois eçlementos e caso não temnha, coloca um 0 no lugar\n\n\n  var _String$padStart$spli3 = String(seconds).padStart(2, '0').split(''),\n      _String$padStart$spli4 = Object(_home_jonas_M_sica_moveit_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_String$padStart$spli3, 2),\n      secondsLeft = _String$padStart$spli4[0],\n      secondsRight = _String$padStart$spli4[1]; //divide a string com dois indices em dois eçlementos e caso não temnha, coloca um 0 no lugar\n\n\n  function startCountdown() {}\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.countdownContainer,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: minuteLeft\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 5\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: minuteRight\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 5\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        children: \":\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: secondsLeft\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 5\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: secondsRight\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 5\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 5\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      type: \"button\",\n      className: _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.countdownButton,\n      onClick: startCountdown,\n      children: \"Iniciar um ciclo\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 5\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Countdown, \"Bi78h095CMvVt59BzGz4jeRwYmo=\");\n\n_c = Countdown;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Countdown);\n\nvar _c;\n\n$RefreshReg$(_c, \"Countdown\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ291bnRkb3duLnRzeD82MzY2Il0sIm5hbWVzIjpbIkNvdW50ZG93biIsInVzZVN0YXRlIiwidGltZSIsInNldFRpbWUiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJtaW51dGVzIiwiTWF0aCIsImZsb29yIiwic2Vjb25kcyIsIlN0cmluZyIsInBhZFN0YXJ0Iiwic3BsaXQiLCJtaW51dGVMZWZ0IiwibWludXRlUmlnaHQiLCJzZWNvbmRzTGVmdCIsInNlY29uZHNSaWdodCIsInN0YXJ0Q291bnRkb3duIiwic3R5bGVzIiwiY291bnRkb3duQ29udGFpbmVyIiwiY291bnRkb3duQnV0dG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsU0FBVCxHQUFvQjtBQUFBOztBQUFBLGtCQUVNQyxzREFBUSxDQUFDLEtBQUssRUFBTixDQUZkO0FBQUEsTUFFWEMsSUFGVztBQUFBLE1BRUxDLE9BRks7O0FBQUEsbUJBR1NGLHNEQUFRLENBQUMsS0FBRCxDQUhqQjtBQUFBLE1BR1hHLE1BSFc7QUFBQSxNQUdKQyxTQUhJLGtCQUd5Qjs7O0FBRTNDLE1BQU1DLE9BQU8sR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdOLElBQUksR0FBRyxFQUFsQixDQUFoQixDQUxrQixDQUtvQjs7QUFDdEMsTUFBTU8sT0FBTyxHQUFHUCxJQUFJLEdBQUcsRUFBdkI7O0FBTmtCLDhCQU9lUSxNQUFNLENBQUNKLE9BQUQsQ0FBTixDQUFnQkssUUFBaEIsQ0FBeUIsQ0FBekIsRUFBMkIsR0FBM0IsRUFBZ0NDLEtBQWhDLENBQXNDLEVBQXRDLENBUGY7QUFBQTtBQUFBLE1BT1hDLFVBUFc7QUFBQSxNQU9BQyxXQVBBLDhCQU95RDs7O0FBUHpELCtCQVFpQkosTUFBTSxDQUFDRCxPQUFELENBQU4sQ0FBZ0JFLFFBQWhCLENBQXlCLENBQXpCLEVBQTJCLEdBQTNCLEVBQWdDQyxLQUFoQyxDQUFzQyxFQUF0QyxDQVJqQjtBQUFBO0FBQUEsTUFRWEcsV0FSVztBQUFBLE1BUUNDLFlBUkQsOEJBUTJEOzs7QUFFN0UsV0FBU0MsY0FBVCxHQUF5QixDQUV4Qjs7QUFFRCxzQkFDRTtBQUFBLDRCQUNBO0FBQUssZUFBUyxFQUFFQyw4RUFBTSxDQUFDQyxrQkFBdkI7QUFBQSw4QkFDQTtBQUFBLGdDQUNBO0FBQUEsb0JBQU9OO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEQSxlQUVBO0FBQUEsb0JBQU9DO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEQSxlQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEEsZUFNQTtBQUFBLGdDQUNBO0FBQUEsb0JBQU9DO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEQSxlQUVBO0FBQUEsb0JBQU9DO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEQSxlQWFBO0FBQ0EsVUFBSSxFQUFDLFFBREw7QUFFQSxlQUFTLEVBQUVFLDhFQUFNLENBQUNFLGVBRmxCO0FBR0EsYUFBTyxFQUFFSCxjQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBYkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF1QkQ7O0dBckNRakIsUzs7S0FBQUEsUztBQXVDTUEsd0VBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Db3VudGRvd24udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvY29tcG9uZW50cy9Db3VudGRvd24ubW9kdWxlLmNzcyc7XG5pbXBvcnQgeyB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBDb3VudGRvd24oKXtcbiAgXG4gIGNvbnN0IFt0aW1lLCBzZXRUaW1lXSA9IHVzZVN0YXRlKDI1ICogNjApO1xuICBjb25zdCBbYWN0aXZlLHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7Ly9vIHZhbG9yIGRvIGNsaWNrIGRvIGJvdMOjbyBzZW1wcmUgdmFpIGluaWNpYXIgY29tbyBmYWxzb1xuXG4gIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKHRpbWUgLyA2MCk7Ly9hcnJlZG9uZGEgbyB2YWxvclxuICBjb25zdCBzZWNvbmRzID0gdGltZSAlIDYwO1xuICBjb25zdCBbbWludXRlTGVmdCxtaW51dGVSaWdodF0gPSBTdHJpbmcobWludXRlcykucGFkU3RhcnQoMiwnMCcpLnNwbGl0KCcnKTsvL2RpdmlkZSBhIHN0cmluZyBjb20gZG9pcyBpbmRpY2VzIGVtIGRvaXMgZcOnbGVtZW50b3MgZSBjYXNvIG7Do28gdGVtbmhhLCBjb2xvY2EgdW0gMCBubyBsdWdhclxuICBjb25zdCBbc2Vjb25kc0xlZnQsc2Vjb25kc1JpZ2h0XSA9IFN0cmluZyhzZWNvbmRzKS5wYWRTdGFydCgyLCcwJykuc3BsaXQoJycpOy8vZGl2aWRlIGEgc3RyaW5nIGNvbSBkb2lzIGluZGljZXMgZW0gZG9pcyBlw6dsZW1lbnRvcyBlIGNhc28gbsOjbyB0ZW1uaGEsIGNvbG9jYSB1bSAwIG5vIGx1Z2FyXG5cbiAgZnVuY3Rpb24gc3RhcnRDb3VudGRvd24oKXtcblxuICB9XG5cbiAgcmV0dXJuKFxuICAgIDxkaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb3VudGRvd25Db250YWluZXJ9PlxuICAgIDxkaXY+XG4gICAgPHNwYW4+e21pbnV0ZUxlZnR9PC9zcGFuPlxuICAgIDxzcGFuPnttaW51dGVSaWdodH08L3NwYW4+XG4gICAgPC9kaXY+XG4gICAgPHNwYW4+Ojwvc3Bhbj5cbiAgICA8ZGl2PlxuICAgIDxzcGFuPntzZWNvbmRzTGVmdH08L3NwYW4+XG4gICAgPHNwYW4+e3NlY29uZHNSaWdodH08L3NwYW4+XG4gICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cbiAgICA8YnV0dG9uIFxuICAgIHR5cGU9XCJidXR0b25cIlxuICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvdW50ZG93bkJ1dHRvbn1cbiAgICBvbkNsaWNrPXtzdGFydENvdW50ZG93bn1cbiAgICA+XG4gIEluaWNpYXIgdW0gY2ljbG9cbjwvYnV0dG9uPlxuICAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ291bnRkb3duOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Countdown.tsx\n");

/***/ })

})