// Compiled by ClojureScript 1.9.671 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__31920 = arguments.length;
switch (G__31920) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async31921 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31921 = (function (f,blockable,meta31922){
this.f = f;
this.blockable = blockable;
this.meta31922 = meta31922;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31921.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31923,meta31922__$1){
var self__ = this;
var _31923__$1 = this;
return (new cljs.core.async.t_cljs$core$async31921(self__.f,self__.blockable,meta31922__$1));
});

cljs.core.async.t_cljs$core$async31921.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31923){
var self__ = this;
var _31923__$1 = this;
return self__.meta31922;
});

cljs.core.async.t_cljs$core$async31921.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31921.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31921.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async31921.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async31921.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31922","meta31922",1691799537,null)], null);
});

cljs.core.async.t_cljs$core$async31921.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31921.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31921";

cljs.core.async.t_cljs$core$async31921.cljs$lang$ctorPrWriter = (function (this__29475__auto__,writer__29476__auto__,opt__29477__auto__){
return cljs.core._write.call(null,writer__29476__auto__,"cljs.core.async/t_cljs$core$async31921");
});

cljs.core.async.__GT_t_cljs$core$async31921 = (function cljs$core$async$__GT_t_cljs$core$async31921(f__$1,blockable__$1,meta31922){
return (new cljs.core.async.t_cljs$core$async31921(f__$1,blockable__$1,meta31922));
});

}

return (new cljs.core.async.t_cljs$core$async31921(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__31927 = arguments.length;
switch (G__31927) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buffer must be supplied when transducer is"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__31930 = arguments.length;
switch (G__31930) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__31933 = arguments.length;
switch (G__31933) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_31935 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_31935);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_31935,ret){
return (function (){
return fn1.call(null,val_31935);
});})(val_31935,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__31937 = arguments.length;
switch (G__31937) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__6751__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__6751__auto__)){
var ret = temp__6751__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__6751__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__6751__auto__)){
var retb = temp__6751__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__6751__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__6751__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__29840__auto___31939 = n;
var x_31940 = (0);
while(true){
if((x_31940 < n__29840__auto___31939)){
(a[x_31940] = (0));

var G__31941 = (x_31940 + (1));
x_31940 = G__31941;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__31942 = (i + (1));
i = G__31942;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async31943 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31943 = (function (flag,meta31944){
this.flag = flag;
this.meta31944 = meta31944;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31943.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_31945,meta31944__$1){
var self__ = this;
var _31945__$1 = this;
return (new cljs.core.async.t_cljs$core$async31943(self__.flag,meta31944__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async31943.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_31945){
var self__ = this;
var _31945__$1 = this;
return self__.meta31944;
});})(flag))
;

cljs.core.async.t_cljs$core$async31943.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31943.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async31943.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31943.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31943.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31944","meta31944",697356050,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async31943.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31943.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31943";

cljs.core.async.t_cljs$core$async31943.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__29475__auto__,writer__29476__auto__,opt__29477__auto__){
return cljs.core._write.call(null,writer__29476__auto__,"cljs.core.async/t_cljs$core$async31943");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async31943 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async31943(flag__$1,meta31944){
return (new cljs.core.async.t_cljs$core$async31943(flag__$1,meta31944));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async31943(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async31946 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31946 = (function (flag,cb,meta31947){
this.flag = flag;
this.cb = cb;
this.meta31947 = meta31947;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31946.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31948,meta31947__$1){
var self__ = this;
var _31948__$1 = this;
return (new cljs.core.async.t_cljs$core$async31946(self__.flag,self__.cb,meta31947__$1));
});

cljs.core.async.t_cljs$core$async31946.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31948){
var self__ = this;
var _31948__$1 = this;
return self__.meta31947;
});

cljs.core.async.t_cljs$core$async31946.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31946.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async31946.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31946.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async31946.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31947","meta31947",946884153,null)], null);
});

cljs.core.async.t_cljs$core$async31946.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31946.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31946";

cljs.core.async.t_cljs$core$async31946.cljs$lang$ctorPrWriter = (function (this__29475__auto__,writer__29476__auto__,opt__29477__auto__){
return cljs.core._write.call(null,writer__29476__auto__,"cljs.core.async/t_cljs$core$async31946");
});

cljs.core.async.__GT_t_cljs$core$async31946 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async31946(flag__$1,cb__$1,meta31947){
return (new cljs.core.async.t_cljs$core$async31946(flag__$1,cb__$1,meta31947));
});

}

