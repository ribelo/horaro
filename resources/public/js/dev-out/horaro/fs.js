// Compiled by ClojureScript 1.9.671 {}
goog.provide('horaro.fs');
goog.require('cljs.core');
goog.require('horaro.electron');
horaro.fs.obj__GT_clj = (function horaro$fs$obj__GT_clj(obj){
return cljs.core.reduce.call(null,(function (props,k){
return cljs.core.assoc.call(null,props,cljs.core.keyword.call(null,k),(obj[k]));
}),cljs.core.PersistentArrayMap.EMPTY,Object.keys(obj));
});
horaro.fs.exists_QMARK_ = (function horaro$fs$exists_QMARK_(path){
return horaro.electron.fs.existsSync(path);
});
horaro.fs.file_QMARK_ = (function horaro$fs$file_QMARK_(path){
return horaro.electron.fs.lstatSync(path).isFile();
});
horaro.fs.directory_QMARK_ = (function horaro$fs$directory_QMARK_(path){
return horaro.electron.fs.lstatSync(path).isDirectory();
});
/**
 * Reads a folder synchronously and returns the file names as a Clojure vector.
 */
horaro.fs.read_dir_sync = (function horaro$fs$read_dir_sync(path){
return cljs.core.js__GT_clj.call(null,horaro.electron.fs.readdirSync(path));
});
horaro.fs.read_dir_async = (function horaro$fs$read_dir_async(path,fn){
return cljs.core.js__GT_clj.call(null,horaro.electron.fs.readdir(path,fn));
});
horaro.fs.slurp = (function horaro$fs$slurp(var_args){
var args__9014__auto__ = [];
var len__9007__auto___26814 = arguments.length;
var i__9008__auto___26815 = (0);
while(true){
if((i__9008__auto___26815 < len__9007__auto___26814)){
args__9014__auto__.push((arguments[i__9008__auto___26815]));

var G__26816 = (i__9008__auto___26815 + (1));
i__9008__auto___26815 = G__26816;
continue;
} else {
}
break;
}

var argseq__9015__auto__ = ((((1) < args__9014__auto__.length))?(new cljs.core.IndexedSeq(args__9014__auto__.slice((1)),(0),null)):null);
return horaro.fs.slurp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9015__auto__);
});

