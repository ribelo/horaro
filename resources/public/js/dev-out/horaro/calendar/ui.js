// Compiled by ClojureScript 1.9.671 {}
goog.provide('horaro.calendar.ui');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.ratom');
goog.require('re_frame.core');
goog.require('semantic_ui.core');
goog.require('taoensso.encore');
goog.require('cljs_time.core');
goog.require('cljs_time.format');
goog.require('cljs_time.periodic');
goog.require('cljs_time.predicates');
goog.require('cuerdas.core');
goog.require('horaro.flex');
goog.require('horaro.npm');
horaro.calendar.ui.date_scroller = (function horaro$calendar$ui$date_scroller(){
var main_date = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("calendar","main-date","calendar/main-date",-1802410609)], null));
var dates = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("calendar","days","calendar/days",-1840699318)], null));
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (main_date,dates){
return (function (){
var node = document.getElementById("dates-scroller");
return (node["scrollTop"] = ((node.scrollHeight / 2.5) | (0)));
});})(main_date,dates))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (main_date,dates){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.flex.scroller,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"dates-scroller",new cljs.core.Keyword(null,"height","height",1025178622),"500px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.flex.vbox,cljs.core.doall.call(null,(function (){var iter__29681__auto__ = ((function (main_date,dates){
return (function horaro$calendar$ui$date_scroller_$_iter__38614(s__38615){
return (new cljs.core.LazySeq(null,((function (main_date,dates){
return (function (){
var s__38615__$1 = s__38615;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__38615__$1);
if(temp__6753__auto__){
var s__38615__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38615__$2)){
var c__29679__auto__ = cljs.core.chunk_first.call(null,s__38615__$2);
var size__29680__auto__ = cljs.core.count.call(null,c__29679__auto__);
var b__38617 = cljs.core.chunk_buffer.call(null,size__29680__auto__);
if((function (){var i__38616 = (0);
while(true){
if((i__38616 < size__29680__auto__)){
var date = cljs.core._nth.call(null,c__29679__auto__,i__38616);
cljs.core.chunk_append.call(null,b__38617,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.flex.vbox,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.flex.gap,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),"2px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"primary","primary",817773892),cljs_time.core.equal_QMARK_.call(null,date,cljs.core.deref.call(null,main_date)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__38616,date,c__29679__auto__,size__29680__auto__,b__38617,s__38615__$2,temp__6753__auto__,main_date,dates){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("calendar","set-date","calendar/set-date",681851589),date], null));
});})(i__38616,date,c__29679__auto__,size__29680__auto__,b__38617,s__38615__$2,temp__6753__auto__,main_date,dates))
], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_time.format.unparse.call(null,cljs_time.format.formatter.call(null,"yyyy-MM-dd"),date))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.flex.gap,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),"2px"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),date], null)));

var G__38618 = (i__38616 + (1));
i__38616 = G__38618;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38617),horaro$calendar$ui$date_scroller_$_iter__38614.call(null,cljs.core.chunk_rest.call(null,s__38615__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38617),null);
}
} else {
var date = cljs.core.first.call(null,s__38615__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.flex.vbox,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.flex.gap,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),"2px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"primary","primary",817773892),cljs_time.core.equal_QMARK_.call(null,date,cljs.core.deref.call(null,main_date)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (date,s__38615__$2,temp__6753__auto__,main_date,dates){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("calendar","set-date","calendar/set-date",681851589),date], null));
});})(date,s__38615__$2,temp__6753__auto__,main_date,dates))
], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_time.format.unparse.call(null,cljs_time.format.formatter.call(null,"yyyy-MM-dd"),date))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.flex.gap,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),"2px"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),date], null)),horaro$calendar$ui$date_scroller_$_iter__38614.call(null,cljs.core.rest.call(null,s__38615__$2)));
}
} else {
return null;
}
break;
}
});})(main_date,dates))
,null,null));
});})(main_date,dates))
;
return iter__29681__auto__.call(null,cljs.core.deref.call(null,dates));
})())], null)], null);
});})(main_date,dates))
], null));
});
horaro.calendar.ui.date_select_modal = (function horaro$calendar$ui$date_select_modal(){
var show_modal_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("calendar","show-modal?","calendar/show-modal?",836706831)], null));
return ((function (show_modal_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.modal,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"open","open",-1763596448),cljs.core.deref.call(null,show_modal_QMARK_),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"on-close","on-close",-761178394),((function (show_modal_QMARK_){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("calendar","toggle-modal","calendar/toggle-modal",412637042)], null));
});})(show_modal_QMARK_))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"30%",new cljs.core.Keyword(null,"margin","margin",-995903681),"0px 0px 0px",new cljs.core.Keyword(null,"top","top",-1856271961),"10%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.modal_content,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.flex.vbox,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.calendar.ui.date_scroller], null)], null)], null)], null);
});
;})(show_modal_QMARK_))
});
horaro.calendar.ui.short_weekdays = new cljs.core.PersistentArrayMap(null, 7, [(1),"PN",(2),"WT",(3),"\u015AR",(4),"CZ",(5),"PT",(6),"SO",(7),"ND"], null);
horaro.calendar.ui.long_weekdays = new cljs.core.PersistentArrayMap(null, 7, [(1),"Poniedzia\u0142ek",(2),"Wtorek",(3),"\u015Aroda",(4),"Czwartek",(5),"Pi\u0105tek",(6),"Sobota",(7),"Niedziela"], null);
horaro.calendar.ui.long_months = cljs.core.PersistentHashMap.fromArrays([(7),(1),(4),(6),(3),(12),(2),(11),(9),(5),(10),(8)],["lipiec","stycze\u0144","kwiecie\u0144","czerwiec","marzec","grudzie\u0144","luty","listopad","wrzesie\u0144","maj","pa\u017Adziernik","sierpie\u0144"]);
horaro.calendar.ui.schedule_cell = (function horaro$calendar$ui$schedule_cell(date,worker,hour){
var type = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("calendar","get","calendar/get",1911707621),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,worker,hour], null)], null));
var print_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("calendar","print?","calendar/print?",30106438)], null));
var shop_background = "repeating-linear-gradient(\n                          -45deg,\n                          #016936,\n                          #016936 4px,\n                          #32CD32 4px,\n                          #32CD32 8px)";
var meats_background = "repeating-linear-gradient(\n                          -45deg,\n                          #FE9A76,\n                          #FE9A76 4px,\n                          #B03060 4px,\n                          #B03060 8px)";
var holiday_background = "repeating-linear-gradient(\n                          -45deg,\n                          #0E6EB8,\n                          #0E6EB8 4px,\n                          #EE82EE 4px,\n                          #EE82EE 8px)";
var print_background = "#A0A0A0";
return ((function (type,print_QMARK_,shop_background,meats_background,holiday_background,print_background){
return (function (date__$1,worker__$1,hour__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.flex.box,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"size","size",1098693007),"1 0 0px",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),(((cljs.core.deref.call(null,type) == null))?null:(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"shop","shop",-823644406),null], null), null).call(null,cljs.core.deref.call(null,type)))?((cljs.core.not.call(null,cljs.core.deref.call(null,print_QMARK_)))?shop_background:print_background):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"meats","meats",-1534200305),null], null), null).call(null,cljs.core.deref.call(null,type)))?((cljs.core.not.call(null,cljs.core.deref.call(null,print_QMARK_)))?meats_background:print_background):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"holiday","holiday",148024903),null], null), null).call(null,cljs.core.deref.call(null,type)))?((cljs.core.not.call(null,cljs.core.deref.call(null,print_QMARK_)))?holiday_background:null):null)))),new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (type,print_QMARK_,shop_background,meats_background,holiday_background,print_background){
return (function (){
var val = (((cljs.core.deref.call(null,type) == null))?new cljs.core.Keyword(null,"shop","shop",-823644406):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"shop","shop",-823644406),null], null), null).call(null,cljs.core.deref.call(null,type)))?new cljs.core.Keyword(null,"meats","meats",-1534200305):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"meats","meats",-1534200305),null], null), null).call(null,cljs.core.deref.call(null,type)))?null:(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"holiday","holiday",148024903),null], null), null).call(null,cljs.core.deref.call(null,type)))?new cljs.core.Keyword(null,"shop","shop",-823644406):null))));
var holiday_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"holiday","holiday",148024903),null], null), null).call(null,cljs.core.deref.call(null,type));
if(cljs.core.truth_(val)){
if(cljs.core.truth_(holiday_QMARK_)){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("calendar","clear","calendar/clear",2063814137),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [date__$1,worker__$1], null)], null));
} else {
}

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("calendar","set","calendar/set",-456582788),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [date__$1,worker__$1,hour__$1], null),val], null));
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("calendar","remove","calendar/remove",-1060530424),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [date__$1,worker__$1,hour__$1], null)], null));
}
});})(type,print_QMARK_,shop_background,meats_background,holiday_background,print_background))
,new cljs.core.Keyword(null,"on-double-click","on-double-click",1434856980),((function (type,print_QMARK_,shop_background,meats_background,holiday_background,print_background){
return (function (){
var temp__6751__auto__ = (((cljs.core.deref.call(null,type) == null))?null:(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"shop","shop",-823644406),null], null), null).call(null,cljs.core.deref.call(null,type)))?new cljs.core.Keyword(null,"shop","shop",-823644406):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"meats","meats",-1534200305),null], null), null).call(null,cljs.core.deref.call(null,type)))?new cljs.core.Keyword(null,"meats","meats",-1534200305):null)));
if(cljs.core.truth_(temp__6751__auto__)){
var val = temp__6751__auto__;
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("calendar","clear","calendar/clear",2063814137),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [date__$1,worker__$1], null)], null));

var seq__38619 = cljs.core.seq.call(null,cljs.core.range.call(null,hour__$1,(function (){var x__29163__auto__ = (hour__$1 + new cljs.core.Keyword("worker","working-hours","worker/working-hours",1463334629).cljs$core$IFn$_invoke$arity$1(worker__$1));
var y__29164__auto__ = (21);
return ((x__29163__auto__ < y__29164__auto__) ? x__29163__auto__ : y__29164__auto__);
})()));
var chunk__38620 = null;
var count__38621 = (0);
var i__38622 = (0);
while(true){
if((i__38622 < count__38621)){
var hour__$2 = cljs.core._nth.call(null,chunk__38620,i__38622);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("calendar","set","calendar/set",-456582788),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [date__$1,worker__$1,hour__$2], null),val], null));

