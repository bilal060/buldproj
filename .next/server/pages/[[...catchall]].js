"use strict";
(() => {
var exports = {};
exports.id = 369;
exports.ids = [369,514];
exports.modules = {

/***/ 408:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ CatchallPage),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "@plasmicapp/loader-nextjs"
var loader_nextjs_ = __webpack_require__(490);
;// CONCATENATED MODULE: external "next/error"
const error_namespaceObject = require("next/error");
var error_default = /*#__PURE__*/__webpack_require__.n(error_namespaceObject);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: ./plasmic-init.ts
var plasmic_init = __webpack_require__(289);
;// CONCATENATED MODULE: ./pages/[[...catchall]].tsx






/**
 * Use fetchPages() to fetch list of pages that have been created in Plasmic
 */ const getStaticPaths = async ()=>{
    const pages = await plasmic_init/* PLASMIC.fetchPages */.p.fetchPages();
    return {
        paths: pages.map((page)=>({
                params: {
                    catchall: page.path.substring(1).split("/")
                }
            })),
        fallback: "blocking"
    };
};
/**
 * For each page, pre-fetch the data we need to render it
 */ const getStaticProps = async (context)=>{
    const { catchall  } = context.params ?? {};
    // Convert the catchall param into a path string
    const plasmicPath = typeof catchall === "string" ? catchall : Array.isArray(catchall) ? `/${catchall.join("/")}` : "/";
    const plasmicData = await plasmic_init/* PLASMIC.maybeFetchComponentData */.p.maybeFetchComponentData(plasmicPath);
    if (!plasmicData) {
        // This is some non-Plasmic catch-all page
        return {
            props: {}
        };
    }
    // This is a path that Plasmic knows about.
    const pageMeta = plasmicData.entryCompMetas[0];
    // Cache the necessary data fetched for the page.
    const queryCache = await (0,loader_nextjs_.extractPlasmicQueryData)(/*#__PURE__*/ jsx_runtime_.jsx(loader_nextjs_.PlasmicRootProvider, {
        loader: plasmic_init/* PLASMIC */.p,
        prefetchedData: plasmicData,
        pageParams: pageMeta.params,
        children: /*#__PURE__*/ jsx_runtime_.jsx(loader_nextjs_.PlasmicComponent, {
            component: pageMeta.displayName
        })
    }));
    // Pass the data in as props.
    return {
        props: {
            plasmicData,
            queryCache
        },
        // Using incremental static regeneration, will invalidate this page
        // after 300s (no deploy webhooks needed)
        revalidate: 300
    };
};
/**
 * Actually render the page!
 */ function CatchallPage(props) {
    const { plasmicData , queryCache  } = props;
    const router = (0,router_namespaceObject.useRouter)();
    if (!plasmicData || plasmicData.entryCompMetas.length === 0) {
        return /*#__PURE__*/ jsx_runtime_.jsx((error_default()), {
            statusCode: 404
        });
    }
    const pageMeta = plasmicData.entryCompMetas[0];
    return(// Pass in the data fetched in getStaticProps as prefetchedData
    /*#__PURE__*/ jsx_runtime_.jsx(loader_nextjs_.PlasmicRootProvider, {
        loader: plasmic_init/* PLASMIC */.p,
        prefetchedData: plasmicData,
        prefetchedQueryData: queryCache,
        pageParams: pageMeta.params,
        pageQuery: router.query,
        children: /*#__PURE__*/ jsx_runtime_.jsx(loader_nextjs_.PlasmicComponent, {
            component: pageMeta.displayName
        })
    }));
}


/***/ }),

/***/ 490:
/***/ ((module) => {

module.exports = require("@plasmicapp/loader-nextjs");

/***/ }),

/***/ 832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [735,152,289], () => (__webpack_exec__(408)));
module.exports = __webpack_exports__;

})();