// Compiled by ClojureScript 1.9.671 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__8431__auto__,writer__8432__auto__,opt__8433__auto__){
return cljs.core._write.call(null,writer__8432__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__9014__auto__ = [];
var len__9007__auto___25742 = arguments.length;
var i__9008__auto___25743 = (0);
while(true){
if((i__9008__auto___25743 < len__9007__auto___25742)){
args__9014__auto__.push((arguments[i__9008__auto___25743]));

var G__25744 = (i__9008__auto___25743 + (1));
i__9008__auto___25743 = G__25744;
continue;
} else {
}
break;
}

var argseq__9015__auto__ = ((((0) < args__9014__auto__.length))?(new cljs.core.IndexedSeq(args__9014__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__9015__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq25741){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25741));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__9014__auto__ = [];
var len__9007__auto___25746 = arguments.length;
var i__9008__auto___25747 = (0);
while(true){
if((i__9008__auto___25747 < len__9007__auto___25746)){
args__9014__auto__.push((arguments[i__9008__auto___25747]));

var G__25748 = (i__9008__auto___25747 + (1));
i__9008__auto___25747 = G__25748;
continue;
} else {
}
break;
}

var argseq__9015__auto__ = ((((0) < args__9014__auto__.length))?(new cljs.core.IndexedSeq(args__9014__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__9015__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq25745){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25745));
});

var g_QMARK__25749 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_25750 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__25749){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__25749))
,null));
var mkg_25751 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__25749,g_25750){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__25749,g_25750))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__25749,g_25750,mkg_25751){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__25749).call(null,x);
});})(g_QMARK__25749,g_25750,mkg_25751))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__25749,g_25750,mkg_25751){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_25751).call(null,gfn);
});})(g_QMARK__25749,g_25750,mkg_25751))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__25749,g_25750,mkg_25751){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_25750).call(null,generator);
});})(g_QMARK__25749,g_25750,mkg_25751))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__10197__auto___25771 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__10197__auto___25771){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__9014__auto__ = [];
var len__9007__auto___25772 = arguments.length;
var i__9008__auto___25773 = (0);
while(true){
if((i__9008__auto___25773 < len__9007__auto___25772)){
args__9014__auto__.push((arguments[i__9008__auto___25773]));

var G__25774 = (i__9008__auto___25773 + (1));
i__9008__auto___25773 = G__25774;
continue;
} else {
}
break;
}

var argseq__9015__auto__ = ((((0) < args__9014__auto__.length))?(new cljs.core.IndexedSeq(args__9014__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__9015__auto__);
});})(g__10197__auto___25771))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10197__auto___25771){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10197__auto___25771),args);
});})(g__10197__auto___25771))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__10197__auto___25771){
return (function (seq25752){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25752));
});})(g__10197__auto___25771))
;


var g__10197__auto___25775 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__10197__auto___25775){
return (function cljs$spec$gen$alpha$list(var_args){
var args__9014__auto__ = [];
var len__9007__auto___25776 = arguments.length;
var i__9008__auto___25777 = (0);
while(true){
if((i__9008__auto___25777 < len__9007__auto___25776)){
args__9014__auto__.push((arguments[i__9008__auto___25777]));

var G__25778 = (i__9008__auto___25777 + (1));
i__9008__auto___25777 = G__25778;
continue;
} else {
}
break;
}

var argseq__9015__auto__ = ((((0) < args__9014__auto__.length))?(new cljs.core.IndexedSeq(args__9014__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__9015__auto__);
});})(g__10197__auto___25775))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10197__auto___25775){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10197__auto___25775),args);
});})(g__10197__auto___25775))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__10197__auto___25775){
return (function (seq25753){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25753));
});})(g__10197__auto___25775))
;


var g__10197__auto___25779 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__10197__auto___25779){
return (function cljs$spec$gen$alpha$map(var_args){
var args__9014__auto__ = [];
var len__9007__auto___25780 = arguments.length;
var i__9008__auto___25781 = (0);
while(true){
if((i__9008__auto___25781 < len__9007__auto___25780)){
args__9014__auto__.push((arguments[i__9008__auto___25781]));

var G__25782 = (i__9008__auto___25781 + (1));
i__9008__auto___25781 = G__25782;
continue;
} else {
}
break;
}

var argseq__9015__auto__ = ((((0) < args__9014__auto__.length))?(new cljs.core.IndexedSeq(args__9014__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__9015__auto__);
});})(g__10197__auto___25779))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10197__auto___25779){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10197__auto___25779),args);
});})(g__10197__auto___25779))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__10197__auto___25779){
return (function (seq25754){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25754));
});})(g__10197__auto___25779))
;


