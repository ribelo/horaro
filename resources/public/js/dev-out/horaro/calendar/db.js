// Compiled by ClojureScript 1.9.671 {}
goog.provide('horaro.calendar.db');
goog.require('cljs.core');
goog.require('cljs_time.core');
goog.require('cljs_time.periodic');
horaro.calendar.db.calendar_state = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("calendar","main-date","calendar/main-date",-1802410609),cljs_time.core.first_day_of_the_month.call(null,cljs_time.core.now.call(null)),new cljs.core.Keyword("calendar","days","calendar/days",-1840699318),(function (){var now = cljs_time.core.now.call(null);
return cljs_time.periodic.periodic_seq.call(null,cljs_time.core.first_day_of_the_month.call(null,now),cljs_time.core.last_day_of_the_month.call(null,now),cljs_time.core.days.call(null,(1)));
})(),new cljs.core.Keyword("calendar","show-modal?","calendar/show-modal?",836706831),false,new cljs.core.Keyword("calendar","schedule","calendar/schedule",459050692),cljs.core.PersistentArrayMap.EMPTY], null);

//# sourceMappingURL=db.js.map?rel=1504091221368