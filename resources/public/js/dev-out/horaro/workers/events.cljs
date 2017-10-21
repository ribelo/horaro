(ns horaro.workers.events
  (:require [re-frame.core :as rf]
            [cuerdas.core :as str]
            [horaro.db.core :refer [->local-storage]]))


(rf/reg-event-db
  :workers/toggle-modal
  (fn [db [_]]
    (update db :workers/show-modal? not)))


(rf/reg-event-db
  :workers/add-worker
  [->local-storage]
  (fn [db [_ {:keys [worker/first-name worker/last-name] :as worker}]]
    (update db :workers/list conj
            (assoc worker :text
                          (str (str/upper (first first-name))
                               (str/upper (first last-name)))))))


(rf/reg-event-db
  :workers/remove-worker
  [->local-storage]
  (fn [db [_ {:keys [worker/id] :as worker}]]
    (let [new-list (into [] (remove #(= id (:worker/id %)) (:workers/list db)))]
      (assoc db :workers/list new-list))))


(rf/reg-event-db
  :workers/select-worker
  (fn [db [_ {:keys [worker/id] :as worker}]]
    (let [last-selected (get db :workers/selected-worker)]
      (if (not= id (:worker/id last-selected))
        (assoc db :workers/selected-worker worker)
        (assoc db :workers/selected-worker nil)))))


(rf/reg-event-db
  :workers/edit-worker
  (fn [db [_ worker]]
    (assoc db :workers/edit-worker worker)))


(rf/reg-event-db
  :workers/update-first-name
  (fn [db [_ first-name]]
    (assoc-in db [:workers/edit-worker :worker/first-name] (str/title first-name))))


(rf/reg-event-db
  :workers/update-last-name
  (fn [db [_ last-name]]
    (assoc-in db [:workers/edit-worker :worker/last-name] (str/title last-name))))


(rf/reg-event-db
  :workers/update-working-hours
  (fn [db [_ working-hours]]
    (assoc-in db [:workers/edit-worker :worker/working-hours] working-hours)))


(rf/reg-event-db
  :workers/toggle-sallesman
  (fn [db _]
    (update-in db [:workers/edit-worker :worker/salesman?] not)))


(rf/reg-event-db
  :workers/toggle-butcher
  (fn [db _]
    (update-in db [:workers/edit-worker :worker/butcher?] not)))


(rf/reg-event-db
  :workers/toggle-active
  (fn [db _]
    (update-in db [:workers/edit-worker :worker/active?] not)))

(rf/subscribe [:workers/edited-worker])