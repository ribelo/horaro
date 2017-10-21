(ns horaro.ui
  (:require [reagent.core :as r]
            [reagent.ratom :refer [reaction]]
            [re-frame.core :as rf]
            [semantic-ui.core :as ui]
            [horaro.flex :as flex]
            [horaro.workers.ui :as workers]
            [horaro.calendar.ui :as date]
            [horaro.workers.utils :refer [empty-worker]]))


(defn worker-menu-item [{:keys [worker/id] :as worker}]
  (let [worker-hover (r/atom {})
        selected-worker (rf/subscribe [:workers/selected-worker])
        worker-hours (rf/subscribe [:calendar/count-worker-work-hours worker])
        all-work-hours (rf/subscribe [:calendar/count-work-hours])]
    (fn [{:keys [worker/id] :as worker}]
      [ui/menu-item {:active          (= id (:worker/id @selected-worker))
                     :on-mouse-enter  #(swap! worker-hover assoc id true)
                     :on-mouse-leave  #(swap! worker-hover assoc id false)
                     :on-click        #(rf/dispatch [:workers/select-worker worker])
                     :on-double-click (fn []
                                        (rf/dispatch [:workers/edit-worker worker])
                                        (rf/dispatch [:workers/toggle-modal]))}
       [ui/label {:color    "red"
                  :style    {:cursor :pointer}
                  ;:empty true
                  :on-click #(rf/dispatch [:workers/remove-worker worker])}
        "X"]
       (let [diff (- @all-work-hours @worker-hours)]
         [ui/label {:color (if (pos? diff) "green" "yellow")} (str diff)])
       (str (:worker/first-name worker) " " (:worker/last-name worker))])))

(defn sidebar []
  (let [workers (rf/subscribe [:workers/list])]
    (fn []
      [ui/menu {:vertical true
                :inverted true
                ;:fixed    :left
                :fluid    true
                :style    {:flex "1 0 0px"}}
       (doall
         (for [{:keys [worker/id] :as worker} @workers]
           ^{:key id}
           [worker-menu-item worker]))
       [ui/menu-item
        [flex/hbox {:justify-content :center}
         [ui/button {:icon     "add user"
                     :inverted true
                     :compact  true
                     :on-click (fn []
                                 (rf/dispatch [:workers/edit-worker (empty-worker)])
                                 (rf/dispatch [:workers/toggle-modal]))}]]]])))




(defn top-menu []
  (let [short-date (rf/subscribe [:calendar/short-date])]
    (fn []
      [ui/menu {:inverted true
                :size     :small}
       ;[ui/menu-menu
       ; [ui/menu-item
       ;  "ustalanie harmonogramu"]
       ; [ui/menu-item
       ;  "widok szczegółowy"]]
       [ui/menu-menu
        [ui/menu-item
         [ui/button {:inverted true
                     :icon     true
                     :on-click #(rf/dispatch [:calendar/previous-month])}
          [ui/icon {:name "minus"}]]]
        [ui/menu-item {:on-click #(rf/dispatch [:calendar/toggle-modal])}
         @short-date]
        [ui/menu-item
         [ui/button {:inverted true
                     :icon     true
                     :on-click #(rf/dispatch [:calendar/next-month])}
          [ui/icon {:name "plus"}]]]
        [ui/menu-item
         [ui/button {:inverted true
                     :icon     true
                     :on-click #(rf/dispatch [:calendar/print-schedule])}
          [ui/icon {:name "print"}]]]]])))


(defn main-panel []
  (let [print? (rf/subscribe [:calendar/print?])]
    (fn []
      [:div {:style {:height "100%"}}
       [flex/hbox {:height "100%"}
        (when-not @print?
          [flex/vbox
           [sidebar]])
        [flex/gap {:size "16px"}]
        [flex/vbox {:size 1}
         [flex/gap {:size "16px"}]
         (when-not @print?
           [flex/hbox {:justify-content :center}
            [top-menu]])
         [flex/gap {:size "16px"}]
         (if-not @print?
           [flex/scroller
            [date/schedule]]
           [date/print-list-schedule])]
        [flex/gap {:size "16px"}]]
       [workers/worker-modal]
       [date/date-select-modal]])))