import Collapse from './src/main';

Collapse.install = (vue) => {
    vue.component(Collapse.name, Collapse);
};

export default Collapse;