// Compiled by ClojureScript 1.9.671 {}
goog.provide('horaro.db.core');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('cognitect.transit');
goog.require('goog.date.UtcDateTime');
horaro.db.core.transit_readers = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handlers","handlers",79528781),new cljs.core.PersistentArrayMap(null, 1, ["m",cognitect.transit.read_handler.call(null,(function (s){
return goog.date.UtcDateTime.fromTimestamp.call(null,s);
}))], null)], null);
horaro.db.core.transit_writers = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handlers","handlers",79528781),cljs.core.PersistentArrayMap.createAsIfByAssoc([goog.date.UtcDateTime,cognitect.transit.write_handler.call(null,cljs.core.constantly.call(null,"m"),(function (v){
return v.getTime();
}),(function (v){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v.getTime())].join('');
}))])], null);
horaro.db.core.__GT_json = (function horaro$db$core$__GT_json(db){
var w = cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570),horaro.db.core.transit_writers);
return cognitect.transit.write.call(null,w,db);
});
horaro.db.core.save_local_storage = (function horaro$db$core$save_local_storage(db){
return localStorage.setItem("horaro",horaro.db.core.__GT_json.call(null,db));
});
horaro.db.core.__GT_local_storage = re_frame.core.after.call(null,horaro.db.core.save_local_storage);
horaro.db.core.load_local_storage = (function horaro$db$core$load_local_storage(){
var r = cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570),horaro.db.core.transit_readers);
var G__13240 = localStorage.getItem("horaro");
if((G__13240 == null)){
return null;
} else {
return cognitect.transit.read.call(null,r,G__13240);
}
});
horaro.db.core.clear_local_storage = (function horaro$db$core$clear_local_storage(){
return horaro.db.core.save_local_storage.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
horaro.db.core.default_db = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("view","active-panel","view/active-panel",-1798962863),new cljs.core.Keyword("view","workers","view/workers",-2059637756),new cljs.core.Keyword("view","print?","view/print?",453157869),false,new cljs.core.Keyword("view","print-grid?","view/print-grid?",2070506642),false,new cljs.core.Keyword("view","print-list?","view/print-list?",1423785011),false], null);

//# sourceMappingURL=core.js.map?rel=1504091221632