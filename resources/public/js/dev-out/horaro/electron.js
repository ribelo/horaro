// Compiled by ClojureScript 1.9.671 {}
goog.provide('horaro.electron');
goog.require('cljs.core');
horaro.electron.electron = require("electron");
horaro.electron.remote = horaro.electron.electron.remote;
horaro.electron.app = horaro.electron.remote.app;
horaro.electron.browser_window = horaro.electron.remote.getCurrentWindow();
horaro.electron.web_contents = horaro.electron.remote.getCurrentWebContents();
horaro.electron.fs = horaro.electron.remote.require("fs");
horaro.electron.print_BANG_ = (function horaro$electron$print_BANG_(options){
return horaro.electron.web_contents.print(cljs.core.clj__GT_js.call(null,(function (){var or__7774__auto__ = options;
if(cljs.core.truth_(or__7774__auto__)){
return or__7774__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()));
});

//# sourceMappingURL=electron.js.map?rel=1504091221641