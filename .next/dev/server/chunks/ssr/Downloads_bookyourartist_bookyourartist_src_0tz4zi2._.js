module.exports = [
"[project]/Downloads/bookyourartist/bookyourartist/src/components/NewsletterSection/NewsletterSection.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "bgGlow": "NewsletterSection-module__7KDUoa__bgGlow",
  "bgGlowRight": "NewsletterSection-module__7KDUoa__bgGlowRight",
  "card": "NewsletterSection-module__7KDUoa__card",
  "disclaimer": "NewsletterSection-module__7KDUoa__disclaimer",
  "fadeInScale": "NewsletterSection-module__7KDUoa__fadeInScale",
  "formSide": "NewsletterSection-module__7KDUoa__formSide",
  "goldShine": "NewsletterSection-module__7KDUoa__goldShine",
  "icon": "NewsletterSection-module__7KDUoa__icon",
  "iconWrap": "NewsletterSection-module__7KDUoa__iconWrap",
  "inner": "NewsletterSection-module__7KDUoa__inner",
  "input": "NewsletterSection-module__7KDUoa__input",
  "inputGroup": "NewsletterSection-module__7KDUoa__inputGroup",
  "inputIcon": "NewsletterSection-module__7KDUoa__inputIcon",
  "inputWrap": "NewsletterSection-module__7KDUoa__inputWrap",
  "section": "NewsletterSection-module__7KDUoa__section",
  "shine": "NewsletterSection-module__7KDUoa__shine",
  "submitBtn": "NewsletterSection-module__7KDUoa__submitBtn",
  "submitIcon": "NewsletterSection-module__7KDUoa__submitIcon",
  "subtitle": "NewsletterSection-module__7KDUoa__subtitle",
  "success": "NewsletterSection-module__7KDUoa__success",
  "successDesc": "NewsletterSection-module__7KDUoa__successDesc",
  "successIcon": "NewsletterSection-module__7KDUoa__successIcon",
  "successTitle": "NewsletterSection-module__7KDUoa__successTitle",
  "tag": "NewsletterSection-module__7KDUoa__tag",
  "textSide": "NewsletterSection-module__7KDUoa__textSide",
  "title": "NewsletterSection-module__7KDUoa__title",
  "titleAccent": "NewsletterSection-module__7KDUoa__titleAccent",
});
}),
"[project]/Downloads/bookyourartist/bookyourartist/src/components/NewsletterSection/NewsletterSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NewsletterSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bookyourartist/bookyourartist/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bookyourartist/bookyourartist/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bookyourartist/bookyourartist/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$NewsletterSection$2f$NewsletterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Downloads/bookyourartist/bookyourartist/src/components/NewsletterSection/NewsletterSection.module.css [app-ssr] (css module)");
"use client";
;
;
;
;
function NewsletterSection() {
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [subscribed, setSubscribed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const handleSubscribe = async ()=>{
        if (!email.trim() || !email.includes('@')) {
            setError("Please enter a valid email address");
            return;
        }
        setLoading(true);
        setError("");
        try {
            const res = await fetch("/api/newsletter", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email
                })
            });
            const data = await res.json();
            if (data.success) {
                setSubscribed(true);
                setTimeout(()=>{
                    setSubscribed(false);
                    setEmail("");
                }, 5000);
            } else {
                setError(data.error || "Failed to subscribe");
            }
        } catch (err) {
            setError("An error occurred. Please try again.");
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$NewsletterSection$2f$NewsletterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].section,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$NewsletterSection$2f$NewsletterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].bgGlow
            }, void 0, false, {
                fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/NewsletterSection/NewsletterSection.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$NewsletterSection$2f$NewsletterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].bgGlowRight
            }, void 0, false, {
                fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/NewsletterSection/NewsletterSection.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `container ${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$NewsletterSection$2f$NewsletterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inner}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$NewsletterSection$2f$NewsletterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$NewsletterSection$2f$NewsletterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].shine
                        }, void 0, false, {
                            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/NewsletterSection/NewsletterSection.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$NewsletterSection$2f$NewsletterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].textSide,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$NewsletterSection$2f$NewsletterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].iconWrap,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaEnvelope"], {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$NewsletterSection$2f$NewsletterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].icon
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/NewsletterSection/NewsletterSection.tsx",
                                        lineNumber: 59,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/NewsletterSection/NewsletterSection.tsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$NewsletterSection$2f$NewsletterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tag,
                                    children: "Stay Tuned With Us"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/NewsletterSection/NewsletterSection.tsx",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$NewsletterSection$2f$NewsletterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                                    children: [
                                        "Be the first to grab",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/NewsletterSection/NewsletterSection.tsx",
                                            lineNumber: 63,
                                            columnNumber: 35
                                        }, this),
                                        "this ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$NewsletterSection$2f$NewsletterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].titleAccent,
                                            children: "opportunity!"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/NewsletterSection/NewsletterSection.tsx",
                                            lineNumber: 64,
                                            columnNumber: 20
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/NewsletterSection/NewsletterSection.tsx",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$NewsletterSection$2f$NewsletterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].subtitle,
                                    children: "Subscribe to get exclusive access to inspiring content, news, and special offers before anyone else."
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/NewsletterSection/NewsletterSection.tsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/NewsletterSection/NewsletterSection.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$NewsletterSection$2f$NewsletterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formSide,
                            children: subscribed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$NewsletterSection$2f$NewsletterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].success,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$NewsletterSection$2f$NewsletterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].successIcon,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaCheck"], {}, void 0, false, {
                                            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/NewsletterSection/NewsletterSection.tsx",
                                            lineNumber: 77,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/NewsletterSection/NewsletterSection.tsx",
                                        lineNumber: 76,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$NewsletterSection$2f$NewsletterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].successTitle,
                                                children: "You're subscribed!"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/NewsletterSection/NewsletterSection.tsx",
                                                lineNumber: 80,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$NewsletterSection$2f$NewsletterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].successDesc,
                                                children: "Welcome aboard. Check your inbox soon."
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/NewsletterSection/NewsletterSection.tsx",
                                                lineNumber: 81,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/NewsletterSection/NewsletterSection.tsx",
                                        lineNumber: 79,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/NewsletterSection/NewsletterSection.tsx",
                                lineNumber: 75,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$NewsletterSection$2f$NewsletterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inputGroup,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$NewsletterSection$2f$NewsletterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inputWrap,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaEnvelope"], {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$NewsletterSection$2f$NewsletterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inputIcon
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/NewsletterSection/NewsletterSection.tsx",
                                                        lineNumber: 88,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        suppressHydrationWarning: true,
                                                        type: "email",
                                                        value: email,
                                                        onChange: (e)=>setEmail(e.target.value),
                                                        onKeyDown: (e)=>e.key === "Enter" && handleSubscribe(),
                                                        placeholder: "Enter your email address",
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$NewsletterSection$2f$NewsletterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].input,
                                                        "aria-label": "Email address",
                                                        disabled: loading
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/NewsletterSection/NewsletterSection.tsx",
                                                        lineNumber: 89,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/NewsletterSection/NewsletterSection.tsx",
                                                lineNumber: 87,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                suppressHydrationWarning: true,
                                                onClick: handleSubscribe,
                                                className: `btn ${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$NewsletterSection$2f$NewsletterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].submitBtn}`,
                                                disabled: loading,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: loading ? "Subscribing..." : "Subscribe"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/NewsletterSection/NewsletterSection.tsx",
                                                        lineNumber: 107,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaPaperPlane"], {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$NewsletterSection$2f$NewsletterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].submitIcon
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/NewsletterSection/NewsletterSection.tsx",
                                                        lineNumber: 108,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/NewsletterSection/NewsletterSection.tsx",
                                                lineNumber: 101,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/NewsletterSection/NewsletterSection.tsx",
                                        lineNumber: 86,
                                        columnNumber: 17
                                    }, this),
                                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-red-500 text-sm mt-2",
                                        children: error
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/NewsletterSection/NewsletterSection.tsx",
                                        lineNumber: 111,
                                        columnNumber: 27
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$NewsletterSection$2f$NewsletterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].disclaimer,
                                        children: "🔒 No spam, unsubscribe at any time. Your privacy matters."
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/NewsletterSection/NewsletterSection.tsx",
                                        lineNumber: 112,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/NewsletterSection/NewsletterSection.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/NewsletterSection/NewsletterSection.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/NewsletterSection/NewsletterSection.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/NewsletterSection/NewsletterSection.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/bookyourartist/bookyourartist/src/components/BookingModal/BookingModal.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "scaleIn": "BookingModal-module__Qfwj-q__scaleIn",
  "success": "BookingModal-module__Qfwj-q__success",
  "successIcon": "BookingModal-module__Qfwj-q__successIcon",
});
}),
"[project]/Downloads/bookyourartist/bookyourartist/src/components/BookingModal/BookingModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BookingModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bookyourartist/bookyourartist/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bookyourartist/bookyourartist/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$BookingModal$2f$BookingModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Downloads/bookyourartist/bookyourartist/src/components/BookingModal/BookingModal.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bookyourartist/bookyourartist/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const eventTypes = [
    'Wedding',
    'Corporate Event',
    'Birthday Party',
    'College Fest',
    'Concert'
];
const budgetRanges = [
    'Under ₹20,000',
    '₹20,000 – ₹50,000',
    '₹50,000 – ₹1,00,000',
    '₹1,00,000 – ₹2,00,000',
    'Above ₹2,00,000'
];
function BookingModal({ onClose, artistName, artistId }) {
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        phone: '',
        email: '',
        eventType: '',
        eventDate: '',
        budget: '',
        message: ''
    });
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [success, setSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const handleChange = (e)=>{
        setForm((p)=>({
                ...p,
                [e.target.name]: e.target.value
            }));
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            const res = await fetch('/api/bookings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...form,
                    artistId,
                    artistName
                })
            });
            const data = await res.json();
            if (data.success) {
                setSuccess(true);
            } else {
                setError(data.error || 'Something went wrong. Please try again.');
            }
        } catch  {
            setError('Network error. Please try again.');
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "modal-overlay",
        onClick: (e)=>e.target === e.currentTarget && onClose(),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "modal animate-slideUp",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "modal-close",
                    onClick: onClose,
                    "aria-label": "Close",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaTimes"], {}, void 0, false, {
                        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/BookingModal/BookingModal.tsx",
                        lineNumber: 61,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/BookingModal/BookingModal.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this),
                success ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$BookingModal$2f$BookingModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].success,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaCheckCircle"], {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$BookingModal$2f$BookingModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].successIcon
                        }, void 0, false, {
                            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/BookingModal/BookingModal.tsx",
                            lineNumber: 66,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            children: "Booking Request Sent!"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/BookingModal/BookingModal.tsx",
                            lineNumber: 67,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                "Thank you, ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: form.name
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/BookingModal/BookingModal.tsx",
                                    lineNumber: 68,
                                    columnNumber: 27
                                }, this),
                                "! Our team will contact you within 2 hours."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/BookingModal/BookingModal.tsx",
                            lineNumber: 68,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn btn-primary mt-lg",
                            onClick: onClose,
                            children: "Close"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/BookingModal/BookingModal.tsx",
                            lineNumber: 69,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/BookingModal/BookingModal.tsx",
                    lineNumber: 65,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "modal-title",
                            children: artistName ? `Book ${artistName}` : "Book an Artist"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/BookingModal/BookingModal.tsx",
                            lineNumber: 73,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "modal-subtitle",
                            children: "Fill in your details and we'll get back to you within 2 hours."
                        }, void 0, false, {
                            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/BookingModal/BookingModal.tsx",
                            lineNumber: 76,
                            columnNumber: 13
                        }, this),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "alert alert-error",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/BookingModal/BookingModal.tsx",
                            lineNumber: 78,
                            columnNumber: 23
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmit,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "form-row",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "form-group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "form-label",
                                                    children: "Your Name *"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/BookingModal/BookingModal.tsx",
                                                    lineNumber: 83,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    name: "name",
                                                    className: "form-control",
                                                    placeholder: "e.g. Rahul Sharma",
                                                    value: form.name,
                                                    onChange: handleChange,
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/BookingModal/BookingModal.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/BookingModal/BookingModal.tsx",
                                            lineNumber: 82,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "form-group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "form-label",
                                                    children: "Phone Number *"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/BookingModal/BookingModal.tsx",
                                                    lineNumber: 87,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    name: "phone",
                                                    className: "form-control",
                                                    placeholder: "+91 XXXXX XXXXX",
                                                    value: form.phone,
                                                    onChange: handleChange,
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/BookingModal/BookingModal.tsx",
                                                    lineNumber: 88,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/BookingModal/BookingModal.tsx",
                                            lineNumber: 86,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/BookingModal/BookingModal.tsx",
                                    lineNumber: 81,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "form-group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "form-label",
                                            children: "Email Address"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/BookingModal/BookingModal.tsx",
                                            lineNumber: 93,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            name: "email",
                                            type: "email",
                                            className: "form-control",
                                            placeholder: "your@email.com",
                                            value: form.email,
                                            onChange: handleChange
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/BookingModal/BookingModal.tsx",
                                            lineNumber: 94,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/BookingModal/BookingModal.tsx",
                                    lineNumber: 92,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "form-row",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "form-group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "form-label",
                                                    children: "Event Type *"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/BookingModal/BookingModal.tsx",
                                                    lineNumber: 99,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    name: "eventType",
                                                    className: "form-control",
                                                    value: form.eventType,
                                                    onChange: handleChange,
                                                    required: true,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: "Select event type"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/BookingModal/BookingModal.tsx",
                                                            lineNumber: 101,
                                                            columnNumber: 21
                                                        }, this),
                                                        eventTypes.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: t,
                                                                children: t
                                                            }, t, false, {
                                                                fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/BookingModal/BookingModal.tsx",
                                                                lineNumber: 102,
                                                                columnNumber: 44
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/BookingModal/BookingModal.tsx",
                                                    lineNumber: 100,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/BookingModal/BookingModal.tsx",
                                            lineNumber: 98,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "form-group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "form-label",
                                                    children: "Event Date *"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/BookingModal/BookingModal.tsx",
                                                    lineNumber: 106,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    name: "eventDate",
                                                    type: "date",
                                                    className: "form-control",
                                                    value: form.eventDate,
                                                    onChange: handleChange,
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/BookingModal/BookingModal.tsx",
                                                    lineNumber: 107,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/BookingModal/BookingModal.tsx",
                                            lineNumber: 105,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/BookingModal/BookingModal.tsx",
                                    lineNumber: 97,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "form-group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "form-label",
                                            children: "Budget Range *"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/BookingModal/BookingModal.tsx",
                                            lineNumber: 112,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            name: "budget",
                                            className: "form-control",
                                            value: form.budget,
                                            onChange: handleChange,
                                            required: true,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "Select your budget"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/BookingModal/BookingModal.tsx",
                                                    lineNumber: 114,
                                                    columnNumber: 19
                                                }, this),
                                                budgetRanges.map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: b,
                                                        children: b
                                                    }, b, false, {
                                                        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/BookingModal/BookingModal.tsx",
                                                        lineNumber: 115,
                                                        columnNumber: 44
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/BookingModal/BookingModal.tsx",
                                            lineNumber: 113,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/BookingModal/BookingModal.tsx",
                                    lineNumber: 111,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "form-group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "form-label",
                                            children: "Additional Message"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/BookingModal/BookingModal.tsx",
                                            lineNumber: 120,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            name: "message",
                                            className: "form-control",
                                            placeholder: "Tell us more about your event, special requirements, etc.",
                                            value: form.message,
                                            onChange: handleChange,
                                            rows: 3
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/BookingModal/BookingModal.tsx",
                                            lineNumber: 121,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/BookingModal/BookingModal.tsx",
                                    lineNumber: 119,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "btn btn-primary btn-full",
                                    disabled: loading,
                                    children: loading ? 'Sending...' : '🎤 Submit Booking Request'
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/BookingModal/BookingModal.tsx",
                                    lineNumber: 124,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/BookingModal/BookingModal.tsx",
                            lineNumber: 80,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/BookingModal/BookingModal.tsx",
            lineNumber: 59,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/BookingModal/BookingModal.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/bookyourartist/bookyourartist/src/components/FeaturedArtistsCarousel/FeaturedArtistsCarousel.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "artistAvatar": "FeaturedArtistsCarousel-module__GwsKHa__artistAvatar",
  "artistAvatarInner": "FeaturedArtistsCarousel-module__GwsKHa__artistAvatarInner",
  "artistAvatarRing": "FeaturedArtistsCarousel-module__GwsKHa__artistAvatarRing",
  "artistCard": "FeaturedArtistsCarousel-module__GwsKHa__artistCard",
  "artistCardGlow": "FeaturedArtistsCarousel-module__GwsKHa__artistCardGlow",
  "artistCategory": "FeaturedArtistsCarousel-module__GwsKHa__artistCategory",
  "artistName": "FeaturedArtistsCarousel-module__GwsKHa__artistName",
  "artistUnderline": "FeaturedArtistsCarousel-module__GwsKHa__artistUnderline",
  "carouselBtn": "FeaturedArtistsCarousel-module__GwsKHa__carouselBtn",
  "carouselBtnDisabled": "FeaturedArtistsCarousel-module__GwsKHa__carouselBtnDisabled",
  "carouselBtnNext": "FeaturedArtistsCarousel-module__GwsKHa__carouselBtnNext",
  "carouselBtnPrev": "FeaturedArtistsCarousel-module__GwsKHa__carouselBtnPrev",
  "carouselCards": "FeaturedArtistsCarousel-module__GwsKHa__carouselCards",
  "carouselDots": "FeaturedArtistsCarousel-module__GwsKHa__carouselDots",
  "carouselRow": "FeaturedArtistsCarousel-module__GwsKHa__carouselRow",
  "carouselSection": "FeaturedArtistsCarousel-module__GwsKHa__carouselSection",
  "dot": "FeaturedArtistsCarousel-module__GwsKHa__dot",
  "dotActive": "FeaturedArtistsCarousel-module__GwsKHa__dotActive",
  "goldGlowPulse": "FeaturedArtistsCarousel-module__GwsKHa__goldGlowPulse",
  "goldShimmerSweep": "FeaturedArtistsCarousel-module__GwsKHa__goldShimmerSweep",
  "header": "FeaturedArtistsCarousel-module__GwsKHa__header",
  "highlight": "FeaturedArtistsCarousel-module__GwsKHa__highlight",
  "subtitle": "FeaturedArtistsCarousel-module__GwsKHa__subtitle",
  "tag": "FeaturedArtistsCarousel-module__GwsKHa__tag",
  "tagDash": "FeaturedArtistsCarousel-module__GwsKHa__tagDash",
  "tagLine": "FeaturedArtistsCarousel-module__GwsKHa__tagLine",
  "title": "FeaturedArtistsCarousel-module__GwsKHa__title",
});
}),
"[project]/Downloads/bookyourartist/bookyourartist/src/components/FeaturedArtistsCarousel/FeaturedArtistsCarousel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FeaturedArtistsCarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bookyourartist/bookyourartist/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bookyourartist/bookyourartist/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$FeaturedArtistsCarousel$2f$FeaturedArtistsCarousel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Downloads/bookyourartist/bookyourartist/src/components/FeaturedArtistsCarousel/FeaturedArtistsCarousel.module.css [app-ssr] (css module)");
"use client";
;
;
;
function FeaturedArtistsCarousel() {
    const [artists, setArtists] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [current, setCurrent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [visibleCount, setVisibleCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(4);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        async function fetchArtists() {
            try {
                const res = await fetch('/api/artists?featured=true');
                const data = await res.json();
                if (data.success && data.data) {
                    setArtists(data.data.slice(0, 10)); // take up to 10 for the carousel
                }
            } catch (err) {
                console.error('Failed to fetch artists:', err);
            }
        }
        fetchArtists();
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleResize = ()=>{
            if (window.innerWidth < 640) setVisibleCount(1);
            else if (window.innerWidth < 1024) setVisibleCount(2);
            else setVisibleCount(4);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return ()=>window.removeEventListener('resize', handleResize);
    }, []);
    const maxIndex = Math.max(0, artists.length - visibleCount);
    const prev = ()=>setCurrent((c)=>Math.max(0, c - 1));
    const next = ()=>setCurrent((c)=>Math.min(maxIndex, c + 1));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (artists.length <= visibleCount) return;
        const interval = setInterval(()=>{
            setCurrent((c)=>c >= maxIndex ? 0 : c + 1);
        }, 3000);
        return ()=>clearInterval(interval);
    }, [
        artists.length,
        maxIndex,
        visibleCount
    ]);
    const visibleArtists = artists.slice(current, current + visibleCount);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$FeaturedArtistsCarousel$2f$FeaturedArtistsCarousel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].carouselSection,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$FeaturedArtistsCarousel$2f$FeaturedArtistsCarousel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$FeaturedArtistsCarousel$2f$FeaturedArtistsCarousel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tagLine,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$FeaturedArtistsCarousel$2f$FeaturedArtistsCarousel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tagDash
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/FeaturedArtistsCarousel/FeaturedArtistsCarousel.tsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$FeaturedArtistsCarousel$2f$FeaturedArtistsCarousel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tag,
                                    children: "Discover Talent"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/FeaturedArtistsCarousel/FeaturedArtistsCarousel.tsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$FeaturedArtistsCarousel$2f$FeaturedArtistsCarousel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tagDash
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/FeaturedArtistsCarousel/FeaturedArtistsCarousel.tsx",
                                    lineNumber: 60,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/FeaturedArtistsCarousel/FeaturedArtistsCarousel.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$FeaturedArtistsCarousel$2f$FeaturedArtistsCarousel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                            children: [
                                "Featured ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$FeaturedArtistsCarousel$2f$FeaturedArtistsCarousel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].highlight,
                                    children: "Artists"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/FeaturedArtistsCarousel/FeaturedArtistsCarousel.tsx",
                                    lineNumber: 63,
                                    columnNumber: 22
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/FeaturedArtistsCarousel/FeaturedArtistsCarousel.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$FeaturedArtistsCarousel$2f$FeaturedArtistsCarousel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].subtitle,
                            children: "Bring your events to the next level with the best artists — book top musicians, live singers, DJs, comedians, motivational speakers, emcees and more."
                        }, void 0, false, {
                            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/FeaturedArtistsCarousel/FeaturedArtistsCarousel.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/FeaturedArtistsCarousel/FeaturedArtistsCarousel.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$FeaturedArtistsCarousel$2f$FeaturedArtistsCarousel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].carouselRow,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: prev,
                            disabled: current === 0,
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$FeaturedArtistsCarousel$2f$FeaturedArtistsCarousel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].carouselBtn} ${current === 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$FeaturedArtistsCarousel$2f$FeaturedArtistsCarousel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].carouselBtnDisabled : __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$FeaturedArtistsCarousel$2f$FeaturedArtistsCarousel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].carouselBtnPrev}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "16",
                                height: "16",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M15 18l-6-6 6-6",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/FeaturedArtistsCarousel/FeaturedArtistsCarousel.tsx",
                                    lineNumber: 80,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/FeaturedArtistsCarousel/FeaturedArtistsCarousel.tsx",
                                lineNumber: 79,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/FeaturedArtistsCarousel/FeaturedArtistsCarousel.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$FeaturedArtistsCarousel$2f$FeaturedArtistsCarousel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].carouselCards,
                            children: visibleArtists.map((artist, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ArtistCard, {
                                    artist: artist
                                }, artist.id || artist.name + i, false, {
                                    fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/FeaturedArtistsCarousel/FeaturedArtistsCarousel.tsx",
                                    lineNumber: 86,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/FeaturedArtistsCarousel/FeaturedArtistsCarousel.tsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: next,
                            disabled: current === maxIndex || artists.length <= visibleCount,
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$FeaturedArtistsCarousel$2f$FeaturedArtistsCarousel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].carouselBtn} ${current === maxIndex || artists.length <= visibleCount ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$FeaturedArtistsCarousel$2f$FeaturedArtistsCarousel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].carouselBtnDisabled : __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$FeaturedArtistsCarousel$2f$FeaturedArtistsCarousel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].carouselBtnNext}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "16",
                                height: "16",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M9 18l6-6-6-6",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/FeaturedArtistsCarousel/FeaturedArtistsCarousel.tsx",
                                    lineNumber: 96,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/FeaturedArtistsCarousel/FeaturedArtistsCarousel.tsx",
                                lineNumber: 95,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/FeaturedArtistsCarousel/FeaturedArtistsCarousel.tsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/FeaturedArtistsCarousel/FeaturedArtistsCarousel.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this),
                artists.length > visibleCount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$FeaturedArtistsCarousel$2f$FeaturedArtistsCarousel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].carouselDots,
                    children: Array.from({
                        length: maxIndex + 1
                    }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setCurrent(i),
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$FeaturedArtistsCarousel$2f$FeaturedArtistsCarousel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dot} ${i === current ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$FeaturedArtistsCarousel$2f$FeaturedArtistsCarousel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dotActive : ""}`
                        }, i, false, {
                            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/FeaturedArtistsCarousel/FeaturedArtistsCarousel.tsx",
                            lineNumber: 105,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/FeaturedArtistsCarousel/FeaturedArtistsCarousel.tsx",
                    lineNumber: 103,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/FeaturedArtistsCarousel/FeaturedArtistsCarousel.tsx",
            lineNumber: 54,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/FeaturedArtistsCarousel/FeaturedArtistsCarousel.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
function ArtistCard({ artist }) {
    let imageUrl = artist.imageUrl || artist.image || '';
    if (imageUrl.startsWith('/images/')) {
        if (artist.category === 'DJ') imageUrl = 'https://images.unsplash.com/photo-1571266028243-3716f02d2d2e?q=80&w=500&auto=format&fit=crop';
        else if (artist.category === 'Singer') imageUrl = 'https://images.unsplash.com/photo-1516280440502-12f8650f9689?q=80&w=500&auto=format&fit=crop';
        else if (artist.category === 'Band') imageUrl = 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=500&auto=format&fit=crop';
        else if (artist.category === 'Comedian') imageUrl = 'https://images.unsplash.com/photo-1527224857830-43a7acc85260?q=80&w=500&auto=format&fit=crop';
        else imageUrl = 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=500&auto=format&fit=crop';
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$FeaturedArtistsCarousel$2f$FeaturedArtistsCarousel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].artistCard,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$FeaturedArtistsCarousel$2f$FeaturedArtistsCarousel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].artistCardGlow
            }, void 0, false, {
                fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/FeaturedArtistsCarousel/FeaturedArtistsCarousel.tsx",
                lineNumber: 130,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$FeaturedArtistsCarousel$2f$FeaturedArtistsCarousel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].artistAvatar,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$FeaturedArtistsCarousel$2f$FeaturedArtistsCarousel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].artistAvatarRing,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$FeaturedArtistsCarousel$2f$FeaturedArtistsCarousel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].artistAvatarInner,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: imageUrl,
                            alt: artist.name
                        }, void 0, false, {
                            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/FeaturedArtistsCarousel/FeaturedArtistsCarousel.tsx",
                            lineNumber: 134,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/FeaturedArtistsCarousel/FeaturedArtistsCarousel.tsx",
                        lineNumber: 133,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/FeaturedArtistsCarousel/FeaturedArtistsCarousel.tsx",
                    lineNumber: 132,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/FeaturedArtistsCarousel/FeaturedArtistsCarousel.tsx",
                lineNumber: 131,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$FeaturedArtistsCarousel$2f$FeaturedArtistsCarousel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].artistCategory,
                children: artist.category
            }, void 0, false, {
                fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/FeaturedArtistsCarousel/FeaturedArtistsCarousel.tsx",
                lineNumber: 138,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$FeaturedArtistsCarousel$2f$FeaturedArtistsCarousel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].artistName,
                children: artist.name
            }, void 0, false, {
                fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/FeaturedArtistsCarousel/FeaturedArtistsCarousel.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$FeaturedArtistsCarousel$2f$FeaturedArtistsCarousel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].artistUnderline
            }, void 0, false, {
                fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/FeaturedArtistsCarousel/FeaturedArtistsCarousel.tsx",
                lineNumber: 140,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/FeaturedArtistsCarousel/FeaturedArtistsCarousel.tsx",
        lineNumber: 129,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/bookyourartist/bookyourartist/src/components/IntentSection/IntentSection.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "intentCard": "IntentSection-module__0Jrika__intentCard",
  "intentCardDesc": "IntentSection-module__0Jrika__intentCardDesc",
  "intentCardTitle": "IntentSection-module__0Jrika__intentCardTitle",
  "intentGrid": "IntentSection-module__0Jrika__intentGrid",
  "intentHeader": "IntentSection-module__0Jrika__intentHeader",
  "intentIconWrap": "IntentSection-module__0Jrika__intentIconWrap",
  "intentSection": "IntentSection-module__0Jrika__intentSection",
  "intentSubtitle": "IntentSection-module__0Jrika__intentSubtitle",
  "intentTag": "IntentSection-module__0Jrika__intentTag",
  "intentTitle": "IntentSection-module__0Jrika__intentTitle",
});
}),
"[project]/Downloads/bookyourartist/bookyourartist/src/components/IntentSection/IntentSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>IntentSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bookyourartist/bookyourartist/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bookyourartist/bookyourartist/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bookyourartist/bookyourartist/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$IntentSection$2f$IntentSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Downloads/bookyourartist/bookyourartist/src/components/IntentSection/IntentSection.module.css [app-ssr] (css module)");
;
;
;
;
const intents = [
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaHeart"], {}, void 0, false, {
            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/IntentSection/IntentSection.tsx",
            lineNumber: 7,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        title: "Artist for Wedding",
        desc: "Make your special day unforgettable with the perfect musical backdrop.",
        link: "/artists?category=Singer" // Using existing category that fits well, or they can update later
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaMusic"], {}, void 0, false, {
            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/IntentSection/IntentSection.tsx",
            lineNumber: 13,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        title: "Artist for Party",
        desc: "Bring energy and excitement to your parties with top-tier entertainers.",
        link: "/artists?category=DJ"
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaBriefcase"], {}, void 0, false, {
            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/IntentSection/IntentSection.tsx",
            lineNumber: 19,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        title: "Corporate Event",
        desc: "Elevate your corporate gatherings with professional and engaging artists.",
        link: "/artists?category=Band"
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaGraduationCap"], {}, void 0, false, {
            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/IntentSection/IntentSection.tsx",
            lineNumber: 25,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        title: "College Fest",
        desc: "Create massive hype for your college fests with crowd-pulling performers.",
        link: "/artists?category=Comedian"
    }
];
function IntentSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$IntentSection$2f$IntentSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].intentSection,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$IntentSection$2f$IntentSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].intentHeader,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$IntentSection$2f$IntentSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].intentTag,
                            children: "Find Your Match"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/IntentSection/IntentSection.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$IntentSection$2f$IntentSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].intentTitle,
                            children: "What Are You Looking For?"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/IntentSection/IntentSection.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$IntentSection$2f$IntentSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].intentSubtitle,
                            children: "Discover India's top-tier talent for your next event. Filter by category and instantly book the perfect performer."
                        }, void 0, false, {
                            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/IntentSection/IntentSection.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/IntentSection/IntentSection.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$IntentSection$2f$IntentSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].intentGrid,
                    children: intents.map((intent, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: intent.link,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$IntentSection$2f$IntentSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].intentCard,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$IntentSection$2f$IntentSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].intentIconWrap,
                                    children: intent.icon
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/IntentSection/IntentSection.tsx",
                                    lineNumber: 47,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$IntentSection$2f$IntentSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].intentCardTitle,
                                    children: intent.title
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/IntentSection/IntentSection.tsx",
                                    lineNumber: 48,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$IntentSection$2f$IntentSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].intentCardDesc,
                                    children: intent.desc
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/IntentSection/IntentSection.tsx",
                                    lineNumber: 49,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/IntentSection/IntentSection.tsx",
                            lineNumber: 46,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/IntentSection/IntentSection.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/IntentSection/IntentSection.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/IntentSection/IntentSection.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/bookyourartist/bookyourartist/src/components/TrendingSection/TrendingSection.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "artistFrame": "TrendingSection-module__9_F5xa__artistFrame",
  "bottomLeft": "TrendingSection-module__9_F5xa__bottomLeft",
  "bottomRight": "TrendingSection-module__9_F5xa__bottomRight",
  "center": "TrendingSection-module__9_F5xa__center",
  "collageGrid": "TrendingSection-module__9_F5xa__collageGrid",
  "contentWrapper": "TrendingSection-module__9_F5xa__contentWrapper",
  "fadeImg": "TrendingSection-module__9_F5xa__fadeImg",
  "highlight": "TrendingSection-module__9_F5xa__highlight",
  "imgFadeIn": "TrendingSection-module__9_F5xa__imgFadeIn",
  "neonGlow": "TrendingSection-module__9_F5xa__neonGlow",
  "photoEditing": "TrendingSection-module__9_F5xa__photoEditing",
  "subtitle": "TrendingSection-module__9_F5xa__subtitle",
  "tag": "TrendingSection-module__9_F5xa__tag",
  "tagDash": "TrendingSection-module__9_F5xa__tagDash",
  "tagLine": "TrendingSection-module__9_F5xa__tagLine",
  "textContent": "TrendingSection-module__9_F5xa__textContent",
  "title": "TrendingSection-module__9_F5xa__title",
  "topLeft": "TrendingSection-module__9_F5xa__topLeft",
  "topRight": "TrendingSection-module__9_F5xa__topRight",
  "trendingSection": "TrendingSection-module__9_F5xa__trendingSection",
  "vectorArt": "TrendingSection-module__9_F5xa__vectorArt",
});
}),
"[project]/Downloads/bookyourartist/bookyourartist/src/components/TrendingSection/TrendingSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TrendingSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bookyourartist/bookyourartist/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bookyourartist/bookyourartist/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$TrendingSection$2f$TrendingSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Downloads/bookyourartist/bookyourartist/src/components/TrendingSection/TrendingSection.module.css [app-ssr] (css module)");
'use client';
;
;
;
function TrendingSection() {
    const [artists, setArtists] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        async function fetchTrending() {
            try {
                const res = await fetch('/api/trending-artists');
                const data = await res.json();
                if (data.success) {
                    setArtists(data.data);
                }
            } catch (err) {
                console.error('Failed to fetch trending artists', err);
            }
        }
        fetchTrending();
    }, []);
    const [startIndex, setStartIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (artists.length === 0) return;
        const interval = setInterval(()=>{
            setStartIndex((prev)=>(prev + 1) % artists.length);
        }, 3000);
        return ()=>clearInterval(interval);
    }, [
        artists.length
    ]);
    const displayArtists = [];
    for(let i = 0; i < 5; i++){
        if (artists.length > 0) {
            displayArtists.push(artists[(startIndex + i) % artists.length]);
        }
    }
    if (displayArtists.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$TrendingSection$2f$TrendingSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].trendingSection,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$TrendingSection$2f$TrendingSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].contentWrapper,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$TrendingSection$2f$TrendingSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].textContent,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$TrendingSection$2f$TrendingSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$TrendingSection$2f$TrendingSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tagLine,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$TrendingSection$2f$TrendingSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tagDash
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/TrendingSection/TrendingSection.tsx",
                                            lineNumber: 56,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$TrendingSection$2f$TrendingSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tag,
                                            children: "Trending Now"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/TrendingSection/TrendingSection.tsx",
                                            lineNumber: 57,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$TrendingSection$2f$TrendingSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tagDash
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/TrendingSection/TrendingSection.tsx",
                                            lineNumber: 58,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/TrendingSection/TrendingSection.tsx",
                                    lineNumber: 55,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$TrendingSection$2f$TrendingSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                                    children: [
                                        "Trending ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$TrendingSection$2f$TrendingSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].highlight,
                                            children: "Artists"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/TrendingSection/TrendingSection.tsx",
                                            lineNumber: 61,
                                            columnNumber: 26
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/TrendingSection/TrendingSection.tsx",
                                    lineNumber: 60,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$TrendingSection$2f$TrendingSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].subtitle,
                                    children: "The most sought-after performers making waves across India's live event scene."
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/TrendingSection/TrendingSection.tsx",
                                    lineNumber: 63,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/TrendingSection/TrendingSection.tsx",
                            lineNumber: 54,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/TrendingSection/TrendingSection.tsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$TrendingSection$2f$TrendingSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].collageGrid,
                        children: [
                            displayArtists[0] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$TrendingSection$2f$TrendingSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].artistFrame} ${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$TrendingSection$2f$TrendingSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].topLeft}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: displayArtists[0].imageUrl,
                                        alt: displayArtists[0].name,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$TrendingSection$2f$TrendingSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fadeImg
                                    }, displayArtists[0].id, false, {
                                        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/TrendingSection/TrendingSection.tsx",
                                        lineNumber: 73,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$TrendingSection$2f$TrendingSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].neonGlow
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/TrendingSection/TrendingSection.tsx",
                                        lineNumber: 74,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/TrendingSection/TrendingSection.tsx",
                                lineNumber: 72,
                                columnNumber: 15
                            }, this),
                            displayArtists[1] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$TrendingSection$2f$TrendingSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].artistFrame} ${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$TrendingSection$2f$TrendingSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].topRight}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: displayArtists[1].imageUrl,
                                        alt: displayArtists[1].name,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$TrendingSection$2f$TrendingSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fadeImg
                                    }, displayArtists[1].id, false, {
                                        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/TrendingSection/TrendingSection.tsx",
                                        lineNumber: 80,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$TrendingSection$2f$TrendingSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].neonGlow
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/TrendingSection/TrendingSection.tsx",
                                        lineNumber: 81,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/TrendingSection/TrendingSection.tsx",
                                lineNumber: 79,
                                columnNumber: 15
                            }, this),
                            displayArtists[2] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$TrendingSection$2f$TrendingSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].artistFrame} ${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$TrendingSection$2f$TrendingSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].center}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: displayArtists[2].imageUrl,
                                        alt: displayArtists[2].name,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$TrendingSection$2f$TrendingSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fadeImg
                                    }, displayArtists[2].id, false, {
                                        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/TrendingSection/TrendingSection.tsx",
                                        lineNumber: 87,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$TrendingSection$2f$TrendingSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].neonGlow
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/TrendingSection/TrendingSection.tsx",
                                        lineNumber: 88,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/TrendingSection/TrendingSection.tsx",
                                lineNumber: 86,
                                columnNumber: 15
                            }, this),
                            displayArtists[3] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$TrendingSection$2f$TrendingSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].artistFrame} ${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$TrendingSection$2f$TrendingSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].bottomLeft}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: displayArtists[3].imageUrl,
                                        alt: displayArtists[3].name,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$TrendingSection$2f$TrendingSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fadeImg
                                    }, displayArtists[3].id, false, {
                                        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/TrendingSection/TrendingSection.tsx",
                                        lineNumber: 94,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$TrendingSection$2f$TrendingSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].neonGlow
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/TrendingSection/TrendingSection.tsx",
                                        lineNumber: 95,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/TrendingSection/TrendingSection.tsx",
                                lineNumber: 93,
                                columnNumber: 15
                            }, this),
                            displayArtists[4] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$TrendingSection$2f$TrendingSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].artistFrame} ${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$TrendingSection$2f$TrendingSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].bottomRight}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: displayArtists[4].imageUrl,
                                        alt: displayArtists[4].name,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$TrendingSection$2f$TrendingSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fadeImg
                                    }, displayArtists[4].id, false, {
                                        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/TrendingSection/TrendingSection.tsx",
                                        lineNumber: 101,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$TrendingSection$2f$TrendingSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].neonGlow
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/TrendingSection/TrendingSection.tsx",
                                        lineNumber: 102,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/TrendingSection/TrendingSection.tsx",
                                lineNumber: 100,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/TrendingSection/TrendingSection.tsx",
                        lineNumber: 69,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/TrendingSection/TrendingSection.tsx",
                lineNumber: 52,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/TrendingSection/TrendingSection.tsx",
            lineNumber: 51,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/TrendingSection/TrendingSection.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/bookyourartist/bookyourartist/src/components/ExclusiveArtists/ExclusiveArtists.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "ambientGlow": "ExclusiveArtists-module__9lpEjq__ambientGlow",
  "artistBio": "ExclusiveArtists-module__9lpEjq__artistBio",
  "artistCategory": "ExclusiveArtists-module__9lpEjq__artistCategory",
  "artistMeta": "ExclusiveArtists-module__9lpEjq__artistMeta",
  "artistName": "ExclusiveArtists-module__9lpEjq__artistName",
  "book": "ExclusiveArtists-module__9lpEjq__book",
  "bookBtn": "ExclusiveArtists-module__9lpEjq__bookBtn",
  "bookContainer": "ExclusiveArtists-module__9lpEjq__bookContainer",
  "dot": "ExclusiveArtists-module__9lpEjq__dot",
  "dotActive": "ExclusiveArtists-module__9lpEjq__dotActive",
  "dots": "ExclusiveArtists-module__9lpEjq__dots",
  "flipNext": "ExclusiveArtists-module__9lpEjq__flipNext",
  "flipPageNext": "ExclusiveArtists-module__9lpEjq__flipPageNext",
  "flipPagePrev": "ExclusiveArtists-module__9lpEjq__flipPagePrev",
  "flipPrev": "ExclusiveArtists-module__9lpEjq__flipPrev",
  "goldGlowPulse": "ExclusiveArtists-module__9lpEjq__goldGlowPulse",
  "goldShimmerSweep": "ExclusiveArtists-module__9lpEjq__goldShimmerSweep",
  "header": "ExclusiveArtists-module__9lpEjq__header",
  "highlight": "ExclusiveArtists-module__9lpEjq__highlight",
  "imageFrame": "ExclusiveArtists-module__9lpEjq__imageFrame",
  "imageOverlay": "ExclusiveArtists-module__9lpEjq__imageOverlay",
  "leftPage": "ExclusiveArtists-module__9lpEjq__leftPage",
  "metaItem": "ExclusiveArtists-module__9lpEjq__metaItem",
  "navBtn": "ExclusiveArtists-module__9lpEjq__navBtn",
  "page": "ExclusiveArtists-module__9lpEjq__page",
  "pageContent": "ExclusiveArtists-module__9lpEjq__pageContent",
  "pageLines": "ExclusiveArtists-module__9lpEjq__pageLines",
  "pageNumber": "ExclusiveArtists-module__9lpEjq__pageNumber",
  "pageNumberTotal": "ExclusiveArtists-module__9lpEjq__pageNumberTotal",
  "pageStack": "ExclusiveArtists-module__9lpEjq__pageStack",
  "pageStack2": "ExclusiveArtists-module__9lpEjq__pageStack2",
  "priceBadge": "ExclusiveArtists-module__9lpEjq__priceBadge",
  "priceLabel": "ExclusiveArtists-module__9lpEjq__priceLabel",
  "priceValue": "ExclusiveArtists-module__9lpEjq__priceValue",
  "rightPage": "ExclusiveArtists-module__9lpEjq__rightPage",
  "section": "ExclusiveArtists-module__9lpEjq__section",
  "spineCrease": "ExclusiveArtists-module__9lpEjq__spineCrease",
  "subtitle": "ExclusiveArtists-module__9lpEjq__subtitle",
  "tag": "ExclusiveArtists-module__9lpEjq__tag",
  "tagDash": "ExclusiveArtists-module__9lpEjq__tagDash",
  "tagLine": "ExclusiveArtists-module__9lpEjq__tagLine",
  "title": "ExclusiveArtists-module__9lpEjq__title",
});
}),
"[project]/Downloads/bookyourartist/bookyourartist/src/components/ExclusiveArtists/ExclusiveArtists.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ExclusiveArtists
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bookyourartist/bookyourartist/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bookyourartist/bookyourartist/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$ExclusiveArtists$2f$ExclusiveArtists$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Downloads/bookyourartist/bookyourartist/src/components/ExclusiveArtists/ExclusiveArtists.module.css [app-ssr] (css module)");
'use client';
;
;
;
const fallbackArtists = [];
function ExclusiveArtists() {
    const [artists, setArtists] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [current, setCurrent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [flipping, setFlipping] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [flipDirection, setFlipDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('next');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        async function fetchExclusive() {
            try {
                const res = await fetch('/api/exclusive-artists');
                const data = await res.json();
                if (data.success && data.data && data.data.length > 0) {
                    setArtists(data.data);
                } else {
                    setArtists(fallbackArtists);
                }
            } catch  {
                setArtists(fallbackArtists);
            }
        }
        fetchExclusive();
    }, []);
    const displayArtists = artists.length > 0 ? artists : fallbackArtists;
    const total = displayArtists.length;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (total <= 1) return;
        const interval = setInterval(()=>{
            setFlipDirection('next');
            setFlipping(true);
            setTimeout(()=>{
                setCurrent((c)=>(c + 1) % total);
                setFlipping(false);
            }, 500);
        }, 4000);
        return ()=>clearInterval(interval);
    }, [
        total
    ]);
    // Don't render section if there's nothing to show
    if (total === 0) return null;
    const navigate = (direction)=>{
        if (flipping) return;
        setFlipDirection(direction);
        setFlipping(true);
        setTimeout(()=>{
            setCurrent((c)=>direction === 'next' ? (c + 1) % total : (c - 1 + total) % total);
            setFlipping(false);
        }, 500);
    };
    const artist = displayArtists[current];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$ExclusiveArtists$2f$ExclusiveArtists$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].section,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$ExclusiveArtists$2f$ExclusiveArtists$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].ambientGlow
            }, void 0, false, {
                fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/ExclusiveArtists/ExclusiveArtists.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$ExclusiveArtists$2f$ExclusiveArtists$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$ExclusiveArtists$2f$ExclusiveArtists$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tagLine,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$ExclusiveArtists$2f$ExclusiveArtists$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tagDash
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/ExclusiveArtists/ExclusiveArtists.tsx",
                                        lineNumber: 84,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$ExclusiveArtists$2f$ExclusiveArtists$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tag,
                                        children: "Premium Talent"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/ExclusiveArtists/ExclusiveArtists.tsx",
                                        lineNumber: 85,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$ExclusiveArtists$2f$ExclusiveArtists$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tagDash
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/ExclusiveArtists/ExclusiveArtists.tsx",
                                        lineNumber: 86,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/ExclusiveArtists/ExclusiveArtists.tsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$ExclusiveArtists$2f$ExclusiveArtists$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                                children: [
                                    "Exclusive ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$ExclusiveArtists$2f$ExclusiveArtists$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].highlight,
                                        children: "Artists"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/ExclusiveArtists/ExclusiveArtists.tsx",
                                        lineNumber: 89,
                                        columnNumber: 23
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/ExclusiveArtists/ExclusiveArtists.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$ExclusiveArtists$2f$ExclusiveArtists$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].subtitle,
                                children: "Our most sought-after artists — handpicked for the grandest occasions."
                            }, void 0, false, {
                                fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/ExclusiveArtists/ExclusiveArtists.tsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/ExclusiveArtists/ExclusiveArtists.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$ExclusiveArtists$2f$ExclusiveArtists$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].bookContainer,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$ExclusiveArtists$2f$ExclusiveArtists$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].navBtn} ${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$ExclusiveArtists$2f$ExclusiveArtists$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].navBtnLeft}`,
                                onClick: ()=>navigate('prev'),
                                disabled: flipping,
                                "aria-label": "Previous artist",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "20",
                                    height: "20",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M15 18l-6-6 6-6",
                                        stroke: "currentColor",
                                        strokeWidth: "2.5",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/ExclusiveArtists/ExclusiveArtists.tsx",
                                        lineNumber: 106,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/ExclusiveArtists/ExclusiveArtists.tsx",
                                    lineNumber: 105,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/ExclusiveArtists/ExclusiveArtists.tsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$ExclusiveArtists$2f$ExclusiveArtists$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].book,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$ExclusiveArtists$2f$ExclusiveArtists$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pageStack
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/ExclusiveArtists/ExclusiveArtists.tsx",
                                        lineNumber: 113,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$ExclusiveArtists$2f$ExclusiveArtists$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pageStack2
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/ExclusiveArtists/ExclusiveArtists.tsx",
                                        lineNumber: 114,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$ExclusiveArtists$2f$ExclusiveArtists$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].page} ${flipping ? flipDirection === 'next' ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$ExclusiveArtists$2f$ExclusiveArtists$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].flipNext : __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$ExclusiveArtists$2f$ExclusiveArtists$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].flipPrev : ''}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$ExclusiveArtists$2f$ExclusiveArtists$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].leftPage,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$ExclusiveArtists$2f$ExclusiveArtists$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].imageFrame,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: artist.imageUrl,
                                                                alt: artist.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/ExclusiveArtists/ExclusiveArtists.tsx",
                                                                lineNumber: 123,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$ExclusiveArtists$2f$ExclusiveArtists$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].imageOverlay
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/ExclusiveArtists/ExclusiveArtists.tsx",
                                                                lineNumber: 124,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$ExclusiveArtists$2f$ExclusiveArtists$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pageNumber,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: String(current + 1).padStart(2, '0')
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/ExclusiveArtists/ExclusiveArtists.tsx",
                                                                        lineNumber: 126,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$ExclusiveArtists$2f$ExclusiveArtists$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pageNumberTotal,
                                                                        children: [
                                                                            "/ ",
                                                                            String(total).padStart(2, '0')
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/ExclusiveArtists/ExclusiveArtists.tsx",
                                                                        lineNumber: 127,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/ExclusiveArtists/ExclusiveArtists.tsx",
                                                                lineNumber: 125,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/ExclusiveArtists/ExclusiveArtists.tsx",
                                                        lineNumber: 122,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$ExclusiveArtists$2f$ExclusiveArtists$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].spineCrease
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/ExclusiveArtists/ExclusiveArtists.tsx",
                                                        lineNumber: 131,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/ExclusiveArtists/ExclusiveArtists.tsx",
                                                lineNumber: 121,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$ExclusiveArtists$2f$ExclusiveArtists$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].rightPage,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$ExclusiveArtists$2f$ExclusiveArtists$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pageContent,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$ExclusiveArtists$2f$ExclusiveArtists$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].artistCategory,
                                                            children: artist.category
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/ExclusiveArtists/ExclusiveArtists.tsx",
                                                            lineNumber: 137,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$ExclusiveArtists$2f$ExclusiveArtists$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].artistName,
                                                            children: artist.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/ExclusiveArtists/ExclusiveArtists.tsx",
                                                            lineNumber: 138,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$ExclusiveArtists$2f$ExclusiveArtists$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].artistMeta,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$ExclusiveArtists$2f$ExclusiveArtists$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].metaItem,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                            width: "14",
                                                                            height: "14",
                                                                            viewBox: "0 0 24 24",
                                                                            fill: "none",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                d: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z",
                                                                                fill: "currentColor"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/ExclusiveArtists/ExclusiveArtists.tsx",
                                                                                lineNumber: 143,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/ExclusiveArtists/ExclusiveArtists.tsx",
                                                                            lineNumber: 142,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        artist.location
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/ExclusiveArtists/ExclusiveArtists.tsx",
                                                                    lineNumber: 141,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$ExclusiveArtists$2f$ExclusiveArtists$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].metaItem,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                            width: "14",
                                                                            height: "14",
                                                                            viewBox: "0 0 24 24",
                                                                            fill: "currentColor",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/ExclusiveArtists/ExclusiveArtists.tsx",
                                                                                lineNumber: 149,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/ExclusiveArtists/ExclusiveArtists.tsx",
                                                                            lineNumber: 148,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        artist.rating,
                                                                        ".0 Rating"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/ExclusiveArtists/ExclusiveArtists.tsx",
                                                                    lineNumber: 147,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/ExclusiveArtists/ExclusiveArtists.tsx",
                                                            lineNumber: 140,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$ExclusiveArtists$2f$ExclusiveArtists$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].artistBio,
                                                            children: artist.bio
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/ExclusiveArtists/ExclusiveArtists.tsx",
                                                            lineNumber: 155,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$ExclusiveArtists$2f$ExclusiveArtists$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].priceBadge,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$ExclusiveArtists$2f$ExclusiveArtists$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].priceLabel,
                                                                    children: "Starting from"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/ExclusiveArtists/ExclusiveArtists.tsx",
                                                                    lineNumber: 158,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$ExclusiveArtists$2f$ExclusiveArtists$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].priceValue,
                                                                    children: artist.price
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/ExclusiveArtists/ExclusiveArtists.tsx",
                                                                    lineNumber: 159,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/ExclusiveArtists/ExclusiveArtists.tsx",
                                                            lineNumber: 157,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "/artists",
                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$ExclusiveArtists$2f$ExclusiveArtists$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].bookBtn}`,
                                                            children: [
                                                                "Book This Artist",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    width: "16",
                                                                    height: "16",
                                                                    viewBox: "0 0 24 24",
                                                                    fill: "none",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M5 12h14M12 5l7 7-7 7",
                                                                        stroke: "currentColor",
                                                                        strokeWidth: "2",
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/ExclusiveArtists/ExclusiveArtists.tsx",
                                                                        lineNumber: 165,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/ExclusiveArtists/ExclusiveArtists.tsx",
                                                                    lineNumber: 164,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/ExclusiveArtists/ExclusiveArtists.tsx",
                                                            lineNumber: 162,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$ExclusiveArtists$2f$ExclusiveArtists$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pageLines
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/ExclusiveArtists/ExclusiveArtists.tsx",
                                                            lineNumber: 170,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/ExclusiveArtists/ExclusiveArtists.tsx",
                                                    lineNumber: 136,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/ExclusiveArtists/ExclusiveArtists.tsx",
                                                lineNumber: 135,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/ExclusiveArtists/ExclusiveArtists.tsx",
                                        lineNumber: 117,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/ExclusiveArtists/ExclusiveArtists.tsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$ExclusiveArtists$2f$ExclusiveArtists$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].navBtn} ${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$ExclusiveArtists$2f$ExclusiveArtists$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].navBtnRight}`,
                                onClick: ()=>navigate('next'),
                                disabled: flipping,
                                "aria-label": "Next artist",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "20",
                                    height: "20",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M9 18l6-6-6-6",
                                        stroke: "currentColor",
                                        strokeWidth: "2.5",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/ExclusiveArtists/ExclusiveArtists.tsx",
                                        lineNumber: 184,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/ExclusiveArtists/ExclusiveArtists.tsx",
                                    lineNumber: 183,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/ExclusiveArtists/ExclusiveArtists.tsx",
                                lineNumber: 177,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/ExclusiveArtists/ExclusiveArtists.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$ExclusiveArtists$2f$ExclusiveArtists$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dots,
                        children: displayArtists.map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$ExclusiveArtists$2f$ExclusiveArtists$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dot} ${i === current ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$ExclusiveArtists$2f$ExclusiveArtists$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dotActive : ''}`,
                                onClick: ()=>{
                                    if (!flipping) {
                                        setFlipDirection(i > current ? 'next' : 'prev');
                                        setFlipping(true);
                                        setTimeout(()=>{
                                            setCurrent(i);
                                            setFlipping(false);
                                        }, 500);
                                    }
                                },
                                "aria-label": `Go to artist ${i + 1}`
                            }, i, false, {
                                fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/ExclusiveArtists/ExclusiveArtists.tsx",
                                lineNumber: 192,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/ExclusiveArtists/ExclusiveArtists.tsx",
                        lineNumber: 190,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/ExclusiveArtists/ExclusiveArtists.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/components/ExclusiveArtists/ExclusiveArtists.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/bookyourartist/bookyourartist/src/app/home.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "aboutContent": "home-module__cZVuWW__aboutContent",
  "aboutDesc": "home-module__cZVuWW__aboutDesc",
  "aboutExpBadge": "home-module__cZVuWW__aboutExpBadge",
  "aboutExpBadgeLabel": "home-module__cZVuWW__aboutExpBadgeLabel",
  "aboutExpBadgeNum": "home-module__cZVuWW__aboutExpBadgeNum",
  "aboutFeatureIcon": "home-module__cZVuWW__aboutFeatureIcon",
  "aboutFeatureItem": "home-module__cZVuWW__aboutFeatureItem",
  "aboutFeatures": "home-module__cZVuWW__aboutFeatures",
  "aboutGrid": "home-module__cZVuWW__aboutGrid",
  "aboutImages": "home-module__cZVuWW__aboutImages",
  "aboutImgPrimary": "home-module__cZVuWW__aboutImgPrimary",
  "aboutImgSecondary": "home-module__cZVuWW__aboutImgSecondary",
  "aboutSection": "home-module__cZVuWW__aboutSection",
  "aboutTag": "home-module__cZVuWW__aboutTag",
  "aboutTitle": "home-module__cZVuWW__aboutTitle",
  "animateDelay1": "home-module__cZVuWW__animateDelay1",
  "animateDelay2": "home-module__cZVuWW__animateDelay2",
  "animateDelay3": "home-module__cZVuWW__animateDelay3",
  "animateDelay4": "home-module__cZVuWW__animateDelay4",
  "animateDelay5": "home-module__cZVuWW__animateDelay5",
  "animateOnScroll": "home-module__cZVuWW__animateOnScroll",
  "animateScale": "home-module__cZVuWW__animateScale",
  "animateSlideLeft": "home-module__cZVuWW__animateSlideLeft",
  "animateSlideRight": "home-module__cZVuWW__animateSlideRight",
  "badgePulse": "home-module__cZVuWW__badgePulse",
  "btn": "home-module__cZVuWW__btn",
  "categoryIcon": "home-module__cZVuWW__categoryIcon",
  "categoryItem": "home-module__cZVuWW__categoryItem",
  "categoryMarquee": "home-module__cZVuWW__categoryMarquee",
  "categoryName": "home-module__cZVuWW__categoryName",
  "categoryTrack": "home-module__cZVuWW__categoryTrack",
  "hero": "home-module__cZVuWW__hero",
  "heroActions": "home-module__cZVuWW__heroActions",
  "heroBgImg": "home-module__cZVuWW__heroBgImg",
  "heroBgWrap": "home-module__cZVuWW__heroBgWrap",
  "heroContent": "home-module__cZVuWW__heroContent",
  "heroDesc": "home-module__cZVuWW__heroDesc",
  "heroFadeIn": "home-module__cZVuWW__heroFadeIn",
  "heroGrid": "home-module__cZVuWW__heroGrid",
  "heroImageFrame": "home-module__cZVuWW__heroImageFrame",
  "heroImageWrap": "home-module__cZVuWW__heroImageWrap",
  "heroTagline": "home-module__cZVuWW__heroTagline",
  "heroTitle": "home-module__cZVuWW__heroTitle",
  "heroZoom": "home-module__cZVuWW__heroZoom",
  "marqueeScroll": "home-module__cZVuWW__marqueeScroll",
  "rotateBorder": "home-module__cZVuWW__rotateBorder",
  "servicesSection": "home-module__cZVuWW__servicesSection",
  "testimonialAuthor": "home-module__cZVuWW__testimonialAuthor",
  "testimonialAvatar": "home-module__cZVuWW__testimonialAvatar",
  "testimonialCard": "home-module__cZVuWW__testimonialCard",
  "testimonialName": "home-module__cZVuWW__testimonialName",
  "testimonialQuoteMark": "home-module__cZVuWW__testimonialQuoteMark",
  "testimonialRole": "home-module__cZVuWW__testimonialRole",
  "testimonialStars": "home-module__cZVuWW__testimonialStars",
  "testimonialText": "home-module__cZVuWW__testimonialText",
  "testimonialsGrid": "home-module__cZVuWW__testimonialsGrid",
  "testimonialsSection": "home-module__cZVuWW__testimonialsSection",
  "visible": "home-module__cZVuWW__visible",
});
}),
"[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bookyourartist/bookyourartist/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bookyourartist/bookyourartist/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$NewsletterSection$2f$NewsletterSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bookyourartist/bookyourartist/src/components/NewsletterSection/NewsletterSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bookyourartist/bookyourartist/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bookyourartist/bookyourartist/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$BookingModal$2f$BookingModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bookyourartist/bookyourartist/src/components/BookingModal/BookingModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$FeaturedArtistsCarousel$2f$FeaturedArtistsCarousel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bookyourartist/bookyourartist/src/components/FeaturedArtistsCarousel/FeaturedArtistsCarousel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$IntentSection$2f$IntentSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bookyourartist/bookyourartist/src/components/IntentSection/IntentSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$TrendingSection$2f$TrendingSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bookyourartist/bookyourartist/src/components/TrendingSection/TrendingSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$ExclusiveArtists$2f$ExclusiveArtists$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bookyourartist/bookyourartist/src/components/ExclusiveArtists/ExclusiveArtists.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$app$2f$home$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Downloads/bookyourartist/bookyourartist/src/app/home.module.css [app-ssr] (css module)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
/* ── Scroll-triggered animation hook ────────────────── */ function useScrollAnimation() {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const node = ref.current;
        if (!node) return;
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if (entry.isIntersecting) {
                    entry.target.classList.add(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$app$2f$home$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].visible);
                }
            });
        }, {
            threshold: 0.12,
            rootMargin: '0px 0px -40px 0px'
        });
        // Observe the container and all children with animation classes
        const animatedElements = node.querySelectorAll(`.${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$app$2f$home$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].animateOnScroll}, .${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$app$2f$home$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].animateSlideLeft}, .${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$app$2f$home$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].animateSlideRight}, .${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$app$2f$home$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].animateScale}`);
        animatedElements.forEach((el)=>observer.observe(el));
        return ()=>observer.disconnect();
    }, []);
    return ref;
}
/* ── Services data ──────────────────────────────────── */ const services = [
    {
        num: '01',
        title: 'DJ',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaHeadphones"], {}, void 0, false, {
            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
            lineNumber: 51,
            columnNumber: 35
        }, ("TURBOPACK compile-time value", void 0)),
        desc: 'Keep the dance floor alive with professional DJs spinning the best tracks for your event.'
    },
    {
        num: '02',
        title: 'Singer',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaMicrophoneAlt"], {}, void 0, false, {
            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
            lineNumber: 52,
            columnNumber: 39
        }, ("TURBOPACK compile-time value", void 0)),
        desc: 'Soulful vocals and energetic performances across multiple genres for an unforgettable night.'
    },
    {
        num: '03',
        title: 'Dancer',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaUserFriends"], {}, void 0, false, {
            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
            lineNumber: 53,
            columnNumber: 39
        }, ("TURBOPACK compile-time value", void 0)),
        desc: 'Captivating dance routines and choreographies that mesmerize and entertain the crowd.'
    },
    {
        num: '04',
        title: 'Comedian',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaLaughBeam"], {}, void 0, false, {
            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
            lineNumber: 54,
            columnNumber: 41
        }, ("TURBOPACK compile-time value", void 0)),
        desc: 'Bring joy and laughter to your audience with top stand-up comedians and humorists.'
    },
    {
        num: '05',
        title: 'Band',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaGuitar"], {}, void 0, false, {
            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
            lineNumber: 55,
            columnNumber: 37
        }, ("TURBOPACK compile-time value", void 0)),
        desc: 'Live musical bands delivering authentic, powerful, and immersive musical experiences.'
    },
    {
        num: '06',
        title: 'Anchor',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaMicrophone"], {}, void 0, false, {
            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
            lineNumber: 56,
            columnNumber: 39
        }, ("TURBOPACK compile-time value", void 0)),
        desc: 'Engaging, charismatic hosts and emcees to keep your event flowing smoothly.'
    },
    {
        num: '07',
        title: 'Musician',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaMusic"], {}, void 0, false, {
            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
            lineNumber: 57,
            columnNumber: 41
        }, ("TURBOPACK compile-time value", void 0)),
        desc: 'Talented instrumentalists creating the perfect ambiance for intimate or grand events.'
    },
    {
        num: '08',
        title: 'Magician',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaMagic"], {}, void 0, false, {
            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
            lineNumber: 58,
            columnNumber: 41
        }, ("TURBOPACK compile-time value", void 0)),
        desc: 'Mind-bending illusions and interactive magic shows that leave guests spellbound.'
    },
    {
        num: '09',
        title: 'Stand-up',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaLaughBeam"], {}, void 0, false, {
            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
            lineNumber: 59,
            columnNumber: 41
        }, ("TURBOPACK compile-time value", void 0)),
        desc: 'Hilarious, witty, and relatable stand-up routines for a night of endless laughs.'
    }
];
function Home() {
    const [modalOpen, setModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedArtist, setSelectedArtist] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [testimonials, setTestimonials] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const servicesRef = useScrollAnimation();
    const aboutRef = useScrollAnimation();
    const testimonialsRef = useScrollAnimation();
    const gridRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        async function fetchTestimonials() {
            try {
                const res = await fetch('/api/testimonials');
                const data = await res.json();
                if (data.success) setTestimonials(data.data);
            } catch (err) {
                console.error('Failed to fetch testimonials', err);
            }
        }
        fetchTestimonials();
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (testimonials.length <= 1) return;
        const interval = setInterval(()=>{
            if (gridRef.current) {
                const grid = gridRef.current;
                const { scrollLeft, scrollWidth, clientWidth } = grid;
                if (scrollLeft + clientWidth >= scrollWidth - 20) {
                    grid.scrollTo({
                        left: 0,
                        behavior: 'smooth'
                    });
                } else {
                    grid.scrollBy({
                        left: 400,
                        behavior: 'smooth'
                    });
                }
            }
        }, 4000);
        return ()=>clearInterval(interval);
    }, [
        testimonials
    ]);
    const openBooking = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((artist)=>{
        setSelectedArtist(artist ? {
            id: artist.id,
            name: artist.name
        } : null);
        setModalOpen(true);
    }, []);
    // Duplicate services for seamless marquee
    const doubledServices = [
        ...services,
        ...services
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$app$2f$home$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].hero,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$app$2f$home$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].heroBgWrap,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=2070&auto=format&fit=crop",
                            alt: "Live Concert",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$app$2f$home$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].heroBgImg
                        }, void 0, false, {
                            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
                            lineNumber: 118,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `container ${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$app$2f$home$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].heroGrid}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$app$2f$home$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].heroContent,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$app$2f$home$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].heroTagline,
                                        children: "Trust + Ease"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
                                        lineNumber: 127,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$app$2f$home$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].heroTitle,
                                        children: [
                                            "Book Top Artists",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
                                                lineNumber: 129,
                                                columnNumber: 31
                                            }, this),
                                            "For Your Events"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
                                        lineNumber: 128,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$app$2f$home$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].heroDesc,
                                        children: "Bringing soulful performances, heartfelt vocals, and electrifying stage energy to every event — creating moments that linger long after the final note fades."
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
                                        lineNumber: 131,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$app$2f$home$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].heroActions,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/artists",
                                                className: "btn btn-primary",
                                                children: "Explore Artists"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
                                                lineNumber: 137,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                suppressHydrationWarning: true,
                                                onClick: ()=>openBooking(),
                                                className: "btn btn-secondary",
                                                children: [
                                                    "Book Now ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaArrowRight"], {}, void 0, false, {
                                                        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
                                                        lineNumber: 141,
                                                        columnNumber: 26
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
                                                lineNumber: 140,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
                                        lineNumber: 136,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
                                lineNumber: 126,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$app$2f$home$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].heroImageWrap,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$app$2f$home$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].heroImageFrame,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "https://kickstarrt.co.in/wp-content/themes/music-artist-wordpress-theme-premium/assets/images/banner/banner-main-img.png",
                                        alt: "Musician performing with guitar",
                                        loading: "eager"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
                                        lineNumber: 148,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
                                    lineNumber: 147,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
                                lineNumber: 146,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$IntentSection$2f$IntentSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
                lineNumber: 161,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$app$2f$home$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].servicesSection,
                ref: servicesRef,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "section-header",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "section-tag",
                                    children: "Categories"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
                                    lineNumber: 167,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "section-title",
                                    children: "Artist Category"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
                                    lineNumber: 168,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "section-subtitle",
                                    children: "Explore our wide range of professional talent for any occasion."
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
                                    lineNumber: 169,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
                            lineNumber: 166,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
                        lineNumber: 165,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$app$2f$home$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].categoryMarquee,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$app$2f$home$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].categoryTrack,
                            children: doubledServices.map((service, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$app$2f$home$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].categoryItem,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$app$2f$home$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].categoryIcon,
                                            children: service.icon
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
                                            lineNumber: 179,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$app$2f$home$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].categoryName,
                                            children: service.title
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
                                            lineNumber: 180,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
                                    lineNumber: 178,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
                            lineNumber: 176,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
                        lineNumber: 175,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
                lineNumber: 164,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$TrendingSection$2f$TrendingSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
                lineNumber: 188,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$ExclusiveArtists$2f$ExclusiveArtists$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
                lineNumber: 191,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$FeaturedArtistsCarousel$2f$FeaturedArtistsCarousel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
                lineNumber: 194,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$app$2f$home$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].aboutSection,
                ref: aboutRef,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$app$2f$home$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].aboutGrid,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$app$2f$home$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].aboutImages} ${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$app$2f$home$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].animateSlideLeft}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$app$2f$home$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].aboutImgPrimary,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "https://img.freepik.com/free-photo/back-view-crowd-fans-watching-live-performance-music-concert-night-copy-space_637285-544.jpg",
                                            alt: "Live performance"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
                                            lineNumber: 202,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
                                        lineNumber: 201,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$app$2f$home$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].aboutImgSecondary,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "https://static.vecteezy.com/system/resources/thumbnails/047/064/481/small/a-large-crowd-of-people-at-a-concert-illuminated-by-stage-lights-photo.jpeg",
                                            alt: "Concert crowd"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
                                            lineNumber: 208,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
                                        lineNumber: 207,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$app$2f$home$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].aboutExpBadge,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$app$2f$home$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].aboutExpBadgeNum,
                                                children: "10+"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
                                                lineNumber: 214,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$app$2f$home$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].aboutExpBadgeLabel,
                                                children: "Years Exp."
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
                                                lineNumber: 215,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
                                        lineNumber: 213,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
                                lineNumber: 200,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$app$2f$home$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].aboutContent} ${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$app$2f$home$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].animateSlideRight}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$app$2f$home$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].aboutTag,
                                        children: "Experience About Us"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
                                        lineNumber: 220,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$app$2f$home$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].aboutTitle,
                                        children: "Bringing Emotions to Life Through Music"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
                                        lineNumber: 221,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$app$2f$home$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].aboutDesc,
                                        children: "From intimate acoustic evenings to grand stage performances, we deliver powerful acts and heartfelt music that connect with every audience."
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
                                        lineNumber: 224,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$app$2f$home$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].aboutFeatures,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$app$2f$home$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].aboutFeatureItem,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaStar"], {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$app$2f$home$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].aboutFeatureIcon
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
                                                        lineNumber: 232,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                children: "Professional Artists"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
                                                                lineNumber: 234,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: "Curated talent that meets the highest standards of the industry, ensuring your event goes flawlessly."
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
                                                                lineNumber: 235,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
                                                        lineNumber: 233,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
                                                lineNumber: 231,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$app$2f$home$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].aboutFeatureItem,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaMusic"], {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$app$2f$home$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].aboutFeatureIcon
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
                                                        lineNumber: 242,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                children: "Passionate Performances"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
                                                                lineNumber: 244,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: "Every song, every beat is delivered with unmatched passion to make your moments truly memorable."
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
                                                                lineNumber: 245,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
                                                        lineNumber: 243,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
                                                lineNumber: 241,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
                                        lineNumber: 230,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/about",
                                        className: "btn btn-secondary",
                                        children: "Discover More"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
                                        lineNumber: 253,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
                                lineNumber: 219,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
                        lineNumber: 199,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
                    lineNumber: 198,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
                lineNumber: 197,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$app$2f$home$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].testimonialsSection,
                ref: testimonialsRef,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `section-header ${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$app$2f$home$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].animateOnScroll}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "section-tag",
                                    children: "Testimonial"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
                                    lineNumber: 265,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "section-title",
                                    children: "What Clients Say About ArtistVibes"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
                                    lineNumber: 266,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "section-subtitle",
                                    children: "Real feedback from our talented artists and collaborators."
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
                                    lineNumber: 267,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
                            lineNumber: 264,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$app$2f$home$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].testimonialsGrid,
                            ref: gridRef,
                            children: testimonials.length > 0 ? testimonials.map((t, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$app$2f$home$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].testimonialCard,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$app$2f$home$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].testimonialQuoteMark,
                                            children: "“"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
                                            lineNumber: 278,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$app$2f$home$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].testimonialStars,
                                            children: [
                                                ...Array(t.rating || 5)
                                            ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaStar"], {}, i, false, {
                                                    fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
                                                    lineNumber: 281,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
                                            lineNumber: 279,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$app$2f$home$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].testimonialText,
                                            children: t.content
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
                                            lineNumber: 284,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$app$2f$home$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].testimonialAuthor,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$app$2f$home$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].testimonialAvatar,
                                                    children: t.imageUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: t.imageUrl,
                                                        alt: t.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
                                                        lineNumber: 287,
                                                        columnNumber: 35
                                                    }, this) : t.name.charAt(0)
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
                                                    lineNumber: 286,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$app$2f$home$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].testimonialName,
                                                            children: t.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
                                                            lineNumber: 290,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$app$2f$home$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].testimonialRole,
                                                            children: t.role
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
                                                            lineNumber: 291,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
                                                    lineNumber: 289,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
                                            lineNumber: 285,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, t.id, true, {
                                    fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
                                    lineNumber: 274,
                                    columnNumber: 15
                                }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-400",
                                children: "Loading testimonials..."
                            }, void 0, false, {
                                fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
                                lineNumber: 296,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
                            lineNumber: 272,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
                    lineNumber: 263,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
                lineNumber: 262,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$NewsletterSection$2f$NewsletterSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
                lineNumber: 302,
                columnNumber: 7
            }, this),
            modalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$components$2f$BookingModal$2f$BookingModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                onClose: ()=>setModalOpen(false),
                artistName: selectedArtist?.name,
                artistId: selectedArtist?.id
            }, void 0, false, {
                fileName: "[project]/Downloads/bookyourartist/bookyourartist/src/app/page.tsx",
                lineNumber: 306,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=Downloads_bookyourartist_bookyourartist_src_0tz4zi2._.js.map