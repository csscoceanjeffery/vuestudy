import Vue from "vue";
import App from "./app.vue";
import router from "../src/router"
import print from "./print"

print();
new Vue({
    el: '#app',
    router,
    render: h => h(App)
});

if (module.hot) {
    module.hot.accept("./print.js", function() {
        console.log("接收更新后的模块");
        print();
    });
}

let p = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve("done");
    }, 1000);
});
p.then(res => {
    console.log(res);
});