horaro.fs.slurp.cljs$core$IFn$_invoke$arity$variadic = (function (filename,p__26811){
var map__26812 = p__26811;
var map__26812__$1 = ((((!((map__26812 == null)))?((((map__26812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26812.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26812):map__26812);
var encoding = cljs.core.get.call(null,map__26812__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
if(cljs.core.truth_(horaro.fs.exists_QMARK_.call(null,filename))){
return (cljs.core.truth_(encoding)?horaro.electron.fs.readFileSync(filename,encoding):horaro.electron.fs.readFileSync(filename)).toString();
} else {
return null;
}
});

horaro.fs.slurp.cljs$lang$maxFixedArity = (1);

horaro.fs.slurp.cljs$lang$applyTo = (function (seq26809){
var G__26810 = cljs.core.first.call(null,seq26809);
var seq26809__$1 = cljs.core.next.call(null,seq26809);
return horaro.fs.slurp.cljs$core$IFn$_invoke$arity$variadic(G__26810,seq26809__$1);
});

horaro.fs.slurp_async = (function horaro$fs$slurp_async(var_args){
var args__9014__auto__ = [];
var len__9007__auto___26823 = arguments.length;
var i__9008__auto___26824 = (0);
while(true){
if((i__9008__auto___26824 < len__9007__auto___26823)){
args__9014__auto__.push((arguments[i__9008__auto___26824]));

var G__26825 = (i__9008__auto___26824 + (1));
i__9008__auto___26824 = G__26825;
continue;
} else {
}
break;
}

var argseq__9015__auto__ = ((((2) < args__9014__auto__.length))?(new cljs.core.IndexedSeq(args__9014__auto__.slice((2)),(0),null)):null);
return horaro.fs.slurp_async.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9015__auto__);
});

horaro.fs.slurp_async.cljs$core$IFn$_invoke$arity$variadic = (function (filename,cb,p__26820){
var map__26821 = p__26820;
var map__26821__$1 = ((((!((map__26821 == null)))?((((map__26821.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26821.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26821):map__26821);
var encoding = cljs.core.get.call(null,map__26821__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
if(cljs.core.truth_(horaro.fs.exists_QMARK_.call(null,filename))){
var str_cb = ((function (map__26821,map__26821__$1,encoding){
return (function (err,data){
return cb.call(null,err,data.toString());
});})(map__26821,map__26821__$1,encoding))
;
if(cljs.core.truth_(encoding)){
return horaro.electron.fs.readFile(filename,encoding,str_cb);
} else {
return horaro.electron.fs.readFile(filename,str_cb);
}
} else {
return null;
}
});

horaro.fs.slurp_async.cljs$lang$maxFixedArity = (2);

horaro.fs.slurp_async.cljs$lang$applyTo = (function (seq26817){
var G__26818 = cljs.core.first.call(null,seq26817);
var seq26817__$1 = cljs.core.next.call(null,seq26817);
var G__26819 = cljs.core.first.call(null,seq26817__$1);
var seq26817__$2 = cljs.core.next.call(null,seq26817__$1);
return horaro.fs.slurp_async.cljs$core$IFn$_invoke$arity$variadic(G__26818,G__26819,seq26817__$2);
});

horaro.fs.spit = (function horaro$fs$spit(var_args){
var args__9014__auto__ = [];
var len__9007__auto___26832 = arguments.length;
var i__9008__auto___26833 = (0);
while(true){
if((i__9008__auto___26833 < len__9007__auto___26832)){
args__9014__auto__.push((arguments[i__9008__auto___26833]));

var G__26834 = (i__9008__auto___26833 + (1));
i__9008__auto___26833 = G__26834;
continue;
} else {
}
break;
}

var argseq__9015__auto__ = ((((2) < args__9014__auto__.length))?(new cljs.core.IndexedSeq(args__9014__auto__.slice((2)),(0),null)):null);
return horaro.fs.spit.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9015__auto__);
});

horaro.fs.spit.cljs$core$IFn$_invoke$arity$variadic = (function (filename,data,p__26829){
var map__26830 = p__26829;
var map__26830__$1 = ((((!((map__26830 == null)))?((((map__26830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26830.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26830):map__26830);
var encoding = cljs.core.get.call(null,map__26830__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272),"utf8");
var mode = cljs.core.get.call(null,map__26830__$1,new cljs.core.Keyword(null,"mode","mode",654403691),"0o666");
var flag = cljs.core.get.call(null,map__26830__$1,new cljs.core.Keyword(null,"flag","flag",1088647881),"w");
var data__$1 = ((typeof data === 'string')?data:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)].join(''));
return horaro.electron.fs.writeFileSync(filename,data__$1,encoding,mode,flag);
});

horaro.fs.spit.cljs$lang$maxFixedArity = (2);

horaro.fs.spit.cljs$lang$applyTo = (function (seq26826){
var G__26827 = cljs.core.first.call(null,seq26826);
var seq26826__$1 = cljs.core.next.call(null,seq26826);
var G__26828 = cljs.core.first.call(null,seq26826__$1);
var seq26826__$2 = cljs.core.next.call(null,seq26826__$1);
return horaro.fs.spit.cljs$core$IFn$_invoke$arity$variadic(G__26827,G__26828,seq26826__$2);
});

horaro.fs.spit_async = (function horaro$fs$spit_async(var_args){
var args__9014__auto__ = [];
var len__9007__auto___26842 = arguments.length;
var i__9008__auto___26843 = (0);
while(true){
if((i__9008__auto___26843 < len__9007__auto___26842)){
args__9014__auto__.push((arguments[i__9008__auto___26843]));

var G__26844 = (i__9008__auto___26843 + (1));
i__9008__auto___26843 = G__26844;
continue;
} else {
}
break;
}

var argseq__9015__auto__ = ((((3) < args__9014__auto__.length))?(new cljs.core.IndexedSeq(args__9014__auto__.slice((3)),(0),null)):null);
return horaro.fs.spit_async.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9015__auto__);
});

horaro.fs.spit_async.cljs$core$IFn$_invoke$arity$variadic = (function (filename,data,on_error,p__26839){
var map__26840 = p__26839;
var map__26840__$1 = ((((!((map__26840 == null)))?((((map__26840.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26840.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26840):map__26840);
var opts = map__26840__$1;
var encoding = cljs.core.get.call(null,map__26840__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272),"utf8");
var mode = cljs.core.get.call(null,map__26840__$1,new cljs.core.Keyword(null,"mode","mode",654403691),"0o666");
var flag = cljs.core.get.call(null,map__26840__$1,new cljs.core.Keyword(null,"flag","flag",1088647881),"w");
return horaro.electron.fs.writeFile(filename,data,cljs.core.clj__GT_js.call(null,opts),on_error);
});

horaro.fs.spit_async.cljs$lang$maxFixedArity = (3);

horaro.fs.spit_async.cljs$lang$applyTo = (function (seq26835){
var G__26836 = cljs.core.first.call(null,seq26835);
var seq26835__$1 = cljs.core.next.call(null,seq26835);
var G__26837 = cljs.core.first.call(null,seq26835__$1);
var seq26835__$2 = cljs.core.next.call(null,seq26835__$1);
var G__26838 = cljs.core.first.call(null,seq26835__$2);
var seq26835__$3 = cljs.core.next.call(null,seq26835__$2);
return horaro.fs.spit_async.cljs$core$IFn$_invoke$arity$variadic(G__26836,G__26837,G__26838,seq26835__$3);
});

horaro.fs.delete$ = (function horaro$fs$delete(file){
return horaro.electron.fs.unlinkSync(file);
});
horaro.fs.delete_async = (function horaro$fs$delete_async(file,on_error){
return horaro.electron.fs.unlink(file,on_error);
});
horaro.fs.stat = (function horaro$fs$stat(path){
if(cljs.core.truth_(horaro.fs.exists_QMARK_.call(null,path))){
return horaro.fs.obj__GT_clj.call(null,horaro.electron.fs.statSync(path));
} else {
return null;
}
});
horaro.fs.stat_async = (function horaro$fs$stat_async(path,cb){
if(cljs.core.truth_(horaro.fs.exists_QMARK_.call(null,path))){
return horaro.electron.fs.stat(path,(function (err,stats){
return cb.call(null,err,horaro.fs.obj__GT_clj.call(null,stats));
}));
} else {
return null;
}
});
horaro.fs.read_stream = (function horaro$fs$read_stream(path){
return horaro.electron.fs.createReadStream(path);
});
horaro.fs.write_stream = (function horaro$fs$write_stream(path){
return horaro.electron.fs.createReadStream(path);
});
horaro.fs.pipe = (function horaro$fs$pipe(input_stream,output_stream){
return horaro.electron.fs.pipe(input_stream,output_stream);
});

//# sourceMappingURL=fs.js.map?rel=1504091235008