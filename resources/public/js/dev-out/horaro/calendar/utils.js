// Compiled by ClojureScript 1.9.671 {}
goog.provide('horaro.calendar.utils');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('cljs_time.core');
goog.require('cljs_time.periodic');
horaro.calendar.utils.count_worker_hours = (function horaro$calendar$utils$count_worker_hours(var_args){
var G__12260 = arguments.length;
switch (G__12260) {
case 2:
return horaro.calendar.utils.count_worker_hours.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return horaro.calendar.utils.count_worker_hours.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

horaro.calendar.utils.count_worker_hours.cljs$core$IFn$_invoke$arity$2 = (function (p__12261,db){
var map__12262 = p__12261;
var map__12262__$1 = ((((!((map__12262 == null)))?((((map__12262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12262.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12262):map__12262);
var worker = map__12262__$1;
var id = cljs.core.get.call(null,map__12262__$1,new cljs.core.Keyword("worker","id","worker/id",-48429354));
var calendar = new cljs.core.Keyword("calendar","schedule","calendar/schedule",459050692).cljs$core$IFn$_invoke$arity$1(db);
var dates = cljs.core.mapv.call(null,cljs.core.str,new cljs.core.Keyword("calendar","days","calendar/days",-1840699318).cljs$core$IFn$_invoke$arity$1(db));
var working = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.mapv.call(null,((function (calendar,dates,map__12262,map__12262__$1,worker,id){
return (function (date){
return cljs.core.count.call(null,cljs.core.filter.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shop","shop",-823644406),null,new cljs.core.Keyword(null,"meats","meats",-1534200305),null], null), null),cljs.core.vals.call(null,cljs.core.get_in.call(null,calendar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,id], null)))));
});})(calendar,dates,map__12262,map__12262__$1,worker,id))
,dates));
var holiday = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.mapv.call(null,((function (calendar,dates,working,map__12262,map__12262__$1,worker,id){
return (function (coll){
if(!(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"holiday","holiday",148024903),null], null), null),coll)))){
return (8);
} else {
return (0);
}
});})(calendar,dates,working,map__12262,map__12262__$1,worker,id))
,cljs.core.mapv.call(null,((function (calendar,dates,working,map__12262,map__12262__$1,worker,id){
return (function (date){
return cljs.core.filter.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"holiday","holiday",148024903),null], null), null),cljs.core.vals.call(null,cljs.core.get_in.call(null,calendar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,id], null))));
});})(calendar,dates,working,map__12262,map__12262__$1,worker,id))
,dates)));
return (working + holiday);
});

horaro.calendar.utils.count_worker_hours.cljs$core$IFn$_invoke$arity$3 = (function (worker,date,db){
return horaro.calendar.utils.count_worker_hours.call(null,worker,db);
});

horaro.calendar.utils.count_worker_hours.cljs$lang$maxFixedArity = 3;

