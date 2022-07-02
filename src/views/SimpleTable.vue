<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="date" label="日期" width="180"> </el-table-column>
    <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
    <el-table-column prop="address" label="地址" width="250">
      <template v-slot="value">
        <overflow-tooltip
          :content="value.row.address"
          :autoEnterable="true"
          placement="top-start"
          popperClass="simple-table-popper"
        ></overflow-tooltip>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import OverflowTooltip from "../components/OverflowTooltip.vue"

export default {
  components: { OverflowTooltip },
  data() {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'.repeat(4),
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'.repeat(20),
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'.repeat(600),
        },
      ],
    }
  },
}
</script>
