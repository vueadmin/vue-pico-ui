<template>
  <div class="grid">
    <!-- <PicoButton>default</PicoButton>
    <PicoButton type="secondary">secondary</PicoButton>
    <PicoButton type="contrast">contrast</PicoButton>
    <PicoButton outline>default</PicoButton>
    <PicoButton type="secondary" outline>secondary</PicoButton>
    <PicoButton type="contrast" outline>contrast</PicoButton> -->
    <PicoTable :data="tableData" :option="optionData" stripe>
      <template #default="scope">
        <PicoButton @click="handleEdit(scope.row, scope.index)">编辑</PicoButton>
      </template>
    </PicoTable>
  </div>
</template>

<script>
export default {
  data() {
    return {
      optionData: [
        {
          label: "姓名",
          prop: "name",
        },
        {
          label: "日期",
          prop: "date",
        },
        {
          label: "地址",
          prop: "address",
        },
      ],
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎1",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎2",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎3",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎4",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  methods: {
    onClickButton(e) {
      console.log(e);
    },
    handleEdit(e) {
      console.log(e);
    }
  },
};
</script>

<style>
</style>