var G__38623 = seq__38619;
var G__38624 = chunk__38620;
var G__38625 = count__38621;
var G__38626 = (i__38622 + (1));
seq__38619 = G__38623;
chunk__38620 = G__38624;
count__38621 = G__38625;
i__38622 = G__38626;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__38619);
if(temp__6753__auto__){
var seq__38619__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38619__$1)){
var c__29730__auto__ = cljs.core.chunk_first.call(null,seq__38619__$1);
var G__38627 = cljs.core.chunk_rest.call(null,seq__38619__$1);
var G__38628 = c__29730__auto__;
var G__38629 = cljs.core.count.call(null,c__29730__auto__);
var G__38630 = (0);
seq__38619 = G__38627;
chunk__38620 = G__38628;
count__38621 = G__38629;
i__38622 = G__38630;
continue;
} else {
var hour__$2 = cljs.core.first.call(null,seq__38619__$1);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("calendar","set","calendar/set",-456582788),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [date__$1,worker__$1,hour__$2], null),val], null));

var G__38631 = cljs.core.next.call(null,seq__38619__$1);
var G__38632 = null;
var G__38633 = (0);
var G__38634 = (0);
seq__38619 = G__38631;
chunk__38620 = G__38632;
count__38621 = G__38633;
i__38622 = G__38634;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("calendar","clear","calendar/clear",2063814137),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [date__$1,worker__$1], null)], null));
}
});})(type,print_QMARK_,shop_background,meats_background,holiday_background,print_background))
], null),null], null);
});
;})(type,print_QMARK_,shop_background,meats_background,holiday_background,print_background))
});
horaro.calendar.ui.schedule = (function horaro$calendar$ui$schedule(){
var print_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("calendar","print?","calendar/print?",30106438)], null));
var main_date = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("calendar","main-date","calendar/main-date",-1802410609)], null));
var long_date = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("calendar","long-date","calendar/long-date",-1714371171)], null));
var dates = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("calendar","days","calendar/days",-1840699318)], null));
var hours = cljs.core.range.call(null,(6),(21),(1));
var tmp_calendar = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var workers = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","active","workers/active",470447359)], null));
var day_height = reagent.ratom.make_reaction.call(null,((function (print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers){
return (function (){
return ((60) + (15.016 * cljs.core.count.call(null,cljs.core.deref.call(null,workers))));
});})(print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers))
);
return ((function (print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.flex.vbox,cljs.core.doall.call(null,(function (){var iter__29681__auto__ = ((function (print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height){
return (function horaro$calendar$ui$schedule_$_iter__38635(s__38636){
return (new cljs.core.LazySeq(null,((function (print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height){
return (function (){
var s__38636__$1 = s__38636;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__38636__$1);
if(temp__6753__auto__){
var s__38636__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38636__$2)){
var c__29679__auto__ = cljs.core.chunk_first.call(null,s__38636__$2);
var size__29680__auto__ = cljs.core.count.call(null,c__29679__auto__);
var b__38638 = cljs.core.chunk_buffer.call(null,size__29680__auto__);
if((function (){var i__38637 = (0);
while(true){
if((i__38637 < size__29680__auto__)){
var date = cljs.core._nth.call(null,c__29679__auto__,i__38637);
var weekday = cljs_time.core.day_of_week.call(null,date);
var weekday_name = cljs.core.get.call(null,horaro.calendar.ui.long_weekdays,weekday);
cljs.core.chunk_append.call(null,b__38638,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.npm.lazyload,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),cljs.core.deref.call(null,day_height),new cljs.core.Keyword(null,"offset-vertical","offset-vertical",-1312353419),cljs.core.deref.call(null,day_height)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.flex.vbox,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.flex.hbox,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.header,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"tiny","tiny",1577883515)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_time.format.unparse.call(null,cljs_time.format.formatter.call(null,"yyyy-MM-dd"),date)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(weekday_name)].join('')], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.flex.hbox,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.flex.box,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),((cljs.core.not.call(null,cljs.core.deref.call(null,print_QMARK_)))?"2 0 0px":"3 0 0px"),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.header,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"tiny","tiny",1577883515)], null),"Pracownik"], null)], null),cljs.core.doall.call(null,(function (){var iter__29681__auto__ = ((function (i__38637,weekday,weekday_name,date,c__29679__auto__,size__29680__auto__,b__38638,s__38636__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height){
return (function horaro$calendar$ui$schedule_$_iter__38635_$_iter__38639(s__38640){
return (new cljs.core.LazySeq(null,((function (i__38637,weekday,weekday_name,date,c__29679__auto__,size__29680__auto__,b__38638,s__38636__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height){
return (function (){
var s__38640__$1 = s__38640;
while(true){
var temp__6753__auto____$1 = cljs.core.seq.call(null,s__38640__$1);
if(temp__6753__auto____$1){
var s__38640__$2 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38640__$2)){
var c__29679__auto____$1 = cljs.core.chunk_first.call(null,s__38640__$2);
var size__29680__auto____$1 = cljs.core.count.call(null,c__29679__auto____$1);
var b__38642 = cljs.core.chunk_buffer.call(null,size__29680__auto____$1);
if((function (){var i__38641 = (0);
while(true){
if((i__38641 < size__29680__auto____$1)){
var hour = cljs.core._nth.call(null,c__29679__auto____$1,i__38641);
cljs.core.chunk_append.call(null,b__38642,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.flex.box,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),"1 0 0px",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.header,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"tiny","tiny",1577883515)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hour),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":00")].join('')], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hour)].join('')], null)));

var G__38679 = (i__38641 + (1));
i__38641 = G__38679;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38642),horaro$calendar$ui$schedule_$_iter__38635_$_iter__38639.call(null,cljs.core.chunk_rest.call(null,s__38640__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38642),null);
}
} else {
var hour = cljs.core.first.call(null,s__38640__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.flex.box,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),"1 0 0px",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.header,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"tiny","tiny",1577883515)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hour),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":00")].join('')], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hour)].join('')], null)),horaro$calendar$ui$schedule_$_iter__38635_$_iter__38639.call(null,cljs.core.rest.call(null,s__38640__$2)));
}
} else {
return null;
}
break;
}
});})(i__38637,weekday,weekday_name,date,c__29679__auto__,size__29680__auto__,b__38638,s__38636__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height))
,null,null));
});})(i__38637,weekday,weekday_name,date,c__29679__auto__,size__29680__auto__,b__38638,s__38636__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height))
;
return iter__29681__auto__.call(null,hours);
})()),(cljs.core.truth_(cljs.core.deref.call(null,print_QMARK_))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.flex.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),"1 0 0px"], null)], null))], null),cljs.core.doall.call(null,(function (){var iter__29681__auto__ = ((function (i__38637,weekday,weekday_name,date,c__29679__auto__,size__29680__auto__,b__38638,s__38636__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height){
return (function horaro$calendar$ui$schedule_$_iter__38635_$_iter__38643(s__38644){
return (new cljs.core.LazySeq(null,((function (i__38637,weekday,weekday_name,date,c__29679__auto__,size__29680__auto__,b__38638,s__38636__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height){
return (function (){
var s__38644__$1 = s__38644;
while(true){
var temp__6753__auto____$1 = cljs.core.seq.call(null,s__38644__$1);
if(temp__6753__auto____$1){
var s__38644__$2 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38644__$2)){
var c__29679__auto____$1 = cljs.core.chunk_first.call(null,s__38644__$2);
var size__29680__auto____$1 = cljs.core.count.call(null,c__29679__auto____$1);
var b__38646 = cljs.core.chunk_buffer.call(null,size__29680__auto____$1);
if((function (){var i__38645 = (0);
while(true){
if((i__38645 < size__29680__auto____$1)){
var map__38647 = cljs.core._nth.call(null,c__29679__auto____$1,i__38645);
var map__38647__$1 = ((((!((map__38647 == null)))?((((map__38647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38647.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38647):map__38647);
var worker = map__38647__$1;
var id = cljs.core.get.call(null,map__38647__$1,new cljs.core.Keyword("worker","id","worker/id",-48429354));
cljs.core.chunk_append.call(null,b__38646,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.flex.hbox,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.flex.hbox,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"size","size",1098693007),((cljs.core.not.call(null,cljs.core.deref.call(null,print_QMARK_)))?"2 0 0px":"3 0 0px"),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-around","space-around",248184132),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.flex.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.header,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"tiny","tiny",1577883515)], null),((cljs.core.not.call(null,cljs.core.deref.call(null,print_QMARK_)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645).cljs$core$IFn$_invoke$arity$1(worker)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756).cljs$core$IFn$_invoke$arity$1(worker))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".")].join(''):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645).cljs$core$IFn$_invoke$arity$1(worker)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756).cljs$core$IFn$_invoke$arity$1(worker))].join(''))], null)], null)], null),cljs.core.doall.call(null,(function (){var iter__29681__auto__ = ((function (i__38645,i__38637,map__38647,map__38647__$1,worker,id,c__29679__auto____$1,size__29680__auto____$1,b__38646,s__38644__$2,temp__6753__auto____$1,weekday,weekday_name,date,c__29679__auto__,size__29680__auto__,b__38638,s__38636__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height){
return (function horaro$calendar$ui$schedule_$_iter__38635_$_iter__38643_$_iter__38649(s__38650){
return (new cljs.core.LazySeq(null,((function (i__38645,i__38637,map__38647,map__38647__$1,worker,id,c__29679__auto____$1,size__29680__auto____$1,b__38646,s__38644__$2,temp__6753__auto____$1,weekday,weekday_name,date,c__29679__auto__,size__29680__auto__,b__38638,s__38636__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height){
return (function (){
var s__38650__$1 = s__38650;
while(true){
var temp__6753__auto____$2 = cljs.core.seq.call(null,s__38650__$1);
if(temp__6753__auto____$2){
var s__38650__$2 = temp__6753__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38650__$2)){
var c__29679__auto____$2 = cljs.core.chunk_first.call(null,s__38650__$2);
var size__29680__auto____$2 = cljs.core.count.call(null,c__29679__auto____$2);
var b__38652 = cljs.core.chunk_buffer.call(null,size__29680__auto____$2);
if((function (){var i__38651 = (0);
while(true){
if((i__38651 < size__29680__auto____$2)){
var hour = cljs.core._nth.call(null,c__29679__auto____$2,i__38651);
cljs.core.chunk_append.call(null,b__38652,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.calendar.ui.schedule_cell,date,worker,hour], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hour)].join('')], null)));

var G__38680 = (i__38651 + (1));
i__38651 = G__38680;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38652),horaro$calendar$ui$schedule_$_iter__38635_$_iter__38643_$_iter__38649.call(null,cljs.core.chunk_rest.call(null,s__38650__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38652),null);
}
} else {
var hour = cljs.core.first.call(null,s__38650__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.calendar.ui.schedule_cell,date,worker,hour], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hour)].join('')], null)),horaro$calendar$ui$schedule_$_iter__38635_$_iter__38643_$_iter__38649.call(null,cljs.core.rest.call(null,s__38650__$2)));
}
} else {
return null;
}
break;
}
});})(i__38645,i__38637,map__38647,map__38647__$1,worker,id,c__29679__auto____$1,size__29680__auto____$1,b__38646,s__38644__$2,temp__6753__auto____$1,weekday,weekday_name,date,c__29679__auto__,size__29680__auto__,b__38638,s__38636__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height))
,null,null));
});})(i__38645,i__38637,map__38647,map__38647__$1,worker,id,c__29679__auto____$1,size__29680__auto____$1,b__38646,s__38644__$2,temp__6753__auto____$1,weekday,weekday_name,date,c__29679__auto__,size__29680__auto__,b__38638,s__38636__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height))
;
return iter__29681__auto__.call(null,hours);
})()),(cljs.core.truth_(cljs.core.deref.call(null,print_QMARK_))?null:new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.flex.hbox,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),"1 0 0px",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-around","space-around",248184132),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"travel",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__38645,i__38637,map__38647,map__38647__$1,worker,id,c__29679__auto____$1,size__29680__auto____$1,b__38646,s__38644__$2,temp__6753__auto____$1,weekday,weekday_name,date,c__29679__auto__,size__29680__auto__,b__38638,s__38636__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("calendar","set-holiday","calendar/set-holiday",19064683),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,worker], null)], null));
});})(i__38645,i__38637,map__38647,map__38647__$1,worker,id,c__29679__auto____$1,size__29680__auto____$1,b__38646,s__38644__$2,temp__6753__auto____$1,weekday,weekday_name,date,c__29679__auto__,size__29680__auto__,b__38638,s__38636__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"delete calendar",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__38645,i__38637,map__38647,map__38647__$1,worker,id,c__29679__auto____$1,size__29680__auto____$1,b__38646,s__38644__$2,temp__6753__auto____$1,weekday,weekday_name,date,c__29679__auto__,size__29680__auto__,b__38638,s__38636__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("calendar","clear","calendar/clear",2063814137),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,worker], null)], null));
});})(i__38645,i__38637,map__38647,map__38647__$1,worker,id,c__29679__auto____$1,size__29680__auto____$1,b__38646,s__38644__$2,temp__6753__auto____$1,weekday,weekday_name,date,c__29679__auto__,size__29680__auto__,b__38638,s__38636__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height))
], null)], null)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null)));

