"use strict";
exports.id = 555;
exports.ids = [555];
exports.modules = {

/***/ 6601:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/image.48f2505b.jpg","height":1939,"width":1939,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABQEBAAAAAAAAAAAAAAAAAAAABf/aAAwDAQACEAMQAAAAkhMn/8QAGhABAAIDAQAAAAAAAAAAAAAAAgEDABETYv/aAAgBAQABPwBKhvQt5hqInzn/xAAaEQACAgMAAAAAAAAAAAAAAAABAgADEWKh/9oACAECAQE/AKneqtURsAagnon/xAAZEQADAAMAAAAAAAAAAAAAAAABAgMAEyH/2gAIAQMBAT8Avew1kUbqDP/Z"});

/***/ }),

/***/ 7697:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Headings)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Headings({ children , textAlign , fontSize , className  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
        className: `headings ${className}`,
        style: {
            textAlign,
            fontSize
        },
        children: children
    });
};


/***/ }),

/***/ 3263:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Section)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Section({ children , background , top =0 , right =0 , bottom =0 , left =0 , topBottom =50 , leftRight =0 ,  }) {
    if (right || bottom || left || top) topBottom = 0;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        style: {
            background,
            padding: topBottom || leftRight ? `${topBottom}px ${leftRight}px` : `${top}px ${right}px ${bottom}px ${left}px`
        },
        children: children
    });
};


/***/ })

};
;