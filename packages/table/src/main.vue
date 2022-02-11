<template>
  <table :role="stripe ? 'grid' : ''">
    <thead>
      <tr>
        <th>#</th>
        <th v-for="(opt, index) in option" :key="index">{{ opt.label }}</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in data" :key="index">
        <th scope="row">{{ index + 1 }}</th>
        <td v-for="(opt, index) in option" :key="index">
          {{ item[opt.prop] }}
        </td>
        <td><slot :row="item" :index="index"></slot></td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th>#</th>
        <td v-for="(opt, index) in option" :key="index">{{ opt.label }}</td>
        <th></th>
      </tr>
    </tfoot>
  </table>
</template>

<script>
export default {
  name: "PicoTable",
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    option: {
      type: Array,
      default: () => [],
    },
    stripe: Boolean,
    item: {},
  },
  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    },
  },
};
</script>
