// Compiled by ClojureScript 1.9.671 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x28937_28938 = value;
x28937_28938.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$IGroup$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x28940_28941 = value;
x28940_28941.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ITemplate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x28943_28944 = value;
x28943_28944.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ISurrogate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
var and__7762__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__7762__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__7762__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__9014__auto__ = [];
var len__9007__auto___28951 = arguments.length;
var i__9008__auto___28952 = (0);
while(true){
if((i__9008__auto___28952 < len__9007__auto___28951)){
args__9014__auto__.push((arguments[i__9008__auto___28952]));

var G__28953 = (i__9008__auto___28952 + (1));
i__9008__auto___28952 = G__28953;
continue;
} else {
}
break;
}

var argseq__9015__auto__ = ((((0) < args__9014__auto__.length))?(new cljs.core.IndexedSeq(args__9014__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__9015__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__28947_28954 = cljs.core.seq.call(null,items);
var chunk__28948_28955 = null;
var count__28949_28956 = (0);
var i__28950_28957 = (0);
while(true){
if((i__28950_28957 < count__28949_28956)){
var item_28958 = cljs.core._nth.call(null,chunk__28948_28955,i__28950_28957);
if(!((item_28958 == null))){
if(cljs.core.coll_QMARK_.call(null,item_28958)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_28958)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_28958));
}
} else {
}

var G__28959 = seq__28947_28954;
var G__28960 = chunk__28948_28955;
var G__28961 = count__28949_28956;
var G__28962 = (i__28950_28957 + (1));
seq__28947_28954 = G__28959;
chunk__28948_28955 = G__28960;
count__28949_28956 = G__28961;
i__28950_28957 = G__28962;
continue;
} else {
var temp__6753__auto___28963 = cljs.core.seq.call(null,seq__28947_28954);
if(temp__6753__auto___28963){
var seq__28947_28964__$1 = temp__6753__auto___28963;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28947_28964__$1)){
var c__8686__auto___28965 = cljs.core.chunk_first.call(null,seq__28947_28964__$1);
var G__28966 = cljs.core.chunk_rest.call(null,seq__28947_28964__$1);
var G__28967 = c__8686__auto___28965;
var G__28968 = cljs.core.count.call(null,c__8686__auto___28965);
var G__28969 = (0);
seq__28947_28954 = G__28966;
chunk__28948_28955 = G__28967;
count__28949_28956 = G__28968;
i__28950_28957 = G__28969;
continue;
} else {
var item_28970 = cljs.core.first.call(null,seq__28947_28964__$1);
if(!((item_28970 == null))){
if(cljs.core.coll_QMARK_.call(null,item_28970)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_28970)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_28970));
}
} else {
}

var G__28971 = cljs.core.next.call(null,seq__28947_28964__$1);
var G__28972 = null;
var G__28973 = (0);
var G__28974 = (0);
seq__28947_28954 = G__28971;
chunk__28948_28955 = G__28972;
count__28949_28956 = G__28973;
i__28950_28957 = G__28974;
continue;
}
} else {
}
}
break;
}

return group;
});

devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0);

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq28946){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28946));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__9014__auto__ = [];
var len__9007__auto___28982 = arguments.length;
var i__9008__auto___28983 = (0);
while(true){
if((i__9008__auto___28983 < len__9007__auto___28982)){
args__9014__auto__.push((arguments[i__9008__auto___28983]));

var G__28984 = (i__9008__auto___28983 + (1));
i__9008__auto___28983 = G__28984;
continue;
} else {
}
break;
}

var argseq__9015__auto__ = ((((2) < args__9014__auto__.length))?(new cljs.core.IndexedSeq(args__9014__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9015__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__28978_28985 = cljs.core.seq.call(null,children);
var chunk__28979_28986 = null;
var count__28980_28987 = (0);
var i__28981_28988 = (0);
while(true){
if((i__28981_28988 < count__28980_28987)){
var child_28989 = cljs.core._nth.call(null,chunk__28979_28986,i__28981_28988);
if(!((child_28989 == null))){
if(cljs.core.coll_QMARK_.call(null,child_28989)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_28989))));
} else {
var temp__6751__auto___28990 = devtools.formatters.helpers.pref.call(null,child_28989);
if(cljs.core.truth_(temp__6751__auto___28990)){
var child_value_28991 = temp__6751__auto___28990;
template.push(child_value_28991);
} else {
}
}
} else {
}

var G__28992 = seq__28978_28985;
var G__28993 = chunk__28979_28986;
var G__28994 = count__28980_28987;
var G__28995 = (i__28981_28988 + (1));
seq__28978_28985 = G__28992;
chunk__28979_28986 = G__28993;
count__28980_28987 = G__28994;
i__28981_28988 = G__28995;
continue;
} else {
var temp__6753__auto___28996 = cljs.core.seq.call(null,seq__28978_28985);
if(temp__6753__auto___28996){
var seq__28978_28997__$1 = temp__6753__auto___28996;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28978_28997__$1)){
var c__8686__auto___28998 = cljs.core.chunk_first.call(null,seq__28978_28997__$1);
var G__28999 = cljs.core.chunk_rest.call(null,seq__28978_28997__$1);
var G__29000 = c__8686__auto___28998;
var G__29001 = cljs.core.count.call(null,c__8686__auto___28998);
var G__29002 = (0);
seq__28978_28985 = G__28999;
chunk__28979_28986 = G__29000;
count__28980_28987 = G__29001;
i__28981_28988 = G__29002;
continue;
} else {
var child_29003 = cljs.core.first.call(null,seq__28978_28997__$1);
if(!((child_29003 == null))){
if(cljs.core.coll_QMARK_.call(null,child_29003)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_29003))));
} else {
var temp__6751__auto___29004 = devtools.formatters.helpers.pref.call(null,child_29003);
if(cljs.core.truth_(temp__6751__auto___29004)){
var child_value_29005 = temp__6751__auto___29004;
template.push(child_value_29005);
} else {
}
}
} else {
}

