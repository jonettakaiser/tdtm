(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NightProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/NightProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Ticker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Ticker.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Hero() {
    _s();
    const night = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NightProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNight"])();
    const guestName = night.headliner?.name ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NightProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultHeadliner"].name;
    const guestPicked = night.headliner !== null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative isolate min-h-[calc(100svh-68px)] overflow-hidden bg-ink text-paper",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 -z-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "/Podcast-ProofConcept1.png",
                    alt: "",
                    fill: true,
                    priority: true,
                    sizes: "100vw",
                    className: "object-cover object-center opacity-45 grayscale-[20%] contrast-125"
                }, void 0, false, {
                    fileName: "[project]/src/components/Hero.tsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Hero.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(11,29,51,.96)_0%,rgba(11,29,51,.75)_48%,rgba(11,29,51,.2)_100%)]"
            }, void 0, false, {
                fileName: "[project]/src/components/Hero.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 -z-10 bg-[linear-gradient(0deg,rgba(11,29,51,.9)_0%,transparent_55%)]"
            }, void 0, false, {
                fileName: "[project]/src/components/Hero.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto grid min-h-[calc(100svh-68px)] max-w-[1280px] items-end gap-8 px-7 pt-20 pb-10 md:grid-cols-[1.25fr_.75fr] md:items-center md:gap-10 md:px-10 md:pb-14",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mb-5 block font-mono text-[0.68rem] font-bold uppercase tracking-[0.18em] text-gold",
                                children: "A Partnership Proposal · Melrose, Los Angeles"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Hero.tsx",
                                lineNumber: 29,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "max-w-[11ch] font-display text-[clamp(3.6rem,9vw,8rem)] leading-[0.84] uppercase text-paper",
                                children: [
                                    "Talk Dodgers",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block",
                                        children: "To Me"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Hero.tsx",
                                        lineNumber: 34,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block text-gold",
                                        children: "LIVE"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Hero.tsx",
                                        lineNumber: 35,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block",
                                        children: "at Pawn Shop"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Hero.tsx",
                                        lineNumber: 36,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Hero.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-8 flex max-w-[720px] flex-col items-start gap-8 md:flex-row md:items-end md:gap-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-base leading-relaxed text-paper/75 md:text-lg",
                                        children: "Two nights a month, Talk Dodgers To Me tapes live in the room — special-guest podcast nights and ticketed Dodgers watch parties that turn Pawn Shop’s quietest nights into its fullest."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Hero.tsx",
                                        lineNumber: 39,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#live-nights",
                                        className: "group relative top-10 hidden shrink-0 items-center gap-3 rounded-full bg-paper px-5 py-3 font-mono text-xs font-bold uppercase tracking-wide text-ink transition duration-300 hover:-rotate-2 hover:scale-105 hover:bg-gold md:inline-flex",
                                        children: [
                                            "Build the night ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "transition-transform group-hover:translate-y-1",
                                                children: "↓"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Hero.tsx",
                                                lineNumber: 48,
                                                columnNumber: 31
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Hero.tsx",
                                        lineNumber: 44,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Hero.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Hero.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "ticket-cut rotate-1 overflow-hidden rounded-xl border border-paper/25 bg-paper text-ink shadow-[0_30px_90px_rgba(0,0,0,.35)] transition-transform duration-500 hover:rotate-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between bg-dodger px-5 py-3 font-mono text-[0.62rem] font-bold uppercase tracking-[0.16em] text-paper",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Your residency ticket"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Hero.tsx",
                                        lineNumber: 55,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: guestPicked ? "Locked in" : "Suggested"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Hero.tsx",
                                        lineNumber: 56,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Hero.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-b border-dashed border-ink/25 pb-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-mono text-[0.6rem] uppercase tracking-[0.14em] text-ink-faint",
                                                children: "Tonight’s headliner"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Hero.tsx",
                                                lineNumber: 60,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-1 font-display text-4xl leading-none uppercase text-dodger",
                                                children: guestName
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Hero.tsx",
                                                lineNumber: 63,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Hero.tsx",
                                        lineNumber: 59,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-4 py-5 font-mono",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "block text-[0.58rem] uppercase text-ink-faint",
                                                        children: "Live floor / mo"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Hero.tsx",
                                                        lineNumber: 69,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        className: "number-pop text-lg tabular-nums",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NightProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["money"])(night.liveNightRevenue)
                                                    }, night.liveNightRevenue, false, {
                                                        fileName: "[project]/src/components/Hero.tsx",
                                                        lineNumber: 70,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Hero.tsx",
                                                lineNumber: 68,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "block text-[0.58rem] uppercase text-ink-faint",
                                                        children: "Watch tickets / mo"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Hero.tsx",
                                                        lineNumber: 75,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        className: "number-pop text-lg tabular-nums",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NightProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["money"])(night.watchPartyRevenue)
                                                    }, night.watchPartyRevenue, false, {
                                                        fileName: "[project]/src/components/Hero.tsx",
                                                        lineNumber: 76,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Hero.tsx",
                                                lineNumber: 74,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Hero.tsx",
                                        lineNumber: 67,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-end justify-between border-t-2 border-ink pt-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-mono text-[0.62rem] font-bold uppercase tracking-wide",
                                                children: "Combined event revenue"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Hero.tsx",
                                                lineNumber: 82,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                className: "number-pop font-display text-4xl leading-none text-gold",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NightProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["money"])(night.monthlyTotal)
                                            }, night.monthlyTotal, false, {
                                                fileName: "[project]/src/components/Hero.tsx",
                                                lineNumber: 85,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Hero.tsx",
                                        lineNumber: 81,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Hero.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Hero.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#live-nights",
                        className: "group mx-auto mt-4 mb-6 inline-flex items-center gap-3 rounded-full bg-paper px-5 py-3 font-mono text-xs font-bold uppercase tracking-wide text-ink transition duration-300 hover:-rotate-2 hover:scale-105 hover:bg-gold md:hidden",
                        children: [
                            "Build the night ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "transition-transform group-hover:translate-y-1",
                                children: "↓"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Hero.tsx",
                                lineNumber: 98,
                                columnNumber: 27
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Hero.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Hero.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Ticker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                items: [
                    "Live podcast",
                    "Watch party",
                    "Collab menu"
                ]
            }, void 0, false, {
                fileName: "[project]/src/components/Hero.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Hero.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_s(Hero, "olymbD4N7pj9ewX02qbkMcYfiCQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NightProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNight"]
    ];
});
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Lineup.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Lineup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Reveal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NightProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/NightProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$guests$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/guests.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const tagClass = {
    "Pawn Shop Tie-In": "border-gold bg-gold text-[#241a02]",
    "TDTM Alum": "border-dodger-soft text-dodger",
    "Target Guest": "border-ink/25 text-ink-faint"
};
function Lineup() {
    _s();
    const night = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NightProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNight"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "lineup",
        className: "section-shell overflow-hidden bg-ink text-paper",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "section-inner",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "mb-14 md:grid md:grid-cols-[1fr_.7fr] md:items-center md:gap-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "eyebrow",
                                    style: {
                                        color: "#eef6ff"
                                    },
                                    children: "05 — The Guest List"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Lineup.tsx",
                                    lineNumber: 21,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "section-title text-paper",
                                    children: "First Pitch Lineup"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Lineup.tsx",
                                    lineNumber: 24,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Lineup.tsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "section-lede text-paper/65",
                            children: "Eight names TDTM can realistically bring through the door for live nights — a mix of confirmed podcast alumni, personal relationships, and target bookings. Tap a card, then put your headliner on the ticket."
                        }, void 0, false, {
                            fileName: "[project]/src/components/Lineup.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Lineup.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    from: "scale",
                    className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$guests$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["guests"].map((g)=>{
                        const isHeadliner = night.headliner?.no === g.no;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                            className: `group grid min-h-44 grid-cols-[1fr_82px] overflow-hidden rounded-[1.2rem] border transition duration-300 ${isHeadliner ? "rotate-[-1deg] border-gold bg-gold text-ink shadow-[6px_6px_0_var(--color-paper)]" : "border-paper/15 bg-paper/7 text-paper hover:-translate-y-1 hover:border-paper/40 hover:bg-paper/10"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                    className: "cursor-pointer list-none p-5 md:p-6 [&::-webkit-details-marker]:hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 font-display text-3xl leading-none uppercase",
                                            children: [
                                                g.name,
                                                isHeadliner && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "rounded-full bg-ink px-2 py-1 font-mono text-[0.5rem] tracking-wide text-paper md:text-[0.65rem]",
                                                    children: "Headlining"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Lineup.tsx",
                                                    lineNumber: 49,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Lineup.tsx",
                                            lineNumber: 46,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `mt-4 hidden max-w-none text-sm leading-relaxed group-open:block md:text-base ${isHeadliner ? "text-ink/75" : "text-paper/70"}`,
                                            children: g.who
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Lineup.tsx",
                                            lineNumber: 54,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `mt-3 inline-block rounded-full border px-2.5 py-1 font-mono text-[0.58rem] uppercase tracking-wide md:text-xs ${isHeadliner ? "border-ink/30 text-ink" : tagClass[g.tag]}`,
                                            children: g.tag
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Lineup.tsx",
                                            lineNumber: 57,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-3 flex flex-wrap items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `font-mono text-[0.58rem] uppercase tracking-wide md:text-xs ${isHeadliner ? "text-ink/65" : "text-paper/60"}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "group-open:hidden",
                                                            children: "Tap for details ↓"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Lineup.tsx",
                                                            lineNumber: 64,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "hidden group-open:inline",
                                                            children: "Tap to collapse ↑"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Lineup.tsx",
                                                            lineNumber: 65,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Lineup.tsx",
                                                    lineNumber: 63,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: (e)=>{
                                                        e.preventDefault();
                                                        night.setHeadliner(isHeadliner ? null : g);
                                                    },
                                                    className: `rounded-full border px-3 py-1.5 font-mono text-[0.58rem] font-bold uppercase tracking-wide transition-colors md:text-xs ${isHeadliner ? "border-ink bg-ink text-paper hover:bg-paper hover:text-ink" : "border-paper/40 text-paper hover:border-gold hover:bg-gold hover:text-ink"}`,
                                                    children: isHeadliner ? "Remove headliner" : "Make headliner"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Lineup.tsx",
                                                    lineNumber: 67,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Lineup.tsx",
                                            lineNumber: 62,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Lineup.tsx",
                                    lineNumber: 45,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `stub-edge flex h-full self-stretch items-center justify-center border-l border-dashed ${isHeadliner ? "border-ink/25 bg-paper/25" : "border-paper/15 bg-paper/5"}`,
                                    "aria-hidden": true,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `rotate-180 font-display text-3xl tracking-wide [writing-mode:vertical-rl] ${isHeadliner ? "text-ink" : "text-paper/35"}`,
                                        children: [
                                            "NO. ",
                                            g.no
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Lineup.tsx",
                                        lineNumber: 87,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Lineup.tsx",
                                    lineNumber: 83,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, g.no, true, {
                            fileName: "[project]/src/components/Lineup.tsx",
                            lineNumber: 37,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/components/Lineup.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Lineup.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Lineup.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_s(Lineup, "olymbD4N7pj9ewX02qbkMcYfiCQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NightProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNight"]
    ];
});
_c = Lineup;
var _c;
__turbopack_context__.k.register(_c, "Lineup");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/LiveNightCalculator.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LiveNightCalculator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NightProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/NightProvider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function LiveNightCalculator() {
    _s();
    const night = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NightProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNight"])();
    const floorPerNight = night.audience * night.lift;
    const likelyLow = Math.round(floorPerNight * 4 / 3 / 100) * 100;
    const likelyHigh = Math.round(floorPerNight * 12 / 7 / 100) * 100;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "ticket-cut overflow-hidden rounded-[1.3rem] bg-ink p-6 pb-7 text-paper shadow-[0_24px_70px_rgba(11,29,51,.24)] md:p-7",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6 flex items-center justify-between border-b border-dashed border-paper/20 pb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "font-mono text-xs uppercase tracking-wide text-[#eef6ff]",
                        children: "Illustrative Revenue — Live Night"
                    }, void 0, false, {
                        fileName: "[project]/src/components/LiveNightCalculator.tsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-mono text-[0.58rem] uppercase tracking-widest text-paper/40",
                        children: "Est. 2026"
                    }, void 0, false, {
                        fileName: "[project]/src/components/LiveNightCalculator.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/LiveNightCalculator.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "mb-2 flex justify-between text-sm text-paper/70",
                                children: [
                                    "Guests per night",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        className: "font-mono tabular-nums text-paper",
                                        children: night.audience
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/LiveNightCalculator.tsx",
                                        lineNumber: 24,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/LiveNightCalculator.tsx",
                                lineNumber: 22,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "range",
                                min: 20,
                                max: 120,
                                step: 5,
                                value: night.audience,
                                onChange: (event)=>night.setAudience(Number(event.target.value)),
                                className: "range-control w-full cursor-pointer"
                            }, void 0, false, {
                                fileName: "[project]/src/components/LiveNightCalculator.tsx",
                                lineNumber: 26,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/LiveNightCalculator.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "mb-2 flex justify-between text-sm text-paper/70",
                                children: [
                                    "Minimum spend per guest",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        className: "font-mono tabular-nums text-paper",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NightProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["money"])(night.baseCheck)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/LiveNightCalculator.tsx",
                                        lineNumber: 40,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/LiveNightCalculator.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "range",
                                min: 20,
                                max: 100,
                                step: 5,
                                value: night.baseCheck,
                                onChange: (event)=>night.setBaseCheck(Number(event.target.value)),
                                className: "range-control w-full cursor-pointer"
                            }, void 0, false, {
                                fileName: "[project]/src/components/LiveNightCalculator.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/LiveNightCalculator.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "mb-2 flex justify-between text-sm text-paper/70",
                                children: [
                                    "Nights per month",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        className: "font-mono tabular-nums text-paper",
                                        children: night.nights
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/LiveNightCalculator.tsx",
                                        lineNumber: 56,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/LiveNightCalculator.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "range",
                                min: 1,
                                max: 4,
                                step: 1,
                                value: night.nights,
                                onChange: (event)=>night.setNights(Number(event.target.value)),
                                className: "range-control w-full cursor-pointer"
                            }, void 0, false, {
                                fileName: "[project]/src/components/LiveNightCalculator.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/LiveNightCalculator.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                        className: "space-y-4 border-t border-paper/10 pt-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start justify-between gap-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                        className: "text-sm text-paper/70",
                                        children: "Effective spend per guest"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/LiveNightCalculator.tsx",
                                        lineNumber: 71,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                        className: "number-pop font-mono text-sm font-bold text-paper",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NightProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["money"])(night.lift)
                                    }, night.lift, false, {
                                        fileName: "[project]/src/components/LiveNightCalculator.tsx",
                                        lineNumber: 72,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/LiveNightCalculator.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start justify-between gap-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                        className: "text-sm text-paper/70",
                                        children: "Floor revenue per night"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/LiveNightCalculator.tsx",
                                        lineNumber: 77,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                        className: "number-pop font-mono text-sm font-bold text-paper",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NightProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["money"])(floorPerNight)
                                    }, floorPerNight, false, {
                                        fileName: "[project]/src/components/LiveNightCalculator.tsx",
                                        lineNumber: 78,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/LiveNightCalculator.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start justify-between gap-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                        className: "text-sm text-paper/70",
                                        children: "Likely actual (guests always go over)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/LiveNightCalculator.tsx",
                                        lineNumber: 86,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                        className: "text-right font-mono text-sm font-bold tabular-nums text-paper",
                                        children: [
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NightProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["money"])(likelyLow),
                                            " to ",
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NightProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["money"])(likelyHigh)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/LiveNightCalculator.tsx",
                                        lineNumber: 87,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/LiveNightCalculator.tsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/LiveNightCalculator.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/LiveNightCalculator.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 border-t border-dashed border-paper/20 pt-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "font-mono text-[0.64rem] uppercase tracking-wide text-paper/45",
                        children: "Pawn Shop guaranteed floor"
                    }, void 0, false, {
                        fileName: "[project]/src/components/LiveNightCalculator.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "number-pop font-display text-5xl leading-none tabular-nums text-[#eef6ff]",
                        children: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NightProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["money"])(floorPerNight),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ml-2 text-2xl",
                                children: "per night"
                            }, void 0, false, {
                                fileName: "[project]/src/components/LiveNightCalculator.tsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this)
                        ]
                    }, floorPerNight, true, {
                        fileName: "[project]/src/components/LiveNightCalculator.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-3 max-w-none text-sm text-paper/65",
                        children: "One night a month keeps it scarce. Scarce means it sells out."
                    }, void 0, false, {
                        fileName: "[project]/src/components/LiveNightCalculator.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/LiveNightCalculator.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 font-mono text-[0.65rem] leading-relaxed text-paper/40",
                children: "Illustrative model based on 75-seat capacity and $35 minimum spend. Plug in Pawn Shop’s real numbers and this recalculates instantly."
            }, void 0, false, {
                fileName: "[project]/src/components/LiveNightCalculator.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/LiveNightCalculator.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_s(LiveNightCalculator, "olymbD4N7pj9ewX02qbkMcYfiCQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NightProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNight"]
    ];
});
_c = LiveNightCalculator;
var _c;
__turbopack_context__.k.register(_c, "LiveNightCalculator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/LiveNightMenu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LiveNightMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$menu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/menu.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NightProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/NightProvider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function LiveNightMenu() {
    _s();
    const night = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NightProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNight"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-end justify-between gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "max-w-[16ch] text-3xl leading-none uppercase text-ink",
                        children: "Build the collab menu"
                    }, void 0, false, {
                        fileName: "[project]/src/components/LiveNightMenu.tsx",
                        lineNumber: 12,
                        columnNumber: 9
                    }, this),
                    night.orderCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: night.resetOrder,
                        className: "shrink-0 rounded-full border border-ink/20 px-3 py-1.5 font-mono text-[0.6rem] font-bold uppercase tracking-wide text-ink-faint transition hover:border-dodger hover:text-dodger",
                        children: "Reset order"
                    }, void 0, false, {
                        fileName: "[project]/src/components/LiveNightMenu.tsx",
                        lineNumber: 16,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/LiveNightMenu.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "mt-5 space-y-2",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$menu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["liveNightMenu"].map((item)=>{
                    const qty = night.order[item.id] ?? 0;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: `flex items-center justify-between gap-3.5 rounded-xl border px-4 py-3.5 transition-all ${qty > 0 ? "border-dodger bg-dodger-soft/55 shadow-[3px_3px_0_var(--color-dodger)]" : "border-ink/10 bg-paper hover:border-ink/25"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-display text-xl uppercase leading-none text-ink",
                                        children: item.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/LiveNightMenu.tsx",
                                        lineNumber: 39,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mt-0.5 block font-mono text-[0.64rem] uppercase tracking-wide text-dodger",
                                        children: item.original ? `Original: ${item.original}` : item.tag
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/LiveNightMenu.tsx",
                                        lineNumber: 40,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 max-w-none text-sm text-ink-dim",
                                        children: item.description
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/LiveNightMenu.tsx",
                                        lineNumber: 43,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/LiveNightMenu.tsx",
                                lineNumber: 38,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex shrink-0 flex-col items-end gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "whitespace-nowrap font-mono tabular-nums text-gold-dim",
                                        children: item.price
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/LiveNightMenu.tsx",
                                        lineNumber: 46,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center overflow-hidden rounded-full border border-ink/25 bg-paper font-mono text-sm shadow-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                "aria-label": `Remove one ${item.name}`,
                                                onClick: ()=>night.removeItem(item.id),
                                                disabled: qty === 0,
                                                className: "size-8 text-ink-dim transition-colors hover:bg-raised-2 disabled:opacity-30",
                                                children: "−"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/LiveNightMenu.tsx",
                                                lineNumber: 50,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "number-pop w-7 text-center tabular-nums text-ink",
                                                children: qty
                                            }, qty, false, {
                                                fileName: "[project]/src/components/LiveNightMenu.tsx",
                                                lineNumber: 59,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                "aria-label": `Add one ${item.name}`,
                                                onClick: ()=>night.addItem(item.id),
                                                className: "size-8 text-ink-dim transition-colors hover:bg-dodger hover:text-paper",
                                                children: "+"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/LiveNightMenu.tsx",
                                                lineNumber: 62,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/LiveNightMenu.tsx",
                                        lineNumber: 49,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/LiveNightMenu.tsx",
                                lineNumber: 45,
                                columnNumber: 15
                            }, this)
                        ]
                    }, item.id, true, {
                        fileName: "[project]/src/components/LiveNightMenu.tsx",
                        lineNumber: 30,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/LiveNightMenu.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ticket-cut mt-5 flex items-center justify-between overflow-hidden rounded-xl bg-ink px-5 py-4 text-paper",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block font-mono text-xs uppercase tracking-wide text-paper/45",
                                children: "Selected menu spend per guest"
                            }, void 0, false, {
                                fileName: "[project]/src/components/LiveNightMenu.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mt-1 block text-xs text-paper/55",
                                children: "Added to the event minimum selected on the right."
                            }, void 0, false, {
                                fileName: "[project]/src/components/LiveNightMenu.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/LiveNightMenu.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "number-pop font-display text-3xl tabular-nums text-[#eef6ff]",
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NightProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["money"])(night.orderTotal)
                    }, night.orderTotal, false, {
                        fileName: "[project]/src/components/LiveNightMenu.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/LiveNightMenu.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2.5 font-mono text-sm text-ink-faint",
                children: "Names, items and prices are starting points for a joint tasting with the kitchen — not final."
            }, void 0, false, {
                fileName: "[project]/src/components/LiveNightMenu.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/LiveNightMenu.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_s(LiveNightMenu, "olymbD4N7pj9ewX02qbkMcYfiCQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NightProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNight"]
    ];
});
_c = LiveNightMenu;
var _c;
__turbopack_context__.k.register(_c, "LiveNightMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Nav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Nav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const LINKS = [
    {
        href: "#proof",
        label: "Proof of Concept"
    },
    {
        href: "#pitch",
        label: "The Pitch"
    },
    {
        href: "#live-nights",
        label: "Live Nights"
    },
    {
        href: "#watch-parties",
        label: "Watch Parties"
    },
    {
        href: "#lineup",
        label: "Lineup"
    },
    {
        href: "#why",
        label: "Why Pawn Shop"
    },
    {
        href: "#ask",
        label: "The Ask"
    }
];
function Nav() {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Nav.useEffect": ()=>{
            const sections = LINKS.map({
                "Nav.useEffect.sections": (l)=>document.getElementById(l.href.slice(1))
            }["Nav.useEffect.sections"]).filter({
                "Nav.useEffect.sections": (el)=>el !== null
            }["Nav.useEffect.sections"]);
            const observer = new IntersectionObserver({
                "Nav.useEffect": (entries)=>{
                    entries.forEach({
                        "Nav.useEffect": (entry)=>{
                            if (entry.isIntersecting) setActive(entry.target.id);
                        }
                    }["Nav.useEffect"]);
                }
            }["Nav.useEffect"], {
                rootMargin: "-45% 0px -50% 0px"
            });
            sections.forEach({
                "Nav.useEffect": (s)=>observer.observe(s)
            }["Nav.useEffect"]);
            return ({
                "Nav.useEffect": ()=>observer.disconnect()
            })["Nav.useEffect"];
        }
    }["Nav.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-50 border-b border-ink/10 bg-paper/92 backdrop-blur-xl",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto flex min-h-15 max-w-[1280px] items-center justify-between gap-4 px-5 md:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "grid size-9 rotate-[-6deg] place-items-center rounded-full border-2 border-dodger font-display text-lg text-dodger",
                            children: "PS"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Nav.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "font-display text-base leading-none uppercase text-ink",
                            children: [
                                "Pawn Shop ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gold-dim",
                                    children: "×"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Nav.tsx",
                                    lineNumber: 43,
                                    columnNumber: 23
                                }, this),
                                " TDTM"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Nav.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Nav.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "rounded-full border border-ink/25 px-4 py-2 font-mono text-[0.68rem] font-bold uppercase tracking-wide text-ink md:hidden",
                    "aria-expanded": open,
                    "aria-controls": "nav-links",
                    onClick: ()=>setOpen((o)=>!o),
                    children: open ? "Close" : "Menu"
                }, void 0, false, {
                    fileName: "[project]/src/components/Nav.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    id: "nav-links",
                    className: `font-mono text-[0.66rem] font-bold uppercase tracking-[0.09em] md:flex md:items-center md:gap-5 ${open ? "absolute inset-x-0 top-full flex flex-col gap-4 border-b border-ink/10 bg-paper px-6 py-6 shadow-2xl" : "hidden"}`,
                    children: LINKS.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: l.href,
                            onClick: ()=>setOpen(false),
                            className: `relative py-1 transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:bg-dodger after:transition-transform ${active === l.href.slice(1) ? "text-dodger after:scale-x-100" : "text-ink-dim after:scale-x-0 hover:text-dodger hover:after:scale-x-100"}`,
                            children: l.label
                        }, l.href, false, {
                            fileName: "[project]/src/components/Nav.tsx",
                            lineNumber: 65,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/Nav.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Nav.tsx",
            lineNumber: 37,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Nav.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_s(Nav, "Y6Y+/QF2tz/8aaR1XuqxyqYH248=");
_c = Nav;
var _c;
__turbopack_context__.k.register(_c, "Nav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/NightProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LIFT_RANGE",
    ()=>LIFT_RANGE,
    "NightProvider",
    ()=>NightProvider,
    "PRICE_RANGE",
    ()=>PRICE_RANGE,
    "defaultHeadliner",
    ()=>defaultHeadliner,
    "money",
    ()=>money,
    "useNight",
    ()=>useNight
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$guests$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/guests.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$menu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/menu.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
/**
 * One shared "night" the reader builds as they scroll: a headliner from the
 * lineup, a collab order from the menu, and the room settings for a watch
 * party. Every section reads from and writes to this, so the numbers in the
 * hero scoreboard and the ticket stub in The Ask are the reader's own.
 */ const clamp = (n, min, max)=>Math.min(max, Math.max(min, n));
const roundTo5 = (n)=>Math.round(n / 5) * 5;
const LIFT_RANGE = {
    min: 0,
    max: 500
};
const PRICE_RANGE = {
    min: 25,
    max: 85
};
/** Start at the guaranteed minimum; menu selections add spend above it. */ const DEFAULT_ORDER = {};
const DEFAULT_INCLUDES = [
    "room",
    "catering",
    "bartender"
];
const NightContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function NightProvider({ children }) {
    _s();
    const [headliner, setHeadliner] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [order, setOrder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(DEFAULT_ORDER);
    const [baseCheck, setBaseCheck] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(35);
    const [includes, setIncludes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(DEFAULT_INCLUDES);
    const [audience, setAudience] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(75);
    const [nights, setNights] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [split, setSplit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(15);
    const [liftOverride, setLiftOverride] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [capacity, setCapacity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(20);
    const [events, setEvents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [priceOverride, setPriceOverride] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(65);
    const [date, setDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const addItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "NightProvider.useCallback[addItem]": (id)=>{
            setOrder({
                "NightProvider.useCallback[addItem]": (current)=>({
                        ...current,
                        [id]: Math.min(9, (current[id] ?? 0) + 1)
                    })
            }["NightProvider.useCallback[addItem]"]);
        }
    }["NightProvider.useCallback[addItem]"], []);
    const removeItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "NightProvider.useCallback[removeItem]": (id)=>{
            setOrder({
                "NightProvider.useCallback[removeItem]": (current)=>{
                    const next = {
                        ...current
                    };
                    const qty = (next[id] ?? 0) - 1;
                    if (qty > 0) next[id] = qty;
                    else delete next[id];
                    return next;
                }
            }["NightProvider.useCallback[removeItem]"]);
        }
    }["NightProvider.useCallback[removeItem]"], []);
    const resetOrder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "NightProvider.useCallback[resetOrder]": ()=>setOrder(DEFAULT_ORDER)
    }["NightProvider.useCallback[resetOrder]"], []);
    const toggleInclude = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "NightProvider.useCallback[toggleInclude]": (id)=>{
            setIncludes({
                "NightProvider.useCallback[toggleInclude]": (current)=>current.includes(id) ? current.filter({
                        "NightProvider.useCallback[toggleInclude]": (i)=>i !== id
                    }["NightProvider.useCallback[toggleInclude]"]) : [
                        ...current,
                        id
                    ]
            }["NightProvider.useCallback[toggleInclude]"]);
        }
    }["NightProvider.useCallback[toggleInclude]"], []);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "NightProvider.useMemo[value]": ()=>{
            const orderTotal = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$menu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["liveNightMenu"].reduce({
                "NightProvider.useMemo[value].orderTotal": (sum, item)=>sum + (order[item.id] ?? 0) * item.amount
            }["NightProvider.useMemo[value].orderTotal"], 0);
            const orderCount = Object.values(order).reduce({
                "NightProvider.useMemo[value].orderCount": (sum, qty)=>sum + qty
            }["NightProvider.useMemo[value].orderCount"], 0);
            // Menu selections add per-guest spend above the guaranteed event minimum.
            const liftFromMenu = clamp(Math.round(baseCheck + orderTotal), LIFT_RANGE.min, LIFT_RANGE.max);
            const lift = liftOverride ?? liftFromMenu;
            // What the room owes per head, given what's bundled into the ticket.
            const base = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$menu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["watchPartyIncludes"].filter({
                "NightProvider.useMemo[value].base": (item)=>!item.premium && includes.includes(item.id)
            }["NightProvider.useMemo[value].base"]).reduce({
                "NightProvider.useMemo[value].base": (sum, item)=>sum + item.value
            }["NightProvider.useMemo[value].base"], 0);
            const multiplier = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$menu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["watchPartyIncludes"].filter({
                "NightProvider.useMemo[value].multiplier": (item)=>item.premium && includes.includes(item.id)
            }["NightProvider.useMemo[value].multiplier"]).reduce({
                "NightProvider.useMemo[value].multiplier": (product, item)=>product * item.value
            }["NightProvider.useMemo[value].multiplier"], 1);
            const priceFromIncludes = clamp(roundTo5(base * multiplier), PRICE_RANGE.min, PRICE_RANGE.max);
            const price = priceOverride ?? priceFromIncludes;
            const liveNightRevenue = audience * lift * nights;
            const watchPartyRevenue = price * capacity * events;
            const tdtmShare = liveNightRevenue * (split / 100);
            return {
                headliner,
                setHeadliner,
                order,
                addItem,
                removeItem,
                resetOrder,
                orderTotal,
                orderCount,
                baseCheck,
                setBaseCheck: ({
                    "NightProvider.useMemo[value]": (n)=>setBaseCheck(clamp(Math.round(n), 0, 200))
                })["NightProvider.useMemo[value]"],
                includes,
                toggleInclude,
                audience,
                setAudience,
                nights,
                setNights,
                split,
                setSplit,
                lift,
                liftFromMenu,
                liftOverridden: liftOverride !== null,
                setLift: ({
                    "NightProvider.useMemo[value]": (n)=>setLiftOverride(n)
                })["NightProvider.useMemo[value]"],
                syncLift: ({
                    "NightProvider.useMemo[value]": ()=>setLiftOverride(null)
                })["NightProvider.useMemo[value]"],
                capacity,
                setCapacity,
                events,
                setEvents,
                price,
                priceFromIncludes,
                priceOverridden: priceOverride !== null,
                setPrice: ({
                    "NightProvider.useMemo[value]": (n)=>setPriceOverride(n)
                })["NightProvider.useMemo[value]"],
                syncPrice: ({
                    "NightProvider.useMemo[value]": ()=>setPriceOverride(null)
                })["NightProvider.useMemo[value]"],
                date,
                setDate,
                liveNightRevenue,
                watchPartyRevenue,
                monthlyTotal: liveNightRevenue + watchPartyRevenue,
                venueShare: liveNightRevenue - tdtmShare,
                tdtmShare
            };
        }
    }["NightProvider.useMemo[value]"], [
        headliner,
        order,
        addItem,
        removeItem,
        resetOrder,
        baseCheck,
        includes,
        toggleInclude,
        audience,
        nights,
        split,
        liftOverride,
        capacity,
        events,
        priceOverride,
        date
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NightContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/NightProvider.tsx",
        lineNumber: 210,
        columnNumber: 10
    }, this);
}
_s(NightProvider, "tQZRBFFQfLbJpa3txAQiCydP2EQ=");
_c = NightProvider;
function useNight() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(NightContext);
    if (!context) throw new Error("useNight must be used inside <NightProvider>");
    return context;
}
_s1(useNight, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
const defaultHeadliner = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$guests$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["guests"][0];
const money = (n)=>`$${Math.round(n).toLocaleString("en-US")}`;
var _c;
__turbopack_context__.k.register(_c, "NightProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Reveal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Reveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function Reveal({ children, className = "", from = "up" }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Reveal.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            const observer = new IntersectionObserver({
                "Reveal.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setVisible(true);
                        observer.unobserve(el);
                    }
                }
            }["Reveal.useEffect"], {
                threshold: 0.15
            });
            observer.observe(el);
            return ({
                "Reveal.useEffect": ()=>observer.disconnect()
            })["Reveal.useEffect"];
        }
    }["Reveal.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: `reveal reveal-${from} ${visible ? "in" : ""} ${className}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/Reveal.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_s(Reveal, "F7BtIAxVh3vOWU1Jr24RYsj9CHc=");
_c = Reveal;
var _c;
__turbopack_context__.k.register(_c, "Reveal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Ticker.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Ticker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const DEFAULT_REPEAT = 4;
function Ticker({ items, className = "", repeat = DEFAULT_REPEAT }) {
    const sequence = Array.from({
        length: repeat
    }, (_, cycle)=>items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "ticker-item",
                children: item
            }, `${cycle}-${item}`, false, {
                fileName: "[project]/src/components/Ticker.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this)));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `ticker ${className}`.trim(),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "ticker-track",
            "aria-hidden": true,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "ticker-group",
                    children: sequence
                }, void 0, false, {
                    fileName: "[project]/src/components/Ticker.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "ticker-group",
                    children: sequence
                }, void 0, false, {
                    fileName: "[project]/src/components/Ticker.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Ticker.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Ticker.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_c = Ticker;
var _c;
__turbopack_context__.k.register(_c, "Ticker");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/TicketStub.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TicketStub
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NightProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/NightProvider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function TicketStub() {
    _s();
    const night = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NightProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNight"])();
    const guestName = night.headliner?.name ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NightProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultHeadliner"].name;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "ticket-cut grid grid-cols-1 overflow-hidden rounded-[1.5rem] border-2 border-ink bg-paper text-ink shadow-[10px_12px_0_var(--color-gold)] sm:grid-cols-[1fr_150px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between bg-dodger px-6 py-3 font-mono text-[0.62rem] font-bold uppercase tracking-[0.16em] text-paper sm:px-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Pawn Shop × Talk Dodgers To Me"
                            }, void 0, false, {
                                fileName: "[project]/src/components/TicketStub.tsx",
                                lineNumber: 13,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Admit one night"
                            }, void 0, false, {
                                fileName: "[project]/src/components/TicketStub.tsx",
                                lineNumber: 14,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TicketStub.tsx",
                        lineNumber: 12,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 sm:p-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-start justify-between gap-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mb-2 block font-mono text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-gold-dim",
                                                children: "Your projected event revenue"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TicketStub.tsx",
                                                lineNumber: 19,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-display text-5xl leading-[.85] uppercase text-dodger md:text-7xl",
                                                children: [
                                                    "The night",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/src/components/TicketStub.tsx",
                                                        lineNumber: 23,
                                                        columnNumber: 24
                                                    }, this),
                                                    "you built"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/TicketStub.tsx",
                                                lineNumber: 22,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/TicketStub.tsx",
                                        lineNumber: 18,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "stamp",
                                        children: [
                                            "Ready for",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/src/components/TicketStub.tsx",
                                                lineNumber: 26,
                                                columnNumber: 44
                                            }, this),
                                            "first pitch"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/TicketStub.tsx",
                                        lineNumber: 26,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/TicketStub.tsx",
                                lineNumber: 17,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-y border-dashed border-ink/25 py-6 sm:grid-cols-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                className: "mb-1 block font-mono text-[0.6rem] uppercase tracking-wide text-ink-faint",
                                                children: "Headliner"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TicketStub.tsx",
                                                lineNumber: 31,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-display text-xl uppercase leading-none text-ink",
                                                children: guestName
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TicketStub.tsx",
                                                lineNumber: 34,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/TicketStub.tsx",
                                        lineNumber: 30,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                className: "mb-1 block font-mono text-[0.6rem] uppercase tracking-wide text-ink-faint",
                                                children: "Live floor"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TicketStub.tsx",
                                                lineNumber: 37,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "number-pop font-mono text-base tabular-nums text-ink",
                                                children: [
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NightProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["money"])(night.liveNightRevenue),
                                                    "/mo"
                                                ]
                                            }, night.liveNightRevenue, true, {
                                                fileName: "[project]/src/components/TicketStub.tsx",
                                                lineNumber: 40,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/TicketStub.tsx",
                                        lineNumber: 36,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                className: "mb-1 block font-mono text-[0.6rem] uppercase tracking-wide text-ink-faint",
                                                children: "Watch tickets"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TicketStub.tsx",
                                                lineNumber: 45,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "number-pop font-mono text-base tabular-nums text-ink",
                                                children: [
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NightProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["money"])(night.watchPartyRevenue),
                                                    "/mo"
                                                ]
                                            }, night.watchPartyRevenue, true, {
                                                fileName: "[project]/src/components/TicketStub.tsx",
                                                lineNumber: 48,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/TicketStub.tsx",
                                        lineNumber: 44,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                className: "mb-1 block font-mono text-[0.6rem] uppercase tracking-wide text-gold-dim",
                                                children: "Event revenue"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TicketStub.tsx",
                                                lineNumber: 53,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "number-pop font-display text-3xl leading-none tabular-nums text-gold-dim",
                                                children: [
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NightProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["money"])(night.monthlyTotal),
                                                    "/mo"
                                                ]
                                            }, night.monthlyTotal, true, {
                                                fileName: "[project]/src/components/TicketStub.tsx",
                                                lineNumber: 56,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/TicketStub.tsx",
                                        lineNumber: 52,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/TicketStub.tsx",
                                lineNumber: 29,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 flex flex-wrap items-end gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "flex flex-col gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-mono text-[0.6rem] uppercase tracking-wide text-ink-faint",
                                                children: "Choose a first event date"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TicketStub.tsx",
                                                lineNumber: 64,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "date",
                                                        value: night.date,
                                                        onChange: (e)=>night.setDate(e.target.value),
                                                        "aria-label": "Choose a first event date",
                                                        className: `min-h-10 rounded-full border border-ink/25 bg-raised px-4 py-2 font-mono text-sm text-ink [color-scheme:light] ${!night.date ? "max-sm:text-transparent max-sm:[&::-webkit-datetime-edit]:text-transparent max-sm:[&::-webkit-datetime-edit-fields-wrapper]:opacity-0" : ""}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/TicketStub.tsx",
                                                        lineNumber: 68,
                                                        columnNumber: 15
                                                    }, this),
                                                    !night.date && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        "aria-hidden": true,
                                                        className: "pointer-events-none absolute inset-y-0 left-4 flex items-center font-mono text-sm text-ink sm:hidden",
                                                        children: "Select date"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/TicketStub.tsx",
                                                        lineNumber: 80,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/TicketStub.tsx",
                                                lineNumber: 67,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/TicketStub.tsx",
                                        lineNumber: 63,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "max-w-md font-mono text-[0.62rem] leading-relaxed text-ink-faint",
                                        children: "Illustrative — built from the choices you made above, editable any time before the first event."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TicketStub.tsx",
                                        lineNumber: 89,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/TicketStub.tsx",
                                lineNumber: 62,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TicketStub.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TicketStub.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "stub-edge flex items-center justify-center gap-2 border-t border-dashed border-ink/25 bg-raised-2 py-5 sm:border-t-0 sm:border-l",
                "aria-hidden": true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-mono text-xs tracking-[0.2em] text-ink-faint sm:rotate-180 sm:[writing-mode:vertical-rl]",
                    children: "ADMIT ONE · TDTM NIGHT"
                }, void 0, false, {
                    fileName: "[project]/src/components/TicketStub.tsx",
                    lineNumber: 101,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/TicketStub.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/TicketStub.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_s(TicketStub, "olymbD4N7pj9ewX02qbkMcYfiCQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NightProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNight"]
    ];
});
_c = TicketStub;
var _c;
__turbopack_context__.k.register(_c, "TicketStub");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/guests.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "guests",
    ()=>guests
]);
const guests = [
    {
        no: "01",
        name: "Mookie Betts",
        who: "Dodgers World Series champion — his tequila is already poured at Pawn Shop, and he's rumored to be an investor in the restaurant. The single strongest built-in tie-in on this list.",
        tag: "Pawn Shop Tie-In"
    },
    {
        no: "02",
        name: "Kiké Hernández",
        who: "Fan-favorite Dodgers infielder and one of the most-requested names for the pod. Already a TDTM guest, which makes a live follow-up an easy yes.",
        tag: "TDTM Alum"
    },
    {
        no: "03",
        name: "Freddie Freeman",
        who: "Dodgers first baseman, 2024 World Series MVP. Elite star power for a marquee first live episode.",
        tag: "Target Guest"
    },
    {
        no: "04",
        name: "Max & Kellie Muncy",
        who: "Dodgers infielder and his wife — both have already appeared on the podcast. A couple's episode plays well live, on camera and in the room.",
        tag: "TDTM Alum"
    },
    {
        no: "05",
        name: "Kelsie Whitmore",
        who: "The first woman to play professional baseball. A personal relationship with Melissa and a fast-growing profile — a genuinely fresh booking for the format.",
        tag: "Target Guest"
    },
    {
        no: "06",
        name: "Dave Roberts",
        who: "World Series–winning Dodgers manager. A leadership-and-legacy conversation that draws a different, older crowd through the door.",
        tag: "Target Guest"
    },
    {
        no: "07",
        name: "Clayton & Ellen Kershaw",
        who: "A Dodgers legend and his wife. A long-shot booking, but a natural fit for a collab with the Kershaw's Challenge foundation.",
        tag: "Target Guest"
    },
    {
        no: "08",
        name: "Magic Johnson",
        who: "NBA Hall of Famer and Dodgers part-owner. Crosses the podcast over from a baseball audience into a much wider LA sports and entertainment one.",
        tag: "Target Guest"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/menu.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "liveNightMenu",
    ()=>liveNightMenu,
    "watchPartyIncludes",
    ()=>watchPartyIncludes
]);
const liveNightMenu = [
    {
        id: "chavez-ravine-fries",
        name: "Chavez Ravine Fries",
        tag: "Food · Collab",
        original: "Beef Tallow Fries",
        description: "Dijonaise | ketchup",
        price: "$16",
        amount: 16,
        kind: "food"
    },
    {
        id: "blue-heaven-wings",
        name: "Blue Heaven Wings",
        tag: "Food · Collab",
        original: "Wings 6",
        description: "Lemon pepper | buffalo | charred chile",
        price: "$23",
        amount: 23,
        kind: "food"
    },
    {
        id: "walk-off",
        name: "The Walk-Off",
        tag: "Food · Collab",
        original: "Garlic Shrimp",
        description: "White shrimp | toasted garlic | sherry",
        price: "$30",
        amount: 30,
        kind: "food"
    },
    {
        id: "starting-nine",
        name: "The Starting Nine",
        tag: "Food · Collab",
        original: "Pan con Tomate",
        description: "Smoked tomato | boquerones | urfa",
        price: "$23",
        amount: 23,
        kind: "food"
    },
    {
        id: "extra-innings",
        name: "Extra Innings",
        tag: "Cocktail · Collab",
        description: "Built with Mookie's tequila, poured at Pawn Shop — to be finalized with the bar team",
        price: "$18",
        amount: 18,
        kind: "drink"
    },
    {
        id: "seventh-inning",
        name: "The 7th Inning",
        tag: "Cocktail · Collab",
        description: "Second cocktail, spirit-forward — to be finalized with the bar team",
        price: "$16",
        amount: 16,
        kind: "drink"
    },
    {
        id: "blue-heaven-zero",
        name: "Blue Heaven Zero",
        tag: "Mocktail · Collab",
        description: "Citrus | blue butterfly pea flower | soda",
        price: "$12",
        amount: 12,
        kind: "drink"
    }
];
const watchPartyIncludes = [
    {
        id: "room",
        name: "Private room, game on the big screen",
        tag: "Room",
        price: "$18",
        value: 18
    },
    {
        id: "catering",
        name: "On-site catering spread",
        tag: "Food",
        price: "$17",
        value: 17
    },
    {
        id: "bartender",
        name: "Dedicated bartender",
        tag: "Bar",
        price: "$10",
        value: 10
    },
    {
        id: "postseason",
        name: "Postseason night",
        tag: "Premium tier",
        price: "+40%",
        value: 1.4,
        premium: true
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_20mkl2p._.js.map