var g__10197__auto___25783 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__10197__auto___25783){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__9014__auto__ = [];
var len__9007__auto___25784 = arguments.length;
var i__9008__auto___25785 = (0);
while(true){
if((i__9008__auto___25785 < len__9007__auto___25784)){
args__9014__auto__.push((arguments[i__9008__auto___25785]));

var G__25786 = (i__9008__auto___25785 + (1));
i__9008__auto___25785 = G__25786;
continue;
} else {
}
break;
}

var argseq__9015__auto__ = ((((0) < args__9014__auto__.length))?(new cljs.core.IndexedSeq(args__9014__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__9015__auto__);
});})(g__10197__auto___25783))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10197__auto___25783){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10197__auto___25783),args);
});})(g__10197__auto___25783))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__10197__auto___25783){
return (function (seq25755){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25755));
});})(g__10197__auto___25783))
;


var g__10197__auto___25787 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__10197__auto___25787){
return (function cljs$spec$gen$alpha$set(var_args){
var args__9014__auto__ = [];
var len__9007__auto___25788 = arguments.length;
var i__9008__auto___25789 = (0);
while(true){
if((i__9008__auto___25789 < len__9007__auto___25788)){
args__9014__auto__.push((arguments[i__9008__auto___25789]));

var G__25790 = (i__9008__auto___25789 + (1));
i__9008__auto___25789 = G__25790;
continue;
} else {
}
break;
}

var argseq__9015__auto__ = ((((0) < args__9014__auto__.length))?(new cljs.core.IndexedSeq(args__9014__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__9015__auto__);
});})(g__10197__auto___25787))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10197__auto___25787){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10197__auto___25787),args);
});})(g__10197__auto___25787))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__10197__auto___25787){
return (function (seq25756){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25756));
});})(g__10197__auto___25787))
;


var g__10197__auto___25791 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__10197__auto___25791){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__9014__auto__ = [];
var len__9007__auto___25792 = arguments.length;
var i__9008__auto___25793 = (0);
while(true){
if((i__9008__auto___25793 < len__9007__auto___25792)){
args__9014__auto__.push((arguments[i__9008__auto___25793]));

var G__25794 = (i__9008__auto___25793 + (1));
i__9008__auto___25793 = G__25794;
continue;
} else {
}
break;
}

var argseq__9015__auto__ = ((((0) < args__9014__auto__.length))?(new cljs.core.IndexedSeq(args__9014__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__9015__auto__);
});})(g__10197__auto___25791))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10197__auto___25791){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10197__auto___25791),args);
});})(g__10197__auto___25791))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__10197__auto___25791){
return (function (seq25757){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25757));
});})(g__10197__auto___25791))
;


var g__10197__auto___25795 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__10197__auto___25795){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__9014__auto__ = [];
var len__9007__auto___25796 = arguments.length;
var i__9008__auto___25797 = (0);
while(true){
if((i__9008__auto___25797 < len__9007__auto___25796)){
args__9014__auto__.push((arguments[i__9008__auto___25797]));

var G__25798 = (i__9008__auto___25797 + (1));
i__9008__auto___25797 = G__25798;
continue;
} else {
}
break;
}

var argseq__9015__auto__ = ((((0) < args__9014__auto__.length))?(new cljs.core.IndexedSeq(args__9014__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__9015__auto__);
});})(g__10197__auto___25795))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10197__auto___25795){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10197__auto___25795),args);
});})(g__10197__auto___25795))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__10197__auto___25795){
return (function (seq25758){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25758));
});})(g__10197__auto___25795))
;


var g__10197__auto___25799 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__10197__auto___25799){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__9014__auto__ = [];
var len__9007__auto___25800 = arguments.length;
var i__9008__auto___25801 = (0);
while(true){
if((i__9008__auto___25801 < len__9007__auto___25800)){
args__9014__auto__.push((arguments[i__9008__auto___25801]));

var G__25802 = (i__9008__auto___25801 + (1));
i__9008__auto___25801 = G__25802;
continue;
} else {
}
break;
}

var argseq__9015__auto__ = ((((0) < args__9014__auto__.length))?(new cljs.core.IndexedSeq(args__9014__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__9015__auto__);
});})(g__10197__auto___25799))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10197__auto___25799){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10197__auto___25799),args);
});})(g__10197__auto___25799))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__10197__auto___25799){
return (function (seq25759){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25759));
});})(g__10197__auto___25799))
;


var g__10197__auto___25803 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__10197__auto___25803){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__9014__auto__ = [];
var len__9007__auto___25804 = arguments.length;
var i__9008__auto___25805 = (0);
while(true){
if((i__9008__auto___25805 < len__9007__auto___25804)){
args__9014__auto__.push((arguments[i__9008__auto___25805]));

var G__25806 = (i__9008__auto___25805 + (1));
i__9008__auto___25805 = G__25806;
continue;
} else {
}
break;
}

var argseq__9015__auto__ = ((((0) < args__9014__auto__.length))?(new cljs.core.IndexedSeq(args__9014__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__9015__auto__);
});})(g__10197__auto___25803))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10197__auto___25803){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10197__auto___25803),args);
});})(g__10197__auto___25803))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__10197__auto___25803){
return (function (seq25760){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25760));
});})(g__10197__auto___25803))
;


