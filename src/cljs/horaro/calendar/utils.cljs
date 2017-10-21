(ns horaro.calendar.utils
  (:require [re-frame.core :as rf]
            [cljs-time.core :as dt]
            [cljs-time.periodic :as dtp]))


(defn count-worker-hours
  ([{:keys [worker/id] :as worker} db]
   (let [calendar (:calendar/schedule db)
         dates (mapv str (:calendar/days db))
         working (->> dates
                      (mapv (fn [date]
                              (->> (get-in calendar [date id])
                                   (vals)
                                   (filter #{:shop :meats})
                                   (count))))
                      (reduce +))
         holiday (->> dates
                      (mapv (fn [date]
                              (->> (get-in calendar [date id])
                                   (vals)
                                   (filter #{:holiday}))))
                      (mapv (fn [coll]
                              (if-not (empty? (filter #{:holiday} coll)) 8 0)))
                      (reduce +))]
     (+ working holiday)))
  ([worker date db]
   (count-worker-hours
     worker
     db)))


(defn worker-day-schedule
  ([{:keys [worker/id] :as worker} date db]
   (let [calendar (:calendar/schedule db)]
     (println "bla" id date)
     (let [[ks vs] (->> (get-in calendar [(str date) id])
                        ((juxt keys vals)))
           type (if (> (count (distinct vs)) 1)
                  (vec (distinct vs))
                  (first vs))]
       {:type  type
        :begin (apply min ks)
        :end   (let [x (apply max ks)]
                 (if (number? x) (inc x) x))}))))


(defn worker-available? [{:keys [worker/id] :as worker} [date shift place] calendar]
  (not
    (contains?
      (->> (for [s [1 1.5 2]
                 p [:shop :meats]
                 :when (or (not= shift s) (not= place p))
                 ]
             (get-in calendar [(str date) s p]))
           (remove nil?)
           (js->clj)
           (flatten)
           (set))
      id)))