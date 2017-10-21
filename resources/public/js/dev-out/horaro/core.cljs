(ns horaro.core
    (:require [reagent.core :as reagent]
              [re-frame.core :as re-frame]
              [horaro.ui :as ui]
              [horaro.config :as config]
              [horaro.init]))


(defn dev-setup []
  (when config/debug?
    (enable-console-print!)
    (println "dev mode")))


(defn mount-root []
  (re-frame/clear-subscription-cache!)
  (reagent/render [ui/main-panel]
                  (.getElementById js/document "app")))


(defn ^:export init []
  (re-frame/dispatch-sync [:db/initialize-db])
  (dev-setup)
  (mount-root))
