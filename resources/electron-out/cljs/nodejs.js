// Compiled by ClojureScript 1.9.671 {}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12410__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12410 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12411__i = 0, G__12411__a = new Array(arguments.length -  0);
while (G__12411__i < G__12411__a.length) {G__12411__a[G__12411__i] = arguments[G__12411__i + 0]; ++G__12411__i;}
  args = new cljs.core.IndexedSeq(G__12411__a,0,null);
} 
return G__12410__delegate.call(this,args);};
G__12410.cljs$lang$maxFixedArity = 0;
G__12410.cljs$lang$applyTo = (function (arglist__12412){
var args = cljs.core.seq(arglist__12412);
return G__12410__delegate(args);
});
G__12410.cljs$core$IFn$_invoke$arity$variadic = G__12410__delegate;
return G__12410;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12413__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12413 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12414__i = 0, G__12414__a = new Array(arguments.length -  0);
while (G__12414__i < G__12414__a.length) {G__12414__a[G__12414__i] = arguments[G__12414__i + 0]; ++G__12414__i;}
  args = new cljs.core.IndexedSeq(G__12414__a,0,null);
} 
return G__12413__delegate.call(this,args);};
G__12413.cljs$lang$maxFixedArity = 0;
G__12413.cljs$lang$applyTo = (function (arglist__12415){
var args = cljs.core.seq(arglist__12415);
return G__12413__delegate(args);
});
G__12413.cljs$core$IFn$_invoke$arity$variadic = G__12413__delegate;
return G__12413;
})()
;

return null;
});
