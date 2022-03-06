import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import hljs from "highlight.js";
import "highlight.js/styles/color-brewer.css";
let app = createApp(App);
app.directive("highlight", function (el) {
  console.log(123);
  let blocks = el.querySelectorAll("pre code");
  blocks.forEach((block) => {
    hljs.highlightBlock(block);
  });
});
app.use(ElementPlus).use(router).mount("#app");
