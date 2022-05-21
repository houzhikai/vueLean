<template>
<div>
  <el-submenu v-if="value.children" :index="value.code">
    <template slot="title">
      <i :class="value.icon" />
      <span style="color: #fff">{{ value.description }}</span>
    </template>
    <div v-for="child in children" :key="child.url">
      <el-menu-item v-if="child.url" :index="child.url" @click="select(child)">
        {{ child.description }}
      </el-menu-item>
      <MenuItems v-if="!child.url && children.length > 0" :value="child" />
    </div>
  </el-submenu>
  <el-menu-item v-else :index="value.code" @click="select(value)">
  <i :class="value.icon" />
    {{value.description}}
  </el-menu-item>
  </div>
</template>
<script>
export default {
  name: 'menusItems',
  props: {
    value: Object
  },
  computed: {
    children () {
      if (!this.value.children) {
        return []
      }
      return this.value.children.filter((child) => {
        return child
      })
    }
  },
  methods: {
    select (menu) {
      const keyword = window.location.hash.substring(1)
      if (keyword !== menu.url) {
        this.$router.push(menu.url)
      }
    }
  }
}
</script>
<style scoped>
.el-menu-item.is-active {
  background: #1890ff !important;
  color: white !important;
}
</style>
