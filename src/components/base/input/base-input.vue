<template>
  <el-input
    placeholder="请输入账户"
    v-model="value"
    clearable
    prefix-icon="el-icon-user"
  ></el-input>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "BaseInput",
  setup() {
    const value = ref("");
    return {
      value,
    };
  },
});
</script>