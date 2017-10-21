(ns horaro.calendar.ui
  (:require [reagent.core :as r]
            [reagent.ratom :refer [reaction]]
            [re-frame.core :as rf]
            [semantic-ui.core :as ui]
            [taoensso.encore :as ec]
            [cljs-time.core :as dt]
            [cljs-time.format :as dtf]
            [cljs-time.periodic :as dtp]
            [cljs-time.predicates :as dtpred]
            [cuerdas.core :as str]
            [horaro.flex :as flex]
            [horaro.npm :refer [lazyload]]))


(defn date-scroller []
  (let [main-date (rf/subscribe [:calendar/main-date])
        dates (rf/subscribe [:calendar/days])]
    (r/create-class
      {:component-did-mount
       (fn []
         (let [node (.getElementById js/document "dates-scroller")]
           (aset node "scrollTop" (int (/ (.-scrollHeight node) 2.5)))))
       :reagent-render
       (fn []
         [flex/scroller {:id     "dates-scroller"
                         :height "500px"}
          [flex/vbox
           (doall
             (for [date @dates]
               ^{:key date}
               [flex/vbox
                [flex/gap {:size "2px"}]
                [ui/button {:primary  (dt/equal? date @main-date)
                            :on-click #(rf/dispatch [:calendar/set-date date])}
                 (str (dtf/unparse (dtf/formatter "yyyy-MM-dd") date))]
                [flex/gap {:size "2px"}]]))]])})))


(defn date-select-modal []
  (let [show-modal? (rf/subscribe [:calendar/show-modal?])]
    (fn []
      [ui/modal {:open     @show-modal?
                 :size     :small
                 :on-close #(rf/dispatch [:calendar/toggle-modal])
                 :style    {:width  "30%"
                            :margin "0px 0px 0px"
                            :top    "10%"}}
       [ui/modal-content
        [flex/vbox
         [date-scroller]]]])))


(def short-weekdays
  {1 "PN"
   2 "WT"
   3 "ŚR"
   4 "CZ"
   5 "PT"
   6 "SO"
   7 "ND"})

(def long-weekdays
  {1 "Poniedziałek"
   2 "Wtorek"
   3 "Środa"
   4 "Czwartek"
   5 "Piątek"
   6 "Sobota"
   7 "Niedziela"})

(def long-months
  {1  "styczeń"
   2  "luty"
   3  "marzec"
   4  "kwiecień"
   5  "maj"
   6  "czerwiec"
   7  "lipiec"
   8  "sierpień"
   9  "wrzesień"
   10 "październik"
   11 "listopad"
   12 "grudzień"})


(defn schedule-cell [date worker hour]
  (let [type (rf/subscribe [:calendar/get [date worker hour]])
        print? (rf/subscribe [:calendar/print?])
        shop-background "repeating-linear-gradient(
                          -45deg,
                          #016936,
                          #016936 4px,
                          #32CD32 4px,
                          #32CD32 8px)"
        meats-background "repeating-linear-gradient(
                          -45deg,
                          #FE9A76,
                          #FE9A76 4px,
                          #B03060 4px,
                          #B03060 8px)"
        holiday-background "repeating-linear-gradient(
                          -45deg,
                          #0E6EB8,
                          #0E6EB8 4px,
                          #EE82EE 4px,
                          #EE82EE 8px)"
        print-background "#A0A0A0"]
    (fn [date worker hour]
      [flex/box {:size            "1 0 0px"
                 :style           {:background (cond
                                                 (nil? @type) nil
                                                 (#{:shop} @type) (if-not @print? shop-background print-background)
                                                 (#{:meats} @type) (if-not @print? meats-background print-background)
                                                 (#{:holiday} @type) (if-not @print? holiday-background nil))
                                   :border     "1px solid black"}
                 :on-click        #(let [val (cond
                                               (nil? @type) :shop
                                               (#{:shop} @type) :meats
                                               (#{:meats} @type) nil
                                               (#{:holiday} @type) :shop)
                                         holiday? (#{:holiday} @type)]
                                     (if val
                                       (do
                                         (when holiday?
                                           (rf/dispatch [:calendar/clear [date worker]]))
                                         (rf/dispatch [:calendar/set [date worker hour] val]))
                                       (rf/dispatch [:calendar/remove [date worker hour]])))
                 :on-double-click #(if-let [val (cond
                                                  (nil? @type) nil
                                                  (#{:shop} @type) :shop
                                                  (#{:meats} @type) :meats)]
                                     (do
                                       (rf/dispatch [:calendar/clear [date worker]])
                                       (doseq [hour (range hour (min (+ hour (:worker/working-hours worker)) 21))]
                                         (rf/dispatch [:calendar/set [date worker hour] val])))
                                     (rf/dispatch [:calendar/clear [date worker]]))}
       nil])))


(defn schedule []
  (let [print? (rf/subscribe [:calendar/print?])
        main-date (rf/subscribe [:calendar/main-date])
        long-date (rf/subscribe [:calendar/long-date])
        dates (rf/subscribe [:calendar/days])
        hours (range 6 21 1)
        tmp-calendar (r/atom {})
        workers (rf/subscribe [:workers/active])
        day-height (reaction (+ 60 (* 15.016 (count @workers))))]
    (fn []
      [flex/vbox
       (doall
         (for [date @dates
               :let [weekday (dt/day-of-week date)
                     weekday-name (get long-weekdays weekday)]]
           ^{:key (str date)}
           [lazyload {:height          @day-height
                      :offset-vertical @day-height}
            [flex/vbox
             [flex/hbox {:justify-content :center}
              [ui/header {:size :tiny}
               (str (dtf/unparse (dtf/formatter "yyyy-MM-dd") date) " " weekday-name)]]
             [flex/hbox
              [flex/box {:size  (if-not @print? "2 0 0px" "3 0 0px")
                         :style {:border "1px solid black"}}
               [ui/header {:text-align :center
                           :size       :tiny}
                "Pracownik"]]
              (doall
                (for [hour hours]
                  ^{:key (str hour)}
                  [flex/box {:size            "1 0 0px"
                             :justify-content :center
                             :style           {:border "1px solid black"}}
                   [ui/header {:size :tiny}
                    (str hour ":00")]]))
              (when-not @print?
                [flex/box {:size "1 0 0px"}])]
             (doall
               (for [{:keys [worker/id] :as worker} @workers]
                 ^{:key (str id)}
                 [flex/hbox
                  [flex/hbox {:size            (if-not @print? "2 0 0px" "3 0 0px")
                              :justify-content :space-around
                              :align-items     :center
                              :style           {:border "1px solid black"}}
                   [flex/box {:size 3}
                    [ui/header {:size :tiny}
                     (if-not @print?
                       (str (:worker/first-name worker) " " (first (:worker/last-name worker)) ".")
                       (str (:worker/first-name worker) " " (:worker/last-name worker)))]]]
                  (doall
                    (for [hour hours]
                      ^{:key (str hour)}
                      [schedule-cell date worker hour]))
                  (when-not @print?
                    [flex/hbox {:size            "1 0 0px"
                                :justify-content :space-around
                                :align-items     :center}
                     [ui/icon {:name     "travel"
                               :style    {:cursor :pointer}
                               :on-click (fn []
                                           (rf/dispatch [:calendar/set-holiday [date worker]]))}]
                     [ui/icon {:name     "delete calendar"
                               :style    {:cursor :pointer}
                               :on-click (fn []
                                           (rf/dispatch [:calendar/clear [date worker]]))}]])]))

             [flex/gap {:size "14px"}]]]))])))


(defn print-grid-cell [date worker hour]
  (let [type (rf/subscribe [:calendar/get [date worker hour]])
        print-background "#A0A0A0"]
    (fn [date worker hour]
      [ui/table-cell {:style {:background (cond
                                            (nil? @type) nil
                                            (#{:shop :meats} @type) print-background)}}
       nil])))

(defn print-grid-schedule []
  (let [print? (rf/subscribe [:calendar/print?])
        main-date (rf/subscribe [:calendar/main-date])
        long-date (rf/subscribe [:calendar/long-date])
        dates (rf/subscribe [:calendar/days])
        hours (range 6 21 1)
        tmp-calendar (r/atom {})
        workers (rf/subscribe [:workers/active])
        day-height (reaction (+ 60 (* 15.016 (count @workers))))]
    (fn []
      [:div
       (doall
         (for [date @dates
               :let [weekday (dt/day-of-week date)
                     weekday-name (get long-weekdays weekday)]]
           [:div {:class "avoid-break"}
            [flex/hbox {:justify-content :center}
             [ui/header {:size :tiny}
              (str (dtf/unparse (dtf/formatter "yyyy-MM-dd") date) " " weekday-name)]]
            [ui/table {:celled true}
             [ui/table-header
              [ui/table-row
               [ui/table-header-cell
                "Pracownik"]
               (doall
                 (for [hour hours]
                   ^{:key (str hour)}
                   [ui/table-header-cell
                    (str hour ":00")]))]]
             (doall
               (for [{:keys [worker/id] :as worker} @workers]
                 ^{:key (str id)}
                 [ui/table-row
                  [ui/table-cell
                   (if-not @print?
                     (str (:worker/first-name worker) " " (first (:worker/last-name worker)) ".")
                     (str (:worker/first-name worker) " " (:worker/last-name worker)))]
                  (for [hour hours]
                    ^{:key (str hour)}
                    [print-grid-cell date worker hour])]))]]))])))


(defn print-list-cell [date worker]
  (let [tmp (rf/subscribe [:calendar/worker-day-schedule [date worker]])]
    (fn [date worker]
      [ui/table-cell {:text-align     :center
                      :vertical-align :center}
       (cond
         (nil? (:type @tmp)) (cond (dtpred/saturday? date) "sobota"
                                   (dtpred/sunday? date) "niedziela"
                                   :else "wolne")
         (#{:shop :meats} (:type @tmp)) [flex/vbox
                                         [:div (str (:begin @tmp) "-" (:end @tmp))]
                                         [:div (cond
                                                 (#{:shop} (:type @tmp)) "sklep"
                                                 (#{:meats} (:type @tmp)) "lada")]]
         (#{:holiday} (:type @tmp)) "urlop")])))


(defn print-list-schedule []
  (let [print? (rf/subscribe [:calendar/print?])
        main-date (rf/subscribe [:calendar/main-date])
        long-date (rf/subscribe [:calendar/long-date])
        dates (rf/subscribe [:calendar/days])
        hours (range 6 21 1)
        tmp-calendar (r/atom {})
        workers (rf/subscribe [:workers/active])
        day-height (reaction (+ 60 (* 15.016 (count @workers))))]
    (fn []
      [:div {:class "avoid-break"}
       [flex/hbox {:justify-content :center}
        [flex/vbox
         [:div (str "Grafik na " (get long-months (dt/month @main-date)) " " (dt/year @main-date))]]]
       [ui/table {:celled  true
                  :size    :small
                  :compact true
                  :basic   true}
        [ui/table-header
         [ui/table-row
          [ui/table-header-cell {:text-align     :center
                                 :vertical-align :center}
           "Data"]
          (doall
            (for [{:keys [worker/id] :as worker} @workers]
              ^{:key (str id)}
              [ui/table-header-cell
               [:div {:style {:text-align     :center
                              :vertical-align :middle
                              :writing-mode   :tb-rl
                              :transform      "rotate(180deg)"}}
                (str (:worker/first-name worker) " " (:worker/last-name worker))]]))]]
        (doall
          (for [date @dates
                :let [weekday (dt/day-of-week date)
                      weekday-name (get long-weekdays weekday)]]
            ^{:key (str date)}
            [ui/table-row
             [ui/table-cell {:text-align     :center
                             :vertical-align :center}
              [:div (str (dtf/unparse (dtf/formatter "yyyy-MM-dd") date))]
              [:div (str weekday-name)]]
             (for [{:keys [worker/id] :as worker} @workers]
               ^{:key (str id)}
               [print-list-cell date worker])]))]])))