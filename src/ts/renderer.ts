// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

require("../icon.ico")
require("../index.html")
require("../scss/style.scss")

import Vue from "vue"
import App from "./components/App.vue"

new Vue({
	el: "#app",
	template: "<App/>",
	components: { App }
})

