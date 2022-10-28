exports.id = 108;
exports.ids = [108];
exports.modules = {

/***/ 1288:
/***/ ((module) => {

// Exports
module.exports = {
	"hero": "Home_hero__cwxAA",
	"heroGrid": "Home_heroGrid__ltFGR",
	"mansory": "Home_mansory__cB0dk",
	"img1": "Home_img1__zy5RR",
	"img2": "Home_img2__Z4Dd1",
	"img3": "Home_img3__u0RYn",
	"city": "Home_city__oFjC_",
	"whyUs": "Home_whyUs___ZECu",
	"content": "Home_content__Zy02X",
	"featured": "Home_featured__vfm0u",
	"flexGrid": "Home_flexGrid__DW6z3",
	"hotelCard": "Home_hotelCard__l8tG3",
	"tabNav": "Home_tabNav__n1z5k",
	"hotelInfo": "Home_hotelInfo__clYEc",
	"beds": "Home_beds__59ROS",
	"address": "Home_address__UT_ly",
	"priceRating": "Home_priceRating__Qz8NF",
	"rating": "Home_rating__OdU0K",
	"loadMore": "Home_loadMore__YeAwU",
	"newsLett": "Home_newsLett__AGqhn",
	"form": "Home_form__k2xMg",
	"email": "Home_email__qVVPi",
	"newsLetterPoint": "Home_newsLetterPoint__LcuWg",
	"nearbyHotel": "Home_nearbyHotel__moJgv",
	"howItWorks": "Home_howItWorks__ba2yB",
	"whyUsGrid": "Home_whyUsGrid__tO2Zt"
};


/***/ }),

/***/ 8969:
/***/ ((module) => {

// Exports
module.exports = {
	"cardSlider": "cardSlider_cardSlider__axjkv",
	"left": "cardSlider_left__cl_q5",
	"right": "cardSlider_right__w_12u",
	"discountBookmark": "cardSlider_discountBookmark__5_iV3",
	"discount": "cardSlider_discount__HkY7S",
	"bookmark": "cardSlider_bookmark__R7LJA",
	"cardSlide": "cardSlider_cardSlide__Sh7LF"
};


/***/ }),

/***/ 2045:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ HotelCard)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./assets/SVG.config.jsx + 31 modules
var SVG_config = __webpack_require__(6785);
// EXTERNAL MODULE: ./styles/Home.module.css
var Home_module = __webpack_require__(1288);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
// EXTERNAL MODULE: ./components/Layout/Container.jsx
var Container = __webpack_require__(1706);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./assets/image.jpg
var assets_image = __webpack_require__(6601);
// EXTERNAL MODULE: ./styles/cardSlider.module.css
var cardSlider_module = __webpack_require__(8969);
var cardSlider_module_default = /*#__PURE__*/__webpack_require__.n(cardSlider_module);
;// CONCATENATED MODULE: ./components/Slider/CardSlider.jsx
/* eslint-disable @next/next/no-img-element */ 




function reducer(state, action) {
    switch(action.type){
        case "next":
            return {
                ...state,
                index: state.index + 1
            };
        case "previous":
            return {
                ...state,
                index: state.index - 1
            };
        case "reset":
            return {
                ...state,
                index: 0
            };
        case "last":
            return {
                ...state,
                index: action.last
            };
        case "bookmark":
            return {
                ...state,
                bookmark: !state.bookmark
            };
    }
}
const init = {
    index: 0,
    bookmark: false
};
function CardSlider({ hotelImgs  }) {
    const slide = (0,external_react_.useRef)();
    const card = (0,external_react_.useRef)();
    const nodes = slide.current?.childNodes.length;
    const { 0: state , 1: dispatch  } = (0,external_react_.useReducer)(reducer, init);
    (0,external_react_.useEffect)(()=>{
        const width = card.current.getBoundingClientRect().width;
        slide.current.style.transform = `translateX(-${state.index * width}px)`;
        const cb = ()=>{
            const width = card.current.getBoundingClientRect().width;
            slide.current.style.transform = `translateX(-${state.index * width}px)`;
        };
        window.addEventListener("resize", cb);
        return ()=>{
            window.removeEventListener("resize", cb);
        };
    });
    function foward() {
        if (state.index + 1 === nodes) dispatch({
            type: "reset"
        });
        else dispatch({
            type: "next"
        });
    }
    function back() {
        if (!state.index) dispatch({
            type: "last",
            last: nodes - 1
        });
        else dispatch({
            type: "previous"
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (cardSlider_module_default()).cardSlider,
        ref: card,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (cardSlider_module_default()).discountBookmark,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (cardSlider_module_default()).discount,
                        children: "-10% today"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (cardSlider_module_default()).bookmark,
                        onClick: ()=>dispatch({
                                type: "bookmark"
                            }),
                        children: /*#__PURE__*/ jsx_runtime_.jsx(SVG_config/* Heart */.Xd, {
                            size: 22,
                            stroke: "#fff",
                            strokeWidth: 15,
                            fill: state.bookmark ? "white" : "none"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: (cardSlider_module_default()).left,
                onClick: back,
                children: /*#__PURE__*/ jsx_runtime_.jsx(SVG_config/* ChevronLeftArrow */.hk, {
                    size: 15,
                    stroke: "var(--headers)",
                    strokeWidth: 0.01
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: (cardSlider_module_default()).right,
                onClick: foward,
                children: /*#__PURE__*/ jsx_runtime_.jsx(SVG_config/* ChevronRightArrow */.ow, {
                    size: 15
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (cardSlider_module_default()).cardSlide,
                ref: slide,
                children: hotelImgs.map((link, key)=>/*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: link,
                        alt: ""
                    }, key))
            })
        ]
    });
};

// EXTERNAL MODULE: ./components/SubHeadings.jsx
var SubHeadings = __webpack_require__(3460);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/HotelCard.jsx







function HotelCard({ data  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Home_module_default()).hotelCard,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(CardSlider, {
                hotelImgs: data
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Container/* default */.Z, {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/hotel/hotel-details",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Home_module_default()).hotelInfo,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: (Home_module_default()).beds,
                                children: "Entire cabin - 10 beds"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(SubHeadings/* default */.Z, {
                                children: "Bell By Greene King Inns"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: (Home_module_default()).address,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(SVG_config/* LocationPin */.aH, {
                                            size: 20
                                        })
                                    }),
                                    "32323 Jufy hill"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (Home_module_default()).priceRating,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        className: (Home_module_default()).price,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "$250"
                                            }),
                                            "/night"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        className: (Home_module_default()).rating,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(SVG_config/* Star */.Ux, {
                                                    size: 15,
                                                    fill: "crimson"
                                                })
                                            }),
                                            "4.4 (198)"
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    });
};


/***/ }),

/***/ 482:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ResponsiveGrid)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function ResponsiveGrid({ children , min , gap , maxWidth , margin , className ="" ,  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `responsive-grid ${className}`,
        style: {
            gridTemplateColumns: `repeat(auto-fit, minmax(${min}px, 1fr))`,
            gap,
            maxWidth: `${maxWidth}px`,
            margin
        },
        children: children
    });
};


/***/ }),

/***/ 3460:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SubHeadings)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function SubHeadings({ children , textAlign , fontSize , className ,  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
        className: `subHeadings ${className}`,
        style: {
            textAlign,
            fontSize
        },
        children: children
    });
};


/***/ })

};
;