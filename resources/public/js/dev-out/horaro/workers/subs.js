// Compiled by ClojureScript 1.9.671 {}
goog.provide('horaro.workers.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('cljs_time.core');
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("workers","show-modal?","workers/show-modal?",-1486633862),(function (db,_){
return new cljs.core.Keyword("workers","show-modal?","workers/show-modal?",-1486633862).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("workers","list","workers/list",-759802960),(function (db,_){
return cljs.core.sort_by.call(null,cljs.core.juxt.call(null,new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645),new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756)),new cljs.core.Keyword("workers","list","workers/list",-759802960).cljs$core$IFn$_invoke$arity$1(db));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("workers","active","workers/active",470447359),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","list","workers/list",-759802960)], null),(function (workers){
return cljs.core.filterv.call(null,new cljs.core.Keyword("worker","active?","worker/active?",-1446658690),workers);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("workers","selected-worker","workers/selected-worker",782562067),(function (db,_){
return new cljs.core.Keyword("workers","selected-worker","workers/selected-worker",782562067).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("workers","edited-worker","workers/edited-worker",202258022),(function (db,_){
return new cljs.core.Keyword("workers","edit-worker","workers/edit-worker",-1820236391).cljs$core$IFn$_invoke$arity$1(db);
}));

//# sourceMappingURL=subs.js.map?rel=1504091234890