// Compiled by ClojureScript 1.9.671 {}
goog.provide('horaro.calendar.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('cljs_time.core');
goog.require('cljs_time.periodic');
goog.require('taoensso.encore');
goog.require('horaro.db.core');
goog.require('horaro.electron');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("calendar","toggle-modal","calendar/toggle-modal",412637042),(function (db,_){
return cljs.core.update.call(null,db,new cljs.core.Keyword("calendar","show-modal?","calendar/show-modal?",836706831),cljs.core.not);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("calendar","set-date","calendar/set-date",681851589),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.db.core.__GT_local_storage], null),(function (db,p__20639){
var vec__20640 = p__20639;
var _ = cljs.core.nth.call(null,vec__20640,(0),null);
var date = cljs.core.nth.call(null,vec__20640,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("calendar","main-date","calendar/main-date",-1802410609),date);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("calendar","next-month","calendar/next-month",2014614328),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.db.core.__GT_local_storage], null),(function (db,_){
var main_date = cljs_time.core.plus.call(null,new cljs.core.Keyword("calendar","main-date","calendar/main-date",-1802410609).cljs$core$IFn$_invoke$arity$1(db),cljs_time.core.months.call(null,(1)));
var days = cljs_time.periodic.periodic_seq.call(null,cljs_time.core.first_day_of_the_month.call(null,main_date),cljs_time.core.plus.call(null,cljs_time.core.last_day_of_the_month.call(null,main_date),cljs_time.core.days.call(null,(1))),cljs_time.core.days.call(null,(1)));
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("calendar","main-date","calendar/main-date",-1802410609),main_date,new cljs.core.Keyword("calendar","days","calendar/days",-1840699318),days);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("calendar","previous-month","calendar/previous-month",-128846051),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.db.core.__GT_local_storage], null),(function (db,_){
var main_date = cljs_time.core.minus.call(null,new cljs.core.Keyword("calendar","main-date","calendar/main-date",-1802410609).cljs$core$IFn$_invoke$arity$1(db),cljs_time.core.months.call(null,(1)));
var days = cljs_time.periodic.periodic_seq.call(null,cljs_time.core.first_day_of_the_month.call(null,main_date),cljs_time.core.plus.call(null,cljs_time.core.last_day_of_the_month.call(null,main_date),cljs_time.core.days.call(null,(1))),cljs_time.core.days.call(null,(1)));
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("calendar","main-date","calendar/main-date",-1802410609),main_date,new cljs.core.Keyword("calendar","days","calendar/days",-1840699318),days);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("calendar","set","calendar/set",-456582788),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.db.core.__GT_local_storage], null),(function (db,p__20643){
var vec__20644 = p__20643;
var _ = cljs.core.nth.call(null,vec__20644,(0),null);
var vec__20647 = cljs.core.nth.call(null,vec__20644,(1),null);
var date = cljs.core.nth.call(null,vec__20647,(0),null);
var map__20650 = cljs.core.nth.call(null,vec__20647,(1),null);
var map__20650__$1 = ((((!((map__20650 == null)))?((((map__20650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20650.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20650):map__20650);
var id = cljs.core.get.call(null,map__20650__$1,new cljs.core.Keyword("worker","id","worker/id",-48429354));
var hour = cljs.core.nth.call(null,vec__20647,(2),null);
var type = cljs.core.nth.call(null,vec__20644,(2),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("calendar","schedule","calendar/schedule",459050692),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(date)].join(''),id,hour], null),type);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("calendar","set-holiday","calendar/set-holiday",19064683),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.db.core.__GT_local_storage], null),(function (db,p__20652){
var vec__20653 = p__20652;
var _ = cljs.core.nth.call(null,vec__20653,(0),null);
var vec__20656 = cljs.core.nth.call(null,vec__20653,(1),null);
var date = cljs.core.nth.call(null,vec__20656,(0),null);
var map__20659 = cljs.core.nth.call(null,vec__20656,(1),null);
var map__20659__$1 = ((((!((map__20659 == null)))?((((map__20659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20659.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20659):map__20659);
var id = cljs.core.get.call(null,map__20659__$1,new cljs.core.Keyword("worker","id","worker/id",-48429354));
return cljs.core.reduce.call(null,((function (vec__20653,_,vec__20656,date,map__20659,map__20659__$1,id){
return (function (db__$1,hour){
return cljs.core.assoc_in.call(null,db__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("calendar","schedule","calendar/schedule",459050692),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(date)].join(''),id,hour], null),new cljs.core.Keyword(null,"holiday","holiday",148024903));
});})(vec__20653,_,vec__20656,date,map__20659,map__20659__$1,id))
,db,cljs.core.range.call(null,(6),(21)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("calendar","remove","calendar/remove",-1060530424),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.db.core.__GT_local_storage], null),(function (db,p__20661){
var vec__20662 = p__20661;
var _ = cljs.core.nth.call(null,vec__20662,(0),null);
var vec__20665 = cljs.core.nth.call(null,vec__20662,(1),null);
var date = cljs.core.nth.call(null,vec__20665,(0),null);
var map__20668 = cljs.core.nth.call(null,vec__20665,(1),null);
var map__20668__$1 = ((((!((map__20668 == null)))?((((map__20668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20668.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20668):map__20668);
var id = cljs.core.get.call(null,map__20668__$1,new cljs.core.Keyword("worker","id","worker/id",-48429354));
var hour = cljs.core.nth.call(null,vec__20665,(2),null);
return taoensso.encore.dissoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("calendar","schedule","calendar/schedule",459050692),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(date)].join(''),id], null),hour);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("calendar","clear","calendar/clear",2063814137),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.db.core.__GT_local_storage], null),(function (db,p__20670){
var vec__20671 = p__20670;
var _ = cljs.core.nth.call(null,vec__20671,(0),null);
var vec__20674 = cljs.core.nth.call(null,vec__20671,(1),null);
var date = cljs.core.nth.call(null,vec__20674,(0),null);
var map__20677 = cljs.core.nth.call(null,vec__20674,(1),null);
var map__20677__$1 = ((((!((map__20677 == null)))?((((map__20677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20677.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20677):map__20677);
var id = cljs.core.get.call(null,map__20677__$1,new cljs.core.Keyword("worker","id","worker/id",-48429354));
return cljs.core.reduce.call(null,((function (vec__20671,_,vec__20674,date,map__20677,map__20677__$1,id){
return (function (db__$1,hour){
return taoensso.encore.dissoc_in.call(null,db__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("calendar","schedule","calendar/schedule",459050692),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(date)].join(''),id], null),hour);
});})(vec__20671,_,vec__20674,date,map__20677,map__20677__$1,id))
,db,cljs.core.range.call(null,(6),(21)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("calendar","toggle-print","calendar/toggle-print",-1062343760),(function (db,_){
return cljs.core.update.call(null,db,new cljs.core.Keyword("view","print?","view/print?",453157869),cljs.core.not);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("calendar","electron-print","calendar/electron-print",240732069),(function (p__20679,_){
var map__20680 = p__20679;
var map__20680__$1 = ((((!((map__20680 == null)))?((((map__20680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20680.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20680):map__20680);
var db = cljs.core.get.call(null,map__20680__$1,new cljs.core.Keyword(null,"db","db",993250759));
return horaro.electron.print_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"printBackground","printBackground",1659433759),true], null));
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("calendar","print-schedule","calendar/print-schedule",-1099618663),(function (p__20682,_){
var map__20683 = p__20682;
var map__20683__$1 = ((((!((map__20683 == null)))?((((map__20683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20683.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20683):map__20683);
var db = cljs.core.get.call(null,map__20683__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("calendar","toggle-print","calendar/toggle-print",-1062343760)], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("calendar","electron-print","calendar/electron-print",240732069)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flush-dom","flush-dom",-933676816),true], null))], null),new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(1000),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("calendar","toggle-print","calendar/toggle-print",-1062343760)], null)], null)], null)], null);
}));

//# sourceMappingURL=events.js.map?rel=1504168595129