(ns horaro.db.events
  (:require [re-frame.core :as rf]
            [horaro.db.core :as db]
            [horaro.workers.db :as workers]
            [horaro.calendar.db :as calendar]))


(rf/reg-event-db
  :db/initialize-db
  (fn [_ _]
    (let [db (merge db/default-db
                    calendar/calendar-state)]
      (if-let [storage (db/load-local-storage)]
        (merge db storage)
        db))))


(rf/reg-event-db
  :db/clean-db
  (fn [_ _]
    (merge db/default-db
           workers/workers-state
           calendar/calendar-state)))
