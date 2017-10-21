// Compiled by ClojureScript 1.9.671 {}
goog.provide('horaro.db.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('horaro.db.core');
goog.require('horaro.workers.db');
goog.require('horaro.calendar.db');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("db","initialize-db","db/initialize-db",230999070),(function (_,___$1){
var db = cljs.core.merge.call(null,horaro.db.core.default_db,horaro.calendar.db.calendar_state);
var temp__6751__auto__ = horaro.db.core.load_local_storage.call(null);
if(cljs.core.truth_(temp__6751__auto__)){
var storage = temp__6751__auto__;
return cljs.core.merge.call(null,db,storage);
} else {
return db;
}
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("db","clean-db","db/clean-db",-228607358),(function (_,___$1){
return cljs.core.merge.call(null,horaro.db.core.default_db,horaro.workers.db.workers_state,horaro.calendar.db.calendar_state);
}));

//# sourceMappingURL=events.js.map?rel=1504091234832