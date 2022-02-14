<template>
  <div class="grid">
    <!-- <PicoButton>default</PicoButton> -->
    <!-- <PicoButton type="secondary">secondary</PicoButton> -->
    <!-- <PicoButton type="contrast">contrast</PicoButton> -->
    <!-- <PicoButton outline>default</PicoButton> -->
    <!-- <PicoButton type="secondary" outline>secondary</PicoButton> -->
    <!-- <PicoButton type="contrast" outline>contrast</PicoButton> -->
    <!-- <PicoTable :data="tableData" :option="optionData" stripe>
      <template #default="scope">
        <PicoButton @click="handleEdit(scope.row, scope.index)"
          >编辑</PicoButton
        >
      </template>
    </PicoTable> -->
    <!-- <PicoDialog title="Modal title demo" :visible.sync="visible">
      <template v-slot:main>
        <PicoTable :data="tableData" :option="optionData">
          <template #default="scope">
            <PicoButton @click="handleEdit(scope.row, scope.index)"
              >编辑</PicoButton
            >
          </template>
        </PicoTable>
      </template>
      <template v-slot:footer>
        <PicoButton @click="handleCloseModal">取消</PicoButton>
        <PicoButton @click="handleCloseModal">提交</PicoButton>
      </template>
    </PicoDialog> -->
    <!-- <PicoButton @click="handleOpenModal">打开</PicoButton> -->
    <!-- <PicoProgress value="95" max="100" indeterminate /> -->
    <!-- <PicoCard>
      <template v-slot:header>
        <PicoButton @click="handleCloseModal">取消</PicoButton>
        <PicoButton @click="handleCloseModal">提交</PicoButton>
      </template>
      <PicoButton @click="handleCloseModal">取消</PicoButton>
      <PicoButton @click="handleCloseModal">提交</PicoButton>
      <template v-slot:footer>
        <PicoButton @click="handleCloseModal">取消</PicoButton>
        <PicoButton @click="handleCloseModal">提交</PicoButton>
      </template>
    </PicoCard> -->
    <PicoCard>
      <PicoCollapse>
        <template v-slot:title>Collapsible elements 1111</template>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          urna diam, tincidunt nec porta sed, auctor id velit. Etiam venenatis
          nisl ut orci consequat, vitae tempus quam commodo. Nulla non mauris
          ipsum. Aliquam eu posuere orci. Nulla convallis lectus rutrum quam
          hendrerit, in facilisis elit sollicitudin. Mauris pulvinar pulvinar
          mi, dictum tristique elit auctor quis. Maecenas ac ipsum ultrices,
          porta turpis sit amet, congue turpis.
        </p>
      </PicoCollapse>
      <PicoCollapse open>
        <template v-slot:title>Collapsible elements 1111</template>
        <ul>
          <li>Vestibulum id elit quis massa interdum sodales.</li>
          <li>Nunc quis eros vel odio pretium tincidunt nec quis neque.</li>
        </ul>
      </PicoCollapse>
    </PicoCard>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
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
          label: "日期",
          prop: "date",
        },
        {
          label: "日期",
          prop: "date",
        },
        {
          label: "日期",
          prop: "date",
        },
        {
          label: "日期",
          prop: "date",
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
    handleEdit(row, index) {
      console.log(row, index);
    },
    handleOpenModal() {
      this.visible = !this.visible;
    },
    handleCloseModal() {
      this.visible = false;
    },
  },
};
</script>

<style></style>
