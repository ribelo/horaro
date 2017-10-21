// Compiled by ClojureScript 1.9.671 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.9";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__35260 = arguments.length;
switch (G__35260) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__30058__auto__ = [];
var len__30051__auto___35263 = arguments.length;
var i__30052__auto___35264 = (0);
while(true){
if((i__30052__auto___35264 < len__30051__auto___35263)){
args__30058__auto__.push((arguments[i__30052__auto___35264]));

var G__35265 = (i__30052__auto___35264 + (1));
i__30052__auto___35264 = G__35265;
continue;
} else {
}
break;
}

var argseq__30059__auto__ = ((((0) < args__30058__auto__.length))?(new cljs.core.IndexedSeq(args__30058__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__30059__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq35262){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35262));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__30058__auto__ = [];
var len__30051__auto___35267 = arguments.length;
var i__30052__auto___35268 = (0);
while(true){
if((i__30052__auto___35268 < len__30051__auto___35267)){
args__30058__auto__.push((arguments[i__30052__auto___35268]));

var G__35269 = (i__30052__auto___35268 + (1));
i__30052__auto___35268 = G__35269;
continue;
} else {
}
break;
}

var argseq__30059__auto__ = ((((0) < args__30058__auto__.length))?(new cljs.core.IndexedSeq(args__30058__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__30059__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq35266){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35266));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)")].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel autoloading "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method. 
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 *   
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__35270){
var map__35271 = p__35270;
var map__35271__$1 = ((((!((map__35271 == null)))?((((map__35271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35271.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35271):map__35271);
var message = cljs.core.get.call(null,map__35271__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__35271__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" : "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__28818__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__28818__auto__)){
return or__28818__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__28806__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__28806__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__28806__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__31860__auto___35350 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31860__auto___35350,ch){
return (function (){
var f__31861__auto__ = (function (){var switch__31770__auto__ = ((function (c__31860__auto___35350,ch){
return (function (state_35322){
var state_val_35323 = (state_35322[(1)]);
if((state_val_35323 === (7))){
var inst_35318 = (state_35322[(2)]);
var state_35322__$1 = state_35322;
var statearr_35324_35351 = state_35322__$1;
(statearr_35324_35351[(2)] = inst_35318);

(statearr_35324_35351[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35323 === (1))){
var state_35322__$1 = state_35322;
var statearr_35325_35352 = state_35322__$1;
(statearr_35325_35352[(2)] = null);

(statearr_35325_35352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35323 === (4))){
var inst_35275 = (state_35322[(7)]);
var inst_35275__$1 = (state_35322[(2)]);
var state_35322__$1 = (function (){var statearr_35326 = state_35322;
(statearr_35326[(7)] = inst_35275__$1);

return statearr_35326;
})();
if(cljs.core.truth_(inst_35275__$1)){
var statearr_35327_35353 = state_35322__$1;
(statearr_35327_35353[(1)] = (5));

} else {
var statearr_35328_35354 = state_35322__$1;
(statearr_35328_35354[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35323 === (15))){
var inst_35282 = (state_35322[(8)]);
var inst_35297 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35282);
var inst_35298 = cljs.core.first.call(null,inst_35297);
var inst_35299 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_35298);
var inst_35300 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not loading code with warnings - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35299)].join('');
var inst_35301 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_35300);
var state_35322__$1 = state_35322;
var statearr_35329_35355 = state_35322__$1;
(statearr_35329_35355[(2)] = inst_35301);

(statearr_35329_35355[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35323 === (13))){
var inst_35306 = (state_35322[(2)]);
var state_35322__$1 = state_35322;
var statearr_35330_35356 = state_35322__$1;
(statearr_35330_35356[(2)] = inst_35306);

(statearr_35330_35356[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35323 === (6))){
var state_35322__$1 = state_35322;
var statearr_35331_35357 = state_35322__$1;
(statearr_35331_35357[(2)] = null);

(statearr_35331_35357[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35323 === (17))){
var inst_35304 = (state_35322[(2)]);
var state_35322__$1 = state_35322;
var statearr_35332_35358 = state_35322__$1;
(statearr_35332_35358[(2)] = inst_35304);

(statearr_35332_35358[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35323 === (3))){
var inst_35320 = (state_35322[(2)]);
var state_35322__$1 = state_35322;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35322__$1,inst_35320);
} else {
if((state_val_35323 === (12))){
var inst_35281 = (state_35322[(9)]);
var inst_35295 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_35281,opts);
var state_35322__$1 = state_35322;
if(cljs.core.truth_(inst_35295)){
var statearr_35333_35359 = state_35322__$1;
(statearr_35333_35359[(1)] = (15));

} else {
var statearr_35334_35360 = state_35322__$1;
(statearr_35334_35360[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35323 === (2))){
var state_35322__$1 = state_35322;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35322__$1,(4),ch);
} else {
if((state_val_35323 === (11))){
var inst_35282 = (state_35322[(8)]);
var inst_35287 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35288 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_35282);
var inst_35289 = cljs.core.async.timeout.call(null,(1000));
var inst_35290 = [inst_35288,inst_35289];
var inst_35291 = (new cljs.core.PersistentVector(null,2,(5),inst_35287,inst_35290,null));
var state_35322__$1 = state_35322;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35322__$1,(14),inst_35291);
} else {
if((state_val_35323 === (9))){
var inst_35282 = (state_35322[(8)]);
var inst_35308 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_35309 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35282);
var inst_35310 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35309);
var inst_35311 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Not loading: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35310)].join('');
var inst_35312 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_35311);
var state_35322__$1 = (function (){var statearr_35335 = state_35322;
(statearr_35335[(10)] = inst_35308);

return statearr_35335;
})();
var statearr_35336_35361 = state_35322__$1;
(statearr_35336_35361[(2)] = inst_35312);

(statearr_35336_35361[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35323 === (5))){
var inst_35275 = (state_35322[(7)]);
var inst_35277 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_35278 = (new cljs.core.PersistentArrayMap(null,2,inst_35277,null));
var inst_35279 = (new cljs.core.PersistentHashSet(null,inst_35278,null));
var inst_35280 = figwheel.client.focus_msgs.call(null,inst_35279,inst_35275);
var inst_35281 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_35280);
var inst_35282 = cljs.core.first.call(null,inst_35280);
var inst_35283 = figwheel.client.autoload_QMARK_.call(null);
var state_35322__$1 = (function (){var statearr_35337 = state_35322;
(statearr_35337[(8)] = inst_35282);

(statearr_35337[(9)] = inst_35281);

return statearr_35337;
})();
if(cljs.core.truth_(inst_35283)){
var statearr_35338_35362 = state_35322__$1;
(statearr_35338_35362[(1)] = (8));

} else {
var statearr_35339_35363 = state_35322__$1;
(statearr_35339_35363[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35323 === (14))){
var inst_35293 = (state_35322[(2)]);
var state_35322__$1 = state_35322;
var statearr_35340_35364 = state_35322__$1;
(statearr_35340_35364[(2)] = inst_35293);

(statearr_35340_35364[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35323 === (16))){
var state_35322__$1 = state_35322;
var statearr_35341_35365 = state_35322__$1;
(statearr_35341_35365[(2)] = null);

(statearr_35341_35365[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35323 === (10))){
var inst_35314 = (state_35322[(2)]);
var state_35322__$1 = (function (){var statearr_35342 = state_35322;
(statearr_35342[(11)] = inst_35314);

return statearr_35342;
})();
var statearr_35343_35366 = state_35322__$1;
(statearr_35343_35366[(2)] = null);

(statearr_35343_35366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35323 === (8))){
var inst_35281 = (state_35322[(9)]);
var inst_35285 = figwheel.client.reload_file_state_QMARK_.call(null,inst_35281,opts);
var state_35322__$1 = state_35322;
if(cljs.core.truth_(inst_35285)){
var statearr_35344_35367 = state_35322__$1;
(statearr_35344_35367[(1)] = (11));

} else {
var statearr_35345_35368 = state_35322__$1;
(statearr_35345_35368[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31860__auto___35350,ch))
;
return ((function (switch__31770__auto__,c__31860__auto___35350,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__31771__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__31771__auto____0 = (function (){
var statearr_35346 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35346[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__31771__auto__);

(statearr_35346[(1)] = (1));

return statearr_35346;
});
var figwheel$client$file_reloader_plugin_$_state_machine__31771__auto____1 = (function (state_35322){
while(true){
var ret_value__31772__auto__ = (function (){try{while(true){
var result__31773__auto__ = switch__31770__auto__.call(null,state_35322);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31773__auto__;
}
break;
}
}catch (e35347){if((e35347 instanceof Object)){
var ex__31774__auto__ = e35347;
var statearr_35348_35369 = state_35322;
(statearr_35348_35369[(5)] = ex__31774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35322);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35347;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35370 = state_35322;
state_35322 = G__35370;
continue;
} else {
return ret_value__31772__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__31771__auto__ = function(state_35322){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__31771__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__31771__auto____1.call(this,state_35322);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__31771__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__31771__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__31771__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__31771__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__31771__auto__;
})()
;})(switch__31770__auto__,c__31860__auto___35350,ch))
})();
var state__31862__auto__ = (function (){var statearr_35349 = f__31861__auto__.call(null);
(statearr_35349[(6)] = c__31860__auto___35350);

return statearr_35349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31862__auto__);
});})(c__31860__auto___35350,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__35371_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__35371_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_35373 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_35373){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e35372){if((e35372 instanceof Error)){
var e = e35372;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_35373], null));
} else {
var e = e35372;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_35373))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__35374){
var map__35375 = p__35374;
var map__35375__$1 = ((((!((map__35375 == null)))?((((map__35375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35375.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35375):map__35375);
var opts = map__35375__$1;
var build_id = cljs.core.get.call(null,map__35375__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__35375,map__35375__$1,opts,build_id){
return (function (p__35377){
var vec__35378 = p__35377;
var seq__35379 = cljs.core.seq.call(null,vec__35378);
var first__35380 = cljs.core.first.call(null,seq__35379);
var seq__35379__$1 = cljs.core.next.call(null,seq__35379);
var map__35381 = first__35380;
var map__35381__$1 = ((((!((map__35381 == null)))?((((map__35381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35381.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35381):map__35381);
var msg = map__35381__$1;
var msg_name = cljs.core.get.call(null,map__35381__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35379__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__35378,seq__35379,first__35380,seq__35379__$1,map__35381,map__35381__$1,msg,msg_name,_,map__35375,map__35375__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__35378,seq__35379,first__35380,seq__35379__$1,map__35381,map__35381__$1,msg,msg_name,_,map__35375,map__35375__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__35375,map__35375__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__35383){
var vec__35384 = p__35383;
var seq__35385 = cljs.core.seq.call(null,vec__35384);
var first__35386 = cljs.core.first.call(null,seq__35385);
var seq__35385__$1 = cljs.core.next.call(null,seq__35385);
var map__35387 = first__35386;
var map__35387__$1 = ((((!((map__35387 == null)))?((((map__35387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35387.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35387):map__35387);
var msg = map__35387__$1;
var msg_name = cljs.core.get.call(null,map__35387__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35385__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__35389){
var map__35390 = p__35389;
var map__35390__$1 = ((((!((map__35390 == null)))?((((map__35390.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35390.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35390):map__35390);
var on_compile_warning = cljs.core.get.call(null,map__35390__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__35390__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__35390,map__35390__$1,on_compile_warning,on_compile_fail){
return (function (p__35392){
var vec__35393 = p__35392;
var seq__35394 = cljs.core.seq.call(null,vec__35393);
var first__35395 = cljs.core.first.call(null,seq__35394);
var seq__35394__$1 = cljs.core.next.call(null,seq__35394);
var map__35396 = first__35395;
var map__35396__$1 = ((((!((map__35396 == null)))?((((map__35396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35396.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35396):map__35396);
var msg = map__35396__$1;
var msg_name = cljs.core.get.call(null,map__35396__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35394__$1;
var pred__35398 = cljs.core._EQ_;
var expr__35399 = msg_name;
if(cljs.core.truth_(pred__35398.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__35399))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__35398.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__35399))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__35390,map__35390__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__31860__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31860__auto__,msg_hist,msg_names,msg){
return (function (){
var f__31861__auto__ = (function (){var switch__31770__auto__ = ((function (c__31860__auto__,msg_hist,msg_names,msg){
return (function (state_35488){
var state_val_35489 = (state_35488[(1)]);
if((state_val_35489 === (7))){
var inst_35408 = (state_35488[(2)]);
var state_35488__$1 = state_35488;
if(cljs.core.truth_(inst_35408)){
var statearr_35490_35537 = state_35488__$1;
(statearr_35490_35537[(1)] = (8));

} else {
var statearr_35491_35538 = state_35488__$1;
(statearr_35491_35538[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35489 === (20))){
var inst_35482 = (state_35488[(2)]);
var state_35488__$1 = state_35488;
var statearr_35492_35539 = state_35488__$1;
(statearr_35492_35539[(2)] = inst_35482);

(statearr_35492_35539[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35489 === (27))){
var inst_35478 = (state_35488[(2)]);
var state_35488__$1 = state_35488;
var statearr_35493_35540 = state_35488__$1;
(statearr_35493_35540[(2)] = inst_35478);

(statearr_35493_35540[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35489 === (1))){
var inst_35401 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_35488__$1 = state_35488;
if(cljs.core.truth_(inst_35401)){
var statearr_35494_35541 = state_35488__$1;
(statearr_35494_35541[(1)] = (2));

} else {
var statearr_35495_35542 = state_35488__$1;
(statearr_35495_35542[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35489 === (24))){
var inst_35480 = (state_35488[(2)]);
var state_35488__$1 = state_35488;
var statearr_35496_35543 = state_35488__$1;
(statearr_35496_35543[(2)] = inst_35480);

(statearr_35496_35543[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35489 === (4))){
var inst_35486 = (state_35488[(2)]);
var state_35488__$1 = state_35488;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35488__$1,inst_35486);
} else {
if((state_val_35489 === (15))){
var inst_35484 = (state_35488[(2)]);
var state_35488__$1 = state_35488;
var statearr_35497_35544 = state_35488__$1;
(statearr_35497_35544[(2)] = inst_35484);

(statearr_35497_35544[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35489 === (21))){
var inst_35437 = (state_35488[(2)]);
var inst_35438 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35439 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35438);
var state_35488__$1 = (function (){var statearr_35498 = state_35488;
(statearr_35498[(7)] = inst_35437);

return statearr_35498;
})();
var statearr_35499_35545 = state_35488__$1;
(statearr_35499_35545[(2)] = inst_35439);

(statearr_35499_35545[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35489 === (31))){
var inst_35467 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_35488__$1 = state_35488;
if(cljs.core.truth_(inst_35467)){
var statearr_35500_35546 = state_35488__$1;
(statearr_35500_35546[(1)] = (34));

} else {
var statearr_35501_35547 = state_35488__$1;
(statearr_35501_35547[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35489 === (32))){
var inst_35476 = (state_35488[(2)]);
var state_35488__$1 = state_35488;
var statearr_35502_35548 = state_35488__$1;
(statearr_35502_35548[(2)] = inst_35476);

(statearr_35502_35548[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35489 === (33))){
var inst_35463 = (state_35488[(2)]);
var inst_35464 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35465 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35464);
var state_35488__$1 = (function (){var statearr_35503 = state_35488;
(statearr_35503[(8)] = inst_35463);

return statearr_35503;
})();
var statearr_35504_35549 = state_35488__$1;
(statearr_35504_35549[(2)] = inst_35465);

(statearr_35504_35549[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35489 === (13))){
var inst_35422 = figwheel.client.heads_up.clear.call(null);
var state_35488__$1 = state_35488;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35488__$1,(16),inst_35422);
} else {
if((state_val_35489 === (22))){
var inst_35443 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35444 = figwheel.client.heads_up.append_warning_message.call(null,inst_35443);
var state_35488__$1 = state_35488;
var statearr_35505_35550 = state_35488__$1;
(statearr_35505_35550[(2)] = inst_35444);

(statearr_35505_35550[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35489 === (36))){
var inst_35474 = (state_35488[(2)]);
var state_35488__$1 = state_35488;
var statearr_35506_35551 = state_35488__$1;
(statearr_35506_35551[(2)] = inst_35474);

(statearr_35506_35551[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35489 === (29))){
var inst_35454 = (state_35488[(2)]);
var inst_35455 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35456 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35455);
var state_35488__$1 = (function (){var statearr_35507 = state_35488;
(statearr_35507[(9)] = inst_35454);

return statearr_35507;
})();
var statearr_35508_35552 = state_35488__$1;
(statearr_35508_35552[(2)] = inst_35456);

(statearr_35508_35552[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35489 === (6))){
var inst_35403 = (state_35488[(10)]);
var state_35488__$1 = state_35488;
var statearr_35509_35553 = state_35488__$1;
(statearr_35509_35553[(2)] = inst_35403);

(statearr_35509_35553[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35489 === (28))){
var inst_35450 = (state_35488[(2)]);
var inst_35451 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35452 = figwheel.client.heads_up.display_warning.call(null,inst_35451);
var state_35488__$1 = (function (){var statearr_35510 = state_35488;
(statearr_35510[(11)] = inst_35450);

return statearr_35510;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35488__$1,(29),inst_35452);
} else {
if((state_val_35489 === (25))){
var inst_35448 = figwheel.client.heads_up.clear.call(null);
var state_35488__$1 = state_35488;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35488__$1,(28),inst_35448);
} else {
if((state_val_35489 === (34))){
var inst_35469 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35488__$1 = state_35488;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35488__$1,(37),inst_35469);
} else {
if((state_val_35489 === (17))){
var inst_35428 = (state_35488[(2)]);
var inst_35429 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35430 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35429);
var state_35488__$1 = (function (){var statearr_35511 = state_35488;
(statearr_35511[(12)] = inst_35428);

return statearr_35511;
})();
var statearr_35512_35554 = state_35488__$1;
(statearr_35512_35554[(2)] = inst_35430);

(statearr_35512_35554[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35489 === (3))){
var inst_35420 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_35488__$1 = state_35488;
if(cljs.core.truth_(inst_35420)){
var statearr_35513_35555 = state_35488__$1;
(statearr_35513_35555[(1)] = (13));

} else {
var statearr_35514_35556 = state_35488__$1;
(statearr_35514_35556[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35489 === (12))){
var inst_35416 = (state_35488[(2)]);
var state_35488__$1 = state_35488;
var statearr_35515_35557 = state_35488__$1;
(statearr_35515_35557[(2)] = inst_35416);

(statearr_35515_35557[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35489 === (2))){
var inst_35403 = (state_35488[(10)]);
var inst_35403__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_35488__$1 = (function (){var statearr_35516 = state_35488;
(statearr_35516[(10)] = inst_35403__$1);

return statearr_35516;
})();
if(cljs.core.truth_(inst_35403__$1)){
var statearr_35517_35558 = state_35488__$1;
(statearr_35517_35558[(1)] = (5));

} else {
var statearr_35518_35559 = state_35488__$1;
(statearr_35518_35559[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35489 === (23))){
var inst_35446 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_35488__$1 = state_35488;
if(cljs.core.truth_(inst_35446)){
var statearr_35519_35560 = state_35488__$1;
(statearr_35519_35560[(1)] = (25));

} else {
var statearr_35520_35561 = state_35488__$1;
(statearr_35520_35561[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35489 === (35))){
var state_35488__$1 = state_35488;
var statearr_35521_35562 = state_35488__$1;
(statearr_35521_35562[(2)] = null);

(statearr_35521_35562[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35489 === (19))){
var inst_35441 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_35488__$1 = state_35488;
if(cljs.core.truth_(inst_35441)){
var statearr_35522_35563 = state_35488__$1;
(statearr_35522_35563[(1)] = (22));

} else {
var statearr_35523_35564 = state_35488__$1;
(statearr_35523_35564[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35489 === (11))){
var inst_35412 = (state_35488[(2)]);
var state_35488__$1 = state_35488;
var statearr_35524_35565 = state_35488__$1;
(statearr_35524_35565[(2)] = inst_35412);

(statearr_35524_35565[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35489 === (9))){
var inst_35414 = figwheel.client.heads_up.clear.call(null);
var state_35488__$1 = state_35488;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35488__$1,(12),inst_35414);
} else {
if((state_val_35489 === (5))){
var inst_35405 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_35488__$1 = state_35488;
var statearr_35525_35566 = state_35488__$1;
(statearr_35525_35566[(2)] = inst_35405);

(statearr_35525_35566[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35489 === (14))){
var inst_35432 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_35488__$1 = state_35488;
if(cljs.core.truth_(inst_35432)){
var statearr_35526_35567 = state_35488__$1;
(statearr_35526_35567[(1)] = (18));

} else {
var statearr_35527_35568 = state_35488__$1;
(statearr_35527_35568[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35489 === (26))){
var inst_35458 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_35488__$1 = state_35488;
if(cljs.core.truth_(inst_35458)){
var statearr_35528_35569 = state_35488__$1;
(statearr_35528_35569[(1)] = (30));

} else {
var statearr_35529_35570 = state_35488__$1;
(statearr_35529_35570[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35489 === (16))){
var inst_35424 = (state_35488[(2)]);
var inst_35425 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35426 = figwheel.client.heads_up.display_exception.call(null,inst_35425);
var state_35488__$1 = (function (){var statearr_35530 = state_35488;
(statearr_35530[(13)] = inst_35424);

return statearr_35530;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35488__$1,(17),inst_35426);
} else {
if((state_val_35489 === (30))){
var inst_35460 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35461 = figwheel.client.heads_up.display_warning.call(null,inst_35460);
var state_35488__$1 = state_35488;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35488__$1,(33),inst_35461);
} else {
if((state_val_35489 === (10))){
var inst_35418 = (state_35488[(2)]);
var state_35488__$1 = state_35488;
var statearr_35531_35571 = state_35488__$1;
(statearr_35531_35571[(2)] = inst_35418);

(statearr_35531_35571[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35489 === (18))){
var inst_35434 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35435 = figwheel.client.heads_up.display_exception.call(null,inst_35434);
var state_35488__$1 = state_35488;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35488__$1,(21),inst_35435);
} else {
if((state_val_35489 === (37))){
var inst_35471 = (state_35488[(2)]);
var state_35488__$1 = state_35488;
var statearr_35532_35572 = state_35488__$1;
(statearr_35532_35572[(2)] = inst_35471);

(statearr_35532_35572[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35489 === (8))){
var inst_35410 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35488__$1 = state_35488;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35488__$1,(11),inst_35410);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31860__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__31770__auto__,c__31860__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31771__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31771__auto____0 = (function (){
var statearr_35533 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35533[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31771__auto__);

(statearr_35533[(1)] = (1));

return statearr_35533;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31771__auto____1 = (function (state_35488){
while(true){
var ret_value__31772__auto__ = (function (){try{while(true){
var result__31773__auto__ = switch__31770__auto__.call(null,state_35488);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31773__auto__;
}
break;
}
}catch (e35534){if((e35534 instanceof Object)){
var ex__31774__auto__ = e35534;
var statearr_35535_35573 = state_35488;
(statearr_35535_35573[(5)] = ex__31774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35488);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35534;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35574 = state_35488;
state_35488 = G__35574;
continue;
} else {
return ret_value__31772__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31771__auto__ = function(state_35488){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31771__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31771__auto____1.call(this,state_35488);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31771__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31771__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31771__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31771__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31771__auto__;
})()
;})(switch__31770__auto__,c__31860__auto__,msg_hist,msg_names,msg))
})();
var state__31862__auto__ = (function (){var statearr_35536 = f__31861__auto__.call(null);
(statearr_35536[(6)] = c__31860__auto__);

return statearr_35536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31862__auto__);
});})(c__31860__auto__,msg_hist,msg_names,msg))
);

return c__31860__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__31860__auto___35603 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31860__auto___35603,ch){
return (function (){
var f__31861__auto__ = (function (){var switch__31770__auto__ = ((function (c__31860__auto___35603,ch){
return (function (state_35589){
var state_val_35590 = (state_35589[(1)]);
if((state_val_35590 === (1))){
var state_35589__$1 = state_35589;
var statearr_35591_35604 = state_35589__$1;
(statearr_35591_35604[(2)] = null);

(statearr_35591_35604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35590 === (2))){
var state_35589__$1 = state_35589;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35589__$1,(4),ch);
} else {
if((state_val_35590 === (3))){
var inst_35587 = (state_35589[(2)]);
var state_35589__$1 = state_35589;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35589__$1,inst_35587);
} else {
if((state_val_35590 === (4))){
var inst_35577 = (state_35589[(7)]);
var inst_35577__$1 = (state_35589[(2)]);
var state_35589__$1 = (function (){var statearr_35592 = state_35589;
(statearr_35592[(7)] = inst_35577__$1);

return statearr_35592;
})();
if(cljs.core.truth_(inst_35577__$1)){
var statearr_35593_35605 = state_35589__$1;
(statearr_35593_35605[(1)] = (5));

} else {
var statearr_35594_35606 = state_35589__$1;
(statearr_35594_35606[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35590 === (5))){
var inst_35577 = (state_35589[(7)]);
var inst_35579 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_35577);
var state_35589__$1 = state_35589;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35589__$1,(8),inst_35579);
} else {
if((state_val_35590 === (6))){
var state_35589__$1 = state_35589;
var statearr_35595_35607 = state_35589__$1;
(statearr_35595_35607[(2)] = null);

(statearr_35595_35607[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35590 === (7))){
var inst_35585 = (state_35589[(2)]);
var state_35589__$1 = state_35589;
var statearr_35596_35608 = state_35589__$1;
(statearr_35596_35608[(2)] = inst_35585);

(statearr_35596_35608[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35590 === (8))){
var inst_35581 = (state_35589[(2)]);
var state_35589__$1 = (function (){var statearr_35597 = state_35589;
(statearr_35597[(8)] = inst_35581);

return statearr_35597;
})();
var statearr_35598_35609 = state_35589__$1;
(statearr_35598_35609[(2)] = null);

(statearr_35598_35609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__31860__auto___35603,ch))
;
return ((function (switch__31770__auto__,c__31860__auto___35603,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__31771__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__31771__auto____0 = (function (){
var statearr_35599 = [null,null,null,null,null,null,null,null,null];
(statearr_35599[(0)] = figwheel$client$heads_up_plugin_$_state_machine__31771__auto__);

(statearr_35599[(1)] = (1));

return statearr_35599;
});
var figwheel$client$heads_up_plugin_$_state_machine__31771__auto____1 = (function (state_35589){
while(true){
var ret_value__31772__auto__ = (function (){try{while(true){
var result__31773__auto__ = switch__31770__auto__.call(null,state_35589);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31773__auto__;
}
break;
}
}catch (e35600){if((e35600 instanceof Object)){
var ex__31774__auto__ = e35600;
var statearr_35601_35610 = state_35589;
(statearr_35601_35610[(5)] = ex__31774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35589);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35600;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35611 = state_35589;
state_35589 = G__35611;
continue;
} else {
return ret_value__31772__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__31771__auto__ = function(state_35589){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__31771__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__31771__auto____1.call(this,state_35589);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__31771__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__31771__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__31771__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__31771__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__31771__auto__;
})()
;})(switch__31770__auto__,c__31860__auto___35603,ch))
})();
var state__31862__auto__ = (function (){var statearr_35602 = f__31861__auto__.call(null);
(statearr_35602[(6)] = c__31860__auto___35603);

return statearr_35602;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31862__auto__);
});})(c__31860__auto___35603,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__31860__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31860__auto__){
return (function (){
var f__31861__auto__ = (function (){var switch__31770__auto__ = ((function (c__31860__auto__){
return (function (state_35617){
var state_val_35618 = (state_35617[(1)]);
if((state_val_35618 === (1))){
var inst_35612 = cljs.core.async.timeout.call(null,(3000));
var state_35617__$1 = state_35617;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35617__$1,(2),inst_35612);
} else {
if((state_val_35618 === (2))){
var inst_35614 = (state_35617[(2)]);
var inst_35615 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_35617__$1 = (function (){var statearr_35619 = state_35617;
(statearr_35619[(7)] = inst_35614);

return statearr_35619;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35617__$1,inst_35615);
} else {
return null;
}
}
});})(c__31860__auto__))
;
return ((function (switch__31770__auto__,c__31860__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__31771__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__31771__auto____0 = (function (){
var statearr_35620 = [null,null,null,null,null,null,null,null];
(statearr_35620[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__31771__auto__);

(statearr_35620[(1)] = (1));

return statearr_35620;
});
var figwheel$client$enforce_project_plugin_$_state_machine__31771__auto____1 = (function (state_35617){
while(true){
var ret_value__31772__auto__ = (function (){try{while(true){
var result__31773__auto__ = switch__31770__auto__.call(null,state_35617);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31773__auto__;
}
break;
}
}catch (e35621){if((e35621 instanceof Object)){
var ex__31774__auto__ = e35621;
var statearr_35622_35624 = state_35617;
(statearr_35622_35624[(5)] = ex__31774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35617);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35621;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35625 = state_35617;
state_35617 = G__35625;
continue;
} else {
return ret_value__31772__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__31771__auto__ = function(state_35617){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__31771__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__31771__auto____1.call(this,state_35617);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__31771__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__31771__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__31771__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__31771__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__31771__auto__;
})()
;})(switch__31770__auto__,c__31860__auto__))
})();
var state__31862__auto__ = (function (){var statearr_35623 = f__31861__auto__.call(null);
(statearr_35623[(6)] = c__31860__auto__);

return statearr_35623;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31862__auto__);
});})(c__31860__auto__))
);

return c__31860__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__6753__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__6753__auto__)){
var figwheel_version = temp__6753__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__31860__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31860__auto__,figwheel_version,temp__6753__auto__){
return (function (){
var f__31861__auto__ = (function (){var switch__31770__auto__ = ((function (c__31860__auto__,figwheel_version,temp__6753__auto__){
return (function (state_35632){
var state_val_35633 = (state_35632[(1)]);
if((state_val_35633 === (1))){
var inst_35626 = cljs.core.async.timeout.call(null,(2000));
var state_35632__$1 = state_35632;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35632__$1,(2),inst_35626);
} else {
if((state_val_35633 === (2))){
var inst_35628 = (state_35632[(2)]);
var inst_35629 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Client Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong> is not equal to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Sidecar Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".  Shutting down Websocket Connection!"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<h4>To fix try:</h4>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_35630 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_35629);
var state_35632__$1 = (function (){var statearr_35634 = state_35632;
(statearr_35634[(7)] = inst_35628);

return statearr_35634;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35632__$1,inst_35630);
} else {
return null;
}
}
});})(c__31860__auto__,figwheel_version,temp__6753__auto__))
;
return ((function (switch__31770__auto__,c__31860__auto__,figwheel_version,temp__6753__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31771__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31771__auto____0 = (function (){
var statearr_35635 = [null,null,null,null,null,null,null,null];
(statearr_35635[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31771__auto__);

(statearr_35635[(1)] = (1));

return statearr_35635;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31771__auto____1 = (function (state_35632){
while(true){
var ret_value__31772__auto__ = (function (){try{while(true){
var result__31773__auto__ = switch__31770__auto__.call(null,state_35632);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31773__auto__;
}
break;
}
}catch (e35636){if((e35636 instanceof Object)){
var ex__31774__auto__ = e35636;
var statearr_35637_35639 = state_35632;
(statearr_35637_35639[(5)] = ex__31774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35632);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35636;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35640 = state_35632;
state_35632 = G__35640;
continue;
} else {
return ret_value__31772__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31771__auto__ = function(state_35632){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31771__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31771__auto____1.call(this,state_35632);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31771__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31771__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31771__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31771__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31771__auto__;
})()
;})(switch__31770__auto__,c__31860__auto__,figwheel_version,temp__6753__auto__))
})();
var state__31862__auto__ = (function (){var statearr_35638 = f__31861__auto__.call(null);
(statearr_35638[(6)] = c__31860__auto__);

return statearr_35638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31862__auto__);
});})(c__31860__auto__,figwheel_version,temp__6753__auto__))
);

return c__31860__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__35641){
var map__35642 = p__35641;
var map__35642__$1 = ((((!((map__35642 == null)))?((((map__35642.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35642.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35642):map__35642);
var file = cljs.core.get.call(null,map__35642__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__35642__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__35642__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__35644 = "";
var G__35644__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35644),cljs.core.str.cljs$core$IFn$_invoke$arity$1("file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__35644);
var G__35644__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35644__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__35644__$1);
if(cljs.core.truth_((function (){var and__28806__auto__ = line;
if(cljs.core.truth_(and__28806__auto__)){
return column;
} else {
return and__28806__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35644__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__35644__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__35645){
var map__35646 = p__35645;
var map__35646__$1 = ((((!((map__35646 == null)))?((((map__35646.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35646.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35646):map__35646);
var ed = map__35646__$1;
var formatted_exception = cljs.core.get.call(null,map__35646__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__35646__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__35646__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__35648_35652 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__35649_35653 = null;
var count__35650_35654 = (0);
var i__35651_35655 = (0);
while(true){
if((i__35651_35655 < count__35650_35654)){
var msg_35656 = cljs.core._nth.call(null,chunk__35649_35653,i__35651_35655);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35656);

var G__35657 = seq__35648_35652;
var G__35658 = chunk__35649_35653;
var G__35659 = count__35650_35654;
var G__35660 = (i__35651_35655 + (1));
seq__35648_35652 = G__35657;
chunk__35649_35653 = G__35658;
count__35650_35654 = G__35659;
i__35651_35655 = G__35660;
continue;
} else {
var temp__6753__auto___35661 = cljs.core.seq.call(null,seq__35648_35652);
if(temp__6753__auto___35661){
var seq__35648_35662__$1 = temp__6753__auto___35661;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35648_35662__$1)){
var c__29730__auto___35663 = cljs.core.chunk_first.call(null,seq__35648_35662__$1);
var G__35664 = cljs.core.chunk_rest.call(null,seq__35648_35662__$1);
var G__35665 = c__29730__auto___35663;
var G__35666 = cljs.core.count.call(null,c__29730__auto___35663);
var G__35667 = (0);
seq__35648_35652 = G__35664;
chunk__35649_35653 = G__35665;
count__35650_35654 = G__35666;
i__35651_35655 = G__35667;
continue;
} else {
var msg_35668 = cljs.core.first.call(null,seq__35648_35662__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35668);

var G__35669 = cljs.core.next.call(null,seq__35648_35662__$1);
var G__35670 = null;
var G__35671 = (0);
var G__35672 = (0);
seq__35648_35652 = G__35669;
chunk__35649_35653 = G__35670;
count__35650_35654 = G__35671;
i__35651_35655 = G__35672;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Error on "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__35673){
var map__35674 = p__35673;
var map__35674__$1 = ((((!((map__35674 == null)))?((((map__35674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35674.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35674):map__35674);
var w = map__35674__$1;
var message = cljs.core.get.call(null,map__35674__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Compile Warning - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/dev-out/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/dev-out/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("ws://"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__28806__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__28806__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__28806__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__35676 = cljs.core.seq.call(null,plugins);
var chunk__35677 = null;
var count__35678 = (0);
var i__35679 = (0);
while(true){
if((i__35679 < count__35678)){
var vec__35680 = cljs.core._nth.call(null,chunk__35677,i__35679);
var k = cljs.core.nth.call(null,vec__35680,(0),null);
var plugin = cljs.core.nth.call(null,vec__35680,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35686 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35676,chunk__35677,count__35678,i__35679,pl_35686,vec__35680,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_35686.call(null,msg_hist);
});})(seq__35676,chunk__35677,count__35678,i__35679,pl_35686,vec__35680,k,plugin))
);
} else {
}

var G__35687 = seq__35676;
var G__35688 = chunk__35677;
var G__35689 = count__35678;
var G__35690 = (i__35679 + (1));
seq__35676 = G__35687;
chunk__35677 = G__35688;
count__35678 = G__35689;
i__35679 = G__35690;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__35676);
if(temp__6753__auto__){
var seq__35676__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35676__$1)){
var c__29730__auto__ = cljs.core.chunk_first.call(null,seq__35676__$1);
var G__35691 = cljs.core.chunk_rest.call(null,seq__35676__$1);
var G__35692 = c__29730__auto__;
var G__35693 = cljs.core.count.call(null,c__29730__auto__);
var G__35694 = (0);
seq__35676 = G__35691;
chunk__35677 = G__35692;
count__35678 = G__35693;
i__35679 = G__35694;
continue;
} else {
var vec__35683 = cljs.core.first.call(null,seq__35676__$1);
var k = cljs.core.nth.call(null,vec__35683,(0),null);
var plugin = cljs.core.nth.call(null,vec__35683,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35695 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35676,chunk__35677,count__35678,i__35679,pl_35695,vec__35683,k,plugin,seq__35676__$1,temp__6753__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_35695.call(null,msg_hist);
});})(seq__35676,chunk__35677,count__35678,i__35679,pl_35695,vec__35683,k,plugin,seq__35676__$1,temp__6753__auto__))
);
} else {
}

var G__35696 = cljs.core.next.call(null,seq__35676__$1);
var G__35697 = null;
var G__35698 = (0);
var G__35699 = (0);
seq__35676 = G__35696;
chunk__35677 = G__35697;
count__35678 = G__35698;
i__35679 = G__35699;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__35701 = arguments.length;
switch (G__35701) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__35702_35707 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__35703_35708 = null;
var count__35704_35709 = (0);
var i__35705_35710 = (0);
while(true){
if((i__35705_35710 < count__35704_35709)){
var msg_35711 = cljs.core._nth.call(null,chunk__35703_35708,i__35705_35710);
figwheel.client.socket.handle_incoming_message.call(null,msg_35711);

var G__35712 = seq__35702_35707;
var G__35713 = chunk__35703_35708;
var G__35714 = count__35704_35709;
var G__35715 = (i__35705_35710 + (1));
seq__35702_35707 = G__35712;
chunk__35703_35708 = G__35713;
count__35704_35709 = G__35714;
i__35705_35710 = G__35715;
continue;
} else {
var temp__6753__auto___35716 = cljs.core.seq.call(null,seq__35702_35707);
if(temp__6753__auto___35716){
var seq__35702_35717__$1 = temp__6753__auto___35716;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35702_35717__$1)){
var c__29730__auto___35718 = cljs.core.chunk_first.call(null,seq__35702_35717__$1);
var G__35719 = cljs.core.chunk_rest.call(null,seq__35702_35717__$1);
var G__35720 = c__29730__auto___35718;
var G__35721 = cljs.core.count.call(null,c__29730__auto___35718);
var G__35722 = (0);
seq__35702_35707 = G__35719;
chunk__35703_35708 = G__35720;
count__35704_35709 = G__35721;
i__35705_35710 = G__35722;
continue;
} else {
var msg_35723 = cljs.core.first.call(null,seq__35702_35717__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_35723);

var G__35724 = cljs.core.next.call(null,seq__35702_35717__$1);
var G__35725 = null;
var G__35726 = (0);
var G__35727 = (0);
seq__35702_35707 = G__35724;
chunk__35703_35708 = G__35725;
count__35704_35709 = G__35726;
i__35705_35710 = G__35727;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__30058__auto__ = [];
var len__30051__auto___35732 = arguments.length;
var i__30052__auto___35733 = (0);
while(true){
if((i__30052__auto___35733 < len__30051__auto___35732)){
args__30058__auto__.push((arguments[i__30052__auto___35733]));

var G__35734 = (i__30052__auto___35733 + (1));
i__30052__auto___35733 = G__35734;
continue;
} else {
}
break;
}

var argseq__30059__auto__ = ((((0) < args__30058__auto__.length))?(new cljs.core.IndexedSeq(args__30058__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__30059__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__35729){
var map__35730 = p__35729;
var map__35730__$1 = ((((!((map__35730 == null)))?((((map__35730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35730.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35730):map__35730);
var opts = map__35730__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq35728){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35728));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e35735){if((e35735 instanceof Error)){
var e = e35735;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e35735;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__35736){
var map__35737 = p__35736;
var map__35737__$1 = ((((!((map__35737 == null)))?((((map__35737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35737.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35737):map__35737);
var msg_name = cljs.core.get.call(null,map__35737__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1504782131146