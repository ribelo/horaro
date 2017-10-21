(ns horaro.calendar.db
  (:require [cljs-time.core :as dt]
            [cljs-time.periodic :as dtp]))

(def calendar-state
  {:calendar/main-date   (dt/first-day-of-the-month (dt/now))
   :calendar/days        (let [now (dt/now)]
                           (dtp/periodic-seq (dt/first-day-of-the-month now)
                                             (dt/last-day-of-the-month now)
                                             (dt/days 1)))
   :calendar/show-modal? false
   :calendar/schedule    {}})