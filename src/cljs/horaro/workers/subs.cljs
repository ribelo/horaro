(ns horaro.workers.subs
  (:require [re-frame.core :as rf]
            [cljs-time.core :as dt]))


(rf/reg-sub
  :workers/show-modal?
  (fn [db _]
    (:workers/show-modal? db)))


(rf/reg-sub
  :workers/list
  (fn [db _]
    (->> (:workers/list db)
         (sort-by (juxt :worker/first-name :worker/last-name)))))


(rf/reg-sub
  :workers/active
  :<- [:workers/list]
  (fn [workers]
    (->> workers
         (filterv :worker/active?))))


(rf/reg-sub
  :workers/selected-worker
  (fn [db _]
    (:workers/selected-worker db)))


(rf/reg-sub
  :workers/edited-worker
  (fn [db _]
    (:workers/edit-worker db)))
