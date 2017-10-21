// Compiled by ClojureScript 1.9.671 {}
goog.provide('horaro.workers.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('cuerdas.core');
goog.require('horaro.db.core');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("workers","toggle-modal","workers/toggle-modal",992048345),(function (db,p__26764){
var vec__26765 = p__26764;
var _ = cljs.core.nth.call(null,vec__26765,(0),null);
return cljs.core.update.call(null,db,new cljs.core.Keyword("workers","show-modal?","workers/show-modal?",-1486633862),cljs.core.not);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("workers","add-worker","workers/add-worker",1610290894),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.db.core.__GT_local_storage], null),(function (db,p__26768){
var vec__26769 = p__26768;
var _ = cljs.core.nth.call(null,vec__26769,(0),null);
var map__26772 = cljs.core.nth.call(null,vec__26769,(1),null);
var map__26772__$1 = ((((!((map__26772 == null)))?((((map__26772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26772.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26772):map__26772);
var worker = map__26772__$1;
var first_name = cljs.core.get.call(null,map__26772__$1,new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645));
var last_name = cljs.core.get.call(null,map__26772__$1,new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756));
return cljs.core.update.call(null,db,new cljs.core.Keyword("workers","list","workers/list",-759802960),cljs.core.conj,cljs.core.assoc.call(null,worker,new cljs.core.Keyword(null,"text","text",-1790561697),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cuerdas.core.upper.call(null,cljs.core.first.call(null,first_name))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cuerdas.core.upper.call(null,cljs.core.first.call(null,last_name)))].join('')));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("workers","remove-worker","workers/remove-worker",-2098945884),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.db.core.__GT_local_storage], null),(function (db,p__26775){
var vec__26776 = p__26775;
var _ = cljs.core.nth.call(null,vec__26776,(0),null);
var map__26779 = cljs.core.nth.call(null,vec__26776,(1),null);
var map__26779__$1 = ((((!((map__26779 == null)))?((((map__26779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26779.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26779):map__26779);
var worker = map__26779__$1;
var id = cljs.core.get.call(null,map__26779__$1,new cljs.core.Keyword("worker","id","worker/id",-48429354));
var new_list = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,((function (vec__26776,_,map__26779,map__26779__$1,worker,id){
return (function (p1__26774_SHARP_){
return cljs.core._EQ_.call(null,id,new cljs.core.Keyword("worker","id","worker/id",-48429354).cljs$core$IFn$_invoke$arity$1(p1__26774_SHARP_));
});})(vec__26776,_,map__26779,map__26779__$1,worker,id))
,new cljs.core.Keyword("workers","list","workers/list",-759802960).cljs$core$IFn$_invoke$arity$1(db)));
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("workers","list","workers/list",-759802960),new_list);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("workers","select-worker","workers/select-worker",-1350385288),(function (db,p__26781){
var vec__26782 = p__26781;
var _ = cljs.core.nth.call(null,vec__26782,(0),null);
var map__26785 = cljs.core.nth.call(null,vec__26782,(1),null);
var map__26785__$1 = ((((!((map__26785 == null)))?((((map__26785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26785.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26785):map__26785);
var worker = map__26785__$1;
var id = cljs.core.get.call(null,map__26785__$1,new cljs.core.Keyword("worker","id","worker/id",-48429354));
var last_selected = cljs.core.get.call(null,db,new cljs.core.Keyword("workers","selected-worker","workers/selected-worker",782562067));
if(cljs.core.not_EQ_.call(null,id,new cljs.core.Keyword("worker","id","worker/id",-48429354).cljs$core$IFn$_invoke$arity$1(last_selected))){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("workers","selected-worker","workers/selected-worker",782562067),worker);
} else {
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("workers","selected-worker","workers/selected-worker",782562067),null);
}
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("workers","edit-worker","workers/edit-worker",-1820236391),(function (db,p__26787){
var vec__26788 = p__26787;
var _ = cljs.core.nth.call(null,vec__26788,(0),null);
var worker = cljs.core.nth.call(null,vec__26788,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("workers","edit-worker","workers/edit-worker",-1820236391),worker);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("workers","update-first-name","workers/update-first-name",1417694177),(function (db,p__26791){
var vec__26792 = p__26791;
var _ = cljs.core.nth.call(null,vec__26792,(0),null);
var first_name = cljs.core.nth.call(null,vec__26792,(1),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","edit-worker","workers/edit-worker",-1820236391),new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645)], null),cuerdas.core.title.call(null,first_name));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("workers","update-last-name","workers/update-last-name",1333159913),(function (db,p__26795){
var vec__26796 = p__26795;
var _ = cljs.core.nth.call(null,vec__26796,(0),null);
var last_name = cljs.core.nth.call(null,vec__26796,(1),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","edit-worker","workers/edit-worker",-1820236391),new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756)], null),cuerdas.core.title.call(null,last_name));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("workers","update-working-hours","workers/update-working-hours",-466310286),(function (db,p__26799){
var vec__26800 = p__26799;
var _ = cljs.core.nth.call(null,vec__26800,(0),null);
var working_hours = cljs.core.nth.call(null,vec__26800,(1),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","edit-worker","workers/edit-worker",-1820236391),new cljs.core.Keyword("worker","working-hours","worker/working-hours",1463334629)], null),working_hours);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("workers","toggle-sallesman","workers/toggle-sallesman",-1083938444),(function (db,_){
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","edit-worker","workers/edit-worker",-1820236391),new cljs.core.Keyword("worker","salesman?","worker/salesman?",1360816952)], null),cljs.core.not);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("workers","toggle-butcher","workers/toggle-butcher",-1409844588),(function (db,_){
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","edit-worker","workers/edit-worker",-1820236391),new cljs.core.Keyword("worker","butcher?","worker/butcher?",1323679176)], null),cljs.core.not);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("workers","toggle-active","workers/toggle-active",487315299),(function (db,_){
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","edit-worker","workers/edit-worker",-1820236391),new cljs.core.Keyword("worker","active?","worker/active?",-1446658690)], null),cljs.core.not);
}));
re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","edited-worker","workers/edited-worker",202258022)], null));

//# sourceMappingURL=events.js.map?rel=1504091234875