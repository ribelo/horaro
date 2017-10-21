// Compiled by ClojureScript 1.9.671 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.register = cljs.core.partial.call(null,re_frame.registrar.register_handler,re_frame.fx.kind);
/**
 * An interceptor which actions a `context's` (side) `:effects`.
 * 
 *   For each key in the `:effects` map, call the `effects handler` previously
 *   registered using `reg-fx`.
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 *   call the registered effects handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
var seq__11797 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__11798 = null;
var count__11799 = (0);
var i__11800 = (0);
while(true){
if((i__11800 < count__11799)){
var vec__11801 = cljs.core._nth.call(null,chunk__11798,i__11800);
var effect_k = cljs.core.nth.call(null,vec__11801,(0),null);
var value = cljs.core.nth.call(null,vec__11801,(1),null);
var temp__6751__auto___11807 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__6751__auto___11807)){
var effect_fn_11808 = temp__6751__auto___11807;
effect_fn_11808.call(null,value);
} else {
}

var G__11809 = seq__11797;
var G__11810 = chunk__11798;
var G__11811 = count__11799;
var G__11812 = (i__11800 + (1));
seq__11797 = G__11809;
chunk__11798 = G__11810;
count__11799 = G__11811;
i__11800 = G__11812;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__11797);
if(temp__6753__auto__){
var seq__11797__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11797__$1)){
var c__8686__auto__ = cljs.core.chunk_first.call(null,seq__11797__$1);
var G__11813 = cljs.core.chunk_rest.call(null,seq__11797__$1);
var G__11814 = c__8686__auto__;
var G__11815 = cljs.core.count.call(null,c__8686__auto__);
var G__11816 = (0);
seq__11797 = G__11813;
chunk__11798 = G__11814;
count__11799 = G__11815;
i__11800 = G__11816;
continue;
} else {
var vec__11804 = cljs.core.first.call(null,seq__11797__$1);
var effect_k = cljs.core.nth.call(null,vec__11804,(0),null);
var value = cljs.core.nth.call(null,vec__11804,(1),null);
var temp__6751__auto___11817 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__6751__auto___11817)){
var effect_fn_11818 = temp__6751__auto___11817;
effect_fn_11818.call(null,value);
} else {
}

var G__11819 = cljs.core.next.call(null,seq__11797__$1);
var G__11820 = null;
var G__11821 = (0);
var G__11822 = (0);
seq__11797 = G__11819;
chunk__11798 = G__11820;
count__11799 = G__11821;
i__11800 = G__11822;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__11823 = cljs.core.seq.call(null,value);
var chunk__11824 = null;
var count__11825 = (0);
var i__11826 = (0);
while(true){
if((i__11826 < count__11825)){
var map__11827 = cljs.core._nth.call(null,chunk__11824,i__11826);
var map__11827__$1 = ((((!((map__11827 == null)))?((((map__11827.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11827.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11827):map__11827);
var effect = map__11827__$1;
var ms = cljs.core.get.call(null,map__11827__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__11827__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__11823,chunk__11824,count__11825,i__11826,map__11827,map__11827__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__11823,chunk__11824,count__11825,i__11826,map__11827,map__11827__$1,effect,ms,dispatch))
,ms);
}

var G__11831 = seq__11823;
var G__11832 = chunk__11824;
var G__11833 = count__11825;
var G__11834 = (i__11826 + (1));
seq__11823 = G__11831;
chunk__11824 = G__11832;
count__11825 = G__11833;
i__11826 = G__11834;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__11823);
if(temp__6753__auto__){
var seq__11823__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11823__$1)){
var c__8686__auto__ = cljs.core.chunk_first.call(null,seq__11823__$1);
var G__11835 = cljs.core.chunk_rest.call(null,seq__11823__$1);
var G__11836 = c__8686__auto__;
var G__11837 = cljs.core.count.call(null,c__8686__auto__);
var G__11838 = (0);
seq__11823 = G__11835;
chunk__11824 = G__11836;
count__11825 = G__11837;
i__11826 = G__11838;
continue;
} else {
var map__11829 = cljs.core.first.call(null,seq__11823__$1);
var map__11829__$1 = ((((!((map__11829 == null)))?((((map__11829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11829.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11829):map__11829);
var effect = map__11829__$1;
var ms = cljs.core.get.call(null,map__11829__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__11829__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__11823,chunk__11824,count__11825,i__11826,map__11829,map__11829__$1,effect,ms,dispatch,seq__11823__$1,temp__6753__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__11823,chunk__11824,count__11825,i__11826,map__11829,map__11829__$1,effect,ms,dispatch,seq__11823__$1,temp__6753__auto__))
,ms);
}

var G__11839 = cljs.core.next.call(null,seq__11823__$1);
var G__11840 = null;
var G__11841 = (0);
var G__11842 = (0);
seq__11823 = G__11839;
chunk__11824 = G__11840;
count__11825 = G__11841;
i__11826 = G__11842;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
}

var seq__11843 = cljs.core.seq.call(null,value);
var chunk__11844 = null;
var count__11845 = (0);
var i__11846 = (0);
while(true){
if((i__11846 < count__11845)){
var event = cljs.core._nth.call(null,chunk__11844,i__11846);
re_frame.router.dispatch.call(null,event);

var G__11847 = seq__11843;
var G__11848 = chunk__11844;
var G__11849 = count__11845;
var G__11850 = (i__11846 + (1));
seq__11843 = G__11847;
chunk__11844 = G__11848;
count__11845 = G__11849;
i__11846 = G__11850;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__11843);
if(temp__6753__auto__){
var seq__11843__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11843__$1)){
var c__8686__auto__ = cljs.core.chunk_first.call(null,seq__11843__$1);
var G__11851 = cljs.core.chunk_rest.call(null,seq__11843__$1);
var G__11852 = c__8686__auto__;
var G__11853 = cljs.core.count.call(null,c__8686__auto__);
var G__11854 = (0);
seq__11843 = G__11851;
chunk__11844 = G__11852;
count__11845 = G__11853;
i__11846 = G__11854;
continue;
} else {
var event = cljs.core.first.call(null,seq__11843__$1);
re_frame.router.dispatch.call(null,event);

var G__11855 = cljs.core.next.call(null,seq__11843__$1);
var G__11856 = null;
var G__11857 = (0);
var G__11858 = (0);
seq__11843 = G__11855;
chunk__11844 = G__11856;
count__11845 = G__11857;
i__11846 = G__11858;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__11859 = cljs.core.seq.call(null,((cljs.core.sequential_QMARK_.call(null,value))?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)));
var chunk__11860 = null;
var count__11861 = (0);
var i__11862 = (0);
while(true){
if((i__11862 < count__11861)){
var event = cljs.core._nth.call(null,chunk__11860,i__11862);
clear_event.call(null,event);

var G__11863 = seq__11859;
var G__11864 = chunk__11860;
var G__11865 = count__11861;
var G__11866 = (i__11862 + (1));
seq__11859 = G__11863;
chunk__11860 = G__11864;
count__11861 = G__11865;
i__11862 = G__11866;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__11859);
if(temp__6753__auto__){
var seq__11859__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11859__$1)){
var c__8686__auto__ = cljs.core.chunk_first.call(null,seq__11859__$1);
var G__11867 = cljs.core.chunk_rest.call(null,seq__11859__$1);
var G__11868 = c__8686__auto__;
var G__11869 = cljs.core.count.call(null,c__8686__auto__);
var G__11870 = (0);
seq__11859 = G__11867;
chunk__11860 = G__11868;
count__11861 = G__11869;
i__11862 = G__11870;
continue;
} else {
var event = cljs.core.first.call(null,seq__11859__$1);
clear_event.call(null,event);

var G__11871 = cljs.core.next.call(null,seq__11859__$1);
var G__11872 = null;
var G__11873 = (0);
var G__11874 = (0);
seq__11859 = G__11871;
chunk__11860 = G__11872;
count__11861 = G__11873;
i__11862 = G__11874;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
}));

//# sourceMappingURL=fx.js.map?rel=1504091218623