import Table from './src/main.vue';

Table.install = (vue) => {
    vue.component(Table.name, Table);
};

export default Table;