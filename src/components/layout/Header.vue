<template>
  <div class="wrapper">
    <div>
        <i class="el-icon-s-fold" v-if="isCollapse" @click="toggleMenu(true)" style="font-size: 40px;cursor: pointer;" />
        <i class="el-icon-s-unfold" v-else  @click="toggleMenu(false)" style="font-size: 40px;cursor: pointer;" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderPage',
  props: {
    isCollapse: Boolean
  },
  data () {
    return {
      // isCollapse: true
    }
  },
  methods: {
    toggleMenu (value) {
      this.$emit('toggleCollapse', value)
      setTimeout(() => {
        this.isCollapse = !this.isCollapse
      }, 200)
    }
  }
}
</script>
<style scoped>
.wrapper {
  height: 60px;
  background: white;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #999;
}
</style>
