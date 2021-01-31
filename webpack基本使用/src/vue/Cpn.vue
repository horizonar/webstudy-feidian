<template>
  <div>
    <h2 class="title">{{ name }}</h2>
    <p>我是子组件cpn</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "魏朝晖",
    };
  },
};
</script>

<style>
.title {
  color: red;
}
</style>