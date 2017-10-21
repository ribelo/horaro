// Compiled by ClojureScript 1.9.671 {}
goog.provide('devtools.format');
goog.require('cljs.core');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__8493__auto__ = (((value == null))?null:value);
var m__8494__auto__ = (devtools.format._header[goog.typeOf(x__8493__auto__)]);
if(!((m__8494__auto__ == null))){
return m__8494__auto__.call(null,value);
} else {
var m__8494__auto____$1 = (devtools.format._header["_"]);
if(!((m__8494__auto____$1 == null))){
return m__8494__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__8493__auto__ = (((value == null))?null:value);
var m__8494__auto__ = (devtools.format._has_body[goog.typeOf(x__8493__auto__)]);
if(!((m__8494__auto__ == null))){
return m__8494__auto__.call(null,value);
} else {
var m__8494__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__8494__auto____$1 == null))){
return m__8494__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__8493__auto__ = (((value == null))?null:value);
var m__8494__auto__ = (devtools.format._body[goog.typeOf(x__8493__auto__)]);
if(!((m__8494__auto__ == null))){
return m__8494__auto__.call(null,value);
} else {
var m__8494__auto____$1 = (devtools.format._body["_"]);
if(!((m__8494__auto____$1 == null))){
return m__8494__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__6753__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__6753__auto__)){
var o__27064__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__27064__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__27064__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__27064__auto____$1,"templating");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__27063__auto__ = temp__6753__auto____$2;
return goog.object.get(o__27063__auto__,"make_template");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__6753__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__6753__auto__)){
var o__27064__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__27064__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__27064__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__27064__auto____$1,"templating");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__27063__auto__ = temp__6753__auto____$2;
return goog.object.get(o__27063__auto__,"make_group");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__6753__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__6753__auto__)){
var o__27064__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__27064__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__27064__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__27064__auto____$1,"templating");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__27063__auto__ = temp__6753__auto____$2;
return goog.object.get(o__27063__auto__,"make_reference");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__6753__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__6753__auto__)){
var o__27064__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__27064__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__27064__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__27064__auto____$1,"templating");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__27063__auto__ = temp__6753__auto____$2;
return goog.object.get(o__27063__auto__,"make_surrogate");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__6753__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__6753__auto__)){
var o__27064__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__27064__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__27064__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__27064__auto____$1,"templating");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__27063__auto__ = temp__6753__auto____$2;
return goog.object.get(o__27063__auto__,"render_markup");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__6753__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__6753__auto__)){
var o__27064__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__27064__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__27064__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__27064__auto____$1,"markup");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__27063__auto__ = temp__6753__auto____$2;
return goog.object.get(o__27063__auto__,"_LT_header_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__6753__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__6753__auto__)){
var o__27064__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__27064__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__27064__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__27064__auto____$1,"markup");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__27063__auto__ = temp__6753__auto____$2;
return goog.object.get(o__27063__auto__,"_LT_standard_body_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__9014__auto__ = [];
var len__9007__auto___27085 = arguments.length;
var i__9008__auto___27086 = (0);
while(true){
if((i__9008__auto___27086 < len__9007__auto___27085)){
args__9014__auto__.push((arguments[i__9008__auto___27086]));

var G__27087 = (i__9008__auto___27086 + (1));
i__9008__auto___27086 = G__27087;
continue;
} else {
}
break;
}

var argseq__9015__auto__ = ((((0) < args__9014__auto__.length))?(new cljs.core.IndexedSeq(args__9014__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__9015__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq27084){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27084));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__9014__auto__ = [];
var len__9007__auto___27089 = arguments.length;
var i__9008__auto___27090 = (0);
while(true){
if((i__9008__auto___27090 < len__9007__auto___27089)){
args__9014__auto__.push((arguments[i__9008__auto___27090]));

var G__27091 = (i__9008__auto___27090 + (1));
i__9008__auto___27090 = G__27091;
continue;
} else {
}
break;
}

var argseq__9015__auto__ = ((((0) < args__9014__auto__.length))?(new cljs.core.IndexedSeq(args__9014__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__9015__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq27088){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27088));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__9014__auto__ = [];
var len__9007__auto___27093 = arguments.length;
var i__9008__auto___27094 = (0);
while(true){
if((i__9008__auto___27094 < len__9007__auto___27093)){
args__9014__auto__.push((arguments[i__9008__auto___27094]));

var G__27095 = (i__9008__auto___27094 + (1));
i__9008__auto___27094 = G__27095;
continue;
} else {
}
break;
}

var argseq__9015__auto__ = ((((0) < args__9014__auto__.length))?(new cljs.core.IndexedSeq(args__9014__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__9015__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq27092){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27092));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__9014__auto__ = [];
var len__9007__auto___27097 = arguments.length;
var i__9008__auto___27098 = (0);
while(true){
if((i__9008__auto___27098 < len__9007__auto___27097)){
args__9014__auto__.push((arguments[i__9008__auto___27098]));

var G__27099 = (i__9008__auto___27098 + (1));
i__9008__auto___27098 = G__27099;
continue;
} else {
}
break;
}

var argseq__9015__auto__ = ((((0) < args__9014__auto__.length))?(new cljs.core.IndexedSeq(args__9014__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__9015__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq27096){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27096));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__9014__auto__ = [];
var len__9007__auto___27101 = arguments.length;
var i__9008__auto___27102 = (0);
while(true){
if((i__9008__auto___27102 < len__9007__auto___27101)){
args__9014__auto__.push((arguments[i__9008__auto___27102]));

var G__27103 = (i__9008__auto___27102 + (1));
i__9008__auto___27102 = G__27103;
continue;
} else {
}
break;
}

var argseq__9015__auto__ = ((((0) < args__9014__auto__.length))?(new cljs.core.IndexedSeq(args__9014__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__9015__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq27100){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27100));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__9014__auto__ = [];
var len__9007__auto___27105 = arguments.length;
var i__9008__auto___27106 = (0);
while(true){
if((i__9008__auto___27106 < len__9007__auto___27105)){
args__9014__auto__.push((arguments[i__9008__auto___27106]));

var G__27107 = (i__9008__auto___27106 + (1));
i__9008__auto___27106 = G__27107;
continue;
} else {
}
break;
}

var argseq__9015__auto__ = ((((0) < args__9014__auto__.length))?(new cljs.core.IndexedSeq(args__9014__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__9015__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq27104){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27104));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__9014__auto__ = [];
var len__9007__auto___27109 = arguments.length;
var i__9008__auto___27110 = (0);
while(true){
if((i__9008__auto___27110 < len__9007__auto___27109)){
args__9014__auto__.push((arguments[i__9008__auto___27110]));

var G__27111 = (i__9008__auto___27110 + (1));
i__9008__auto___27110 = G__27111;
continue;
} else {
}
break;
}

var argseq__9015__auto__ = ((((0) < args__9014__auto__.length))?(new cljs.core.IndexedSeq(args__9014__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__9015__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq27108){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27108));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__9014__auto__ = [];
var len__9007__auto___27119 = arguments.length;
var i__9008__auto___27120 = (0);
while(true){
if((i__9008__auto___27120 < len__9007__auto___27119)){
args__9014__auto__.push((arguments[i__9008__auto___27120]));

var G__27121 = (i__9008__auto___27120 + (1));
i__9008__auto___27120 = G__27121;
continue;
} else {
}
break;
}

var argseq__9015__auto__ = ((((1) < args__9014__auto__.length))?(new cljs.core.IndexedSeq(args__9014__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9015__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__27115){
var vec__27116 = p__27115;
var state_override = cljs.core.nth.call(null,vec__27116,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__27116,state_override){
return (function (p1__27112_SHARP_){
return cljs.core.merge.call(null,p1__27112_SHARP_,state_override);
});})(vec__27116,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq27113){
var G__27114 = cljs.core.first.call(null,seq27113);
var seq27113__$1 = cljs.core.next.call(null,seq27113);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__27114,seq27113__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__9014__auto__ = [];
var len__9007__auto___27123 = arguments.length;
var i__9008__auto___27124 = (0);
while(true){
if((i__9008__auto___27124 < len__9007__auto___27123)){
args__9014__auto__.push((arguments[i__9008__auto___27124]));

var G__27125 = (i__9008__auto___27124 + (1));
i__9008__auto___27124 = G__27125;
continue;
} else {
}
break;
}

var argseq__9015__auto__ = ((((0) < args__9014__auto__.length))?(new cljs.core.IndexedSeq(args__9014__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__9015__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq27122){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27122));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__9014__auto__ = [];
var len__9007__auto___27128 = arguments.length;
var i__9008__auto___27129 = (0);
while(true){
if((i__9008__auto___27129 < len__9007__auto___27128)){
args__9014__auto__.push((arguments[i__9008__auto___27129]));

var G__27130 = (i__9008__auto___27129 + (1));
i__9008__auto___27129 = G__27130;
continue;
} else {
}
break;
}

var argseq__9015__auto__ = ((((1) < args__9014__auto__.length))?(new cljs.core.IndexedSeq(args__9014__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9015__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq27126){
var G__27127 = cljs.core.first.call(null,seq27126);
var seq27126__$1 = cljs.core.next.call(null,seq27126);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__27127,seq27126__$1);
});


//# sourceMappingURL=format.js.map?rel=1504091235655