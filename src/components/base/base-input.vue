<template>
  <el-input placeholder="请输入密码" show-password v-model="value"></el-input>
  <div>{{ value }}</div>
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