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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"21bee0f72a06\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3B1YmxpYy9jc3MvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3B1YmxpYy9jc3MvZ2xvYmFscy5jc3M/MjE3NSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjIxYmVlMGY3MmEwNlwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./public/css/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/lib/modules/fullscreen-modal.jsx":
/*!**********************************************!*\
  !*** ./src/lib/modules/fullscreen-modal.jsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Fulscreen; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Fulscreen(param) {\n    let { children } = param;\n    _s();\n    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const contentRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [modalActive, setModalActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    function dismiss() {\n        containerRef.current.remove();\n        setModalActive(false);\n    }\n    ;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleClickOutside = (event)=>{\n            if (contentRef.current && !contentRef.current.contains(event.target)) {\n                dismiss();\n            }\n        };\n        const preventScroll = (e)=>{\n            e.preventDefault();\n        };\n        if (modalActive) {\n            document.addEventListener(\"mousedown\", handleClickOutside);\n            document.addEventListener(\"wheel\", preventScroll, {\n                passive: false\n            });\n            document.addEventListener(\"touchmove\", preventScroll, {\n                passive: false\n            });\n            return ()=>{\n                document.removeEventListener(\"mousedown\", handleClickOutside);\n                document.removeEventListener(\"wheel\", preventScroll, {\n                    passive: false\n                });\n                document.removeEventListener(\"touchmove\", preventScroll, {\n                    passive: false\n                });\n            };\n        } else {\n            document.removeEventListener(\"mousedown\", handleClickOutside);\n            document.removeEventListener(\"wheel\", preventScroll, {\n                passive: false\n            });\n            document.removeEventListener(\"touchmove\", preventScroll, {\n                passive: false\n            });\n        }\n    }, [\n        modalActive\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-[rgb(0,0,0,0.3)] backdrop-blur-lg fixed z-[999] top-0 left-0 w-[100vw] h-[100vh] flex justify-center items-center px-32 py-20\",\n        ref: containerRef,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full h-full relative\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-12 h-12 absolute -top-12 -right-12\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"w-full text-right cursor-pointer\",\n                        onClick: ()=>dismiss(),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            className: \"fa-regular fa-circle-xmark text-2xl\",\n                            \"aria-hidden\": \"true\"\n                        }, void 0, false, {\n                            fileName: \"/var/www/html/projects/palmilhando-jan-2024/src/lib/modules/fullscreen-modal.jsx\",\n                            lineNumber: 37,\n                            columnNumber: 98\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/var/www/html/projects/palmilhando-jan-2024/src/lib/modules/fullscreen-modal.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/var/www/html/projects/palmilhando-jan-2024/src/lib/modules/fullscreen-modal.jsx\",\n                    lineNumber: 36,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"rounded-lg shadow-lg w-full h-full\",\n                    ref: contentRef,\n                    children: children\n                }, void 0, false, {\n                    fileName: \"/var/www/html/projects/palmilhando-jan-2024/src/lib/modules/fullscreen-modal.jsx\",\n                    lineNumber: 39,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/var/www/html/projects/palmilhando-jan-2024/src/lib/modules/fullscreen-modal.jsx\",\n            lineNumber: 35,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/var/www/html/projects/palmilhando-jan-2024/src/lib/modules/fullscreen-modal.jsx\",\n        lineNumber: 34,\n        columnNumber: 9\n    }, this);\n}\n_s(Fulscreen, \"oqaOvzcKiiprX6cl9JXwOJqaRlc=\");\n_c = Fulscreen;\nvar _c;\n$RefreshReg$(_c, \"Fulscreen\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9saWIvbW9kdWxlcy9mdWxsc2NyZWVuLW1vZGFsLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBa0Q7QUFFbkMsU0FBU0csVUFBVSxLQUFVO1FBQVYsRUFBQ0MsUUFBUSxFQUFDLEdBQVY7O0lBQzlCLE1BQU1DLGVBQWVMLDZDQUFNQSxDQUFDO0lBQzVCLE1BQU1NLGFBQWFOLDZDQUFNQSxDQUFDO0lBQzFCLE1BQU0sQ0FBQ08sYUFBYUMsZUFBZSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUMvQyxTQUFTTztRQUNMSixhQUFhSyxPQUFPLENBQUNDLE1BQU07UUFDM0JILGVBQWU7SUFDbkI7O0lBQ0FQLGdEQUFTQSxDQUFDO1FBQ04sTUFBTVcscUJBQXFCLENBQUNDO1lBQ3hCLElBQUlQLFdBQVdJLE9BQU8sSUFBSSxDQUFDSixXQUFXSSxPQUFPLENBQUNJLFFBQVEsQ0FBQ0QsTUFBTUUsTUFBTSxHQUFHO2dCQUFDTjtZQUFTO1FBQ3BGO1FBQ0EsTUFBTU8sZ0JBQWdCLENBQUNDO1lBQ25CQSxFQUFFQyxjQUFjO1FBQ3BCO1FBQ0EsSUFBSVgsYUFBYTtZQUNiWSxTQUFTQyxnQkFBZ0IsQ0FBQyxhQUFhUjtZQUN2Q08sU0FBU0MsZ0JBQWdCLENBQUMsU0FBU0osZUFBZTtnQkFBQ0ssU0FBUztZQUFLO1lBQ2pFRixTQUFTQyxnQkFBZ0IsQ0FBQyxhQUFhSixlQUFlO2dCQUFDSyxTQUFTO1lBQUs7WUFDckUsT0FBTztnQkFDSEYsU0FBU0csbUJBQW1CLENBQUMsYUFBYVY7Z0JBQzFDTyxTQUFTRyxtQkFBbUIsQ0FBQyxTQUFTTixlQUFlO29CQUFDSyxTQUFTO2dCQUFLO2dCQUNwRUYsU0FBU0csbUJBQW1CLENBQUMsYUFBYU4sZUFBZTtvQkFBQ0ssU0FBUztnQkFBSztZQUM1RTtRQUNKLE9BQU87WUFDSEYsU0FBU0csbUJBQW1CLENBQUMsYUFBYVY7WUFDMUNPLFNBQVNHLG1CQUFtQixDQUFDLFNBQVNOLGVBQWU7Z0JBQUNLLFNBQVM7WUFBSztZQUNwRUYsU0FBU0csbUJBQW1CLENBQUMsYUFBYU4sZUFBZTtnQkFBQ0ssU0FBUztZQUFLO1FBQzVFO0lBQ0osR0FBRztRQUFDZDtLQUFZO0lBQ2hCLHFCQUNJLDhEQUFDZ0I7UUFBSUMsV0FBVTtRQUFtSUMsS0FBS3BCO2tCQUNuSiw0RUFBQ2tCO1lBQUlDLFdBQVU7OzhCQUNYLDhEQUFDRDtvQkFBSUMsV0FBVTs4QkFDWCw0RUFBQ0U7d0JBQUtGLFdBQVU7d0JBQW1DRyxTQUFTLElBQU1sQjtrQ0FBVyw0RUFBQ21COzRCQUFFSixXQUFVOzRCQUFzQ0ssZUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFFaEosOERBQUNOO29CQUFJQyxXQUFVO29CQUFxQ0MsS0FBS25COzhCQUNwREY7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3JCO0dBMUN3QkQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xpYi9tb2R1bGVzL2Z1bGxzY3JlZW4tbW9kYWwuanN4P2VjZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VSZWYsIHVzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRnVsc2NyZWVuKHtjaGlsZHJlbn0pIHtcbiAgICBjb25zdCBjb250YWluZXJSZWYgPSB1c2VSZWYobnVsbCk7XG4gICAgY29uc3QgY29udGVudFJlZiA9IHVzZVJlZihudWxsKTtcbiAgICBjb25zdCBbbW9kYWxBY3RpdmUsIHNldE1vZGFsQWN0aXZlXSA9IHVzZVN0YXRlKHRydWUpXG4gICAgZnVuY3Rpb24gZGlzbWlzcygpIHtcbiAgICAgICAgY29udGFpbmVyUmVmLmN1cnJlbnQucmVtb3ZlKCk7XG4gICAgICAgIHNldE1vZGFsQWN0aXZlKGZhbHNlKVxuICAgIH07XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgaGFuZGxlQ2xpY2tPdXRzaWRlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoY29udGVudFJlZi5jdXJyZW50ICYmICFjb250ZW50UmVmLmN1cnJlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge2Rpc21pc3MoKX1cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcHJldmVudFNjcm9sbCA9IChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgfVxuICAgICAgICBpZiAobW9kYWxBY3RpdmUpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGhhbmRsZUNsaWNrT3V0c2lkZSk7XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIHByZXZlbnRTY3JvbGwsIHtwYXNzaXZlOiBmYWxzZX0pO1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgcHJldmVudFNjcm9sbCwge3Bhc3NpdmU6IGZhbHNlfSk7XG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGhhbmRsZUNsaWNrT3V0c2lkZSk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBwcmV2ZW50U2Nyb2xsLCB7cGFzc2l2ZTogZmFsc2V9KTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBwcmV2ZW50U2Nyb2xsLCB7cGFzc2l2ZTogZmFsc2V9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBoYW5kbGVDbGlja091dHNpZGUpO1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBwcmV2ZW50U2Nyb2xsLCB7cGFzc2l2ZTogZmFsc2V9KTtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHByZXZlbnRTY3JvbGwsIHtwYXNzaXZlOiBmYWxzZX0pO1xuICAgICAgICB9XG4gICAgfSwgW21vZGFsQWN0aXZlXSk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JnLVtyZ2IoMCwwLDAsMC4zKV0gYmFja2Ryb3AtYmx1ci1sZyBmaXhlZCB6LVs5OTldIHRvcC0wIGxlZnQtMCB3LVsxMDB2d10gaC1bMTAwdmhdIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHB4LTMyIHB5LTIwJyByZWY9e2NvbnRhaW5lclJlZn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsIGgtZnVsbCByZWxhdGl2ZSc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctMTIgaC0xMiBhYnNvbHV0ZSAtdG9wLTEyIC1yaWdodC0xMic+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndy1mdWxsIHRleHQtcmlnaHQgY3Vyc29yLXBvaW50ZXInIG9uQ2xpY2s9eygpID0+IGRpc21pc3MoKX0+PGkgY2xhc3NOYW1lPVwiZmEtcmVndWxhciBmYS1jaXJjbGUteG1hcmsgdGV4dC0yeGxcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3VuZGVkLWxnIHNoYWRvdy1sZyB3LWZ1bGwgaC1mdWxsJyByZWY9e2NvbnRlbnRSZWZ9PlxuICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn0iXSwibmFtZXMiOlsidXNlUmVmIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJGdWxzY3JlZW4iLCJjaGlsZHJlbiIsImNvbnRhaW5lclJlZiIsImNvbnRlbnRSZWYiLCJtb2RhbEFjdGl2ZSIsInNldE1vZGFsQWN0aXZlIiwiZGlzbWlzcyIsImN1cnJlbnQiLCJyZW1vdmUiLCJoYW5kbGVDbGlja091dHNpZGUiLCJldmVudCIsImNvbnRhaW5zIiwidGFyZ2V0IiwicHJldmVudFNjcm9sbCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhc3NpdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGl2IiwiY2xhc3NOYW1lIiwicmVmIiwic3BhbiIsIm9uQ2xpY2siLCJpIiwiYXJpYS1oaWRkZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/lib/modules/fullscreen-modal.jsx\n"));

/***/ })

});