return (new cljs.core.async.t_cljs$core$async31946(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31949_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31949_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31950_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31950_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__28818__auto__ = wport;
if(cljs.core.truth_(or__28818__auto__)){
return or__28818__auto__;
} else {
return port;
}
})()], null));
} else {
var G__31951 = (i + (1));
i = G__31951;
continue;
}
} else {
return null;
}
break;
}
})();
var or__28818__auto__ = ret;
if(cljs.core.truth_(or__28818__auto__)){
return or__28818__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__6753__auto__ = (function (){var and__28806__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__28806__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__28806__auto__;
}
})();
if(cljs.core.truth_(temp__6753__auto__)){
var got = temp__6753__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__30058__auto__ = [];
var len__30051__auto___31957 = arguments.length;
var i__30052__auto___31958 = (0);
while(true){
if((i__30052__auto___31958 < len__30051__auto___31957)){
args__30058__auto__.push((arguments[i__30052__auto___31958]));

var G__31959 = (i__30052__auto___31958 + (1));
i__30052__auto___31958 = G__31959;
continue;
} else {
}
break;
}

var argseq__30059__auto__ = ((((1) < args__30058__auto__.length))?(new cljs.core.IndexedSeq(args__30058__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30059__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31954){
var map__31955 = p__31954;
var map__31955__$1 = ((((!((map__31955 == null)))?((((map__31955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31955.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31955):map__31955);
var opts = map__31955__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31952){
var G__31953 = cljs.core.first.call(null,seq31952);
var seq31952__$1 = cljs.core.next.call(null,seq31952);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31953,seq31952__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__31961 = arguments.length;
switch (G__31961) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__31860__auto___32007 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31860__auto___32007){
return (function (){
var f__31861__auto__ = (function (){var switch__31770__auto__ = ((function (c__31860__auto___32007){
return (function (state_31985){
var state_val_31986 = (state_31985[(1)]);
if((state_val_31986 === (7))){
var inst_31981 = (state_31985[(2)]);
var state_31985__$1 = state_31985;
var statearr_31987_32008 = state_31985__$1;
(statearr_31987_32008[(2)] = inst_31981);

(statearr_31987_32008[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31986 === (1))){
var state_31985__$1 = state_31985;
var statearr_31988_32009 = state_31985__$1;
(statearr_31988_32009[(2)] = null);

(statearr_31988_32009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31986 === (4))){
var inst_31964 = (state_31985[(7)]);
var inst_31964__$1 = (state_31985[(2)]);
var inst_31965 = (inst_31964__$1 == null);
var state_31985__$1 = (function (){var statearr_31989 = state_31985;
(statearr_31989[(7)] = inst_31964__$1);

return statearr_31989;
})();
if(cljs.core.truth_(inst_31965)){
var statearr_31990_32010 = state_31985__$1;
(statearr_31990_32010[(1)] = (5));

} else {
var statearr_31991_32011 = state_31985__$1;
(statearr_31991_32011[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31986 === (13))){
var state_31985__$1 = state_31985;
var statearr_31992_32012 = state_31985__$1;
(statearr_31992_32012[(2)] = null);

(statearr_31992_32012[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31986 === (6))){
var inst_31964 = (state_31985[(7)]);
var state_31985__$1 = state_31985;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31985__$1,(11),to,inst_31964);
} else {
if((state_val_31986 === (3))){
var inst_31983 = (state_31985[(2)]);
var state_31985__$1 = state_31985;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31985__$1,inst_31983);
} else {
if((state_val_31986 === (12))){
var state_31985__$1 = state_31985;
var statearr_31993_32013 = state_31985__$1;
(statearr_31993_32013[(2)] = null);

(statearr_31993_32013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31986 === (2))){
var state_31985__$1 = state_31985;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31985__$1,(4),from);
} else {
if((state_val_31986 === (11))){
var inst_31974 = (state_31985[(2)]);
var state_31985__$1 = state_31985;
if(cljs.core.truth_(inst_31974)){
var statearr_31994_32014 = state_31985__$1;
(statearr_31994_32014[(1)] = (12));

} else {
var statearr_31995_32015 = state_31985__$1;
(statearr_31995_32015[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31986 === (9))){
var state_31985__$1 = state_31985;
var statearr_31996_32016 = state_31985__$1;
(statearr_31996_32016[(2)] = null);

(statearr_31996_32016[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31986 === (5))){
var state_31985__$1 = state_31985;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31997_32017 = state_31985__$1;
(statearr_31997_32017[(1)] = (8));

} else {
var statearr_31998_32018 = state_31985__$1;
(statearr_31998_32018[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31986 === (14))){
var inst_31979 = (state_31985[(2)]);
var state_31985__$1 = state_31985;
var statearr_31999_32019 = state_31985__$1;
(statearr_31999_32019[(2)] = inst_31979);

(statearr_31999_32019[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31986 === (10))){
var inst_31971 = (state_31985[(2)]);
var state_31985__$1 = state_31985;
var statearr_32000_32020 = state_31985__$1;
(statearr_32000_32020[(2)] = inst_31971);

(statearr_32000_32020[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31986 === (8))){
var inst_31968 = cljs.core.async.close_BANG_.call(null,to);
var state_31985__$1 = state_31985;
var statearr_32001_32021 = state_31985__$1;
(statearr_32001_32021[(2)] = inst_31968);

(statearr_32001_32021[(1)] = (10));


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
});})(c__31860__auto___32007))
;
return ((function (switch__31770__auto__,c__31860__auto___32007){
return (function() {
var cljs$core$async$state_machine__31771__auto__ = null;
var cljs$core$async$state_machine__31771__auto____0 = (function (){
var statearr_32002 = [null,null,null,null,null,null,null,null];
(statearr_32002[(0)] = cljs$core$async$state_machine__31771__auto__);

(statearr_32002[(1)] = (1));

return statearr_32002;
});
var cljs$core$async$state_machine__31771__auto____1 = (function (state_31985){
while(true){
var ret_value__31772__auto__ = (function (){try{while(true){
var result__31773__auto__ = switch__31770__auto__.call(null,state_31985);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31773__auto__;
}
break;
}
}catch (e32003){if((e32003 instanceof Object)){
var ex__31774__auto__ = e32003;
var statearr_32004_32022 = state_31985;
(statearr_32004_32022[(5)] = ex__31774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31985);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32003;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32023 = state_31985;
state_31985 = G__32023;
continue;
} else {
return ret_value__31772__auto__;
}
break;
}
});
cljs$core$async$state_machine__31771__auto__ = function(state_31985){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31771__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31771__auto____1.call(this,state_31985);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31771__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31771__auto____0;
cljs$core$async$state_machine__31771__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31771__auto____1;
return cljs$core$async$state_machine__31771__auto__;
})()
;})(switch__31770__auto__,c__31860__auto___32007))
})();
var state__31862__auto__ = (function (){var statearr_32005 = f__31861__auto__.call(null);
(statearr_32005[(6)] = c__31860__auto___32007);

return statearr_32005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31862__auto__);
});})(c__31860__auto___32007))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__32024){
var vec__32025 = p__32024;
var v = cljs.core.nth.call(null,vec__32025,(0),null);
var p = cljs.core.nth.call(null,vec__32025,(1),null);
var job = vec__32025;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__31860__auto___32196 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31860__auto___32196,res,vec__32025,v,p,job,jobs,results){
return (function (){
var f__31861__auto__ = (function (){var switch__31770__auto__ = ((function (c__31860__auto___32196,res,vec__32025,v,p,job,jobs,results){
return (function (state_32032){
var state_val_32033 = (state_32032[(1)]);
if((state_val_32033 === (1))){
var state_32032__$1 = state_32032;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32032__$1,(2),res,v);
} else {
if((state_val_32033 === (2))){
var inst_32029 = (state_32032[(2)]);
var inst_32030 = cljs.core.async.close_BANG_.call(null,res);
var state_32032__$1 = (function (){var statearr_32034 = state_32032;
(statearr_32034[(7)] = inst_32029);

return statearr_32034;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32032__$1,inst_32030);
} else {
return null;
}
}
});})(c__31860__auto___32196,res,vec__32025,v,p,job,jobs,results))
;
return ((function (switch__31770__auto__,c__31860__auto___32196,res,vec__32025,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31771__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31771__auto____0 = (function (){
var statearr_32035 = [null,null,null,null,null,null,null,null];
(statearr_32035[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31771__auto__);

(statearr_32035[(1)] = (1));

return statearr_32035;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31771__auto____1 = (function (state_32032){
while(true){
var ret_value__31772__auto__ = (function (){try{while(true){
var result__31773__auto__ = switch__31770__auto__.call(null,state_32032);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31773__auto__;
}
break;
}
}catch (e32036){if((e32036 instanceof Object)){
var ex__31774__auto__ = e32036;
var statearr_32037_32197 = state_32032;
(statearr_32037_32197[(5)] = ex__31774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32032);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32036;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32198 = state_32032;
state_32032 = G__32198;
continue;
} else {
return ret_value__31772__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31771__auto__ = function(state_32032){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31771__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31771__auto____1.call(this,state_32032);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31771__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31771__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31771__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31771__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31771__auto__;
})()
;})(switch__31770__auto__,c__31860__auto___32196,res,vec__32025,v,p,job,jobs,results))
})();
var state__31862__auto__ = (function (){var statearr_32038 = f__31861__auto__.call(null);
(statearr_32038[(6)] = c__31860__auto___32196);

return statearr_32038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31862__auto__);
});})(c__31860__auto___32196,res,vec__32025,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__32039){
var vec__32040 = p__32039;
var v = cljs.core.nth.call(null,vec__32040,(0),null);
var p = cljs.core.nth.call(null,vec__32040,(1),null);
var job = vec__32040;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__29840__auto___32199 = n;
var __32200 = (0);
while(true){
if((__32200 < n__29840__auto___32199)){
var G__32043_32201 = type;
var G__32043_32202__$1 = (((G__32043_32201 instanceof cljs.core.Keyword))?G__32043_32201.fqn:null);
switch (G__32043_32202__$1) {
case "compute":
var c__31860__auto___32204 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32200,c__31860__auto___32204,G__32043_32201,G__32043_32202__$1,n__29840__auto___32199,jobs,results,process,async){
return (function (){
var f__31861__auto__ = (function (){var switch__31770__auto__ = ((function (__32200,c__31860__auto___32204,G__32043_32201,G__32043_32202__$1,n__29840__auto___32199,jobs,results,process,async){
return (function (state_32056){
var state_val_32057 = (state_32056[(1)]);
if((state_val_32057 === (1))){
var state_32056__$1 = state_32056;
var statearr_32058_32205 = state_32056__$1;
(statearr_32058_32205[(2)] = null);

(statearr_32058_32205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (2))){
var state_32056__$1 = state_32056;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32056__$1,(4),jobs);
} else {
if((state_val_32057 === (3))){
var inst_32054 = (state_32056[(2)]);
var state_32056__$1 = state_32056;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32056__$1,inst_32054);
} else {
if((state_val_32057 === (4))){
var inst_32046 = (state_32056[(2)]);
var inst_32047 = process.call(null,inst_32046);
var state_32056__$1 = state_32056;
if(cljs.core.truth_(inst_32047)){
var statearr_32059_32206 = state_32056__$1;
(statearr_32059_32206[(1)] = (5));

} else {
var statearr_32060_32207 = state_32056__$1;
(statearr_32060_32207[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (5))){
var state_32056__$1 = state_32056;
var statearr_32061_32208 = state_32056__$1;
(statearr_32061_32208[(2)] = null);

(statearr_32061_32208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (6))){
var state_32056__$1 = state_32056;
var statearr_32062_32209 = state_32056__$1;
(statearr_32062_32209[(2)] = null);

(statearr_32062_32209[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (7))){
var inst_32052 = (state_32056[(2)]);
var state_32056__$1 = state_32056;
var statearr_32063_32210 = state_32056__$1;
(statearr_32063_32210[(2)] = inst_32052);

(statearr_32063_32210[(1)] = (3));


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
});})(__32200,c__31860__auto___32204,G__32043_32201,G__32043_32202__$1,n__29840__auto___32199,jobs,results,process,async))
;
return ((function (__32200,switch__31770__auto__,c__31860__auto___32204,G__32043_32201,G__32043_32202__$1,n__29840__auto___32199,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31771__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31771__auto____0 = (function (){
var statearr_32064 = [null,null,null,null,null,null,null];
(statearr_32064[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31771__auto__);

(statearr_32064[(1)] = (1));

return statearr_32064;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31771__auto____1 = (function (state_32056){
while(true){
var ret_value__31772__auto__ = (function (){try{while(true){
var result__31773__auto__ = switch__31770__auto__.call(null,state_32056);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31773__auto__;
}
break;
}
}catch (e32065){if((e32065 instanceof Object)){
var ex__31774__auto__ = e32065;
var statearr_32066_32211 = state_32056;
(statearr_32066_32211[(5)] = ex__31774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32056);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32065;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32212 = state_32056;
state_32056 = G__32212;
continue;
} else {
return ret_value__31772__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31771__auto__ = function(state_32056){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31771__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31771__auto____1.call(this,state_32056);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31771__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31771__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31771__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31771__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31771__auto__;
})()
;})(__32200,switch__31770__auto__,c__31860__auto___32204,G__32043_32201,G__32043_32202__$1,n__29840__auto___32199,jobs,results,process,async))
})();
var state__31862__auto__ = (function (){var statearr_32067 = f__31861__auto__.call(null);
(statearr_32067[(6)] = c__31860__auto___32204);

return statearr_32067;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31862__auto__);
});})(__32200,c__31860__auto___32204,G__32043_32201,G__32043_32202__$1,n__29840__auto___32199,jobs,results,process,async))
);


break;
case "async":
var c__31860__auto___32213 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32200,c__31860__auto___32213,G__32043_32201,G__32043_32202__$1,n__29840__auto___32199,jobs,results,process,async){
return (function (){
var f__31861__auto__ = (function (){var switch__31770__auto__ = ((function (__32200,c__31860__auto___32213,G__32043_32201,G__32043_32202__$1,n__29840__auto___32199,jobs,results,process,async){
return (function (state_32080){
var state_val_32081 = (state_32080[(1)]);
if((state_val_32081 === (1))){
var state_32080__$1 = state_32080;
var statearr_32082_32214 = state_32080__$1;
(statearr_32082_32214[(2)] = null);

(statearr_32082_32214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32081 === (2))){
var state_32080__$1 = state_32080;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32080__$1,(4),jobs);
} else {
if((state_val_32081 === (3))){
var inst_32078 = (state_32080[(2)]);
var state_32080__$1 = state_32080;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32080__$1,inst_32078);
} else {
if((state_val_32081 === (4))){
var inst_32070 = (state_32080[(2)]);
var inst_32071 = async.call(null,inst_32070);
var state_32080__$1 = state_32080;
if(cljs.core.truth_(inst_32071)){
var statearr_32083_32215 = state_32080__$1;
(statearr_32083_32215[(1)] = (5));

} else {
var statearr_32084_32216 = state_32080__$1;
(statearr_32084_32216[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32081 === (5))){
var state_32080__$1 = state_32080;
var statearr_32085_32217 = state_32080__$1;
(statearr_32085_32217[(2)] = null);

(statearr_32085_32217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32081 === (6))){
var state_32080__$1 = state_32080;
var statearr_32086_32218 = state_32080__$1;
(statearr_32086_32218[(2)] = null);

(statearr_32086_32218[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32081 === (7))){
var inst_32076 = (state_32080[(2)]);
var state_32080__$1 = state_32080;
var statearr_32087_32219 = state_32080__$1;
(statearr_32087_32219[(2)] = inst_32076);

(statearr_32087_32219[(1)] = (3));


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
});})(__32200,c__31860__auto___32213,G__32043_32201,G__32043_32202__$1,n__29840__auto___32199,jobs,results,process,async))
;
return ((function (__32200,switch__31770__auto__,c__31860__auto___32213,G__32043_32201,G__32043_32202__$1,n__29840__auto___32199,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31771__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31771__auto____0 = (function (){
var statearr_32088 = [null,null,null,null,null,null,null];
(statearr_32088[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31771__auto__);

(statearr_32088[(1)] = (1));

return statearr_32088;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31771__auto____1 = (function (state_32080){
while(true){
var ret_value__31772__auto__ = (function (){try{while(true){
var result__31773__auto__ = switch__31770__auto__.call(null,state_32080);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31773__auto__;
}
break;
}
}catch (e32089){if((e32089 instanceof Object)){
var ex__31774__auto__ = e32089;
var statearr_32090_32220 = state_32080;
(statearr_32090_32220[(5)] = ex__31774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32080);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32089;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32221 = state_32080;
state_32080 = G__32221;
continue;
} else {
return ret_value__31772__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31771__auto__ = function(state_32080){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31771__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31771__auto____1.call(this,state_32080);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31771__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31771__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31771__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31771__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31771__auto__;
})()
;})(__32200,switch__31770__auto__,c__31860__auto___32213,G__32043_32201,G__32043_32202__$1,n__29840__auto___32199,jobs,results,process,async))
})();
var state__31862__auto__ = (function (){var statearr_32091 = f__31861__auto__.call(null);
(statearr_32091[(6)] = c__31860__auto___32213);

return statearr_32091;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31862__auto__);
});})(__32200,c__31860__auto___32213,G__32043_32201,G__32043_32202__$1,n__29840__auto___32199,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32043_32202__$1)].join('')));

}

var G__32222 = (__32200 + (1));
__32200 = G__32222;
continue;
} else {
}
break;
}

var c__31860__auto___32223 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31860__auto___32223,jobs,results,process,async){
return (function (){
var f__31861__auto__ = (function (){var switch__31770__auto__ = ((function (c__31860__auto___32223,jobs,results,process,async){
return (function (state_32113){
var state_val_32114 = (state_32113[(1)]);
if((state_val_32114 === (1))){
var state_32113__$1 = state_32113;
var statearr_32115_32224 = state_32113__$1;
(statearr_32115_32224[(2)] = null);

(statearr_32115_32224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32114 === (2))){
var state_32113__$1 = state_32113;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32113__$1,(4),from);
} else {
if((state_val_32114 === (3))){
var inst_32111 = (state_32113[(2)]);
var state_32113__$1 = state_32113;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32113__$1,inst_32111);
} else {
if((state_val_32114 === (4))){
var inst_32094 = (state_32113[(7)]);
var inst_32094__$1 = (state_32113[(2)]);
var inst_32095 = (inst_32094__$1 == null);
var state_32113__$1 = (function (){var statearr_32116 = state_32113;
(statearr_32116[(7)] = inst_32094__$1);

return statearr_32116;
})();
if(cljs.core.truth_(inst_32095)){
var statearr_32117_32225 = state_32113__$1;
(statearr_32117_32225[(1)] = (5));

} else {
var statearr_32118_32226 = state_32113__$1;
(statearr_32118_32226[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32114 === (5))){
var inst_32097 = cljs.core.async.close_BANG_.call(null,jobs);
var state_32113__$1 = state_32113;
var statearr_32119_32227 = state_32113__$1;
(statearr_32119_32227[(2)] = inst_32097);

(statearr_32119_32227[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32114 === (6))){
var inst_32094 = (state_32113[(7)]);
var inst_32099 = (state_32113[(8)]);
var inst_32099__$1 = cljs.core.async.chan.call(null,(1));
var inst_32100 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32101 = [inst_32094,inst_32099__$1];
var inst_32102 = (new cljs.core.PersistentVector(null,2,(5),inst_32100,inst_32101,null));
var state_32113__$1 = (function (){var statearr_32120 = state_32113;
(statearr_32120[(8)] = inst_32099__$1);

return statearr_32120;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32113__$1,(8),jobs,inst_32102);
} else {
if((state_val_32114 === (7))){
var inst_32109 = (state_32113[(2)]);
var state_32113__$1 = state_32113;
var statearr_32121_32228 = state_32113__$1;
(statearr_32121_32228[(2)] = inst_32109);

(statearr_32121_32228[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32114 === (8))){
var inst_32099 = (state_32113[(8)]);
var inst_32104 = (state_32113[(2)]);
var state_32113__$1 = (function (){var statearr_32122 = state_32113;
(statearr_32122[(9)] = inst_32104);

return statearr_32122;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32113__$1,(9),results,inst_32099);
} else {
if((state_val_32114 === (9))){
var inst_32106 = (state_32113[(2)]);
var state_32113__$1 = (function (){var statearr_32123 = state_32113;
(statearr_32123[(10)] = inst_32106);

return statearr_32123;
})();
var statearr_32124_32229 = state_32113__$1;
(statearr_32124_32229[(2)] = null);

(statearr_32124_32229[(1)] = (2));


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
});})(c__31860__auto___32223,jobs,results,process,async))
;
return ((function (switch__31770__auto__,c__31860__auto___32223,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31771__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31771__auto____0 = (function (){
var statearr_32125 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32125[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31771__auto__);

(statearr_32125[(1)] = (1));

return statearr_32125;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31771__auto____1 = (function (state_32113){
while(true){
var ret_value__31772__auto__ = (function (){try{while(true){
var result__31773__auto__ = switch__31770__auto__.call(null,state_32113);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31773__auto__;
}
break;
}
}catch (e32126){if((e32126 instanceof Object)){
var ex__31774__auto__ = e32126;
var statearr_32127_32230 = state_32113;
(statearr_32127_32230[(5)] = ex__31774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32113);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32126;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32231 = state_32113;
state_32113 = G__32231;
continue;
} else {
return ret_value__31772__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31771__auto__ = function(state_32113){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31771__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31771__auto____1.call(this,state_32113);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31771__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31771__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31771__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31771__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31771__auto__;
})()
;})(switch__31770__auto__,c__31860__auto___32223,jobs,results,process,async))
})();
var state__31862__auto__ = (function (){var statearr_32128 = f__31861__auto__.call(null);
(statearr_32128[(6)] = c__31860__auto___32223);

return statearr_32128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31862__auto__);
});})(c__31860__auto___32223,jobs,results,process,async))
);


var c__31860__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31860__auto__,jobs,results,process,async){
return (function (){
var f__31861__auto__ = (function (){var switch__31770__auto__ = ((function (c__31860__auto__,jobs,results,process,async){
return (function (state_32166){
var state_val_32167 = (state_32166[(1)]);
if((state_val_32167 === (7))){
var inst_32162 = (state_32166[(2)]);
var state_32166__$1 = state_32166;
var statearr_32168_32232 = state_32166__$1;
(statearr_32168_32232[(2)] = inst_32162);

(statearr_32168_32232[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32167 === (20))){
var state_32166__$1 = state_32166;
var statearr_32169_32233 = state_32166__$1;
(statearr_32169_32233[(2)] = null);

(statearr_32169_32233[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32167 === (1))){
var state_32166__$1 = state_32166;
var statearr_32170_32234 = state_32166__$1;
(statearr_32170_32234[(2)] = null);

(statearr_32170_32234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32167 === (4))){
var inst_32131 = (state_32166[(7)]);
var inst_32131__$1 = (state_32166[(2)]);
var inst_32132 = (inst_32131__$1 == null);
var state_32166__$1 = (function (){var statearr_32171 = state_32166;
(statearr_32171[(7)] = inst_32131__$1);

return statearr_32171;
})();
if(cljs.core.truth_(inst_32132)){
var statearr_32172_32235 = state_32166__$1;
(statearr_32172_32235[(1)] = (5));

} else {
var statearr_32173_32236 = state_32166__$1;
(statearr_32173_32236[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32167 === (15))){
var inst_32144 = (state_32166[(8)]);
var state_32166__$1 = state_32166;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32166__$1,(18),to,inst_32144);
} else {
if((state_val_32167 === (21))){
var inst_32157 = (state_32166[(2)]);
var state_32166__$1 = state_32166;
var statearr_32174_32237 = state_32166__$1;
(statearr_32174_32237[(2)] = inst_32157);

(statearr_32174_32237[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32167 === (13))){
var inst_32159 = (state_32166[(2)]);
var state_32166__$1 = (function (){var statearr_32175 = state_32166;
(statearr_32175[(9)] = inst_32159);

return statearr_32175;
})();
var statearr_32176_32238 = state_32166__$1;
(statearr_32176_32238[(2)] = null);

(statearr_32176_32238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32167 === (6))){
var inst_32131 = (state_32166[(7)]);
var state_32166__$1 = state_32166;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32166__$1,(11),inst_32131);
} else {
if((state_val_32167 === (17))){
var inst_32152 = (state_32166[(2)]);
var state_32166__$1 = state_32166;
if(cljs.core.truth_(inst_32152)){
var statearr_32177_32239 = state_32166__$1;
(statearr_32177_32239[(1)] = (19));

} else {
var statearr_32178_32240 = state_32166__$1;
(statearr_32178_32240[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32167 === (3))){
var inst_32164 = (state_32166[(2)]);
var state_32166__$1 = state_32166;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32166__$1,inst_32164);
} else {
if((state_val_32167 === (12))){
var inst_32141 = (state_32166[(10)]);
var state_32166__$1 = state_32166;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32166__$1,(14),inst_32141);
} else {
if((state_val_32167 === (2))){
var state_32166__$1 = state_32166;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32166__$1,(4),results);
} else {
if((state_val_32167 === (19))){
var state_32166__$1 = state_32166;
var statearr_32179_32241 = state_32166__$1;
(statearr_32179_32241[(2)] = null);

(statearr_32179_32241[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32167 === (11))){
var inst_32141 = (state_32166[(2)]);
var state_32166__$1 = (function (){var statearr_32180 = state_32166;
(statearr_32180[(10)] = inst_32141);

return statearr_32180;
})();
var statearr_32181_32242 = state_32166__$1;
(statearr_32181_32242[(2)] = null);

(statearr_32181_32242[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32167 === (9))){
var state_32166__$1 = state_32166;
var statearr_32182_32243 = state_32166__$1;
(statearr_32182_32243[(2)] = null);

(statearr_32182_32243[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32167 === (5))){
var state_32166__$1 = state_32166;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32183_32244 = state_32166__$1;
(statearr_32183_32244[(1)] = (8));

} else {
var statearr_32184_32245 = state_32166__$1;
(statearr_32184_32245[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32167 === (14))){
var inst_32144 = (state_32166[(8)]);
var inst_32146 = (state_32166[(11)]);
var inst_32144__$1 = (state_32166[(2)]);
var inst_32145 = (inst_32144__$1 == null);
var inst_32146__$1 = cljs.core.not.call(null,inst_32145);
var state_32166__$1 = (function (){var statearr_32185 = state_32166;
(statearr_32185[(8)] = inst_32144__$1);

(statearr_32185[(11)] = inst_32146__$1);

return statearr_32185;
})();
if(inst_32146__$1){
var statearr_32186_32246 = state_32166__$1;
(statearr_32186_32246[(1)] = (15));

} else {
var statearr_32187_32247 = state_32166__$1;
(statearr_32187_32247[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32167 === (16))){
var inst_32146 = (state_32166[(11)]);
var state_32166__$1 = state_32166;
var statearr_32188_32248 = state_32166__$1;
(statearr_32188_32248[(2)] = inst_32146);

(statearr_32188_32248[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32167 === (10))){
var inst_32138 = (state_32166[(2)]);
var state_32166__$1 = state_32166;
var statearr_32189_32249 = state_32166__$1;
(statearr_32189_32249[(2)] = inst_32138);

(statearr_32189_32249[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32167 === (18))){
var inst_32149 = (state_32166[(2)]);
var state_32166__$1 = state_32166;
var statearr_32190_32250 = state_32166__$1;
(statearr_32190_32250[(2)] = inst_32149);

(statearr_32190_32250[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32167 === (8))){
var inst_32135 = cljs.core.async.close_BANG_.call(null,to);
var state_32166__$1 = state_32166;
var statearr_32191_32251 = state_32166__$1;
(statearr_32191_32251[(2)] = inst_32135);

(statearr_32191_32251[(1)] = (10));


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
});})(c__31860__auto__,jobs,results,process,async))
;
return ((function (switch__31770__auto__,c__31860__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31771__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31771__auto____0 = (function (){
var statearr_32192 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32192[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31771__auto__);

(statearr_32192[(1)] = (1));

return statearr_32192;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31771__auto____1 = (function (state_32166){
while(true){
var ret_value__31772__auto__ = (function (){try{while(true){
var result__31773__auto__ = switch__31770__auto__.call(null,state_32166);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31773__auto__;
}
break;
}
}catch (e32193){if((e32193 instanceof Object)){
var ex__31774__auto__ = e32193;
var statearr_32194_32252 = state_32166;
(statearr_32194_32252[(5)] = ex__31774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32166);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32193;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32253 = state_32166;
state_32166 = G__32253;
continue;
} else {
return ret_value__31772__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31771__auto__ = function(state_32166){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31771__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31771__auto____1.call(this,state_32166);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31771__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31771__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31771__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31771__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31771__auto__;
})()
;})(switch__31770__auto__,c__31860__auto__,jobs,results,process,async))
})();
var state__31862__auto__ = (function (){var statearr_32195 = f__31861__auto__.call(null);
(statearr_32195[(6)] = c__31860__auto__);

return statearr_32195;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31862__auto__);
});})(c__31860__auto__,jobs,results,process,async))
);

return c__31860__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__32255 = arguments.length;
switch (G__32255) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__32258 = arguments.length;
switch (G__32258) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__32261 = arguments.length;
switch (G__32261) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__31860__auto___32310 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31860__auto___32310,tc,fc){
return (function (){
var f__31861__auto__ = (function (){var switch__31770__auto__ = ((function (c__31860__auto___32310,tc,fc){
return (function (state_32287){
var state_val_32288 = (state_32287[(1)]);
if((state_val_32288 === (7))){
var inst_32283 = (state_32287[(2)]);
var state_32287__$1 = state_32287;
var statearr_32289_32311 = state_32287__$1;
(statearr_32289_32311[(2)] = inst_32283);

(statearr_32289_32311[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32288 === (1))){
var state_32287__$1 = state_32287;
var statearr_32290_32312 = state_32287__$1;
(statearr_32290_32312[(2)] = null);

(statearr_32290_32312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32288 === (4))){
var inst_32264 = (state_32287[(7)]);
var inst_32264__$1 = (state_32287[(2)]);
var inst_32265 = (inst_32264__$1 == null);
var state_32287__$1 = (function (){var statearr_32291 = state_32287;
(statearr_32291[(7)] = inst_32264__$1);

return statearr_32291;
})();
if(cljs.core.truth_(inst_32265)){
var statearr_32292_32313 = state_32287__$1;
(statearr_32292_32313[(1)] = (5));

} else {
var statearr_32293_32314 = state_32287__$1;
(statearr_32293_32314[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32288 === (13))){
var state_32287__$1 = state_32287;
var statearr_32294_32315 = state_32287__$1;
(statearr_32294_32315[(2)] = null);

(statearr_32294_32315[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32288 === (6))){
var inst_32264 = (state_32287[(7)]);
var inst_32270 = p.call(null,inst_32264);
var state_32287__$1 = state_32287;
if(cljs.core.truth_(inst_32270)){
var statearr_32295_32316 = state_32287__$1;
(statearr_32295_32316[(1)] = (9));

} else {
var statearr_32296_32317 = state_32287__$1;
(statearr_32296_32317[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32288 === (3))){
var inst_32285 = (state_32287[(2)]);
var state_32287__$1 = state_32287;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32287__$1,inst_32285);
} else {
if((state_val_32288 === (12))){
var state_32287__$1 = state_32287;
var statearr_32297_32318 = state_32287__$1;
(statearr_32297_32318[(2)] = null);

(statearr_32297_32318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32288 === (2))){
var state_32287__$1 = state_32287;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32287__$1,(4),ch);
} else {
if((state_val_32288 === (11))){
var inst_32264 = (state_32287[(7)]);
var inst_32274 = (state_32287[(2)]);
var state_32287__$1 = state_32287;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32287__$1,(8),inst_32274,inst_32264);
} else {
if((state_val_32288 === (9))){
var state_32287__$1 = state_32287;
var statearr_32298_32319 = state_32287__$1;
(statearr_32298_32319[(2)] = tc);

(statearr_32298_32319[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32288 === (5))){
var inst_32267 = cljs.core.async.close_BANG_.call(null,tc);
var inst_32268 = cljs.core.async.close_BANG_.call(null,fc);
var state_32287__$1 = (function (){var statearr_32299 = state_32287;
(statearr_32299[(8)] = inst_32267);

return statearr_32299;
})();
var statearr_32300_32320 = state_32287__$1;
(statearr_32300_32320[(2)] = inst_32268);

(statearr_32300_32320[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32288 === (14))){
var inst_32281 = (state_32287[(2)]);
var state_32287__$1 = state_32287;
var statearr_32301_32321 = state_32287__$1;
(statearr_32301_32321[(2)] = inst_32281);

(statearr_32301_32321[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32288 === (10))){
var state_32287__$1 = state_32287;
var statearr_32302_32322 = state_32287__$1;
(statearr_32302_32322[(2)] = fc);

(statearr_32302_32322[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32288 === (8))){
var inst_32276 = (state_32287[(2)]);
var state_32287__$1 = state_32287;
if(cljs.core.truth_(inst_32276)){
var statearr_32303_32323 = state_32287__$1;
(statearr_32303_32323[(1)] = (12));

} else {
var statearr_32304_32324 = state_32287__$1;
(statearr_32304_32324[(1)] = (13));

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
});})(c__31860__auto___32310,tc,fc))
;
return ((function (switch__31770__auto__,c__31860__auto___32310,tc,fc){
return (function() {
var cljs$core$async$state_machine__31771__auto__ = null;
var cljs$core$async$state_machine__31771__auto____0 = (function (){
var statearr_32305 = [null,null,null,null,null,null,null,null,null];
(statearr_32305[(0)] = cljs$core$async$state_machine__31771__auto__);

(statearr_32305[(1)] = (1));

return statearr_32305;
});
var cljs$core$async$state_machine__31771__auto____1 = (function (state_32287){
while(true){
var ret_value__31772__auto__ = (function (){try{while(true){
var result__31773__auto__ = switch__31770__auto__.call(null,state_32287);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31773__auto__;
}
break;
}
}catch (e32306){if((e32306 instanceof Object)){
var ex__31774__auto__ = e32306;
var statearr_32307_32325 = state_32287;
(statearr_32307_32325[(5)] = ex__31774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32287);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32306;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32326 = state_32287;
state_32287 = G__32326;
continue;
} else {
return ret_value__31772__auto__;
}
break;
}
});
cljs$core$async$state_machine__31771__auto__ = function(state_32287){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31771__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31771__auto____1.call(this,state_32287);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31771__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31771__auto____0;
cljs$core$async$state_machine__31771__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31771__auto____1;
return cljs$core$async$state_machine__31771__auto__;
})()
;})(switch__31770__auto__,c__31860__auto___32310,tc,fc))
})();
var state__31862__auto__ = (function (){var statearr_32308 = f__31861__auto__.call(null);
(statearr_32308[(6)] = c__31860__auto___32310);

return statearr_32308;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31862__auto__);
});})(c__31860__auto___32310,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__31860__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31860__auto__){
return (function (){
var f__31861__auto__ = (function (){var switch__31770__auto__ = ((function (c__31860__auto__){
return (function (state_32347){
var state_val_32348 = (state_32347[(1)]);
if((state_val_32348 === (7))){
var inst_32343 = (state_32347[(2)]);
var state_32347__$1 = state_32347;
var statearr_32349_32367 = state_32347__$1;
(statearr_32349_32367[(2)] = inst_32343);

(statearr_32349_32367[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32348 === (1))){
var inst_32327 = init;
var state_32347__$1 = (function (){var statearr_32350 = state_32347;
(statearr_32350[(7)] = inst_32327);

return statearr_32350;
})();
var statearr_32351_32368 = state_32347__$1;
(statearr_32351_32368[(2)] = null);

(statearr_32351_32368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32348 === (4))){
var inst_32330 = (state_32347[(8)]);
var inst_32330__$1 = (state_32347[(2)]);
var inst_32331 = (inst_32330__$1 == null);
var state_32347__$1 = (function (){var statearr_32352 = state_32347;
(statearr_32352[(8)] = inst_32330__$1);

return statearr_32352;
})();
if(cljs.core.truth_(inst_32331)){
var statearr_32353_32369 = state_32347__$1;
(statearr_32353_32369[(1)] = (5));

} else {
var statearr_32354_32370 = state_32347__$1;
(statearr_32354_32370[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32348 === (6))){
var inst_32327 = (state_32347[(7)]);
var inst_32330 = (state_32347[(8)]);
var inst_32334 = (state_32347[(9)]);
var inst_32334__$1 = f.call(null,inst_32327,inst_32330);
var inst_32335 = cljs.core.reduced_QMARK_.call(null,inst_32334__$1);
var state_32347__$1 = (function (){var statearr_32355 = state_32347;
(statearr_32355[(9)] = inst_32334__$1);

return statearr_32355;
})();
if(inst_32335){
var statearr_32356_32371 = state_32347__$1;
(statearr_32356_32371[(1)] = (8));

} else {
var statearr_32357_32372 = state_32347__$1;
(statearr_32357_32372[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32348 === (3))){
var inst_32345 = (state_32347[(2)]);
var state_32347__$1 = state_32347;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32347__$1,inst_32345);
} else {
if((state_val_32348 === (2))){
var state_32347__$1 = state_32347;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32347__$1,(4),ch);
} else {
if((state_val_32348 === (9))){
var inst_32334 = (state_32347[(9)]);
var inst_32327 = inst_32334;
var state_32347__$1 = (function (){var statearr_32358 = state_32347;
(statearr_32358[(7)] = inst_32327);

return statearr_32358;
})();
var statearr_32359_32373 = state_32347__$1;
(statearr_32359_32373[(2)] = null);

(statearr_32359_32373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32348 === (5))){
var inst_32327 = (state_32347[(7)]);
var state_32347__$1 = state_32347;
var statearr_32360_32374 = state_32347__$1;
(statearr_32360_32374[(2)] = inst_32327);

(statearr_32360_32374[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32348 === (10))){
var inst_32341 = (state_32347[(2)]);
var state_32347__$1 = state_32347;
var statearr_32361_32375 = state_32347__$1;
(statearr_32361_32375[(2)] = inst_32341);

(statearr_32361_32375[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32348 === (8))){
var inst_32334 = (state_32347[(9)]);
var inst_32337 = cljs.core.deref.call(null,inst_32334);
var state_32347__$1 = state_32347;
var statearr_32362_32376 = state_32347__$1;
(statearr_32362_32376[(2)] = inst_32337);

(statearr_32362_32376[(1)] = (10));


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
});})(c__31860__auto__))
;
return ((function (switch__31770__auto__,c__31860__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__31771__auto__ = null;
var cljs$core$async$reduce_$_state_machine__31771__auto____0 = (function (){
var statearr_32363 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32363[(0)] = cljs$core$async$reduce_$_state_machine__31771__auto__);

(statearr_32363[(1)] = (1));

return statearr_32363;
});
var cljs$core$async$reduce_$_state_machine__31771__auto____1 = (function (state_32347){
while(true){
var ret_value__31772__auto__ = (function (){try{while(true){
var result__31773__auto__ = switch__31770__auto__.call(null,state_32347);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31773__auto__;
}
break;
}
}catch (e32364){if((e32364 instanceof Object)){
var ex__31774__auto__ = e32364;
var statearr_32365_32377 = state_32347;
(statearr_32365_32377[(5)] = ex__31774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32347);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32364;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32378 = state_32347;
state_32347 = G__32378;
continue;
} else {
return ret_value__31772__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__31771__auto__ = function(state_32347){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__31771__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__31771__auto____1.call(this,state_32347);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__31771__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__31771__auto____0;
cljs$core$async$reduce_$_state_machine__31771__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__31771__auto____1;
return cljs$core$async$reduce_$_state_machine__31771__auto__;
})()
;})(switch__31770__auto__,c__31860__auto__))
})();
var state__31862__auto__ = (function (){var statearr_32366 = f__31861__auto__.call(null);
(statearr_32366[(6)] = c__31860__auto__);

return statearr_32366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31862__auto__);
});})(c__31860__auto__))
);

return c__31860__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__31860__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31860__auto__,f__$1){
return (function (){
var f__31861__auto__ = (function (){var switch__31770__auto__ = ((function (c__31860__auto__,f__$1){
return (function (state_32384){
var state_val_32385 = (state_32384[(1)]);
if((state_val_32385 === (1))){
var inst_32379 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_32384__$1 = state_32384;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32384__$1,(2),inst_32379);
} else {
if((state_val_32385 === (2))){
var inst_32381 = (state_32384[(2)]);
var inst_32382 = f__$1.call(null,inst_32381);
var state_32384__$1 = state_32384;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32384__$1,inst_32382);
} else {
return null;
}
}
});})(c__31860__auto__,f__$1))
;
return ((function (switch__31770__auto__,c__31860__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__31771__auto__ = null;
var cljs$core$async$transduce_$_state_machine__31771__auto____0 = (function (){
var statearr_32386 = [null,null,null,null,null,null,null];
(statearr_32386[(0)] = cljs$core$async$transduce_$_state_machine__31771__auto__);

(statearr_32386[(1)] = (1));

return statearr_32386;
});
var cljs$core$async$transduce_$_state_machine__31771__auto____1 = (function (state_32384){
while(true){
var ret_value__31772__auto__ = (function (){try{while(true){
var result__31773__auto__ = switch__31770__auto__.call(null,state_32384);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31773__auto__;
}
break;
}
}catch (e32387){if((e32387 instanceof Object)){
var ex__31774__auto__ = e32387;
var statearr_32388_32390 = state_32384;
(statearr_32388_32390[(5)] = ex__31774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32384);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32387;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32391 = state_32384;
state_32384 = G__32391;
continue;
} else {
return ret_value__31772__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__31771__auto__ = function(state_32384){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__31771__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__31771__auto____1.call(this,state_32384);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__31771__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__31771__auto____0;
cljs$core$async$transduce_$_state_machine__31771__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__31771__auto____1;
return cljs$core$async$transduce_$_state_machine__31771__auto__;
})()
;})(switch__31770__auto__,c__31860__auto__,f__$1))
})();
var state__31862__auto__ = (function (){var statearr_32389 = f__31861__auto__.call(null);
(statearr_32389[(6)] = c__31860__auto__);

return statearr_32389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31862__auto__);
});})(c__31860__auto__,f__$1))
);

return c__31860__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__32393 = arguments.length;
switch (G__32393) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__31860__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31860__auto__){
return (function (){
var f__31861__auto__ = (function (){var switch__31770__auto__ = ((function (c__31860__auto__){
return (function (state_32418){
var state_val_32419 = (state_32418[(1)]);
if((state_val_32419 === (7))){
var inst_32400 = (state_32418[(2)]);
var state_32418__$1 = state_32418;
var statearr_32420_32441 = state_32418__$1;
(statearr_32420_32441[(2)] = inst_32400);

(statearr_32420_32441[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32419 === (1))){
var inst_32394 = cljs.core.seq.call(null,coll);
var inst_32395 = inst_32394;
var state_32418__$1 = (function (){var statearr_32421 = state_32418;
(statearr_32421[(7)] = inst_32395);

return statearr_32421;
})();
var statearr_32422_32442 = state_32418__$1;
(statearr_32422_32442[(2)] = null);

(statearr_32422_32442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32419 === (4))){
var inst_32395 = (state_32418[(7)]);
var inst_32398 = cljs.core.first.call(null,inst_32395);
var state_32418__$1 = state_32418;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32418__$1,(7),ch,inst_32398);
} else {
if((state_val_32419 === (13))){
var inst_32412 = (state_32418[(2)]);
var state_32418__$1 = state_32418;
var statearr_32423_32443 = state_32418__$1;
(statearr_32423_32443[(2)] = inst_32412);

(statearr_32423_32443[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32419 === (6))){
var inst_32403 = (state_32418[(2)]);
var state_32418__$1 = state_32418;
if(cljs.core.truth_(inst_32403)){
var statearr_32424_32444 = state_32418__$1;
(statearr_32424_32444[(1)] = (8));

} else {
var statearr_32425_32445 = state_32418__$1;
(statearr_32425_32445[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32419 === (3))){
var inst_32416 = (state_32418[(2)]);
var state_32418__$1 = state_32418;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32418__$1,inst_32416);
} else {
if((state_val_32419 === (12))){
var state_32418__$1 = state_32418;
var statearr_32426_32446 = state_32418__$1;
(statearr_32426_32446[(2)] = null);

(statearr_32426_32446[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32419 === (2))){
var inst_32395 = (state_32418[(7)]);
var state_32418__$1 = state_32418;
if(cljs.core.truth_(inst_32395)){
var statearr_32427_32447 = state_32418__$1;
(statearr_32427_32447[(1)] = (4));

} else {
var statearr_32428_32448 = state_32418__$1;
(statearr_32428_32448[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32419 === (11))){
var inst_32409 = cljs.core.async.close_BANG_.call(null,ch);
var state_32418__$1 = state_32418;
var statearr_32429_32449 = state_32418__$1;
(statearr_32429_32449[(2)] = inst_32409);

(statearr_32429_32449[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32419 === (9))){
var state_32418__$1 = state_32418;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32430_32450 = state_32418__$1;
(statearr_32430_32450[(1)] = (11));

} else {
var statearr_32431_32451 = state_32418__$1;
(statearr_32431_32451[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32419 === (5))){
var inst_32395 = (state_32418[(7)]);
var state_32418__$1 = state_32418;
var statearr_32432_32452 = state_32418__$1;
(statearr_32432_32452[(2)] = inst_32395);

(statearr_32432_32452[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32419 === (10))){
var inst_32414 = (state_32418[(2)]);
var state_32418__$1 = state_32418;
var statearr_32433_32453 = state_32418__$1;
(statearr_32433_32453[(2)] = inst_32414);

(statearr_32433_32453[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32419 === (8))){
var inst_32395 = (state_32418[(7)]);
var inst_32405 = cljs.core.next.call(null,inst_32395);
var inst_32395__$1 = inst_32405;
var state_32418__$1 = (function (){var statearr_32434 = state_32418;
(statearr_32434[(7)] = inst_32395__$1);

return statearr_32434;
})();
var statearr_32435_32454 = state_32418__$1;
(statearr_32435_32454[(2)] = null);

(statearr_32435_32454[(1)] = (2));


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
});})(c__31860__auto__))
;
return ((function (switch__31770__auto__,c__31860__auto__){
return (function() {
var cljs$core$async$state_machine__31771__auto__ = null;
var cljs$core$async$state_machine__31771__auto____0 = (function (){
var statearr_32436 = [null,null,null,null,null,null,null,null];
(statearr_32436[(0)] = cljs$core$async$state_machine__31771__auto__);

(statearr_32436[(1)] = (1));

return statearr_32436;
});
var cljs$core$async$state_machine__31771__auto____1 = (function (state_32418){
while(true){
var ret_value__31772__auto__ = (function (){try{while(true){
var result__31773__auto__ = switch__31770__auto__.call(null,state_32418);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31773__auto__;
}
break;
}
}catch (e32437){if((e32437 instanceof Object)){
var ex__31774__auto__ = e32437;
var statearr_32438_32455 = state_32418;
(statearr_32438_32455[(5)] = ex__31774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32418);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32437;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32456 = state_32418;
state_32418 = G__32456;
continue;
} else {
return ret_value__31772__auto__;
}
break;
}
});
cljs$core$async$state_machine__31771__auto__ = function(state_32418){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31771__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31771__auto____1.call(this,state_32418);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31771__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31771__auto____0;
cljs$core$async$state_machine__31771__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31771__auto____1;
return cljs$core$async$state_machine__31771__auto__;
})()
;})(switch__31770__auto__,c__31860__auto__))
})();
var state__31862__auto__ = (function (){var statearr_32439 = f__31861__auto__.call(null);
(statearr_32439[(6)] = c__31860__auto__);

return statearr_32439;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31862__auto__);
});})(c__31860__auto__))
);

return c__31860__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__29537__auto__ = (((_ == null))?null:_);
var m__29538__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__29537__auto__)]);
if(!((m__29538__auto__ == null))){
return m__29538__auto__.call(null,_);
} else {
var m__29538__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__29538__auto____$1 == null))){
return m__29538__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__29537__auto__ = (((m == null))?null:m);
var m__29538__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__29537__auto__)]);
if(!((m__29538__auto__ == null))){
return m__29538__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__29538__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__29538__auto____$1 == null))){
return m__29538__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__29537__auto__ = (((m == null))?null:m);
var m__29538__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__29537__auto__)]);
if(!((m__29538__auto__ == null))){
return m__29538__auto__.call(null,m,ch);
} else {
var m__29538__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__29538__auto____$1 == null))){
return m__29538__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__29537__auto__ = (((m == null))?null:m);
var m__29538__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__29537__auto__)]);
if(!((m__29538__auto__ == null))){
return m__29538__auto__.call(null,m);
} else {
var m__29538__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__29538__auto____$1 == null))){
return m__29538__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async32457 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32457 = (function (ch,cs,meta32458){
this.ch = ch;
this.cs = cs;
this.meta32458 = meta32458;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32457.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_32459,meta32458__$1){
var self__ = this;
var _32459__$1 = this;
return (new cljs.core.async.t_cljs$core$async32457(self__.ch,self__.cs,meta32458__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async32457.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_32459){
var self__ = this;
var _32459__$1 = this;
return self__.meta32458;
});})(cs))
;

cljs.core.async.t_cljs$core$async32457.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32457.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async32457.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32457.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32457.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32457.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32457.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta32458","meta32458",595733129,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async32457.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32457.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32457";

cljs.core.async.t_cljs$core$async32457.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__29475__auto__,writer__29476__auto__,opt__29477__auto__){
return cljs.core._write.call(null,writer__29476__auto__,"cljs.core.async/t_cljs$core$async32457");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async32457 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async32457(ch__$1,cs__$1,meta32458){
return (new cljs.core.async.t_cljs$core$async32457(ch__$1,cs__$1,meta32458));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async32457(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__31860__auto___32679 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31860__auto___32679,cs,m,dchan,dctr,done){
return (function (){
var f__31861__auto__ = (function (){var switch__31770__auto__ = ((function (c__31860__auto___32679,cs,m,dchan,dctr,done){
return (function (state_32594){
var state_val_32595 = (state_32594[(1)]);
if((state_val_32595 === (7))){
var inst_32590 = (state_32594[(2)]);
var state_32594__$1 = state_32594;
var statearr_32596_32680 = state_32594__$1;
(statearr_32596_32680[(2)] = inst_32590);

(statearr_32596_32680[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32595 === (20))){
var inst_32493 = (state_32594[(7)]);
var inst_32505 = cljs.core.first.call(null,inst_32493);
var inst_32506 = cljs.core.nth.call(null,inst_32505,(0),null);
var inst_32507 = cljs.core.nth.call(null,inst_32505,(1),null);
var state_32594__$1 = (function (){var statearr_32597 = state_32594;
(statearr_32597[(8)] = inst_32506);

return statearr_32597;
})();
if(cljs.core.truth_(inst_32507)){
var statearr_32598_32681 = state_32594__$1;
(statearr_32598_32681[(1)] = (22));

} else {
var statearr_32599_32682 = state_32594__$1;
(statearr_32599_32682[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32595 === (27))){
var inst_32462 = (state_32594[(9)]);
var inst_32537 = (state_32594[(10)]);
var inst_32542 = (state_32594[(11)]);
var inst_32535 = (state_32594[(12)]);
var inst_32542__$1 = cljs.core._nth.call(null,inst_32535,inst_32537);
var inst_32543 = cljs.core.async.put_BANG_.call(null,inst_32542__$1,inst_32462,done);
var state_32594__$1 = (function (){var statearr_32600 = state_32594;
(statearr_32600[(11)] = inst_32542__$1);

return statearr_32600;
})();
if(cljs.core.truth_(inst_32543)){
var statearr_32601_32683 = state_32594__$1;
(statearr_32601_32683[(1)] = (30));

} else {
var statearr_32602_32684 = state_32594__$1;
(statearr_32602_32684[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32595 === (1))){
var state_32594__$1 = state_32594;
var statearr_32603_32685 = state_32594__$1;
(statearr_32603_32685[(2)] = null);

(statearr_32603_32685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32595 === (24))){
var inst_32493 = (state_32594[(7)]);
var inst_32512 = (state_32594[(2)]);
var inst_32513 = cljs.core.next.call(null,inst_32493);
var inst_32471 = inst_32513;
var inst_32472 = null;
var inst_32473 = (0);
var inst_32474 = (0);
var state_32594__$1 = (function (){var statearr_32604 = state_32594;
(statearr_32604[(13)] = inst_32474);

(statearr_32604[(14)] = inst_32473);

(statearr_32604[(15)] = inst_32471);

(statearr_32604[(16)] = inst_32512);

(statearr_32604[(17)] = inst_32472);

return statearr_32604;
})();
var statearr_32605_32686 = state_32594__$1;
(statearr_32605_32686[(2)] = null);

(statearr_32605_32686[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32595 === (39))){
var state_32594__$1 = state_32594;
var statearr_32609_32687 = state_32594__$1;
(statearr_32609_32687[(2)] = null);

(statearr_32609_32687[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32595 === (4))){
var inst_32462 = (state_32594[(9)]);
var inst_32462__$1 = (state_32594[(2)]);
var inst_32463 = (inst_32462__$1 == null);
var state_32594__$1 = (function (){var statearr_32610 = state_32594;
(statearr_32610[(9)] = inst_32462__$1);

return statearr_32610;
})();
if(cljs.core.truth_(inst_32463)){
var statearr_32611_32688 = state_32594__$1;
(statearr_32611_32688[(1)] = (5));

} else {
var statearr_32612_32689 = state_32594__$1;
(statearr_32612_32689[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32595 === (15))){
var inst_32474 = (state_32594[(13)]);
var inst_32473 = (state_32594[(14)]);
var inst_32471 = (state_32594[(15)]);
var inst_32472 = (state_32594[(17)]);
var inst_32489 = (state_32594[(2)]);
var inst_32490 = (inst_32474 + (1));
var tmp32606 = inst_32473;
var tmp32607 = inst_32471;
var tmp32608 = inst_32472;
var inst_32471__$1 = tmp32607;
var inst_32472__$1 = tmp32608;
var inst_32473__$1 = tmp32606;
var inst_32474__$1 = inst_32490;
var state_32594__$1 = (function (){var statearr_32613 = state_32594;
(statearr_32613[(13)] = inst_32474__$1);

(statearr_32613[(14)] = inst_32473__$1);

(statearr_32613[(18)] = inst_32489);

(statearr_32613[(15)] = inst_32471__$1);

(statearr_32613[(17)] = inst_32472__$1);

return statearr_32613;
})();
var statearr_32614_32690 = state_32594__$1;
(statearr_32614_32690[(2)] = null);

(statearr_32614_32690[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32595 === (21))){
var inst_32516 = (state_32594[(2)]);
var state_32594__$1 = state_32594;
var statearr_32618_32691 = state_32594__$1;
(statearr_32618_32691[(2)] = inst_32516);

(statearr_32618_32691[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32595 === (31))){
var inst_32542 = (state_32594[(11)]);
var inst_32546 = done.call(null,null);
var inst_32547 = cljs.core.async.untap_STAR_.call(null,m,inst_32542);
var state_32594__$1 = (function (){var statearr_32619 = state_32594;
(statearr_32619[(19)] = inst_32546);

return statearr_32619;
})();
var statearr_32620_32692 = state_32594__$1;
(statearr_32620_32692[(2)] = inst_32547);

(statearr_32620_32692[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32595 === (32))){
var inst_32537 = (state_32594[(10)]);
var inst_32534 = (state_32594[(20)]);
var inst_32535 = (state_32594[(12)]);
var inst_32536 = (state_32594[(21)]);
var inst_32549 = (state_32594[(2)]);
var inst_32550 = (inst_32537 + (1));
var tmp32615 = inst_32534;
var tmp32616 = inst_32535;
var tmp32617 = inst_32536;
var inst_32534__$1 = tmp32615;
var inst_32535__$1 = tmp32616;
var inst_32536__$1 = tmp32617;
var inst_32537__$1 = inst_32550;
var state_32594__$1 = (function (){var statearr_32621 = state_32594;
(statearr_32621[(10)] = inst_32537__$1);

(statearr_32621[(20)] = inst_32534__$1);

(statearr_32621[(22)] = inst_32549);

(statearr_32621[(12)] = inst_32535__$1);

(statearr_32621[(21)] = inst_32536__$1);

return statearr_32621;
})();
var statearr_32622_32693 = state_32594__$1;
(statearr_32622_32693[(2)] = null);

(statearr_32622_32693[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32595 === (40))){
var inst_32562 = (state_32594[(23)]);
var inst_32566 = done.call(null,null);
var inst_32567 = cljs.core.async.untap_STAR_.call(null,m,inst_32562);
var state_32594__$1 = (function (){var statearr_32623 = state_32594;
(statearr_32623[(24)] = inst_32566);

return statearr_32623;
})();
var statearr_32624_32694 = state_32594__$1;
(statearr_32624_32694[(2)] = inst_32567);

(statearr_32624_32694[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32595 === (33))){
var inst_32553 = (state_32594[(25)]);
var inst_32555 = cljs.core.chunked_seq_QMARK_.call(null,inst_32553);
var state_32594__$1 = state_32594;
if(inst_32555){
var statearr_32625_32695 = state_32594__$1;
(statearr_32625_32695[(1)] = (36));

} else {
var statearr_32626_32696 = state_32594__$1;
(statearr_32626_32696[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32595 === (13))){
var inst_32483 = (state_32594[(26)]);
var inst_32486 = cljs.core.async.close_BANG_.call(null,inst_32483);
var state_32594__$1 = state_32594;
var statearr_32627_32697 = state_32594__$1;
(statearr_32627_32697[(2)] = inst_32486);

(statearr_32627_32697[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32595 === (22))){
var inst_32506 = (state_32594[(8)]);
var inst_32509 = cljs.core.async.close_BANG_.call(null,inst_32506);
var state_32594__$1 = state_32594;
var statearr_32628_32698 = state_32594__$1;
(statearr_32628_32698[(2)] = inst_32509);

(statearr_32628_32698[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32595 === (36))){
var inst_32553 = (state_32594[(25)]);
var inst_32557 = cljs.core.chunk_first.call(null,inst_32553);
var inst_32558 = cljs.core.chunk_rest.call(null,inst_32553);
var inst_32559 = cljs.core.count.call(null,inst_32557);
var inst_32534 = inst_32558;
var inst_32535 = inst_32557;
var inst_32536 = inst_32559;
var inst_32537 = (0);
var state_32594__$1 = (function (){var statearr_32629 = state_32594;
(statearr_32629[(10)] = inst_32537);

(statearr_32629[(20)] = inst_32534);

(statearr_32629[(12)] = inst_32535);

(statearr_32629[(21)] = inst_32536);

return statearr_32629;
})();
var statearr_32630_32699 = state_32594__$1;
(statearr_32630_32699[(2)] = null);

(statearr_32630_32699[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32595 === (41))){
var inst_32553 = (state_32594[(25)]);
var inst_32569 = (state_32594[(2)]);
var inst_32570 = cljs.core.next.call(null,inst_32553);
var inst_32534 = inst_32570;
var inst_32535 = null;
var inst_32536 = (0);
var inst_32537 = (0);
var state_32594__$1 = (function (){var statearr_32631 = state_32594;
(statearr_32631[(10)] = inst_32537);

(statearr_32631[(27)] = inst_32569);

(statearr_32631[(20)] = inst_32534);

(statearr_32631[(12)] = inst_32535);

(statearr_32631[(21)] = inst_32536);

return statearr_32631;
})();
var statearr_32632_32700 = state_32594__$1;
(statearr_32632_32700[(2)] = null);

(statearr_32632_32700[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32595 === (43))){
var state_32594__$1 = state_32594;
var statearr_32633_32701 = state_32594__$1;
(statearr_32633_32701[(2)] = null);

(statearr_32633_32701[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32595 === (29))){
var inst_32578 = (state_32594[(2)]);
var state_32594__$1 = state_32594;
var statearr_32634_32702 = state_32594__$1;
(statearr_32634_32702[(2)] = inst_32578);

(statearr_32634_32702[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32595 === (44))){
var inst_32587 = (state_32594[(2)]);
var state_32594__$1 = (function (){var statearr_32635 = state_32594;
(statearr_32635[(28)] = inst_32587);

return statearr_32635;
})();
var statearr_32636_32703 = state_32594__$1;
(statearr_32636_32703[(2)] = null);

(statearr_32636_32703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32595 === (6))){
var inst_32526 = (state_32594[(29)]);
var inst_32525 = cljs.core.deref.call(null,cs);
var inst_32526__$1 = cljs.core.keys.call(null,inst_32525);
var inst_32527 = cljs.core.count.call(null,inst_32526__$1);
var inst_32528 = cljs.core.reset_BANG_.call(null,dctr,inst_32527);
var inst_32533 = cljs.core.seq.call(null,inst_32526__$1);
var inst_32534 = inst_32533;
var inst_32535 = null;
var inst_32536 = (0);
var inst_32537 = (0);
var state_32594__$1 = (function (){var statearr_32637 = state_32594;
(statearr_32637[(29)] = inst_32526__$1);

(statearr_32637[(30)] = inst_32528);

(statearr_32637[(10)] = inst_32537);

(statearr_32637[(20)] = inst_32534);

(statearr_32637[(12)] = inst_32535);

(statearr_32637[(21)] = inst_32536);

return statearr_32637;
})();
var statearr_32638_32704 = state_32594__$1;
(statearr_32638_32704[(2)] = null);

(statearr_32638_32704[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32595 === (28))){
var inst_32534 = (state_32594[(20)]);
var inst_32553 = (state_32594[(25)]);
var inst_32553__$1 = cljs.core.seq.call(null,inst_32534);
var state_32594__$1 = (function (){var statearr_32639 = state_32594;
(statearr_32639[(25)] = inst_32553__$1);

return statearr_32639;
})();
if(inst_32553__$1){
var statearr_32640_32705 = state_32594__$1;
(statearr_32640_32705[(1)] = (33));

} else {
var statearr_32641_32706 = state_32594__$1;
(statearr_32641_32706[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32595 === (25))){
var inst_32537 = (state_32594[(10)]);
var inst_32536 = (state_32594[(21)]);
var inst_32539 = (inst_32537 < inst_32536);
var inst_32540 = inst_32539;
var state_32594__$1 = state_32594;
if(cljs.core.truth_(inst_32540)){
var statearr_32642_32707 = state_32594__$1;
(statearr_32642_32707[(1)] = (27));

} else {
var statearr_32643_32708 = state_32594__$1;
(statearr_32643_32708[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32595 === (34))){
var state_32594__$1 = state_32594;
var statearr_32644_32709 = state_32594__$1;
(statearr_32644_32709[(2)] = null);

(statearr_32644_32709[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32595 === (17))){
var state_32594__$1 = state_32594;
var statearr_32645_32710 = state_32594__$1;
(statearr_32645_32710[(2)] = null);

(statearr_32645_32710[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32595 === (3))){
var inst_32592 = (state_32594[(2)]);
var state_32594__$1 = state_32594;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32594__$1,inst_32592);
} else {
if((state_val_32595 === (12))){
var inst_32521 = (state_32594[(2)]);
var state_32594__$1 = state_32594;
var statearr_32646_32711 = state_32594__$1;
(statearr_32646_32711[(2)] = inst_32521);

(statearr_32646_32711[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32595 === (2))){
var state_32594__$1 = state_32594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32594__$1,(4),ch);
} else {
if((state_val_32595 === (23))){
var state_32594__$1 = state_32594;
var statearr_32647_32712 = state_32594__$1;
(statearr_32647_32712[(2)] = null);

(statearr_32647_32712[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32595 === (35))){
var inst_32576 = (state_32594[(2)]);
var state_32594__$1 = state_32594;
var statearr_32648_32713 = state_32594__$1;
(statearr_32648_32713[(2)] = inst_32576);

(statearr_32648_32713[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32595 === (19))){
var inst_32493 = (state_32594[(7)]);
var inst_32497 = cljs.core.chunk_first.call(null,inst_32493);
var inst_32498 = cljs.core.chunk_rest.call(null,inst_32493);
var inst_32499 = cljs.core.count.call(null,inst_32497);
var inst_32471 = inst_32498;
var inst_32472 = inst_32497;
var inst_32473 = inst_32499;
var inst_32474 = (0);
var state_32594__$1 = (function (){var statearr_32649 = state_32594;
(statearr_32649[(13)] = inst_32474);

(statearr_32649[(14)] = inst_32473);

(statearr_32649[(15)] = inst_32471);

(statearr_32649[(17)] = inst_32472);

return statearr_32649;
})();
var statearr_32650_32714 = state_32594__$1;
(statearr_32650_32714[(2)] = null);

(statearr_32650_32714[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32595 === (11))){
var inst_32493 = (state_32594[(7)]);
var inst_32471 = (state_32594[(15)]);
var inst_32493__$1 = cljs.core.seq.call(null,inst_32471);
var state_32594__$1 = (function (){var statearr_32651 = state_32594;
(statearr_32651[(7)] = inst_32493__$1);

return statearr_32651;
})();
if(inst_32493__$1){
var statearr_32652_32715 = state_32594__$1;
(statearr_32652_32715[(1)] = (16));

} else {
var statearr_32653_32716 = state_32594__$1;
(statearr_32653_32716[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32595 === (9))){
var inst_32523 = (state_32594[(2)]);
var state_32594__$1 = state_32594;
var statearr_32654_32717 = state_32594__$1;
(statearr_32654_32717[(2)] = inst_32523);

(statearr_32654_32717[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32595 === (5))){
var inst_32469 = cljs.core.deref.call(null,cs);
var inst_32470 = cljs.core.seq.call(null,inst_32469);
var inst_32471 = inst_32470;
var inst_32472 = null;
var inst_32473 = (0);
var inst_32474 = (0);
var state_32594__$1 = (function (){var statearr_32655 = state_32594;
(statearr_32655[(13)] = inst_32474);

(statearr_32655[(14)] = inst_32473);

(statearr_32655[(15)] = inst_32471);

(statearr_32655[(17)] = inst_32472);

return statearr_32655;
})();
var statearr_32656_32718 = state_32594__$1;
(statearr_32656_32718[(2)] = null);

(statearr_32656_32718[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32595 === (14))){
var state_32594__$1 = state_32594;
var statearr_32657_32719 = state_32594__$1;
(statearr_32657_32719[(2)] = null);

(statearr_32657_32719[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32595 === (45))){
var inst_32584 = (state_32594[(2)]);
var state_32594__$1 = state_32594;
var statearr_32658_32720 = state_32594__$1;
(statearr_32658_32720[(2)] = inst_32584);

(statearr_32658_32720[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32595 === (26))){
var inst_32526 = (state_32594[(29)]);
var inst_32580 = (state_32594[(2)]);
var inst_32581 = cljs.core.seq.call(null,inst_32526);
var state_32594__$1 = (function (){var statearr_32659 = state_32594;
(statearr_32659[(31)] = inst_32580);

return statearr_32659;
})();
if(inst_32581){
var statearr_32660_32721 = state_32594__$1;
(statearr_32660_32721[(1)] = (42));

} else {
var statearr_32661_32722 = state_32594__$1;
(statearr_32661_32722[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32595 === (16))){
var inst_32493 = (state_32594[(7)]);
var inst_32495 = cljs.core.chunked_seq_QMARK_.call(null,inst_32493);
var state_32594__$1 = state_32594;
if(inst_32495){
var statearr_32662_32723 = state_32594__$1;
(statearr_32662_32723[(1)] = (19));

} else {
var statearr_32663_32724 = state_32594__$1;
(statearr_32663_32724[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32595 === (38))){
var inst_32573 = (state_32594[(2)]);
var state_32594__$1 = state_32594;
var statearr_32664_32725 = state_32594__$1;
(statearr_32664_32725[(2)] = inst_32573);

(statearr_32664_32725[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32595 === (30))){
var state_32594__$1 = state_32594;
var statearr_32665_32726 = state_32594__$1;
(statearr_32665_32726[(2)] = null);

(statearr_32665_32726[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32595 === (10))){
var inst_32474 = (state_32594[(13)]);
var inst_32472 = (state_32594[(17)]);
var inst_32482 = cljs.core._nth.call(null,inst_32472,inst_32474);
var inst_32483 = cljs.core.nth.call(null,inst_32482,(0),null);
var inst_32484 = cljs.core.nth.call(null,inst_32482,(1),null);
var state_32594__$1 = (function (){var statearr_32666 = state_32594;
(statearr_32666[(26)] = inst_32483);

return statearr_32666;
})();
if(cljs.core.truth_(inst_32484)){
var statearr_32667_32727 = state_32594__$1;
(statearr_32667_32727[(1)] = (13));

} else {
var statearr_32668_32728 = state_32594__$1;
(statearr_32668_32728[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32595 === (18))){
var inst_32519 = (state_32594[(2)]);
var state_32594__$1 = state_32594;
var statearr_32669_32729 = state_32594__$1;
(statearr_32669_32729[(2)] = inst_32519);

(statearr_32669_32729[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32595 === (42))){
var state_32594__$1 = state_32594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32594__$1,(45),dchan);
} else {
if((state_val_32595 === (37))){
var inst_32562 = (state_32594[(23)]);
var inst_32462 = (state_32594[(9)]);
var inst_32553 = (state_32594[(25)]);
var inst_32562__$1 = cljs.core.first.call(null,inst_32553);
var inst_32563 = cljs.core.async.put_BANG_.call(null,inst_32562__$1,inst_32462,done);
var state_32594__$1 = (function (){var statearr_32670 = state_32594;
(statearr_32670[(23)] = inst_32562__$1);

return statearr_32670;
})();
if(cljs.core.truth_(inst_32563)){
var statearr_32671_32730 = state_32594__$1;
(statearr_32671_32730[(1)] = (39));

} else {
var statearr_32672_32731 = state_32594__$1;
(statearr_32672_32731[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32595 === (8))){
var inst_32474 = (state_32594[(13)]);
var inst_32473 = (state_32594[(14)]);
var inst_32476 = (inst_32474 < inst_32473);
var inst_32477 = inst_32476;
var state_32594__$1 = state_32594;
if(cljs.core.truth_(inst_32477)){
var statearr_32673_32732 = state_32594__$1;
(statearr_32673_32732[(1)] = (10));

} else {
var statearr_32674_32733 = state_32594__$1;
(statearr_32674_32733[(1)] = (11));

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
});})(c__31860__auto___32679,cs,m,dchan,dctr,done))
;
return ((function (switch__31770__auto__,c__31860__auto___32679,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__31771__auto__ = null;
var cljs$core$async$mult_$_state_machine__31771__auto____0 = (function (){
var statearr_32675 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32675[(0)] = cljs$core$async$mult_$_state_machine__31771__auto__);

(statearr_32675[(1)] = (1));

return statearr_32675;
});
var cljs$core$async$mult_$_state_machine__31771__auto____1 = (function (state_32594){
while(true){
var ret_value__31772__auto__ = (function (){try{while(true){
var result__31773__auto__ = switch__31770__auto__.call(null,state_32594);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31773__auto__;
}
break;
}
}catch (e32676){if((e32676 instanceof Object)){
var ex__31774__auto__ = e32676;
var statearr_32677_32734 = state_32594;
(statearr_32677_32734[(5)] = ex__31774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32594);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32676;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32735 = state_32594;
state_32594 = G__32735;
continue;
} else {
return ret_value__31772__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__31771__auto__ = function(state_32594){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__31771__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__31771__auto____1.call(this,state_32594);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__31771__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__31771__auto____0;
cljs$core$async$mult_$_state_machine__31771__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__31771__auto____1;
return cljs$core$async$mult_$_state_machine__31771__auto__;
})()
;})(switch__31770__auto__,c__31860__auto___32679,cs,m,dchan,dctr,done))
})();
var state__31862__auto__ = (function (){var statearr_32678 = f__31861__auto__.call(null);
(statearr_32678[(6)] = c__31860__auto___32679);

return statearr_32678;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31862__auto__);
});})(c__31860__auto___32679,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__32737 = arguments.length;
switch (G__32737) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__29537__auto__ = (((m == null))?null:m);
var m__29538__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__29537__auto__)]);
if(!((m__29538__auto__ == null))){
return m__29538__auto__.call(null,m,ch);
} else {
var m__29538__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__29538__auto____$1 == null))){
return m__29538__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__29537__auto__ = (((m == null))?null:m);
var m__29538__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__29537__auto__)]);
if(!((m__29538__auto__ == null))){
return m__29538__auto__.call(null,m,ch);
} else {
var m__29538__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__29538__auto____$1 == null))){
return m__29538__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__29537__auto__ = (((m == null))?null:m);
var m__29538__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__29537__auto__)]);
if(!((m__29538__auto__ == null))){
return m__29538__auto__.call(null,m);
} else {
var m__29538__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__29538__auto____$1 == null))){
return m__29538__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__29537__auto__ = (((m == null))?null:m);
var m__29538__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__29537__auto__)]);
if(!((m__29538__auto__ == null))){
return m__29538__auto__.call(null,m,state_map);
} else {
var m__29538__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__29538__auto____$1 == null))){
return m__29538__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__29537__auto__ = (((m == null))?null:m);
var m__29538__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__29537__auto__)]);
if(!((m__29538__auto__ == null))){
return m__29538__auto__.call(null,m,mode);
} else {
var m__29538__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__29538__auto____$1 == null))){
return m__29538__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__30058__auto__ = [];
var len__30051__auto___32749 = arguments.length;
var i__30052__auto___32750 = (0);
while(true){
if((i__30052__auto___32750 < len__30051__auto___32749)){
args__30058__auto__.push((arguments[i__30052__auto___32750]));

var G__32751 = (i__30052__auto___32750 + (1));
i__30052__auto___32750 = G__32751;
continue;
} else {
}
break;
}

var argseq__30059__auto__ = ((((3) < args__30058__auto__.length))?(new cljs.core.IndexedSeq(args__30058__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__30059__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32743){
var map__32744 = p__32743;
var map__32744__$1 = ((((!((map__32744 == null)))?((((map__32744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32744.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32744):map__32744);
var opts = map__32744__$1;
var statearr_32746_32752 = state;
(statearr_32746_32752[(1)] = cont_block);


var temp__6753__auto__ = cljs.core.async.do_alts.call(null,((function (map__32744,map__32744__$1,opts){
return (function (val){
var statearr_32747_32753 = state;
(statearr_32747_32753[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__32744,map__32744__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__6753__auto__)){
var cb = temp__6753__auto__;
var statearr_32748_32754 = state;
(statearr_32748_32754[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32739){
var G__32740 = cljs.core.first.call(null,seq32739);
var seq32739__$1 = cljs.core.next.call(null,seq32739);
var G__32741 = cljs.core.first.call(null,seq32739__$1);
var seq32739__$2 = cljs.core.next.call(null,seq32739__$1);
var G__32742 = cljs.core.first.call(null,seq32739__$2);
var seq32739__$3 = cljs.core.next.call(null,seq32739__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32740,G__32741,G__32742,seq32739__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async32755 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32755 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta32756){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta32756 = meta32756;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32755.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32757,meta32756__$1){
var self__ = this;
var _32757__$1 = this;
return (new cljs.core.async.t_cljs$core$async32755(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta32756__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32755.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32757){
var self__ = this;
var _32757__$1 = this;
return self__.meta32756;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32755.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32755.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32755.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32755.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32755.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32755.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32755.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32755.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("mode must be one of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32755.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta32756","meta32756",-80050246,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32755.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32755.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32755";

cljs.core.async.t_cljs$core$async32755.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__29475__auto__,writer__29476__auto__,opt__29477__auto__){
return cljs.core._write.call(null,writer__29476__auto__,"cljs.core.async/t_cljs$core$async32755");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async32755 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async32755(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta32756){
return (new cljs.core.async.t_cljs$core$async32755(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta32756));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async32755(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31860__auto___32919 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31860__auto___32919,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__31861__auto__ = (function (){var switch__31770__auto__ = ((function (c__31860__auto___32919,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32859){
var state_val_32860 = (state_32859[(1)]);
if((state_val_32860 === (7))){
var inst_32774 = (state_32859[(2)]);
var state_32859__$1 = state_32859;
var statearr_32861_32920 = state_32859__$1;
(statearr_32861_32920[(2)] = inst_32774);

(statearr_32861_32920[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32860 === (20))){
var inst_32786 = (state_32859[(7)]);
var state_32859__$1 = state_32859;
var statearr_32862_32921 = state_32859__$1;
(statearr_32862_32921[(2)] = inst_32786);

(statearr_32862_32921[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32860 === (27))){
var state_32859__$1 = state_32859;
var statearr_32863_32922 = state_32859__$1;
(statearr_32863_32922[(2)] = null);

(statearr_32863_32922[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32860 === (1))){
var inst_32761 = (state_32859[(8)]);
var inst_32761__$1 = calc_state.call(null);
var inst_32763 = (inst_32761__$1 == null);
var inst_32764 = cljs.core.not.call(null,inst_32763);
var state_32859__$1 = (function (){var statearr_32864 = state_32859;
(statearr_32864[(8)] = inst_32761__$1);

return statearr_32864;
})();
if(inst_32764){
var statearr_32865_32923 = state_32859__$1;
(statearr_32865_32923[(1)] = (2));

} else {
var statearr_32866_32924 = state_32859__$1;
(statearr_32866_32924[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32860 === (24))){
var inst_32833 = (state_32859[(9)]);
var inst_32810 = (state_32859[(10)]);
var inst_32819 = (state_32859[(11)]);
var inst_32833__$1 = inst_32810.call(null,inst_32819);
var state_32859__$1 = (function (){var statearr_32867 = state_32859;
(statearr_32867[(9)] = inst_32833__$1);

return statearr_32867;
})();
if(cljs.core.truth_(inst_32833__$1)){
var statearr_32868_32925 = state_32859__$1;
(statearr_32868_32925[(1)] = (29));

} else {
var statearr_32869_32926 = state_32859__$1;
(statearr_32869_32926[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32860 === (4))){
var inst_32777 = (state_32859[(2)]);
var state_32859__$1 = state_32859;
if(cljs.core.truth_(inst_32777)){
var statearr_32870_32927 = state_32859__$1;
(statearr_32870_32927[(1)] = (8));

} else {
var statearr_32871_32928 = state_32859__$1;
(statearr_32871_32928[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32860 === (15))){
var inst_32804 = (state_32859[(2)]);
var state_32859__$1 = state_32859;
if(cljs.core.truth_(inst_32804)){
var statearr_32872_32929 = state_32859__$1;
(statearr_32872_32929[(1)] = (19));

} else {
var statearr_32873_32930 = state_32859__$1;
(statearr_32873_32930[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32860 === (21))){
var inst_32809 = (state_32859[(12)]);
var inst_32809__$1 = (state_32859[(2)]);
var inst_32810 = cljs.core.get.call(null,inst_32809__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32811 = cljs.core.get.call(null,inst_32809__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32812 = cljs.core.get.call(null,inst_32809__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32859__$1 = (function (){var statearr_32874 = state_32859;
(statearr_32874[(13)] = inst_32811);

(statearr_32874[(10)] = inst_32810);

(statearr_32874[(12)] = inst_32809__$1);

return statearr_32874;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_32859__$1,(22),inst_32812);
} else {
if((state_val_32860 === (31))){
var inst_32841 = (state_32859[(2)]);
var state_32859__$1 = state_32859;
if(cljs.core.truth_(inst_32841)){
var statearr_32875_32931 = state_32859__$1;
(statearr_32875_32931[(1)] = (32));

} else {
var statearr_32876_32932 = state_32859__$1;
(statearr_32876_32932[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32860 === (32))){
var inst_32818 = (state_32859[(14)]);
var state_32859__$1 = state_32859;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32859__$1,(35),out,inst_32818);
} else {
if((state_val_32860 === (33))){
var inst_32809 = (state_32859[(12)]);
var inst_32786 = inst_32809;
var state_32859__$1 = (function (){var statearr_32877 = state_32859;
(statearr_32877[(7)] = inst_32786);

return statearr_32877;
})();
var statearr_32878_32933 = state_32859__$1;
(statearr_32878_32933[(2)] = null);

(statearr_32878_32933[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32860 === (13))){
var inst_32786 = (state_32859[(7)]);
var inst_32793 = inst_32786.cljs$lang$protocol_mask$partition0$;
var inst_32794 = (inst_32793 & (64));
var inst_32795 = inst_32786.cljs$core$ISeq$;
var inst_32796 = (cljs.core.PROTOCOL_SENTINEL === inst_32795);
var inst_32797 = (inst_32794) || (inst_32796);
var state_32859__$1 = state_32859;
if(cljs.core.truth_(inst_32797)){
var statearr_32879_32934 = state_32859__$1;
(statearr_32879_32934[(1)] = (16));

} else {
var statearr_32880_32935 = state_32859__$1;
(statearr_32880_32935[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32860 === (22))){
var inst_32818 = (state_32859[(14)]);
var inst_32819 = (state_32859[(11)]);
var inst_32817 = (state_32859[(2)]);
var inst_32818__$1 = cljs.core.nth.call(null,inst_32817,(0),null);
var inst_32819__$1 = cljs.core.nth.call(null,inst_32817,(1),null);
var inst_32820 = (inst_32818__$1 == null);
var inst_32821 = cljs.core._EQ_.call(null,inst_32819__$1,change);
var inst_32822 = (inst_32820) || (inst_32821);
var state_32859__$1 = (function (){var statearr_32881 = state_32859;
(statearr_32881[(14)] = inst_32818__$1);

(statearr_32881[(11)] = inst_32819__$1);

return statearr_32881;
})();
if(cljs.core.truth_(inst_32822)){
var statearr_32882_32936 = state_32859__$1;
(statearr_32882_32936[(1)] = (23));

} else {
var statearr_32883_32937 = state_32859__$1;
(statearr_32883_32937[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32860 === (36))){
var inst_32809 = (state_32859[(12)]);
var inst_32786 = inst_32809;
var state_32859__$1 = (function (){var statearr_32884 = state_32859;
(statearr_32884[(7)] = inst_32786);

return statearr_32884;
})();
var statearr_32885_32938 = state_32859__$1;
(statearr_32885_32938[(2)] = null);

(statearr_32885_32938[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32860 === (29))){
var inst_32833 = (state_32859[(9)]);
var state_32859__$1 = state_32859;
var statearr_32886_32939 = state_32859__$1;
(statearr_32886_32939[(2)] = inst_32833);

(statearr_32886_32939[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32860 === (6))){
var state_32859__$1 = state_32859;
var statearr_32887_32940 = state_32859__$1;
(statearr_32887_32940[(2)] = false);

(statearr_32887_32940[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32860 === (28))){
var inst_32829 = (state_32859[(2)]);
var inst_32830 = calc_state.call(null);
var inst_32786 = inst_32830;
var state_32859__$1 = (function (){var statearr_32888 = state_32859;
(statearr_32888[(7)] = inst_32786);

(statearr_32888[(15)] = inst_32829);

return statearr_32888;
})();
var statearr_32889_32941 = state_32859__$1;
(statearr_32889_32941[(2)] = null);

(statearr_32889_32941[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32860 === (25))){
var inst_32855 = (state_32859[(2)]);
var state_32859__$1 = state_32859;
var statearr_32890_32942 = state_32859__$1;
(statearr_32890_32942[(2)] = inst_32855);

(statearr_32890_32942[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32860 === (34))){
var inst_32853 = (state_32859[(2)]);
var state_32859__$1 = state_32859;
var statearr_32891_32943 = state_32859__$1;
(statearr_32891_32943[(2)] = inst_32853);

(statearr_32891_32943[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32860 === (17))){
var state_32859__$1 = state_32859;
var statearr_32892_32944 = state_32859__$1;
(statearr_32892_32944[(2)] = false);

(statearr_32892_32944[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32860 === (3))){
var state_32859__$1 = state_32859;
var statearr_32893_32945 = state_32859__$1;
(statearr_32893_32945[(2)] = false);

(statearr_32893_32945[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32860 === (12))){
var inst_32857 = (state_32859[(2)]);
var state_32859__$1 = state_32859;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32859__$1,inst_32857);
} else {
if((state_val_32860 === (2))){
var inst_32761 = (state_32859[(8)]);
var inst_32766 = inst_32761.cljs$lang$protocol_mask$partition0$;
var inst_32767 = (inst_32766 & (64));
var inst_32768 = inst_32761.cljs$core$ISeq$;
var inst_32769 = (cljs.core.PROTOCOL_SENTINEL === inst_32768);
var inst_32770 = (inst_32767) || (inst_32769);
var state_32859__$1 = state_32859;
if(cljs.core.truth_(inst_32770)){
var statearr_32894_32946 = state_32859__$1;
(statearr_32894_32946[(1)] = (5));

} else {
var statearr_32895_32947 = state_32859__$1;
(statearr_32895_32947[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32860 === (23))){
var inst_32818 = (state_32859[(14)]);
var inst_32824 = (inst_32818 == null);
var state_32859__$1 = state_32859;
if(cljs.core.truth_(inst_32824)){
var statearr_32896_32948 = state_32859__$1;
(statearr_32896_32948[(1)] = (26));

} else {
var statearr_32897_32949 = state_32859__$1;
(statearr_32897_32949[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32860 === (35))){
var inst_32844 = (state_32859[(2)]);
var state_32859__$1 = state_32859;
if(cljs.core.truth_(inst_32844)){
var statearr_32898_32950 = state_32859__$1;
(statearr_32898_32950[(1)] = (36));

} else {
var statearr_32899_32951 = state_32859__$1;
(statearr_32899_32951[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32860 === (19))){
var inst_32786 = (state_32859[(7)]);
var inst_32806 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32786);
var state_32859__$1 = state_32859;
var statearr_32900_32952 = state_32859__$1;
(statearr_32900_32952[(2)] = inst_32806);

(statearr_32900_32952[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32860 === (11))){
var inst_32786 = (state_32859[(7)]);
var inst_32790 = (inst_32786 == null);
var inst_32791 = cljs.core.not.call(null,inst_32790);
var state_32859__$1 = state_32859;
if(inst_32791){
var statearr_32901_32953 = state_32859__$1;
(statearr_32901_32953[(1)] = (13));

} else {
var statearr_32902_32954 = state_32859__$1;
(statearr_32902_32954[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32860 === (9))){
var inst_32761 = (state_32859[(8)]);
var state_32859__$1 = state_32859;
var statearr_32903_32955 = state_32859__$1;
(statearr_32903_32955[(2)] = inst_32761);

(statearr_32903_32955[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32860 === (5))){
var state_32859__$1 = state_32859;
var statearr_32904_32956 = state_32859__$1;
(statearr_32904_32956[(2)] = true);

(statearr_32904_32956[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32860 === (14))){
var state_32859__$1 = state_32859;
var statearr_32905_32957 = state_32859__$1;
(statearr_32905_32957[(2)] = false);

(statearr_32905_32957[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32860 === (26))){
var inst_32819 = (state_32859[(11)]);
var inst_32826 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_32819);
var state_32859__$1 = state_32859;
var statearr_32906_32958 = state_32859__$1;
(statearr_32906_32958[(2)] = inst_32826);

(statearr_32906_32958[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32860 === (16))){
var state_32859__$1 = state_32859;
var statearr_32907_32959 = state_32859__$1;
(statearr_32907_32959[(2)] = true);

(statearr_32907_32959[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32860 === (38))){
var inst_32849 = (state_32859[(2)]);
var state_32859__$1 = state_32859;
var statearr_32908_32960 = state_32859__$1;
(statearr_32908_32960[(2)] = inst_32849);

(statearr_32908_32960[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32860 === (30))){
var inst_32811 = (state_32859[(13)]);
var inst_32810 = (state_32859[(10)]);
var inst_32819 = (state_32859[(11)]);
var inst_32836 = cljs.core.empty_QMARK_.call(null,inst_32810);
var inst_32837 = inst_32811.call(null,inst_32819);
var inst_32838 = cljs.core.not.call(null,inst_32837);
var inst_32839 = (inst_32836) && (inst_32838);
var state_32859__$1 = state_32859;
var statearr_32909_32961 = state_32859__$1;
(statearr_32909_32961[(2)] = inst_32839);

(statearr_32909_32961[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32860 === (10))){
var inst_32761 = (state_32859[(8)]);
var inst_32782 = (state_32859[(2)]);
var inst_32783 = cljs.core.get.call(null,inst_32782,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32784 = cljs.core.get.call(null,inst_32782,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32785 = cljs.core.get.call(null,inst_32782,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32786 = inst_32761;
var state_32859__$1 = (function (){var statearr_32910 = state_32859;
(statearr_32910[(16)] = inst_32783);

(statearr_32910[(17)] = inst_32785);

(statearr_32910[(18)] = inst_32784);

(statearr_32910[(7)] = inst_32786);

return statearr_32910;
})();
var statearr_32911_32962 = state_32859__$1;
(statearr_32911_32962[(2)] = null);

(statearr_32911_32962[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32860 === (18))){
var inst_32801 = (state_32859[(2)]);
var state_32859__$1 = state_32859;
var statearr_32912_32963 = state_32859__$1;
(statearr_32912_32963[(2)] = inst_32801);

(statearr_32912_32963[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32860 === (37))){
var state_32859__$1 = state_32859;
var statearr_32913_32964 = state_32859__$1;
(statearr_32913_32964[(2)] = null);

(statearr_32913_32964[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32860 === (8))){
var inst_32761 = (state_32859[(8)]);
var inst_32779 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32761);
var state_32859__$1 = state_32859;
var statearr_32914_32965 = state_32859__$1;
(statearr_32914_32965[(2)] = inst_32779);

(statearr_32914_32965[(1)] = (10));


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
});})(c__31860__auto___32919,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__31770__auto__,c__31860__auto___32919,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__31771__auto__ = null;
var cljs$core$async$mix_$_state_machine__31771__auto____0 = (function (){
var statearr_32915 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32915[(0)] = cljs$core$async$mix_$_state_machine__31771__auto__);

(statearr_32915[(1)] = (1));

return statearr_32915;
});
var cljs$core$async$mix_$_state_machine__31771__auto____1 = (function (state_32859){
while(true){
var ret_value__31772__auto__ = (function (){try{while(true){
var result__31773__auto__ = switch__31770__auto__.call(null,state_32859);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31773__auto__;
}
break;
}
}catch (e32916){if((e32916 instanceof Object)){
var ex__31774__auto__ = e32916;
var statearr_32917_32966 = state_32859;
(statearr_32917_32966[(5)] = ex__31774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32859);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32916;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32967 = state_32859;
state_32859 = G__32967;
continue;
} else {
return ret_value__31772__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__31771__auto__ = function(state_32859){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__31771__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__31771__auto____1.call(this,state_32859);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__31771__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__31771__auto____0;
cljs$core$async$mix_$_state_machine__31771__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__31771__auto____1;
return cljs$core$async$mix_$_state_machine__31771__auto__;
})()
;})(switch__31770__auto__,c__31860__auto___32919,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__31862__auto__ = (function (){var statearr_32918 = f__31861__auto__.call(null);
(statearr_32918[(6)] = c__31860__auto___32919);

return statearr_32918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31862__auto__);
});})(c__31860__auto___32919,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__29537__auto__ = (((p == null))?null:p);
var m__29538__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__29537__auto__)]);
if(!((m__29538__auto__ == null))){
return m__29538__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__29538__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__29538__auto____$1 == null))){
return m__29538__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__29537__auto__ = (((p == null))?null:p);
var m__29538__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__29537__auto__)]);
if(!((m__29538__auto__ == null))){
return m__29538__auto__.call(null,p,v,ch);
} else {
var m__29538__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__29538__auto____$1 == null))){
return m__29538__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32969 = arguments.length;
switch (G__32969) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__29537__auto__ = (((p == null))?null:p);
var m__29538__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__29537__auto__)]);
if(!((m__29538__auto__ == null))){
return m__29538__auto__.call(null,p);
} else {
var m__29538__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__29538__auto____$1 == null))){
return m__29538__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__29537__auto__ = (((p == null))?null:p);
var m__29538__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__29537__auto__)]);
if(!((m__29538__auto__ == null))){
return m__29538__auto__.call(null,p,v);
} else {
var m__29538__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__29538__auto____$1 == null))){
return m__29538__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__32973 = arguments.length;
switch (G__32973) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__28818__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__28818__auto__)){
return or__28818__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__28818__auto__,mults){
return (function (p1__32971_SHARP_){
if(cljs.core.truth_(p1__32971_SHARP_.call(null,topic))){
return p1__32971_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__32971_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__28818__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async32974 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32974 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32975){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32975 = meta32975;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32974.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32976,meta32975__$1){
var self__ = this;
var _32976__$1 = this;
return (new cljs.core.async.t_cljs$core$async32974(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32975__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32974.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32976){
var self__ = this;
var _32976__$1 = this;
return self__.meta32975;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32974.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32974.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32974.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32974.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32974.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__6753__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__6753__auto__)){
var m = temp__6753__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32974.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32974.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32974.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32975","meta32975",-697808597,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32974.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32974.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32974";

cljs.core.async.t_cljs$core$async32974.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__29475__auto__,writer__29476__auto__,opt__29477__auto__){
return cljs.core._write.call(null,writer__29476__auto__,"cljs.core.async/t_cljs$core$async32974");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async32974 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async32974(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32975){
return (new cljs.core.async.t_cljs$core$async32974(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32975));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async32974(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31860__auto___33094 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31860__auto___33094,mults,ensure_mult,p){
return (function (){
var f__31861__auto__ = (function (){var switch__31770__auto__ = ((function (c__31860__auto___33094,mults,ensure_mult,p){
return (function (state_33048){
var state_val_33049 = (state_33048[(1)]);
if((state_val_33049 === (7))){
var inst_33044 = (state_33048[(2)]);
var state_33048__$1 = state_33048;
var statearr_33050_33095 = state_33048__$1;
(statearr_33050_33095[(2)] = inst_33044);

(statearr_33050_33095[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33049 === (20))){
var state_33048__$1 = state_33048;
var statearr_33051_33096 = state_33048__$1;
(statearr_33051_33096[(2)] = null);

(statearr_33051_33096[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33049 === (1))){
var state_33048__$1 = state_33048;
var statearr_33052_33097 = state_33048__$1;
(statearr_33052_33097[(2)] = null);

(statearr_33052_33097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33049 === (24))){
var inst_33027 = (state_33048[(7)]);
var inst_33036 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_33027);
var state_33048__$1 = state_33048;
var statearr_33053_33098 = state_33048__$1;
(statearr_33053_33098[(2)] = inst_33036);

(statearr_33053_33098[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33049 === (4))){
var inst_32979 = (state_33048[(8)]);
var inst_32979__$1 = (state_33048[(2)]);
var inst_32980 = (inst_32979__$1 == null);
var state_33048__$1 = (function (){var statearr_33054 = state_33048;
(statearr_33054[(8)] = inst_32979__$1);

return statearr_33054;
})();
if(cljs.core.truth_(inst_32980)){
var statearr_33055_33099 = state_33048__$1;
(statearr_33055_33099[(1)] = (5));

} else {
var statearr_33056_33100 = state_33048__$1;
(statearr_33056_33100[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33049 === (15))){
var inst_33021 = (state_33048[(2)]);
var state_33048__$1 = state_33048;
var statearr_33057_33101 = state_33048__$1;
(statearr_33057_33101[(2)] = inst_33021);

(statearr_33057_33101[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33049 === (21))){
var inst_33041 = (state_33048[(2)]);
var state_33048__$1 = (function (){var statearr_33058 = state_33048;
(statearr_33058[(9)] = inst_33041);

return statearr_33058;
})();
var statearr_33059_33102 = state_33048__$1;
(statearr_33059_33102[(2)] = null);

(statearr_33059_33102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33049 === (13))){
var inst_33003 = (state_33048[(10)]);
var inst_33005 = cljs.core.chunked_seq_QMARK_.call(null,inst_33003);
var state_33048__$1 = state_33048;
if(inst_33005){
var statearr_33060_33103 = state_33048__$1;
(statearr_33060_33103[(1)] = (16));

} else {
var statearr_33061_33104 = state_33048__$1;
(statearr_33061_33104[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33049 === (22))){
var inst_33033 = (state_33048[(2)]);
var state_33048__$1 = state_33048;
if(cljs.core.truth_(inst_33033)){
var statearr_33062_33105 = state_33048__$1;
(statearr_33062_33105[(1)] = (23));

} else {
var statearr_33063_33106 = state_33048__$1;
(statearr_33063_33106[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33049 === (6))){
var inst_32979 = (state_33048[(8)]);
var inst_33029 = (state_33048[(11)]);
var inst_33027 = (state_33048[(7)]);
var inst_33027__$1 = topic_fn.call(null,inst_32979);
var inst_33028 = cljs.core.deref.call(null,mults);
var inst_33029__$1 = cljs.core.get.call(null,inst_33028,inst_33027__$1);
var state_33048__$1 = (function (){var statearr_33064 = state_33048;
(statearr_33064[(11)] = inst_33029__$1);

(statearr_33064[(7)] = inst_33027__$1);

return statearr_33064;
})();
if(cljs.core.truth_(inst_33029__$1)){
var statearr_33065_33107 = state_33048__$1;
(statearr_33065_33107[(1)] = (19));

} else {
var statearr_33066_33108 = state_33048__$1;
(statearr_33066_33108[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33049 === (25))){
var inst_33038 = (state_33048[(2)]);
var state_33048__$1 = state_33048;
var statearr_33067_33109 = state_33048__$1;
(statearr_33067_33109[(2)] = inst_33038);

(statearr_33067_33109[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33049 === (17))){
var inst_33003 = (state_33048[(10)]);
var inst_33012 = cljs.core.first.call(null,inst_33003);
var inst_33013 = cljs.core.async.muxch_STAR_.call(null,inst_33012);
var inst_33014 = cljs.core.async.close_BANG_.call(null,inst_33013);
var inst_33015 = cljs.core.next.call(null,inst_33003);
var inst_32989 = inst_33015;
var inst_32990 = null;
var inst_32991 = (0);
var inst_32992 = (0);
var state_33048__$1 = (function (){var statearr_33068 = state_33048;
(statearr_33068[(12)] = inst_32989);

(statearr_33068[(13)] = inst_32991);

(statearr_33068[(14)] = inst_33014);

(statearr_33068[(15)] = inst_32992);

(statearr_33068[(16)] = inst_32990);

return statearr_33068;
})();
var statearr_33069_33110 = state_33048__$1;
(statearr_33069_33110[(2)] = null);

(statearr_33069_33110[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33049 === (3))){
var inst_33046 = (state_33048[(2)]);
var state_33048__$1 = state_33048;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33048__$1,inst_33046);
} else {
if((state_val_33049 === (12))){
var inst_33023 = (state_33048[(2)]);
var state_33048__$1 = state_33048;
var statearr_33070_33111 = state_33048__$1;
(statearr_33070_33111[(2)] = inst_33023);

(statearr_33070_33111[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33049 === (2))){
var state_33048__$1 = state_33048;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33048__$1,(4),ch);
} else {
if((state_val_33049 === (23))){
var state_33048__$1 = state_33048;
var statearr_33071_33112 = state_33048__$1;
(statearr_33071_33112[(2)] = null);

(statearr_33071_33112[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33049 === (19))){
var inst_32979 = (state_33048[(8)]);
var inst_33029 = (state_33048[(11)]);
var inst_33031 = cljs.core.async.muxch_STAR_.call(null,inst_33029);
var state_33048__$1 = state_33048;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33048__$1,(22),inst_33031,inst_32979);
} else {
if((state_val_33049 === (11))){
var inst_33003 = (state_33048[(10)]);
var inst_32989 = (state_33048[(12)]);
var inst_33003__$1 = cljs.core.seq.call(null,inst_32989);
var state_33048__$1 = (function (){var statearr_33072 = state_33048;
(statearr_33072[(10)] = inst_33003__$1);

return statearr_33072;
})();
if(inst_33003__$1){
var statearr_33073_33113 = state_33048__$1;
(statearr_33073_33113[(1)] = (13));

} else {
var statearr_33074_33114 = state_33048__$1;
(statearr_33074_33114[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33049 === (9))){
var inst_33025 = (state_33048[(2)]);
var state_33048__$1 = state_33048;
var statearr_33075_33115 = state_33048__$1;
(statearr_33075_33115[(2)] = inst_33025);

(statearr_33075_33115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33049 === (5))){
var inst_32986 = cljs.core.deref.call(null,mults);
var inst_32987 = cljs.core.vals.call(null,inst_32986);
var inst_32988 = cljs.core.seq.call(null,inst_32987);
var inst_32989 = inst_32988;
var inst_32990 = null;
var inst_32991 = (0);
var inst_32992 = (0);
var state_33048__$1 = (function (){var statearr_33076 = state_33048;
(statearr_33076[(12)] = inst_32989);

(statearr_33076[(13)] = inst_32991);

(statearr_33076[(15)] = inst_32992);

(statearr_33076[(16)] = inst_32990);

return statearr_33076;
})();
var statearr_33077_33116 = state_33048__$1;
(statearr_33077_33116[(2)] = null);

(statearr_33077_33116[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33049 === (14))){
var state_33048__$1 = state_33048;
var statearr_33081_33117 = state_33048__$1;
(statearr_33081_33117[(2)] = null);

(statearr_33081_33117[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33049 === (16))){
var inst_33003 = (state_33048[(10)]);
var inst_33007 = cljs.core.chunk_first.call(null,inst_33003);
var inst_33008 = cljs.core.chunk_rest.call(null,inst_33003);
var inst_33009 = cljs.core.count.call(null,inst_33007);
var inst_32989 = inst_33008;
var inst_32990 = inst_33007;
var inst_32991 = inst_33009;
var inst_32992 = (0);
var state_33048__$1 = (function (){var statearr_33082 = state_33048;
(statearr_33082[(12)] = inst_32989);

(statearr_33082[(13)] = inst_32991);

(statearr_33082[(15)] = inst_32992);

(statearr_33082[(16)] = inst_32990);

return statearr_33082;
})();
var statearr_33083_33118 = state_33048__$1;
(statearr_33083_33118[(2)] = null);

(statearr_33083_33118[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33049 === (10))){
var inst_32989 = (state_33048[(12)]);
var inst_32991 = (state_33048[(13)]);
var inst_32992 = (state_33048[(15)]);
var inst_32990 = (state_33048[(16)]);
var inst_32997 = cljs.core._nth.call(null,inst_32990,inst_32992);
var inst_32998 = cljs.core.async.muxch_STAR_.call(null,inst_32997);
var inst_32999 = cljs.core.async.close_BANG_.call(null,inst_32998);
var inst_33000 = (inst_32992 + (1));
var tmp33078 = inst_32989;
var tmp33079 = inst_32991;
var tmp33080 = inst_32990;
var inst_32989__$1 = tmp33078;
var inst_32990__$1 = tmp33080;
var inst_32991__$1 = tmp33079;
var inst_32992__$1 = inst_33000;
var state_33048__$1 = (function (){var statearr_33084 = state_33048;
(statearr_33084[(12)] = inst_32989__$1);

(statearr_33084[(13)] = inst_32991__$1);

(statearr_33084[(15)] = inst_32992__$1);

(statearr_33084[(17)] = inst_32999);

(statearr_33084[(16)] = inst_32990__$1);

return statearr_33084;
})();
var statearr_33085_33119 = state_33048__$1;
(statearr_33085_33119[(2)] = null);

(statearr_33085_33119[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33049 === (18))){
var inst_33018 = (state_33048[(2)]);
var state_33048__$1 = state_33048;
var statearr_33086_33120 = state_33048__$1;
(statearr_33086_33120[(2)] = inst_33018);

(statearr_33086_33120[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33049 === (8))){
var inst_32991 = (state_33048[(13)]);
var inst_32992 = (state_33048[(15)]);
var inst_32994 = (inst_32992 < inst_32991);
var inst_32995 = inst_32994;
var state_33048__$1 = state_33048;
if(cljs.core.truth_(inst_32995)){
var statearr_33087_33121 = state_33048__$1;
(statearr_33087_33121[(1)] = (10));

} else {
var statearr_33088_33122 = state_33048__$1;
(statearr_33088_33122[(1)] = (11));

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
});})(c__31860__auto___33094,mults,ensure_mult,p))
;
return ((function (switch__31770__auto__,c__31860__auto___33094,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__31771__auto__ = null;
var cljs$core$async$state_machine__31771__auto____0 = (function (){
var statearr_33089 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33089[(0)] = cljs$core$async$state_machine__31771__auto__);

(statearr_33089[(1)] = (1));

return statearr_33089;
});
var cljs$core$async$state_machine__31771__auto____1 = (function (state_33048){
while(true){
var ret_value__31772__auto__ = (function (){try{while(true){
var result__31773__auto__ = switch__31770__auto__.call(null,state_33048);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31773__auto__;
}
break;
}
}catch (e33090){if((e33090 instanceof Object)){
var ex__31774__auto__ = e33090;
var statearr_33091_33123 = state_33048;
(statearr_33091_33123[(5)] = ex__31774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33048);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33090;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33124 = state_33048;
state_33048 = G__33124;
continue;
} else {
return ret_value__31772__auto__;
}
break;
}
});
cljs$core$async$state_machine__31771__auto__ = function(state_33048){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31771__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31771__auto____1.call(this,state_33048);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31771__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31771__auto____0;
cljs$core$async$state_machine__31771__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31771__auto____1;
return cljs$core$async$state_machine__31771__auto__;
})()
;})(switch__31770__auto__,c__31860__auto___33094,mults,ensure_mult,p))
})();
var state__31862__auto__ = (function (){var statearr_33092 = f__31861__auto__.call(null);
(statearr_33092[(6)] = c__31860__auto___33094);

return statearr_33092;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31862__auto__);
});})(c__31860__auto___33094,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__33126 = arguments.length;
switch (G__33126) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__33129 = arguments.length;
switch (G__33129) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__33132 = arguments.length;
switch (G__33132) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__31860__auto___33199 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31860__auto___33199,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__31861__auto__ = (function (){var switch__31770__auto__ = ((function (c__31860__auto___33199,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_33171){
var state_val_33172 = (state_33171[(1)]);
if((state_val_33172 === (7))){
var state_33171__$1 = state_33171;
var statearr_33173_33200 = state_33171__$1;
(statearr_33173_33200[(2)] = null);

(statearr_33173_33200[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33172 === (1))){
var state_33171__$1 = state_33171;
var statearr_33174_33201 = state_33171__$1;
(statearr_33174_33201[(2)] = null);

(statearr_33174_33201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33172 === (4))){
var inst_33135 = (state_33171[(7)]);
var inst_33137 = (inst_33135 < cnt);
var state_33171__$1 = state_33171;
if(cljs.core.truth_(inst_33137)){
var statearr_33175_33202 = state_33171__$1;
(statearr_33175_33202[(1)] = (6));

} else {
var statearr_33176_33203 = state_33171__$1;
(statearr_33176_33203[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33172 === (15))){
var inst_33167 = (state_33171[(2)]);
var state_33171__$1 = state_33171;
var statearr_33177_33204 = state_33171__$1;
(statearr_33177_33204[(2)] = inst_33167);

(statearr_33177_33204[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33172 === (13))){
var inst_33160 = cljs.core.async.close_BANG_.call(null,out);
var state_33171__$1 = state_33171;
var statearr_33178_33205 = state_33171__$1;
(statearr_33178_33205[(2)] = inst_33160);

(statearr_33178_33205[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33172 === (6))){
var state_33171__$1 = state_33171;
var statearr_33179_33206 = state_33171__$1;
(statearr_33179_33206[(2)] = null);

(statearr_33179_33206[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33172 === (3))){
var inst_33169 = (state_33171[(2)]);
var state_33171__$1 = state_33171;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33171__$1,inst_33169);
} else {
if((state_val_33172 === (12))){
var inst_33157 = (state_33171[(8)]);
var inst_33157__$1 = (state_33171[(2)]);
var inst_33158 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_33157__$1);
var state_33171__$1 = (function (){var statearr_33180 = state_33171;
(statearr_33180[(8)] = inst_33157__$1);

return statearr_33180;
})();
if(cljs.core.truth_(inst_33158)){
var statearr_33181_33207 = state_33171__$1;
(statearr_33181_33207[(1)] = (13));

} else {
var statearr_33182_33208 = state_33171__$1;
(statearr_33182_33208[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33172 === (2))){
var inst_33134 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_33135 = (0);
var state_33171__$1 = (function (){var statearr_33183 = state_33171;
(statearr_33183[(9)] = inst_33134);

(statearr_33183[(7)] = inst_33135);

return statearr_33183;
})();
var statearr_33184_33209 = state_33171__$1;
(statearr_33184_33209[(2)] = null);

(statearr_33184_33209[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33172 === (11))){
var inst_33135 = (state_33171[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33171,(10),Object,null,(9));
var inst_33144 = chs__$1.call(null,inst_33135);
var inst_33145 = done.call(null,inst_33135);
var inst_33146 = cljs.core.async.take_BANG_.call(null,inst_33144,inst_33145);
var state_33171__$1 = state_33171;
var statearr_33185_33210 = state_33171__$1;
(statearr_33185_33210[(2)] = inst_33146);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33171__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33172 === (9))){
var inst_33135 = (state_33171[(7)]);
var inst_33148 = (state_33171[(2)]);
var inst_33149 = (inst_33135 + (1));
var inst_33135__$1 = inst_33149;
var state_33171__$1 = (function (){var statearr_33186 = state_33171;
(statearr_33186[(10)] = inst_33148);

(statearr_33186[(7)] = inst_33135__$1);

return statearr_33186;
})();
var statearr_33187_33211 = state_33171__$1;
(statearr_33187_33211[(2)] = null);

(statearr_33187_33211[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33172 === (5))){
var inst_33155 = (state_33171[(2)]);
var state_33171__$1 = (function (){var statearr_33188 = state_33171;
(statearr_33188[(11)] = inst_33155);

return statearr_33188;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33171__$1,(12),dchan);
} else {
if((state_val_33172 === (14))){
var inst_33157 = (state_33171[(8)]);
var inst_33162 = cljs.core.apply.call(null,f,inst_33157);
var state_33171__$1 = state_33171;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33171__$1,(16),out,inst_33162);
} else {
if((state_val_33172 === (16))){
var inst_33164 = (state_33171[(2)]);
var state_33171__$1 = (function (){var statearr_33189 = state_33171;
(statearr_33189[(12)] = inst_33164);

return statearr_33189;
})();
var statearr_33190_33212 = state_33171__$1;
(statearr_33190_33212[(2)] = null);

(statearr_33190_33212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33172 === (10))){
var inst_33139 = (state_33171[(2)]);
var inst_33140 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_33171__$1 = (function (){var statearr_33191 = state_33171;
(statearr_33191[(13)] = inst_33139);

return statearr_33191;
})();
var statearr_33192_33213 = state_33171__$1;
(statearr_33192_33213[(2)] = inst_33140);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33171__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33172 === (8))){
var inst_33153 = (state_33171[(2)]);
var state_33171__$1 = state_33171;
var statearr_33193_33214 = state_33171__$1;
(statearr_33193_33214[(2)] = inst_33153);

(statearr_33193_33214[(1)] = (5));


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
});})(c__31860__auto___33199,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__31770__auto__,c__31860__auto___33199,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__31771__auto__ = null;
var cljs$core$async$state_machine__31771__auto____0 = (function (){
var statearr_33194 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33194[(0)] = cljs$core$async$state_machine__31771__auto__);

(statearr_33194[(1)] = (1));

return statearr_33194;
});
var cljs$core$async$state_machine__31771__auto____1 = (function (state_33171){
while(true){
var ret_value__31772__auto__ = (function (){try{while(true){
var result__31773__auto__ = switch__31770__auto__.call(null,state_33171);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31773__auto__;
}
break;
}
}catch (e33195){if((e33195 instanceof Object)){
var ex__31774__auto__ = e33195;
var statearr_33196_33215 = state_33171;
(statearr_33196_33215[(5)] = ex__31774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33171);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33195;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33216 = state_33171;
state_33171 = G__33216;
continue;
} else {
return ret_value__31772__auto__;
}
break;
}
});
cljs$core$async$state_machine__31771__auto__ = function(state_33171){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31771__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31771__auto____1.call(this,state_33171);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31771__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31771__auto____0;
cljs$core$async$state_machine__31771__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31771__auto____1;
return cljs$core$async$state_machine__31771__auto__;
})()
;})(switch__31770__auto__,c__31860__auto___33199,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__31862__auto__ = (function (){var statearr_33197 = f__31861__auto__.call(null);
(statearr_33197[(6)] = c__31860__auto___33199);

return statearr_33197;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31862__auto__);
});})(c__31860__auto___33199,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__33219 = arguments.length;
switch (G__33219) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31860__auto___33273 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31860__auto___33273,out){
return (function (){
var f__31861__auto__ = (function (){var switch__31770__auto__ = ((function (c__31860__auto___33273,out){
return (function (state_33251){
var state_val_33252 = (state_33251[(1)]);
if((state_val_33252 === (7))){
var inst_33230 = (state_33251[(7)]);
var inst_33231 = (state_33251[(8)]);
var inst_33230__$1 = (state_33251[(2)]);
var inst_33231__$1 = cljs.core.nth.call(null,inst_33230__$1,(0),null);
var inst_33232 = cljs.core.nth.call(null,inst_33230__$1,(1),null);
var inst_33233 = (inst_33231__$1 == null);
var state_33251__$1 = (function (){var statearr_33253 = state_33251;
(statearr_33253[(7)] = inst_33230__$1);

(statearr_33253[(8)] = inst_33231__$1);

(statearr_33253[(9)] = inst_33232);

return statearr_33253;
})();
if(cljs.core.truth_(inst_33233)){
var statearr_33254_33274 = state_33251__$1;
(statearr_33254_33274[(1)] = (8));

} else {
var statearr_33255_33275 = state_33251__$1;
(statearr_33255_33275[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33252 === (1))){
var inst_33220 = cljs.core.vec.call(null,chs);
var inst_33221 = inst_33220;
var state_33251__$1 = (function (){var statearr_33256 = state_33251;
(statearr_33256[(10)] = inst_33221);

return statearr_33256;
})();
var statearr_33257_33276 = state_33251__$1;
(statearr_33257_33276[(2)] = null);

(statearr_33257_33276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33252 === (4))){
var inst_33221 = (state_33251[(10)]);
var state_33251__$1 = state_33251;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33251__$1,(7),inst_33221);
} else {
if((state_val_33252 === (6))){
var inst_33247 = (state_33251[(2)]);
var state_33251__$1 = state_33251;
var statearr_33258_33277 = state_33251__$1;
(statearr_33258_33277[(2)] = inst_33247);

(statearr_33258_33277[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33252 === (3))){
var inst_33249 = (state_33251[(2)]);
var state_33251__$1 = state_33251;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33251__$1,inst_33249);
} else {
if((state_val_33252 === (2))){
var inst_33221 = (state_33251[(10)]);
var inst_33223 = cljs.core.count.call(null,inst_33221);
var inst_33224 = (inst_33223 > (0));
var state_33251__$1 = state_33251;
if(cljs.core.truth_(inst_33224)){
var statearr_33260_33278 = state_33251__$1;
(statearr_33260_33278[(1)] = (4));

} else {
var statearr_33261_33279 = state_33251__$1;
(statearr_33261_33279[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33252 === (11))){
var inst_33221 = (state_33251[(10)]);
var inst_33240 = (state_33251[(2)]);
var tmp33259 = inst_33221;
var inst_33221__$1 = tmp33259;
var state_33251__$1 = (function (){var statearr_33262 = state_33251;
(statearr_33262[(10)] = inst_33221__$1);

(statearr_33262[(11)] = inst_33240);

return statearr_33262;
})();
var statearr_33263_33280 = state_33251__$1;
(statearr_33263_33280[(2)] = null);

(statearr_33263_33280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33252 === (9))){
var inst_33231 = (state_33251[(8)]);
var state_33251__$1 = state_33251;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33251__$1,(11),out,inst_33231);
} else {
if((state_val_33252 === (5))){
var inst_33245 = cljs.core.async.close_BANG_.call(null,out);
var state_33251__$1 = state_33251;
var statearr_33264_33281 = state_33251__$1;
(statearr_33264_33281[(2)] = inst_33245);

(statearr_33264_33281[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33252 === (10))){
var inst_33243 = (state_33251[(2)]);
var state_33251__$1 = state_33251;
var statearr_33265_33282 = state_33251__$1;
(statearr_33265_33282[(2)] = inst_33243);

(statearr_33265_33282[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33252 === (8))){
var inst_33230 = (state_33251[(7)]);
var inst_33221 = (state_33251[(10)]);
var inst_33231 = (state_33251[(8)]);
var inst_33232 = (state_33251[(9)]);
var inst_33235 = (function (){var cs = inst_33221;
var vec__33226 = inst_33230;
var v = inst_33231;
var c = inst_33232;
return ((function (cs,vec__33226,v,c,inst_33230,inst_33221,inst_33231,inst_33232,state_val_33252,c__31860__auto___33273,out){
return (function (p1__33217_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__33217_SHARP_);
});
;})(cs,vec__33226,v,c,inst_33230,inst_33221,inst_33231,inst_33232,state_val_33252,c__31860__auto___33273,out))
})();
var inst_33236 = cljs.core.filterv.call(null,inst_33235,inst_33221);
var inst_33221__$1 = inst_33236;
var state_33251__$1 = (function (){var statearr_33266 = state_33251;
(statearr_33266[(10)] = inst_33221__$1);

return statearr_33266;
})();
var statearr_33267_33283 = state_33251__$1;
(statearr_33267_33283[(2)] = null);

(statearr_33267_33283[(1)] = (2));


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
});})(c__31860__auto___33273,out))
;
return ((function (switch__31770__auto__,c__31860__auto___33273,out){
return (function() {
var cljs$core$async$state_machine__31771__auto__ = null;
var cljs$core$async$state_machine__31771__auto____0 = (function (){
var statearr_33268 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33268[(0)] = cljs$core$async$state_machine__31771__auto__);

(statearr_33268[(1)] = (1));

return statearr_33268;
});
var cljs$core$async$state_machine__31771__auto____1 = (function (state_33251){
while(true){
var ret_value__31772__auto__ = (function (){try{while(true){
var result__31773__auto__ = switch__31770__auto__.call(null,state_33251);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31773__auto__;
}
break;
}
}catch (e33269){if((e33269 instanceof Object)){
var ex__31774__auto__ = e33269;
var statearr_33270_33284 = state_33251;
(statearr_33270_33284[(5)] = ex__31774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33251);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33269;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33285 = state_33251;
state_33251 = G__33285;
continue;
} else {
return ret_value__31772__auto__;
}
break;
}
});
cljs$core$async$state_machine__31771__auto__ = function(state_33251){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31771__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31771__auto____1.call(this,state_33251);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31771__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31771__auto____0;
cljs$core$async$state_machine__31771__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31771__auto____1;
return cljs$core$async$state_machine__31771__auto__;
})()
;})(switch__31770__auto__,c__31860__auto___33273,out))
})();
var state__31862__auto__ = (function (){var statearr_33271 = f__31861__auto__.call(null);
(statearr_33271[(6)] = c__31860__auto___33273);

return statearr_33271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31862__auto__);
});})(c__31860__auto___33273,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__33287 = arguments.length;
switch (G__33287) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31860__auto___33332 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31860__auto___33332,out){
return (function (){
var f__31861__auto__ = (function (){var switch__31770__auto__ = ((function (c__31860__auto___33332,out){
return (function (state_33311){
var state_val_33312 = (state_33311[(1)]);
if((state_val_33312 === (7))){
var inst_33293 = (state_33311[(7)]);
var inst_33293__$1 = (state_33311[(2)]);
var inst_33294 = (inst_33293__$1 == null);
var inst_33295 = cljs.core.not.call(null,inst_33294);
var state_33311__$1 = (function (){var statearr_33313 = state_33311;
(statearr_33313[(7)] = inst_33293__$1);

return statearr_33313;
})();
if(inst_33295){
var statearr_33314_33333 = state_33311__$1;
(statearr_33314_33333[(1)] = (8));

} else {
var statearr_33315_33334 = state_33311__$1;
(statearr_33315_33334[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33312 === (1))){
var inst_33288 = (0);
var state_33311__$1 = (function (){var statearr_33316 = state_33311;
(statearr_33316[(8)] = inst_33288);

return statearr_33316;
})();
var statearr_33317_33335 = state_33311__$1;
(statearr_33317_33335[(2)] = null);

(statearr_33317_33335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33312 === (4))){
var state_33311__$1 = state_33311;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33311__$1,(7),ch);
} else {
if((state_val_33312 === (6))){
var inst_33306 = (state_33311[(2)]);
var state_33311__$1 = state_33311;
var statearr_33318_33336 = state_33311__$1;
(statearr_33318_33336[(2)] = inst_33306);

(statearr_33318_33336[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33312 === (3))){
var inst_33308 = (state_33311[(2)]);
var inst_33309 = cljs.core.async.close_BANG_.call(null,out);
var state_33311__$1 = (function (){var statearr_33319 = state_33311;
(statearr_33319[(9)] = inst_33308);

return statearr_33319;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33311__$1,inst_33309);
} else {
if((state_val_33312 === (2))){
var inst_33288 = (state_33311[(8)]);
var inst_33290 = (inst_33288 < n);
var state_33311__$1 = state_33311;
if(cljs.core.truth_(inst_33290)){
var statearr_33320_33337 = state_33311__$1;
(statearr_33320_33337[(1)] = (4));

} else {
var statearr_33321_33338 = state_33311__$1;
(statearr_33321_33338[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33312 === (11))){
var inst_33288 = (state_33311[(8)]);
var inst_33298 = (state_33311[(2)]);
var inst_33299 = (inst_33288 + (1));
var inst_33288__$1 = inst_33299;
var state_33311__$1 = (function (){var statearr_33322 = state_33311;
(statearr_33322[(10)] = inst_33298);

(statearr_33322[(8)] = inst_33288__$1);

return statearr_33322;
})();
var statearr_33323_33339 = state_33311__$1;
(statearr_33323_33339[(2)] = null);

(statearr_33323_33339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33312 === (9))){
var state_33311__$1 = state_33311;
var statearr_33324_33340 = state_33311__$1;
(statearr_33324_33340[(2)] = null);

(statearr_33324_33340[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33312 === (5))){
var state_33311__$1 = state_33311;
var statearr_33325_33341 = state_33311__$1;
(statearr_33325_33341[(2)] = null);

(statearr_33325_33341[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33312 === (10))){
var inst_33303 = (state_33311[(2)]);
var state_33311__$1 = state_33311;
var statearr_33326_33342 = state_33311__$1;
(statearr_33326_33342[(2)] = inst_33303);

(statearr_33326_33342[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33312 === (8))){
var inst_33293 = (state_33311[(7)]);
var state_33311__$1 = state_33311;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33311__$1,(11),out,inst_33293);
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
});})(c__31860__auto___33332,out))
;
return ((function (switch__31770__auto__,c__31860__auto___33332,out){
return (function() {
var cljs$core$async$state_machine__31771__auto__ = null;
var cljs$core$async$state_machine__31771__auto____0 = (function (){
var statearr_33327 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33327[(0)] = cljs$core$async$state_machine__31771__auto__);

(statearr_33327[(1)] = (1));

return statearr_33327;
});
var cljs$core$async$state_machine__31771__auto____1 = (function (state_33311){
while(true){
var ret_value__31772__auto__ = (function (){try{while(true){
var result__31773__auto__ = switch__31770__auto__.call(null,state_33311);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31773__auto__;
}
break;
}
}catch (e33328){if((e33328 instanceof Object)){
var ex__31774__auto__ = e33328;
var statearr_33329_33343 = state_33311;
(statearr_33329_33343[(5)] = ex__31774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33311);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33328;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33344 = state_33311;
state_33311 = G__33344;
continue;
} else {
return ret_value__31772__auto__;
}
break;
}
});
cljs$core$async$state_machine__31771__auto__ = function(state_33311){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31771__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31771__auto____1.call(this,state_33311);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31771__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31771__auto____0;
cljs$core$async$state_machine__31771__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31771__auto____1;
return cljs$core$async$state_machine__31771__auto__;
})()
;})(switch__31770__auto__,c__31860__auto___33332,out))
})();
var state__31862__auto__ = (function (){var statearr_33330 = f__31861__auto__.call(null);
(statearr_33330[(6)] = c__31860__auto___33332);

return statearr_33330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31862__auto__);
});})(c__31860__auto___33332,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async33346 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33346 = (function (f,ch,meta33347){
this.f = f;
this.ch = ch;
this.meta33347 = meta33347;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33346.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33348,meta33347__$1){
var self__ = this;
var _33348__$1 = this;
return (new cljs.core.async.t_cljs$core$async33346(self__.f,self__.ch,meta33347__$1));
});

cljs.core.async.t_cljs$core$async33346.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33348){
var self__ = this;
var _33348__$1 = this;
return self__.meta33347;
});

cljs.core.async.t_cljs$core$async33346.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33346.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33346.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33346.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33346.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async33349 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33349 = (function (f,ch,meta33347,_,fn1,meta33350){
this.f = f;
this.ch = ch;
this.meta33347 = meta33347;
this._ = _;
this.fn1 = fn1;
this.meta33350 = meta33350;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33349.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_33351,meta33350__$1){
var self__ = this;
var _33351__$1 = this;
return (new cljs.core.async.t_cljs$core$async33349(self__.f,self__.ch,self__.meta33347,self__._,self__.fn1,meta33350__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async33349.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_33351){
var self__ = this;
var _33351__$1 = this;
return self__.meta33350;
});})(___$1))
;

cljs.core.async.t_cljs$core$async33349.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33349.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33349.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async33349.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__33345_SHARP_){
return f1.call(null,(((p1__33345_SHARP_ == null))?null:self__.f.call(null,p1__33345_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async33349.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33347","meta33347",-317149357,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33346","cljs.core.async/t_cljs$core$async33346",-256704706,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33350","meta33350",2055807511,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33349.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33349.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33349";

cljs.core.async.t_cljs$core$async33349.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__29475__auto__,writer__29476__auto__,opt__29477__auto__){
return cljs.core._write.call(null,writer__29476__auto__,"cljs.core.async/t_cljs$core$async33349");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async33349 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33349(f__$1,ch__$1,meta33347__$1,___$2,fn1__$1,meta33350){
return (new cljs.core.async.t_cljs$core$async33349(f__$1,ch__$1,meta33347__$1,___$2,fn1__$1,meta33350));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async33349(self__.f,self__.ch,self__.meta33347,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__28806__auto__ = ret;
if(cljs.core.truth_(and__28806__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__28806__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async33346.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33346.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async33346.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33347","meta33347",-317149357,null)], null);
});

cljs.core.async.t_cljs$core$async33346.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33346.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33346";

cljs.core.async.t_cljs$core$async33346.cljs$lang$ctorPrWriter = (function (this__29475__auto__,writer__29476__auto__,opt__29477__auto__){
return cljs.core._write.call(null,writer__29476__auto__,"cljs.core.async/t_cljs$core$async33346");
});

cljs.core.async.__GT_t_cljs$core$async33346 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33346(f__$1,ch__$1,meta33347){
return (new cljs.core.async.t_cljs$core$async33346(f__$1,ch__$1,meta33347));
});

}

return (new cljs.core.async.t_cljs$core$async33346(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async33352 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33352 = (function (f,ch,meta33353){
this.f = f;
this.ch = ch;
this.meta33353 = meta33353;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33352.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33354,meta33353__$1){
var self__ = this;
var _33354__$1 = this;
return (new cljs.core.async.t_cljs$core$async33352(self__.f,self__.ch,meta33353__$1));
});

cljs.core.async.t_cljs$core$async33352.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33354){
var self__ = this;
var _33354__$1 = this;
return self__.meta33353;
});

cljs.core.async.t_cljs$core$async33352.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33352.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33352.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33352.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33352.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33352.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async33352.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33353","meta33353",-241501213,null)], null);
});

cljs.core.async.t_cljs$core$async33352.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33352.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33352";

cljs.core.async.t_cljs$core$async33352.cljs$lang$ctorPrWriter = (function (this__29475__auto__,writer__29476__auto__,opt__29477__auto__){
return cljs.core._write.call(null,writer__29476__auto__,"cljs.core.async/t_cljs$core$async33352");
});

cljs.core.async.__GT_t_cljs$core$async33352 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async33352(f__$1,ch__$1,meta33353){
return (new cljs.core.async.t_cljs$core$async33352(f__$1,ch__$1,meta33353));
});

}

return (new cljs.core.async.t_cljs$core$async33352(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async33355 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33355 = (function (p,ch,meta33356){
this.p = p;
this.ch = ch;
this.meta33356 = meta33356;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33355.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33357,meta33356__$1){
var self__ = this;
var _33357__$1 = this;
return (new cljs.core.async.t_cljs$core$async33355(self__.p,self__.ch,meta33356__$1));
});

cljs.core.async.t_cljs$core$async33355.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33357){
var self__ = this;
var _33357__$1 = this;
return self__.meta33356;
});

cljs.core.async.t_cljs$core$async33355.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33355.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33355.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33355.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33355.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33355.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33355.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async33355.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33356","meta33356",-1724919612,null)], null);
});

cljs.core.async.t_cljs$core$async33355.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33355.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33355";

cljs.core.async.t_cljs$core$async33355.cljs$lang$ctorPrWriter = (function (this__29475__auto__,writer__29476__auto__,opt__29477__auto__){
return cljs.core._write.call(null,writer__29476__auto__,"cljs.core.async/t_cljs$core$async33355");
});

cljs.core.async.__GT_t_cljs$core$async33355 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async33355(p__$1,ch__$1,meta33356){
return (new cljs.core.async.t_cljs$core$async33355(p__$1,ch__$1,meta33356));
});

}

return (new cljs.core.async.t_cljs$core$async33355(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__33359 = arguments.length;
switch (G__33359) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31860__auto___33399 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31860__auto___33399,out){
return (function (){
var f__31861__auto__ = (function (){var switch__31770__auto__ = ((function (c__31860__auto___33399,out){
return (function (state_33380){
var state_val_33381 = (state_33380[(1)]);
if((state_val_33381 === (7))){
var inst_33376 = (state_33380[(2)]);
var state_33380__$1 = state_33380;
var statearr_33382_33400 = state_33380__$1;
(statearr_33382_33400[(2)] = inst_33376);

(statearr_33382_33400[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33381 === (1))){
var state_33380__$1 = state_33380;
var statearr_33383_33401 = state_33380__$1;
(statearr_33383_33401[(2)] = null);

(statearr_33383_33401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33381 === (4))){
var inst_33362 = (state_33380[(7)]);
var inst_33362__$1 = (state_33380[(2)]);
var inst_33363 = (inst_33362__$1 == null);
var state_33380__$1 = (function (){var statearr_33384 = state_33380;
(statearr_33384[(7)] = inst_33362__$1);

return statearr_33384;
})();
if(cljs.core.truth_(inst_33363)){
var statearr_33385_33402 = state_33380__$1;
(statearr_33385_33402[(1)] = (5));

} else {
var statearr_33386_33403 = state_33380__$1;
(statearr_33386_33403[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33381 === (6))){
var inst_33362 = (state_33380[(7)]);
var inst_33367 = p.call(null,inst_33362);
var state_33380__$1 = state_33380;
if(cljs.core.truth_(inst_33367)){
var statearr_33387_33404 = state_33380__$1;
(statearr_33387_33404[(1)] = (8));

} else {
var statearr_33388_33405 = state_33380__$1;
(statearr_33388_33405[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33381 === (3))){
var inst_33378 = (state_33380[(2)]);
var state_33380__$1 = state_33380;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33380__$1,inst_33378);
} else {
if((state_val_33381 === (2))){
var state_33380__$1 = state_33380;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33380__$1,(4),ch);
} else {
if((state_val_33381 === (11))){
var inst_33370 = (state_33380[(2)]);
var state_33380__$1 = state_33380;
var statearr_33389_33406 = state_33380__$1;
(statearr_33389_33406[(2)] = inst_33370);

(statearr_33389_33406[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33381 === (9))){
var state_33380__$1 = state_33380;
var statearr_33390_33407 = state_33380__$1;
(statearr_33390_33407[(2)] = null);

(statearr_33390_33407[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33381 === (5))){
var inst_33365 = cljs.core.async.close_BANG_.call(null,out);
var state_33380__$1 = state_33380;
var statearr_33391_33408 = state_33380__$1;
(statearr_33391_33408[(2)] = inst_33365);

(statearr_33391_33408[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33381 === (10))){
var inst_33373 = (state_33380[(2)]);
var state_33380__$1 = (function (){var statearr_33392 = state_33380;
(statearr_33392[(8)] = inst_33373);

return statearr_33392;
})();
var statearr_33393_33409 = state_33380__$1;
(statearr_33393_33409[(2)] = null);

(statearr_33393_33409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33381 === (8))){
var inst_33362 = (state_33380[(7)]);
var state_33380__$1 = state_33380;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33380__$1,(11),out,inst_33362);
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
});})(c__31860__auto___33399,out))
;
return ((function (switch__31770__auto__,c__31860__auto___33399,out){
return (function() {
var cljs$core$async$state_machine__31771__auto__ = null;
var cljs$core$async$state_machine__31771__auto____0 = (function (){
var statearr_33394 = [null,null,null,null,null,null,null,null,null];
(statearr_33394[(0)] = cljs$core$async$state_machine__31771__auto__);

(statearr_33394[(1)] = (1));

return statearr_33394;
});
var cljs$core$async$state_machine__31771__auto____1 = (function (state_33380){
while(true){
var ret_value__31772__auto__ = (function (){try{while(true){
var result__31773__auto__ = switch__31770__auto__.call(null,state_33380);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31773__auto__;
}
break;
}
}catch (e33395){if((e33395 instanceof Object)){
var ex__31774__auto__ = e33395;
var statearr_33396_33410 = state_33380;
(statearr_33396_33410[(5)] = ex__31774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33380);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33395;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33411 = state_33380;
state_33380 = G__33411;
continue;
} else {
return ret_value__31772__auto__;
}
break;
}
});
cljs$core$async$state_machine__31771__auto__ = function(state_33380){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31771__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31771__auto____1.call(this,state_33380);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31771__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31771__auto____0;
cljs$core$async$state_machine__31771__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31771__auto____1;
return cljs$core$async$state_machine__31771__auto__;
})()
;})(switch__31770__auto__,c__31860__auto___33399,out))
})();
var state__31862__auto__ = (function (){var statearr_33397 = f__31861__auto__.call(null);
(statearr_33397[(6)] = c__31860__auto___33399);

return statearr_33397;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31862__auto__);
});})(c__31860__auto___33399,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__33413 = arguments.length;
switch (G__33413) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__31860__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31860__auto__){
return (function (){
var f__31861__auto__ = (function (){var switch__31770__auto__ = ((function (c__31860__auto__){
return (function (state_33476){
var state_val_33477 = (state_33476[(1)]);
if((state_val_33477 === (7))){
var inst_33472 = (state_33476[(2)]);
var state_33476__$1 = state_33476;
var statearr_33478_33516 = state_33476__$1;
(statearr_33478_33516[(2)] = inst_33472);

(statearr_33478_33516[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33477 === (20))){
var inst_33442 = (state_33476[(7)]);
var inst_33453 = (state_33476[(2)]);
var inst_33454 = cljs.core.next.call(null,inst_33442);
var inst_33428 = inst_33454;
var inst_33429 = null;
var inst_33430 = (0);
var inst_33431 = (0);
var state_33476__$1 = (function (){var statearr_33479 = state_33476;
(statearr_33479[(8)] = inst_33430);

(statearr_33479[(9)] = inst_33429);

(statearr_33479[(10)] = inst_33428);

(statearr_33479[(11)] = inst_33453);

(statearr_33479[(12)] = inst_33431);

return statearr_33479;
})();
var statearr_33480_33517 = state_33476__$1;
(statearr_33480_33517[(2)] = null);

(statearr_33480_33517[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33477 === (1))){
var state_33476__$1 = state_33476;
var statearr_33481_33518 = state_33476__$1;
(statearr_33481_33518[(2)] = null);

(statearr_33481_33518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33477 === (4))){
var inst_33417 = (state_33476[(13)]);
var inst_33417__$1 = (state_33476[(2)]);
var inst_33418 = (inst_33417__$1 == null);
var state_33476__$1 = (function (){var statearr_33482 = state_33476;
(statearr_33482[(13)] = inst_33417__$1);

return statearr_33482;
})();
if(cljs.core.truth_(inst_33418)){
var statearr_33483_33519 = state_33476__$1;
(statearr_33483_33519[(1)] = (5));

} else {
var statearr_33484_33520 = state_33476__$1;
(statearr_33484_33520[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33477 === (15))){
var state_33476__$1 = state_33476;
var statearr_33488_33521 = state_33476__$1;
(statearr_33488_33521[(2)] = null);

(statearr_33488_33521[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33477 === (21))){
var state_33476__$1 = state_33476;
var statearr_33489_33522 = state_33476__$1;
(statearr_33489_33522[(2)] = null);

(statearr_33489_33522[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33477 === (13))){
var inst_33430 = (state_33476[(8)]);
var inst_33429 = (state_33476[(9)]);
var inst_33428 = (state_33476[(10)]);
var inst_33431 = (state_33476[(12)]);
var inst_33438 = (state_33476[(2)]);
var inst_33439 = (inst_33431 + (1));
var tmp33485 = inst_33430;
var tmp33486 = inst_33429;
var tmp33487 = inst_33428;
var inst_33428__$1 = tmp33487;
var inst_33429__$1 = tmp33486;
var inst_33430__$1 = tmp33485;
var inst_33431__$1 = inst_33439;
var state_33476__$1 = (function (){var statearr_33490 = state_33476;
(statearr_33490[(8)] = inst_33430__$1);

(statearr_33490[(9)] = inst_33429__$1);

(statearr_33490[(10)] = inst_33428__$1);

(statearr_33490[(14)] = inst_33438);

(statearr_33490[(12)] = inst_33431__$1);

return statearr_33490;
})();
var statearr_33491_33523 = state_33476__$1;
(statearr_33491_33523[(2)] = null);

(statearr_33491_33523[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33477 === (22))){
var state_33476__$1 = state_33476;
var statearr_33492_33524 = state_33476__$1;
(statearr_33492_33524[(2)] = null);

(statearr_33492_33524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33477 === (6))){
var inst_33417 = (state_33476[(13)]);
var inst_33426 = f.call(null,inst_33417);
var inst_33427 = cljs.core.seq.call(null,inst_33426);
var inst_33428 = inst_33427;
var inst_33429 = null;
var inst_33430 = (0);
var inst_33431 = (0);
var state_33476__$1 = (function (){var statearr_33493 = state_33476;
(statearr_33493[(8)] = inst_33430);

(statearr_33493[(9)] = inst_33429);

(statearr_33493[(10)] = inst_33428);

(statearr_33493[(12)] = inst_33431);

return statearr_33493;
})();
var statearr_33494_33525 = state_33476__$1;
(statearr_33494_33525[(2)] = null);

(statearr_33494_33525[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33477 === (17))){
var inst_33442 = (state_33476[(7)]);
var inst_33446 = cljs.core.chunk_first.call(null,inst_33442);
var inst_33447 = cljs.core.chunk_rest.call(null,inst_33442);
var inst_33448 = cljs.core.count.call(null,inst_33446);
var inst_33428 = inst_33447;
var inst_33429 = inst_33446;
var inst_33430 = inst_33448;
var inst_33431 = (0);
var state_33476__$1 = (function (){var statearr_33495 = state_33476;
(statearr_33495[(8)] = inst_33430);

(statearr_33495[(9)] = inst_33429);

(statearr_33495[(10)] = inst_33428);

(statearr_33495[(12)] = inst_33431);

return statearr_33495;
})();
var statearr_33496_33526 = state_33476__$1;
(statearr_33496_33526[(2)] = null);

(statearr_33496_33526[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33477 === (3))){
var inst_33474 = (state_33476[(2)]);
var state_33476__$1 = state_33476;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33476__$1,inst_33474);
} else {
if((state_val_33477 === (12))){
var inst_33462 = (state_33476[(2)]);
var state_33476__$1 = state_33476;
var statearr_33497_33527 = state_33476__$1;
(statearr_33497_33527[(2)] = inst_33462);

(statearr_33497_33527[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33477 === (2))){
var state_33476__$1 = state_33476;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33476__$1,(4),in$);
} else {
if((state_val_33477 === (23))){
var inst_33470 = (state_33476[(2)]);
var state_33476__$1 = state_33476;
var statearr_33498_33528 = state_33476__$1;
(statearr_33498_33528[(2)] = inst_33470);

(statearr_33498_33528[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33477 === (19))){
var inst_33457 = (state_33476[(2)]);
var state_33476__$1 = state_33476;
var statearr_33499_33529 = state_33476__$1;
(statearr_33499_33529[(2)] = inst_33457);

(statearr_33499_33529[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33477 === (11))){
var inst_33442 = (state_33476[(7)]);
var inst_33428 = (state_33476[(10)]);
var inst_33442__$1 = cljs.core.seq.call(null,inst_33428);
var state_33476__$1 = (function (){var statearr_33500 = state_33476;
(statearr_33500[(7)] = inst_33442__$1);

return statearr_33500;
})();
if(inst_33442__$1){
var statearr_33501_33530 = state_33476__$1;
(statearr_33501_33530[(1)] = (14));

} else {
var statearr_33502_33531 = state_33476__$1;
(statearr_33502_33531[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33477 === (9))){
var inst_33464 = (state_33476[(2)]);
var inst_33465 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_33476__$1 = (function (){var statearr_33503 = state_33476;
(statearr_33503[(15)] = inst_33464);

return statearr_33503;
})();
if(cljs.core.truth_(inst_33465)){
var statearr_33504_33532 = state_33476__$1;
(statearr_33504_33532[(1)] = (21));

} else {
var statearr_33505_33533 = state_33476__$1;
(statearr_33505_33533[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33477 === (5))){
var inst_33420 = cljs.core.async.close_BANG_.call(null,out);
var state_33476__$1 = state_33476;
var statearr_33506_33534 = state_33476__$1;
(statearr_33506_33534[(2)] = inst_33420);

(statearr_33506_33534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33477 === (14))){
var inst_33442 = (state_33476[(7)]);
var inst_33444 = cljs.core.chunked_seq_QMARK_.call(null,inst_33442);
var state_33476__$1 = state_33476;
if(inst_33444){
var statearr_33507_33535 = state_33476__$1;
(statearr_33507_33535[(1)] = (17));

} else {
var statearr_33508_33536 = state_33476__$1;
(statearr_33508_33536[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33477 === (16))){
var inst_33460 = (state_33476[(2)]);
var state_33476__$1 = state_33476;
var statearr_33509_33537 = state_33476__$1;
(statearr_33509_33537[(2)] = inst_33460);

(statearr_33509_33537[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33477 === (10))){
var inst_33429 = (state_33476[(9)]);
var inst_33431 = (state_33476[(12)]);
var inst_33436 = cljs.core._nth.call(null,inst_33429,inst_33431);
var state_33476__$1 = state_33476;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33476__$1,(13),out,inst_33436);
} else {
if((state_val_33477 === (18))){
var inst_33442 = (state_33476[(7)]);
var inst_33451 = cljs.core.first.call(null,inst_33442);
var state_33476__$1 = state_33476;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33476__$1,(20),out,inst_33451);
} else {
if((state_val_33477 === (8))){
var inst_33430 = (state_33476[(8)]);
var inst_33431 = (state_33476[(12)]);
var inst_33433 = (inst_33431 < inst_33430);
var inst_33434 = inst_33433;
var state_33476__$1 = state_33476;
if(cljs.core.truth_(inst_33434)){
var statearr_33510_33538 = state_33476__$1;
(statearr_33510_33538[(1)] = (10));

} else {
var statearr_33511_33539 = state_33476__$1;
(statearr_33511_33539[(1)] = (11));

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
});})(c__31860__auto__))
;
return ((function (switch__31770__auto__,c__31860__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__31771__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__31771__auto____0 = (function (){
var statearr_33512 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33512[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__31771__auto__);

(statearr_33512[(1)] = (1));

return statearr_33512;
});
var cljs$core$async$mapcat_STAR__$_state_machine__31771__auto____1 = (function (state_33476){
while(true){
var ret_value__31772__auto__ = (function (){try{while(true){
var result__31773__auto__ = switch__31770__auto__.call(null,state_33476);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31773__auto__;
}
break;
}
}catch (e33513){if((e33513 instanceof Object)){
var ex__31774__auto__ = e33513;
var statearr_33514_33540 = state_33476;
(statearr_33514_33540[(5)] = ex__31774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33513;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33541 = state_33476;
state_33476 = G__33541;
continue;
} else {
return ret_value__31772__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__31771__auto__ = function(state_33476){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__31771__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__31771__auto____1.call(this,state_33476);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__31771__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__31771__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__31771__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__31771__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__31771__auto__;
})()
;})(switch__31770__auto__,c__31860__auto__))
})();
var state__31862__auto__ = (function (){var statearr_33515 = f__31861__auto__.call(null);
(statearr_33515[(6)] = c__31860__auto__);

return statearr_33515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31862__auto__);
});})(c__31860__auto__))
);

return c__31860__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33543 = arguments.length;
switch (G__33543) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__33546 = arguments.length;
switch (G__33546) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__33549 = arguments.length;
switch (G__33549) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31860__auto___33596 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31860__auto___33596,out){
return (function (){
var f__31861__auto__ = (function (){var switch__31770__auto__ = ((function (c__31860__auto___33596,out){
return (function (state_33573){
var state_val_33574 = (state_33573[(1)]);
if((state_val_33574 === (7))){
var inst_33568 = (state_33573[(2)]);
var state_33573__$1 = state_33573;
var statearr_33575_33597 = state_33573__$1;
(statearr_33575_33597[(2)] = inst_33568);

(statearr_33575_33597[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33574 === (1))){
var inst_33550 = null;
var state_33573__$1 = (function (){var statearr_33576 = state_33573;
(statearr_33576[(7)] = inst_33550);

return statearr_33576;
})();
var statearr_33577_33598 = state_33573__$1;
(statearr_33577_33598[(2)] = null);

(statearr_33577_33598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33574 === (4))){
var inst_33553 = (state_33573[(8)]);
var inst_33553__$1 = (state_33573[(2)]);
var inst_33554 = (inst_33553__$1 == null);
var inst_33555 = cljs.core.not.call(null,inst_33554);
var state_33573__$1 = (function (){var statearr_33578 = state_33573;
(statearr_33578[(8)] = inst_33553__$1);

return statearr_33578;
})();
if(inst_33555){
var statearr_33579_33599 = state_33573__$1;
(statearr_33579_33599[(1)] = (5));

} else {
var statearr_33580_33600 = state_33573__$1;
(statearr_33580_33600[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33574 === (6))){
var state_33573__$1 = state_33573;
var statearr_33581_33601 = state_33573__$1;
(statearr_33581_33601[(2)] = null);

(statearr_33581_33601[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33574 === (3))){
var inst_33570 = (state_33573[(2)]);
var inst_33571 = cljs.core.async.close_BANG_.call(null,out);
var state_33573__$1 = (function (){var statearr_33582 = state_33573;
(statearr_33582[(9)] = inst_33570);

return statearr_33582;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33573__$1,inst_33571);
} else {
if((state_val_33574 === (2))){
var state_33573__$1 = state_33573;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33573__$1,(4),ch);
} else {
if((state_val_33574 === (11))){
var inst_33553 = (state_33573[(8)]);
var inst_33562 = (state_33573[(2)]);
var inst_33550 = inst_33553;
var state_33573__$1 = (function (){var statearr_33583 = state_33573;
(statearr_33583[(7)] = inst_33550);

(statearr_33583[(10)] = inst_33562);

return statearr_33583;
})();
var statearr_33584_33602 = state_33573__$1;
(statearr_33584_33602[(2)] = null);

(statearr_33584_33602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33574 === (9))){
var inst_33553 = (state_33573[(8)]);
var state_33573__$1 = state_33573;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33573__$1,(11),out,inst_33553);
} else {
if((state_val_33574 === (5))){
var inst_33550 = (state_33573[(7)]);
var inst_33553 = (state_33573[(8)]);
var inst_33557 = cljs.core._EQ_.call(null,inst_33553,inst_33550);
var state_33573__$1 = state_33573;
if(inst_33557){
var statearr_33586_33603 = state_33573__$1;
(statearr_33586_33603[(1)] = (8));

} else {
var statearr_33587_33604 = state_33573__$1;
(statearr_33587_33604[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33574 === (10))){
var inst_33565 = (state_33573[(2)]);
var state_33573__$1 = state_33573;
var statearr_33588_33605 = state_33573__$1;
(statearr_33588_33605[(2)] = inst_33565);

(statearr_33588_33605[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33574 === (8))){
var inst_33550 = (state_33573[(7)]);
var tmp33585 = inst_33550;
var inst_33550__$1 = tmp33585;
var state_33573__$1 = (function (){var statearr_33589 = state_33573;
(statearr_33589[(7)] = inst_33550__$1);

return statearr_33589;
})();
var statearr_33590_33606 = state_33573__$1;
(statearr_33590_33606[(2)] = null);

(statearr_33590_33606[(1)] = (2));


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
});})(c__31860__auto___33596,out))
;
return ((function (switch__31770__auto__,c__31860__auto___33596,out){
return (function() {
var cljs$core$async$state_machine__31771__auto__ = null;
var cljs$core$async$state_machine__31771__auto____0 = (function (){
var statearr_33591 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33591[(0)] = cljs$core$async$state_machine__31771__auto__);

(statearr_33591[(1)] = (1));

return statearr_33591;
});
var cljs$core$async$state_machine__31771__auto____1 = (function (state_33573){
while(true){
var ret_value__31772__auto__ = (function (){try{while(true){
var result__31773__auto__ = switch__31770__auto__.call(null,state_33573);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31773__auto__;
}
break;
}
}catch (e33592){if((e33592 instanceof Object)){
var ex__31774__auto__ = e33592;
var statearr_33593_33607 = state_33573;
(statearr_33593_33607[(5)] = ex__31774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33573);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33592;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33608 = state_33573;
state_33573 = G__33608;
continue;
} else {
return ret_value__31772__auto__;
}
break;
}
});
cljs$core$async$state_machine__31771__auto__ = function(state_33573){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31771__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31771__auto____1.call(this,state_33573);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31771__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31771__auto____0;
cljs$core$async$state_machine__31771__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31771__auto____1;
return cljs$core$async$state_machine__31771__auto__;
})()
;})(switch__31770__auto__,c__31860__auto___33596,out))
})();
var state__31862__auto__ = (function (){var statearr_33594 = f__31861__auto__.call(null);
(statearr_33594[(6)] = c__31860__auto___33596);

return statearr_33594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31862__auto__);
});})(c__31860__auto___33596,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33610 = arguments.length;
switch (G__33610) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31860__auto___33676 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31860__auto___33676,out){
return (function (){
var f__31861__auto__ = (function (){var switch__31770__auto__ = ((function (c__31860__auto___33676,out){
return (function (state_33648){
var state_val_33649 = (state_33648[(1)]);
if((state_val_33649 === (7))){
var inst_33644 = (state_33648[(2)]);
var state_33648__$1 = state_33648;
var statearr_33650_33677 = state_33648__$1;
(statearr_33650_33677[(2)] = inst_33644);

(statearr_33650_33677[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33649 === (1))){
var inst_33611 = (new Array(n));
var inst_33612 = inst_33611;
var inst_33613 = (0);
var state_33648__$1 = (function (){var statearr_33651 = state_33648;
(statearr_33651[(7)] = inst_33613);

(statearr_33651[(8)] = inst_33612);

return statearr_33651;
})();
var statearr_33652_33678 = state_33648__$1;
(statearr_33652_33678[(2)] = null);

(statearr_33652_33678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33649 === (4))){
var inst_33616 = (state_33648[(9)]);
var inst_33616__$1 = (state_33648[(2)]);
var inst_33617 = (inst_33616__$1 == null);
var inst_33618 = cljs.core.not.call(null,inst_33617);
var state_33648__$1 = (function (){var statearr_33653 = state_33648;
(statearr_33653[(9)] = inst_33616__$1);

return statearr_33653;
})();
if(inst_33618){
var statearr_33654_33679 = state_33648__$1;
(statearr_33654_33679[(1)] = (5));

} else {
var statearr_33655_33680 = state_33648__$1;
(statearr_33655_33680[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33649 === (15))){
var inst_33638 = (state_33648[(2)]);
var state_33648__$1 = state_33648;
var statearr_33656_33681 = state_33648__$1;
(statearr_33656_33681[(2)] = inst_33638);

(statearr_33656_33681[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33649 === (13))){
var state_33648__$1 = state_33648;
var statearr_33657_33682 = state_33648__$1;
(statearr_33657_33682[(2)] = null);

(statearr_33657_33682[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33649 === (6))){
var inst_33613 = (state_33648[(7)]);
var inst_33634 = (inst_33613 > (0));
var state_33648__$1 = state_33648;
if(cljs.core.truth_(inst_33634)){
var statearr_33658_33683 = state_33648__$1;
(statearr_33658_33683[(1)] = (12));

} else {
var statearr_33659_33684 = state_33648__$1;
(statearr_33659_33684[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33649 === (3))){
var inst_33646 = (state_33648[(2)]);
var state_33648__$1 = state_33648;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33648__$1,inst_33646);
} else {
if((state_val_33649 === (12))){
var inst_33612 = (state_33648[(8)]);
var inst_33636 = cljs.core.vec.call(null,inst_33612);
var state_33648__$1 = state_33648;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33648__$1,(15),out,inst_33636);
} else {
if((state_val_33649 === (2))){
var state_33648__$1 = state_33648;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33648__$1,(4),ch);
} else {
if((state_val_33649 === (11))){
var inst_33628 = (state_33648[(2)]);
var inst_33629 = (new Array(n));
var inst_33612 = inst_33629;
var inst_33613 = (0);
var state_33648__$1 = (function (){var statearr_33660 = state_33648;
(statearr_33660[(10)] = inst_33628);

(statearr_33660[(7)] = inst_33613);

(statearr_33660[(8)] = inst_33612);

return statearr_33660;
})();
var statearr_33661_33685 = state_33648__$1;
(statearr_33661_33685[(2)] = null);

(statearr_33661_33685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33649 === (9))){
var inst_33612 = (state_33648[(8)]);
var inst_33626 = cljs.core.vec.call(null,inst_33612);
var state_33648__$1 = state_33648;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33648__$1,(11),out,inst_33626);
} else {
if((state_val_33649 === (5))){
var inst_33616 = (state_33648[(9)]);
var inst_33613 = (state_33648[(7)]);
var inst_33612 = (state_33648[(8)]);
var inst_33621 = (state_33648[(11)]);
var inst_33620 = (inst_33612[inst_33613] = inst_33616);
var inst_33621__$1 = (inst_33613 + (1));
var inst_33622 = (inst_33621__$1 < n);
var state_33648__$1 = (function (){var statearr_33662 = state_33648;
(statearr_33662[(12)] = inst_33620);

(statearr_33662[(11)] = inst_33621__$1);

return statearr_33662;
})();
if(cljs.core.truth_(inst_33622)){
var statearr_33663_33686 = state_33648__$1;
(statearr_33663_33686[(1)] = (8));

} else {
var statearr_33664_33687 = state_33648__$1;
(statearr_33664_33687[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33649 === (14))){
var inst_33641 = (state_33648[(2)]);
var inst_33642 = cljs.core.async.close_BANG_.call(null,out);
var state_33648__$1 = (function (){var statearr_33666 = state_33648;
(statearr_33666[(13)] = inst_33641);

return statearr_33666;
})();
var statearr_33667_33688 = state_33648__$1;
(statearr_33667_33688[(2)] = inst_33642);

(statearr_33667_33688[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33649 === (10))){
var inst_33632 = (state_33648[(2)]);
var state_33648__$1 = state_33648;
var statearr_33668_33689 = state_33648__$1;
(statearr_33668_33689[(2)] = inst_33632);

(statearr_33668_33689[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33649 === (8))){
var inst_33612 = (state_33648[(8)]);
var inst_33621 = (state_33648[(11)]);
var tmp33665 = inst_33612;
var inst_33612__$1 = tmp33665;
var inst_33613 = inst_33621;
var state_33648__$1 = (function (){var statearr_33669 = state_33648;
(statearr_33669[(7)] = inst_33613);

(statearr_33669[(8)] = inst_33612__$1);

return statearr_33669;
})();
var statearr_33670_33690 = state_33648__$1;
(statearr_33670_33690[(2)] = null);

(statearr_33670_33690[(1)] = (2));


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
});})(c__31860__auto___33676,out))
;
return ((function (switch__31770__auto__,c__31860__auto___33676,out){
return (function() {
var cljs$core$async$state_machine__31771__auto__ = null;
var cljs$core$async$state_machine__31771__auto____0 = (function (){
var statearr_33671 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33671[(0)] = cljs$core$async$state_machine__31771__auto__);

(statearr_33671[(1)] = (1));

return statearr_33671;
});
var cljs$core$async$state_machine__31771__auto____1 = (function (state_33648){
while(true){
var ret_value__31772__auto__ = (function (){try{while(true){
var result__31773__auto__ = switch__31770__auto__.call(null,state_33648);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31773__auto__;
}
break;
}
}catch (e33672){if((e33672 instanceof Object)){
var ex__31774__auto__ = e33672;
var statearr_33673_33691 = state_33648;
(statearr_33673_33691[(5)] = ex__31774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33648);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33672;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33692 = state_33648;
state_33648 = G__33692;
continue;
} else {
return ret_value__31772__auto__;
}
break;
}
});
cljs$core$async$state_machine__31771__auto__ = function(state_33648){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31771__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31771__auto____1.call(this,state_33648);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31771__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31771__auto____0;
cljs$core$async$state_machine__31771__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31771__auto____1;
return cljs$core$async$state_machine__31771__auto__;
})()
;})(switch__31770__auto__,c__31860__auto___33676,out))
})();
var state__31862__auto__ = (function (){var statearr_33674 = f__31861__auto__.call(null);
(statearr_33674[(6)] = c__31860__auto___33676);

return statearr_33674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31862__auto__);
});})(c__31860__auto___33676,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33694 = arguments.length;
switch (G__33694) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31860__auto___33764 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31860__auto___33764,out){
return (function (){
var f__31861__auto__ = (function (){var switch__31770__auto__ = ((function (c__31860__auto___33764,out){
return (function (state_33736){
var state_val_33737 = (state_33736[(1)]);
if((state_val_33737 === (7))){
var inst_33732 = (state_33736[(2)]);
var state_33736__$1 = state_33736;
var statearr_33738_33765 = state_33736__$1;
(statearr_33738_33765[(2)] = inst_33732);

(statearr_33738_33765[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33737 === (1))){
var inst_33695 = [];
var inst_33696 = inst_33695;
var inst_33697 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33736__$1 = (function (){var statearr_33739 = state_33736;
(statearr_33739[(7)] = inst_33696);

(statearr_33739[(8)] = inst_33697);

return statearr_33739;
})();
var statearr_33740_33766 = state_33736__$1;
(statearr_33740_33766[(2)] = null);

(statearr_33740_33766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33737 === (4))){
var inst_33700 = (state_33736[(9)]);
var inst_33700__$1 = (state_33736[(2)]);
var inst_33701 = (inst_33700__$1 == null);
var inst_33702 = cljs.core.not.call(null,inst_33701);
var state_33736__$1 = (function (){var statearr_33741 = state_33736;
(statearr_33741[(9)] = inst_33700__$1);

return statearr_33741;
})();
if(inst_33702){
var statearr_33742_33767 = state_33736__$1;
(statearr_33742_33767[(1)] = (5));

} else {
var statearr_33743_33768 = state_33736__$1;
(statearr_33743_33768[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33737 === (15))){
var inst_33726 = (state_33736[(2)]);
var state_33736__$1 = state_33736;
var statearr_33744_33769 = state_33736__$1;
(statearr_33744_33769[(2)] = inst_33726);

(statearr_33744_33769[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33737 === (13))){
var state_33736__$1 = state_33736;
var statearr_33745_33770 = state_33736__$1;
(statearr_33745_33770[(2)] = null);

(statearr_33745_33770[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33737 === (6))){
var inst_33696 = (state_33736[(7)]);
var inst_33721 = inst_33696.length;
var inst_33722 = (inst_33721 > (0));
var state_33736__$1 = state_33736;
if(cljs.core.truth_(inst_33722)){
var statearr_33746_33771 = state_33736__$1;
(statearr_33746_33771[(1)] = (12));

} else {
var statearr_33747_33772 = state_33736__$1;
(statearr_33747_33772[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33737 === (3))){
var inst_33734 = (state_33736[(2)]);
var state_33736__$1 = state_33736;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33736__$1,inst_33734);
} else {
if((state_val_33737 === (12))){
var inst_33696 = (state_33736[(7)]);
var inst_33724 = cljs.core.vec.call(null,inst_33696);
var state_33736__$1 = state_33736;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33736__$1,(15),out,inst_33724);
} else {
if((state_val_33737 === (2))){
var state_33736__$1 = state_33736;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33736__$1,(4),ch);
} else {
if((state_val_33737 === (11))){
var inst_33704 = (state_33736[(10)]);
var inst_33700 = (state_33736[(9)]);
var inst_33714 = (state_33736[(2)]);
var inst_33715 = [];
var inst_33716 = inst_33715.push(inst_33700);
var inst_33696 = inst_33715;
var inst_33697 = inst_33704;
var state_33736__$1 = (function (){var statearr_33748 = state_33736;
(statearr_33748[(11)] = inst_33716);

(statearr_33748[(12)] = inst_33714);

(statearr_33748[(7)] = inst_33696);

(statearr_33748[(8)] = inst_33697);

return statearr_33748;
})();
var statearr_33749_33773 = state_33736__$1;
(statearr_33749_33773[(2)] = null);

(statearr_33749_33773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33737 === (9))){
var inst_33696 = (state_33736[(7)]);
var inst_33712 = cljs.core.vec.call(null,inst_33696);
var state_33736__$1 = state_33736;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33736__$1,(11),out,inst_33712);
} else {
if((state_val_33737 === (5))){
var inst_33704 = (state_33736[(10)]);
var inst_33700 = (state_33736[(9)]);
var inst_33697 = (state_33736[(8)]);
var inst_33704__$1 = f.call(null,inst_33700);
var inst_33705 = cljs.core._EQ_.call(null,inst_33704__$1,inst_33697);
var inst_33706 = cljs.core.keyword_identical_QMARK_.call(null,inst_33697,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33707 = (inst_33705) || (inst_33706);
var state_33736__$1 = (function (){var statearr_33750 = state_33736;
(statearr_33750[(10)] = inst_33704__$1);

return statearr_33750;
})();
if(cljs.core.truth_(inst_33707)){
var statearr_33751_33774 = state_33736__$1;
(statearr_33751_33774[(1)] = (8));

} else {
var statearr_33752_33775 = state_33736__$1;
(statearr_33752_33775[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33737 === (14))){
var inst_33729 = (state_33736[(2)]);
var inst_33730 = cljs.core.async.close_BANG_.call(null,out);
var state_33736__$1 = (function (){var statearr_33754 = state_33736;
(statearr_33754[(13)] = inst_33729);

return statearr_33754;
})();
var statearr_33755_33776 = state_33736__$1;
(statearr_33755_33776[(2)] = inst_33730);

(statearr_33755_33776[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33737 === (10))){
var inst_33719 = (state_33736[(2)]);
var state_33736__$1 = state_33736;
var statearr_33756_33777 = state_33736__$1;
(statearr_33756_33777[(2)] = inst_33719);

(statearr_33756_33777[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33737 === (8))){
var inst_33704 = (state_33736[(10)]);
var inst_33700 = (state_33736[(9)]);
var inst_33696 = (state_33736[(7)]);
var inst_33709 = inst_33696.push(inst_33700);
var tmp33753 = inst_33696;
var inst_33696__$1 = tmp33753;
var inst_33697 = inst_33704;
var state_33736__$1 = (function (){var statearr_33757 = state_33736;
(statearr_33757[(14)] = inst_33709);

(statearr_33757[(7)] = inst_33696__$1);

(statearr_33757[(8)] = inst_33697);

return statearr_33757;
})();
var statearr_33758_33778 = state_33736__$1;
(statearr_33758_33778[(2)] = null);

(statearr_33758_33778[(1)] = (2));


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
});})(c__31860__auto___33764,out))
;
return ((function (switch__31770__auto__,c__31860__auto___33764,out){
return (function() {
var cljs$core$async$state_machine__31771__auto__ = null;
var cljs$core$async$state_machine__31771__auto____0 = (function (){
var statearr_33759 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33759[(0)] = cljs$core$async$state_machine__31771__auto__);

(statearr_33759[(1)] = (1));

return statearr_33759;
});
var cljs$core$async$state_machine__31771__auto____1 = (function (state_33736){
while(true){
var ret_value__31772__auto__ = (function (){try{while(true){
var result__31773__auto__ = switch__31770__auto__.call(null,state_33736);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31773__auto__;
}
break;
}
}catch (e33760){if((e33760 instanceof Object)){
var ex__31774__auto__ = e33760;
var statearr_33761_33779 = state_33736;
(statearr_33761_33779[(5)] = ex__31774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33736);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33760;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33780 = state_33736;
state_33736 = G__33780;
continue;
} else {
return ret_value__31772__auto__;
}
break;
}
});
cljs$core$async$state_machine__31771__auto__ = function(state_33736){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31771__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31771__auto____1.call(this,state_33736);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31771__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31771__auto____0;
cljs$core$async$state_machine__31771__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31771__auto____1;
return cljs$core$async$state_machine__31771__auto__;
})()
;})(switch__31770__auto__,c__31860__auto___33764,out))
})();
var state__31862__auto__ = (function (){var statearr_33762 = f__31861__auto__.call(null);
(statearr_33762[(6)] = c__31860__auto___33764);

return statearr_33762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31862__auto__);
});})(c__31860__auto___33764,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1504782129219