var G__38681 = (i__38645 + (1));
i__38645 = G__38681;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38646),horaro$calendar$ui$schedule_$_iter__38635_$_iter__38643.call(null,cljs.core.chunk_rest.call(null,s__38644__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38646),null);
}
} else {
var map__38653 = cljs.core.first.call(null,s__38644__$2);
var map__38653__$1 = ((((!((map__38653 == null)))?((((map__38653.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38653.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38653):map__38653);
var worker = map__38653__$1;
var id = cljs.core.get.call(null,map__38653__$1,new cljs.core.Keyword("worker","id","worker/id",-48429354));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.flex.hbox,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.flex.hbox,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"size","size",1098693007),((cljs.core.not.call(null,cljs.core.deref.call(null,print_QMARK_)))?"2 0 0px":"3 0 0px"),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-around","space-around",248184132),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.flex.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.header,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"tiny","tiny",1577883515)], null),((cljs.core.not.call(null,cljs.core.deref.call(null,print_QMARK_)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645).cljs$core$IFn$_invoke$arity$1(worker)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756).cljs$core$IFn$_invoke$arity$1(worker))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".")].join(''):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645).cljs$core$IFn$_invoke$arity$1(worker)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756).cljs$core$IFn$_invoke$arity$1(worker))].join(''))], null)], null)], null),cljs.core.doall.call(null,(function (){var iter__29681__auto__ = ((function (i__38637,map__38653,map__38653__$1,worker,id,s__38644__$2,temp__6753__auto____$1,weekday,weekday_name,date,c__29679__auto__,size__29680__auto__,b__38638,s__38636__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height){
return (function horaro$calendar$ui$schedule_$_iter__38635_$_iter__38643_$_iter__38655(s__38656){
return (new cljs.core.LazySeq(null,((function (i__38637,map__38653,map__38653__$1,worker,id,s__38644__$2,temp__6753__auto____$1,weekday,weekday_name,date,c__29679__auto__,size__29680__auto__,b__38638,s__38636__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height){
return (function (){
var s__38656__$1 = s__38656;
while(true){
var temp__6753__auto____$2 = cljs.core.seq.call(null,s__38656__$1);
if(temp__6753__auto____$2){
var s__38656__$2 = temp__6753__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38656__$2)){
var c__29679__auto____$1 = cljs.core.chunk_first.call(null,s__38656__$2);
var size__29680__auto____$1 = cljs.core.count.call(null,c__29679__auto____$1);
var b__38658 = cljs.core.chunk_buffer.call(null,size__29680__auto____$1);
if((function (){var i__38657 = (0);
while(true){
if((i__38657 < size__29680__auto____$1)){
var hour = cljs.core._nth.call(null,c__29679__auto____$1,i__38657);
cljs.core.chunk_append.call(null,b__38658,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.calendar.ui.schedule_cell,date,worker,hour], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hour)].join('')], null)));

var G__38682 = (i__38657 + (1));
i__38657 = G__38682;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38658),horaro$calendar$ui$schedule_$_iter__38635_$_iter__38643_$_iter__38655.call(null,cljs.core.chunk_rest.call(null,s__38656__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38658),null);
}
} else {
var hour = cljs.core.first.call(null,s__38656__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.calendar.ui.schedule_cell,date,worker,hour], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hour)].join('')], null)),horaro$calendar$ui$schedule_$_iter__38635_$_iter__38643_$_iter__38655.call(null,cljs.core.rest.call(null,s__38656__$2)));
}
} else {
return null;
}
break;
}
});})(i__38637,map__38653,map__38653__$1,worker,id,s__38644__$2,temp__6753__auto____$1,weekday,weekday_name,date,c__29679__auto__,size__29680__auto__,b__38638,s__38636__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height))
,null,null));
});})(i__38637,map__38653,map__38653__$1,worker,id,s__38644__$2,temp__6753__auto____$1,weekday,weekday_name,date,c__29679__auto__,size__29680__auto__,b__38638,s__38636__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height))
;
return iter__29681__auto__.call(null,hours);
})()),(cljs.core.truth_(cljs.core.deref.call(null,print_QMARK_))?null:new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.flex.hbox,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),"1 0 0px",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-around","space-around",248184132),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"travel",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__38637,map__38653,map__38653__$1,worker,id,s__38644__$2,temp__6753__auto____$1,weekday,weekday_name,date,c__29679__auto__,size__29680__auto__,b__38638,s__38636__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("calendar","set-holiday","calendar/set-holiday",19064683),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,worker], null)], null));
});})(i__38637,map__38653,map__38653__$1,worker,id,s__38644__$2,temp__6753__auto____$1,weekday,weekday_name,date,c__29679__auto__,size__29680__auto__,b__38638,s__38636__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"delete calendar",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__38637,map__38653,map__38653__$1,worker,id,s__38644__$2,temp__6753__auto____$1,weekday,weekday_name,date,c__29679__auto__,size__29680__auto__,b__38638,s__38636__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("calendar","clear","calendar/clear",2063814137),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,worker], null)], null));
});})(i__38637,map__38653,map__38653__$1,worker,id,s__38644__$2,temp__6753__auto____$1,weekday,weekday_name,date,c__29679__auto__,size__29680__auto__,b__38638,s__38636__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height))
], null)], null)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null)),horaro$calendar$ui$schedule_$_iter__38635_$_iter__38643.call(null,cljs.core.rest.call(null,s__38644__$2)));
}
} else {
return null;
}
break;
}
});})(i__38637,weekday,weekday_name,date,c__29679__auto__,size__29680__auto__,b__38638,s__38636__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height))
,null,null));
});})(i__38637,weekday,weekday_name,date,c__29679__auto__,size__29680__auto__,b__38638,s__38636__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height))
;
return iter__29681__auto__.call(null,cljs.core.deref.call(null,workers));
})()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.flex.gap,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),"14px"], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(date)].join('')], null)));

