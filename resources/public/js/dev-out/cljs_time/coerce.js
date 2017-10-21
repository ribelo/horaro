// Compiled by ClojureScript 1.9.671 {}
goog.provide('cljs_time.coerce');
goog.require('cljs.core');
goog.require('cljs_time.core');
goog.require('cljs_time.format');
goog.require('goog.date.UtcDateTime');

/**
 * @interface
 */
cljs_time.coerce.ICoerce = function(){};

/**
 * Convert `obj` to a goog.date.DateTime instance.
 */
cljs_time.coerce.to_date_time = (function cljs_time$coerce$to_date_time(obj){
if((!((obj == null))) && (!((obj.cljs_time$coerce$ICoerce$to_date_time$arity$1 == null)))){
return obj.cljs_time$coerce$ICoerce$to_date_time$arity$1(obj);
} else {
var x__8493__auto__ = (((obj == null))?null:obj);
var m__8494__auto__ = (cljs_time.coerce.to_date_time[goog.typeOf(x__8493__auto__)]);
if(!((m__8494__auto__ == null))){
return m__8494__auto__.call(null,obj);
} else {
var m__8494__auto____$1 = (cljs_time.coerce.to_date_time["_"]);
if(!((m__8494__auto____$1 == null))){
return m__8494__auto____$1.call(null,obj);
} else {
throw cljs.core.missing_protocol.call(null,"ICoerce.to-date-time",obj);
}
}
}
});

/**
 * Returns a DateTime instance in the UTC time zone corresponding to the given
 *   number of milliseconds after the Unix epoch.
 */
cljs_time.coerce.from_long = (function cljs_time$coerce$from_long(millis){
var G__9456 = millis;
if((G__9456 == null)){
return null;
} else {
return goog.date.UtcDateTime.fromTimestamp.call(null,G__9456);
}
});
/**
 * Returns DateTime instance from string using formatters in cljs-time.format,
 *   returning first which parses
 */
