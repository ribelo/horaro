// Compiled by ClojureScript 1.9.671 {}
goog.provide('horaro.csv');
goog.require('cljs.core');
goog.require('clojure.string');
horaro.csv.wrap_in_quotes = (function horaro$csv$wrap_in_quotes(s){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"")].join('');
});
horaro.csv.seperate = (function horaro$csv$seperate(data,separator,quote_QMARK_){
return clojure.string.join.call(null,separator,(function (){var G__13081 = data;
if(cljs.core.truth_(quote_QMARK_)){
return cljs.core.map.call(null,horaro.csv.wrap_in_quotes,G__13081);
} else {
return G__13081;
}
})());
});
horaro.csv.write_data = (function horaro$csv$write_data(data,separator,newline,quote_QMARK_){
return clojure.string.join.call(null,newline,cljs.core.map.call(null,(function (p1__13082_SHARP_){
return horaro.csv.seperate.call(null,p1__13082_SHARP_,separator,quote_QMARK_);
}),data));
});
horaro.csv.newlines = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lf","lf",1923784290),"\n",new cljs.core.Keyword(null,"cr+lf","cr+lf",486534798),"\r\n"], null);
horaro.csv.newline_error_message = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(":newline must be one of ["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,",",cljs.core.keys.call(null,horaro.csv.newlines))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("]")].join('');
/**
 * Writes data to String in CSV-format.
 *   Accepts the following options:
 *   :separator - field seperator
 *             (default ,)
 *   :newline   - line seperator
 *             (accepts :lf or :cr+lf)
 *             (default :lf)
 *   :quote?    - wrap in quotes
 *             (default false)
 */
horaro.csv.write_csv = (function horaro$csv$write_csv(var_args){
var args__9014__auto__ = [];
var len__9007__auto___13087 = arguments.length;
var i__9008__auto___13088 = (0);
while(true){
if((i__9008__auto___13088 < len__9007__auto___13087)){
args__9014__auto__.push((arguments[i__9008__auto___13088]));

var G__13089 = (i__9008__auto___13088 + (1));
i__9008__auto___13088 = G__13089;
continue;
} else {
}
break;
}

var argseq__9015__auto__ = ((((1) < args__9014__auto__.length))?(new cljs.core.IndexedSeq(args__9014__auto__.slice((1)),(0),null)):null);
return horaro.csv.write_csv.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9015__auto__);
});

horaro.csv.write_csv.cljs$core$IFn$_invoke$arity$variadic = (function (data,options){
var map__13085 = options;
var map__13085__$1 = ((((!((map__13085 == null)))?((((map__13085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13085.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13085):map__13085);
var separator = cljs.core.get.call(null,map__13085__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125),",");
var newline = cljs.core.get.call(null,map__13085__$1,new cljs.core.Keyword(null,"newline","newline",1790071323),new cljs.core.Keyword(null,"lf","lf",1923784290));
var quote_QMARK_ = cljs.core.get.call(null,map__13085__$1,new cljs.core.Keyword(null,"quote?","quote?",-1114029317),false);
var temp__6751__auto__ = cljs.core.get.call(null,horaro.csv.newlines,newline);
if(cljs.core.truth_(temp__6751__auto__)){
var newline_char = temp__6751__auto__;
return horaro.csv.write_data.call(null,data,separator,newline_char,quote_QMARK_);
} else {
throw (new Error(horaro.csv.newline_error_message));
}
});

horaro.csv.write_csv.cljs$lang$maxFixedArity = (1);

horaro.csv.write_csv.cljs$lang$applyTo = (function (seq13083){
var G__13084 = cljs.core.first.call(null,seq13083);
var seq13083__$1 = cljs.core.next.call(null,seq13083);
return horaro.csv.write_csv.cljs$core$IFn$_invoke$arity$variadic(G__13084,seq13083__$1);
});

/**
 * Reads data from String in CSV-format.
 */
horaro.csv.read_csv = (function horaro$csv$read_csv(var_args){
var args__9014__auto__ = [];
var len__9007__auto___13093 = arguments.length;
var i__9008__auto___13094 = (0);
while(true){
if((i__9008__auto___13094 < len__9007__auto___13093)){
args__9014__auto__.push((arguments[i__9008__auto___13094]));

var G__13095 = (i__9008__auto___13094 + (1));
i__9008__auto___13094 = G__13095;
continue;
} else {
}
break;
}

var argseq__9015__auto__ = ((((1) < args__9014__auto__.length))?(new cljs.core.IndexedSeq(args__9014__auto__.slice((1)),(0),null)):null);
return horaro.csv.read_csv.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9015__auto__);
});

horaro.csv.read_csv.cljs$core$IFn$_invoke$arity$variadic = (function (data,options){
return cljs.core.map.call(null,(function (p1__13090_SHARP_){
return clojure.string.split.call(null,p1__13090_SHARP_,/,/);
}),clojure.string.split.call(null,data,/\n/));
});

horaro.csv.read_csv.cljs$lang$maxFixedArity = (1);

horaro.csv.read_csv.cljs$lang$applyTo = (function (seq13091){
var G__13092 = cljs.core.first.call(null,seq13091);
var seq13091__$1 = cljs.core.next.call(null,seq13091);
return horaro.csv.read_csv.cljs$core$IFn$_invoke$arity$variadic(G__13092,seq13091__$1);
});


//# sourceMappingURL=csv.js.map?rel=1504091221402