var G__29006 = cljs.core.next.call(null,seq__28978_28997__$1);
var G__29007 = null;
var G__29008 = (0);
var G__29009 = (0);
seq__28978_28985 = G__29006;
chunk__28979_28986 = G__29007;
count__28980_28987 = G__29008;
i__28981_28988 = G__29009;
continue;
}
} else {
}
}
break;
}

return template;
});

devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2);

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq28975){
var G__28976 = cljs.core.first.call(null,seq28975);
var seq28975__$1 = cljs.core.next.call(null,seq28975);
var G__28977 = cljs.core.first.call(null,seq28975__$1);
var seq28975__$2 = cljs.core.next.call(null,seq28975__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__28976,G__28977,seq28975__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__9014__auto__ = [];
var len__9007__auto___29012 = arguments.length;
var i__9008__auto___29013 = (0);
while(true){
if((i__9008__auto___29013 < len__9007__auto___29012)){
args__9014__auto__.push((arguments[i__9008__auto___29013]));

var G__29014 = (i__9008__auto___29013 + (1));
i__9008__auto___29013 = G__29014;
continue;
} else {
}
break;
}

var argseq__9015__auto__ = ((((1) < args__9014__auto__.length))?(new cljs.core.IndexedSeq(args__9014__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9015__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,goog.object.get(template,"concat").apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq29010){
var G__29011 = cljs.core.first.call(null,seq29010);
var seq29010__$1 = cljs.core.next.call(null,seq29010);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29011,seq29010__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__9014__auto__ = [];
var len__9007__auto___29017 = arguments.length;
var i__9008__auto___29018 = (0);
while(true){
if((i__9008__auto___29018 < len__9007__auto___29017)){
args__9014__auto__.push((arguments[i__9008__auto___29018]));

var G__29019 = (i__9008__auto___29018 + (1));
i__9008__auto___29018 = G__29019;
continue;
} else {
}
break;
}

var argseq__9015__auto__ = ((((1) < args__9014__auto__.length))?(new cljs.core.IndexedSeq(args__9014__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9015__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq29015){
var G__29016 = cljs.core.first.call(null,seq29015);
var seq29015__$1 = cljs.core.next.call(null,seq29015);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29016,seq29015__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var G__29021 = arguments.length;
switch (G__29021) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj29023 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__7774__auto__ = start_index;
if(cljs.core.truth_(or__7774__auto__)){
return or__7774__auto__;
} else {
return (0);
}
})()};
return obj29023;
})());
});

devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4;

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"target");
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"header");
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"body");
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"startIndex");
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__9014__auto__ = [];
var len__9007__auto___29031 = arguments.length;
var i__9008__auto___29032 = (0);
while(true){
if((i__9008__auto___29032 < len__9007__auto___29031)){
args__9014__auto__.push((arguments[i__9008__auto___29032]));

var G__29033 = (i__9008__auto___29032 + (1));
i__9008__auto___29032 = G__29033;
continue;
} else {
}
break;
}

var argseq__9015__auto__ = ((((1) < args__9014__auto__.length))?(new cljs.core.IndexedSeq(args__9014__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9015__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__29027){
var vec__29028 = p__29027;
var state_override_fn = cljs.core.nth.call(null,vec__29028,(0),null);
if(((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = ((!((state_override_fn == null)))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq29025){
var G__29026 = cljs.core.first.call(null,seq29025);
var seq29025__$1 = cljs.core.next.call(null,seq29025);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__29026,seq29025__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__8878__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_29034_29037 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_29035_29038 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_29034_29037,_STAR_print_fn_STAR_29035_29038,sb__8878__auto__){
return (function (x__8879__auto__){
return sb__8878__auto__.append(x__8879__auto__);
});})(_STAR_print_newline_STAR_29034_29037,_STAR_print_fn_STAR_29035_29038,sb__8878__auto__))
;

try{var _STAR_print_level_STAR_29036_29039 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_29036_29039;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_29035_29038;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_29034_29037;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__8878__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_29040 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_29040;
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.formatters.templating.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.formatters.templating.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Render path: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Render stack:\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_))].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("false")].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return (cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate"));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__29041 = name;
switch (G__29041) {
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = (cljs.core.truth_(devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("no matching special tag name: '"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'")].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string')){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__29043 = tag;
var html_tag = cljs.core.nth.call(null,vec__29043,(0),null);
var style = cljs.core.nth.call(null,vec__29043,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_29046 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid json-ml markup at "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.print_preview.call(null,markup)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''));

}
}
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_29046;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_29047 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_29048 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_29048;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_29047;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("result of markup rendering must be a template,\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("resolved to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("initial value: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__29049 = initial_value;
var G__29050 = value.call(null);
initial_value = G__29049;
value = G__29050;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__29051 = initial_value;
var G__29052 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__29051;
value = G__29052;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__29053 = initial_value;
var G__29054 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__29053;
value = G__29054;
continue;
} else {
if(cljs.core.truth_(devtools.formatters.templating.template_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.reference_QMARK_.call(null,value))){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

//# sourceMappingURL=templating.js.map?rel=1504091239359