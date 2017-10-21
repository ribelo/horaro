// Compiled by ClojureScript 1.9.671 {}
goog.provide('app.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
app.core.electron = require("electron");
app.core.app = app.core.electron.app;
app.core.browser_window = app.core.electron.BrowserWindow;
app.core.crash_reporter = app.core.electron.crashReporter;
app.core.main_window = cljs.core.atom.call(null,null);
app.core.init_browser = (function app$core$init_browser(){
cljs.core.reset_BANG_.call(null,app.core.main_window,(new app.core.browser_window(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"width","width",-384071477),(800),new cljs.core.Keyword(null,"height","height",1025178622),(600),new cljs.core.Keyword(null,"minWidth","minWidth",-204293526),(800),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),(600),new cljs.core.Keyword(null,"autoHideMenuBar","autoHideMenuBar",1890757162),true,new cljs.core.Keyword(null,"useContentSize","useContentSize",-1420339392),true,new cljs.core.Keyword(null,"fullscreen","fullscreen",-4371054),false], null)))));

cljs.core.deref.call(null,app.core.main_window).maximize();

cljs.core.deref.call(null,app.core.main_window).loadURL([cljs.core.str.cljs$core$IFn$_invoke$arity$1("file://"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(__dirname),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/public/index.html")].join(''));

return cljs.core.deref.call(null,app.core.main_window).on("closed",(function (){
return cljs.core.reset_BANG_.call(null,app.core.main_window,null);
}));
});
app.core.crash_reporter.start(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"companyName","companyName",2030952346),"MyAwesomeCompany",new cljs.core.Keyword(null,"productName","productName",979802189),"MyAwesomeApp",new cljs.core.Keyword(null,"submitURL","submitURL",-169159433),"https://example.com/submit-url",new cljs.core.Keyword(null,"autoSubmit","autoSubmit",389197954),false], null)));
app.core.app.on("window-all-closed",(function (){
if(cljs.core._EQ_.call(null,process.platform,"darwin")){
return null;
} else {
return app.core.app.quit();
}
}));
app.core.app.on("ready",app.core.init_browser);
