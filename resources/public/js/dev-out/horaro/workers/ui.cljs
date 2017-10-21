(ns horaro.workers.ui
  (:require [reagent.core :as r]
            [reagent.ratom :refer-macros [reaction]]
            [re-frame.core :as rf]
            [cuerdas.core :as str]
            [semantic-ui.core :as ui]
            [horaro.flex :as flex]))



(defn worker-modal []
  (let [show-modal? (rf/subscribe [:workers/show-modal?])
        edited-worker (rf/subscribe [:workers/edited-worker])
        submit-fn (fn [worker]
                    (rf/dispatch [:workers/remove-worker worker])
                    (rf/dispatch [:workers/add-worker worker])
                    (rf/dispatch [:workers/select-worker nil])
                    (rf/dispatch [:workers/toggle-modal]))]
    (fn []
      [ui/modal {:open     @show-modal?
                 :on-close (fn []
                             (rf/dispatch [:workers/select-worker nil])
                             (rf/dispatch [:workers/toggle-modal]))}
       [ui/modal-content
        [flex/vbox
         [ui/form {:on-submit #(submit-fn @edited-worker)}
          [ui/form-group {:widths "equal"}
           [ui/form-input {:label     "Imię"
                           :value     (or (:worker/first-name @edited-worker) "")
                           :on-change #(rf/dispatch [:workers/update-first-name
                                                     (-> % .-target .-value)])}]
           [ui/form-input {:label     "Nazwisko"
                           :value     (or (:worker/last-name @edited-worker) "")
                           :on-change #(rf/dispatch [:workers/update-last-name
                                                     (-> % .-target .-value)])}]]
          [ui/form-group {:widths "equal"
                          :inline true}
           ;[ui/form-checkbox {:label     "Sprzedawca?"
           ;                   :checked   (:worker/salesman? @edited-worker)
           ;                   :on-change #(rf/dispatch [:workers/toggle-sallesman])}]
           ;[ui/form-checkbox {:label     "Stoisko Mięsne?"
           ;                   :checked     (:worker/butcher? @edited-worker)
           ;                   :on-change #(rf/dispatch [:workers/toggle-butcher])}]
           [ui/form-checkbox {:label     "Aktywny?"
                              :checked   (:worker/active? @edited-worker)
                              :on-change #(rf/dispatch [:workers/toggle-active])}]
           [ui/form-input {:label     "Godziny Pracy"
                           :value     (or (:worker/working-hours @edited-worker) "")
                           :on-change #(rf/dispatch [:workers/update-working-hours
                                                     (-> % .-target .-value js/parseInt)])}]
           [ui/button {:style {:display :none}}
            "hidden submit button"]]]
         [flex/gap {:size "16px"}]
         [flex/hbox {:justify-content :flex-end}
          [ui/button {:color    :red
                      :on-click (fn []
                                  (rf/dispatch [:workers/select-worker nil])
                                  (rf/dispatch [:workers/toggle-modal]))}
           "Anuluj"]
          [ui/button {:color    :green
                      :on-click #(submit-fn @edited-worker)}
           "Zatwierdź"]]]]])))