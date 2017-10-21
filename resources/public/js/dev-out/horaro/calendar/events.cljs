(ns horaro.calendar.events
  (:require [re-frame.core :as rf]
            [cljs-time.core :as dt]
            [cljs-time.periodic :as dtp]
            [taoensso.encore :as ec]
            [horaro.db.core :refer [->local-storage]]
            [horaro.electron :as electron]))


(rf/reg-event-db
  :calendar/toggle-modal
  (fn [db _]
    (update db :calendar/show-modal? not)))


(rf/reg-event-db
  :calendar/set-date
  [->local-storage]
  (fn [db [_ date]]
    (assoc db :calendar/main-date date)))


(rf/reg-event-db
  :calendar/next-month
  [->local-storage]
  (fn [db _]
    (let [main-date (-> db :calendar/main-date (dt/plus (dt/months 1)))
          days (dtp/periodic-seq (dt/first-day-of-the-month main-date)
                                 (dt/plus (dt/last-day-of-the-month main-date) (dt/days 1))
                                 (dt/days 1))]
      (assoc db :calendar/main-date main-date
                :calendar/days days))))


(rf/reg-event-db
  :calendar/previous-month
  [->local-storage]
  (fn [db _]
    (let [main-date (-> db :calendar/main-date (dt/minus (dt/months 1)))
          days (dtp/periodic-seq (dt/first-day-of-the-month main-date)
                                 (dt/plus (dt/last-day-of-the-month main-date) (dt/days 1))
                                 (dt/days 1))]
      (assoc db :calendar/main-date main-date
                :calendar/days days))))


(rf/reg-event-db
  :calendar/set
  [->local-storage]
  (fn [db [_ [date {:keys [worker/id]} hour] type]]
    (assoc-in db [:calendar/schedule (str date) id hour] type)))


(rf/reg-event-db
  :calendar/set-holiday
  [->local-storage]
  (fn [db [_ [date {:keys [worker/id]}]]]
    (reduce (fn [db hour]
              (assoc-in db [:calendar/schedule (str date) id hour] :holiday))
            db
            (range 6 21))))


(rf/reg-event-db
  :calendar/remove
  [->local-storage]
  (fn [db [_ [date {:keys [worker/id]} hour]]]
    (ec/dissoc-in db [:calendar/schedule (str date) id] hour)))


(rf/reg-event-db
  :calendar/clear
  [->local-storage]
  (fn [db [_ [date {:keys [worker/id]}]]]
    (reduce (fn [db hour]
              (ec/dissoc-in db [:calendar/schedule (str date) id] hour))
            db
            (range 6 21))))


(rf/reg-event-db
  :calendar/toggle-print
  (fn [db _]
    (update db :view/print? not)))


(rf/reg-event-fx
  :calendar/electron-print
  (fn [{db :db} _]
    (electron/print! {:printBackground true})))


(rf/reg-event-fx
  :calendar/print-schedule
  (fn [{db :db} _]
    {:dispatch-n     [[:calendar/toggle-print]
                      ^:flush-dom [:calendar/electron-print]]
     :dispatch-later [{:ms 1000 :dispatch [:calendar/toggle-print]}]}))