var g__10197__auto___25807 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__10197__auto___25807){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__9014__auto__ = [];
var len__9007__auto___25808 = arguments.length;
var i__9008__auto___25809 = (0);
while(true){
if((i__9008__auto___25809 < len__9007__auto___25808)){
args__9014__auto__.push((arguments[i__9008__auto___25809]));

var G__25810 = (i__9008__auto___25809 + (1));
i__9008__auto___25809 = G__25810;
continue;
} else {
}
break;
}

var argseq__9015__auto__ = ((((0) < args__9014__auto__.length))?(new cljs.core.IndexedSeq(args__9014__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__9015__auto__);
});})(g__10197__auto___25807))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10197__auto___25807){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10197__auto___25807),args);
});})(g__10197__auto___25807))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__10197__auto___25807){
return (function (seq25761){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25761));
});})(g__10197__auto___25807))
;


var g__10197__auto___25811 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__10197__auto___25811){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__9014__auto__ = [];
var len__9007__auto___25812 = arguments.length;
var i__9008__auto___25813 = (0);
while(true){
if((i__9008__auto___25813 < len__9007__auto___25812)){
args__9014__auto__.push((arguments[i__9008__auto___25813]));

var G__25814 = (i__9008__auto___25813 + (1));
i__9008__auto___25813 = G__25814;
continue;
} else {
}
break;
}

var argseq__9015__auto__ = ((((0) < args__9014__auto__.length))?(new cljs.core.IndexedSeq(args__9014__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__9015__auto__);
});})(g__10197__auto___25811))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10197__auto___25811){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10197__auto___25811),args);
});})(g__10197__auto___25811))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__10197__auto___25811){
return (function (seq25762){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25762));
});})(g__10197__auto___25811))
;


var g__10197__auto___25815 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__10197__auto___25815){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__9014__auto__ = [];
var len__9007__auto___25816 = arguments.length;
var i__9008__auto___25817 = (0);
while(true){
if((i__9008__auto___25817 < len__9007__auto___25816)){
args__9014__auto__.push((arguments[i__9008__auto___25817]));

var G__25818 = (i__9008__auto___25817 + (1));
i__9008__auto___25817 = G__25818;
continue;
} else {
}
break;
}

var argseq__9015__auto__ = ((((0) < args__9014__auto__.length))?(new cljs.core.IndexedSeq(args__9014__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__9015__auto__);
});})(g__10197__auto___25815))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10197__auto___25815){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10197__auto___25815),args);
});})(g__10197__auto___25815))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__10197__auto___25815){
return (function (seq25763){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25763));
});})(g__10197__auto___25815))
;


var g__10197__auto___25819 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__10197__auto___25819){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__9014__auto__ = [];
var len__9007__auto___25820 = arguments.length;
var i__9008__auto___25821 = (0);
while(true){
if((i__9008__auto___25821 < len__9007__auto___25820)){
args__9014__auto__.push((arguments[i__9008__auto___25821]));

var G__25822 = (i__9008__auto___25821 + (1));
i__9008__auto___25821 = G__25822;
continue;
} else {
}
break;
}

var argseq__9015__auto__ = ((((0) < args__9014__auto__.length))?(new cljs.core.IndexedSeq(args__9014__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__9015__auto__);
});})(g__10197__auto___25819))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10197__auto___25819){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10197__auto___25819),args);
});})(g__10197__auto___25819))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__10197__auto___25819){
return (function (seq25764){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25764));
});})(g__10197__auto___25819))
;


var g__10197__auto___25823 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__10197__auto___25823){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__9014__auto__ = [];
var len__9007__auto___25824 = arguments.length;
var i__9008__auto___25825 = (0);
while(true){
if((i__9008__auto___25825 < len__9007__auto___25824)){
args__9014__auto__.push((arguments[i__9008__auto___25825]));

var G__25826 = (i__9008__auto___25825 + (1));
i__9008__auto___25825 = G__25826;
continue;
} else {
}
break;
}

var argseq__9015__auto__ = ((((0) < args__9014__auto__.length))?(new cljs.core.IndexedSeq(args__9014__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__9015__auto__);
});})(g__10197__auto___25823))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10197__auto___25823){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10197__auto___25823),args);
});})(g__10197__auto___25823))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__10197__auto___25823){
return (function (seq25765){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25765));
});})(g__10197__auto___25823))
;