var G__38683 = (i__38637 + (1));
i__38637 = G__38683;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38638),horaro$calendar$ui$schedule_$_iter__38635.call(null,cljs.core.chunk_rest.call(null,s__38636__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38638),null);
}
} else {
var date = cljs.core.first.call(null,s__38636__$2);
var weekday = cljs_time.core.day_of_week.call(null,date);
var weekday_name = cljs.core.get.call(null,horaro.calendar.ui.long_weekdays,weekday);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.npm.lazyload,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),cljs.core.deref.call(null,day_height),new cljs.core.Keyword(null,"offset-vertical","offset-vertical",-1312353419),cljs.core.deref.call(null,day_height)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.flex.vbox,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.flex.hbox,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.header,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"tiny","tiny",1577883515)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_time.format.unparse.call(null,cljs_time.format.formatter.call(null,"yyyy-MM-dd"),date)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(weekday_name)].join('')], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.flex.hbox,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.flex.box,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),((cljs.core.not.call(null,cljs.core.deref.call(null,print_QMARK_)))?"2 0 0px":"3 0 0px"),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.header,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"tiny","tiny",1577883515)], null),"Pracownik"], null)], null),cljs.core.doall.call(null,(function (){var iter__29681__auto__ = ((function (weekday,weekday_name,date,s__38636__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height){
return (function horaro$calendar$ui$schedule_$_iter__38635_$_iter__38659(s__38660){
return (new cljs.core.LazySeq(null,((function (weekday,weekday_name,date,s__38636__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height){
return (function (){
var s__38660__$1 = s__38660;
while(true){
var temp__6753__auto____$1 = cljs.core.seq.call(null,s__38660__$1);
if(temp__6753__auto____$1){
var s__38660__$2 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38660__$2)){
var c__29679__auto__ = cljs.core.chunk_first.call(null,s__38660__$2);
var size__29680__auto__ = cljs.core.count.call(null,c__29679__auto__);
var b__38662 = cljs.core.chunk_buffer.call(null,size__29680__auto__);
if((function (){var i__38661 = (0);
while(true){
if((i__38661 < size__29680__auto__)){
var hour = cljs.core._nth.call(null,c__29679__auto__,i__38661);
cljs.core.chunk_append.call(null,b__38662,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.flex.box,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),"1 0 0px",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.header,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"tiny","tiny",1577883515)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hour),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":00")].join('')], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hour)].join('')], null)));

var G__38684 = (i__38661 + (1));
i__38661 = G__38684;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38662),horaro$calendar$ui$schedule_$_iter__38635_$_iter__38659.call(null,cljs.core.chunk_rest.call(null,s__38660__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38662),null);
}
} else {
var hour = cljs.core.first.call(null,s__38660__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.flex.box,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),"1 0 0px",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.header,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"tiny","tiny",1577883515)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hour),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":00")].join('')], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hour)].join('')], null)),horaro$calendar$ui$schedule_$_iter__38635_$_iter__38659.call(null,cljs.core.rest.call(null,s__38660__$2)));
}
} else {
return null;
}
break;
}
});})(weekday,weekday_name,date,s__38636__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height))
,null,null));
});})(weekday,weekday_name,date,s__38636__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height))
;
return iter__29681__auto__.call(null,hours);
})()),(cljs.core.truth_(cljs.core.deref.call(null,print_QMARK_))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.flex.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),"1 0 0px"], null)], null))], null),cljs.core.doall.call(null,(function (){var iter__29681__auto__ = ((function (weekday,weekday_name,date,s__38636__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height){
return (function horaro$calendar$ui$schedule_$_iter__38635_$_iter__38663(s__38664){
return (new cljs.core.LazySeq(null,((function (weekday,weekday_name,date,s__38636__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height){
return (function (){
var s__38664__$1 = s__38664;
while(true){
var temp__6753__auto____$1 = cljs.core.seq.call(null,s__38664__$1);
if(temp__6753__auto____$1){
var s__38664__$2 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38664__$2)){
var c__29679__auto__ = cljs.core.chunk_first.call(null,s__38664__$2);
var size__29680__auto__ = cljs.core.count.call(null,c__29679__auto__);
var b__38666 = cljs.core.chunk_buffer.call(null,size__29680__auto__);
if((function (){var i__38665 = (0);
while(true){
if((i__38665 < size__29680__auto__)){
var map__38667 = cljs.core._nth.call(null,c__29679__auto__,i__38665);
var map__38667__$1 = ((((!((map__38667 == null)))?((((map__38667.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38667.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38667):map__38667);
var worker = map__38667__$1;
var id = cljs.core.get.call(null,map__38667__$1,new cljs.core.Keyword("worker","id","worker/id",-48429354));
cljs.core.chunk_append.call(null,b__38666,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.flex.hbox,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.flex.hbox,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"size","size",1098693007),((cljs.core.not.call(null,cljs.core.deref.call(null,print_QMARK_)))?"2 0 0px":"3 0 0px"),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-around","space-around",248184132),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.flex.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.header,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"tiny","tiny",1577883515)], null),((cljs.core.not.call(null,cljs.core.deref.call(null,print_QMARK_)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645).cljs$core$IFn$_invoke$arity$1(worker)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756).cljs$core$IFn$_invoke$arity$1(worker))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".")].join(''):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645).cljs$core$IFn$_invoke$arity$1(worker)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756).cljs$core$IFn$_invoke$arity$1(worker))].join(''))], null)], null)], null),cljs.core.doall.call(null,(function (){var iter__29681__auto__ = ((function (i__38665,map__38667,map__38667__$1,worker,id,c__29679__auto__,size__29680__auto__,b__38666,s__38664__$2,temp__6753__auto____$1,weekday,weekday_name,date,s__38636__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height){
return (function horaro$calendar$ui$schedule_$_iter__38635_$_iter__38663_$_iter__38669(s__38670){
return (new cljs.core.LazySeq(null,((function (i__38665,map__38667,map__38667__$1,worker,id,c__29679__auto__,size__29680__auto__,b__38666,s__38664__$2,temp__6753__auto____$1,weekday,weekday_name,date,s__38636__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height){
return (function (){
var s__38670__$1 = s__38670;
while(true){
var temp__6753__auto____$2 = cljs.core.seq.call(null,s__38670__$1);
if(temp__6753__auto____$2){
var s__38670__$2 = temp__6753__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38670__$2)){
var c__29679__auto____$1 = cljs.core.chunk_first.call(null,s__38670__$2);
var size__29680__auto____$1 = cljs.core.count.call(null,c__29679__auto____$1);
var b__38672 = cljs.core.chunk_buffer.call(null,size__29680__auto____$1);
if((function (){var i__38671 = (0);
while(true){
if((i__38671 < size__29680__auto____$1)){
var hour = cljs.core._nth.call(null,c__29679__auto____$1,i__38671);
cljs.core.chunk_append.call(null,b__38672,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.calendar.ui.schedule_cell,date,worker,hour], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hour)].join('')], null)));

var G__38685 = (i__38671 + (1));
i__38671 = G__38685;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38672),horaro$calendar$ui$schedule_$_iter__38635_$_iter__38663_$_iter__38669.call(null,cljs.core.chunk_rest.call(null,s__38670__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38672),null);
}
} else {
var hour = cljs.core.first.call(null,s__38670__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.calendar.ui.schedule_cell,date,worker,hour], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hour)].join('')], null)),horaro$calendar$ui$schedule_$_iter__38635_$_iter__38663_$_iter__38669.call(null,cljs.core.rest.call(null,s__38670__$2)));
}
} else {
return null;
}
break;
}
});})(i__38665,map__38667,map__38667__$1,worker,id,c__29679__auto__,size__29680__auto__,b__38666,s__38664__$2,temp__6753__auto____$1,weekday,weekday_name,date,s__38636__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height))
,null,null));
});})(i__38665,map__38667,map__38667__$1,worker,id,c__29679__auto__,size__29680__auto__,b__38666,s__38664__$2,temp__6753__auto____$1,weekday,weekday_name,date,s__38636__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height))
;
return iter__29681__auto__.call(null,hours);
})()),(cljs.core.truth_(cljs.core.deref.call(null,print_QMARK_))?null:new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.flex.hbox,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),"1 0 0px",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-around","space-around",248184132),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"travel",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__38665,map__38667,map__38667__$1,worker,id,c__29679__auto__,size__29680__auto__,b__38666,s__38664__$2,temp__6753__auto____$1,weekday,weekday_name,date,s__38636__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("calendar","set-holiday","calendar/set-holiday",19064683),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,worker], null)], null));
});})(i__38665,map__38667,map__38667__$1,worker,id,c__29679__auto__,size__29680__auto__,b__38666,s__38664__$2,temp__6753__auto____$1,weekday,weekday_name,date,s__38636__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"delete calendar",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__38665,map__38667,map__38667__$1,worker,id,c__29679__auto__,size__29680__auto__,b__38666,s__38664__$2,temp__6753__auto____$1,weekday,weekday_name,date,s__38636__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("calendar","clear","calendar/clear",2063814137),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,worker], null)], null));
});})(i__38665,map__38667,map__38667__$1,worker,id,c__29679__auto__,size__29680__auto__,b__38666,s__38664__$2,temp__6753__auto____$1,weekday,weekday_name,date,s__38636__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height))
], null)], null)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null)));

