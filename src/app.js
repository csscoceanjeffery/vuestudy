import Vue from "vue";
import App from "./app.vue";
import Route from "../router"

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