var g__10197__auto___25827 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__10197__auto___25827){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__9014__auto__ = [];
var len__9007__auto___25828 = arguments.length;
var i__9008__auto___25829 = (0);
while(true){
if((i__9008__auto___25829 < len__9007__auto___25828)){
args__9014__auto__.push((arguments[i__9008__auto___25829]));

var G__25830 = (i__9008__auto___25829 + (1));
i__9008__auto___25829 = G__25830;
continue;
} else {
}
break;
}

var argseq__9015__auto__ = ((((0) < args__9014__auto__.length))?(new cljs.core.IndexedSeq(args__9014__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__9015__auto__);
});})(g__10197__auto___25827))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10197__auto___25827){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10197__auto___25827),args);
});})(g__10197__auto___25827))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__10197__auto___25827){
return (function (seq25766){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25766));
});})(g__10197__auto___25827))
;


var g__10197__auto___25831 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__10197__auto___25831){
return (function cljs$spec$gen$alpha$return(var_args){
var args__9014__auto__ = [];
var len__9007__auto___25832 = arguments.length;
var i__9008__auto___25833 = (0);
while(true){
if((i__9008__auto___25833 < len__9007__auto___25832)){
args__9014__auto__.push((arguments[i__9008__auto___25833]));

var G__25834 = (i__9008__auto___25833 + (1));
i__9008__auto___25833 = G__25834;
continue;
} else {
}
break;
}

var argseq__9015__auto__ = ((((0) < args__9014__auto__.length))?(new cljs.core.IndexedSeq(args__9014__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__9015__auto__);
});})(g__10197__auto___25831))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10197__auto___25831){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10197__auto___25831),args);
});})(g__10197__auto___25831))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__10197__auto___25831){
return (function (seq25767){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25767));
});})(g__10197__auto___25831))
;


var g__10197__auto___25835 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__10197__auto___25835){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__9014__auto__ = [];
var len__9007__auto___25836 = arguments.length;
var i__9008__auto___25837 = (0);
while(true){
if((i__9008__auto___25837 < len__9007__auto___25836)){
args__9014__auto__.push((arguments[i__9008__auto___25837]));

var G__25838 = (i__9008__auto___25837 + (1));
i__9008__auto___25837 = G__25838;
continue;
} else {
}
break;
}

var argseq__9015__auto__ = ((((0) < args__9014__auto__.length))?(new cljs.core.IndexedSeq(args__9014__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__9015__auto__);
});})(g__10197__auto___25835))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10197__auto___25835){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10197__auto___25835),args);
});})(g__10197__auto___25835))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__10197__auto___25835){
return (function (seq25768){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25768));
});})(g__10197__auto___25835))
;


var g__10197__auto___25839 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__10197__auto___25839){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__9014__auto__ = [];
var len__9007__auto___25840 = arguments.length;
var i__9008__auto___25841 = (0);
while(true){
if((i__9008__auto___25841 < len__9007__auto___25840)){
args__9014__auto__.push((arguments[i__9008__auto___25841]));

var G__25842 = (i__9008__auto___25841 + (1));
i__9008__auto___25841 = G__25842;
continue;
} else {
}
break;
}

var argseq__9015__auto__ = ((((0) < args__9014__auto__.length))?(new cljs.core.IndexedSeq(args__9014__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__9015__auto__);
});})(g__10197__auto___25839))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10197__auto___25839){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10197__auto___25839),args);
});})(g__10197__auto___25839))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__10197__auto___25839){
return (function (seq25769){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25769));
});})(g__10197__auto___25839))
;


var g__10197__auto___25843 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__10197__auto___25843){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__9014__auto__ = [];
var len__9007__auto___25844 = arguments.length;
var i__9008__auto___25845 = (0);
while(true){
if((i__9008__auto___25845 < len__9007__auto___25844)){
args__9014__auto__.push((arguments[i__9008__auto___25845]));

var G__25846 = (i__9008__auto___25845 + (1));
i__9008__auto___25845 = G__25846;
continue;
} else {
}
break;
}

var argseq__9015__auto__ = ((((0) < args__9014__auto__.length))?(new cljs.core.IndexedSeq(args__9014__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__9015__auto__);
});})(g__10197__auto___25843))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10197__auto___25843){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10197__auto___25843),args);
});})(g__10197__auto___25843))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__10197__auto___25843){
return (function (seq25770){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25770));
});})(g__10197__auto___25843))
;

var g__10210__auto___25868 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__10210__auto___25868){
return (function cljs$spec$gen$alpha$any(var_args){
var args__9014__auto__ = [];
var len__9007__auto___25869 = arguments.length;
var i__9008__auto___25870 = (0);
while(true){
if((i__9008__auto___25870 < len__9007__auto___25869)){
args__9014__auto__.push((arguments[i__9008__auto___25870]));

var G__25871 = (i__9008__auto___25870 + (1));
i__9008__auto___25870 = G__25871;
continue;
} else {
}
break;
}

var argseq__9015__auto__ = ((((0) < args__9014__auto__.length))?(new cljs.core.IndexedSeq(args__9014__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__9015__auto__);
});})(g__10210__auto___25868))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10210__auto___25868){
return (function (args){
return cljs.core.deref.call(null,g__10210__auto___25868);
});})(g__10210__auto___25868))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__10210__auto___25868){
return (function (seq25847){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25847));
});})(g__10210__auto___25868))
;


