"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/ErrorBoundary.js":
/*!*************************************!*\
  !*** ./components/ErrorBoundary.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _constants_Colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @constants/Colors */ \"./constants/Colors.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    display:flex;align-items:center;justify-content:center;flex-direction:column;min-height:100vh;\\n    & h2{margin:0 0 20px;font-size:22px;color:\",\n        \";}\\n    & button{\\n        display:flex;background:#000;color:#fff;font-size:16px;border-radius:6px;padding:10px 20px;border:none;\\n        &:hover{background:\",\n        \";}\\n    }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\nconst ErrorWrap = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject(), _constants_Colors__WEBPACK_IMPORTED_MODULE_3__[\"default\"].black, _constants_Colors__WEBPACK_IMPORTED_MODULE_3__[\"default\"].black);\n_c = ErrorWrap;\nclass ErrorBoundary extends (react__WEBPACK_IMPORTED_MODULE_2___default().Component) {\n    static getDerivedStateFromError(error) {\n        return {\n            hasError: true\n        };\n    }\n    componentDidCatch(error, errorInfo) {\n        console.log({\n            error,\n            errorInfo\n        });\n    }\n    render() {\n        const { hasError  } = this.state;\n        if (hasError) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ErrorWrap, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                        children: \"Oops, something went wrong!\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\react-ssr\\\\setup-ssr\\\\components\\\\ErrorBoundary.js\",\n                        lineNumber: 35,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        type: \"button \",\n                        style: {\n                            background: \"black\"\n                        },\n                        onClick: this.handlerButton,\n                        children: \"Try again?\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\react-ssr\\\\setup-ssr\\\\components\\\\ErrorBoundary.js\",\n                        lineNumber: 36,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\react-ssr\\\\setup-ssr\\\\components\\\\ErrorBoundary.js\",\n                lineNumber: 34,\n                columnNumber: 17\n            }, this);\n        }\n        return this.props.children;\n    }\n    constructor(props){\n        super(props);\n        this.handlerButton = ()=>{\n            this.setState({\n                hasError: false\n            });\n        };\n        this.state = {\n            hasError: false\n        };\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (ErrorBoundary);\nvar _c;\n$RefreshReg$(_c, \"ErrorWrap\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Vycm9yQm91bmRhcnkuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2E7QUFDQTtBQUN2QyxNQUFNRyxZQUFZRiw2REFBVUcsb0JBRW9CRiwrREFBWUcsRUFHL0JILCtEQUFZRztLQUxuQ0Y7QUFTTixNQUFNRyxzQkFBc0JOLHdEQUFlTztJQVF2QyxPQUFPQyx5QkFBeUJDLEtBQUssRUFBQztRQUNsQyxPQUFPO1lBQUNDLFVBQVU7UUFBSTtJQUMxQjtJQUNBQyxrQkFBa0JGLEtBQUssRUFBQ0csU0FBUyxFQUFDO1FBQzlCQyxRQUFRQyxJQUFJO1lBQUNMO1lBQU1HO1FBQVM7SUFDaEM7SUFJQUcsU0FBUTtRQUNKLE1BQU0sRUFBQ0wsU0FBUSxFQUFDLEdBQUcsSUFBSSxDQUFDTTtRQUN4QixJQUFHTixVQUFTO1lBQ1IscUJBQ0ksOERBQUNQOztrQ0FDRyw4REFBQ2M7a0NBQUc7Ozs7OztrQ0FDSiw4REFBQ0M7d0JBQU9DLE1BQUs7d0JBQVVDLE9BQU87NEJBQUNDLFlBQVc7d0JBQU87d0JBQUdDLFNBQVMsSUFBSSxDQUFDQztrQ0FBZTs7Ozs7Ozs7Ozs7O1FBRzdGO1FBQ0EsT0FBTyxJQUFJLENBQUNDLE1BQU1DO0lBQ3RCO0lBMUJBQyxZQUFZRixLQUFLLENBQUM7UUFDZCxLQUFLLENBQUNBO2FBV1ZELGdCQUFnQjtZQUNaLElBQUksQ0FBQ0ksU0FBUztnQkFBQ2pCLFVBQVU7WUFBSztRQUNsQztRQVpJLElBQUksQ0FBQ00sUUFBUTtZQUNUTixVQUFVO1FBQ2Q7SUFDSjtBQXNCSjtBQUNBLCtEQUFlSixhQUFhQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRXJyb3JCb3VuZGFyeS5qcz9jOWFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBjb2xvcnMgZnJvbSBcIkBjb25zdGFudHMvQ29sb3JzXCI7XHJcbmNvbnN0IEVycm9yV3JhcCA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7ZmxleC1kaXJlY3Rpb246Y29sdW1uO21pbi1oZWlnaHQ6MTAwdmg7XHJcbiAgICAmIGgye21hcmdpbjowIDAgMjBweDtmb250LXNpemU6MjJweDtjb2xvcjoke2NvbG9ycy5ibGFja307fVxyXG4gICAgJiBidXR0b257XHJcbiAgICAgICAgZGlzcGxheTpmbGV4O2JhY2tncm91bmQ6IzAwMDtjb2xvcjojZmZmO2ZvbnQtc2l6ZToxNnB4O2JvcmRlci1yYWRpdXM6NnB4O3BhZGRpbmc6MTBweCAyMHB4O2JvcmRlcjpub25lO1xyXG4gICAgICAgICY6aG92ZXJ7YmFja2dyb3VuZDoke2NvbG9ycy5ibGFja307fVxyXG4gICAgfVxyXG5gO1xyXG5cclxuY2xhc3MgRXJyb3JCb3VuZGFyeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxyXG57XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaGFzRXJyb3I6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21FcnJvcihlcnJvcil7XHJcbiAgICAgICAgcmV0dXJuIHtoYXNFcnJvcjogdHJ1ZX1cclxuICAgIH1cclxuICAgIGNvbXBvbmVudERpZENhdGNoKGVycm9yLGVycm9ySW5mbyl7XHJcbiAgICAgICAgY29uc29sZS5sb2coe2Vycm9yLGVycm9ySW5mb30pXHJcbiAgICB9XHJcbiAgICBoYW5kbGVyQnV0dG9uID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2hhc0Vycm9yOiBmYWxzZX0pO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgY29uc3Qge2hhc0Vycm9yfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgaWYoaGFzRXJyb3Ipe1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPEVycm9yV3JhcD5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+T29wcywgc29tZXRoaW5nIHdlbnQgd3JvbmchPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b24gXCIgc3R5bGU9e3tiYWNrZ3JvdW5kOlwiYmxhY2tcIn19IG9uQ2xpY2s9e3RoaXMuaGFuZGxlckJ1dHRvbn0+VHJ5IGFnYWluPzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9FcnJvcldyYXA+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW5cclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBFcnJvckJvdW5kYXJ5Il0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVkIiwiY29sb3JzIiwiRXJyb3JXcmFwIiwiZGl2IiwiYmxhY2siLCJFcnJvckJvdW5kYXJ5IiwiQ29tcG9uZW50IiwiZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yIiwiZXJyb3IiLCJoYXNFcnJvciIsImNvbXBvbmVudERpZENhdGNoIiwiZXJyb3JJbmZvIiwiY29uc29sZSIsImxvZyIsInJlbmRlciIsInN0YXRlIiwiaDIiLCJidXR0b24iLCJ0eXBlIiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwib25DbGljayIsImhhbmRsZXJCdXR0b24iLCJwcm9wcyIsImNoaWxkcmVuIiwiY29uc3RydWN0b3IiLCJzZXRTdGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ErrorBoundary.js\n"));

/***/ })

});