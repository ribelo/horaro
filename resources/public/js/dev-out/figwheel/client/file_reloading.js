// Compiled by ClojureScript 1.9.671 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__28818__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__28818__auto__){
return or__28818__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__28818__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__28818__auto__)){
return or__28818__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__33958_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__33958_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__33959 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__33960 = null;
var count__33961 = (0);
var i__33962 = (0);
while(true){
if((i__33962 < count__33961)){
var n = cljs.core._nth.call(null,chunk__33960,i__33962);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__33963 = seq__33959;
var G__33964 = chunk__33960;
var G__33965 = count__33961;
var G__33966 = (i__33962 + (1));
seq__33959 = G__33963;
chunk__33960 = G__33964;
count__33961 = G__33965;
i__33962 = G__33966;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__33959);
if(temp__6753__auto__){
var seq__33959__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33959__$1)){
var c__29730__auto__ = cljs.core.chunk_first.call(null,seq__33959__$1);
var G__33967 = cljs.core.chunk_rest.call(null,seq__33959__$1);
var G__33968 = c__29730__auto__;
var G__33969 = cljs.core.count.call(null,c__29730__auto__);
var G__33970 = (0);
seq__33959 = G__33967;
chunk__33960 = G__33968;
count__33961 = G__33969;
i__33962 = G__33970;
continue;
} else {
var n = cljs.core.first.call(null,seq__33959__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__33971 = cljs.core.next.call(null,seq__33959__$1);
var G__33972 = null;
var G__33973 = (0);
var G__33974 = (0);
seq__33959 = G__33971;
chunk__33960 = G__33972;
count__33961 = G__33973;
i__33962 = G__33974;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__33984_33992 = cljs.core.seq.call(null,deps);
var chunk__33985_33993 = null;
var count__33986_33994 = (0);
var i__33987_33995 = (0);
while(true){
if((i__33987_33995 < count__33986_33994)){
var dep_33996 = cljs.core._nth.call(null,chunk__33985_33993,i__33987_33995);
topo_sort_helper_STAR_.call(null,dep_33996,(depth + (1)),state);

var G__33997 = seq__33984_33992;
var G__33998 = chunk__33985_33993;
var G__33999 = count__33986_33994;
var G__34000 = (i__33987_33995 + (1));
seq__33984_33992 = G__33997;
chunk__33985_33993 = G__33998;
count__33986_33994 = G__33999;
i__33987_33995 = G__34000;
continue;
} else {
var temp__6753__auto___34001 = cljs.core.seq.call(null,seq__33984_33992);
if(temp__6753__auto___34001){
var seq__33984_34002__$1 = temp__6753__auto___34001;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33984_34002__$1)){
var c__29730__auto___34003 = cljs.core.chunk_first.call(null,seq__33984_34002__$1);
var G__34004 = cljs.core.chunk_rest.call(null,seq__33984_34002__$1);
var G__34005 = c__29730__auto___34003;
var G__34006 = cljs.core.count.call(null,c__29730__auto___34003);
var G__34007 = (0);
seq__33984_33992 = G__34004;
chunk__33985_33993 = G__34005;
count__33986_33994 = G__34006;
i__33987_33995 = G__34007;
continue;
} else {
var dep_34008 = cljs.core.first.call(null,seq__33984_34002__$1);
topo_sort_helper_STAR_.call(null,dep_34008,(depth + (1)),state);

var G__34009 = cljs.core.next.call(null,seq__33984_34002__$1);
var G__34010 = null;
var G__34011 = (0);
var G__34012 = (0);
seq__33984_33992 = G__34009;
chunk__33985_33993 = G__34010;
count__33986_33994 = G__34011;
i__33987_33995 = G__34012;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__33988){
var vec__33989 = p__33988;
var seq__33990 = cljs.core.seq.call(null,vec__33989);
var first__33991 = cljs.core.first.call(null,seq__33990);
var seq__33990__$1 = cljs.core.next.call(null,seq__33990);
var x = first__33991;
var xs = seq__33990__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__33989,seq__33990,first__33991,seq__33990__$1,x,xs,get_deps__$1){
return (function (p1__33975_SHARP_){
return clojure.set.difference.call(null,p1__33975_SHARP_,x);
});})(vec__33989,seq__33990,first__33991,seq__33990__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__34013 = cljs.core.seq.call(null,provides);
var chunk__34014 = null;
var count__34015 = (0);
var i__34016 = (0);
while(true){
if((i__34016 < count__34015)){
var prov = cljs.core._nth.call(null,chunk__34014,i__34016);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34017_34025 = cljs.core.seq.call(null,requires);
var chunk__34018_34026 = null;
var count__34019_34027 = (0);
var i__34020_34028 = (0);
while(true){
if((i__34020_34028 < count__34019_34027)){
var req_34029 = cljs.core._nth.call(null,chunk__34018_34026,i__34020_34028);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34029,prov);

var G__34030 = seq__34017_34025;
var G__34031 = chunk__34018_34026;
var G__34032 = count__34019_34027;
var G__34033 = (i__34020_34028 + (1));
seq__34017_34025 = G__34030;
chunk__34018_34026 = G__34031;
count__34019_34027 = G__34032;
i__34020_34028 = G__34033;
continue;
} else {
var temp__6753__auto___34034 = cljs.core.seq.call(null,seq__34017_34025);
if(temp__6753__auto___34034){
var seq__34017_34035__$1 = temp__6753__auto___34034;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34017_34035__$1)){
var c__29730__auto___34036 = cljs.core.chunk_first.call(null,seq__34017_34035__$1);
var G__34037 = cljs.core.chunk_rest.call(null,seq__34017_34035__$1);
var G__34038 = c__29730__auto___34036;
var G__34039 = cljs.core.count.call(null,c__29730__auto___34036);
var G__34040 = (0);
seq__34017_34025 = G__34037;
chunk__34018_34026 = G__34038;
count__34019_34027 = G__34039;
i__34020_34028 = G__34040;
continue;
} else {
var req_34041 = cljs.core.first.call(null,seq__34017_34035__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34041,prov);

var G__34042 = cljs.core.next.call(null,seq__34017_34035__$1);
var G__34043 = null;
var G__34044 = (0);
var G__34045 = (0);
seq__34017_34025 = G__34042;
chunk__34018_34026 = G__34043;
count__34019_34027 = G__34044;
i__34020_34028 = G__34045;
continue;
}
} else {
}
}
break;
}

var G__34046 = seq__34013;
var G__34047 = chunk__34014;
var G__34048 = count__34015;
var G__34049 = (i__34016 + (1));
seq__34013 = G__34046;
chunk__34014 = G__34047;
count__34015 = G__34048;
i__34016 = G__34049;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__34013);
if(temp__6753__auto__){
var seq__34013__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34013__$1)){
var c__29730__auto__ = cljs.core.chunk_first.call(null,seq__34013__$1);
var G__34050 = cljs.core.chunk_rest.call(null,seq__34013__$1);
var G__34051 = c__29730__auto__;
var G__34052 = cljs.core.count.call(null,c__29730__auto__);
var G__34053 = (0);
seq__34013 = G__34050;
chunk__34014 = G__34051;
count__34015 = G__34052;
i__34016 = G__34053;
continue;
} else {
var prov = cljs.core.first.call(null,seq__34013__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34021_34054 = cljs.core.seq.call(null,requires);
var chunk__34022_34055 = null;
var count__34023_34056 = (0);
var i__34024_34057 = (0);
while(true){
if((i__34024_34057 < count__34023_34056)){
var req_34058 = cljs.core._nth.call(null,chunk__34022_34055,i__34024_34057);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34058,prov);

var G__34059 = seq__34021_34054;
var G__34060 = chunk__34022_34055;
var G__34061 = count__34023_34056;
var G__34062 = (i__34024_34057 + (1));
seq__34021_34054 = G__34059;
chunk__34022_34055 = G__34060;
count__34023_34056 = G__34061;
i__34024_34057 = G__34062;
continue;
} else {
var temp__6753__auto___34063__$1 = cljs.core.seq.call(null,seq__34021_34054);
if(temp__6753__auto___34063__$1){
var seq__34021_34064__$1 = temp__6753__auto___34063__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34021_34064__$1)){
var c__29730__auto___34065 = cljs.core.chunk_first.call(null,seq__34021_34064__$1);
var G__34066 = cljs.core.chunk_rest.call(null,seq__34021_34064__$1);
var G__34067 = c__29730__auto___34065;
var G__34068 = cljs.core.count.call(null,c__29730__auto___34065);
var G__34069 = (0);
seq__34021_34054 = G__34066;
chunk__34022_34055 = G__34067;
count__34023_34056 = G__34068;
i__34024_34057 = G__34069;
continue;
} else {
var req_34070 = cljs.core.first.call(null,seq__34021_34064__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34070,prov);

var G__34071 = cljs.core.next.call(null,seq__34021_34064__$1);
var G__34072 = null;
var G__34073 = (0);
var G__34074 = (0);
seq__34021_34054 = G__34071;
chunk__34022_34055 = G__34072;
count__34023_34056 = G__34073;
i__34024_34057 = G__34074;
continue;
}
} else {
}
}
break;
}

