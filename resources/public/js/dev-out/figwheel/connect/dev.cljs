(ns figwheel.connect.dev (:require [horaro.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/horaro.core.mount-root (apply js/horaro.core.mount-root x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'horaro.core/mount-root' is missing"))), :build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

