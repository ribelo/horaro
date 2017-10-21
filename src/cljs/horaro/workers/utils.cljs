(ns horaro.workers.utils)

(defn empty-worker []
  (let [id (str (random-uuid))]
    {:text                 ""
     :value                id
     :key                  id

     :worker/id            id
     :worker/first-name    ""
     :worker/last-name     ""
     :worker/salesman?     true
     :worker/butcher?      false
     :worker/working-hours 8
     :worker/active?       true
     :worker/holidays      []}))