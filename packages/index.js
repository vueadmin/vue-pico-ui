import Button from "./button";
import Table from "./table";
import Dialog from "./dialog";
import Progress from "./progress";
import Card from "./card";
import Collapse from "./collapse";

const components = [Button, Table, Dialog, Progress, Card, Collapse];

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

export { Button, Table, Dialog, Progress, Card, Collapse };
