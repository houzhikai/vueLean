<template>
  <el-breadcrumb separator-class="el-icon-arrow-right" >
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item v-for="(item,index) in list" :key="item" >{{list[index]}}</el-breadcrumb-item>
</el-breadcrumb>
</template>

<script>
export default {
  name: 'BreadcrumbComponent',
  props: {
    list: Array
  }
}
</script>

<style>
</style>
