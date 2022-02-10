import Button from "./button";
import Table from "./table";
import Dialog from "./dialog"

const components = [Button, Table, Dialog];

const install = function (Vue) {
  if (install.installed) return;
  install.installed = true;
  components.map((component) => Vue.use(component));
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
export default {
  install,
  ...components,
};

export { Button, Table, Dialog };