var g__10210__auto___25872 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__10210__auto___25872){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__9014__auto__ = [];
var len__9007__auto___25873 = arguments.length;
var i__9008__auto___25874 = (0);
while(true){
if((i__9008__auto___25874 < len__9007__auto___25873)){
args__9014__auto__.push((arguments[i__9008__auto___25874]));

var G__25875 = (i__9008__auto___25874 + (1));
i__9008__auto___25874 = G__25875;
continue;
} else {
}
break;
}

var argseq__9015__auto__ = ((((0) < args__9014__auto__.length))?(new cljs.core.IndexedSeq(args__9014__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__9015__auto__);
});})(g__10210__auto___25872))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10210__auto___25872){
return (function (args){
return cljs.core.deref.call(null,g__10210__auto___25872);
});})(g__10210__auto___25872))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__10210__auto___25872){
return (function (seq25848){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25848));
});})(g__10210__auto___25872))
;


var g__10210__auto___25876 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__10210__auto___25876){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__9014__auto__ = [];
var len__9007__auto___25877 = arguments.length;
var i__9008__auto___25878 = (0);
while(true){
if((i__9008__auto___25878 < len__9007__auto___25877)){
args__9014__auto__.push((arguments[i__9008__auto___25878]));

var G__25879 = (i__9008__auto___25878 + (1));
i__9008__auto___25878 = G__25879;
continue;
} else {
}
break;
}

var argseq__9015__auto__ = ((((0) < args__9014__auto__.length))?(new cljs.core.IndexedSeq(args__9014__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__9015__auto__);
});})(g__10210__auto___25876))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10210__auto___25876){
return (function (args){
return cljs.core.deref.call(null,g__10210__auto___25876);
});})(g__10210__auto___25876))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__10210__auto___25876){
return (function (seq25849){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25849));
});})(g__10210__auto___25876))
;


var g__10210__auto___25880 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__10210__auto___25880){
return (function cljs$spec$gen$alpha$char(var_args){
var args__9014__auto__ = [];
var len__9007__auto___25881 = arguments.length;
var i__9008__auto___25882 = (0);
while(true){
if((i__9008__auto___25882 < len__9007__auto___25881)){
args__9014__auto__.push((arguments[i__9008__auto___25882]));

var G__25883 = (i__9008__auto___25882 + (1));
i__9008__auto___25882 = G__25883;
continue;
} else {
}
break;
}

var argseq__9015__auto__ = ((((0) < args__9014__auto__.length))?(new cljs.core.IndexedSeq(args__9014__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__9015__auto__);
});})(g__10210__auto___25880))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10210__auto___25880){
return (function (args){
return cljs.core.deref.call(null,g__10210__auto___25880);
});})(g__10210__auto___25880))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__10210__auto___25880){
return (function (seq25850){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25850));
});})(g__10210__auto___25880))
;


var g__10210__auto___25884 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__10210__auto___25884){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__9014__auto__ = [];
var len__9007__auto___25885 = arguments.length;
var i__9008__auto___25886 = (0);
while(true){
if((i__9008__auto___25886 < len__9007__auto___25885)){
args__9014__auto__.push((arguments[i__9008__auto___25886]));

var G__25887 = (i__9008__auto___25886 + (1));
i__9008__auto___25886 = G__25887;
continue;
} else {
}
break;
}

var argseq__9015__auto__ = ((((0) < args__9014__auto__.length))?(new cljs.core.IndexedSeq(args__9014__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__9015__auto__);
});})(g__10210__auto___25884))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10210__auto___25884){
return (function (args){
return cljs.core.deref.call(null,g__10210__auto___25884);
});})(g__10210__auto___25884))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__10210__auto___25884){
return (function (seq25851){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25851));
});})(g__10210__auto___25884))
;


var g__10210__auto___25888 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__10210__auto___25888){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__9014__auto__ = [];
var len__9007__auto___25889 = arguments.length;
var i__9008__auto___25890 = (0);
while(true){
if((i__9008__auto___25890 < len__9007__auto___25889)){
args__9014__auto__.push((arguments[i__9008__auto___25890]));

var G__25891 = (i__9008__auto___25890 + (1));
i__9008__auto___25890 = G__25891;
continue;
} else {
}
break;
}

var argseq__9015__auto__ = ((((0) < args__9014__auto__.length))?(new cljs.core.IndexedSeq(args__9014__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__9015__auto__);
});})(g__10210__auto___25888))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10210__auto___25888){
return (function (args){
return cljs.core.deref.call(null,g__10210__auto___25888);
});})(g__10210__auto___25888))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__10210__auto___25888){
return (function (seq25852){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25852));
});})(g__10210__auto___25888))
;


