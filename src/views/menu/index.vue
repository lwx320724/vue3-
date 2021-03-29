<template>
  <el-container>
    <el-aside width="210px">
      <el-menu
        default-active="1-4-1"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        background-color="#153B63"
        text-color="#fff"
      >
        <el-submenu index="1">
          <template #title>
            <i class="el-icon-location"></i>
            <span>棋类</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1" @click="toPage"> 数独 </el-menu-item>
            <!-- <el-menu-item index="1-2">选项2</el-menu-item> -->
          </el-menu-item-group>
        </el-submenu>
        <!-- <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <template #title>导航二</template>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <template #title>导航三</template>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <template #title>导航四</template>
        </el-menu-item> -->
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
          <el-radio-button :label="false">展开</el-radio-button>
          <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>
<script lang="ts">
import { useRouter } from "vue-router";
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const router = useRouter();
    const isCollapse = ref(false);
    const toPage = () => {
      router.push("/home/grid");
    };
    return {
      isCollapse,
      toPage,
    };
  },
});
</script>
<style scoped>
.el-container {
  width: 100%;
  height: 100vh;
  padding: 0;
  margin: 0;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  height: 100%;
}

.el-aside {
  background-color: #153b63;
  color: #333;
  text-align: center;
  height: 100vh;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  height: 100%;
}

a {
  color: white;
  text-decoration: none;
}
</style>