"use strict";
exports.id = 691;
exports.ids = [691];
exports.modules = {

/***/ 691:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const VwoScript = ()=>{
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        window._vwo_code = window._vwo_code || function() {
            var account_id = 685967, version = 1.5, settings_tolerance = 2000, library_tolerance = 2500, use_existing_jquery = false, is_spa = 1, hide_element = "body", hide_element_style = "opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important", f = false, w = window, d = document, vwoCodeEl = d.querySelector("#vwoCode"), code = {
                use_existing_jquery: function() {
                    return use_existing_jquery;
                },
                library_tolerance: function() {
                    return library_tolerance;
                },
                hide_element_style: function() {
                    return "{" + hide_element_style + "}";
                },
                finish: function() {
                    if (!f) {
                        f = true;
                        var e = d.getElementById("_vis_opt_path_hides");
                        if (e) e.parentNode.removeChild(e);
                    }
                },
                finished: function() {
                    return f;
                },
                load: function(e) {
                    var t = d.createElement("script");
                    t.fetchPriority = "high";
                    t.src = e;
                    t.type = "text/javascript";
                    t.onerror = function() {
                        _vwo_code.finish();
                    };
                    d.getElementsByTagName("head")[0].appendChild(t);
                },
                getVersion: function() {
                    return version;
                },
                getMatchedCookies: function(e) {
                    var t = [];
                    if (document.cookie) {
                        t = document.cookie.match(e) || [];
                    }
                    return t;
                },
                getCombinationCookie: function() {
                    var e = code.getMatchedCookies(/(?:^|;)\s?(_vis_opt_exp_\d+_combi=[^;$]*)/gi);
                    e = e.map(function(e) {
                        try {
                            var t = decodeURIComponent(e);
                            if (!/_vis_opt_exp_\d+_combi=(?:\d+,?)+\s*$/.test(t)) {
                                return "";
                            }
                            return t;
                        } catch (e) {
                            return "";
                        }
                    });
                    var i = [];
                    e.forEach(function(e) {
                        var t = e.match(/([\d,]+)/g);
                        t && i.push(t.join("-"));
                    });
                    return i.join("|");
                },
                init: function() {
                    if (d.URL.indexOf("__vwo_disable__") > -1) return;
                    w.settings_timer = setTimeout(function() {
                        _vwo_code.finish();
                    }, settings_tolerance);
                    var e = d.currentScript, t = d.createElement("style"), i = e && !e.async ? hide_element ? hide_element + "{" + hide_element_style + "}" : "" : code.lA = 1, n = d.getElementsByTagName("head")[0];
                    t.setAttribute("id", "_vis_opt_path_hides");
                    vwoCodeEl && t.setAttribute("nonce", vwoCodeEl.nonce);
                    t.setAttribute("type", "text/css");
                    if (t.styleSheet) t.styleSheet.cssText = i;
                    else t.appendChild(d.createTextNode(i));
                    n.appendChild(t);
                    var o = this.getCombinationCookie();
                    this.load("https://dev.visualwebsiteoptimizer.com/j.php?a=" + account_id + "&u=" + encodeURIComponent(d.URL) + "&f=" + +is_spa + "&vn=" + version + (o ? "&c=" + o : ""));
                    return settings_timer;
                }
            };
            w._vwo_settings_timer = code.init();
            return code;
        }();
    }, []);
    return null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VwoScript);


/***/ })

};
;