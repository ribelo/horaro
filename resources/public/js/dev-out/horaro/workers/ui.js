// Compiled by ClojureScript 1.9.671 {}
goog.provide('horaro.workers.ui');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.ratom');
goog.require('re_frame.core');
goog.require('cuerdas.core');
goog.require('semantic_ui.core');
goog.require('horaro.flex');
horaro.workers.ui.worker_modal = (function horaro$workers$ui$worker_modal(){
var show_modal_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","show-modal?","workers/show-modal?",-1486633862)], null));
var edited_worker = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","edited-worker","workers/edited-worker",202258022)], null));
var submit_fn = ((function (show_modal_QMARK_,edited_worker){
return (function (worker){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","remove-worker","workers/remove-worker",-2098945884),worker], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","add-worker","workers/add-worker",1610290894),worker], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","select-worker","workers/select-worker",-1350385288),null], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","toggle-modal","workers/toggle-modal",992048345)], null));
});})(show_modal_QMARK_,edited_worker))
;
return ((function (show_modal_QMARK_,edited_worker,submit_fn){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.modal,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),cljs.core.deref.call(null,show_modal_QMARK_),new cljs.core.Keyword(null,"on-close","on-close",-761178394),((function (show_modal_QMARK_,edited_worker,submit_fn){
return (function (){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","select-worker","workers/select-worker",-1350385288),null], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","toggle-modal","workers/toggle-modal",992048345)], null));
});})(show_modal_QMARK_,edited_worker,submit_fn))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.modal_content,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.flex.vbox,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.form,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),((function (show_modal_QMARK_,edited_worker,submit_fn){
return (function (){
return submit_fn.call(null,cljs.core.deref.call(null,edited_worker));
});})(show_modal_QMARK_,edited_worker,submit_fn))
], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.form_group,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"widths","widths",-1467327440),"equal"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.form_input,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Imi\u0119",new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__7774__auto__ = new cljs.core.Keyword("worker","first-name","worker/first-name",-1784265645).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,edited_worker));
if(cljs.core.truth_(or__7774__auto__)){
return or__7774__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (show_modal_QMARK_,edited_worker,submit_fn){
return (function (p1__26577_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","update-first-name","workers/update-first-name",1417694177),p1__26577_SHARP_.target.value], null));
});})(show_modal_QMARK_,edited_worker,submit_fn))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.form_input,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Nazwisko",new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__7774__auto__ = new cljs.core.Keyword("worker","last-name","worker/last-name",1267326756).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,edited_worker));
if(cljs.core.truth_(or__7774__auto__)){
return or__7774__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (show_modal_QMARK_,edited_worker,submit_fn){
return (function (p1__26578_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","update-last-name","workers/update-last-name",1333159913),p1__26578_SHARP_.target.value], null));
});})(show_modal_QMARK_,edited_worker,submit_fn))
], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.form_group,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"widths","widths",-1467327440),"equal",new cljs.core.Keyword(null,"inline","inline",1399884222),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.form_checkbox,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Aktywny?",new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword("worker","active?","worker/active?",-1446658690).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,edited_worker)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (show_modal_QMARK_,edited_worker,submit_fn){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","toggle-active","workers/toggle-active",487315299)], null));
});})(show_modal_QMARK_,edited_worker,submit_fn))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.form_input,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Godziny Pracy",new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__7774__auto__ = new cljs.core.Keyword("worker","working-hours","worker/working-hours",1463334629).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,edited_worker));
if(cljs.core.truth_(or__7774__auto__)){
return or__7774__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (show_modal_QMARK_,edited_worker,submit_fn){
return (function (p1__26579_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","update-working-hours","workers/update-working-hours",-466310286),parseInt(p1__26579_SHARP_.target.value)], null));
});})(show_modal_QMARK_,edited_worker,submit_fn))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"none","none",1333468478)], null)], null),"hidden submit button"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.flex.gap,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),"16px"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [horaro.flex.hbox,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"flex-end","flex-end",297207970)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (show_modal_QMARK_,edited_worker,submit_fn){
return (function (){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","select-worker","workers/select-worker",-1350385288),null], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("workers","toggle-modal","workers/toggle-modal",992048345)], null));
});})(show_modal_QMARK_,edited_worker,submit_fn))
], null),"Anuluj"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [semantic_ui.core.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (show_modal_QMARK_,edited_worker,submit_fn){
return (function (){
return submit_fn.call(null,cljs.core.deref.call(null,edited_worker));
});})(show_modal_QMARK_,edited_worker,submit_fn))
], null),"Zatwierd\u017A"], null)], null)], null)], null)], null);
});
;})(show_modal_QMARK_,edited_worker,submit_fn))
});

//# sourceMappingURL=ui.js.map?rel=1504091234237