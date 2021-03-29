<template>
  <div class="login-main">
    <el-form :model="ruleForm" ref="ruleForma">
      <el-form-item><h1>请先登录</h1></el-form-item>
      <el-form-item label="账户：" prop="username" :rules="rules.username">
        <el-input
          placeholder="请输入账户"
          v-model="ruleForm.username"
          clearable
          prefix-icon="el-icon-user"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码：" prop="password" :rules="rules.password">
        <el-input
          placeholder="请输入密码"
          show-password
          v-model="ruleForm.password"
          clearable
          prefix-icon="el-icon-postcard"
        ></el-input>
      </el-form-item>
      <el-form-item class="login-btn">
        <el-button type="primary" @click="submitForm">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive, unref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  setup(props) {
    const router = useRouter();
    const ruleForma = ref(null);
    let ruleForm = reactive({ username: "", password: "" });
    const rules = {
      username: [
        { required: true, message: "请输入账户", trigger: "blur" },
        // {
        //   type: "email",
        //   message: "请输入正确的邮箱地址",
        //   trigger: ["blur", "change"],
        // },
      ],
      password: [{ required: true, message: "请输入密码", trigger: "blur" }],
    };
    const submitForm = async () => {
      const form = unref(ruleForma);
      if (!form) return;
      try {
        await form.validate();
        const { username, password } = ruleForm;
        console.log(form, username, password);
        router.push("/home");
      } catch (error) {}
    };
    return {
      ruleForm,
      ruleForma,
      rules,
      submitForm,
    };
  },
});
</script>

<style lang="less" scoped>
.login-main {
  margin: 0 auto;
  margin-top: 100px;
  padding: 30px;
  padding-top: 50px;
  width: 400px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 2px 10px 0 rgb(0 0 0 / 10%);
  .input-label {
    width: 80px;
    text-align: left;
  }
}
h1 {
  margin: 0 auto;
}
/deep/ .el-form-item__content {
  display: flex;
  margin-bottom: 40px;
}
/deep/ .el-button--primary {
  margin: 0 auto;
}
</style>