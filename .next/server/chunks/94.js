"use strict";
exports.id = 94;
exports.ids = [94];
exports.modules = {

/***/ 94:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_gtm_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(935);
/* harmony import */ var react_gtm_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_gtm_module__WEBPACK_IMPORTED_MODULE_1__);


const tagManagerArgs = {
    gtmId: "GTM-W35D5RC"
};
const FreshChat = ()=>{
    function initFreshChat() {
        if (window.fcWidget) {
            window.fcWidget.init({
                token: "58aaa246-2329-4367-a4b2-0a4d4622d31b",
                host: "https://sprious-org.freshchat.com",
                widgetUuid: "1dadd584-17e2-4a15-a8d0-6452cbcfe178"
            });
        }
    }
    function loadFreshChatScript() {
        var scriptId = "Freshchat-js-sdk";
        var existingScript = document.getElementById(scriptId);
        if (!existingScript) {
            var script = document.createElement("script");
            script.id = scriptId;
            script.async = true;
            script.src = "https://sprious-org.freshchat.com/js/widget.js";
            script.onload = initFreshChat;
            script.onerror = function() {
                console.error("Error loading Freshchat script");
            };
            document.head.appendChild(script);
        } else {
            initFreshChat();
        }
    }
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        react_gtm_module__WEBPACK_IMPORTED_MODULE_1___default().initialize(tagManagerArgs);
        // Load Freshchat script
        if (document.readyState === "loading") {
            document.addEventListener("DOMContentLoaded", loadFreshChatScript);
        } else {
            loadFreshChatScript();
        }
    }, []);
    return null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FreshChat);


/***/ })

};
;