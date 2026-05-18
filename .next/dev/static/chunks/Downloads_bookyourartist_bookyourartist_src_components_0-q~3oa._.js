(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/bookyourartist/bookyourartist/src/components/Header/Header.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "Header-module__Qf1goG__active",
  "contactBtn": "Header-module__Qf1goG__contactBtn",
  "followLabel": "Header-module__Qf1goG__followLabel",
  "hamburger": "Header-module__Qf1goG__hamburger",
  "header": "Header-module__Qf1goG__header",
  "logo": "Header-module__Qf1goG__logo",
  "logoImg": "Header-module__Qf1goG__logoImg",
  "mobileLink": "Header-module__Qf1goG__mobileLink",
  "mobileLogo": "Header-module__Qf1goG__mobileLogo",
  "mobileLogoImg": "Header-module__Qf1goG__mobileLogoImg",
  "mobileMenu": "Header-module__Qf1goG__mobileMenu",
  "navBar": "Header-module__Qf1goG__navBar",
  "navInner": "Header-module__Qf1goG__navInner",
  "navLink": "Header-module__Qf1goG__navLink",
  "navLinks": "Header-module__Qf1goG__navLinks",
  "scrolled": "Header-module__Qf1goG__scrolled",
  "slideDown": "Header-module__Qf1goG__slideDown",
  "socialIcons": "Header-module__Qf1goG__socialIcons",
  "socialWrap": "Header-module__Qf1goG__socialWrap",
  "topBar": "Header-module__Qf1goG__topBar",
  "topBarInner": "Header-module__Qf1goG__topBarInner",
  "topRight": "Header-module__Qf1goG__topRight",
});
}),
"[project]/Downloads/bookyourartist/bookyourartist/src/components/Header/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bookyourartist/bookyourartist/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bookyourartist/bookyourartist/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bookyourartist/bookyourartist/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bookyourartist/bookyourartist/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bookyourartist/bookyourartist/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Downloads/bookyourartist/bookyourartist/src/components/Header/Header.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const navLinks = [
    {
        href: '/',
        label: 'Home'
    },
    {
        href: '/about',
        label: 'About Us'
    },
    {
        href: '/artists',
        label: 'Book Artists'
    },
    {
        href: '/contact',
        label: 'Contact Us'
    }
];
function Header() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const onScroll = {
                "Header.useEffect.onScroll": ()=>setScrolled(window.scrollY > 40)
            }["Header.useEffect.onScroll"];
            window.addEventListener('scroll', onScroll);
            return ({
                "Header.useEffect": ()=>window.removeEventListener('scroll', onScroll)
            })["Header.useEffect"];
        }
    }["Header.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            setMenuOpen(false);
        }
    }["Header.useEffect"], [
        pathname
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header} ${scrolled ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].scrolled : ''}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].topBar,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].topBarInner,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].socialWrap,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].socialIcons,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://instagram.com/artistvibes_entertainment",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        "aria-label": "Instagram",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaInstagram"], {}, void 0, false, {
                                            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/Header/Header.tsx",
                                            lineNumber: 38,
                                            columnNumber: 129
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/Header/Header.tsx",
                                        lineNumber: 38,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://facebook.com/ArtistvibesEntertainment",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        "aria-label": "Facebook",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaFacebookF"], {}, void 0, false, {
                                            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/Header/Header.tsx",
                                            lineNumber: 39,
                                            columnNumber: 126
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/Header/Header.tsx",
                                        lineNumber: 39,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://youtube.com/@ArtistvibesEntertainment",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        "aria-label": "YouTube",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaYoutube"], {}, void 0, false, {
                                            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/Header/Header.tsx",
                                            lineNumber: 40,
                                            columnNumber: 125
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/Header/Header.tsx",
                                        lineNumber: 40,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/Header/Header.tsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/Header/Header.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logo,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/logo.png",
                                alt: "Artistvibes Entertainment",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoImg
                            }, void 0, false, {
                                fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/Header/Header.tsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/Header/Header.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].topRight,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/contact",
                                className: `btn ${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contactBtn}`,
                                children: "Get Started"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/Header/Header.tsx",
                                lineNumber: 47,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/Header/Header.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/Header/Header.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/Header/Header.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navBar,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navInner,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobileLogo,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/logo.png",
                                alt: "Artistvibes Entertainment",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobileLogoImg
                            }, void 0, false, {
                                fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/Header/Header.tsx",
                                lineNumber: 57,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/Header/Header.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navLinks,
                            children: navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: link.href,
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navLink} ${pathname === link.href ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ''}`,
                                    children: link.label
                                }, link.href + link.label, false, {
                                    fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/Header/Header.tsx",
                                    lineNumber: 62,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/Header/Header.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            suppressHydrationWarning: true,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hamburger,
                            onClick: ()=>setMenuOpen((p)=>!p),
                            "aria-label": "Toggle menu",
                            children: menuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaTimes"], {}, void 0, false, {
                                fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/Header/Header.tsx",
                                lineNumber: 78,
                                columnNumber: 25
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaBars"], {}, void 0, false, {
                                fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/Header/Header.tsx",
                                lineNumber: 78,
                                columnNumber: 39
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/Header/Header.tsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/Header/Header.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/Header/Header.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            menuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobileMenu,
                children: navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: link.href,
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobileLink} ${pathname === link.href ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ''}`,
                        children: link.label
                    }, link.href + link.label, false, {
                        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/Header/Header.tsx",
                        lineNumber: 87,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/Header/Header.tsx",
                lineNumber: 85,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/Header/Header.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_s(Header, "XDo0NVzPxWgojTVYfV4EF2fjpCM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/bookyourartist/bookyourartist/src/components/FloatingContact/FloatingContact.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "call": "FloatingContact-module__mrJ4oW__call",
  "fab": "FloatingContact-module__mrJ4oW__fab",
  "fabOpen": "FloatingContact-module__mrJ4oW__fabOpen",
  "fabPulse": "FloatingContact-module__mrJ4oW__fabPulse",
  "option": "FloatingContact-module__mrJ4oW__option",
  "optionIcon": "FloatingContact-module__mrJ4oW__optionIcon",
  "optionSub": "FloatingContact-module__mrJ4oW__optionSub",
  "optionTitle": "FloatingContact-module__mrJ4oW__optionTitle",
  "panel": "FloatingContact-module__mrJ4oW__panel",
  "pulseRing": "FloatingContact-module__mrJ4oW__pulseRing",
  "slideUp": "FloatingContact-module__mrJ4oW__slideUp",
  "whatsapp": "FloatingContact-module__mrJ4oW__whatsapp",
  "wrapper": "FloatingContact-module__mrJ4oW__wrapper",
});
}),
"[project]/Downloads/bookyourartist/bookyourartist/src/components/FloatingContact/FloatingContact.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FloatingContact
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bookyourartist/bookyourartist/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bookyourartist/bookyourartist/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bookyourartist/bookyourartist/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$FloatingContact$2f$FloatingContact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Downloads/bookyourartist/bookyourartist/src/components/FloatingContact/FloatingContact.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function FloatingContact() {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$FloatingContact$2f$FloatingContact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].wrapper,
        children: [
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$FloatingContact$2f$FloatingContact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panel,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "https://wa.me/918956059005?text=Hi!%20I%20want%20to%20book%20an%20artist.",
                        target: "_blank",
                        rel: "noreferrer",
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$FloatingContact$2f$FloatingContact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].option} ${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$FloatingContact$2f$FloatingContact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].whatsapp}`,
                        onClick: ()=>setOpen(false),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaWhatsapp"], {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$FloatingContact$2f$FloatingContact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].optionIcon
                            }, void 0, false, {
                                fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/FloatingContact/FloatingContact.tsx",
                                lineNumber: 22,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$FloatingContact$2f$FloatingContact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].optionTitle,
                                        children: "WhatsApp Us"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/FloatingContact/FloatingContact.tsx",
                                        lineNumber: 24,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$FloatingContact$2f$FloatingContact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].optionSub,
                                        children: "Quick reply guaranteed"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/FloatingContact/FloatingContact.tsx",
                                        lineNumber: 25,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/FloatingContact/FloatingContact.tsx",
                                lineNumber: 23,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/FloatingContact/FloatingContact.tsx",
                        lineNumber: 15,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "tel:+918887929860",
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$FloatingContact$2f$FloatingContact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].option} ${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$FloatingContact$2f$FloatingContact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].call}`,
                        onClick: ()=>setOpen(false),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaPhoneAlt"], {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$FloatingContact$2f$FloatingContact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].optionIcon
                            }, void 0, false, {
                                fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/FloatingContact/FloatingContact.tsx",
                                lineNumber: 33,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$FloatingContact$2f$FloatingContact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].optionTitle,
                                        children: "Call Us Now"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/FloatingContact/FloatingContact.tsx",
                                        lineNumber: 35,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$FloatingContact$2f$FloatingContact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].optionSub,
                                        children: "+91 88879 29860"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/FloatingContact/FloatingContact.tsx",
                                        lineNumber: 36,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/FloatingContact/FloatingContact.tsx",
                                lineNumber: 34,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/FloatingContact/FloatingContact.tsx",
                        lineNumber: 28,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/FloatingContact/FloatingContact.tsx",
                lineNumber: 14,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                suppressHydrationWarning: true,
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$FloatingContact$2f$FloatingContact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fab} ${open ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$FloatingContact$2f$FloatingContact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fabOpen : ''}`,
                onClick: ()=>setOpen((p)=>!p),
                "aria-label": "Contact Us",
                children: [
                    open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaTimes"], {}, void 0, false, {
                        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/FloatingContact/FloatingContact.tsx",
                        lineNumber: 49,
                        columnNumber: 17
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaCommentDots"], {}, void 0, false, {
                        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/FloatingContact/FloatingContact.tsx",
                        lineNumber: 49,
                        columnNumber: 31
                    }, this),
                    !open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$FloatingContact$2f$FloatingContact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fabPulse
                    }, void 0, false, {
                        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/FloatingContact/FloatingContact.tsx",
                        lineNumber: 50,
                        columnNumber: 19
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/FloatingContact/FloatingContact.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/FloatingContact/FloatingContact.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_s(FloatingContact, "xG1TONbKtDWtdOTrXaTAsNhPg/Q=");
_c = FloatingContact;
var _c;
__turbopack_context__.k.register(_c, "FloatingContact");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Downloads_bookyourartist_bookyourartist_src_components_0-q~3oa._.js.map