var g__10210__auto___25892 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__10210__auto___25892){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__9014__auto__ = [];
var len__9007__auto___25893 = arguments.length;
var i__9008__auto___25894 = (0);
while(true){
if((i__9008__auto___25894 < len__9007__auto___25893)){
args__9014__auto__.push((arguments[i__9008__auto___25894]));

var G__25895 = (i__9008__auto___25894 + (1));
i__9008__auto___25894 = G__25895;
continue;
} else {
}
break;
}

var argseq__9015__auto__ = ((((0) < args__9014__auto__.length))?(new cljs.core.IndexedSeq(args__9014__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__9015__auto__);
});})(g__10210__auto___25892))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10210__auto___25892){
return (function (args){
return cljs.core.deref.call(null,g__10210__auto___25892);
});})(g__10210__auto___25892))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__10210__auto___25892){
return (function (seq25853){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25853));
});})(g__10210__auto___25892))
;


var g__10210__auto___25896 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__10210__auto___25896){
return (function cljs$spec$gen$alpha$double(var_args){
var args__9014__auto__ = [];
var len__9007__auto___25897 = arguments.length;
var i__9008__auto___25898 = (0);
while(true){
if((i__9008__auto___25898 < len__9007__auto___25897)){
args__9014__auto__.push((arguments[i__9008__auto___25898]));

var G__25899 = (i__9008__auto___25898 + (1));
i__9008__auto___25898 = G__25899;
continue;
} else {
}
break;
}

var argseq__9015__auto__ = ((((0) < args__9014__auto__.length))?(new cljs.core.IndexedSeq(args__9014__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__9015__auto__);
});})(g__10210__auto___25896))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10210__auto___25896){
return (function (args){
return cljs.core.deref.call(null,g__10210__auto___25896);
});})(g__10210__auto___25896))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__10210__auto___25896){
return (function (seq25854){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25854));
});})(g__10210__auto___25896))
;


var g__10210__auto___25900 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__10210__auto___25900){
return (function cljs$spec$gen$alpha$int(var_args){
var args__9014__auto__ = [];
var len__9007__auto___25901 = arguments.length;
var i__9008__auto___25902 = (0);
while(true){
if((i__9008__auto___25902 < len__9007__auto___25901)){
args__9014__auto__.push((arguments[i__9008__auto___25902]));

var G__25903 = (i__9008__auto___25902 + (1));
i__9008__auto___25902 = G__25903;
continue;
} else {
}
break;
}

var argseq__9015__auto__ = ((((0) < args__9014__auto__.length))?(new cljs.core.IndexedSeq(args__9014__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__9015__auto__);
});})(g__10210__auto___25900))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10210__auto___25900){
return (function (args){
return cljs.core.deref.call(null,g__10210__auto___25900);
});})(g__10210__auto___25900))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__10210__auto___25900){
return (function (seq25855){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25855));
});})(g__10210__auto___25900))
;


var g__10210__auto___25904 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__10210__auto___25904){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__9014__auto__ = [];
var len__9007__auto___25905 = arguments.length;
var i__9008__auto___25906 = (0);
while(true){
if((i__9008__auto___25906 < len__9007__auto___25905)){
args__9014__auto__.push((arguments[i__9008__auto___25906]));

var G__25907 = (i__9008__auto___25906 + (1));
i__9008__auto___25906 = G__25907;
continue;
} else {
}
break;
}

var argseq__9015__auto__ = ((((0) < args__9014__auto__.length))?(new cljs.core.IndexedSeq(args__9014__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__9015__auto__);
});})(g__10210__auto___25904))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10210__auto___25904){
return (function (args){
return cljs.core.deref.call(null,g__10210__auto___25904);
});})(g__10210__auto___25904))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__10210__auto___25904){
return (function (seq25856){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25856));
});})(g__10210__auto___25904))
;


var g__10210__auto___25908 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__10210__auto___25908){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__9014__auto__ = [];
var len__9007__auto___25909 = arguments.length;
var i__9008__auto___25910 = (0);
while(true){
if((i__9008__auto___25910 < len__9007__auto___25909)){
args__9014__auto__.push((arguments[i__9008__auto___25910]));

var G__25911 = (i__9008__auto___25910 + (1));
i__9008__auto___25910 = G__25911;
continue;
} else {
}
break;
}

var argseq__9015__auto__ = ((((0) < args__9014__auto__.length))?(new cljs.core.IndexedSeq(args__9014__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__9015__auto__);
});})(g__10210__auto___25908))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10210__auto___25908){
return (function (args){
return cljs.core.deref.call(null,g__10210__auto___25908);
});})(g__10210__auto___25908))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__10210__auto___25908){
return (function (seq25857){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25857));
});})(g__10210__auto___25908))
;


