import Button from "./button";

const components = [Button];
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

export { Button };
