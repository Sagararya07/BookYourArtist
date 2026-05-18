module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/Downloads/bookyourartist/bookyourartist/src/lib/prisma.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "prisma",
    ()=>prisma,
    "withRetry",
    ()=>withRetry
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f40$prisma$2f$client$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs, [project]/Downloads/bookyourartist/bookyourartist/node_modules/@prisma/client)");
;
const globalForPrisma = /*TURBOPACK member replacement*/ __turbopack_context__.g;
function createPrismaClient() {
    return new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f40$prisma$2f$client$29$__["PrismaClient"]({
        log: ("TURBOPACK compile-time truthy", 1) ? [
            'error',
            'warn'
        ] : "TURBOPACK unreachable",
        datasources: {
            db: {
                url: process.env.DATABASE_URL
            }
        }
    });
}
const prisma = globalForPrisma.prisma || createPrismaClient();
if ("TURBOPACK compile-time truthy", 1) globalForPrisma.prisma = prisma;
async function withRetry(fn, retries = 3, delayMs = 1000) {
    for(let attempt = 1; attempt <= retries; attempt++){
        try {
            return await fn();
        } catch (err) {
            const code = err?.code;
            const isRetryable = code === 'P1001' || // Can't reach DB server
            code === 'P1017' || // Server closed connection
            err?.errorCode === undefined; // PrismaClientInitializationError
            if (isRetryable && attempt < retries) {
                console.warn(`[Prisma] DB unreachable (attempt ${attempt}/${retries}), retrying in ${delayMs}ms…`);
                await new Promise((res)=>setTimeout(res, delayMs * attempt));
            } else {
                throw err;
            }
        }
    }
    throw new Error('Unreachable');
}
}),
"[project]/Downloads/bookyourartist/bookyourartist/src/app/api/trending-artists/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bookyourartist/bookyourartist/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bookyourartist/bookyourartist/src/lib/prisma.ts [app-route] (ecmascript)");
;
;
async function GET() {
    try {
        const trendingArtists = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withRetry"])(()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].artist.findMany({
                where: {
                    isTrending: true,
                    isActive: true
                },
                orderBy: {
                    order: 'asc'
                }
            }));
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            data: trendingArtists
        });
    } catch (error) {
        console.error('Error fetching trending artists:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bookyourartist$2f$bookyourartist$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            message: 'Failed to fetch trending artists'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0cdq7ix._.js.map