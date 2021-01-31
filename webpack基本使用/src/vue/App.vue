<template>
  <div>
    <h2 class="title">{{ message }}</h2>
    <button @click="btnclick">按钮</button>
    <cpn />
  </div>
</template>

<script>
import Cpn from "./Cpn.vue";

export default {
  data() {
    return {
      message: "我是实例",
    };
  },
  methods: {
    btnclick() {
      console.log("hhhhh");
    },
  },
  components: {
    Cpn,
  },
};
</script>

<style>
.title {
  color: green;
}
</style>