var G__38686 = (i__38665 + (1));
i__38665 = G__38686;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38666),horaro$calendar$ui$schedule_$_iter__38635_$_iter__38663.call(null,cljs.core.chunk_rest.call(null,s__38664__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38666),null);
}
} else {
var map__38673 = cljs.core.first.call(null,s__38664__$2);
var map__38673__$1 = ((((!((map__38673 == null)))?((((map__38673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38673.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38673):map__38673);
var worker = map__38673__$1;
var id = cljs.core.get.call(null,map__38673__$1,new cljs.core.Keyword("worker","id","worker/id",-48429354));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.flex.hbox,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.flex.hbox,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"size","size",1098693007),((cljs.core.not.call(null,cljs.core.deref.call(null,print_QMARK_)))?"2 0 0px":"3 0 0px"),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-around","space-around",248184132),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.flex.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.header,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"tiny","tiny",1577883515)], null),((cljs.core.not.call(null,cljs.core.deref.call(null,print_QMARK_)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645).cljs$core$IFn$_invoke$arity$1(worker)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756).cljs$core$IFn$_invoke$arity$1(worker))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".")].join(''):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645).cljs$core$IFn$_invoke$arity$1(worker)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756).cljs$core$IFn$_invoke$arity$1(worker))].join(''))], null)], null)], null),cljs.core.doall.call(null,(function (){var iter__29681__auto__ = ((function (map__38673,map__38673__$1,worker,id,s__38664__$2,temp__6753__auto____$1,weekday,weekday_name,date,s__38636__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height){
return (function horaro$calendar$ui$schedule_$_iter__38635_$_iter__38663_$_iter__38675(s__38676){
return (new cljs.core.LazySeq(null,((function (map__38673,map__38673__$1,worker,id,s__38664__$2,temp__6753__auto____$1,weekday,weekday_name,date,s__38636__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height){
return (function (){
var s__38676__$1 = s__38676;
while(true){
var temp__6753__auto____$2 = cljs.core.seq.call(null,s__38676__$1);
if(temp__6753__auto____$2){
var s__38676__$2 = temp__6753__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38676__$2)){
var c__29679__auto__ = cljs.core.chunk_first.call(null,s__38676__$2);
var size__29680__auto__ = cljs.core.count.call(null,c__29679__auto__);
var b__38678 = cljs.core.chunk_buffer.call(null,size__29680__auto__);
if((function (){var i__38677 = (0);
while(true){
if((i__38677 < size__29680__auto__)){
var hour = cljs.core._nth.call(null,c__29679__auto__,i__38677);
cljs.core.chunk_append.call(null,b__38678,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.calendar.ui.schedule_cell,date,worker,hour], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hour)].join('')], null)));

var G__38687 = (i__38677 + (1));
i__38677 = G__38687;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38678),horaro$calendar$ui$schedule_$_iter__38635_$_iter__38663_$_iter__38675.call(null,cljs.core.chunk_rest.call(null,s__38676__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38678),null);
}
} else {
var hour = cljs.core.first.call(null,s__38676__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.calendar.ui.schedule_cell,date,worker,hour], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hour)].join('')], null)),horaro$calendar$ui$schedule_$_iter__38635_$_iter__38663_$_iter__38675.call(null,cljs.core.rest.call(null,s__38676__$2)));
}
} else {
return null;
}
break;
}
});})(map__38673,map__38673__$1,worker,id,s__38664__$2,temp__6753__auto____$1,weekday,weekday_name,date,s__38636__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height))
,null,null));
});})(map__38673,map__38673__$1,worker,id,s__38664__$2,temp__6753__auto____$1,weekday,weekday_name,date,s__38636__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height))
;
return iter__29681__auto__.call(null,hours);
})()),(cljs.core.truth_(cljs.core.deref.call(null,print_QMARK_))?null:new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.flex.hbox,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),"1 0 0px",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-around","space-around",248184132),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"travel",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__38673,map__38673__$1,worker,id,s__38664__$2,temp__6753__auto____$1,weekday,weekday_name,date,s__38636__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("calendar","set-holiday","calendar/set-holiday",19064683),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,worker], null)], null));
});})(map__38673,map__38673__$1,worker,id,s__38664__$2,temp__6753__auto____$1,weekday,weekday_name,date,s__38636__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"delete calendar",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__38673,map__38673__$1,worker,id,s__38664__$2,temp__6753__auto____$1,weekday,weekday_name,date,s__38636__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("calendar","clear","calendar/clear",2063814137),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,worker], null)], null));
});})(map__38673,map__38673__$1,worker,id,s__38664__$2,temp__6753__auto____$1,weekday,weekday_name,date,s__38636__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height))
], null)], null)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null)),horaro$calendar$ui$schedule_$_iter__38635_$_iter__38663.call(null,cljs.core.rest.call(null,s__38664__$2)));
}
} else {
return null;
}
break;
}
});})(weekday,weekday_name,date,s__38636__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height))
,null,null));
});})(weekday,weekday_name,date,s__38636__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height))
;
return iter__29681__auto__.call(null,cljs.core.deref.call(null,workers));
})()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.flex.gap,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),"14px"], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(date)].join('')], null)),horaro$calendar$ui$schedule_$_iter__38635.call(null,cljs.core.rest.call(null,s__38636__$2)));
}
} else {
return null;
}
break;
}
});})(print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height))
,null,null));
});})(print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height))
;
return iter__29681__auto__.call(null,cljs.core.deref.call(null,dates));
})())], null);
});
;})(print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height))
});
horaro.calendar.ui.print_grid_cell = (function horaro$calendar$ui$print_grid_cell(date,worker,hour){
var type = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("calendar","get","calendar/get",1911707621),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,worker,hour], null)], null));
var print_background = "#A0A0A0";
return ((function (type,print_background){
return (function (date__$1,worker__$1,hour__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.table_cell,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),(((cljs.core.deref.call(null,type) == null))?null:(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shop","shop",-823644406),null,new cljs.core.Keyword(null,"meats","meats",-1534200305),null], null), null).call(null,cljs.core.deref.call(null,type)))?print_background:null))], null)], null),null], null);
});
;})(type,print_background))
});
horaro.calendar.ui.print_grid_schedule = (function horaro$calendar$ui$print_grid_schedule(){
var print_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("calendar","print?","calendar/print?",30106438)], null));
var main_date = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("calendar","main-date","calendar/main-date",-1802410609)], null));
var long_date = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("calendar","long-date","calendar/long-date",-1714371171)], null));
var dates = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("calendar","days","calendar/days",-1840699318)], null));
var hours = cljs.core.range.call(null,(6),(21),(1));
var tmp_calendar = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var workers = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","active","workers/active",470447359)], null));
var day_height = reagent.ratom.make_reaction.call(null,((function (print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers){
return (function (){
return ((60) + (15.016 * cljs.core.count.call(null,cljs.core.deref.call(null,workers))));
});})(print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers))
);
return ((function (print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.doall.call(null,(function (){var iter__29681__auto__ = ((function (print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height){
return (function horaro$calendar$ui$print_grid_schedule_$_iter__38688(s__38689){
return (new cljs.core.LazySeq(null,((function (print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height){
return (function (){
var s__38689__$1 = s__38689;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__38689__$1);
if(temp__6753__auto__){
var s__38689__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38689__$2)){
var c__29679__auto__ = cljs.core.chunk_first.call(null,s__38689__$2);
var size__29680__auto__ = cljs.core.count.call(null,c__29679__auto__);
var b__38691 = cljs.core.chunk_buffer.call(null,size__29680__auto__);
if((function (){var i__38690 = (0);
while(true){
if((i__38690 < size__29680__auto__)){
var date = cljs.core._nth.call(null,c__29679__auto__,i__38690);
var weekday = cljs_time.core.day_of_week.call(null,date);
var weekday_name = cljs.core.get.call(null,horaro.calendar.ui.long_weekdays,weekday);
cljs.core.chunk_append.call(null,b__38691,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"avoid-break"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.flex.hbox,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.header,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"tiny","tiny",1577883515)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_time.format.unparse.call(null,cljs_time.format.formatter.call(null,"yyyy-MM-dd"),date)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(weekday_name)].join('')], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.table,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"celled","celled",-1969088093),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.table_header,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.table_row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.table_header_cell,"Pracownik"], null),cljs.core.doall.call(null,(function (){var iter__29681__auto__ = ((function (i__38690,weekday,weekday_name,date,c__29679__auto__,size__29680__auto__,b__38691,s__38689__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height){
return (function horaro$calendar$ui$print_grid_schedule_$_iter__38688_$_iter__38692(s__38693){
return (new cljs.core.LazySeq(null,((function (i__38690,weekday,weekday_name,date,c__29679__auto__,size__29680__auto__,b__38691,s__38689__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height){
return (function (){
var s__38693__$1 = s__38693;
while(true){
var temp__6753__auto____$1 = cljs.core.seq.call(null,s__38693__$1);
if(temp__6753__auto____$1){
var s__38693__$2 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38693__$2)){
var c__29679__auto____$1 = cljs.core.chunk_first.call(null,s__38693__$2);
var size__29680__auto____$1 = cljs.core.count.call(null,c__29679__auto____$1);
var b__38695 = cljs.core.chunk_buffer.call(null,size__29680__auto____$1);
if((function (){var i__38694 = (0);
while(true){
if((i__38694 < size__29680__auto____$1)){
var hour = cljs.core._nth.call(null,c__29679__auto____$1,i__38694);
cljs.core.chunk_append.call(null,b__38695,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.table_header_cell,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hour),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":00")].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hour)].join('')], null)));

var G__38732 = (i__38694 + (1));
i__38694 = G__38732;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38695),horaro$calendar$ui$print_grid_schedule_$_iter__38688_$_iter__38692.call(null,cljs.core.chunk_rest.call(null,s__38693__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38695),null);
}
} else {
var hour = cljs.core.first.call(null,s__38693__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.table_header_cell,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hour),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":00")].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hour)].join('')], null)),horaro$calendar$ui$print_grid_schedule_$_iter__38688_$_iter__38692.call(null,cljs.core.rest.call(null,s__38693__$2)));
}
} else {
return null;
}
break;
}
});})(i__38690,weekday,weekday_name,date,c__29679__auto__,size__29680__auto__,b__38691,s__38689__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height))
,null,null));
});})(i__38690,weekday,weekday_name,date,c__29679__auto__,size__29680__auto__,b__38691,s__38689__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height))
;
return iter__29681__auto__.call(null,hours);
})())], null)], null),cljs.core.doall.call(null,(function (){var iter__29681__auto__ = ((function (i__38690,weekday,weekday_name,date,c__29679__auto__,size__29680__auto__,b__38691,s__38689__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height){
return (function horaro$calendar$ui$print_grid_schedule_$_iter__38688_$_iter__38696(s__38697){
return (new cljs.core.LazySeq(null,((function (i__38690,weekday,weekday_name,date,c__29679__auto__,size__29680__auto__,b__38691,s__38689__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height){
return (function (){
var s__38697__$1 = s__38697;
while(true){
var temp__6753__auto____$1 = cljs.core.seq.call(null,s__38697__$1);
if(temp__6753__auto____$1){
var s__38697__$2 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38697__$2)){
var c__29679__auto____$1 = cljs.core.chunk_first.call(null,s__38697__$2);
var size__29680__auto____$1 = cljs.core.count.call(null,c__29679__auto____$1);
var b__38699 = cljs.core.chunk_buffer.call(null,size__29680__auto____$1);
if((function (){var i__38698 = (0);
while(true){
if((i__38698 < size__29680__auto____$1)){
var map__38700 = cljs.core._nth.call(null,c__29679__auto____$1,i__38698);
var map__38700__$1 = ((((!((map__38700 == null)))?((((map__38700.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38700.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38700):map__38700);
var worker = map__38700__$1;
var id = cljs.core.get.call(null,map__38700__$1,new cljs.core.Keyword("worker","id","worker/id",-48429354));
cljs.core.chunk_append.call(null,b__38699,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.table_row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.table_cell,((cljs.core.not.call(null,cljs.core.deref.call(null,print_QMARK_)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645).cljs$core$IFn$_invoke$arity$1(worker)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756).cljs$core$IFn$_invoke$arity$1(worker))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".")].join(''):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645).cljs$core$IFn$_invoke$arity$1(worker)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756).cljs$core$IFn$_invoke$arity$1(worker))].join(''))], null),(function (){var iter__29681__auto__ = ((function (i__38698,i__38690,map__38700,map__38700__$1,worker,id,c__29679__auto____$1,size__29680__auto____$1,b__38699,s__38697__$2,temp__6753__auto____$1,weekday,weekday_name,date,c__29679__auto__,size__29680__auto__,b__38691,s__38689__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height){
return (function horaro$calendar$ui$print_grid_schedule_$_iter__38688_$_iter__38696_$_iter__38702(s__38703){
return (new cljs.core.LazySeq(null,((function (i__38698,i__38690,map__38700,map__38700__$1,worker,id,c__29679__auto____$1,size__29680__auto____$1,b__38699,s__38697__$2,temp__6753__auto____$1,weekday,weekday_name,date,c__29679__auto__,size__29680__auto__,b__38691,s__38689__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height){
return (function (){
var s__38703__$1 = s__38703;
while(true){
var temp__6753__auto____$2 = cljs.core.seq.call(null,s__38703__$1);
if(temp__6753__auto____$2){
var s__38703__$2 = temp__6753__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38703__$2)){
var c__29679__auto____$2 = cljs.core.chunk_first.call(null,s__38703__$2);
var size__29680__auto____$2 = cljs.core.count.call(null,c__29679__auto____$2);
var b__38705 = cljs.core.chunk_buffer.call(null,size__29680__auto____$2);
if((function (){var i__38704 = (0);
while(true){
if((i__38704 < size__29680__auto____$2)){
var hour = cljs.core._nth.call(null,c__29679__auto____$2,i__38704);
cljs.core.chunk_append.call(null,b__38705,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.calendar.ui.print_grid_cell,date,worker,hour], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hour)].join('')], null)));

var G__38733 = (i__38704 + (1));
i__38704 = G__38733;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38705),horaro$calendar$ui$print_grid_schedule_$_iter__38688_$_iter__38696_$_iter__38702.call(null,cljs.core.chunk_rest.call(null,s__38703__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38705),null);
}
} else {
var hour = cljs.core.first.call(null,s__38703__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.calendar.ui.print_grid_cell,date,worker,hour], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hour)].join('')], null)),horaro$calendar$ui$print_grid_schedule_$_iter__38688_$_iter__38696_$_iter__38702.call(null,cljs.core.rest.call(null,s__38703__$2)));
}
} else {
return null;
}
break;
}
});})(i__38698,i__38690,map__38700,map__38700__$1,worker,id,c__29679__auto____$1,size__29680__auto____$1,b__38699,s__38697__$2,temp__6753__auto____$1,weekday,weekday_name,date,c__29679__auto__,size__29680__auto__,b__38691,s__38689__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height))
,null,null));
});})(i__38698,i__38690,map__38700,map__38700__$1,worker,id,c__29679__auto____$1,size__29680__auto____$1,b__38699,s__38697__$2,temp__6753__auto____$1,weekday,weekday_name,date,c__29679__auto__,size__29680__auto__,b__38691,s__38689__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height))
;
return iter__29681__auto__.call(null,hours);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null)));

var G__38734 = (i__38698 + (1));
i__38698 = G__38734;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38699),horaro$calendar$ui$print_grid_schedule_$_iter__38688_$_iter__38696.call(null,cljs.core.chunk_rest.call(null,s__38697__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38699),null);
}
} else {
var map__38706 = cljs.core.first.call(null,s__38697__$2);
var map__38706__$1 = ((((!((map__38706 == null)))?((((map__38706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38706.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38706):map__38706);
var worker = map__38706__$1;
var id = cljs.core.get.call(null,map__38706__$1,new cljs.core.Keyword("worker","id","worker/id",-48429354));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.table_row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.table_cell,((cljs.core.not.call(null,cljs.core.deref.call(null,print_QMARK_)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645).cljs$core$IFn$_invoke$arity$1(worker)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756).cljs$core$IFn$_invoke$arity$1(worker))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".")].join(''):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645).cljs$core$IFn$_invoke$arity$1(worker)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756).cljs$core$IFn$_invoke$arity$1(worker))].join(''))], null),(function (){var iter__29681__auto__ = ((function (i__38690,map__38706,map__38706__$1,worker,id,s__38697__$2,temp__6753__auto____$1,weekday,weekday_name,date,c__29679__auto__,size__29680__auto__,b__38691,s__38689__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height){
return (function horaro$calendar$ui$print_grid_schedule_$_iter__38688_$_iter__38696_$_iter__38708(s__38709){
return (new cljs.core.LazySeq(null,((function (i__38690,map__38706,map__38706__$1,worker,id,s__38697__$2,temp__6753__auto____$1,weekday,weekday_name,date,c__29679__auto__,size__29680__auto__,b__38691,s__38689__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height){
return (function (){
var s__38709__$1 = s__38709;
while(true){
var temp__6753__auto____$2 = cljs.core.seq.call(null,s__38709__$1);
if(temp__6753__auto____$2){
var s__38709__$2 = temp__6753__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38709__$2)){
var c__29679__auto____$1 = cljs.core.chunk_first.call(null,s__38709__$2);
var size__29680__auto____$1 = cljs.core.count.call(null,c__29679__auto____$1);
var b__38711 = cljs.core.chunk_buffer.call(null,size__29680__auto____$1);
if((function (){var i__38710 = (0);
while(true){
if((i__38710 < size__29680__auto____$1)){
var hour = cljs.core._nth.call(null,c__29679__auto____$1,i__38710);
cljs.core.chunk_append.call(null,b__38711,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.calendar.ui.print_grid_cell,date,worker,hour], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hour)].join('')], null)));

var G__38735 = (i__38710 + (1));
i__38710 = G__38735;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38711),horaro$calendar$ui$print_grid_schedule_$_iter__38688_$_iter__38696_$_iter__38708.call(null,cljs.core.chunk_rest.call(null,s__38709__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38711),null);
}
} else {
var hour = cljs.core.first.call(null,s__38709__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.calendar.ui.print_grid_cell,date,worker,hour], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hour)].join('')], null)),horaro$calendar$ui$print_grid_schedule_$_iter__38688_$_iter__38696_$_iter__38708.call(null,cljs.core.rest.call(null,s__38709__$2)));
}
} else {
return null;
}
break;
}
});})(i__38690,map__38706,map__38706__$1,worker,id,s__38697__$2,temp__6753__auto____$1,weekday,weekday_name,date,c__29679__auto__,size__29680__auto__,b__38691,s__38689__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height))
,null,null));
});})(i__38690,map__38706,map__38706__$1,worker,id,s__38697__$2,temp__6753__auto____$1,weekday,weekday_name,date,c__29679__auto__,size__29680__auto__,b__38691,s__38689__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height))
;
return iter__29681__auto__.call(null,hours);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null)),horaro$calendar$ui$print_grid_schedule_$_iter__38688_$_iter__38696.call(null,cljs.core.rest.call(null,s__38697__$2)));
}
} else {
return null;
}
break;
}
});})(i__38690,weekday,weekday_name,date,c__29679__auto__,size__29680__auto__,b__38691,s__38689__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height))
,null,null));
});})(i__38690,weekday,weekday_name,date,c__29679__auto__,size__29680__auto__,b__38691,s__38689__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height))
;
return iter__29681__auto__.call(null,cljs.core.deref.call(null,workers));
})())], null)], null));

