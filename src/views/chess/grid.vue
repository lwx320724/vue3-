<template>
  <h2>数独</h2>
  <br />
  <div class="chess">
    <div v-for="(item, line) in table" :key="line" class="gridLine">
      <div v-for="(i, row) in item" :key="row" class="grid">
        <span v-if="i">{{ i }}</span>
        <input
          type="text"
          v-else
          style="width: 40px; height: 40px; text-align: center"
          @change="(el) => writeValue(line, row, el)"
        />
      </div>
    </div>
  </div>
  <br />
  <br />
  <el-button type="primary" @click="verification">验证</el-button>
  <el-button type="primary" @click="solve">提示</el-button>
</template>
<script lang="ts">
import { defineComponent, ref, unref } from "vue";
import { ElMessage } from "element-plus";
import findAnswer from "./grid";
export default defineComponent({
  setup() {
    const table = ref([
      [8, 0, 0, 0, 0, 0, 0, 0, 4],
      [0, 0, 0, 0, 7, 0, 0, 0, 3],
      [0, 0, 0, 0, 5, 0, 0, 6, 0],
      [2, 0, 9, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 6, 0, 0, 0],
      [0, 0, 0, 0, 0, 7, 6, 9, 0],
      [0, 2, 0, 3, 9, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 4, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]);
    const newTable = unref(table);
    const writeValue = (line, row, el) => {
      newTable[line][row] = el.target.value * 1;
    };
    const solve = () => {
      const res = findAnswer.findAnswer(unref(table));
      table.value = res;
    };
    const verification = () => {
      const data = newTable;
      const res = findAnswer.verification(data);
      //   console.log(res);
      if (res) {
        ElMessage.success({
          message: "你可真棒！！！！！",
          type: "success",
        });
      } else {
        ElMessage.error("你真菜。。。");
      }
    };
    return {
      table,
      writeValue,
      solve,
      verification,
    };
  },
});
</script>
<style lang="less" scoped>
.chess {
  width: 360px;
  margin: 0 auto;
}
.gridLine {
  display: flex;
  .grid {
    width: 40px;
    height: 40px;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      color: red;
    }
  }
}
</style>