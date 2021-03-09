<template>
  <h1>{{ msg }}</h1>
  <button @click="clickChild">count is: {{ count }}</button>
  <FooterTips/>
</template>

<script>
import FooterTips from './footerTips.vue'

export default {
  name: "Footer",
  props: {
    msg: String,
  },
  components: {
    FooterTips,
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    clickChild() {
      this.count++;
      this.$emit("update:msg", "改变后");
      console.log(this.$parent.tips);
    },
  },
};
</script>
