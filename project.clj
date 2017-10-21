(defproject horaro "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.9.0-alpha14"]
                 [org.clojure/clojurescript "1.9.671" :scope "provided"]
                 [org.clojure/core.async "0.3.443"]
                 [org.clojure/spec.alpha "0.1.123"]
                 [com.cognitect/transit-cljs "0.8.239"]
                 [com.stuartsierra/component "0.3.2"]
                 [com.taoensso/encore "2.91.1"]
                 [com.taoensso/timbre "4.8.0"]
                 [funcool/cuerdas "2.0.3"]
                 [cljs-ajax "0.6.0"]
                 [reagent "0.6.1"]
                 [re-frame "0.9.4"]
                 [day8.re-frame/http-fx "0.1.4"]
                 [com.andrewmcveigh/cljs-time "0.5.0"]]

  :plugins [[lein-cljsbuild "1.1.4"]
            [lein-shell "0.5.0"]]

  :min-lein-version "2.5.3"

  :source-paths ["src/clj"]

  :clean-targets ^{:protect false} ["resources/public/js" "target"]

  :figwheel {:http-server-root "public"
             :nrepl-port       7002
             :css-dirs         ["resources/public/css"]
             :nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}

  :profiles {:dev
             {:dependencies [[binaryage/devtools "0.8.2"]
                             [com.cemerick/piggieback "0.2.2"]]
              :plugins      [[lein-figwheel "0.5.9"]]}}
  :cljsbuild {:builds
              [{:source-paths ["src/electron"]
                :id           "electron"
                :compiler     {:output-to      "resources/electron.js"
                               :output-dir     "resources/electron-out"
                               :optimizations  :simple
                               :pretty-print   true
                               :cache-analysis true}}
               {:id           "dev"
                :source-paths ["src/cljs"]
                :figwheel     {:on-jsload "horaro.core/mount-root"}
                :compiler     {:main                 horaro.core
                               :output-to            "resources/public/js/app.js"
                               :output-dir           "resources/public/js/dev-out"
                               :asset-path           "js/dev-out"
                               :source-map-timestamp true
                               :preloads             [devtools.preload]
                               :external-config      {:devtools/config {:features-to-install :all}}
                               :pretty-print         true}}
               {:id           "min"
                :source-paths ["src/cljs"]
                :compiler     {:main            horaro.core
                               :output-to       "resources/public/js/app.js"
                               :output-dir      "resources/public/js/release-out"
                               :optimizations   :advanced
                               :closure-defines {goog.DEBUG false}
                               :pretty-print    false}}]}
  :aliases {"uberapp-linux" ["shell" "electron-packager" "." "horaro" "--platform=linux" "--arch=x64" "--electron-version=1.6.11"]
            "uberapp-win32" ["shell" "electron-packager" "." "horaro" "--platform=win32" "--arch=x64" "--electron-version=1.6.6"]}

  )
