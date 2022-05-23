<template>
<!-- 样式组件 -->
  <el-form class="form"></el-form>
</template>

<script>
export default {
  name: 'FormPage',
  props: {
    title: String
  }
}
</script>
<style>
.form {
  margin: 20px 8px;
  background: white;
  padding: 20px;
}
</style>
