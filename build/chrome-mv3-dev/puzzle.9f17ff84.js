(function(define){var __define; typeof define === "function" && (__define=define,define=null);
// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"h1vGF":[function(require,module,exports) {
var p = typeof globalThis.process < "u" ? globalThis.process.argv : [];
var y = ()=>typeof globalThis.process < "u" ? globalThis.process.env : {};
var H = new Set(p), _ = (e)=>H.has(e), X = p.filter((e)=>e.startsWith("--") && e.includes("=")).map((e)=>e.split("=")).reduce((e, [t, o])=>(e[t] = o, e), {});
var G = _("--dry-run"), d = ()=>_("--verbose") || y().VERBOSE === "true", Z = d();
var u = (e = "", ...t)=>console.log(e.padEnd(9), "|", ...t);
var x = (...e)=>console.error("\uD83D\uDD34 ERROR".padEnd(9), "|", ...e), v = (...e)=>u("\uD83D\uDD35 INFO", ...e), m = (...e)=>u("\uD83D\uDFE0 WARN", ...e), D = 0, c = (...e)=>d() && u(`\u{1F7E1} ${D++}`, ...e);
var s = {
    "isContentScript": true,
    "isBackground": false,
    "isReact": false,
    "runtimes": [
        "script-runtime"
    ],
    "host": "localhost",
    "port": 1815,
    "entryFilePath": "E:\\projects\\gabe\\crossworder\\src\\contents\\puzzle.ts",
    "bundleId": "8c9f23e69f17ff84",
    "envHash": "d99a5ffa57acd638",
    "verbose": "false",
    "secure": false,
    "serverPort": 1012
};
module.bundle.HMR_BUNDLE_ID = s.bundleId;
globalThis.process = {
    argv: [],
    env: {
        VERBOSE: s.verbose
    }
};
var S = module.bundle.Module;
function I(e) {
    S.call(this, e), this.hot = {
        data: module.bundle.hotData[e],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(t) {
            this._acceptCallbacks.push(t || function() {});
        },
        dispose: function(t) {
            this._disposeCallbacks.push(t);
        }
    }, module.bundle.hotData[e] = void 0;
}
module.bundle.Module = I;
module.bundle.hotData = {};
var l = globalThis.browser || globalThis.chrome || null;
function b() {
    return !s.host || s.host === "0.0.0.0" ? "localhost" : s.host;
}
function C() {
    return s.port || location.port;
}
var E = "__plasmo_runtime_script_";
function L(e, t) {
    let { modules: o } = e;
    return o ? !!o[t] : !1;
}
function O(e = C()) {
    let t = b();
    return `${s.secure || location.protocol === "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(t) ? "wss" : "ws"}://${t}:${e}/`;
}
function B(e) {
    typeof e.message == "string" && x("[plasmo/parcel-runtime]: " + e.message);
}
function P(e) {
    if (typeof globalThis.WebSocket > "u") return;
    let t = new WebSocket(O());
    return t.addEventListener("message", async function(o) {
        let r = JSON.parse(o.data);
        if (r.type === "update" && await e(r.assets), r.type === "error") for (let i of r.diagnostics.ansi){
            let w = i.codeframe || i.stack;
            m("[plasmo/parcel-runtime]: " + i.message + `
` + w + `

` + i.hints.join(`
`));
        }
    }), t.addEventListener("error", B), t.addEventListener("open", ()=>{
        v(`[plasmo/parcel-runtime]: Connected to HMR server for ${s.entryFilePath}`);
    }), t.addEventListener("close", ()=>{
        m(`[plasmo/parcel-runtime]: Connection to the HMR server is closed for ${s.entryFilePath}`);
    }), t;
}
var n = "__plasmo-loading__", T = typeof trustedTypes < "u" ? trustedTypes.createPolicy(`trusted-html-${n}`, {
    createHTML: (e)=>e
}) : void 0;
function g() {
    return document.getElementById(n);
}
function f() {
    return !g();
}
function $() {
    let e = document.createElement("div");
    e.id = n;
    let t = `
  <style>
    #${n} {
      background: #f3f3f3;
      color: #333;
      border: 1px solid #333;
      box-shadow: #333 4.7px 4.7px;
    }

    #${n}:hover {
      background: #e3e3e3;
      color: #444;
    }

    @keyframes plasmo-loading-animate-svg-fill {
      0% {
        fill: transparent;
      }
    
      100% {
        fill: #333;
      }
    }

    #${n} .svg-elem-1 {
      animation: plasmo-loading-animate-svg-fill 1.47s cubic-bezier(0.47, 0, 0.745, 0.715) 0.8s both infinite;
    }

    #${n} .svg-elem-2 {
      animation: plasmo-loading-animate-svg-fill 1.47s cubic-bezier(0.47, 0, 0.745, 0.715) 0.9s both infinite;
    }
    
    #${n} .svg-elem-3 {
      animation: plasmo-loading-animate-svg-fill 1.47s cubic-bezier(0.47, 0, 0.745, 0.715) 1s both infinite;
    }

    #${n} .hidden {
      display: none;
    }

  </style>
  
  <svg height="32" width="32" viewBox="0 0 264 354" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M139.221 282.243C154.252 282.243 166.903 294.849 161.338 308.812C159.489 313.454 157.15 317.913 154.347 322.109C146.464 333.909 135.26 343.107 122.151 348.538C109.043 353.969 94.6182 355.39 80.7022 352.621C66.7861 349.852 54.0034 343.018 43.9705 332.983C33.9375 322.947 27.105 310.162 24.3369 296.242C21.5689 282.323 22.9895 267.895 28.4193 254.783C33.8491 241.671 43.0441 230.464 54.8416 222.579C59.0353 219.777 63.4908 217.438 68.1295 215.588C82.0915 210.021 94.6978 222.671 94.6978 237.703L94.6978 255.027C94.6978 270.058 106.883 282.243 121.914 282.243H139.221Z" fill="#333" class="svg-elem-1" ></path>
    <path d="M192.261 142.028C192.261 126.996 204.867 114.346 218.829 119.913C223.468 121.763 227.923 124.102 232.117 126.904C243.915 134.789 253.11 145.996 258.539 159.108C263.969 172.22 265.39 186.648 262.622 200.567C259.854 214.487 253.021 227.272 242.988 237.308C232.955 247.343 220.173 254.177 206.256 256.946C192.34 259.715 177.916 258.294 164.807 252.863C151.699 247.432 140.495 238.234 132.612 226.434C129.808 222.238 127.47 217.779 125.62 213.137C120.056 199.174 132.707 186.568 147.738 186.568L165.044 186.568C180.076 186.568 192.261 174.383 192.261 159.352L192.261 142.028Z" fill="#333" class="svg-elem-2" ></path>
    <path d="M95.6522 164.135C95.6522 179.167 83.2279 191.725 68.8013 187.505C59.5145 184.788 50.6432 180.663 42.5106 175.227C26.7806 164.714 14.5206 149.772 7.28089 132.289C0.041183 114.807 -1.85305 95.5697 1.83772 77.0104C5.52849 58.4511 14.6385 41.4033 28.0157 28.0228C41.393 14.6423 58.4366 5.53006 76.9914 1.83839C95.5461 -1.85329 114.779 0.0414162 132.257 7.2829C149.735 14.5244 164.674 26.7874 175.184 42.5212C180.62 50.6576 184.744 59.5332 187.46 68.8245C191.678 83.2519 179.119 95.6759 164.088 95.6759L122.869 95.6759C107.837 95.6759 95.6522 107.861 95.6522 122.892L95.6522 164.135Z" fill="#333" class="svg-elem-3"></path>
  </svg>
  <span class="hidden">Context Invalidated, Press to Reload</span>
  `;
    return e.innerHTML = T ? T.createHTML(t) : t, e.style.pointerEvents = "none", e.style.position = "fixed", e.style.bottom = "14.7px", e.style.right = "14.7px", e.style.fontFamily = "sans-serif", e.style.display = "flex", e.style.justifyContent = "center", e.style.alignItems = "center", e.style.padding = "14.7px", e.style.gap = "14.7px", e.style.borderRadius = "4.7px", e.style.zIndex = "2147483647", e.style.opacity = "0", e.style.transition = "all 0.47s ease-in-out", e;
}
function F(e) {
    return new Promise((t)=>{
        document.documentElement ? (f() && (document.documentElement.appendChild(e), t()), t()) : globalThis.addEventListener("DOMContentLoaded", ()=>{
            f() && document.documentElement.appendChild(e), t();
        });
    });
}
var k = ()=>{
    let e;
    if (f()) {
        let t = $();
        e = F(t);
    }
    return {
        show: async ({ reloadButton: t = !1 } = {})=>{
            await e;
            let o = g();
            o.style.opacity = "1", t && (o.onclick = (r)=>{
                r.stopPropagation(), globalThis.location.reload();
            }, o.querySelector("span").classList.remove("hidden"), o.style.cursor = "pointer", o.style.pointerEvents = "all");
        },
        hide: async ()=>{
            await e;
            let t = g();
            t.style.opacity = "0";
        }
    };
};
var N = `${E}${module.id}__`, a, A = !1, M = k();
async function h() {
    c("Script Runtime - reloading"), A ? globalThis.location?.reload?.() : M.show({
        reloadButton: !0
    });
}
function R() {
    a?.disconnect(), a = l?.runtime.connect({
        name: N
    }), a.onDisconnect.addListener(()=>{
        h();
    }), a.onMessage.addListener((e)=>{
        e.__plasmo_cs_reload__ && h(), e.__plasmo_cs_active_tab__ && (A = !0);
    });
}
function W() {
    if (l?.runtime) try {
        R(), setInterval(R, 24e3);
    } catch  {
        return;
    }
}
W();
P(async (e)=>{
    c("Script runtime - on updated assets"), e.filter((o)=>o.envHash === s.envHash).some((o)=>L(module.bundle, o.id)) && (M.show(), l?.runtime ? a.postMessage({
        __plasmo_cs_changed__: !0
    }) : setTimeout(()=>{
        h();
    }, 4700));
});

},{}],"39NHC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "config", ()=>config);
var _puzzle = require("@/model/puzzle");
const config = {
    all_frames: true,
    matches: [
        "https://www.nytimes.com/crosswords/game/*"
    ],
    world: "MAIN"
};
window.addEventListener("load", ()=>{
    const puzzle = new (0, _puzzle.Puzzle)();
    console.log(puzzle);
});

},{"@/model/puzzle":"73bEB","@parcel/transformer-js/src/esmodule-helpers.js":"5G9Z5"}],"73bEB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Puzzle", ()=>Puzzle);
var _findClueListItemsByTitle = require("@/lib/findClueListItemsByTitle");
class Puzzle {
    constructor(){
        this._type = "puzzle";
        this.fromDOM();
    }
    fromDOM() {
        const headerElement = document.querySelector("#portal-game-header");
        this.title = headerElement?.querySelector(".xwd__details--title")?.textContent;
        const puzzleDate = new Date(Date.parse(headerElement?.querySelector(".xwd__details--date")?.textContent));
        this.date = puzzleDate;
        // Get day of the week from date, e.g. "monday"
        // @ts-ignore
        this.dayOfWeek = puzzleDate.toLocaleDateString("en-US", {
            weekday: "long"
        }).toLowerCase();
        this.url = window.location.href;
        const boardElement = document.querySelector("#puzzle > section.xwd__layout_clueBarAndBoard > section.xwd__board");
        const cellElements = document.querySelectorAll('#xwd-board > g[data-group="cells"] > g.xwd__cell');
        const cells = [
            ...cellElements
        ].map((element, index)=>{
            // Get the cell's `rect` element
            const dataElement = element.querySelector("rect");
            const numberElement = element.querySelector('text[text-anchor="start"]');
            const valueElement = element.querySelector('text[text-anchor="middle"]');
            const cell = {
                _type: "cell",
                elements: {
                    root: element,
                    data: dataElement,
                    number: numberElement,
                    value: valueElement
                },
                // Parse the id from the cell's `id` attribute, in the form of "cell-id-0"
                id: parseInt(dataElement.id.split("-").pop()),
                isEditable: !dataElement.classList.contains("xwd__cell--block"),
                isHighlighted: dataElement.classList.contains("xwd__cell--highlighted"),
                isRelated: dataElement.classList.contains("xwd__cell--related"),
                isSelected: dataElement.classList.contains("xwd__cell--selected"),
                value: valueElement?.querySelector("text")?.textContent || ""
            };
            return cell;
        });
        // grid elements
        const gridElement = boardElement?.querySelector('#xwd-board > g[data-group="grid"]');
        this.board = {
            _type: "board",
            cells: cells,
            elements: {
                root: boardElement
            },
            grid: {
                _type: "grid",
                elements: {
                    root: gridElement,
                    border: gridElement.querySelector("rect"),
                    lines: gridElement.querySelector("path")
                }
            }
        };
        this.clues = this.buildClues();
    // const downClues: Clue[] = Array.from(downClueElements, (element, index) => {
    //
    // puzzle.board = json.board;
    // puzzle.clues = json.clues;
    // puzzle.date = json.date;
    // puzzle.dayOfWeek = json.dayOfWeek;
    // puzzle.title = json.title;
    // puzzle.url = json.url;
    // return puzzle;
    }
    buildClues() {
        const acrossClueElements = (0, _findClueListItemsByTitle.findClueListItemsByTitle)("Across");
        const downClueElements = (0, _findClueListItemsByTitle.findClueListItemsByTitle)("Down");
        const acrossClues = [
            ...acrossClueElements
        ].map((element, index)=>{
            const number = element.querySelector("span.xwd__clue--label").textContent;
            const text = element.querySelector("span.xwd__clue--text").textContent;
            return {
                _type: "clue",
                direction: "across",
                id: `${number}A`,
                number: parseInt(number),
                text
            };
        });
        const downClues = [
            ...downClueElements
        ].map((element, index)=>{
            const number = element.querySelector("span.xwd__clue--label").textContent;
            const text = element.querySelector("span.xwd__clue--text").textContent;
            return {
                _type: "clue",
                direction: "down",
                id: `${number}D`,
                number: parseInt(number),
                text
            };
        });
        return [
            ...acrossClues,
            ...downClues
        ].sort((a, b)=>a.number - b.number);
    }
}

},{"@/lib/findClueListItemsByTitle":"cNUfT","@parcel/transformer-js/src/esmodule-helpers.js":"5G9Z5"}],"cNUfT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "findClueListItemsByTitle", ()=>findClueListItemsByTitle);
function findClueListItemsByTitle(title) {
    // Find all h3 elements within '.xwd__clue-list--wrapper' that match the title
    const matchingH3 = Array.from(document.querySelectorAll("section.xwd__layout--cluelists > .xwd__clue-list--wrapper h3")).filter((h3)=>h3.textContent.trim() === title);
    // Initialize an array to hold the li elements
    let liElements = [];
    // If a matching h3 element is found, select the li elements within the same wrapper
    if (matchingH3.length > 0) liElements = Array.from(matchingH3[0].closest(".xwd__clue-list--wrapper").querySelectorAll("ol.xwd__clue-list--list li"));
    return liElements;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5G9Z5"}],"5G9Z5":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["h1vGF","39NHC"], "39NHC", "parcelRequire8ef7")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WyJub2RlX21vZHVsZXMvLnBucG0vQHBsYXNtb2hxK3BhcmNlbC1ydW50aW1lQDAuMjMuMS9ub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1ydW50aW1lL2Rpc3QvcnVudGltZS01NjFlMDA2YWZlNDQ3OGFiLmpzIiwic3JjL2NvbnRlbnRzL3B1enpsZS50cyIsInNyYy9tb2RlbC9wdXp6bGUudHMiLCJzcmMvbGliL2ZpbmRDbHVlTGlzdEl0ZW1zQnlUaXRsZS50cyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9AcGFyY2VsK3RyYW5zZm9ybWVyLWpzQDIuOS4zX0BwYXJjZWwrY29yZUAyLjkuMy9ub2RlX21vZHVsZXMvQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcD10eXBlb2YgZ2xvYmFsVGhpcy5wcm9jZXNzPFwidVwiP2dsb2JhbFRoaXMucHJvY2Vzcy5hcmd2OltdO3ZhciB5PSgpPT50eXBlb2YgZ2xvYmFsVGhpcy5wcm9jZXNzPFwidVwiP2dsb2JhbFRoaXMucHJvY2Vzcy5lbnY6e307dmFyIEg9bmV3IFNldChwKSxfPWU9PkguaGFzKGUpLFg9cC5maWx0ZXIoZT0+ZS5zdGFydHNXaXRoKFwiLS1cIikmJmUuaW5jbHVkZXMoXCI9XCIpKS5tYXAoZT0+ZS5zcGxpdChcIj1cIikpLnJlZHVjZSgoZSxbdCxvXSk9PihlW3RdPW8sZSkse30pO3ZhciBHPV8oXCItLWRyeS1ydW5cIiksZD0oKT0+XyhcIi0tdmVyYm9zZVwiKXx8eSgpLlZFUkJPU0U9PT1cInRydWVcIixaPWQoKTt2YXIgdT0oZT1cIlwiLC4uLnQpPT5jb25zb2xlLmxvZyhlLnBhZEVuZCg5KSxcInxcIiwuLi50KTt2YXIgeD0oLi4uZSk9PmNvbnNvbGUuZXJyb3IoXCJcXHV7MUY1MzR9IEVSUk9SXCIucGFkRW5kKDkpLFwifFwiLC4uLmUpLHY9KC4uLmUpPT51KFwiXFx1ezFGNTM1fSBJTkZPXCIsLi4uZSksbT0oLi4uZSk9PnUoXCJcXHV7MUY3RTB9IFdBUk5cIiwuLi5lKSxEPTAsYz0oLi4uZSk9PmQoKSYmdShgXFx1ezFGN0UxfSAke0QrK31gLC4uLmUpO3ZhciBzPXtcImlzQ29udGVudFNjcmlwdFwiOnRydWUsXCJpc0JhY2tncm91bmRcIjpmYWxzZSxcImlzUmVhY3RcIjpmYWxzZSxcInJ1bnRpbWVzXCI6W1wic2NyaXB0LXJ1bnRpbWVcIl0sXCJob3N0XCI6XCJsb2NhbGhvc3RcIixcInBvcnRcIjoxODE1LFwiZW50cnlGaWxlUGF0aFwiOlwiRTpcXFxccHJvamVjdHNcXFxcZ2FiZVxcXFxjcm9zc3dvcmRlclxcXFxzcmNcXFxcY29udGVudHNcXFxccHV6emxlLnRzXCIsXCJidW5kbGVJZFwiOlwiOGM5ZjIzZTY5ZjE3ZmY4NFwiLFwiZW52SGFzaFwiOlwiZDk5YTVmZmE1N2FjZDYzOFwiLFwidmVyYm9zZVwiOlwiZmFsc2VcIixcInNlY3VyZVwiOmZhbHNlLFwic2VydmVyUG9ydFwiOjEwMTJ9O21vZHVsZS5idW5kbGUuSE1SX0JVTkRMRV9JRD1zLmJ1bmRsZUlkO2dsb2JhbFRoaXMucHJvY2Vzcz17YXJndjpbXSxlbnY6e1ZFUkJPU0U6cy52ZXJib3NlfX07dmFyIFM9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU7ZnVuY3Rpb24gSShlKXtTLmNhbGwodGhpcyxlKSx0aGlzLmhvdD17ZGF0YTptb2R1bGUuYnVuZGxlLmhvdERhdGFbZV0sX2FjY2VwdENhbGxiYWNrczpbXSxfZGlzcG9zZUNhbGxiYWNrczpbXSxhY2NlcHQ6ZnVuY3Rpb24odCl7dGhpcy5fYWNjZXB0Q2FsbGJhY2tzLnB1c2godHx8ZnVuY3Rpb24oKXt9KX0sZGlzcG9zZTpmdW5jdGlvbih0KXt0aGlzLl9kaXNwb3NlQ2FsbGJhY2tzLnB1c2godCl9fSxtb2R1bGUuYnVuZGxlLmhvdERhdGFbZV09dm9pZCAwfW1vZHVsZS5idW5kbGUuTW9kdWxlPUk7bW9kdWxlLmJ1bmRsZS5ob3REYXRhPXt9O3ZhciBsPWdsb2JhbFRoaXMuYnJvd3Nlcnx8Z2xvYmFsVGhpcy5jaHJvbWV8fG51bGw7ZnVuY3Rpb24gYigpe3JldHVybiFzLmhvc3R8fHMuaG9zdD09PVwiMC4wLjAuMFwiP1wibG9jYWxob3N0XCI6cy5ob3N0fWZ1bmN0aW9uIEMoKXtyZXR1cm4gcy5wb3J0fHxsb2NhdGlvbi5wb3J0fXZhciBFPVwiX19wbGFzbW9fcnVudGltZV9zY3JpcHRfXCI7ZnVuY3Rpb24gTChlLHQpe2xldHttb2R1bGVzOm99PWU7cmV0dXJuIG8/ISFvW3RdOiExfWZ1bmN0aW9uIE8oZT1DKCkpe2xldCB0PWIoKTtyZXR1cm5gJHtzLnNlY3VyZXx8bG9jYXRpb24ucHJvdG9jb2w9PT1cImh0dHBzOlwiJiYhL2xvY2FsaG9zdHwxMjcuMC4wLjF8MC4wLjAuMC8udGVzdCh0KT9cIndzc1wiOlwid3NcIn06Ly8ke3R9OiR7ZX0vYH1mdW5jdGlvbiBCKGUpe3R5cGVvZiBlLm1lc3NhZ2U9PVwic3RyaW5nXCImJngoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrZS5tZXNzYWdlKX1mdW5jdGlvbiBQKGUpe2lmKHR5cGVvZiBnbG9iYWxUaGlzLldlYlNvY2tldD5cInVcIilyZXR1cm47bGV0IHQ9bmV3IFdlYlNvY2tldChPKCkpO3JldHVybiB0LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsYXN5bmMgZnVuY3Rpb24obyl7bGV0IHI9SlNPTi5wYXJzZShvLmRhdGEpO2lmKHIudHlwZT09PVwidXBkYXRlXCImJmF3YWl0IGUoci5hc3NldHMpLHIudHlwZT09PVwiZXJyb3JcIilmb3IobGV0IGkgb2Ygci5kaWFnbm9zdGljcy5hbnNpKXtsZXQgdz1pLmNvZGVmcmFtZXx8aS5zdGFjazttKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK2kubWVzc2FnZStgXG5gK3crYFxuXG5gK2kuaGludHMuam9pbihgXG5gKSl9fSksdC5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIixCKSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsKCk9Pnt2KGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGVkIHRvIEhNUiBzZXJ2ZXIgZm9yICR7cy5lbnRyeUZpbGVQYXRofWApfSksdC5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwoKT0+e20oYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0aW9uIHRvIHRoZSBITVIgc2VydmVyIGlzIGNsb3NlZCBmb3IgJHtzLmVudHJ5RmlsZVBhdGh9YCl9KSx0fXZhciBuPVwiX19wbGFzbW8tbG9hZGluZ19fXCIsVD10eXBlb2YgdHJ1c3RlZFR5cGVzPFwidVwiP3RydXN0ZWRUeXBlcy5jcmVhdGVQb2xpY3koYHRydXN0ZWQtaHRtbC0ke259YCx7Y3JlYXRlSFRNTDplPT5lfSk6dm9pZCAwO2Z1bmN0aW9uIGcoKXtyZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobil9ZnVuY3Rpb24gZigpe3JldHVybiFnKCl9ZnVuY3Rpb24gJCgpe2xldCBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ZS5pZD1uO2xldCB0PWBcbiAgPHN0eWxlPlxuICAgICMke259IHtcbiAgICAgIGJhY2tncm91bmQ6ICNmM2YzZjM7XG4gICAgICBjb2xvcjogIzMzMztcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XG4gICAgICBib3gtc2hhZG93OiAjMzMzIDQuN3B4IDQuN3B4O1xuICAgIH1cblxuICAgICMke259OmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICNlM2UzZTM7XG4gICAgICBjb2xvcjogIzQ0NDtcbiAgICB9XG5cbiAgICBAa2V5ZnJhbWVzIHBsYXNtby1sb2FkaW5nLWFuaW1hdGUtc3ZnLWZpbGwge1xuICAgICAgMCUge1xuICAgICAgICBmaWxsOiB0cmFuc3BhcmVudDtcbiAgICAgIH1cbiAgICBcbiAgICAgIDEwMCUge1xuICAgICAgICBmaWxsOiAjMzMzO1xuICAgICAgfVxuICAgIH1cblxuICAgICMke259IC5zdmctZWxlbS0xIHtcbiAgICAgIGFuaW1hdGlvbjogcGxhc21vLWxvYWRpbmctYW5pbWF0ZS1zdmctZmlsbCAxLjQ3cyBjdWJpYy1iZXppZXIoMC40NywgMCwgMC43NDUsIDAuNzE1KSAwLjhzIGJvdGggaW5maW5pdGU7XG4gICAgfVxuXG4gICAgIyR7bn0gLnN2Zy1lbGVtLTIge1xuICAgICAgYW5pbWF0aW9uOiBwbGFzbW8tbG9hZGluZy1hbmltYXRlLXN2Zy1maWxsIDEuNDdzIGN1YmljLWJlemllcigwLjQ3LCAwLCAwLjc0NSwgMC43MTUpIDAuOXMgYm90aCBpbmZpbml0ZTtcbiAgICB9XG4gICAgXG4gICAgIyR7bn0gLnN2Zy1lbGVtLTMge1xuICAgICAgYW5pbWF0aW9uOiBwbGFzbW8tbG9hZGluZy1hbmltYXRlLXN2Zy1maWxsIDEuNDdzIGN1YmljLWJlemllcigwLjQ3LCAwLCAwLjc0NSwgMC43MTUpIDFzIGJvdGggaW5maW5pdGU7XG4gICAgfVxuXG4gICAgIyR7bn0gLmhpZGRlbiB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICA8L3N0eWxlPlxuICBcbiAgPHN2ZyBoZWlnaHQ9XCIzMlwiIHdpZHRoPVwiMzJcIiB2aWV3Qm94PVwiMCAwIDI2NCAzNTRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICA8cGF0aCBkPVwiTTEzOS4yMjEgMjgyLjI0M0MxNTQuMjUyIDI4Mi4yNDMgMTY2LjkwMyAyOTQuODQ5IDE2MS4zMzggMzA4LjgxMkMxNTkuNDg5IDMxMy40NTQgMTU3LjE1IDMxNy45MTMgMTU0LjM0NyAzMjIuMTA5QzE0Ni40NjQgMzMzLjkwOSAxMzUuMjYgMzQzLjEwNyAxMjIuMTUxIDM0OC41MzhDMTA5LjA0MyAzNTMuOTY5IDk0LjYxODIgMzU1LjM5IDgwLjcwMjIgMzUyLjYyMUM2Ni43ODYxIDM0OS44NTIgNTQuMDAzNCAzNDMuMDE4IDQzLjk3MDUgMzMyLjk4M0MzMy45Mzc1IDMyMi45NDcgMjcuMTA1IDMxMC4xNjIgMjQuMzM2OSAyOTYuMjQyQzIxLjU2ODkgMjgyLjMyMyAyMi45ODk1IDI2Ny44OTUgMjguNDE5MyAyNTQuNzgzQzMzLjg0OTEgMjQxLjY3MSA0My4wNDQxIDIzMC40NjQgNTQuODQxNiAyMjIuNTc5QzU5LjAzNTMgMjE5Ljc3NyA2My40OTA4IDIxNy40MzggNjguMTI5NSAyMTUuNTg4QzgyLjA5MTUgMjEwLjAyMSA5NC42OTc4IDIyMi42NzEgOTQuNjk3OCAyMzcuNzAzTDk0LjY5NzggMjU1LjAyN0M5NC42OTc4IDI3MC4wNTggMTA2Ljg4MyAyODIuMjQzIDEyMS45MTQgMjgyLjI0M0gxMzkuMjIxWlwiIGZpbGw9XCIjMzMzXCIgY2xhc3M9XCJzdmctZWxlbS0xXCIgPjwvcGF0aD5cbiAgICA8cGF0aCBkPVwiTTE5Mi4yNjEgMTQyLjAyOEMxOTIuMjYxIDEyNi45OTYgMjA0Ljg2NyAxMTQuMzQ2IDIxOC44MjkgMTE5LjkxM0MyMjMuNDY4IDEyMS43NjMgMjI3LjkyMyAxMjQuMTAyIDIzMi4xMTcgMTI2LjkwNEMyNDMuOTE1IDEzNC43ODkgMjUzLjExIDE0NS45OTYgMjU4LjUzOSAxNTkuMTA4QzI2My45NjkgMTcyLjIyIDI2NS4zOSAxODYuNjQ4IDI2Mi42MjIgMjAwLjU2N0MyNTkuODU0IDIxNC40ODcgMjUzLjAyMSAyMjcuMjcyIDI0Mi45ODggMjM3LjMwOEMyMzIuOTU1IDI0Ny4zNDMgMjIwLjE3MyAyNTQuMTc3IDIwNi4yNTYgMjU2Ljk0NkMxOTIuMzQgMjU5LjcxNSAxNzcuOTE2IDI1OC4yOTQgMTY0LjgwNyAyNTIuODYzQzE1MS42OTkgMjQ3LjQzMiAxNDAuNDk1IDIzOC4yMzQgMTMyLjYxMiAyMjYuNDM0QzEyOS44MDggMjIyLjIzOCAxMjcuNDcgMjE3Ljc3OSAxMjUuNjIgMjEzLjEzN0MxMjAuMDU2IDE5OS4xNzQgMTMyLjcwNyAxODYuNTY4IDE0Ny43MzggMTg2LjU2OEwxNjUuMDQ0IDE4Ni41NjhDMTgwLjA3NiAxODYuNTY4IDE5Mi4yNjEgMTc0LjM4MyAxOTIuMjYxIDE1OS4zNTJMMTkyLjI2MSAxNDIuMDI4WlwiIGZpbGw9XCIjMzMzXCIgY2xhc3M9XCJzdmctZWxlbS0yXCIgPjwvcGF0aD5cbiAgICA8cGF0aCBkPVwiTTk1LjY1MjIgMTY0LjEzNUM5NS42NTIyIDE3OS4xNjcgODMuMjI3OSAxOTEuNzI1IDY4LjgwMTMgMTg3LjUwNUM1OS41MTQ1IDE4NC43ODggNTAuNjQzMiAxODAuNjYzIDQyLjUxMDYgMTc1LjIyN0MyNi43ODA2IDE2NC43MTQgMTQuNTIwNiAxNDkuNzcyIDcuMjgwODkgMTMyLjI4OUMwLjA0MTE4MyAxMTQuODA3IC0xLjg1MzA1IDk1LjU2OTcgMS44Mzc3MiA3Ny4wMTA0QzUuNTI4NDkgNTguNDUxMSAxNC42Mzg1IDQxLjQwMzMgMjguMDE1NyAyOC4wMjI4QzQxLjM5MyAxNC42NDIzIDU4LjQzNjYgNS41MzAwNiA3Ni45OTE0IDEuODM4MzlDOTUuNTQ2MSAtMS44NTMyOSAxMTQuNzc5IDAuMDQxNDE2MiAxMzIuMjU3IDcuMjgyOUMxNDkuNzM1IDE0LjUyNDQgMTY0LjY3NCAyNi43ODc0IDE3NS4xODQgNDIuNTIxMkMxODAuNjIgNTAuNjU3NiAxODQuNzQ0IDU5LjUzMzIgMTg3LjQ2IDY4LjgyNDVDMTkxLjY3OCA4My4yNTE5IDE3OS4xMTkgOTUuNjc1OSAxNjQuMDg4IDk1LjY3NTlMMTIyLjg2OSA5NS42NzU5QzEwNy44MzcgOTUuNjc1OSA5NS42NTIyIDEwNy44NjEgOTUuNjUyMiAxMjIuODkyTDk1LjY1MjIgMTY0LjEzNVpcIiBmaWxsPVwiIzMzM1wiIGNsYXNzPVwic3ZnLWVsZW0tM1wiPjwvcGF0aD5cbiAgPC9zdmc+XG4gIDxzcGFuIGNsYXNzPVwiaGlkZGVuXCI+Q29udGV4dCBJbnZhbGlkYXRlZCwgUHJlc3MgdG8gUmVsb2FkPC9zcGFuPlxuICBgO3JldHVybiBlLmlubmVySFRNTD1UP1QuY3JlYXRlSFRNTCh0KTp0LGUuc3R5bGUucG9pbnRlckV2ZW50cz1cIm5vbmVcIixlLnN0eWxlLnBvc2l0aW9uPVwiZml4ZWRcIixlLnN0eWxlLmJvdHRvbT1cIjE0LjdweFwiLGUuc3R5bGUucmlnaHQ9XCIxNC43cHhcIixlLnN0eWxlLmZvbnRGYW1pbHk9XCJzYW5zLXNlcmlmXCIsZS5zdHlsZS5kaXNwbGF5PVwiZmxleFwiLGUuc3R5bGUuanVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIixlLnN0eWxlLmFsaWduSXRlbXM9XCJjZW50ZXJcIixlLnN0eWxlLnBhZGRpbmc9XCIxNC43cHhcIixlLnN0eWxlLmdhcD1cIjE0LjdweFwiLGUuc3R5bGUuYm9yZGVyUmFkaXVzPVwiNC43cHhcIixlLnN0eWxlLnpJbmRleD1cIjIxNDc0ODM2NDdcIixlLnN0eWxlLm9wYWNpdHk9XCIwXCIsZS5zdHlsZS50cmFuc2l0aW9uPVwiYWxsIDAuNDdzIGVhc2UtaW4tb3V0XCIsZX1mdW5jdGlvbiBGKGUpe3JldHVybiBuZXcgUHJvbWlzZSh0PT57ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50PyhmKCkmJihkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoZSksdCgpKSx0KCkpOmdsb2JhbFRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwoKT0+e2YoKSYmZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKGUpLHQoKX0pfSl9dmFyIGs9KCk9PntsZXQgZTtpZihmKCkpe2xldCB0PSQoKTtlPUYodCl9cmV0dXJue3Nob3c6YXN5bmMoe3JlbG9hZEJ1dHRvbjp0PSExfT17fSk9Pnthd2FpdCBlO2xldCBvPWcoKTtvLnN0eWxlLm9wYWNpdHk9XCIxXCIsdCYmKG8ub25jbGljaz1yPT57ci5zdG9wUHJvcGFnYXRpb24oKSxnbG9iYWxUaGlzLmxvY2F0aW9uLnJlbG9hZCgpfSxvLnF1ZXJ5U2VsZWN0b3IoXCJzcGFuXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIiksby5zdHlsZS5jdXJzb3I9XCJwb2ludGVyXCIsby5zdHlsZS5wb2ludGVyRXZlbnRzPVwiYWxsXCIpfSxoaWRlOmFzeW5jKCk9Pnthd2FpdCBlO2xldCB0PWcoKTt0LnN0eWxlLm9wYWNpdHk9XCIwXCJ9fX07dmFyIE49YCR7RX0ke21vZHVsZS5pZH1fX2AsYSxBPSExLE09aygpO2FzeW5jIGZ1bmN0aW9uIGgoKXtjKFwiU2NyaXB0IFJ1bnRpbWUgLSByZWxvYWRpbmdcIiksQT9nbG9iYWxUaGlzLmxvY2F0aW9uPy5yZWxvYWQ/LigpOk0uc2hvdyh7cmVsb2FkQnV0dG9uOiEwfSl9ZnVuY3Rpb24gUigpe2E/LmRpc2Nvbm5lY3QoKSxhPWw/LnJ1bnRpbWUuY29ubmVjdCh7bmFtZTpOfSksYS5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCk9PntoKCl9KSxhLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihlPT57ZS5fX3BsYXNtb19jc19yZWxvYWRfXyYmaCgpLGUuX19wbGFzbW9fY3NfYWN0aXZlX3RhYl9fJiYoQT0hMCl9KX1mdW5jdGlvbiBXKCl7aWYobD8ucnVudGltZSl0cnl7UigpLHNldEludGVydmFsKFIsMjRlMyl9Y2F0Y2h7cmV0dXJufX1XKCk7UChhc3luYyBlPT57YyhcIlNjcmlwdCBydW50aW1lIC0gb24gdXBkYXRlZCBhc3NldHNcIiksZS5maWx0ZXIobz0+by5lbnZIYXNoPT09cy5lbnZIYXNoKS5zb21lKG89PkwobW9kdWxlLmJ1bmRsZSxvLmlkKSkmJihNLnNob3coKSxsPy5ydW50aW1lP2EucG9zdE1lc3NhZ2Uoe19fcGxhc21vX2NzX2NoYW5nZWRfXzohMH0pOnNldFRpbWVvdXQoKCk9PntoKCl9LDQ3MDApKX0pO1xuIiwiaW1wb3J0IHsgUHV6emxlIH0gZnJvbSAnQC9tb2RlbC9wdXp6bGUnO1xuaW1wb3J0IHR5cGUgeyBQbGFzbW9DU0NvbmZpZyB9IGZyb20gJ3BsYXNtbyc7XG5cbmV4cG9ydCBjb25zdCBjb25maWc6IFBsYXNtb0NTQ29uZmlnID0ge1xuICBhbGxfZnJhbWVzOiB0cnVlLFxuICBtYXRjaGVzOiBbJ2h0dHBzOi8vd3d3Lm55dGltZXMuY29tL2Nyb3Nzd29yZHMvZ2FtZS8qJ10sXG4gIHdvcmxkOiAnTUFJTidcbn07XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICBjb25zdCBwdXp6bGUgPSBuZXcgUHV6emxlKCk7XG4gIGNvbnNvbGUubG9nKHB1enpsZSk7XG59KTtcbiIsImltcG9ydCB7IGZpbmRDbHVlTGlzdEl0ZW1zQnlUaXRsZSB9IGZyb20gJ0AvbGliL2ZpbmRDbHVlTGlzdEl0ZW1zQnlUaXRsZSc7XG5pbXBvcnQgdHlwZSB7IEJvYXJkLCBDZWxsLCBDbHVlIH0gZnJvbSAnQC90eXBlcyc7XG5pbXBvcnQgdHlwZSB7IFB1enpsZSBhcyBQdXp6bGVUeXBlIH0gZnJvbSAnQC90eXBlcy9wdXp6bGUnO1xuXG5leHBvcnQgY2xhc3MgUHV6emxlIGltcGxlbWVudHMgUHV6emxlVHlwZSB7XG4gIF90eXBlOiAncHV6emxlJztcbiAgYm9hcmQ6IEJvYXJkO1xuICBjbHVlczogQ2x1ZVtdO1xuICBkYXRlOiBEYXRlO1xuICBkYXlPZldlZWs/OlxuICAgIHwgJ21vbmRheSdcbiAgICB8ICd0dWVzZGF5J1xuICAgIHwgJ3dlZG5lc2RheSdcbiAgICB8ICd0aHVyc2RheSdcbiAgICB8ICdmcmlkYXknXG4gICAgfCAnc2F0dXJkYXknXG4gICAgfCAnc3VuZGF5JztcbiAgdGl0bGU6IHN0cmluZztcbiAgdXJsPzogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX3R5cGUgPSAncHV6emxlJztcblxuICAgIHRoaXMuZnJvbURPTSgpO1xuICB9XG5cbiAgZnJvbURPTSgpIHtcbiAgICBjb25zdCBoZWFkZXJFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BvcnRhbC1nYW1lLWhlYWRlcicpO1xuICAgIHRoaXMudGl0bGUgPSBoZWFkZXJFbGVtZW50Py5xdWVyeVNlbGVjdG9yKFxuICAgICAgJy54d2RfX2RldGFpbHMtLXRpdGxlJ1xuICAgICk/LnRleHRDb250ZW50O1xuICAgIGNvbnN0IHB1enpsZURhdGUgPSBuZXcgRGF0ZShcbiAgICAgIERhdGUucGFyc2UoXG4gICAgICAgIGhlYWRlckVsZW1lbnQ/LnF1ZXJ5U2VsZWN0b3IoJy54d2RfX2RldGFpbHMtLWRhdGUnKT8udGV4dENvbnRlbnRcbiAgICAgIClcbiAgICApO1xuICAgIHRoaXMuZGF0ZSA9IHB1enpsZURhdGU7XG4gICAgLy8gR2V0IGRheSBvZiB0aGUgd2VlayBmcm9tIGRhdGUsIGUuZy4gXCJtb25kYXlcIlxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICB0aGlzLmRheU9mV2VlayA9IHB1enpsZURhdGVcbiAgICAgIC50b0xvY2FsZURhdGVTdHJpbmcoJ2VuLVVTJywgeyB3ZWVrZGF5OiAnbG9uZycgfSlcbiAgICAgIC50b0xvd2VyQ2FzZSgpO1xuXG4gICAgdGhpcy51cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcblxuICAgIGNvbnN0IGJvYXJkRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnI3B1enpsZSA+IHNlY3Rpb24ueHdkX19sYXlvdXRfY2x1ZUJhckFuZEJvYXJkID4gc2VjdGlvbi54d2RfX2JvYXJkJ1xuICAgICk7XG5cbiAgICBjb25zdCBjZWxsRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgJyN4d2QtYm9hcmQgPiBnW2RhdGEtZ3JvdXA9XCJjZWxsc1wiXSA+IGcueHdkX19jZWxsJ1xuICAgICk7XG4gICAgY29uc3QgY2VsbHM6IENlbGxbXSA9IFsuLi5jZWxsRWxlbWVudHNdLm1hcCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgIC8vIEdldCB0aGUgY2VsbCdzIGByZWN0YCBlbGVtZW50XG4gICAgICBjb25zdCBkYXRhRWxlbWVudCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcigncmVjdCcpO1xuICAgICAgY29uc3QgbnVtYmVyRWxlbWVudCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcigndGV4dFt0ZXh0LWFuY2hvcj1cInN0YXJ0XCJdJyk7XG4gICAgICBjb25zdCB2YWx1ZUVsZW1lbnQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RleHRbdGV4dC1hbmNob3I9XCJtaWRkbGVcIl0nKTtcblxuICAgICAgY29uc3QgY2VsbDogQ2VsbCA9IHtcbiAgICAgICAgX3R5cGU6ICdjZWxsJyxcbiAgICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgICByb290OiBlbGVtZW50LFxuICAgICAgICAgIGRhdGE6IGRhdGFFbGVtZW50LFxuICAgICAgICAgIG51bWJlcjogbnVtYmVyRWxlbWVudCxcbiAgICAgICAgICB2YWx1ZTogdmFsdWVFbGVtZW50XG4gICAgICAgIH0sXG4gICAgICAgIC8vIFBhcnNlIHRoZSBpZCBmcm9tIHRoZSBjZWxsJ3MgYGlkYCBhdHRyaWJ1dGUsIGluIHRoZSBmb3JtIG9mIFwiY2VsbC1pZC0wXCJcbiAgICAgICAgaWQ6IHBhcnNlSW50KGRhdGFFbGVtZW50LmlkLnNwbGl0KCctJykucG9wKCkpLFxuICAgICAgICBpc0VkaXRhYmxlOiAhZGF0YUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCd4d2RfX2NlbGwtLWJsb2NrJyksXG4gICAgICAgIGlzSGlnaGxpZ2h0ZWQ6IGRhdGFFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygneHdkX19jZWxsLS1oaWdobGlnaHRlZCcpLFxuICAgICAgICBpc1JlbGF0ZWQ6IGRhdGFFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygneHdkX19jZWxsLS1yZWxhdGVkJyksXG4gICAgICAgIGlzU2VsZWN0ZWQ6IGRhdGFFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygneHdkX19jZWxsLS1zZWxlY3RlZCcpLFxuICAgICAgICB2YWx1ZTogdmFsdWVFbGVtZW50Py5xdWVyeVNlbGVjdG9yKCd0ZXh0Jyk/LnRleHRDb250ZW50IHx8ICcnXG4gICAgICB9O1xuICAgICAgcmV0dXJuIGNlbGw7XG4gICAgfSk7XG5cbiAgICAvLyBncmlkIGVsZW1lbnRzXG4gICAgY29uc3QgZ3JpZEVsZW1lbnQgPSBib2FyZEVsZW1lbnQ/LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnI3h3ZC1ib2FyZCA+IGdbZGF0YS1ncm91cD1cImdyaWRcIl0nXG4gICAgKTtcblxuICAgIHRoaXMuYm9hcmQgPSB7XG4gICAgICBfdHlwZTogJ2JvYXJkJyxcbiAgICAgIGNlbGxzOiBjZWxscyxcbiAgICAgIGVsZW1lbnRzOiB7IHJvb3Q6IGJvYXJkRWxlbWVudCB9LFxuICAgICAgZ3JpZDoge1xuICAgICAgICBfdHlwZTogJ2dyaWQnLFxuICAgICAgICBlbGVtZW50czoge1xuICAgICAgICAgIHJvb3Q6IGdyaWRFbGVtZW50LFxuICAgICAgICAgIGJvcmRlcjogZ3JpZEVsZW1lbnQucXVlcnlTZWxlY3RvcigncmVjdCcpLFxuICAgICAgICAgIGxpbmVzOiBncmlkRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdwYXRoJylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLmNsdWVzID0gdGhpcy5idWlsZENsdWVzKCk7XG5cbiAgICAvLyBjb25zdCBkb3duQ2x1ZXM6IENsdWVbXSA9IEFycmF5LmZyb20oZG93bkNsdWVFbGVtZW50cywgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgLy9cbiAgICAvLyBwdXp6bGUuYm9hcmQgPSBqc29uLmJvYXJkO1xuICAgIC8vIHB1enpsZS5jbHVlcyA9IGpzb24uY2x1ZXM7XG4gICAgLy8gcHV6emxlLmRhdGUgPSBqc29uLmRhdGU7XG4gICAgLy8gcHV6emxlLmRheU9mV2VlayA9IGpzb24uZGF5T2ZXZWVrO1xuICAgIC8vIHB1enpsZS50aXRsZSA9IGpzb24udGl0bGU7XG4gICAgLy8gcHV6emxlLnVybCA9IGpzb24udXJsO1xuICAgIC8vIHJldHVybiBwdXp6bGU7XG4gIH1cblxuICBidWlsZENsdWVzKCkge1xuICAgIGNvbnN0IGFjcm9zc0NsdWVFbGVtZW50cyA9IGZpbmRDbHVlTGlzdEl0ZW1zQnlUaXRsZSgnQWNyb3NzJyk7XG4gICAgY29uc3QgZG93bkNsdWVFbGVtZW50cyA9IGZpbmRDbHVlTGlzdEl0ZW1zQnlUaXRsZSgnRG93bicpO1xuXG4gICAgY29uc3QgYWNyb3NzQ2x1ZXM6IENsdWVbXSA9IFsuLi5hY3Jvc3NDbHVlRWxlbWVudHNdLm1hcChcbiAgICAgIChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBudW1iZXIgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgJ3NwYW4ueHdkX19jbHVlLS1sYWJlbCdcbiAgICAgICAgKS50ZXh0Q29udGVudDtcbiAgICAgICAgY29uc3QgdGV4dCA9IGVsZW1lbnQucXVlcnlTZWxlY3Rvcignc3Bhbi54d2RfX2NsdWUtLXRleHQnKS50ZXh0Q29udGVudDtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBfdHlwZTogJ2NsdWUnLFxuICAgICAgICAgIGRpcmVjdGlvbjogJ2Fjcm9zcycsXG4gICAgICAgICAgaWQ6IGAke251bWJlcn1BYCxcbiAgICAgICAgICBudW1iZXI6IHBhcnNlSW50KG51bWJlciksXG4gICAgICAgICAgdGV4dFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICk7XG5cbiAgICBjb25zdCBkb3duQ2x1ZXM6IENsdWVbXSA9IFsuLi5kb3duQ2x1ZUVsZW1lbnRzXS5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBudW1iZXIgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NwYW4ueHdkX19jbHVlLS1sYWJlbCcpLnRleHRDb250ZW50O1xuICAgICAgY29uc3QgdGV4dCA9IGVsZW1lbnQucXVlcnlTZWxlY3Rvcignc3Bhbi54d2RfX2NsdWUtLXRleHQnKS50ZXh0Q29udGVudDtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIF90eXBlOiAnY2x1ZScsXG4gICAgICAgIGRpcmVjdGlvbjogJ2Rvd24nLFxuICAgICAgICBpZDogYCR7bnVtYmVyfURgLFxuICAgICAgICBudW1iZXI6IHBhcnNlSW50KG51bWJlciksXG4gICAgICAgIHRleHRcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICByZXR1cm4gWy4uLmFjcm9zc0NsdWVzLCAuLi5kb3duQ2x1ZXNdLnNvcnQoKGEsIGIpID0+IGEubnVtYmVyIC0gYi5udW1iZXIpO1xuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZmluZENsdWVMaXN0SXRlbXNCeVRpdGxlKHRpdGxlOiAnQWNyb3NzJyB8ICdEb3duJykge1xuICAvLyBGaW5kIGFsbCBoMyBlbGVtZW50cyB3aXRoaW4gJy54d2RfX2NsdWUtbGlzdC0td3JhcHBlcicgdGhhdCBtYXRjaCB0aGUgdGl0bGVcbiAgY29uc3QgbWF0Y2hpbmdIMyA9IEFycmF5LmZyb20oXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICdzZWN0aW9uLnh3ZF9fbGF5b3V0LS1jbHVlbGlzdHMgPiAueHdkX19jbHVlLWxpc3QtLXdyYXBwZXIgaDMnXG4gICAgKVxuICApLmZpbHRlcihoMyA9PiBoMy50ZXh0Q29udGVudC50cmltKCkgPT09IHRpdGxlKTtcblxuICAvLyBJbml0aWFsaXplIGFuIGFycmF5IHRvIGhvbGQgdGhlIGxpIGVsZW1lbnRzXG4gIGxldCBsaUVsZW1lbnRzOiBFbGVtZW50W10gPSBbXTtcblxuICAvLyBJZiBhIG1hdGNoaW5nIGgzIGVsZW1lbnQgaXMgZm91bmQsIHNlbGVjdCB0aGUgbGkgZWxlbWVudHMgd2l0aGluIHRoZSBzYW1lIHdyYXBwZXJcbiAgaWYgKG1hdGNoaW5nSDMubGVuZ3RoID4gMCkge1xuICAgIGxpRWxlbWVudHMgPSBBcnJheS5mcm9tKFxuICAgICAgbWF0Y2hpbmdIM1swXVxuICAgICAgICAuY2xvc2VzdCgnLnh3ZF9fY2x1ZS1saXN0LS13cmFwcGVyJylcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJ29sLnh3ZF9fY2x1ZS1saXN0LS1saXN0IGxpJylcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIGxpRWxlbWVudHM7XG59XG4iLCJleHBvcnRzLmludGVyb3BEZWZhdWx0ID0gZnVuY3Rpb24gKGEpIHtcbiAgcmV0dXJuIGEgJiYgYS5fX2VzTW9kdWxlID8gYSA6IHtkZWZhdWx0OiBhfTtcbn07XG5cbmV4cG9ydHMuZGVmaW5lSW50ZXJvcEZsYWcgPSBmdW5jdGlvbiAoYSkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoYSwgJ19fZXNNb2R1bGUnLCB7dmFsdWU6IHRydWV9KTtcbn07XG5cbmV4cG9ydHMuZXhwb3J0QWxsID0gZnVuY3Rpb24gKHNvdXJjZSwgZGVzdCkge1xuICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChrZXkgPT09ICdkZWZhdWx0JyB8fCBrZXkgPT09ICdfX2VzTW9kdWxlJyB8fCBkZXN0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZGVzdCwga2V5LCB7XG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2Vba2V5XTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiBkZXN0O1xufTtcblxuZXhwb3J0cy5leHBvcnQgPSBmdW5jdGlvbiAoZGVzdCwgZGVzdE5hbWUsIGdldCkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZGVzdCwgZGVzdE5hbWUsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZ2V0LFxuICB9KTtcbn07XG4iXSwibmFtZXMiOltdLCJ2ZXJzaW9uIjozLCJmaWxlIjoicHV6emxlLjlmMTdmZjg0LmpzLm1hcCJ9
 globalThis.define=__define;  })(globalThis.define);