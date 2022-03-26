import Dialog from "./src/main";

Dialog.install = (vue) => {
  vue.component(Dialog.name, Dialog);
};

export default Dialog;
