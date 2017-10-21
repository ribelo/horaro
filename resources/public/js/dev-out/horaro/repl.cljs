(ns horaro.repl
  (:require [re-frame.core :as rf]
            [cljs-time.core :as dt]))

(rf/subscribe [:workers/list])


(rf/subscribe [:calendar/main-date])

(dt/plus (dt/now) (dt/months 1))