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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"9ae4baf14255\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3B1YmxpYy9jc3MvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3B1YmxpYy9jc3MvZ2xvYmFscy5jc3M/MjE3NSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjlhZTRiYWYxNDI1NVwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./public/css/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/lib/modules/fullscreen-modal.jsx":
/*!**********************************************!*\
  !*** ./src/lib/modules/fullscreen-modal.jsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Fulscreen; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Fulscreen(param) {\n    let { children } = param;\n    _s();\n    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const contentRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    function dismiss() {\n        containerRef.current.remove();\n    }\n    ;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleClickOutside = (event)=>{\n            if (contentRef.current && !contentRef.current.contains(event.target)) {\n                dismiss();\n            }\n        };\n        document.addEventListener(\"mousedown\", handleClickOutside);\n        return ()=>{\n            document.removeEventListener(\"mousedown\", handleClickOutside);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-[rgb(0,0,0,0.1)] backdrop-blur-lg fixed z-[999] top-0 left-0 w-[100vw] h-[100vh] flex justify-center items-center\",\n        ref: containerRef,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-9/12 h-9/12\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"w-full text-right cursor-pointer\",\n                        onClick: ()=>dismiss(),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            className: \"fa-regular fa-circle-xmark\",\n                            \"aria-hidden\": \"true\"\n                        }, void 0, false, {\n                            fileName: \"/var/www/html/projects/palmilhando-jan-2024/src/lib/modules/fullscreen-modal.jsx\",\n                            lineNumber: 22,\n                            columnNumber: 98\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/var/www/html/projects/palmilhando-jan-2024/src/lib/modules/fullscreen-modal.jsx\",\n                        lineNumber: 22,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/var/www/html/projects/palmilhando-jan-2024/src/lib/modules/fullscreen-modal.jsx\",\n                    lineNumber: 21,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    ref: contentRef,\n                    children: children\n                }, void 0, false, {\n                    fileName: \"/var/www/html/projects/palmilhando-jan-2024/src/lib/modules/fullscreen-modal.jsx\",\n                    lineNumber: 24,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/var/www/html/projects/palmilhando-jan-2024/src/lib/modules/fullscreen-modal.jsx\",\n            lineNumber: 20,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/var/www/html/projects/palmilhando-jan-2024/src/lib/modules/fullscreen-modal.jsx\",\n        lineNumber: 19,\n        columnNumber: 9\n    }, this);\n}\n_s(Fulscreen, \"EoKFttUbS2wyEYCP1SIdX09xS5Y=\");\n_c = Fulscreen;\nvar _c;\n$RefreshReg$(_c, \"Fulscreen\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9saWIvbW9kdWxlcy9mdWxsc2NyZWVuLW1vZGFsLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBd0M7QUFFekIsU0FBU0UsVUFBVSxLQUFVO1FBQVYsRUFBQ0MsUUFBUSxFQUFDLEdBQVY7O0lBQzlCLE1BQU1DLGVBQWVKLDZDQUFNQSxDQUFDO0lBQzVCLE1BQU1LLGFBQWFMLDZDQUFNQSxDQUFDO0lBQzFCLFNBQVNNO1FBQVdGLGFBQWFHLE9BQU8sQ0FBQ0MsTUFBTTtJQUFFOztJQUNqRFAsZ0RBQVNBLENBQUM7UUFDTixNQUFNUSxxQkFBcUIsQ0FBQ0M7WUFDeEIsSUFBSUwsV0FBV0UsT0FBTyxJQUFJLENBQUNGLFdBQVdFLE9BQU8sQ0FBQ0ksUUFBUSxDQUFDRCxNQUFNRSxNQUFNLEdBQUc7Z0JBQ2xFTjtZQUNKO1FBQ0o7UUFDQU8sU0FBU0MsZ0JBQWdCLENBQUMsYUFBYUw7UUFDdkMsT0FBTztZQUNISSxTQUFTRSxtQkFBbUIsQ0FBQyxhQUFhTjtRQUM5QztJQUNKLEdBQUcsRUFBRTtJQUNMLHFCQUNJLDhEQUFDTztRQUFJQyxXQUFVO1FBQXVIQyxLQUFLZDtrQkFDdkksNEVBQUNZO1lBQUlDLFdBQVU7OzhCQUNYLDhEQUFDRDtvQkFBSUMsV0FBVTs4QkFDWCw0RUFBQ0U7d0JBQUtGLFdBQVU7d0JBQW1DRyxTQUFTLElBQU1kO2tDQUFXLDRFQUFDZTs0QkFBRUosV0FBVTs0QkFBNkJLLGVBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBRXZJLDhEQUFDTjtvQkFBSUUsS0FBS2I7OEJBQ0xGOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtyQjtHQTNCd0JEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9saWIvbW9kdWxlcy9mdWxsc2NyZWVuLW1vZGFsLmpzeD9lY2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlUmVmLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRnVsc2NyZWVuKHtjaGlsZHJlbn0pIHtcbiAgICBjb25zdCBjb250YWluZXJSZWYgPSB1c2VSZWYobnVsbCk7XG4gICAgY29uc3QgY29udGVudFJlZiA9IHVzZVJlZihudWxsKTtcbiAgICBmdW5jdGlvbiBkaXNtaXNzKCkge2NvbnRhaW5lclJlZi5jdXJyZW50LnJlbW92ZSgpfTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBoYW5kbGVDbGlja091dHNpZGUgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChjb250ZW50UmVmLmN1cnJlbnQgJiYgIWNvbnRlbnRSZWYuY3VycmVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgZGlzbWlzcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBoYW5kbGVDbGlja091dHNpZGUpO1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgaGFuZGxlQ2xpY2tPdXRzaWRlKTtcbiAgICAgICAgfTtcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JnLVtyZ2IoMCwwLDAsMC4xKV0gYmFja2Ryb3AtYmx1ci1sZyBmaXhlZCB6LVs5OTldIHRvcC0wIGxlZnQtMCB3LVsxMDB2d10gaC1bMTAwdmhdIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyJyByZWY9e2NvbnRhaW5lclJlZn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy05LzEyIGgtOS8xMic+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctZnVsbCc+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndy1mdWxsIHRleHQtcmlnaHQgY3Vyc29yLXBvaW50ZXInIG9uQ2xpY2s9eygpID0+IGRpc21pc3MoKX0+PGkgY2xhc3NOYW1lPVwiZmEtcmVndWxhciBmYS1jaXJjbGUteG1hcmtcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgcmVmPXtjb250ZW50UmVmfT5cbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59Il0sIm5hbWVzIjpbInVzZVJlZiIsInVzZUVmZmVjdCIsIkZ1bHNjcmVlbiIsImNoaWxkcmVuIiwiY29udGFpbmVyUmVmIiwiY29udGVudFJlZiIsImRpc21pc3MiLCJjdXJyZW50IiwicmVtb3ZlIiwiaGFuZGxlQ2xpY2tPdXRzaWRlIiwiZXZlbnQiLCJjb250YWlucyIsInRhcmdldCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJyZWYiLCJzcGFuIiwib25DbGljayIsImkiLCJhcmlhLWhpZGRlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/lib/modules/fullscreen-modal.jsx\n"));

/***/ })

});