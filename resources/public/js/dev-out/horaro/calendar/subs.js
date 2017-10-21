// Compiled by ClojureScript 1.9.671 {}
goog.provide('horaro.calendar.subs');
goog.require('cljs.core');
goog.require('reagent.ratom');
goog.require('re_frame.core');
goog.require('cljs_time.core');
goog.require('cljs_time.periodic');
goog.require('cljs_time.format');
goog.require('horaro.calendar.utils');
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("calendar","show-modal?","calendar/show-modal?",836706831),(function (db,_){
return new cljs.core.Keyword("calendar","show-modal?","calendar/show-modal?",836706831).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("calendar","main-date","calendar/main-date",-1802410609),(function (db,_){
return new cljs.core.Keyword("calendar","main-date","calendar/main-date",-1802410609).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("calendar","short-date","calendar/short-date",-521407273),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("calendar","main-date","calendar/main-date",-1802410609)], null),(function (date){
return cljs_time.format.unparse.call(null,cljs_time.format.formatter.call(null,"yyyy-MM"),date);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("calendar","long-date","calendar/long-date",-1714371171),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("calendar","main-date","calendar/main-date",-1802410609)], null),(function (date){
return cljs_time.format.unparse.call(null,cljs_time.format.formatter.call(null,"yyyy-MM-dd"),date);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("calendar","days","calendar/days",-1840699318),(function (db,_){
return new cljs.core.Keyword("calendar","days","calendar/days",-1840699318).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("calendar","get","calendar/get",1911707621),(function (db,p__12598){
var vec__12599 = p__12598;
var _ = cljs.core.nth.call(null,vec__12599,(0),null);
var vec__12602 = cljs.core.nth.call(null,vec__12599,(1),null);
var date = cljs.core.nth.call(null,vec__12602,(0),null);
var map__12605 = cljs.core.nth.call(null,vec__12602,(1),null);
var map__12605__$1 = ((((!((map__12605 == null)))?((((map__12605.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12605.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12605):map__12605);
var id = cljs.core.get.call(null,map__12605__$1,new cljs.core.Keyword("worker","id","worker/id",-48429354));
var hour = cljs.core.nth.call(null,vec__12602,(2),null);
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("calendar","schedule","calendar/schedule",459050692),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(date)].join(''),id,hour], null));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("calendar","count-work-days","calendar/count-work-days",-1425599060),(function (db,_){
return cljs.core.count.call(null,cljs.core.remove.call(null,(function (p1__12607_SHARP_){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(7),null,(6),null], null), null).call(null,cljs_time.core.day_of_week.call(null,p1__12607_SHARP_));
}),new cljs.core.Keyword("calendar","days","calendar/days",-1840699318).cljs$core$IFn$_invoke$arity$1(db)));
}));
re_frame.core.clear_subscription_cache_BANG_.call(null);
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("calendar","worker-day-schedule","calendar/worker-day-schedule",1603993572),(function (db,p__12608){
var vec__12609 = p__12608;
var _ = cljs.core.nth.call(null,vec__12609,(0),null);
var vec__12612 = cljs.core.nth.call(null,vec__12609,(1),null);
var day = cljs.core.nth.call(null,vec__12612,(0),null);
var worker = cljs.core.nth.call(null,vec__12612,(1),null);
cljs.core.println.call(null,day,worker);

return horaro.calendar.utils.worker_day_schedule.call(null,worker,day,db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("calendar","count-work-hours","calendar/count-work-hours",-1336640784),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("calendar","count-work-days","calendar/count-work-days",-1425599060)], null),(function (days){
return (days * (8));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("calendar","count-worker-work-hours","calendar/count-worker-work-hours",-945134712),(function (db,p__12615){
var vec__12616 = p__12615;
var _ = cljs.core.nth.call(null,vec__12616,(0),null);
var worker = cljs.core.nth.call(null,vec__12616,(1),null);
var date = new cljs.core.Keyword("calendar","main-date","calendar/main-date",-1802410609).cljs$core$IFn$_invoke$arity$1(db);
return horaro.calendar.utils.count_worker_hours.call(null,worker,date,db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("calendar","print?","calendar/print?",30106438),(function (db,_){
return new cljs.core.Keyword("view","print?","view/print?",453157869).cljs$core$IFn$_invoke$arity$1(db);
}));

//# sourceMappingURL=subs.js.map?rel=1504091219873