var g__10210__auto___25912 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__10210__auto___25912){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__9014__auto__ = [];
var len__9007__auto___25913 = arguments.length;
var i__9008__auto___25914 = (0);
while(true){
if((i__9008__auto___25914 < len__9007__auto___25913)){
args__9014__auto__.push((arguments[i__9008__auto___25914]));

var G__25915 = (i__9008__auto___25914 + (1));
i__9008__auto___25914 = G__25915;
continue;
} else {
}
break;
}

var argseq__9015__auto__ = ((((0) < args__9014__auto__.length))?(new cljs.core.IndexedSeq(args__9014__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__9015__auto__);
});})(g__10210__auto___25912))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10210__auto___25912){
return (function (args){
return cljs.core.deref.call(null,g__10210__auto___25912);
});})(g__10210__auto___25912))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__10210__auto___25912){
return (function (seq25858){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25858));
});})(g__10210__auto___25912))
;


var g__10210__auto___25916 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__10210__auto___25916){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__9014__auto__ = [];
var len__9007__auto___25917 = arguments.length;
var i__9008__auto___25918 = (0);
while(true){
if((i__9008__auto___25918 < len__9007__auto___25917)){
args__9014__auto__.push((arguments[i__9008__auto___25918]));

var G__25919 = (i__9008__auto___25918 + (1));
i__9008__auto___25918 = G__25919;
continue;
} else {
}
break;
}

var argseq__9015__auto__ = ((((0) < args__9014__auto__.length))?(new cljs.core.IndexedSeq(args__9014__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__9015__auto__);
});})(g__10210__auto___25916))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10210__auto___25916){
return (function (args){
return cljs.core.deref.call(null,g__10210__auto___25916);
});})(g__10210__auto___25916))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__10210__auto___25916){
return (function (seq25859){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25859));
});})(g__10210__auto___25916))
;


var g__10210__auto___25920 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__10210__auto___25920){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__9014__auto__ = [];
var len__9007__auto___25921 = arguments.length;
var i__9008__auto___25922 = (0);
while(true){
if((i__9008__auto___25922 < len__9007__auto___25921)){
args__9014__auto__.push((arguments[i__9008__auto___25922]));

var G__25923 = (i__9008__auto___25922 + (1));
i__9008__auto___25922 = G__25923;
continue;
} else {
}
break;
}

var argseq__9015__auto__ = ((((0) < args__9014__auto__.length))?(new cljs.core.IndexedSeq(args__9014__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__9015__auto__);
});})(g__10210__auto___25920))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10210__auto___25920){
return (function (args){
return cljs.core.deref.call(null,g__10210__auto___25920);
});})(g__10210__auto___25920))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__10210__auto___25920){
return (function (seq25860){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25860));
});})(g__10210__auto___25920))
;


var g__10210__auto___25924 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__10210__auto___25924){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__9014__auto__ = [];
var len__9007__auto___25925 = arguments.length;
var i__9008__auto___25926 = (0);
while(true){
if((i__9008__auto___25926 < len__9007__auto___25925)){
args__9014__auto__.push((arguments[i__9008__auto___25926]));

var G__25927 = (i__9008__auto___25926 + (1));
i__9008__auto___25926 = G__25927;
continue;
} else {
}
break;
}

var argseq__9015__auto__ = ((((0) < args__9014__auto__.length))?(new cljs.core.IndexedSeq(args__9014__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__9015__auto__);
});})(g__10210__auto___25924))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10210__auto___25924){
return (function (args){
return cljs.core.deref.call(null,g__10210__auto___25924);
});})(g__10210__auto___25924))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__10210__auto___25924){
return (function (seq25861){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25861));
});})(g__10210__auto___25924))
;


var g__10210__auto___25928 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__10210__auto___25928){
return (function cljs$spec$gen$alpha$string(var_args){
var args__9014__auto__ = [];
var len__9007__auto___25929 = arguments.length;
var i__9008__auto___25930 = (0);
while(true){
if((i__9008__auto___25930 < len__9007__auto___25929)){
args__9014__auto__.push((arguments[i__9008__auto___25930]));

var G__25931 = (i__9008__auto___25930 + (1));
i__9008__auto___25930 = G__25931;
continue;
} else {
}
break;
}

var argseq__9015__auto__ = ((((0) < args__9014__auto__.length))?(new cljs.core.IndexedSeq(args__9014__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__9015__auto__);
});})(g__10210__auto___25928))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10210__auto___25928){
return (function (args){
return cljs.core.deref.call(null,g__10210__auto___25928);
});})(g__10210__auto___25928))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__10210__auto___25928){
return (function (seq25862){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25862));
});})(g__10210__auto___25928))
;