horaro.calendar.utils.worker_day_schedule = (function horaro$calendar$utils$worker_day_schedule(p__12265,date,db){
var map__12266 = p__12265;
var map__12266__$1 = ((((!((map__12266 == null)))?((((map__12266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12266.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12266):map__12266);
var worker = map__12266__$1;
var id = cljs.core.get.call(null,map__12266__$1,new cljs.core.Keyword("worker","id","worker/id",-48429354));
var calendar = new cljs.core.Keyword("calendar","schedule","calendar/schedule",459050692).cljs$core$IFn$_invoke$arity$1(db);
cljs.core.println.call(null,"bla",id,date);

var vec__12268 = cljs.core.juxt.call(null,cljs.core.keys,cljs.core.vals).call(null,cljs.core.get_in.call(null,calendar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(date)].join(''),id], null)));
var ks = cljs.core.nth.call(null,vec__12268,(0),null);
var vs = cljs.core.nth.call(null,vec__12268,(1),null);
var type = (((cljs.core.count.call(null,cljs.core.distinct.call(null,vs)) > (1)))?cljs.core.vec.call(null,cljs.core.distinct.call(null,vs)):cljs.core.first.call(null,vs));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"begin","begin",-319034319),cljs.core.apply.call(null,cljs.core.min,ks),new cljs.core.Keyword(null,"end","end",-268185958),(function (){var x = cljs.core.apply.call(null,cljs.core.max,ks);
if(typeof x === 'number'){
return (x + (1));
} else {
return x;
}
})()], null);
});
horaro.calendar.utils.worker_available_QMARK_ = (function horaro$calendar$utils$worker_available_QMARK_(p__12271,p__12272,calendar){
var map__12273 = p__12271;
var map__12273__$1 = ((((!((map__12273 == null)))?((((map__12273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12273.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12273):map__12273);
var worker = map__12273__$1;
var id = cljs.core.get.call(null,map__12273__$1,new cljs.core.Keyword("worker","id","worker/id",-48429354));
var vec__12274 = p__12272;
var date = cljs.core.nth.call(null,vec__12274,(0),null);
var shift = cljs.core.nth.call(null,vec__12274,(1),null);
var place = cljs.core.nth.call(null,vec__12274,(2),null);
return !(cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,cljs.core.flatten.call(null,cljs.core.js__GT_clj.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,(function (){var iter__8637__auto__ = ((function (map__12273,map__12273__$1,worker,id,vec__12274,date,shift,place){
return (function horaro$calendar$utils$worker_available_QMARK__$_iter__12278(s__12279){
return (new cljs.core.LazySeq(null,((function (map__12273,map__12273__$1,worker,id,vec__12274,date,shift,place){
return (function (){
var s__12279__$1 = s__12279;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__12279__$1);
if(temp__6753__auto__){
var xs__7309__auto__ = temp__6753__auto__;
var s = cljs.core.first.call(null,xs__7309__auto__);
var iterys__8633__auto__ = ((function (s__12279__$1,s,xs__7309__auto__,temp__6753__auto__,map__12273,map__12273__$1,worker,id,vec__12274,date,shift,place){
return (function horaro$calendar$utils$worker_available_QMARK__$_iter__12278_$_iter__12280(s__12281){
return (new cljs.core.LazySeq(null,((function (s__12279__$1,s,xs__7309__auto__,temp__6753__auto__,map__12273,map__12273__$1,worker,id,vec__12274,date,shift,place){
return (function (){
var s__12281__$1 = s__12281;
while(true){
var temp__6753__auto____$1 = cljs.core.seq.call(null,s__12281__$1);
if(temp__6753__auto____$1){
var s__12281__$2 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12281__$2)){
var c__8635__auto__ = cljs.core.chunk_first.call(null,s__12281__$2);
var size__8636__auto__ = cljs.core.count.call(null,c__8635__auto__);
var b__12283 = cljs.core.chunk_buffer.call(null,size__8636__auto__);
if((function (){var i__12282 = (0);
while(true){
if((i__12282 < size__8636__auto__)){
var p = cljs.core._nth.call(null,c__8635__auto__,i__12282);
if((cljs.core.not_EQ_.call(null,shift,s)) || (cljs.core.not_EQ_.call(null,place,p))){
cljs.core.chunk_append.call(null,b__12283,cljs.core.get_in.call(null,calendar,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(date)].join(''),s,p], null)));

var G__12284 = (i__12282 + (1));
i__12282 = G__12284;
continue;
} else {
var G__12285 = (i__12282 + (1));
i__12282 = G__12285;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12283),horaro$calendar$utils$worker_available_QMARK__$_iter__12278_$_iter__12280.call(null,cljs.core.chunk_rest.call(null,s__12281__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12283),null);
}
} else {
var p = cljs.core.first.call(null,s__12281__$2);
if((cljs.core.not_EQ_.call(null,shift,s)) || (cljs.core.not_EQ_.call(null,place,p))){
return cljs.core.cons.call(null,cljs.core.get_in.call(null,calendar,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(date)].join(''),s,p], null)),horaro$calendar$utils$worker_available_QMARK__$_iter__12278_$_iter__12280.call(null,cljs.core.rest.call(null,s__12281__$2)));
} else {
var G__12286 = cljs.core.rest.call(null,s__12281__$2);
s__12281__$1 = G__12286;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__12279__$1,s,xs__7309__auto__,temp__6753__auto__,map__12273,map__12273__$1,worker,id,vec__12274,date,shift,place))
,null,null));
});})(s__12279__$1,s,xs__7309__auto__,temp__6753__auto__,map__12273,map__12273__$1,worker,id,vec__12274,date,shift,place))
;
var fs__8634__auto__ = cljs.core.seq.call(null,iterys__8633__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shop","shop",-823644406),new cljs.core.Keyword(null,"meats","meats",-1534200305)], null)));
if(fs__8634__auto__){
return cljs.core.concat.call(null,fs__8634__auto__,horaro$calendar$utils$worker_available_QMARK__$_iter__12278.call(null,cljs.core.rest.call(null,s__12279__$1)));
} else {
var G__12287 = cljs.core.rest.call(null,s__12279__$1);
s__12279__$1 = G__12287;
continue;
}
} else {
return null;
}
break;
}
});})(map__12273,map__12273__$1,worker,id,vec__12274,date,shift,place))
,null,null));
});})(map__12273,map__12273__$1,worker,id,vec__12274,date,shift,place))
;
return iter__8637__auto__.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),1.5,(2)], null));
})())))),id));
});

//# sourceMappingURL=utils.js.map?rel=1504091219263