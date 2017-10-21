(ns horaro.electron)

(def electron (js/require "electron"))
(def remote (.-remote electron))
(def app (.-app remote))
(def browser-window (.getCurrentWindow remote))
(def web-contents (.getCurrentWebContents remote))
;(def shell (.-shell remote))
(def fs (.require remote "fs"))

(defn print! [options]
  (.print web-contents (clj->js (or options {}))))

;(print! {:printBackground true})