var g__10210__auto___25932 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__10210__auto___25932){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__9014__auto__ = [];
var len__9007__auto___25933 = arguments.length;
var i__9008__auto___25934 = (0);
while(true){
if((i__9008__auto___25934 < len__9007__auto___25933)){
args__9014__auto__.push((arguments[i__9008__auto___25934]));

var G__25935 = (i__9008__auto___25934 + (1));
i__9008__auto___25934 = G__25935;
continue;
} else {
}
break;
}

var argseq__9015__auto__ = ((((0) < args__9014__auto__.length))?(new cljs.core.IndexedSeq(args__9014__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__9015__auto__);
});})(g__10210__auto___25932))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10210__auto___25932){
return (function (args){
return cljs.core.deref.call(null,g__10210__auto___25932);
});})(g__10210__auto___25932))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__10210__auto___25932){
return (function (seq25863){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25863));
});})(g__10210__auto___25932))
;


var g__10210__auto___25936 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__10210__auto___25936){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__9014__auto__ = [];
var len__9007__auto___25937 = arguments.length;
var i__9008__auto___25938 = (0);
while(true){
if((i__9008__auto___25938 < len__9007__auto___25937)){
args__9014__auto__.push((arguments[i__9008__auto___25938]));

var G__25939 = (i__9008__auto___25938 + (1));
i__9008__auto___25938 = G__25939;
continue;
} else {
}
break;
}

var argseq__9015__auto__ = ((((0) < args__9014__auto__.length))?(new cljs.core.IndexedSeq(args__9014__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__9015__auto__);
});})(g__10210__auto___25936))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10210__auto___25936){
return (function (args){
return cljs.core.deref.call(null,g__10210__auto___25936);
});})(g__10210__auto___25936))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__10210__auto___25936){
return (function (seq25864){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25864));
});})(g__10210__auto___25936))
;


var g__10210__auto___25940 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__10210__auto___25940){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__9014__auto__ = [];
var len__9007__auto___25941 = arguments.length;
var i__9008__auto___25942 = (0);
while(true){
if((i__9008__auto___25942 < len__9007__auto___25941)){
args__9014__auto__.push((arguments[i__9008__auto___25942]));

var G__25943 = (i__9008__auto___25942 + (1));
i__9008__auto___25942 = G__25943;
continue;
} else {
}
break;
}

var argseq__9015__auto__ = ((((0) < args__9014__auto__.length))?(new cljs.core.IndexedSeq(args__9014__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__9015__auto__);
});})(g__10210__auto___25940))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10210__auto___25940){
return (function (args){
return cljs.core.deref.call(null,g__10210__auto___25940);
});})(g__10210__auto___25940))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__10210__auto___25940){
return (function (seq25865){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25865));
});})(g__10210__auto___25940))
;


var g__10210__auto___25944 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__10210__auto___25944){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__9014__auto__ = [];
var len__9007__auto___25945 = arguments.length;
var i__9008__auto___25946 = (0);
while(true){
if((i__9008__auto___25946 < len__9007__auto___25945)){
args__9014__auto__.push((arguments[i__9008__auto___25946]));

var G__25947 = (i__9008__auto___25946 + (1));
i__9008__auto___25946 = G__25947;
continue;
} else {
}
break;
}

var argseq__9015__auto__ = ((((0) < args__9014__auto__.length))?(new cljs.core.IndexedSeq(args__9014__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__9015__auto__);
});})(g__10210__auto___25944))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10210__auto___25944){
return (function (args){
return cljs.core.deref.call(null,g__10210__auto___25944);
});})(g__10210__auto___25944))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__10210__auto___25944){
return (function (seq25866){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25866));
});})(g__10210__auto___25944))
;


var g__10210__auto___25948 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__10210__auto___25948){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__9014__auto__ = [];
var len__9007__auto___25949 = arguments.length;
var i__9008__auto___25950 = (0);
while(true){
if((i__9008__auto___25950 < len__9007__auto___25949)){
args__9014__auto__.push((arguments[i__9008__auto___25950]));

var G__25951 = (i__9008__auto___25950 + (1));
i__9008__auto___25950 = G__25951;
continue;
} else {
}
break;
}

var argseq__9015__auto__ = ((((0) < args__9014__auto__.length))?(new cljs.core.IndexedSeq(args__9014__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__9015__auto__);
});})(g__10210__auto___25948))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10210__auto___25948){
return (function (args){
return cljs.core.deref.call(null,g__10210__auto___25948);
});})(g__10210__auto___25948))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__10210__auto___25948){
return (function (seq25867){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25867));
});})(g__10210__auto___25948))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__9014__auto__ = [];
var len__9007__auto___25954 = arguments.length;
var i__9008__auto___25955 = (0);
while(true){
if((i__9008__auto___25955 < len__9007__auto___25954)){
args__9014__auto__.push((arguments[i__9008__auto___25955]));

var G__25956 = (i__9008__auto___25955 + (1));
i__9008__auto___25955 = G__25956;
continue;
} else {
}
break;
}

var argseq__9015__auto__ = ((((0) < args__9014__auto__.length))?(new cljs.core.IndexedSeq(args__9014__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__9015__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__25952_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__25952_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq25953){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25953));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__25957_SHARP_){
return (new Date(p1__25957_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map?rel=1504091232610