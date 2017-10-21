// Compiled by ClojureScript 1.9.671 {}
goog.provide('horaro.ui');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.ratom');
goog.require('re_frame.core');
goog.require('semantic_ui.core');
goog.require('horaro.flex');
goog.require('horaro.workers.ui');
goog.require('horaro.calendar.ui');
goog.require('horaro.workers.utils');
horaro.ui.worker_menu_item = (function horaro$ui$worker_menu_item(p__38775){
var map__38776 = p__38775;
var map__38776__$1 = ((((!((map__38776 == null)))?((((map__38776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38776.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38776):map__38776);
var worker = map__38776__$1;
var id = cljs.core.get.call(null,map__38776__$1,new cljs.core.Keyword("worker","id","worker/id",-48429354));
var worker_hover = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var selected_worker = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","selected-worker","workers/selected-worker",782562067)], null));
var worker_hours = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("calendar","count-worker-work-hours","calendar/count-worker-work-hours",-945134712),worker], null));
var all_work_hours = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("calendar","count-work-hours","calendar/count-work-hours",-1336640784)], null));
return ((function (worker_hover,selected_worker,worker_hours,all_work_hours,map__38776,map__38776__$1,worker,id){
return (function (p__38778){
var map__38779 = p__38778;
var map__38779__$1 = ((((!((map__38779 == null)))?((((map__38779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38779.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38779):map__38779);
var worker__$1 = map__38779__$1;
var id__$1 = cljs.core.get.call(null,map__38779__$1,new cljs.core.Keyword("worker","id","worker/id",-48429354));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.menu_item,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"active","active",1895962068),cljs.core._EQ_.call(null,id__$1,new cljs.core.Keyword("worker","id","worker/id",-48429354).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,selected_worker))),new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),((function (map__38779,map__38779__$1,worker__$1,id__$1,worker_hover,selected_worker,worker_hours,all_work_hours,map__38776,map__38776__$1,worker,id){
return (function (){
return cljs.core.swap_BANG_.call(null,worker_hover,cljs.core.assoc,id__$1,true);
});})(map__38779,map__38779__$1,worker__$1,id__$1,worker_hover,selected_worker,worker_hours,all_work_hours,map__38776,map__38776__$1,worker,id))
,new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),((function (map__38779,map__38779__$1,worker__$1,id__$1,worker_hover,selected_worker,worker_hours,all_work_hours,map__38776,map__38776__$1,worker,id){
return (function (){
return cljs.core.swap_BANG_.call(null,worker_hover,cljs.core.assoc,id__$1,false);
});})(map__38779,map__38779__$1,worker__$1,id__$1,worker_hover,selected_worker,worker_hours,all_work_hours,map__38776,map__38776__$1,worker,id))
,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__38779,map__38779__$1,worker__$1,id__$1,worker_hover,selected_worker,worker_hours,all_work_hours,map__38776,map__38776__$1,worker,id){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","select-worker","workers/select-worker",-1350385288),worker__$1], null));
});})(map__38779,map__38779__$1,worker__$1,id__$1,worker_hover,selected_worker,worker_hours,all_work_hours,map__38776,map__38776__$1,worker,id))
,new cljs.core.Keyword(null,"on-double-click","on-double-click",1434856980),((function (map__38779,map__38779__$1,worker__$1,id__$1,worker_hover,selected_worker,worker_hours,all_work_hours,map__38776,map__38776__$1,worker,id){
return (function (){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","edit-worker","workers/edit-worker",-1820236391),worker__$1], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","toggle-modal","workers/toggle-modal",992048345)], null));
});})(map__38779,map__38779__$1,worker__$1,id__$1,worker_hover,selected_worker,worker_hours,all_work_hours,map__38776,map__38776__$1,worker,id))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.label,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"red",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__38779,map__38779__$1,worker__$1,id__$1,worker_hover,selected_worker,worker_hours,all_work_hours,map__38776,map__38776__$1,worker,id){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","remove-worker","workers/remove-worker",-2098945884),worker__$1], null));
});})(map__38779,map__38779__$1,worker__$1,id__$1,worker_hover,selected_worker,worker_hours,all_work_hours,map__38776,map__38776__$1,worker,id))
], null),"X"], null),(function (){var diff = (cljs.core.deref.call(null,all_work_hours) - cljs.core.deref.call(null,worker_hours));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.label,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),(((diff > (0)))?"green":"yellow")], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(diff)].join('')], null);
})(),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645).cljs$core$IFn$_invoke$arity$1(worker__$1)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756).cljs$core$IFn$_invoke$arity$1(worker__$1))].join('')], null);
});
;})(worker_hover,selected_worker,worker_hours,all_work_hours,map__38776,map__38776__$1,worker,id))
});
horaro.ui.sidebar = (function horaro$ui$sidebar(){
var workers = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","list","workers/list",-759802960)], null));
return ((function (workers){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.menu,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vertical","vertical",718696748),true,new cljs.core.Keyword(null,"inverted","inverted",-310592290),true,new cljs.core.Keyword(null,"fluid","fluid",-1823657759),true,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1 0 0px"], null)], null),cljs.core.doall.call(null,(function (){var iter__29681__auto__ = ((function (workers){
return (function horaro$ui$sidebar_$_iter__38781(s__38782){
return (new cljs.core.LazySeq(null,((function (workers){
return (function (){
var s__38782__$1 = s__38782;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__38782__$1);
if(temp__6753__auto__){
var s__38782__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38782__$2)){
var c__29679__auto__ = cljs.core.chunk_first.call(null,s__38782__$2);
var size__29680__auto__ = cljs.core.count.call(null,c__29679__auto__);
var b__38784 = cljs.core.chunk_buffer.call(null,size__29680__auto__);
if((function (){var i__38783 = (0);
while(true){
if((i__38783 < size__29680__auto__)){
var map__38785 = cljs.core._nth.call(null,c__29679__auto__,i__38783);
var map__38785__$1 = ((((!((map__38785 == null)))?((((map__38785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38785.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38785):map__38785);
var worker = map__38785__$1;
var id = cljs.core.get.call(null,map__38785__$1,new cljs.core.Keyword("worker","id","worker/id",-48429354));
cljs.core.chunk_append.call(null,b__38784,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.ui.worker_menu_item,worker], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__38789 = (i__38783 + (1));
i__38783 = G__38789;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38784),horaro$ui$sidebar_$_iter__38781.call(null,cljs.core.chunk_rest.call(null,s__38782__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38784),null);
}
} else {
var map__38787 = cljs.core.first.call(null,s__38782__$2);
var map__38787__$1 = ((((!((map__38787 == null)))?((((map__38787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38787.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38787):map__38787);
var worker = map__38787__$1;
var id = cljs.core.get.call(null,map__38787__$1,new cljs.core.Keyword("worker","id","worker/id",-48429354));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.ui.worker_menu_item,worker], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),horaro$ui$sidebar_$_iter__38781.call(null,cljs.core.rest.call(null,s__38782__$2)));
}
} else {
return null;
}
break;
}
});})(workers))
,null,null));
});})(workers))
;
return iter__29681__auto__.call(null,cljs.core.deref.call(null,workers));
})()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.menu_item,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.flex.hbox,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"icon","icon",1679606541),"add user",new cljs.core.Keyword(null,"inverted","inverted",-310592290),true,new cljs.core.Keyword(null,"compact","compact",-348732150),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (workers){
return (function (){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","edit-worker","workers/edit-worker",-1820236391),horaro.workers.utils.empty_worker.call(null)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","toggle-modal","workers/toggle-modal",992048345)], null));
});})(workers))
], null)], null)], null)], null)], null);
});
;})(workers))
});
horaro.ui.top_menu = (function horaro$ui$top_menu(){
var short_date = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("calendar","short-date","calendar/short-date",-521407273)], null));
return ((function (short_date){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.menu,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"inverted","inverted",-310592290),true,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.menu_menu,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.menu_item,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"inverted","inverted",-310592290),true,new cljs.core.Keyword(null,"icon","icon",1679606541),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (short_date){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("calendar","previous-month","calendar/previous-month",-128846051)], null));
});})(short_date))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.icon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"minus"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.menu_item,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (short_date){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("calendar","toggle-modal","calendar/toggle-modal",412637042)], null));
});})(short_date))
], null),cljs.core.deref.call(null,short_date)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.menu_item,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"inverted","inverted",-310592290),true,new cljs.core.Keyword(null,"icon","icon",1679606541),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (short_date){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("calendar","next-month","calendar/next-month",2014614328)], null));
});})(short_date))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.icon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"plus"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.menu_item,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"inverted","inverted",-310592290),true,new cljs.core.Keyword(null,"icon","icon",1679606541),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (short_date){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("calendar","print-schedule","calendar/print-schedule",-1099618663)], null));
});})(short_date))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.icon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"print"], null)], null)], null)], null)], null)], null);
});
;})(short_date))
});
horaro.ui.main_panel = (function horaro$ui$main_panel(){
var print_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("calendar","print?","calendar/print?",30106438)], null));
return ((function (print_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.flex.hbox,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null),(cljs.core.truth_(cljs.core.deref.call(null,print_QMARK_))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.flex.vbox,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.ui.sidebar], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.flex.gap,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),"16px"], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.flex.vbox,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.flex.gap,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),"16px"], null)], null),(cljs.core.truth_(cljs.core.deref.call(null,print_QMARK_))?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.flex.hbox,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.ui.top_menu], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.flex.gap,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),"16px"], null)], null),((cljs.core.not.call(null,cljs.core.deref.call(null,print_QMARK_)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.flex.scroller,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.calendar.ui.schedule], null)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.calendar.ui.print_list_schedule], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.flex.gap,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),"16px"], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.workers.ui.worker_modal], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.calendar.ui.date_select_modal], null)], null);
});
;})(print_QMARK_))
});

//# sourceMappingURL=ui.js.map?rel=1504782246965