cljs_time.coerce.from_string = (function cljs_time$coerce$from_string(s){
if(cljs.core.truth_(s)){
return cljs.core.first.call(null,(function (){var iter__8637__auto__ = (function cljs_time$coerce$from_string_$_iter__9457(s__9458){
return (new cljs.core.LazySeq(null,(function (){
var s__9458__$1 = s__9458;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__9458__$1);
if(temp__6753__auto__){
var s__9458__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9458__$2)){
var c__8635__auto__ = cljs.core.chunk_first.call(null,s__9458__$2);
var size__8636__auto__ = cljs.core.count.call(null,c__8635__auto__);
var b__9460 = cljs.core.chunk_buffer.call(null,size__8636__auto__);
if((function (){var i__9459 = (0);
while(true){
if((i__9459 < size__8636__auto__)){
var f = cljs.core._nth.call(null,c__8635__auto__,i__9459);
var d = (function (){try{return cljs_time.format.parse.call(null,f,s);
}catch (e9461){if((e9461 instanceof Error)){
var _ = e9461;
return null;
} else {
throw e9461;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append.call(null,b__9460,d);

var G__9463 = (i__9459 + (1));
i__9459 = G__9463;
continue;
} else {
var G__9464 = (i__9459 + (1));
i__9459 = G__9464;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9460),cljs_time$coerce$from_string_$_iter__9457.call(null,cljs.core.chunk_rest.call(null,s__9458__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9460),null);
}
} else {
var f = cljs.core.first.call(null,s__9458__$2);
var d = (function (){try{return cljs_time.format.parse.call(null,f,s);
}catch (e9462){if((e9462 instanceof Error)){
var _ = e9462;
return null;
} else {
throw e9462;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons.call(null,d,cljs_time$coerce$from_string_$_iter__9457.call(null,cljs.core.rest.call(null,s__9458__$2)));
} else {
var G__9465 = cljs.core.rest.call(null,s__9458__$2);
s__9458__$1 = G__9465;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8637__auto__.call(null,cljs.core.vals.call(null,cljs_time.format.formatters));
})());
} else {
return null;
}
});
/**
 * Returns a DateTime instance in the UTC time zone corresponding to the given
 *   js Date object.
 */
cljs_time.coerce.from_date = (function cljs_time$coerce$from_date(date){
var G__9466 = date;
var G__9466__$1 = (((G__9466 == null))?null:G__9466.getTime());
if((G__9466__$1 == null)){
return null;
} else {
return cljs_time.coerce.from_long.call(null,G__9466__$1);
}
});
/**
 * Convert `obj` to the number of milliseconds after the Unix epoch.
 */
cljs_time.coerce.to_long = (function cljs_time$coerce$to_long(obj){
var G__9467 = obj;
var G__9467__$1 = (((G__9467 == null))?null:cljs_time.coerce.to_date_time.call(null,G__9467));
if((G__9467__$1 == null)){
return null;
} else {
return G__9467__$1.getTime();
}
});
/**
 * Convert `obj` to Unix epoch.
 */
cljs_time.coerce.to_epoch = (function cljs_time$coerce$to_epoch(obj){
var millis = cljs_time.coerce.to_long.call(null,obj);
var and__7762__auto__ = millis;
if(cljs.core.truth_(and__7762__auto__)){
return cljs.core.quot.call(null,millis,(1000));
} else {
return and__7762__auto__;
}
});
/**
 * Convert `obj` to a JavaScript Date instance.
 */
cljs_time.coerce.to_date = (function cljs_time$coerce$to_date(obj){
var G__9468 = obj;
var G__9468__$1 = (((G__9468 == null))?null:cljs_time.coerce.to_date_time.call(null,G__9468));
var G__9468__$2 = (((G__9468__$1 == null))?null:G__9468__$1.getTime());
if((G__9468__$2 == null)){
return null;
} else {
return (new Date(G__9468__$2));
}
});
/**
 * Returns a string representation of obj in UTC time-zone
 *   using "yyyy-MM-dd'T'HH:mm:ss.SSSZZ" date-time representation.
 */
cljs_time.coerce.to_string = (function cljs_time$coerce$to_string(obj){
var G__9469 = obj;
var G__9469__$1 = (((G__9469 == null))?null:cljs_time.coerce.to_date_time.call(null,G__9469));
if((G__9469__$1 == null)){
return null;
} else {
return cljs_time.format.unparse.call(null,new cljs.core.Keyword(null,"date-time","date-time",177938180).cljs$core$IFn$_invoke$arity$1(cljs_time.format.formatters),G__9469__$1);
}
});
/**
 * Convert `obj` to a goog.date.Date instance
 */
cljs_time.coerce.to_local_date = (function cljs_time$coerce$to_local_date(obj){
if(cljs.core.truth_(obj)){
if(cljs.core._EQ_.call(null,goog.date.Date,cljs.core.type.call(null,obj))){
return obj;
} else {
var temp__6751__auto__ = cljs_time.coerce.to_date_time.call(null,obj);
if(cljs.core.truth_(temp__6751__auto__)){
var dt = temp__6751__auto__;
return (new goog.date.Date(dt.getYear(),dt.getMonth(),dt.getDate()));
} else {
return null;
}
}
} else {
return null;
}
});
/**
 * Convert `obj` to a goog.date.DateTime instance
 */
cljs_time.coerce.to_local_date_time = (function cljs_time$coerce$to_local_date_time(obj){
if(cljs.core.truth_(obj)){
var temp__6751__auto__ = cljs_time.coerce.to_date_time.call(null,obj);
if(cljs.core.truth_(temp__6751__auto__)){
var dt = temp__6751__auto__;
var G__9470 = (new goog.date.DateTime(dt.getYear(),dt.getMonth(),dt.getDate()));
G__9470.setHours(dt.getHours());

G__9470.setMinutes(dt.getMinutes());

G__9470.setSeconds(dt.getSeconds());

G__9470.setMilliseconds(dt.getMilliseconds());

return G__9470;
} else {
return null;
}
} else {
return null;
}
});
(cljs_time.coerce.ICoerce["null"] = true);

(cljs_time.coerce.to_date_time["null"] = (function (_){
return null;
}));

Date.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL;

Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date){
var date__$1 = this;
return cljs_time.coerce.from_date.call(null,date__$1);
});

goog.date.Date.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (local_date){
var local_date__$1 = this;
if(cljs.core.truth_(local_date__$1)){
return cljs_time.core.to_utc_time_zone.call(null,local_date__$1);
} else {
return null;
}
});

goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (local_date_time){
var local_date_time__$1 = this;
if(cljs.core.truth_(local_date_time__$1)){
return cljs_time.core.to_utc_time_zone.call(null,local_date_time__$1);
} else {
return null;
}
});

goog.date.UtcDateTime.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.UtcDateTime.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date_time){
var date_time__$1 = this;
return date_time__$1;
});

(cljs_time.coerce.ICoerce["number"] = true);

(cljs_time.coerce.to_date_time["number"] = (function (long$){
return cljs_time.coerce.from_long.call(null,long$);
}));

(cljs_time.coerce.ICoerce["string"] = true);

(cljs_time.coerce.to_date_time["string"] = (function (string){
return cljs_time.coerce.from_string.call(null,string);
}));

//# sourceMappingURL=coerce.js.map?rel=1504354015704