var G__38736 = (i__38690 + (1));
i__38690 = G__38736;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38691),horaro$calendar$ui$print_grid_schedule_$_iter__38688.call(null,cljs.core.chunk_rest.call(null,s__38689__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38691),null);
}
} else {
var date = cljs.core.first.call(null,s__38689__$2);
var weekday = cljs_time.core.day_of_week.call(null,date);
var weekday_name = cljs.core.get.call(null,horaro.calendar.ui.long_weekdays,weekday);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"avoid-break"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.flex.hbox,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.header,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"tiny","tiny",1577883515)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_time.format.unparse.call(null,cljs_time.format.formatter.call(null,"yyyy-MM-dd"),date)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(weekday_name)].join('')], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.table,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"celled","celled",-1969088093),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.table_header,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.table_row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.table_header_cell,"Pracownik"], null),cljs.core.doall.call(null,(function (){var iter__29681__auto__ = ((function (weekday,weekday_name,date,s__38689__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height){
return (function horaro$calendar$ui$print_grid_schedule_$_iter__38688_$_iter__38712(s__38713){
return (new cljs.core.LazySeq(null,((function (weekday,weekday_name,date,s__38689__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height){
return (function (){
var s__38713__$1 = s__38713;
while(true){
var temp__6753__auto____$1 = cljs.core.seq.call(null,s__38713__$1);
if(temp__6753__auto____$1){
var s__38713__$2 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38713__$2)){
var c__29679__auto__ = cljs.core.chunk_first.call(null,s__38713__$2);
var size__29680__auto__ = cljs.core.count.call(null,c__29679__auto__);
var b__38715 = cljs.core.chunk_buffer.call(null,size__29680__auto__);
if((function (){var i__38714 = (0);
while(true){
if((i__38714 < size__29680__auto__)){
var hour = cljs.core._nth.call(null,c__29679__auto__,i__38714);
cljs.core.chunk_append.call(null,b__38715,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.table_header_cell,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hour),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":00")].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hour)].join('')], null)));

var G__38737 = (i__38714 + (1));
i__38714 = G__38737;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38715),horaro$calendar$ui$print_grid_schedule_$_iter__38688_$_iter__38712.call(null,cljs.core.chunk_rest.call(null,s__38713__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38715),null);
}
} else {
var hour = cljs.core.first.call(null,s__38713__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.table_header_cell,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hour),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":00")].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hour)].join('')], null)),horaro$calendar$ui$print_grid_schedule_$_iter__38688_$_iter__38712.call(null,cljs.core.rest.call(null,s__38713__$2)));
}
} else {
return null;
}
break;
}
});})(weekday,weekday_name,date,s__38689__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height))
,null,null));
});})(weekday,weekday_name,date,s__38689__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height))
;
return iter__29681__auto__.call(null,hours);
})())], null)], null),cljs.core.doall.call(null,(function (){var iter__29681__auto__ = ((function (weekday,weekday_name,date,s__38689__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height){
return (function horaro$calendar$ui$print_grid_schedule_$_iter__38688_$_iter__38716(s__38717){
return (new cljs.core.LazySeq(null,((function (weekday,weekday_name,date,s__38689__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height){
return (function (){
var s__38717__$1 = s__38717;
while(true){
var temp__6753__auto____$1 = cljs.core.seq.call(null,s__38717__$1);
if(temp__6753__auto____$1){
var s__38717__$2 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38717__$2)){
var c__29679__auto__ = cljs.core.chunk_first.call(null,s__38717__$2);
var size__29680__auto__ = cljs.core.count.call(null,c__29679__auto__);
var b__38719 = cljs.core.chunk_buffer.call(null,size__29680__auto__);
if((function (){var i__38718 = (0);
while(true){
if((i__38718 < size__29680__auto__)){
var map__38720 = cljs.core._nth.call(null,c__29679__auto__,i__38718);
var map__38720__$1 = ((((!((map__38720 == null)))?((((map__38720.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38720.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38720):map__38720);
var worker = map__38720__$1;
var id = cljs.core.get.call(null,map__38720__$1,new cljs.core.Keyword("worker","id","worker/id",-48429354));
cljs.core.chunk_append.call(null,b__38719,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.table_row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.table_cell,((cljs.core.not.call(null,cljs.core.deref.call(null,print_QMARK_)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645).cljs$core$IFn$_invoke$arity$1(worker)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756).cljs$core$IFn$_invoke$arity$1(worker))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".")].join(''):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645).cljs$core$IFn$_invoke$arity$1(worker)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756).cljs$core$IFn$_invoke$arity$1(worker))].join(''))], null),(function (){var iter__29681__auto__ = ((function (i__38718,map__38720,map__38720__$1,worker,id,c__29679__auto__,size__29680__auto__,b__38719,s__38717__$2,temp__6753__auto____$1,weekday,weekday_name,date,s__38689__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height){
return (function horaro$calendar$ui$print_grid_schedule_$_iter__38688_$_iter__38716_$_iter__38722(s__38723){
return (new cljs.core.LazySeq(null,((function (i__38718,map__38720,map__38720__$1,worker,id,c__29679__auto__,size__29680__auto__,b__38719,s__38717__$2,temp__6753__auto____$1,weekday,weekday_name,date,s__38689__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height){
return (function (){
var s__38723__$1 = s__38723;
while(true){
var temp__6753__auto____$2 = cljs.core.seq.call(null,s__38723__$1);
if(temp__6753__auto____$2){
var s__38723__$2 = temp__6753__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38723__$2)){
var c__29679__auto____$1 = cljs.core.chunk_first.call(null,s__38723__$2);
var size__29680__auto____$1 = cljs.core.count.call(null,c__29679__auto____$1);
var b__38725 = cljs.core.chunk_buffer.call(null,size__29680__auto____$1);
if((function (){var i__38724 = (0);
while(true){
if((i__38724 < size__29680__auto____$1)){
var hour = cljs.core._nth.call(null,c__29679__auto____$1,i__38724);
cljs.core.chunk_append.call(null,b__38725,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.calendar.ui.print_grid_cell,date,worker,hour], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hour)].join('')], null)));

var G__38738 = (i__38724 + (1));
i__38724 = G__38738;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38725),horaro$calendar$ui$print_grid_schedule_$_iter__38688_$_iter__38716_$_iter__38722.call(null,cljs.core.chunk_rest.call(null,s__38723__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38725),null);
}
} else {
var hour = cljs.core.first.call(null,s__38723__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.calendar.ui.print_grid_cell,date,worker,hour], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hour)].join('')], null)),horaro$calendar$ui$print_grid_schedule_$_iter__38688_$_iter__38716_$_iter__38722.call(null,cljs.core.rest.call(null,s__38723__$2)));
}
} else {
return null;
}
break;
}
});})(i__38718,map__38720,map__38720__$1,worker,id,c__29679__auto__,size__29680__auto__,b__38719,s__38717__$2,temp__6753__auto____$1,weekday,weekday_name,date,s__38689__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height))
,null,null));
});})(i__38718,map__38720,map__38720__$1,worker,id,c__29679__auto__,size__29680__auto__,b__38719,s__38717__$2,temp__6753__auto____$1,weekday,weekday_name,date,s__38689__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height))
;
return iter__29681__auto__.call(null,hours);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null)));

var G__38739 = (i__38718 + (1));
i__38718 = G__38739;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38719),horaro$calendar$ui$print_grid_schedule_$_iter__38688_$_iter__38716.call(null,cljs.core.chunk_rest.call(null,s__38717__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38719),null);
}
} else {
var map__38726 = cljs.core.first.call(null,s__38717__$2);
var map__38726__$1 = ((((!((map__38726 == null)))?((((map__38726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38726.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38726):map__38726);
var worker = map__38726__$1;
var id = cljs.core.get.call(null,map__38726__$1,new cljs.core.Keyword("worker","id","worker/id",-48429354));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.table_row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.table_cell,((cljs.core.not.call(null,cljs.core.deref.call(null,print_QMARK_)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645).cljs$core$IFn$_invoke$arity$1(worker)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756).cljs$core$IFn$_invoke$arity$1(worker))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".")].join(''):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645).cljs$core$IFn$_invoke$arity$1(worker)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756).cljs$core$IFn$_invoke$arity$1(worker))].join(''))], null),(function (){var iter__29681__auto__ = ((function (map__38726,map__38726__$1,worker,id,s__38717__$2,temp__6753__auto____$1,weekday,weekday_name,date,s__38689__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height){
return (function horaro$calendar$ui$print_grid_schedule_$_iter__38688_$_iter__38716_$_iter__38728(s__38729){
return (new cljs.core.LazySeq(null,((function (map__38726,map__38726__$1,worker,id,s__38717__$2,temp__6753__auto____$1,weekday,weekday_name,date,s__38689__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height){
return (function (){
var s__38729__$1 = s__38729;
while(true){
var temp__6753__auto____$2 = cljs.core.seq.call(null,s__38729__$1);
if(temp__6753__auto____$2){
var s__38729__$2 = temp__6753__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38729__$2)){
var c__29679__auto__ = cljs.core.chunk_first.call(null,s__38729__$2);
var size__29680__auto__ = cljs.core.count.call(null,c__29679__auto__);
var b__38731 = cljs.core.chunk_buffer.call(null,size__29680__auto__);
if((function (){var i__38730 = (0);
while(true){
if((i__38730 < size__29680__auto__)){
var hour = cljs.core._nth.call(null,c__29679__auto__,i__38730);
cljs.core.chunk_append.call(null,b__38731,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.calendar.ui.print_grid_cell,date,worker,hour], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hour)].join('')], null)));

var G__38740 = (i__38730 + (1));
i__38730 = G__38740;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38731),horaro$calendar$ui$print_grid_schedule_$_iter__38688_$_iter__38716_$_iter__38728.call(null,cljs.core.chunk_rest.call(null,s__38729__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38731),null);
}
} else {
var hour = cljs.core.first.call(null,s__38729__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.calendar.ui.print_grid_cell,date,worker,hour], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hour)].join('')], null)),horaro$calendar$ui$print_grid_schedule_$_iter__38688_$_iter__38716_$_iter__38728.call(null,cljs.core.rest.call(null,s__38729__$2)));
}
} else {
return null;
}
break;
}
});})(map__38726,map__38726__$1,worker,id,s__38717__$2,temp__6753__auto____$1,weekday,weekday_name,date,s__38689__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height))
,null,null));
});})(map__38726,map__38726__$1,worker,id,s__38717__$2,temp__6753__auto____$1,weekday,weekday_name,date,s__38689__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height))
;
return iter__29681__auto__.call(null,hours);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null)),horaro$calendar$ui$print_grid_schedule_$_iter__38688_$_iter__38716.call(null,cljs.core.rest.call(null,s__38717__$2)));
}
} else {
return null;
}
break;
}
});})(weekday,weekday_name,date,s__38689__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height))
,null,null));
});})(weekday,weekday_name,date,s__38689__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height))
;
return iter__29681__auto__.call(null,cljs.core.deref.call(null,workers));
})())], null)], null),horaro$calendar$ui$print_grid_schedule_$_iter__38688.call(null,cljs.core.rest.call(null,s__38689__$2)));
}
} else {
return null;
}
break;
}
});})(print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height))
,null,null));
});})(print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height))
;
return iter__29681__auto__.call(null,cljs.core.deref.call(null,dates));
})())], null);
});
;})(print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height))
});
horaro.calendar.ui.print_list_cell = (function horaro$calendar$ui$print_list_cell(date,worker){
var tmp = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("calendar","worker-day-schedule","calendar/worker-day-schedule",1603993572),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,worker], null)], null));
return ((function (tmp){
return (function (date__$1,worker__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.table_cell,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),new cljs.core.Keyword(null,"center","center",-748944368)], null),(((new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tmp)) == null))?(cljs.core.truth_(cljs_time.predicates.saturday_QMARK_.call(null,date__$1))?"sobota":(cljs.core.truth_(cljs_time.predicates.sunday_QMARK_.call(null,date__$1))?"niedziela":"wolne"
)):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shop","shop",-823644406),null,new cljs.core.Keyword(null,"meats","meats",-1534200305),null], null), null).call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tmp))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.flex.vbox,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"begin","begin",-319034319).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tmp))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tmp)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"shop","shop",-823644406),null], null), null).call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tmp))))?"sklep":(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"meats","meats",-1534200305),null], null), null).call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tmp))))?"lada":null))], null)], null):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"holiday","holiday",148024903),null], null), null).call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tmp))))?"urlop":null)))], null);
});
;})(tmp))
});
horaro.calendar.ui.print_list_schedule = (function horaro$calendar$ui$print_list_schedule(){
var print_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("calendar","print?","calendar/print?",30106438)], null));
var main_date = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("calendar","main-date","calendar/main-date",-1802410609)], null));
var long_date = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("calendar","long-date","calendar/long-date",-1714371171)], null));
var dates = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("calendar","days","calendar/days",-1840699318)], null));
var hours = cljs.core.range.call(null,(6),(21),(1));
var tmp_calendar = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var workers = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","active","workers/active",470447359)], null));
var day_height = reagent.ratom.make_reaction.call(null,((function (print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers){
return (function (){
return ((60) + (15.016 * cljs.core.count.call(null,cljs.core.deref.call(null,workers))));
});})(print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers))
);
return ((function (print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"avoid-break"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.flex.hbox,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.flex.vbox,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Grafik na "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,horaro.calendar.ui.long_months,cljs_time.core.month.call(null,cljs.core.deref.call(null,main_date)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_time.core.year.call(null,cljs.core.deref.call(null,main_date)))].join('')], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.table,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"celled","celled",-1969088093),true,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"compact","compact",-348732150),true,new cljs.core.Keyword(null,"basic","basic",1043717368),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.table_header,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.table_row,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.table_header_cell,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),new cljs.core.Keyword(null,"center","center",-748944368)], null),"Data"], null),cljs.core.doall.call(null,(function (){var iter__29681__auto__ = ((function (print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height){
return (function horaro$calendar$ui$print_list_schedule_$_iter__38741(s__38742){
return (new cljs.core.LazySeq(null,((function (print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height){
return (function (){
var s__38742__$1 = s__38742;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__38742__$1);
if(temp__6753__auto__){
var s__38742__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38742__$2)){
var c__29679__auto__ = cljs.core.chunk_first.call(null,s__38742__$2);
var size__29680__auto__ = cljs.core.count.call(null,c__29679__auto__);
var b__38744 = cljs.core.chunk_buffer.call(null,size__29680__auto__);
if((function (){var i__38743 = (0);
while(true){
if((i__38743 < size__29680__auto__)){
var map__38745 = cljs.core._nth.call(null,c__29679__auto__,i__38743);
var map__38745__$1 = ((((!((map__38745 == null)))?((((map__38745.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38745.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38745):map__38745);
var worker = map__38745__$1;
var id = cljs.core.get.call(null,map__38745__$1,new cljs.core.Keyword("worker","id","worker/id",-48429354));
cljs.core.chunk_append.call(null,b__38744,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.table_header_cell,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),new cljs.core.Keyword(null,"middle","middle",-701029031),new cljs.core.Keyword(null,"writing-mode","writing-mode",-1707110905),new cljs.core.Keyword(null,"tb-rl","tb-rl",1954796290),new cljs.core.Keyword(null,"transform","transform",1381301764),"rotate(180deg)"], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645).cljs$core$IFn$_invoke$arity$1(worker)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756).cljs$core$IFn$_invoke$arity$1(worker))].join('')], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null)));

var G__38769 = (i__38743 + (1));
i__38743 = G__38769;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38744),horaro$calendar$ui$print_list_schedule_$_iter__38741.call(null,cljs.core.chunk_rest.call(null,s__38742__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38744),null);
}
} else {
var map__38747 = cljs.core.first.call(null,s__38742__$2);
var map__38747__$1 = ((((!((map__38747 == null)))?((((map__38747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38747.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38747):map__38747);
var worker = map__38747__$1;
var id = cljs.core.get.call(null,map__38747__$1,new cljs.core.Keyword("worker","id","worker/id",-48429354));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.table_header_cell,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),new cljs.core.Keyword(null,"middle","middle",-701029031),new cljs.core.Keyword(null,"writing-mode","writing-mode",-1707110905),new cljs.core.Keyword(null,"tb-rl","tb-rl",1954796290),new cljs.core.Keyword(null,"transform","transform",1381301764),"rotate(180deg)"], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645).cljs$core$IFn$_invoke$arity$1(worker)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756).cljs$core$IFn$_invoke$arity$1(worker))].join('')], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null)),horaro$calendar$ui$print_list_schedule_$_iter__38741.call(null,cljs.core.rest.call(null,s__38742__$2)));
}
} else {
return null;
}
break;
}
});})(print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height))
,null,null));
});})(print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height))
;
return iter__29681__auto__.call(null,cljs.core.deref.call(null,workers));
})())], null)], null),cljs.core.doall.call(null,(function (){var iter__29681__auto__ = ((function (print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height){
return (function horaro$calendar$ui$print_list_schedule_$_iter__38749(s__38750){
return (new cljs.core.LazySeq(null,((function (print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height){
return (function (){
var s__38750__$1 = s__38750;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__38750__$1);
if(temp__6753__auto__){
var s__38750__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38750__$2)){
var c__29679__auto__ = cljs.core.chunk_first.call(null,s__38750__$2);
var size__29680__auto__ = cljs.core.count.call(null,c__29679__auto__);
var b__38752 = cljs.core.chunk_buffer.call(null,size__29680__auto__);
if((function (){var i__38751 = (0);
while(true){
if((i__38751 < size__29680__auto__)){
var date = cljs.core._nth.call(null,c__29679__auto__,i__38751);
var weekday = cljs_time.core.day_of_week.call(null,date);
var weekday_name = cljs.core.get.call(null,horaro.calendar.ui.long_weekdays,weekday);
cljs.core.chunk_append.call(null,b__38752,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.table_row,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.table_cell,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_time.format.unparse.call(null,cljs_time.format.formatter.call(null,"yyyy-MM-dd"),date))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(weekday_name)].join('')], null)], null),(function (){var iter__29681__auto__ = ((function (i__38751,weekday,weekday_name,date,c__29679__auto__,size__29680__auto__,b__38752,s__38750__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height){
return (function horaro$calendar$ui$print_list_schedule_$_iter__38749_$_iter__38753(s__38754){
return (new cljs.core.LazySeq(null,((function (i__38751,weekday,weekday_name,date,c__29679__auto__,size__29680__auto__,b__38752,s__38750__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height){
return (function (){
var s__38754__$1 = s__38754;
while(true){
var temp__6753__auto____$1 = cljs.core.seq.call(null,s__38754__$1);
if(temp__6753__auto____$1){
var s__38754__$2 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38754__$2)){
var c__29679__auto____$1 = cljs.core.chunk_first.call(null,s__38754__$2);
var size__29680__auto____$1 = cljs.core.count.call(null,c__29679__auto____$1);
var b__38756 = cljs.core.chunk_buffer.call(null,size__29680__auto____$1);
if((function (){var i__38755 = (0);
while(true){
if((i__38755 < size__29680__auto____$1)){
var map__38757 = cljs.core._nth.call(null,c__29679__auto____$1,i__38755);
var map__38757__$1 = ((((!((map__38757 == null)))?((((map__38757.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38757.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38757):map__38757);
var worker = map__38757__$1;
var id = cljs.core.get.call(null,map__38757__$1,new cljs.core.Keyword("worker","id","worker/id",-48429354));
cljs.core.chunk_append.call(null,b__38756,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.calendar.ui.print_list_cell,date,worker], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null)));

var G__38770 = (i__38755 + (1));
i__38755 = G__38770;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38756),horaro$calendar$ui$print_list_schedule_$_iter__38749_$_iter__38753.call(null,cljs.core.chunk_rest.call(null,s__38754__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38756),null);
}
} else {
var map__38759 = cljs.core.first.call(null,s__38754__$2);
var map__38759__$1 = ((((!((map__38759 == null)))?((((map__38759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38759.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38759):map__38759);
var worker = map__38759__$1;
var id = cljs.core.get.call(null,map__38759__$1,new cljs.core.Keyword("worker","id","worker/id",-48429354));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.calendar.ui.print_list_cell,date,worker], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null)),horaro$calendar$ui$print_list_schedule_$_iter__38749_$_iter__38753.call(null,cljs.core.rest.call(null,s__38754__$2)));
}
} else {
return null;
}
break;
}
});})(i__38751,weekday,weekday_name,date,c__29679__auto__,size__29680__auto__,b__38752,s__38750__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height))
,null,null));
});})(i__38751,weekday,weekday_name,date,c__29679__auto__,size__29680__auto__,b__38752,s__38750__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height))
;
return iter__29681__auto__.call(null,cljs.core.deref.call(null,workers));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(date)].join('')], null)));

var G__38771 = (i__38751 + (1));
i__38751 = G__38771;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38752),horaro$calendar$ui$print_list_schedule_$_iter__38749.call(null,cljs.core.chunk_rest.call(null,s__38750__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38752),null);
}
} else {
var date = cljs.core.first.call(null,s__38750__$2);
var weekday = cljs_time.core.day_of_week.call(null,date);
var weekday_name = cljs.core.get.call(null,horaro.calendar.ui.long_weekdays,weekday);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.table_row,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.table_cell,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_time.format.unparse.call(null,cljs_time.format.formatter.call(null,"yyyy-MM-dd"),date))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(weekday_name)].join('')], null)], null),(function (){var iter__29681__auto__ = ((function (weekday,weekday_name,date,s__38750__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height){
return (function horaro$calendar$ui$print_list_schedule_$_iter__38749_$_iter__38761(s__38762){
return (new cljs.core.LazySeq(null,((function (weekday,weekday_name,date,s__38750__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height){
return (function (){
var s__38762__$1 = s__38762;
while(true){
var temp__6753__auto____$1 = cljs.core.seq.call(null,s__38762__$1);
if(temp__6753__auto____$1){
var s__38762__$2 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38762__$2)){
var c__29679__auto__ = cljs.core.chunk_first.call(null,s__38762__$2);
var size__29680__auto__ = cljs.core.count.call(null,c__29679__auto__);
var b__38764 = cljs.core.chunk_buffer.call(null,size__29680__auto__);
if((function (){var i__38763 = (0);
while(true){
if((i__38763 < size__29680__auto__)){
var map__38765 = cljs.core._nth.call(null,c__29679__auto__,i__38763);
var map__38765__$1 = ((((!((map__38765 == null)))?((((map__38765.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38765.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38765):map__38765);
var worker = map__38765__$1;
var id = cljs.core.get.call(null,map__38765__$1,new cljs.core.Keyword("worker","id","worker/id",-48429354));
cljs.core.chunk_append.call(null,b__38764,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.calendar.ui.print_list_cell,date,worker], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null)));

var G__38772 = (i__38763 + (1));
i__38763 = G__38772;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38764),horaro$calendar$ui$print_list_schedule_$_iter__38749_$_iter__38761.call(null,cljs.core.chunk_rest.call(null,s__38762__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38764),null);
}
} else {
var map__38767 = cljs.core.first.call(null,s__38762__$2);
var map__38767__$1 = ((((!((map__38767 == null)))?((((map__38767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38767.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38767):map__38767);
var worker = map__38767__$1;
var id = cljs.core.get.call(null,map__38767__$1,new cljs.core.Keyword("worker","id","worker/id",-48429354));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.calendar.ui.print_list_cell,date,worker], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null)),horaro$calendar$ui$print_list_schedule_$_iter__38749_$_iter__38761.call(null,cljs.core.rest.call(null,s__38762__$2)));
}
} else {
return null;
}
break;
}
});})(weekday,weekday_name,date,s__38750__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height))
,null,null));
});})(weekday,weekday_name,date,s__38750__$2,temp__6753__auto__,print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height))
;
return iter__29681__auto__.call(null,cljs.core.deref.call(null,workers));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(date)].join('')], null)),horaro$calendar$ui$print_list_schedule_$_iter__38749.call(null,cljs.core.rest.call(null,s__38750__$2)));
}
} else {
return null;
}
break;
}
});})(print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height))
,null,null));
});})(print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height))
;
return iter__29681__auto__.call(null,cljs.core.deref.call(null,dates));
})())], null)], null);
});
;})(print_QMARK_,main_date,long_date,dates,hours,tmp_calendar,workers,day_height))
});

//# sourceMappingURL=ui.js.map?rel=1504782246727