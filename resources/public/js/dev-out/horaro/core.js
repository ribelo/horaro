// Compiled by ClojureScript 1.9.671 {}
goog.provide('horaro.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('horaro.ui');
goog.require('horaro.config');
goog.require('horaro.init');
horaro.core.dev_setup = (function horaro$core$dev_setup(){
if(horaro.config.debug_QMARK_){
cljs.core.enable_console_print_BANG_.call(null);

return cljs.core.println.call(null,"dev mode");
} else {
return null;
}
});
horaro.core.mount_root = (function horaro$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_.call(null);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.ui.main_panel], null),document.getElementById("app"));
});
horaro.core.init = (function horaro$core$init(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","initialize-db","db/initialize-db",230999070)], null));

horaro.core.dev_setup.call(null);

return horaro.core.mount_root.call(null);
});
goog.exportSymbol('horaro.core.init', horaro.core.init);

//# sourceMappingURL=core.js.map?rel=1504354093945