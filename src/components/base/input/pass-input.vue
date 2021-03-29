<template>
  <el-input
    placeholder="请输入密码"
    show-password
    v-model="value"
    clearable
    prefix-icon="el-icon-postcard"
    validate-event
  ></el-input>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "PassInput",
  setup() {
    const value = ref("");
    return {
      value,
    };
  },
});
</script>