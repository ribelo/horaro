(ns horaro.calendar.subs
  (:require [reagent.ratom :refer [reaction]]
            [re-frame.core :as rf]
            [cljs-time.core :as dt]
            [cljs-time.periodic :as dtp]
            [cljs-time.format :as dtf]
            [horaro.calendar.utils :refer [count-worker-hours worker-day-schedule] :as utils]))


(rf/reg-sub
  :calendar/show-modal?
  (fn [db _]
    (:calendar/show-modal? db)))


(rf/reg-sub
  :calendar/main-date
  (fn [db _]
    (:calendar/main-date db)))


(rf/reg-sub
  :calendar/short-date
  :<- [:calendar/main-date]
  (fn [date]
    (dtf/unparse (dtf/formatter "yyyy-MM") date)))


(rf/reg-sub
  :calendar/long-date
  :<- [:calendar/main-date]
  (fn [date]
    (dtf/unparse (dtf/formatter "yyyy-MM-dd") date)))


(rf/reg-sub
  :calendar/days
  (fn [db _]
    (:calendar/days db)))



(rf/reg-sub
  :calendar/get
  (fn [db [_ [date {:keys [worker/id]} hour]]]
    (get-in db [:calendar/schedule (str date) id hour])))


(rf/reg-sub
  :calendar/count-work-days
  (fn [db _]
    (->> (:calendar/days db)
         (remove #(#{6 7} (dt/day-of-week %)))
         (count))))

(rf/clear-subscription-cache!)
(rf/reg-sub
  :calendar/worker-day-schedule
  (fn [db [_ [day worker]]]
    (println day worker)
    (worker-day-schedule worker day db)))


(rf/reg-sub
  :calendar/count-work-hours
  :<- [:calendar/count-work-days]
  (fn [days]
    (* days 8)))


(rf/reg-sub
  :calendar/count-worker-work-hours
  (fn [db [_ worker]]
    (let [date (:calendar/main-date db)]
      (count-worker-hours worker date db))))


(rf/reg-sub
  :calendar/print?
  (fn [db _]
    (:view/print? db)))



;(taoensso.encore/reset-in! re-frame.db/app-db [:calendar/schedule] nil)