"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/evento_anual/page",{

/***/ "(app-pages-browser)/./public/css/globals.css":
/*!********************************!*\
  !*** ./public/css/globals.css ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"b7f2b6fa9cad\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3B1YmxpYy9jc3MvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3B1YmxpYy9jc3MvZ2xvYmFscy5jc3M/MjE3NSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImI3ZjJiNmZhOWNhZFwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./public/css/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/lib/modules/countdown-mobile.jsx":
/*!**********************************************!*\
  !*** ./src/lib/modules/countdown-mobile.jsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CountdownMobile; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _lib_modules_layout_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/modules/layout-components */ \"(app-pages-browser)/./src/lib/modules/layout-components.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_css_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../public/css/globals.css */ \"(app-pages-browser)/./public/css/globals.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction CountdownMobile(param) {\n    let { paused = false } = param;\n    _s();\n    //Data do evento\n    const eventDate = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{\n        return new Date(\"2024-09-20T08:00:00.000-03:00\").getTime();\n    }, []);\n    //Armazena o tempo restante dividido em partes\n    const [time, setTime] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        d: \"00\",\n        h: \"00\",\n        m: \"00\",\n        s: \"00\"\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        //Roda o cronômetro 1 vez por segundo\n        const timer = !paused && setInterval(()=>{\n            const _t = (n)=>{\n                if (n < 10) {\n                    n = \"0\" + n;\n                }\n                return n;\n            };\n            var now = new Date().getTime();\n            var del = eventDate - now;\n            del == 0 && clearInterval(timer);\n            var d = Math.floor(del / 86400000);\n            var h = Math.floor(del % 86400000 / 3600000);\n            var m = Math.floor(del % 3600000 / 60000);\n            var s = Math.floor(del % 60000 / 1000);\n            setTime({\n                s: _t(s),\n                m: _t(m),\n                h: _t(h),\n                d: _t(d)\n            });\n        }, 1000);\n        return ()=>clearInterval(timer);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"countdown\",\n        className: \"fixed top-0 w-full h-20 bg-[var(--cor-4)] flex items-center border-b-2 border-sky-800 rounded-bl-3xl rounded-br-3xl z-50 slide-down\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_modules_layout_components__WEBPACK_IMPORTED_MODULE_1__.Wrapper, {\n            className: \"flex-col justify-center items-center m-auto\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"my-2 font-light text-sm\",\n                    children: \"O evento come\\xe7a em:\"\n                }, void 0, false, {\n                    fileName: \"/var/www/html/projects/palmilhando-jan-2024/src/lib/modules/countdown-mobile.jsx\",\n                    lineNumber: 39,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"text-lg font-bold\",\n                    children: \"\".concat(time.d, \":\").concat(time.h, \":\").concat(time.m, \":\").concat(time.s)\n                }, void 0, false, {\n                    fileName: \"/var/www/html/projects/palmilhando-jan-2024/src/lib/modules/countdown-mobile.jsx\",\n                    lineNumber: 40,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/var/www/html/projects/palmilhando-jan-2024/src/lib/modules/countdown-mobile.jsx\",\n            lineNumber: 38,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/var/www/html/projects/palmilhando-jan-2024/src/lib/modules/countdown-mobile.jsx\",\n        lineNumber: 37,\n        columnNumber: 9\n    }, this);\n}\n_s(CountdownMobile, \"7G4TX6oAWQ7uq0JDSnQJ9rTVT0I=\");\n_c = CountdownMobile;\nvar _c;\n$RefreshReg$(_c, \"CountdownMobile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9saWIvbW9kdWxlcy9jb3VudGRvd24tbW9iaWxlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUN3RDtBQUNMO0FBQ1Y7QUFFMUIsU0FBU0ksZ0JBQWdCLEtBQWdCO1FBQWhCLEVBQUNDLFNBQVMsS0FBSyxFQUFDLEdBQWhCOztJQUVwQyxnQkFBZ0I7SUFDaEIsTUFBTUMsWUFBWUosOENBQU9BLENBQUM7UUFDdEIsT0FBTyxJQUFJSyxLQUFLLGlDQUFpQ0MsT0FBTztJQUM1RCxHQUFHLEVBQUU7SUFFTCw4Q0FBOEM7SUFDOUMsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdQLCtDQUFRQSxDQUFDO1FBQUNRLEdBQUc7UUFBTUMsR0FBRztRQUFNQyxHQUFHO1FBQU1DLEdBQUc7SUFBSTtJQUVwRWIsZ0RBQVNBLENBQUM7UUFDTixxQ0FBcUM7UUFDckMsTUFBTWMsUUFBUSxDQUFDVixVQUFVVyxZQUFZO1lBQ2pDLE1BQU1DLEtBQUssQ0FBQ0M7Z0JBQ1IsSUFBSUEsSUFBSSxJQUFJO29CQUFDQSxJQUFJLE1BQU1BO2dCQUFFO2dCQUN6QixPQUFPQTtZQUNYO1lBQ0EsSUFBSUMsTUFBTSxJQUFJWixPQUFPQyxPQUFPO1lBQzVCLElBQUlZLE1BQU1kLFlBQVlhO1lBQ3RCQyxPQUFPLEtBQUtDLGNBQWNOO1lBQzFCLElBQUlKLElBQUlXLEtBQUtDLEtBQUssQ0FBQ0gsTUFBTTtZQUN6QixJQUFJUixJQUFJVSxLQUFLQyxLQUFLLENBQUMsTUFBTyxXQUFZO1lBQ3RDLElBQUlWLElBQUlTLEtBQUtDLEtBQUssQ0FBQyxNQUFPLFVBQVc7WUFDckMsSUFBSVQsSUFBSVEsS0FBS0MsS0FBSyxDQUFDLE1BQU8sUUFBUztZQUNuQ2IsUUFBUTtnQkFBQ0ksR0FBR0csR0FBR0g7Z0JBQUlELEdBQUdJLEdBQUdKO2dCQUFJRCxHQUFHSyxHQUFHTDtnQkFBSUQsR0FBR00sR0FBR047WUFBRTtRQUNuRCxHQUFHO1FBRUgsT0FBTyxJQUFNVSxjQUFjTjtJQUMvQixHQUFHLEVBQUU7SUFFTCxxQkFDSSw4REFBQ1M7UUFBSUMsSUFBRztRQUFZQyxXQUFVO2tCQUMxQiw0RUFBQzFCLG1FQUFPQTtZQUFDMEIsV0FBVTs7OEJBQ2YsOERBQUNDO29CQUFLRCxXQUFVOzhCQUEwQjs7Ozs7OzhCQUMxQyw4REFBQ0M7b0JBQUtELFdBQVU7OEJBQXFCLEdBQWFqQixPQUFWQSxLQUFLRSxDQUFDLEVBQUMsS0FBYUYsT0FBVkEsS0FBS0csQ0FBQyxFQUFDLEtBQWFILE9BQVZBLEtBQUtJLENBQUMsRUFBQyxLQUFVLE9BQVBKLEtBQUtLLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTVGO0dBdEN3QlY7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xpYi9tb2R1bGVzL2NvdW50ZG93bi1tb2JpbGUuanN4PzcyNDYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IHtXcmFwcGVyfSBmcm9tICdAL2xpYi9tb2R1bGVzL2xheW91dC1jb21wb25lbnRzJztcbmltcG9ydCB7dXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuLi8uLi8uLi9wdWJsaWMvY3NzL2dsb2JhbHMuY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ291bnRkb3duTW9iaWxlKHtwYXVzZWQgPSBmYWxzZX0pIHtcblxuICAgIC8vRGF0YSBkbyBldmVudG9cbiAgICBjb25zdCBldmVudERhdGUgPSB1c2VNZW1vKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKCcyMDI0LTA5LTIwVDA4OjAwOjAwLjAwMC0wMzowMCcpLmdldFRpbWUoKTtcbiAgICB9LCBbXSk7XG5cbiAgICAvL0FybWF6ZW5hIG8gdGVtcG8gcmVzdGFudGUgZGl2aWRpZG8gZW0gcGFydGVzXG4gICAgY29uc3QgW3RpbWUsIHNldFRpbWVdID0gdXNlU3RhdGUoe2Q6ICcwMCcsIGg6ICcwMCcsIG06ICcwMCcsIHM6ICcwMCd9KTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIC8vUm9kYSBvIGNyb27DtG1ldHJvIDEgdmV6IHBvciBzZWd1bmRvXG4gICAgICAgIGNvbnN0IHRpbWVyID0gIXBhdXNlZCAmJiBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBfdCA9IChuKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG4gPCAxMCkge24gPSAnMCcgKyBuO31cbiAgICAgICAgICAgICAgICByZXR1cm4gbjtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICB2YXIgZGVsID0gZXZlbnREYXRlIC0gbm93O1xuICAgICAgICAgICAgZGVsID09IDAgJiYgY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gICAgICAgICAgICB2YXIgZCA9IE1hdGguZmxvb3IoZGVsIC8gODY0MDAwMDApO1xuICAgICAgICAgICAgdmFyIGggPSBNYXRoLmZsb29yKChkZWwgJSA4NjQwMDAwMCkgLyAzNjAwMDAwKTtcbiAgICAgICAgICAgIHZhciBtID0gTWF0aC5mbG9vcigoZGVsICUgMzYwMDAwMCkgLyA2MDAwMCk7XG4gICAgICAgICAgICB2YXIgcyA9IE1hdGguZmxvb3IoKGRlbCAlIDYwMDAwKSAvIDEwMDApO1xuICAgICAgICAgICAgc2V0VGltZSh7czogX3QocyksIG06IF90KG0pLCBoOiBfdChoKSwgZDogX3QoZCl9KTtcbiAgICAgICAgfSwgMTAwMCk7XG5cbiAgICAgICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgaWQ9J2NvdW50ZG93bicgY2xhc3NOYW1lPSdmaXhlZCB0b3AtMCB3LWZ1bGwgaC0yMCBiZy1bdmFyKC0tY29yLTQpXSBmbGV4IGl0ZW1zLWNlbnRlciBib3JkZXItYi0yIGJvcmRlci1za3ktODAwIHJvdW5kZWQtYmwtM3hsIHJvdW5kZWQtYnItM3hsIHotNTAgc2xpZGUtZG93bic+XG4gICAgICAgICAgICA8V3JhcHBlciBjbGFzc05hbWU9J2ZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBtLWF1dG8nPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nbXktMiBmb250LWxpZ2h0IHRleHQtc20nPk8gZXZlbnRvIGNvbWXDp2EgZW06PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC1sZyBmb250LWJvbGQnPntgJHt0aW1lLmR9OiR7dGltZS5ofToke3RpbWUubX06JHt0aW1lLnN9YH08L3NwYW4+XG4gICAgICAgICAgICA8L1dyYXBwZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59Il0sIm5hbWVzIjpbIldyYXBwZXIiLCJ1c2VFZmZlY3QiLCJ1c2VNZW1vIiwidXNlU3RhdGUiLCJDb3VudGRvd25Nb2JpbGUiLCJwYXVzZWQiLCJldmVudERhdGUiLCJEYXRlIiwiZ2V0VGltZSIsInRpbWUiLCJzZXRUaW1lIiwiZCIsImgiLCJtIiwicyIsInRpbWVyIiwic2V0SW50ZXJ2YWwiLCJfdCIsIm4iLCJub3ciLCJkZWwiLCJjbGVhckludGVydmFsIiwiTWF0aCIsImZsb29yIiwiZGl2IiwiaWQiLCJjbGFzc05hbWUiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/lib/modules/countdown-mobile.jsx\n"));

/***/ })

});