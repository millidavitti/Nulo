"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 6959:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Description)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Description({ children , textAlign , fontSize , className ,  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        className: `description ${className}`,
        style: {
            textAlign,
            fontSize
        },
        children: children
    });
};


/***/ }),

/***/ 5998:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./assets/SVG.config.jsx + 31 modules
var SVG_config = __webpack_require__(6785);
// EXTERNAL MODULE: ./components/Layout/Container.jsx
var Container = __webpack_require__(1706);
// EXTERNAL MODULE: ./components/Layout/Margin.jsx
var Margin = __webpack_require__(4898);
// EXTERNAL MODULE: ./components/Layout/ResponsiveGrid.jsx
var ResponsiveGrid = __webpack_require__(482);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/Nulo.jsx




function Nulo({ size  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: "/",
        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            children: /*#__PURE__*/ jsx_runtime_.jsx(SVG_config/* Logo */.TR, {
                size: size
            })
        })
    });
};

;// CONCATENATED MODULE: ./components/Footer.jsx







function Footer() {
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container/* default */.Z, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "footer-header",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Nulo, {
                            size: 50
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "footer-socials",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(SVG_config/* Twitter */.tL, {
                                    size: 30
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(SVG_config/* Youtube */.hx, {
                                    size: 30
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Margin/* default */.Z, {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ResponsiveGrid/* default */.Z, {
                        min: 150,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "footer-columns",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        children: "Getting started"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "footer-items",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: "Installation"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: "Release Notes"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: "Upgrade Guide"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: "Browser Support"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: "Editor Support"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "footer-columns",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        children: "Explore"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "footer-items",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: "Design feeatures"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: "Prototyping"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: "Design systems"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: "Pricing"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: "Security"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "footer-columns",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        children: "Resources"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "footer-items",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: "Design feeatures"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: "Prototyping"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: "Design systems"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: "Pricing"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: "Security"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "footer-columns",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        children: "Getting started"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "footer-items",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: "Community"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: "Prototyping"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: "Design systems"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: "Pricing"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: "Security"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
};

// EXTERNAL MODULE: ./utils/AppContext.js
var AppContext = __webpack_require__(7919);
;// CONCATENATED MODULE: external "lodash/debounce"
const debounce_namespaceObject = require("lodash/debounce");
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce_namespaceObject);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./components/Description.jsx
var Description = __webpack_require__(6959);
;// CONCATENATED MODULE: ./components/Widgets/ThemeSelect.jsx
/*prettier-ignore */ 



function ThemeSelect() {
    const { 0: state , 1: dispatch  } = (0,external_react_.useContext)(AppContext/* default */.Z);
    (0,external_react_.useEffect)(()=>{
        localStorage.getItem("darkmode") || localStorage.setItem("darkmode", `false`);
        dispatch({
            type: "toggle-darkmode",
            mode: JSON.parse(localStorage.getItem("darkmode"))
        });
    }, [
        dispatch
    ]);
    (0,external_react_.useEffect)(()=>{
        const doc = document.documentElement;
        state.darkMode ? doc.style.setProperty("--bg", "#111827") : doc.style.setProperty("--bg", "#fff");
        state.darkMode ? doc.style.setProperty("--bgd", "#0e131f") : doc.style.setProperty("--bgd", "#fff");
        state.darkMode ? doc.style.setProperty("--newsLetter", "#0e131f") : doc.style.setProperty("--newsLetter", "#dbeafe");
        state.darkMode ? doc.style.setProperty("--grey", "#0e131f") : doc.style.setProperty("--grey", "#f3f4f6");
        state.darkMode ? doc.style.setProperty("--headers", "white") : doc.style.setProperty("--headers", "#111827");
        state.darkMode ? doc.style.setProperty("--highlights", "#1f2937") : doc.style.setProperty("--highlights", "#cacccd");
        state.darkMode ? doc.style.setProperty("--outline", "var(--descriptions)") : doc.style.setProperty("--outline", "#cacccd");
        state.darkMode ? doc.style.setProperty("--a", "var(--d)") : doc.style.setProperty("--a", "#f3f4f6");
        state.darkMode ? doc.style.setProperty("--navHeader", "rgba(0, 0, 0, 0.374)") : doc.style.setProperty("--navHeader", "#fffffdc");
    });
    return /*#__PURE__*/ jsx_runtime_.jsx("span", {
        className: "theme-selector",
        onClick: ()=>{
            localStorage.setItem("darkmode", `${!JSON.parse(localStorage.getItem("darkmode"))}`);
            dispatch({
                type: "toggle-darkmode",
                mode: JSON.parse(localStorage.getItem("darkmode"))
            });
        },
        children: state.darkMode ? /*#__PURE__*/ jsx_runtime_.jsx(SVG_config/* Cresent */.kt, {
            size: 25,
            fill: "var(--headers)"
        }) : /*#__PURE__*/ jsx_runtime_.jsx(SVG_config/* Sun */.kO, {
            size: 25,
            fill: "var(--headers)"
        })
    });
};

;// CONCATENATED MODULE: ./components/Navigation/Navigation.jsx







function Navigation({ state , dispatch  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "navOverlay",
        style: {
            opacity: state.menu.toggle ? "1" : "0",
            pointerEvents: state.menu.toggle ? "unset" : "none"
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "navigation",
            style: {
                translate: state.menu.toggle ? "0" : "400px"
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "top-half",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "logo-close",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Nulo, {
                                            size: 50
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        onClick: ()=>{
                                            dispatch({
                                                type: "menu"
                                            });
                                            if (state.dropDown.current) dispatch({
                                                type: "show-drop",
                                                navlink: state.dropDown.current
                                            });
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(SVG_config/* Close */.x8, {
                                            size: 25,
                                            fill: "var(--headers)",
                                            strokeWidth: 0.5
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Description/* default */.Z, {
                                children: "Discover the most outstanding articles on all topics of life. Write your stories and share them"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "nav-socials",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "footer-socials",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(SVG_config/* Twitter */.tL, {
                                                size: 30
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(SVG_config/* Youtube */.hx, {
                                                size: 30
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(ThemeSelect, {})
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                    className: "nav-links",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "#home",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: "nav-link",
                                    onClick: ()=>dispatch({
                                            type: "show-drop",
                                            navlink: "home"
                                        }),
                                    id: "home",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            children: [
                                                "home",
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "sub-nav-link",
                                            style: {
                                                opacity: state.dropDown.current === "home" ? "1" : "0",
                                                zIndex: state.dropDown.current === "home" ? "unset" : "-1",
                                                scale: state.dropDown.current === "home" ? "1" : "1 0",
                                                maxHeight: state.dropDown.current === "home" ? "500px" : "0"
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        onClick: ()=>dispatch({
                                                                type: "menu"
                                                            }),
                                                        style: {
                                                            translate: state.dropDown.current === "home" ? "0" : "0 -200px",
                                                            transitionDelay: 0
                                                        },
                                                        children: "Home"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/user/saves",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        onClick: ()=>dispatch({
                                                                type: "menu"
                                                            }),
                                                        style: {
                                                            translate: state.dropDown.current === "home" ? "0" : "0 -400px",
                                                            transitionDelay: 400
                                                        },
                                                        children: "Saves"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/user/account-info",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        onClick: ()=>dispatch({
                                                                type: "menu"
                                                            }),
                                                        style: {
                                                            translate: state.dropDown.current === "home" ? "0" : "0 -600px"
                                                        },
                                                        children: "Account"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "#product",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: "nav-link",
                                    onClick: ()=>dispatch({
                                            type: "show-drop",
                                            navlink: "product"
                                        }),
                                    id: "#product",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            children: [
                                                "product",
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "sub-nav-link",
                                            style: {
                                                opacity: state.dropDown.current === "product" ? "1" : "0",
                                                zIndex: state.dropDown.current === "product" ? "unset" : "-1",
                                                scale: state.dropDown.current === "product" ? "1" : "1 0",
                                                maxHeight: state.dropDown.current === "product" ? "500px" : "0"
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    style: {
                                                        translate: state.dropDown.current === "product" ? "0" : "0 -200px",
                                                        transitionDelay: 0
                                                    },
                                                    children: "Some Page"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    style: {
                                                        translate: state.dropDown.current === "product" ? "0" : "0 -400px",
                                                        transitionDelay: 400
                                                    },
                                                    children: "Some Menu"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    style: {
                                                        translate: state.dropDown.current === "product" ? "0" : "0 -600px"
                                                    },
                                                    children: "Some Page"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./components/Navigation/MobileNav.jsx







function reducer(state, action) {
    switch(action.type){
        case "explore":
            return {
                ...state,
                menu: {
                    current: action.type
                }
            };
        case "saves":
            return {
                ...state,
                menu: {
                    current: action.type
                }
            };
        case "me":
            return {
                ...state,
                menu: {
                    current: action.type
                }
            };
        case "menu":
            return {
                ...state,
                menu: {
                    ...state.menu,
                    toggle: !state.menu.toggle
                }
            };
        case "show-drop":
            if (state.dropDown.current === action.navlink) return {
                ...state,
                dropDown: {
                    current: null
                }
            };
            return {
                ...state,
                dropDown: {
                    current: action.navlink
                }
            };
    }
}
const init = {
    menu: {
        current: "explore",
        toggle: false
    },
    dropDown: {
        current: null
    }
};
function MobileNav() {
    const nav = (0,external_react_.useRef)();
    const router = (0,router_.useRouter)();
    const { 0: vector , 1: setVector  } = (0,external_react_.useState)(0);
    const { 0: state , 1: dispatch  } = (0,external_react_.useReducer)(reducer, init);
    const scroll = ()=>{
        if (document.body.getBoundingClientRect().top > vector) {
            nav.current.style.transform = `translateY(0)`;
        } else nav.current.style.transform = `translateY(${200}px)`;
        setVector(document.body.getBoundingClientRect().top);
    };
    const debounceCb = debounce_default()(scroll, 500, {
        leading: true
    });
    (0,external_react_.useEffect)(()=>{
        document.documentElement.style.overflow = state.menu.toggle ? "hidden" : "initial";
    }, [
        state.menu.toggle
    ]);
    (0,external_react_.useEffect)(()=>{
        window.addEventListener("scroll", debounceCb);
        return ()=>{
            window.removeEventListener("scroll", debounceCb);
        };
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                className: "mobile-nav",
                ref: nav,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "mobile-menu",
                            onClick: ()=>{
                                dispatch({
                                    type: "explore"
                                });
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(SVG_config/* Search */.ol, {
                                    size: 25,
                                    stroke: router.pathname === "/" ? "crimson" : "var(--headers)"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    children: "Explore"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/user/saves",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "mobile-menu",
                            onClick: ()=>{
                                dispatch({
                                    type: "saves"
                                });
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(SVG_config/* Heart */.Xd, {
                                    size: 25,
                                    fill: router.query.path === "saves" ? "crimson" : "var(--headers)"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    children: "Saves"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/user/account-info",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "mobile-menu",
                            onClick: ()=>{
                                dispatch({
                                    type: "me"
                                });
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(SVG_config/* User */.n5, {
                                    size: 25,
                                    fill: router.query.path === "account-info" ? "crimson" : "var(--headers)"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    children: "Me"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mobile-menu",
                        onClick: ()=>{
                            dispatch({
                                type: "menu"
                            });
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(SVG_config/* Menu */.v2, {
                                size: 20,
                                fill: "var(--headers)"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                children: "Menu"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Navigation, {
                state: state,
                dispatch: dispatch
            })
        ]
    });
};

// EXTERNAL MODULE: ./styles/calendar.module.css
var calendar_module = __webpack_require__(9020);
var calendar_module_default = /*#__PURE__*/__webpack_require__.n(calendar_module);
// EXTERNAL MODULE: ./utils/helpers.js
var helpers = __webpack_require__(4108);
;// CONCATENATED MODULE: ./components/Widgets/FromCalendar.jsx







const today = new Date();
/*prettier-ignore */ const months = [
    "January",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
function Calendar() {
    const { current: node  } = (0,external_react_.useRef)();
    const { 0: state , 1: dispatch  } = (0,external_react_.useContext)(AppContext/* default */.Z);
    // Dynamic styles for selected dates
    function fromTo(state, date) {
        if (state.from.date === date && state.from.month === state.view.month && state.from.year === state.view.year) return "darkcyan";
        else if (state.to.date === date && state.to.month === state.view.month && state.to.year === state.view.year) return "crimson";
    }
    function pickFn(date) {
        // If from is not set or date < the set from date
        if (!state.from.date || date < state.from.date || date > state.from.date && state.view.month === state.from.month || date < state.to.date && state.view.month === state.from.month || state.view.month < state.to.month && state.view.year >= state.from.year || state.view.year < state.to.year) {
            dispatch({
                type: "from",
                month: state.view.month,
                year: state.view.year,
                date
            });
        // If from is set
        }
        // To reset current picks
        if (date === state.from.date && state.view.month === state.from.month && state.view.year === state.from.year || date === state.to.date && state.view.month === state.to.month && state.view.year === state.to.year) dispatch({
            type: "reset"
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (calendar_module_default()).calendar,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                className: (calendar_module_default()).nav,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (calendar_module_default()).left,
                        onClick: (e)=>{
                            e.stopPropagation();
                            dispatch({
                                type: "decrementview",
                                month: state.view.month,
                                year: state.view.year
                            });
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(SVG_config/* LeftArrow */.IT, {
                            size: 20,
                            fill: "var(--headers)",
                            stroke: "var(--headers)",
                            strokeWidth: 19
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                        className: (calendar_module_default()).view,
                        children: [
                            months[state.view.month],
                            " ",
                            state.view.year
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (calendar_module_default()).right,
                        onClick: (e)=>{
                            e.stopPropagation();
                            dispatch({
                                type: "incrementview",
                                month: state.view.month,
                                year: state.view.year
                            });
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(SVG_config/* RightArrow */.UV, {
                            size: 20,
                            fill: "var(--headers)",
                            stroke: "var(--headers)",
                            strokeWidth: 19
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (calendar_module_default()).weekDays,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Sun"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Mon"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Tue"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Wed"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Thu"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Fri"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Sat"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (calendar_module_default()).dates,
                ref: node,
                children: (0,helpers/* generateCalendar */.Ze)(state.view.month, state.view.year).calendar.map((date, key)=>{
                    if (!date) return /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (calendar_module_default()).past
                    }, key);
                    else if (// Same month range
                    (date > state.from.date && date < state.to.date && state.view.month === state.from.month && state.view.month === state.to.month && state.view.year === state.from.year && state.view.year === state.to.year) || // Diff month range
                    // From current month
                    (date > state.from.date && state.view.month === state.from.month && state.view.month !== state.to.month && state.view.year === state.from.year && state.view.year === state.to.year && state.to.date) || // From: Multi-year e.g 21-22
                    (date > state.from.date && state.view.month === state.from.month && state.to.year > state.from.year && state.view.year === state.from.year && state.to.date) || // To next month
                    (date < state.to.date && state.view.month !== state.from.month && state.view.month === state.to.month && state.view.year === state.from.year && state.view.year === state.to.year && state.from.date) || // To: Multi-year e.g 21-22
                    (date < state.to.date && state.view.month === state.to.month && state.view.year === state.to.year && state.to.year > state.from.year && state.from.date) || // Manges multiple months of the same year
                    (state.view.month > state.from.month && state.view.month < state.to.month && state.view.year === state.from.year && state.view.year === state.to.year && state.from.date && state.to.date) || // Manges multiple months of diff years
                    (state.to.year > state.from.year && !state.to.month && state.view.month > state.from.month && state.view.month < state.to.month && state.view.year === state.to.year && state.from.date && state.to.date) || state.to.year > state.from.year && state.to.month && state.view.year === state.to.year && state.view.month < state.to.month || state.to.year > state.from.year && (state.to.month || !state.to.month) && state.view.year > state.from.year && state.view.year < state.to.year || state.view.month > state.from.month && state.to.year !== state.from.year && state.view.year === state.from.year && state.from.date && state.to.date) {
                        return /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: (calendar_module_default()).range,
                            onClick: pickFn.bind(null, date),
                            style: {
                                background: fromTo(state, date)
                            },
                            children: date
                        }, key);
                    // Past dates
                    } else if (// If year < today's year
                    (0,helpers/* generateCalendar */.Ze)(state.view.month, state.view.year).year < today.getFullYear() || // if month === today's month && date <today's date && year===today's year
                    ((0,helpers/* generateCalendar */.Ze)(state.view.month, state.view.year).month === today.getMonth() && date < today.getDate() && (0,helpers/* generateCalendar */.Ze)(state.view.month, state.view.year).year === today.getFullYear()) || // if month < today's month  && year===today's year
                    ((0,helpers/* generateCalendar */.Ze)(state.view.month, state.view.year).year === today.getFullYear() && (0,helpers/* generateCalendar */.Ze)(state.view.month, state.view.year).month < today.getMonth())) return /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (calendar_module_default()).past,
                        children: date
                    }, key);
                    else return /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        onClick: pickFn.bind(null, date),
                        style: {
                            background: fromTo(state, date)
                        },
                        children: date
                    }, key);
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/Widgets/ToCalendar.jsx







const ToCalendar_today = new Date();
/*prettier-ignore */ const ToCalendar_months = [
    "January",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
function ToCalendar_Calendar() {
    const { current: node  } = (0,external_react_.useRef)();
    const { 0: state , 1: dispatch  } = (0,external_react_.useContext)(AppContext/* default */.Z);
    // Dynamic styles for selected dates
    function fromTo(state, date) {
        if (state.from.date === date && state.from.month === state.view.month && state.from.year === state.view.year) return "darkcyan";
        else if (state.to.date === date && state.to.month === state.view.month && state.to.year === state.view.year) return "crimson";
    }
    function pickFn(date) {
        if (state.from.date && date > state.from.date && state.view.month === state.from.month || state.from.date && (date > state.from.date || date < state.from.date) && state.view.month > state.from.month && state.view.year === state.from.year || state.view.year > state.from.year) dispatch({
            type: "to",
            month: state.view.month,
            year: state.view.year,
            date
        });
        // To reset current picks
        if (date === state.from.date && state.view.month === state.from.month && state.view.year === state.from.year || date === state.to.date && state.view.month === state.to.month && state.view.year === state.to.year) dispatch({
            type: "reset"
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (calendar_module_default()).calendar,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                className: (calendar_module_default()).nav,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (calendar_module_default()).left,
                        onClick: (e)=>{
                            e.stopPropagation();
                            dispatch({
                                type: "decrementview",
                                month: state.view.month,
                                year: state.view.year
                            });
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(SVG_config/* LeftArrow */.IT, {
                            size: 20,
                            fill: "var(--headers)",
                            stroke: "var(--headers)",
                            strokeWidth: 19
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                        className: (calendar_module_default()).view,
                        children: [
                            ToCalendar_months[state.view.month],
                            " ",
                            state.view.year
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (calendar_module_default()).right,
                        onClick: (e)=>{
                            e.stopPropagation();
                            dispatch({
                                type: "incrementview",
                                month: state.view.month,
                                year: state.view.year
                            });
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(SVG_config/* RightArrow */.UV, {
                            size: 20,
                            fill: "var(--headers)",
                            stroke: "var(--headers)",
                            strokeWidth: 19
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (calendar_module_default()).weekDays,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Sun"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Mon"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Tue"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Wed"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Thu"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Fri"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Sat"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (calendar_module_default()).dates,
                ref: node,
                children: (0,helpers/* generateCalendar */.Ze)(state.view.month, state.view.year).calendar.map((date, key)=>{
                    if (!date) return /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (calendar_module_default()).past
                    }, key);
                    else if (// Same month range
                    (date > state.from.date && date < state.to.date && state.view.month === state.from.month && state.view.month === state.to.month && state.view.year === state.from.year && state.view.year === state.to.year) || // Diff month range
                    // From current month
                    (date > state.from.date && state.view.month === state.from.month && state.view.month !== state.to.month && state.view.year === state.from.year && state.view.year === state.to.year && state.to.date) || // From: Multi-year e.g 21-22
                    (date > state.from.date && state.view.month === state.from.month && state.to.year > state.from.year && state.view.year === state.from.year && state.to.date) || // To next month
                    (date < state.to.date && state.view.month !== state.from.month && state.view.month === state.to.month && state.view.year === state.from.year && state.view.year === state.to.year && state.from.date) || // To: Multi-year e.g 21-22
                    (date < state.to.date && state.view.month === state.to.month && state.view.year === state.to.year && state.to.year > state.from.year && state.from.date) || // Manges multiple months of the same year
                    (state.view.month > state.from.month && state.view.month < state.to.month && state.view.year === state.from.year && state.view.year === state.to.year && state.from.date && state.to.date) || // Manges multiple months of diff years
                    (state.to.year > state.from.year && !state.to.month && state.view.month > state.from.month && state.view.month < state.to.month && state.view.year === state.to.year && state.from.date && state.to.date) || state.to.year > state.from.year && state.to.month && state.view.year === state.to.year && state.view.month < state.to.month || state.to.year > state.from.year && (state.to.month || !state.to.month) && state.view.year > state.from.year && state.view.year < state.to.year || state.view.month > state.from.month && state.to.year !== state.from.year && state.view.year === state.from.year && state.from.date && state.to.date) {
                        return /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: (calendar_module_default()).range,
                            onClick: pickFn.bind(null, date),
                            style: {
                                background: fromTo(state, date)
                            },
                            children: date
                        }, key);
                    } else if (// If year < today's year
                    (0,helpers/* generateCalendar */.Ze)(state.view.month, state.view.year).year < ToCalendar_today.getFullYear() || // if month === today's month && date <today's date && year===today's year
                    ((0,helpers/* generateCalendar */.Ze)(state.view.month, state.view.year).month === ToCalendar_today.getMonth() && date < ToCalendar_today.getDate() && (0,helpers/* generateCalendar */.Ze)(state.view.month, state.view.year).year === ToCalendar_today.getFullYear()) || // if month < today's month  && year===today's year
                    ((0,helpers/* generateCalendar */.Ze)(state.view.month, state.view.year).year === ToCalendar_today.getFullYear() && (0,helpers/* generateCalendar */.Ze)(state.view.month, state.view.year).month < ToCalendar_today.getMonth())) return /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (calendar_module_default()).past,
                        children: date
                    }, key);
                    else return /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        onClick: pickFn.bind(null, date),
                        style: {
                            background: fromTo(state, date)
                        },
                        children: date
                    }, key);
                })
            })
        ]
    });
};

// EXTERNAL MODULE: ./components/Widgets/Calendar.jsx
var Widgets_Calendar = __webpack_require__(3693);
;// CONCATENATED MODULE: ./components/Navigation/MobileSearch.jsx






function MobileSearch({ state , dispatch  }) {
    const { 0: stateCtx , 1: dispatchCtx  } = (0,external_react_.useContext)(AppContext/* default */.Z);
    const { 0: input , 1: setInput  } = (0,external_react_.useState)("");
    const focusInput = (0,external_react_.useRef)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "mobile-search",
        style: {
            translate: state.mobileSearch ? "0" : "0 200%"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "close-bar",
                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    onClick: ()=>dispatch({
                            type: "mobile-search"
                        }),
                    children: /*#__PURE__*/ jsx_runtime_.jsx(SVG_config/* Close */.x8, {
                        size: 20,
                        fill: "var(--headers)",
                        strokeWidth: 0.5
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "Stay"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "Experiences"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "Cars"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "Flights"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "search-options",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "where-to",
                        children: [
                            state.options.current === "where" || /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "search-option-tab",
                                onClick: ()=>dispatch({
                                        type: "where"
                                    }),
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "Where"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "Location"
                                    })
                                ]
                            }),
                            state.options.current === "where" && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "where-to-modal",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                    htmlFor: "destination",
                                                    children: "Where to?"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            type: "text",
                                                            name: "location",
                                                            id: "destination",
                                                            value: input,
                                                            placeholder: "Search destinations",
                                                            ref: focusInput,
                                                            onChange: (e)=>{
                                                                setInput(e.target.value);
                                                            }
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(SVG_config/* Search */.ol, {
                                                                size: 25,
                                                                stroke: "var(--headers)"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "popular-destinations",
                                        onClick: (e)=>{
                                            const tag = e.target.closest("p");
                                            if (!tag) return;
                                            setInput(e.target.textContent[0].toUpperCase() + e.target.textContent.slice(1));
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                children: "Popular destinations"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "destinations",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(SVG_config/* LocationPin */.aH, {
                                                            size: 20
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "australia"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "destinations",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(SVG_config/* LocationPin */.aH, {
                                                            size: 20
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "canada"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "destinations",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(SVG_config/* LocationPin */.aH, {
                                                            size: 20
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "germany"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "destinations",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(SVG_config/* LocationPin */.aH, {
                                                            size: 20
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "united kingdom"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "destinations",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(SVG_config/* LocationPin */.aH, {
                                                            size: 20
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Nigeria"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "duration",
                        children: [
                            state.options.current === "duration" || /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "search-option-tab",
                                onClick: ()=>dispatch({
                                        type: "duration"
                                    }),
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "Duration"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "Pick date"
                                    })
                                ]
                            }),
                            state.options.current === "duration" && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "calendar",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        children: "Duration"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Widgets_Calendar/* default */.Z, {
                                        state: state,
                                        dispatch: dispatch
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "guest",
                        children: [
                            state.options.current === "guest" || /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "search-option-tab",
                                onClick: ()=>dispatch({
                                        type: "guest"
                                    }),
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "Guests"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "How many"
                                    })
                                ]
                            }),
                            state.options.current === "guest" && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "guest-modal",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        children: "Guests"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "guest-pick",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "guest-pick-label",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Adults"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Ages 13 and above"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "guest-pick-count",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        onClick: ()=>dispatchCtx({
                                                                type: "guest-count",
                                                                action: "decrement",
                                                                guest: "adult"
                                                            }),
                                                        children: "-"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: stateCtx.guests.adults
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        onClick: ()=>dispatchCtx({
                                                                type: "guest-count",
                                                                action: "increment",
                                                                guest: "adult"
                                                            }),
                                                        children: "+"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "guest-pick",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "guest-pick-label",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Children"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Ages 3 - 12"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "guest-pick-count",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        onClick: ()=>dispatchCtx({
                                                                type: "guest-count",
                                                                action: "decrement",
                                                                guest: "children"
                                                            }),
                                                        children: "-"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: stateCtx.guests.children
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        onClick: ()=>dispatchCtx({
                                                                type: "guest-count",
                                                                action: "increment",
                                                                guest: "children"
                                                            }),
                                                        children: "+"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "guest-pick",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "guest-pick-label",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Infants"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Ages 1 - 2"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "guest-pick-count",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        onClick: ()=>dispatchCtx({
                                                                type: "guest-count",
                                                                action: "decrement",
                                                                guest: "infant"
                                                            }),
                                                        children: "-"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: stateCtx.guests.infants
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        onClick: ()=>dispatchCtx({
                                                                type: "guest-count",
                                                                action: "increment",
                                                                guest: "infant"
                                                            }),
                                                        children: "+"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "clearall-search",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        type: "button",
                        children: "Clear all"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/hotel/listings",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                            type: "button",
                            onClick: ()=>dispatch({
                                    type: "mobile-search"
                                }),
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(SVG_config/* Search */.ol, {
                                    size: 20,
                                    stroke: "white",
                                    strokeWidth: 4
                                }),
                                "Search"
                            ]
                        })
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: ./components/Widgets/GuestCount.jsx
var GuestCount = __webpack_require__(7646);
;// CONCATENATED MODULE: ./components/Navigation/MobileHeader.jsx


/*prettier-ignore */ 










/*prettier-ignore */ const MobileHeader_months = [
    "January",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
const dot = /*#__PURE__*/ jsx_runtime_.jsx(SVG_config/* Dot */.oT, {
    size: 5,
    fill: "var(--outline)"
});
function MobileHeader_reducer(state, action) {
    switch(action.type){
        case "mobile-search":
            return {
                ...state,
                mobileSearch: !state.mobileSearch
            };
        case "desk-search":
            return {
                ...state,
                deskSearch: !state.deskSearch
            };
        case "where":
            return {
                ...state,
                options: {
                    current: action.type
                }
            };
        case "duration":
            return {
                ...state,
                options: {
                    current: action.type
                }
            };
        case "guest":
            return {
                ...state,
                options: {
                    current: action.type
                }
            };
        case "menu":
            return {
                ...state,
                menu: {
                    toggle: !state.menu.toggle
                }
            };
        case "show-drop":
            if (state.dropDown.current === action.navlink) return {
                ...state,
                dropDown: {
                    current: null
                }
            };
            return {
                ...state,
                dropDown: {
                    current: action.navlink
                }
            };
        case "destination":
            return {
                ...state,
                searchBar: {
                    checkIn: false,
                    checkOut: false,
                    guest: false,
                    location: !state.searchBar.location
                }
            };
        case "check-in":
            return {
                ...state,
                searchBar: {
                    location: false,
                    checkOut: false,
                    guest: false,
                    checkIn: !state.searchBar.checkIn
                }
            };
        case "check-out":
            return {
                ...state,
                searchBar: {
                    location: false,
                    checkIn: false,
                    guest: false,
                    checkOut: !state.searchBar.checkOut
                }
            };
        case "how-many-guests":
            return {
                ...state,
                searchBar: {
                    location: false,
                    checkOut: false,
                    checkIn: false,
                    guest: !state.searchBar.guest
                }
            };
        case "search-bar":
            return {
                ...state,
                searchBar: {
                    location: true,
                    checkIn: false,
                    checkOut: false,
                    guest: false
                }
            };
    }
}
const MobileHeader_init = {
    mobileSearch: false,
    deskSearch: false,
    options: {
        current: "where"
    },
    menu: {
        toggle: false
    },
    dropDown: {
        current: null
    },
    searchBar: {
        location: true,
        checkIn: false,
        checkOut: false,
        guest: false
    },
    searchLocation: ""
};
function MobileHeader() {
    const { 0: state , 1: dispatch  } = (0,external_react_.useReducer)(MobileHeader_reducer, MobileHeader_init);
    const { 0: stateCtx , 1: dispatchCtx  } = (0,external_react_.useContext)(AppContext/* default */.Z);
    const { 0: input , 1: setInput  } = (0,external_react_.useState)("");
    const focusInput = (0,external_react_.useRef)();
    (0,external_react_.useEffect)(()=>{
        if (stateCtx.from.date) dispatch({
            type: "check-out"
        });
        if (stateCtx.to.date) dispatch({
            type: "how-many-guests"
        });
    }, [
        stateCtx.from.date,
        stateCtx.to.date
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                className: "navigation-header",
                style: {
                    maxHeight: state.deskSearch ? "500px" : "initial"
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "logo",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Nulo, {
                                    size: 50
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "mobile-search-bar",
                                onClick: ()=>dispatch({
                                        type: "mobile-search"
                                    }),
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(SVG_config/* Search */.ol, {
                                            size: 20,
                                            stroke: "var(--headers)"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "mobile-search-bar-text",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                    children: "Where to?"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                                    children: [
                                                        "Anywhere ",
                                                        dot,
                                                        " Any week ",
                                                        dot,
                                                        " Add guest"
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(SVG_config/* Sliders */.E1, {
                                                size: 20,
                                                stroke: "var(--headers)",
                                                strokeWidth: 30
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "desk-search-bar",
                                style: {
                                    scale: state.deskSearch ? "1.2" : "1",
                                    translate: state.deskSearch ? "0 50px" : "0",
                                    opacity: state.deskSearch ? "0" : "1",
                                    position: state.deskSearch ? "absolute" : "relative",
                                    pointerEvents: state.deskSearch ? "none" : "unset"
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "location-check-guest",
                                    onClick: ()=>{
                                        dispatch({
                                            type: "desk-search"
                                        });
                                        dispatch({
                                            type: "search-bar"
                                        });
                                        focusInput.current.focus();
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: "Location"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: "Check In"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: "Add Guests"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "desk-search-icon",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(SVG_config/* Search */.ol, {
                                                size: 20,
                                                stroke: "white"
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "desk-search-tab",
                                style: {
                                    scale: state.deskSearch ? "1" : "0",
                                    opacity: state.deskSearch ? "1" : "0",
                                    position: state.deskSearch ? "relative" : "absolute",
                                    pointerEvents: state.deskSearch ? "unset" : "none",
                                    zIndex: state.deskSearch ? 124 : 124
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Stay"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Experiences"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Cars"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Flights"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "theme-menu",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(ThemeSelect, {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "mobile-menu",
                                        onClick: ()=>dispatch({
                                                type: "menu"
                                            }),
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(SVG_config/* Menu */.v2, {
                                            size: 25,
                                            fill: "var(--headers)"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "appear",
                        style: {
                            translate: state.deskSearch ? "0" : "0 -100px",
                            scale: state.deskSearch ? "1" : "0.8",
                            opacity: state.deskSearch ? "1" : "0",
                            pointerEvents: state.deskSearch ? "unset" : "none",
                            position: state.deskSearch ? "relative" : "absolute"
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "appear-labels",
                                onClick: ()=>{
                                    dispatch({
                                        type: "destination"
                                    });
                                    focusInput.current.focus();
                                },
                                style: {
                                    boxShadow: state.searchBar.location ? "0 3px 10px var(--outline)" : "none"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "text",
                                        name: "location",
                                        id: "location",
                                        value: input,
                                        placeholder: "Location",
                                        ref: focusInput,
                                        onChange: (e)=>{
                                            setInput(e.target.value);
                                        }
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "appear-labels-description",
                                        children: "Where are you going?"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "popular-destinations",
                                        onClick: (e)=>{
                                            const tag = e.target.closest("p");
                                            if (!tag) return;
                                            setInput(e.target.textContent[0].toUpperCase() + e.target.textContent.slice(1));
                                        },
                                        style: {
                                            maxHeight: state.searchBar.location ? "1000px" : "0",
                                            opacity: state.searchBar.location ? "1" : "0"
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                children: "Recent Searches"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "destinations",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(SVG_config/* History */.Ay, {
                                                            size: 20,
                                                            fill: "var(--descriptions)"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "australia"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "destinations",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(SVG_config/* History */.Ay, {
                                                            size: 20,
                                                            fill: "var(--descriptions)"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "canada"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "destinations",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(SVG_config/* History */.Ay, {
                                                            size: 20,
                                                            fill: "var(--descriptions)"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "germany"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "destinations",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(SVG_config/* History */.Ay, {
                                                            size: 20,
                                                            fill: "var(--descriptions)"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "united kingdom"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "destinations",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(SVG_config/* History */.Ay, {
                                                            size: 20,
                                                            fill: "var(--descriptions)"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Nigeria"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "appear-labels",
                                onClick: ()=>{
                                    if (stateCtx.from.date) dispatchCtx({
                                        type: "view",
                                        month: stateCtx.from.month,
                                        year: stateCtx.from.year
                                    });
                                    dispatch({
                                        type: "check-in"
                                    });
                                },
                                style: {
                                    boxShadow: state.searchBar.checkIn ? "0 3px 10px var(--outline)" : "none"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "appear-labels-title",
                                        children: stateCtx.from.date ? `${`${stateCtx.from.date}`.padStart(2, "0")} ${MobileHeader_months[stateCtx.from.month]}` : "Check in"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "appear-labels-description",
                                        children: "From?"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "header-calendar",
                                        style: {
                                            maxHeight: state.searchBar.checkIn ? "1000px" : "0",
                                            opacity: state.searchBar.checkIn ? "1" : "0"
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Calendar, {})
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "appear-labels",
                                onClick: ()=>{
                                    if (stateCtx.to.date) dispatchCtx({
                                        type: "view",
                                        month: stateCtx.to.month,
                                        year: stateCtx.to.year
                                    });
                                    if (!stateCtx.from.date) dispatch({
                                        type: "check-in"
                                    });
                                    else dispatch({
                                        type: "check-out"
                                    });
                                },
                                style: {
                                    boxShadow: state.searchBar.checkOut ? "0 3px 10px var(--outline)" : "none"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "appear-labels-title",
                                        children: stateCtx.to.date ? `${`${stateCtx.to.date}`.padStart(2, "0")} ${MobileHeader_months[stateCtx.to.month]}
										
								  ` : "Check out"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "appear-labels-description",
                                        children: "To?"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "header-calendar",
                                        style: {
                                            maxHeight: state.searchBar.checkOut ? "1000px" : "0",
                                            opacity: state.searchBar.checkOut ? "1" : "0"
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(ToCalendar_Calendar, {})
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "appear-labels",
                                onClick: ()=>dispatch({
                                        type: "how-many-guests"
                                    }),
                                style: {
                                    boxShadow: state.searchBar.guest ? "0 3px 10px var(--outline)" : "none"
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "appear-labels-title",
                                                children: "Guests"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "appear-labels-description",
                                                children: "How many?"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/hotel/listings",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "appear-search-icon",
                                            onClick: ()=>dispatch({
                                                    type: "desk-search"
                                                }),
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(SVG_config/* Search */.ol, {
                                                size: 30,
                                                stroke: "white",
                                                strokeWidth: 3
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "guest-count",
                                        style: {
                                            maxHeight: state.searchBar.guest ? "1000px" : "0",
                                            opacity: state.searchBar.guest ? "1" : "0"
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(GuestCount/* default */.Z, {})
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "search-overlay",
                onClick: ()=>dispatch({
                        type: "desk-search"
                    }),
                style: {
                    opacity: state.deskSearch ? "1" : "0",
                    pointerEvents: state.deskSearch ? "unset" : "none"
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(MobileNav, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(MobileSearch, {
                state: state,
                dispatch: dispatch
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Navigation, {
                state: state,
                dispatch: dispatch
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/Layout/Layout.jsx




function Layout({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("link", {
                    rel: "shortcut icon",
                    href: "logo.svg",
                    type: "image/svg"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(MobileHeader, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
        ]
    });
};


/***/ }),

/***/ 482:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 2581:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5941);
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5805);
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js_sha256__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6120);
/* harmony import */ var js_sha256__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_sha256__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5998);
/* harmony import */ var _utils_AppContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7919);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_1__]);
swr__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







function fetch(args) {
    return (0,graphql_request__WEBPACK_IMPORTED_MODULE_2__.request)({
        url: "/api/graphql",
        document: args.query,
        variables: args.variables,
        requestHeaders: {
            "Api-key": "5d2a6be897ec064bf900fac51a1c85a4",
            /* prettier-ignore */ "X-Signature": js_sha256__WEBPACK_IMPORTED_MODULE_3___default()(`${"5d2a6be897ec064bf900fac51a1c85a4"}${"5f4450d3ff"}${Math.floor(Date.now() / 1000)}`),
            Accept: "application/json"
        }
    });
}
function App({ Component: App , pageProps  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swr__WEBPACK_IMPORTED_MODULE_1__.SWRConfig, {
        value: {
            fetcher: fetch,
            revalidateIfStale: false
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utils_AppContext__WEBPACK_IMPORTED_MODULE_5__/* .AppProvider */ .w, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(App, {
                    ...pageProps
                })
            })
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5805:
/***/ ((module) => {

module.exports = require("graphql-request");

/***/ }),

/***/ 6120:
/***/ ((module) => {

module.exports = require("js-sha256");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 5941:
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,664,71,197,749], () => (__webpack_exec__(2581)));
module.exports = __webpack_exports__;

})();