var G__34075 = cljs.core.next.call(null,seq__34013__$1);
var G__34076 = null;
var G__34077 = (0);
var G__34078 = (0);
seq__34013 = G__34075;
chunk__34014 = G__34076;
count__34015 = G__34077;
i__34016 = G__34078;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__34079_34083 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__34080_34084 = null;
var count__34081_34085 = (0);
var i__34082_34086 = (0);
while(true){
if((i__34082_34086 < count__34081_34085)){
var ns_34087 = cljs.core._nth.call(null,chunk__34080_34084,i__34082_34086);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34087);

var G__34088 = seq__34079_34083;
var G__34089 = chunk__34080_34084;
var G__34090 = count__34081_34085;
var G__34091 = (i__34082_34086 + (1));
seq__34079_34083 = G__34088;
chunk__34080_34084 = G__34089;
count__34081_34085 = G__34090;
i__34082_34086 = G__34091;
continue;
} else {
var temp__6753__auto___34092 = cljs.core.seq.call(null,seq__34079_34083);
if(temp__6753__auto___34092){
var seq__34079_34093__$1 = temp__6753__auto___34092;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34079_34093__$1)){
var c__29730__auto___34094 = cljs.core.chunk_first.call(null,seq__34079_34093__$1);
var G__34095 = cljs.core.chunk_rest.call(null,seq__34079_34093__$1);
var G__34096 = c__29730__auto___34094;
var G__34097 = cljs.core.count.call(null,c__29730__auto___34094);
var G__34098 = (0);
seq__34079_34083 = G__34095;
chunk__34080_34084 = G__34096;
count__34081_34085 = G__34097;
i__34082_34086 = G__34098;
continue;
} else {
var ns_34099 = cljs.core.first.call(null,seq__34079_34093__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34099);

var G__34100 = cljs.core.next.call(null,seq__34079_34093__$1);
var G__34101 = null;
var G__34102 = (0);
var G__34103 = (0);
seq__34079_34083 = G__34100;
chunk__34080_34084 = G__34101;
count__34081_34085 = G__34102;
i__34082_34086 = G__34103;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__28818__auto__ = goog.require__;
if(cljs.core.truth_(or__28818__auto__)){
return or__28818__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__34104__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__34104 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34105__i = 0, G__34105__a = new Array(arguments.length -  0);
while (G__34105__i < G__34105__a.length) {G__34105__a[G__34105__i] = arguments[G__34105__i + 0]; ++G__34105__i;}
  args = new cljs.core.IndexedSeq(G__34105__a,0,null);
} 
return G__34104__delegate.call(this,args);};
G__34104.cljs$lang$maxFixedArity = 0;
G__34104.cljs$lang$applyTo = (function (arglist__34106){
var args = cljs.core.seq(arglist__34106);
return G__34104__delegate(args);
});
G__34104.cljs$core$IFn$_invoke$arity$variadic = G__34104__delegate;
return G__34104;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__34107 = cljs.core._EQ_;
var expr__34108 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__34107.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__34108))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__34107,expr__34108){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__34107,expr__34108))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__34107,expr__34108){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e34110){if((e34110 instanceof Error)){
var e = e34110;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34110;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__34107,expr__34108))
} else {
if(cljs.core.truth_(pred__34107.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__34108))){
return ((function (pred__34107,expr__34108){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__34107,expr__34108){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__34107,expr__34108))
);

return deferred.addErrback(((function (deferred,pred__34107,expr__34108){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__34107,expr__34108))
);
});
;})(pred__34107,expr__34108))
} else {
if(cljs.core.truth_(pred__34107.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__34108))){
return ((function (pred__34107,expr__34108){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e34111){if((e34111 instanceof Error)){
var e = e34111;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34111;

}
}})());
});
;})(pred__34107,expr__34108))
} else {
return ((function (pred__34107,expr__34108){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__34107,expr__34108))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__34112,callback){
var map__34113 = p__34112;
var map__34113__$1 = ((((!((map__34113 == null)))?((((map__34113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34113.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34113):map__34113);
var file_msg = map__34113__$1;
var request_url = cljs.core.get.call(null,map__34113__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Attempting to load "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__34113,map__34113__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Successfully loaded "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__34113,map__34113__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__31860__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31860__auto__){
return (function (){
var f__31861__auto__ = (function (){var switch__31770__auto__ = ((function (c__31860__auto__){
return (function (state_34137){
var state_val_34138 = (state_34137[(1)]);
if((state_val_34138 === (7))){
var inst_34133 = (state_34137[(2)]);
var state_34137__$1 = state_34137;
var statearr_34139_34156 = state_34137__$1;
(statearr_34139_34156[(2)] = inst_34133);

(statearr_34139_34156[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34138 === (1))){
var state_34137__$1 = state_34137;
var statearr_34140_34157 = state_34137__$1;
(statearr_34140_34157[(2)] = null);

(statearr_34140_34157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34138 === (4))){
var inst_34117 = (state_34137[(7)]);
var inst_34117__$1 = (state_34137[(2)]);
var state_34137__$1 = (function (){var statearr_34141 = state_34137;
(statearr_34141[(7)] = inst_34117__$1);

return statearr_34141;
})();
if(cljs.core.truth_(inst_34117__$1)){
var statearr_34142_34158 = state_34137__$1;
(statearr_34142_34158[(1)] = (5));

} else {
var statearr_34143_34159 = state_34137__$1;
(statearr_34143_34159[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34138 === (6))){
var state_34137__$1 = state_34137;
var statearr_34144_34160 = state_34137__$1;
(statearr_34144_34160[(2)] = null);

(statearr_34144_34160[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34138 === (3))){
var inst_34135 = (state_34137[(2)]);
var state_34137__$1 = state_34137;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34137__$1,inst_34135);
} else {
if((state_val_34138 === (2))){
var state_34137__$1 = state_34137;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34137__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_34138 === (11))){
var inst_34129 = (state_34137[(2)]);
var state_34137__$1 = (function (){var statearr_34145 = state_34137;
(statearr_34145[(8)] = inst_34129);

return statearr_34145;
})();
var statearr_34146_34161 = state_34137__$1;
(statearr_34146_34161[(2)] = null);

(statearr_34146_34161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34138 === (9))){
var inst_34121 = (state_34137[(9)]);
var inst_34123 = (state_34137[(10)]);
var inst_34125 = inst_34123.call(null,inst_34121);
var state_34137__$1 = state_34137;
var statearr_34147_34162 = state_34137__$1;
(statearr_34147_34162[(2)] = inst_34125);

(statearr_34147_34162[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34138 === (5))){
var inst_34117 = (state_34137[(7)]);
var inst_34119 = figwheel.client.file_reloading.blocking_load.call(null,inst_34117);
var state_34137__$1 = state_34137;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34137__$1,(8),inst_34119);
} else {
if((state_val_34138 === (10))){
var inst_34121 = (state_34137[(9)]);
var inst_34127 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_34121);
var state_34137__$1 = state_34137;
var statearr_34148_34163 = state_34137__$1;
(statearr_34148_34163[(2)] = inst_34127);

(statearr_34148_34163[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34138 === (8))){
var inst_34123 = (state_34137[(10)]);
var inst_34117 = (state_34137[(7)]);
var inst_34121 = (state_34137[(2)]);
var inst_34122 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_34123__$1 = cljs.core.get.call(null,inst_34122,inst_34117);
var state_34137__$1 = (function (){var statearr_34149 = state_34137;
(statearr_34149[(9)] = inst_34121);

(statearr_34149[(10)] = inst_34123__$1);

return statearr_34149;
})();
if(cljs.core.truth_(inst_34123__$1)){
var statearr_34150_34164 = state_34137__$1;
(statearr_34150_34164[(1)] = (9));

} else {
var statearr_34151_34165 = state_34137__$1;
(statearr_34151_34165[(1)] = (10));

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
});})(c__31860__auto__))
;
return ((function (switch__31770__auto__,c__31860__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__31771__auto__ = null;
var figwheel$client$file_reloading$state_machine__31771__auto____0 = (function (){
var statearr_34152 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34152[(0)] = figwheel$client$file_reloading$state_machine__31771__auto__);

(statearr_34152[(1)] = (1));

return statearr_34152;
});
var figwheel$client$file_reloading$state_machine__31771__auto____1 = (function (state_34137){
while(true){
var ret_value__31772__auto__ = (function (){try{while(true){
var result__31773__auto__ = switch__31770__auto__.call(null,state_34137);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31773__auto__;
}
break;
}
}catch (e34153){if((e34153 instanceof Object)){
var ex__31774__auto__ = e34153;
var statearr_34154_34166 = state_34137;
(statearr_34154_34166[(5)] = ex__31774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34137);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34153;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34167 = state_34137;
state_34137 = G__34167;
continue;
} else {
return ret_value__31772__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__31771__auto__ = function(state_34137){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__31771__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__31771__auto____1.call(this,state_34137);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__31771__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__31771__auto____0;
figwheel$client$file_reloading$state_machine__31771__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__31771__auto____1;
return figwheel$client$file_reloading$state_machine__31771__auto__;
})()
;})(switch__31770__auto__,c__31860__auto__))
})();
var state__31862__auto__ = (function (){var statearr_34155 = f__31861__auto__.call(null);
(statearr_34155[(6)] = c__31860__auto__);

return statearr_34155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31862__auto__);
});})(c__31860__auto__))
);

return c__31860__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__34168,callback){
var map__34169 = p__34168;
var map__34169__$1 = ((((!((map__34169 == null)))?((((map__34169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34169.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34169):map__34169);
var file_msg = map__34169__$1;
var namespace = cljs.core.get.call(null,map__34169__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__34169,map__34169__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__34169,map__34169__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__34171){
var map__34172 = p__34171;
var map__34172__$1 = ((((!((map__34172 == null)))?((((map__34172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34172.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34172):map__34172);
var file_msg = map__34172__$1;
var namespace = cljs.core.get.call(null,map__34172__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__34174){
var map__34175 = p__34174;
var map__34175__$1 = ((((!((map__34175 == null)))?((((map__34175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34175.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34175):map__34175);
var file_msg = map__34175__$1;
var namespace = cljs.core.get.call(null,map__34175__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__28806__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__28806__auto__){
var or__28818__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__28818__auto__)){
return or__28818__auto__;
} else {
var or__28818__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__28818__auto____$1)){
return or__28818__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__28806__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__34177,callback){
var map__34178 = p__34177;
var map__34178__$1 = ((((!((map__34178 == null)))?((((map__34178.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34178.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34178):map__34178);
var file_msg = map__34178__$1;
var request_url = cljs.core.get.call(null,map__34178__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__34178__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not trying to load file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__31860__auto___34228 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31860__auto___34228,out){
return (function (){
var f__31861__auto__ = (function (){var switch__31770__auto__ = ((function (c__31860__auto___34228,out){
return (function (state_34213){
var state_val_34214 = (state_34213[(1)]);
if((state_val_34214 === (1))){
var inst_34187 = cljs.core.seq.call(null,files);
var inst_34188 = cljs.core.first.call(null,inst_34187);
var inst_34189 = cljs.core.next.call(null,inst_34187);
var inst_34190 = files;
var state_34213__$1 = (function (){var statearr_34215 = state_34213;
(statearr_34215[(7)] = inst_34190);

(statearr_34215[(8)] = inst_34188);

(statearr_34215[(9)] = inst_34189);

return statearr_34215;
})();
var statearr_34216_34229 = state_34213__$1;
(statearr_34216_34229[(2)] = null);

(statearr_34216_34229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34214 === (2))){
var inst_34196 = (state_34213[(10)]);
var inst_34190 = (state_34213[(7)]);
var inst_34195 = cljs.core.seq.call(null,inst_34190);
var inst_34196__$1 = cljs.core.first.call(null,inst_34195);
var inst_34197 = cljs.core.next.call(null,inst_34195);
var inst_34198 = (inst_34196__$1 == null);
var inst_34199 = cljs.core.not.call(null,inst_34198);
var state_34213__$1 = (function (){var statearr_34217 = state_34213;
(statearr_34217[(10)] = inst_34196__$1);

(statearr_34217[(11)] = inst_34197);

return statearr_34217;
})();
if(inst_34199){
var statearr_34218_34230 = state_34213__$1;
(statearr_34218_34230[(1)] = (4));

} else {
var statearr_34219_34231 = state_34213__$1;
(statearr_34219_34231[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34214 === (3))){
var inst_34211 = (state_34213[(2)]);
var state_34213__$1 = state_34213;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34213__$1,inst_34211);
} else {
if((state_val_34214 === (4))){
var inst_34196 = (state_34213[(10)]);
var inst_34201 = figwheel.client.file_reloading.reload_js_file.call(null,inst_34196);
var state_34213__$1 = state_34213;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34213__$1,(7),inst_34201);
} else {
if((state_val_34214 === (5))){
var inst_34207 = cljs.core.async.close_BANG_.call(null,out);
var state_34213__$1 = state_34213;
var statearr_34220_34232 = state_34213__$1;
(statearr_34220_34232[(2)] = inst_34207);

(statearr_34220_34232[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34214 === (6))){
var inst_34209 = (state_34213[(2)]);
var state_34213__$1 = state_34213;
var statearr_34221_34233 = state_34213__$1;
(statearr_34221_34233[(2)] = inst_34209);

(statearr_34221_34233[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34214 === (7))){
var inst_34197 = (state_34213[(11)]);
var inst_34203 = (state_34213[(2)]);
var inst_34204 = cljs.core.async.put_BANG_.call(null,out,inst_34203);
var inst_34190 = inst_34197;
var state_34213__$1 = (function (){var statearr_34222 = state_34213;
(statearr_34222[(7)] = inst_34190);

(statearr_34222[(12)] = inst_34204);

return statearr_34222;
})();
var statearr_34223_34234 = state_34213__$1;
(statearr_34223_34234[(2)] = null);

(statearr_34223_34234[(1)] = (2));


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
});})(c__31860__auto___34228,out))
;
return ((function (switch__31770__auto__,c__31860__auto___34228,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31771__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31771__auto____0 = (function (){
var statearr_34224 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34224[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31771__auto__);

(statearr_34224[(1)] = (1));

return statearr_34224;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31771__auto____1 = (function (state_34213){
while(true){
var ret_value__31772__auto__ = (function (){try{while(true){
var result__31773__auto__ = switch__31770__auto__.call(null,state_34213);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31773__auto__;
}
break;
}
}catch (e34225){if((e34225 instanceof Object)){
var ex__31774__auto__ = e34225;
var statearr_34226_34235 = state_34213;
(statearr_34226_34235[(5)] = ex__31774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34213);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34225;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34236 = state_34213;
state_34213 = G__34236;
continue;
} else {
return ret_value__31772__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31771__auto__ = function(state_34213){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31771__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31771__auto____1.call(this,state_34213);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31771__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31771__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31771__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31771__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31771__auto__;
})()
;})(switch__31770__auto__,c__31860__auto___34228,out))
})();
var state__31862__auto__ = (function (){var statearr_34227 = f__31861__auto__.call(null);
(statearr_34227[(6)] = c__31860__auto___34228);

return statearr_34227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31862__auto__);
});})(c__31860__auto___34228,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__34237,opts){
var map__34238 = p__34237;
var map__34238__$1 = ((((!((map__34238 == null)))?((((map__34238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34238.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34238):map__34238);
var eval_body = cljs.core.get.call(null,map__34238__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__34238__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__28806__auto__ = eval_body;
if(cljs.core.truth_(and__28806__auto__)){
return typeof eval_body === 'string';
} else {
return and__28806__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Evaling file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e34240){var e = e34240;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to evaluate "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__6751__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__34241_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34241_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__6751__auto__)){
var file_msg = temp__6751__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__34242){
var vec__34243 = p__34242;
var k = cljs.core.nth.call(null,vec__34243,(0),null);
var v = cljs.core.nth.call(null,vec__34243,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__34246){
var vec__34247 = p__34246;
var k = cljs.core.nth.call(null,vec__34247,(0),null);
var v = cljs.core.nth.call(null,vec__34247,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__34253,p__34254){
var map__34255 = p__34253;
var map__34255__$1 = ((((!((map__34255 == null)))?((((map__34255.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34255.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34255):map__34255);
var opts = map__34255__$1;
var before_jsload = cljs.core.get.call(null,map__34255__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__34255__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__34255__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__34256 = p__34254;
var map__34256__$1 = ((((!((map__34256 == null)))?((((map__34256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34256.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34256):map__34256);
var msg = map__34256__$1;
var files = cljs.core.get.call(null,map__34256__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__34256__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__34256__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__31860__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31860__auto__,map__34255,map__34255__$1,opts,before_jsload,on_jsload,reload_dependents,map__34256,map__34256__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__31861__auto__ = (function (){var switch__31770__auto__ = ((function (c__31860__auto__,map__34255,map__34255__$1,opts,before_jsload,on_jsload,reload_dependents,map__34256,map__34256__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_34410){
var state_val_34411 = (state_34410[(1)]);
if((state_val_34411 === (7))){
var inst_34271 = (state_34410[(7)]);
var inst_34272 = (state_34410[(8)]);
var inst_34270 = (state_34410[(9)]);
var inst_34273 = (state_34410[(10)]);
var inst_34278 = cljs.core._nth.call(null,inst_34271,inst_34273);
var inst_34279 = figwheel.client.file_reloading.eval_body.call(null,inst_34278,opts);
var inst_34280 = (inst_34273 + (1));
var tmp34412 = inst_34271;
var tmp34413 = inst_34272;
var tmp34414 = inst_34270;
var inst_34270__$1 = tmp34414;
var inst_34271__$1 = tmp34412;
var inst_34272__$1 = tmp34413;
var inst_34273__$1 = inst_34280;
var state_34410__$1 = (function (){var statearr_34415 = state_34410;
(statearr_34415[(7)] = inst_34271__$1);

(statearr_34415[(8)] = inst_34272__$1);

(statearr_34415[(9)] = inst_34270__$1);

(statearr_34415[(10)] = inst_34273__$1);

(statearr_34415[(11)] = inst_34279);

return statearr_34415;
})();
var statearr_34416_34499 = state_34410__$1;
(statearr_34416_34499[(2)] = null);

(statearr_34416_34499[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (20))){
var inst_34313 = (state_34410[(12)]);
var inst_34321 = figwheel.client.file_reloading.sort_files.call(null,inst_34313);
var state_34410__$1 = state_34410;
var statearr_34417_34500 = state_34410__$1;
(statearr_34417_34500[(2)] = inst_34321);

(statearr_34417_34500[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (27))){
var state_34410__$1 = state_34410;
var statearr_34418_34501 = state_34410__$1;
(statearr_34418_34501[(2)] = null);

(statearr_34418_34501[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (1))){
var inst_34262 = (state_34410[(13)]);
var inst_34259 = before_jsload.call(null,files);
var inst_34260 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_34261 = (function (){return ((function (inst_34262,inst_34259,inst_34260,state_val_34411,c__31860__auto__,map__34255,map__34255__$1,opts,before_jsload,on_jsload,reload_dependents,map__34256,map__34256__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34250_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34250_SHARP_);
});
;})(inst_34262,inst_34259,inst_34260,state_val_34411,c__31860__auto__,map__34255,map__34255__$1,opts,before_jsload,on_jsload,reload_dependents,map__34256,map__34256__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34262__$1 = cljs.core.filter.call(null,inst_34261,files);
var inst_34263 = cljs.core.not_empty.call(null,inst_34262__$1);
var state_34410__$1 = (function (){var statearr_34419 = state_34410;
(statearr_34419[(14)] = inst_34259);

(statearr_34419[(13)] = inst_34262__$1);

(statearr_34419[(15)] = inst_34260);

return statearr_34419;
})();
if(cljs.core.truth_(inst_34263)){
var statearr_34420_34502 = state_34410__$1;
(statearr_34420_34502[(1)] = (2));

} else {
var statearr_34421_34503 = state_34410__$1;
(statearr_34421_34503[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (24))){
var state_34410__$1 = state_34410;
var statearr_34422_34504 = state_34410__$1;
(statearr_34422_34504[(2)] = null);

(statearr_34422_34504[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (39))){
var inst_34363 = (state_34410[(16)]);
var state_34410__$1 = state_34410;
var statearr_34423_34505 = state_34410__$1;
(statearr_34423_34505[(2)] = inst_34363);

(statearr_34423_34505[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (46))){
var inst_34405 = (state_34410[(2)]);
var state_34410__$1 = state_34410;
var statearr_34424_34506 = state_34410__$1;
(statearr_34424_34506[(2)] = inst_34405);

(statearr_34424_34506[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (4))){
var inst_34307 = (state_34410[(2)]);
var inst_34308 = cljs.core.List.EMPTY;
var inst_34309 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_34308);
var inst_34310 = (function (){return ((function (inst_34307,inst_34308,inst_34309,state_val_34411,c__31860__auto__,map__34255,map__34255__$1,opts,before_jsload,on_jsload,reload_dependents,map__34256,map__34256__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34251_SHARP_){
var and__28806__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34251_SHARP_);
if(cljs.core.truth_(and__28806__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34251_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__34251_SHARP_)));
} else {
return and__28806__auto__;
}
});
;})(inst_34307,inst_34308,inst_34309,state_val_34411,c__31860__auto__,map__34255,map__34255__$1,opts,before_jsload,on_jsload,reload_dependents,map__34256,map__34256__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34311 = cljs.core.filter.call(null,inst_34310,files);
var inst_34312 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_34313 = cljs.core.concat.call(null,inst_34311,inst_34312);
var state_34410__$1 = (function (){var statearr_34425 = state_34410;
(statearr_34425[(17)] = inst_34307);

(statearr_34425[(12)] = inst_34313);

(statearr_34425[(18)] = inst_34309);

return statearr_34425;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_34426_34507 = state_34410__$1;
(statearr_34426_34507[(1)] = (16));

} else {
var statearr_34427_34508 = state_34410__$1;
(statearr_34427_34508[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (15))){
var inst_34297 = (state_34410[(2)]);
var state_34410__$1 = state_34410;
var statearr_34428_34509 = state_34410__$1;
(statearr_34428_34509[(2)] = inst_34297);

(statearr_34428_34509[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (21))){
var inst_34323 = (state_34410[(19)]);
var inst_34323__$1 = (state_34410[(2)]);
var inst_34324 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_34323__$1);
var state_34410__$1 = (function (){var statearr_34429 = state_34410;
(statearr_34429[(19)] = inst_34323__$1);

return statearr_34429;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34410__$1,(22),inst_34324);
} else {
if((state_val_34411 === (31))){
var inst_34408 = (state_34410[(2)]);
var state_34410__$1 = state_34410;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34410__$1,inst_34408);
} else {
if((state_val_34411 === (32))){
var inst_34363 = (state_34410[(16)]);
var inst_34368 = inst_34363.cljs$lang$protocol_mask$partition0$;
var inst_34369 = (inst_34368 & (64));
var inst_34370 = inst_34363.cljs$core$ISeq$;
var inst_34371 = (cljs.core.PROTOCOL_SENTINEL === inst_34370);
var inst_34372 = (inst_34369) || (inst_34371);
var state_34410__$1 = state_34410;
if(cljs.core.truth_(inst_34372)){
var statearr_34430_34510 = state_34410__$1;
(statearr_34430_34510[(1)] = (35));

} else {
var statearr_34431_34511 = state_34410__$1;
(statearr_34431_34511[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (40))){
var inst_34385 = (state_34410[(20)]);
var inst_34384 = (state_34410[(2)]);
var inst_34385__$1 = cljs.core.get.call(null,inst_34384,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_34386 = cljs.core.get.call(null,inst_34384,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_34387 = cljs.core.not_empty.call(null,inst_34385__$1);
var state_34410__$1 = (function (){var statearr_34432 = state_34410;
(statearr_34432[(20)] = inst_34385__$1);

(statearr_34432[(21)] = inst_34386);

return statearr_34432;
})();
if(cljs.core.truth_(inst_34387)){
var statearr_34433_34512 = state_34410__$1;
(statearr_34433_34512[(1)] = (41));

} else {
var statearr_34434_34513 = state_34410__$1;
(statearr_34434_34513[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (33))){
var state_34410__$1 = state_34410;
var statearr_34435_34514 = state_34410__$1;
(statearr_34435_34514[(2)] = false);

(statearr_34435_34514[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (13))){
var inst_34283 = (state_34410[(22)]);
var inst_34287 = cljs.core.chunk_first.call(null,inst_34283);
var inst_34288 = cljs.core.chunk_rest.call(null,inst_34283);
var inst_34289 = cljs.core.count.call(null,inst_34287);
var inst_34270 = inst_34288;
var inst_34271 = inst_34287;
var inst_34272 = inst_34289;
var inst_34273 = (0);
var state_34410__$1 = (function (){var statearr_34436 = state_34410;
(statearr_34436[(7)] = inst_34271);

(statearr_34436[(8)] = inst_34272);

(statearr_34436[(9)] = inst_34270);

(statearr_34436[(10)] = inst_34273);

return statearr_34436;
})();
var statearr_34437_34515 = state_34410__$1;
(statearr_34437_34515[(2)] = null);

(statearr_34437_34515[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (22))){
var inst_34327 = (state_34410[(23)]);
var inst_34326 = (state_34410[(24)]);
var inst_34323 = (state_34410[(19)]);
var inst_34331 = (state_34410[(25)]);
var inst_34326__$1 = (state_34410[(2)]);
var inst_34327__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34326__$1);
var inst_34328 = (function (){var all_files = inst_34323;
var res_SINGLEQUOTE_ = inst_34326__$1;
var res = inst_34327__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_34327,inst_34326,inst_34323,inst_34331,inst_34326__$1,inst_34327__$1,state_val_34411,c__31860__auto__,map__34255,map__34255__$1,opts,before_jsload,on_jsload,reload_dependents,map__34256,map__34256__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34252_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__34252_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_34327,inst_34326,inst_34323,inst_34331,inst_34326__$1,inst_34327__$1,state_val_34411,c__31860__auto__,map__34255,map__34255__$1,opts,before_jsload,on_jsload,reload_dependents,map__34256,map__34256__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34329 = cljs.core.filter.call(null,inst_34328,inst_34326__$1);
var inst_34330 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_34331__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34330);
var inst_34332 = cljs.core.not_empty.call(null,inst_34331__$1);
var state_34410__$1 = (function (){var statearr_34438 = state_34410;
(statearr_34438[(23)] = inst_34327__$1);

(statearr_34438[(24)] = inst_34326__$1);

(statearr_34438[(26)] = inst_34329);

(statearr_34438[(25)] = inst_34331__$1);

return statearr_34438;
})();
if(cljs.core.truth_(inst_34332)){
var statearr_34439_34516 = state_34410__$1;
(statearr_34439_34516[(1)] = (23));

} else {
var statearr_34440_34517 = state_34410__$1;
(statearr_34440_34517[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (36))){
var state_34410__$1 = state_34410;
var statearr_34441_34518 = state_34410__$1;
(statearr_34441_34518[(2)] = false);

(statearr_34441_34518[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (41))){
var inst_34385 = (state_34410[(20)]);
var inst_34389 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_34390 = cljs.core.map.call(null,inst_34389,inst_34385);
var inst_34391 = cljs.core.pr_str.call(null,inst_34390);
var inst_34392 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("figwheel-no-load meta-data: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34391)].join('');
var inst_34393 = figwheel.client.utils.log.call(null,inst_34392);
var state_34410__$1 = state_34410;
var statearr_34442_34519 = state_34410__$1;
(statearr_34442_34519[(2)] = inst_34393);

(statearr_34442_34519[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (43))){
var inst_34386 = (state_34410[(21)]);
var inst_34396 = (state_34410[(2)]);
var inst_34397 = cljs.core.not_empty.call(null,inst_34386);
var state_34410__$1 = (function (){var statearr_34443 = state_34410;
(statearr_34443[(27)] = inst_34396);

return statearr_34443;
})();
if(cljs.core.truth_(inst_34397)){
var statearr_34444_34520 = state_34410__$1;
(statearr_34444_34520[(1)] = (44));

} else {
var statearr_34445_34521 = state_34410__$1;
(statearr_34445_34521[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (29))){
var inst_34327 = (state_34410[(23)]);
var inst_34326 = (state_34410[(24)]);
var inst_34323 = (state_34410[(19)]);
var inst_34329 = (state_34410[(26)]);
var inst_34331 = (state_34410[(25)]);
var inst_34363 = (state_34410[(16)]);
var inst_34359 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_34362 = (function (){var all_files = inst_34323;
var res_SINGLEQUOTE_ = inst_34326;
var res = inst_34327;
var files_not_loaded = inst_34329;
var dependencies_that_loaded = inst_34331;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34327,inst_34326,inst_34323,inst_34329,inst_34331,inst_34363,inst_34359,state_val_34411,c__31860__auto__,map__34255,map__34255__$1,opts,before_jsload,on_jsload,reload_dependents,map__34256,map__34256__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34361){
var map__34446 = p__34361;
var map__34446__$1 = ((((!((map__34446 == null)))?((((map__34446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34446.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34446):map__34446);
var namespace = cljs.core.get.call(null,map__34446__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34327,inst_34326,inst_34323,inst_34329,inst_34331,inst_34363,inst_34359,state_val_34411,c__31860__auto__,map__34255,map__34255__$1,opts,before_jsload,on_jsload,reload_dependents,map__34256,map__34256__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34363__$1 = cljs.core.group_by.call(null,inst_34362,inst_34329);
var inst_34365 = (inst_34363__$1 == null);
var inst_34366 = cljs.core.not.call(null,inst_34365);
var state_34410__$1 = (function (){var statearr_34448 = state_34410;
(statearr_34448[(28)] = inst_34359);

(statearr_34448[(16)] = inst_34363__$1);

return statearr_34448;
})();
if(inst_34366){
var statearr_34449_34522 = state_34410__$1;
(statearr_34449_34522[(1)] = (32));

} else {
var statearr_34450_34523 = state_34410__$1;
(statearr_34450_34523[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (44))){
var inst_34386 = (state_34410[(21)]);
var inst_34399 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34386);
var inst_34400 = cljs.core.pr_str.call(null,inst_34399);
var inst_34401 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("not required: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34400)].join('');
var inst_34402 = figwheel.client.utils.log.call(null,inst_34401);
var state_34410__$1 = state_34410;
var statearr_34451_34524 = state_34410__$1;
(statearr_34451_34524[(2)] = inst_34402);

(statearr_34451_34524[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (6))){
var inst_34304 = (state_34410[(2)]);
var state_34410__$1 = state_34410;
var statearr_34452_34525 = state_34410__$1;
(statearr_34452_34525[(2)] = inst_34304);

(statearr_34452_34525[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (28))){
var inst_34329 = (state_34410[(26)]);
var inst_34356 = (state_34410[(2)]);
var inst_34357 = cljs.core.not_empty.call(null,inst_34329);
var state_34410__$1 = (function (){var statearr_34453 = state_34410;
(statearr_34453[(29)] = inst_34356);

return statearr_34453;
})();
if(cljs.core.truth_(inst_34357)){
var statearr_34454_34526 = state_34410__$1;
(statearr_34454_34526[(1)] = (29));

} else {
var statearr_34455_34527 = state_34410__$1;
(statearr_34455_34527[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (25))){
var inst_34327 = (state_34410[(23)]);
var inst_34343 = (state_34410[(2)]);
var inst_34344 = cljs.core.not_empty.call(null,inst_34327);
var state_34410__$1 = (function (){var statearr_34456 = state_34410;
(statearr_34456[(30)] = inst_34343);

return statearr_34456;
})();
if(cljs.core.truth_(inst_34344)){
var statearr_34457_34528 = state_34410__$1;
(statearr_34457_34528[(1)] = (26));

} else {
var statearr_34458_34529 = state_34410__$1;
(statearr_34458_34529[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (34))){
var inst_34379 = (state_34410[(2)]);
var state_34410__$1 = state_34410;
if(cljs.core.truth_(inst_34379)){
var statearr_34459_34530 = state_34410__$1;
(statearr_34459_34530[(1)] = (38));

} else {
var statearr_34460_34531 = state_34410__$1;
(statearr_34460_34531[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (17))){
var state_34410__$1 = state_34410;
var statearr_34461_34532 = state_34410__$1;
(statearr_34461_34532[(2)] = recompile_dependents);

(statearr_34461_34532[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (3))){
var state_34410__$1 = state_34410;
var statearr_34462_34533 = state_34410__$1;
(statearr_34462_34533[(2)] = null);

(statearr_34462_34533[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (12))){
var inst_34300 = (state_34410[(2)]);
var state_34410__$1 = state_34410;
var statearr_34463_34534 = state_34410__$1;
(statearr_34463_34534[(2)] = inst_34300);

(statearr_34463_34534[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (2))){
var inst_34262 = (state_34410[(13)]);
var inst_34269 = cljs.core.seq.call(null,inst_34262);
var inst_34270 = inst_34269;
var inst_34271 = null;
var inst_34272 = (0);
var inst_34273 = (0);
var state_34410__$1 = (function (){var statearr_34464 = state_34410;
(statearr_34464[(7)] = inst_34271);

(statearr_34464[(8)] = inst_34272);

(statearr_34464[(9)] = inst_34270);

(statearr_34464[(10)] = inst_34273);

return statearr_34464;
})();
var statearr_34465_34535 = state_34410__$1;
(statearr_34465_34535[(2)] = null);

(statearr_34465_34535[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (23))){
var inst_34327 = (state_34410[(23)]);
var inst_34326 = (state_34410[(24)]);
var inst_34323 = (state_34410[(19)]);
var inst_34329 = (state_34410[(26)]);
var inst_34331 = (state_34410[(25)]);
var inst_34334 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_34336 = (function (){var all_files = inst_34323;
var res_SINGLEQUOTE_ = inst_34326;
var res = inst_34327;
var files_not_loaded = inst_34329;
var dependencies_that_loaded = inst_34331;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34327,inst_34326,inst_34323,inst_34329,inst_34331,inst_34334,state_val_34411,c__31860__auto__,map__34255,map__34255__$1,opts,before_jsload,on_jsload,reload_dependents,map__34256,map__34256__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34335){
var map__34466 = p__34335;
var map__34466__$1 = ((((!((map__34466 == null)))?((((map__34466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34466.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34466):map__34466);
var request_url = cljs.core.get.call(null,map__34466__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34327,inst_34326,inst_34323,inst_34329,inst_34331,inst_34334,state_val_34411,c__31860__auto__,map__34255,map__34255__$1,opts,before_jsload,on_jsload,reload_dependents,map__34256,map__34256__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34337 = cljs.core.reverse.call(null,inst_34331);
var inst_34338 = cljs.core.map.call(null,inst_34336,inst_34337);
var inst_34339 = cljs.core.pr_str.call(null,inst_34338);
var inst_34340 = figwheel.client.utils.log.call(null,inst_34339);
var state_34410__$1 = (function (){var statearr_34468 = state_34410;
(statearr_34468[(31)] = inst_34334);

return statearr_34468;
})();
var statearr_34469_34536 = state_34410__$1;
(statearr_34469_34536[(2)] = inst_34340);

(statearr_34469_34536[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (35))){
var state_34410__$1 = state_34410;
var statearr_34470_34537 = state_34410__$1;
(statearr_34470_34537[(2)] = true);

(statearr_34470_34537[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (19))){
var inst_34313 = (state_34410[(12)]);
var inst_34319 = figwheel.client.file_reloading.expand_files.call(null,inst_34313);
var state_34410__$1 = state_34410;
var statearr_34471_34538 = state_34410__$1;
(statearr_34471_34538[(2)] = inst_34319);

(statearr_34471_34538[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (11))){
var state_34410__$1 = state_34410;
var statearr_34472_34539 = state_34410__$1;
(statearr_34472_34539[(2)] = null);

(statearr_34472_34539[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (9))){
var inst_34302 = (state_34410[(2)]);
var state_34410__$1 = state_34410;
var statearr_34473_34540 = state_34410__$1;
(statearr_34473_34540[(2)] = inst_34302);

(statearr_34473_34540[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (5))){
var inst_34272 = (state_34410[(8)]);
var inst_34273 = (state_34410[(10)]);
var inst_34275 = (inst_34273 < inst_34272);
var inst_34276 = inst_34275;
var state_34410__$1 = state_34410;
if(cljs.core.truth_(inst_34276)){
var statearr_34474_34541 = state_34410__$1;
(statearr_34474_34541[(1)] = (7));

} else {
var statearr_34475_34542 = state_34410__$1;
(statearr_34475_34542[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (14))){
var inst_34283 = (state_34410[(22)]);
var inst_34292 = cljs.core.first.call(null,inst_34283);
var inst_34293 = figwheel.client.file_reloading.eval_body.call(null,inst_34292,opts);
var inst_34294 = cljs.core.next.call(null,inst_34283);
var inst_34270 = inst_34294;
var inst_34271 = null;
var inst_34272 = (0);
var inst_34273 = (0);
var state_34410__$1 = (function (){var statearr_34476 = state_34410;
(statearr_34476[(32)] = inst_34293);

(statearr_34476[(7)] = inst_34271);

(statearr_34476[(8)] = inst_34272);

(statearr_34476[(9)] = inst_34270);

(statearr_34476[(10)] = inst_34273);

return statearr_34476;
})();
var statearr_34477_34543 = state_34410__$1;
(statearr_34477_34543[(2)] = null);

(statearr_34477_34543[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (45))){
var state_34410__$1 = state_34410;
var statearr_34478_34544 = state_34410__$1;
(statearr_34478_34544[(2)] = null);

(statearr_34478_34544[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (26))){
var inst_34327 = (state_34410[(23)]);
var inst_34326 = (state_34410[(24)]);
var inst_34323 = (state_34410[(19)]);
var inst_34329 = (state_34410[(26)]);
var inst_34331 = (state_34410[(25)]);
var inst_34346 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_34348 = (function (){var all_files = inst_34323;
var res_SINGLEQUOTE_ = inst_34326;
var res = inst_34327;
var files_not_loaded = inst_34329;
var dependencies_that_loaded = inst_34331;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34327,inst_34326,inst_34323,inst_34329,inst_34331,inst_34346,state_val_34411,c__31860__auto__,map__34255,map__34255__$1,opts,before_jsload,on_jsload,reload_dependents,map__34256,map__34256__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34347){
var map__34479 = p__34347;
var map__34479__$1 = ((((!((map__34479 == null)))?((((map__34479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34479.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34479):map__34479);
var namespace = cljs.core.get.call(null,map__34479__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__34479__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34327,inst_34326,inst_34323,inst_34329,inst_34331,inst_34346,state_val_34411,c__31860__auto__,map__34255,map__34255__$1,opts,before_jsload,on_jsload,reload_dependents,map__34256,map__34256__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34349 = cljs.core.map.call(null,inst_34348,inst_34327);
var inst_34350 = cljs.core.pr_str.call(null,inst_34349);
var inst_34351 = figwheel.client.utils.log.call(null,inst_34350);
var inst_34352 = (function (){var all_files = inst_34323;
var res_SINGLEQUOTE_ = inst_34326;
var res = inst_34327;
var files_not_loaded = inst_34329;
var dependencies_that_loaded = inst_34331;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34327,inst_34326,inst_34323,inst_34329,inst_34331,inst_34346,inst_34348,inst_34349,inst_34350,inst_34351,state_val_34411,c__31860__auto__,map__34255,map__34255__$1,opts,before_jsload,on_jsload,reload_dependents,map__34256,map__34256__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34327,inst_34326,inst_34323,inst_34329,inst_34331,inst_34346,inst_34348,inst_34349,inst_34350,inst_34351,state_val_34411,c__31860__auto__,map__34255,map__34255__$1,opts,before_jsload,on_jsload,reload_dependents,map__34256,map__34256__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34353 = setTimeout(inst_34352,(10));
var state_34410__$1 = (function (){var statearr_34481 = state_34410;
(statearr_34481[(33)] = inst_34346);

(statearr_34481[(34)] = inst_34351);

return statearr_34481;
})();
var statearr_34482_34545 = state_34410__$1;
(statearr_34482_34545[(2)] = inst_34353);

(statearr_34482_34545[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (16))){
var state_34410__$1 = state_34410;
var statearr_34483_34546 = state_34410__$1;
(statearr_34483_34546[(2)] = reload_dependents);

(statearr_34483_34546[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (38))){
var inst_34363 = (state_34410[(16)]);
var inst_34381 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34363);
var state_34410__$1 = state_34410;
var statearr_34484_34547 = state_34410__$1;
(statearr_34484_34547[(2)] = inst_34381);

(statearr_34484_34547[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (30))){
var state_34410__$1 = state_34410;
var statearr_34485_34548 = state_34410__$1;
(statearr_34485_34548[(2)] = null);

(statearr_34485_34548[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (10))){
var inst_34283 = (state_34410[(22)]);
var inst_34285 = cljs.core.chunked_seq_QMARK_.call(null,inst_34283);
var state_34410__$1 = state_34410;
if(inst_34285){
var statearr_34486_34549 = state_34410__$1;
(statearr_34486_34549[(1)] = (13));

} else {
var statearr_34487_34550 = state_34410__$1;
(statearr_34487_34550[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (18))){
var inst_34317 = (state_34410[(2)]);
var state_34410__$1 = state_34410;
if(cljs.core.truth_(inst_34317)){
var statearr_34488_34551 = state_34410__$1;
(statearr_34488_34551[(1)] = (19));

} else {
var statearr_34489_34552 = state_34410__$1;
(statearr_34489_34552[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (42))){
var state_34410__$1 = state_34410;
var statearr_34490_34553 = state_34410__$1;
(statearr_34490_34553[(2)] = null);

(statearr_34490_34553[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (37))){
var inst_34376 = (state_34410[(2)]);
var state_34410__$1 = state_34410;
var statearr_34491_34554 = state_34410__$1;
(statearr_34491_34554[(2)] = inst_34376);

(statearr_34491_34554[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (8))){
var inst_34270 = (state_34410[(9)]);
var inst_34283 = (state_34410[(22)]);
var inst_34283__$1 = cljs.core.seq.call(null,inst_34270);
var state_34410__$1 = (function (){var statearr_34492 = state_34410;
(statearr_34492[(22)] = inst_34283__$1);

return statearr_34492;
})();
if(inst_34283__$1){
var statearr_34493_34555 = state_34410__$1;
(statearr_34493_34555[(1)] = (10));

} else {
var statearr_34494_34556 = state_34410__$1;
(statearr_34494_34556[(1)] = (11));

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
});})(c__31860__auto__,map__34255,map__34255__$1,opts,before_jsload,on_jsload,reload_dependents,map__34256,map__34256__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__31770__auto__,c__31860__auto__,map__34255,map__34255__$1,opts,before_jsload,on_jsload,reload_dependents,map__34256,map__34256__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31771__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31771__auto____0 = (function (){
var statearr_34495 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34495[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__31771__auto__);

(statearr_34495[(1)] = (1));

return statearr_34495;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31771__auto____1 = (function (state_34410){
while(true){
var ret_value__31772__auto__ = (function (){try{while(true){
var result__31773__auto__ = switch__31770__auto__.call(null,state_34410);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31773__auto__;
}
break;
}
}catch (e34496){if((e34496 instanceof Object)){
var ex__31774__auto__ = e34496;
var statearr_34497_34557 = state_34410;
(statearr_34497_34557[(5)] = ex__31774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34410);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34496;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34558 = state_34410;
state_34410 = G__34558;
continue;
} else {
return ret_value__31772__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__31771__auto__ = function(state_34410){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31771__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31771__auto____1.call(this,state_34410);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__31771__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31771__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__31771__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31771__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31771__auto__;
})()
;})(switch__31770__auto__,c__31860__auto__,map__34255,map__34255__$1,opts,before_jsload,on_jsload,reload_dependents,map__34256,map__34256__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__31862__auto__ = (function (){var statearr_34498 = f__31861__auto__.call(null);
(statearr_34498[(6)] = c__31860__auto__);

return statearr_34498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31862__auto__);
});})(c__31860__auto__,map__34255,map__34255__$1,opts,before_jsload,on_jsload,reload_dependents,map__34256,map__34256__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__31860__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__34561,link){
var map__34562 = p__34561;
var map__34562__$1 = ((((!((map__34562 == null)))?((((map__34562.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34562.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34562):map__34562);
var file = cljs.core.get.call(null,map__34562__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6753__auto__ = link.href;
if(cljs.core.truth_(temp__6753__auto__)){
var link_href = temp__6753__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__6753__auto__,map__34562,map__34562__$1,file){
return (function (p1__34559_SHARP_,p2__34560_SHARP_){
if(cljs.core._EQ_.call(null,p1__34559_SHARP_,p2__34560_SHARP_)){
return p1__34559_SHARP_;
} else {
return false;
}
});})(link_href,temp__6753__auto__,map__34562,map__34562__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__6753__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__34565){
var map__34566 = p__34565;
var map__34566__$1 = ((((!((map__34566 == null)))?((((map__34566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34566.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34566):map__34566);
var match_length = cljs.core.get.call(null,map__34566__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__34566__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__34564_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__34564_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__6753__auto__)){
var res = temp__6753__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__34568_SHARP_,p2__34569_SHARP_){
return cljs.core.assoc.call(null,p1__34568_SHARP_,cljs.core.get.call(null,p2__34569_SHARP_,key),p2__34569_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__6751__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__6751__auto__)){
var link = temp__6751__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__6751__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__6751__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_34570 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_34570);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_34570);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__34571,p__34572){
var map__34573 = p__34571;
var map__34573__$1 = ((((!((map__34573 == null)))?((((map__34573.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34573.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34573):map__34573);
var on_cssload = cljs.core.get.call(null,map__34573__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__34574 = p__34572;
var map__34574__$1 = ((((!((map__34574 == null)))?((((map__34574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34574.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34574):map__34574);
var files_msg = map__34574__$1;
var files = cljs.core.get.call(null,map__34574__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__6753__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__6753__auto__)){
var f_datas = temp__6753__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1504782129970