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

/***/ "./redux/reduccers/authReduccer.js":
/*!*****************************************!*\
  !*** ./redux/reduccers/authReduccer.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n// reducers/postReducer.js\nconst initialState = {\n    userDetails: {},\n    loading: false,\n    error: null,\n    token: \"\",\n    cart: [],\n    wishlist: []\n};\nconst authReducer = function() {\n    let state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : initialState, action = arguments.length > 1 ? arguments[1] : void 0;\n    switch(action.type){\n        case \"FETCH_REQUEST\":\n            return {\n                ...state,\n                loading: true\n            };\n        case \"FETCH_SUCCESS\":\n            var _action_payload, _action_payload1;\n            return {\n                ...state,\n                loading: false,\n                userDetails: (_action_payload = action.payload) === null || _action_payload === void 0 ? void 0 : _action_payload.user,\n                token: (_action_payload1 = action.payload) === null || _action_payload1 === void 0 ? void 0 : _action_payload1.token,\n                error: null\n            };\n        case \"loginfailed\":\n            return {\n                ...state,\n                loading: false,\n                error: action.payload\n            };\n        default:\n            return state;\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (authReducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9yZWR1Y2NlcnMvYXV0aFJlZHVjY2VyLmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSwwQkFBMEI7QUFDMUIsTUFBTUEsZUFBZTtJQUNqQkMsYUFBYSxDQUFDO0lBQ2RDLFNBQVM7SUFDVEMsT0FBTztJQUNQQyxPQUFPO0lBQ1BDLE1BQUssRUFBRTtJQUNQQyxVQUFTLEVBQUU7QUFDYjtBQUVBLE1BQU1DLGNBQWM7UUFBQ0MseUVBQVFSLGNBQWNTO0lBQ3pDLE9BQVFBLE9BQU9DO1FBQ2IsS0FBSztZQUNILE9BQU87Z0JBQUUsR0FBR0YsS0FBSztnQkFBRU4sU0FBUztZQUFLO1FBQ25DLEtBQUs7Z0JBQzZDTyxpQkFBK0JBO1lBQS9FLE9BQU87Z0JBQUUsR0FBR0QsS0FBSztnQkFBRU4sU0FBUztnQkFBT0QsYUFBYVEsQ0FBQUEsa0JBQUFBLE9BQU9FLHFCQUFQRiw2QkFBQUEsS0FBQUEsSUFBQUEsZ0JBQWdCRztnQkFBT1IsT0FBUUssQ0FBQUEsbUJBQUFBLE9BQU9FLHFCQUFQRiw4QkFBQUEsS0FBQUEsSUFBQUEsaUJBQWdCTDtnQkFBT0QsT0FBTztZQUFLO1FBQ3BILEtBQUs7WUFDSCxPQUFPO2dCQUFFLEdBQUdLLEtBQUs7Z0JBQUVOLFNBQVM7Z0JBQU9DLE9BQU9NLE9BQU9FO1lBQVE7UUFDM0Q7WUFDRSxPQUFPSDtJQUNYO0FBQ0Y7QUFFQSwrREFBZUQsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9yZWR1eC9yZWR1Y2NlcnMvYXV0aFJlZHVjY2VyLmpzPzdiMDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVkdWNlcnMvcG9zdFJlZHVjZXIuanNcclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgdXNlckRldGFpbHM6IHt9LFxyXG4gICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICBlcnJvcjogbnVsbCxcclxuICAgIHRva2VuOiBcIlwiLFxyXG4gICAgY2FydDpbXSxcclxuICAgIHdpc2hsaXN0OltdXHJcbiAgfTtcclxuICBcclxuICBjb25zdCBhdXRoUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgIGNhc2UgJ0ZFVENIX1JFUVVFU1QnOlxyXG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2FkaW5nOiB0cnVlIH07XHJcbiAgICAgIGNhc2UgJ0ZFVENIX1NVQ0NFU1MnOlxyXG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2FkaW5nOiBmYWxzZSwgdXNlckRldGFpbHM6IGFjdGlvbi5wYXlsb2FkPy51c2VyICwgdG9rZW4gOiBhY3Rpb24ucGF5bG9hZD8udG9rZW4sIGVycm9yOiBudWxsIH07XHJcbiAgICAgIGNhc2UgJ2xvZ2luZmFpbGVkJzpcclxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9hZGluZzogZmFsc2UsIGVycm9yOiBhY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxuICB9O1xyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IGF1dGhSZWR1Y2VyOyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJ1c2VyRGV0YWlscyIsImxvYWRpbmciLCJlcnJvciIsInRva2VuIiwiY2FydCIsIndpc2hsaXN0IiwiYXV0aFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJwYXlsb2FkIiwidXNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./redux/reduccers/authReduccer.js\n"));

/***/ })

});