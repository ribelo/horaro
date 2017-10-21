// Compiled by ClojureScript 1.9.671 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__10069__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__10069 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10070__i = 0, G__10070__a = new Array(arguments.length -  0);
while (G__10070__i < G__10070__a.length) {G__10070__a[G__10070__i] = arguments[G__10070__i + 0]; ++G__10070__i;}
  args = new cljs.core.IndexedSeq(G__10070__a,0,null);
} 
return G__10069__delegate.call(this,args);};
G__10069.cljs$lang$maxFixedArity = 0;
G__10069.cljs$lang$applyTo = (function (arglist__10071){
var args = cljs.core.seq(arglist__10071);
return G__10069__delegate(args);
});
G__10069.cljs$core$IFn$_invoke$arity$variadic = G__10069__delegate;
return G__10069;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__10072__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__10072 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10073__i = 0, G__10073__a = new Array(arguments.length -  0);
while (G__10073__i < G__10073__a.length) {G__10073__a[G__10073__i] = arguments[G__10073__i + 0]; ++G__10073__i;}
  args = new cljs.core.IndexedSeq(G__10073__a,0,null);
} 
return G__10072__delegate.call(this,args);};
G__10072.cljs$lang$maxFixedArity = 0;
G__10072.cljs$lang$applyTo = (function (arglist__10074){
var args = cljs.core.seq(arglist__10074);
return G__10072__delegate(args);
});
G__10072.cljs$core$IFn$_invoke$arity$variadic = G__10072__delegate;
return G__10072;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1504091215517