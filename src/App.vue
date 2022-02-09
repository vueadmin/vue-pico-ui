<template>
  <div class="grid">
    <PicoTable :data="tableData" :option="optionData" stripe>
      <template slot-scope="scope">
        <PicoButton @click="handleEdit(scope.row)">编辑</PicoButton>
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
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
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
