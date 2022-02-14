import Progress from "./src/main.vue";

Progress.install = (vue) => {
  vue.component(Progress.name, Progress);
};

export default Progress;
