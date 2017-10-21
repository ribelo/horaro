(ns horaro.npm
  (:require [reagent.core :as r]))

(def lazyload (r/adapt-react-class (aget js/window "deps" "LazyLoad" "default")))
