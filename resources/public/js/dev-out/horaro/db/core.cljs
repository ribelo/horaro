(ns horaro.db.core
  (:require [re-frame.core :as rf]
            [cognitect.transit :as t])
  (:import [goog.date UtcDateTime]))


(def transit-readers
  {:handlers
   {"m" (t/read-handler (fn [s] (UtcDateTime.fromTimestamp s)))}})


(def transit-writers
  {:handlers
   {UtcDateTime (t/write-handler
                  (constantly "m")
                  (fn [v] (.getTime v))
                  (fn [v] (str (.getTime v))))}})


(defn ->json [db]
  (let [w (t/writer :json transit-writers)]
    (t/write w db)))


(defn save-local-storage [db]
  (.setItem js/localStorage "horaro" (->json db)))


(def ->local-storage (rf/after save-local-storage))

(defn load-local-storage []
  (let [r (t/reader :json transit-readers)]
    (some->> (.getItem js/localStorage "horaro")
             (t/read r))))


(defn clear-local-storage []
  (save-local-storage {}))


(def default-db
  {:view/active-panel :view/workers
   :view/print?       false
   :view/print-grid?  false
   :view/print-list?  false})

