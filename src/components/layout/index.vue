<template>
  <el-container>
    <el-aside>
      <el-menu
        backgroundColor="#001529"
        activeTextColor="#ff6a00"
        text-color="#a6aaae"
        :unique-opened="true"
        style="height: 100vh; width: 200px"
        :collapse="isCollapse"
      >
        <div class="project">
          <i
            class="el-icon-s-help"
            style=" background: white;  border-radius: 50%;  font-size: 20px;  margin-right: 8px; "
          />
          <div class="title">智能操作平台</div>
        </div>
        <MenuItems v-for="item in menus" :key="item.code" :value="item" />
      </el-menu>
    </el-aside>
    <el-main>
      <Header @toggleCollapse="toggleCollapse" />
      <div style="flex: 1; overflow-y: auto; padding: 20px;">
      <transition name="fade-transform" mode="out-in" >
        <keep-alive :exclude="noCaches">
          <router-view :key="key" />
        </keep-alive>
      </transition>
      </div>
      <Footer />
    </el-main>
  </el-container>
</template>
<script>
import MenuItems from './menuItems.vue'
import menus from './menus'
import Header from './Header.vue'
import Footer from './Footer.vue'
export default {
  name: 'IndexPage',
  components: { MenuItems, Header, Footer },
  data () {
    return {
      isCollapse: true,
      noCaches: [],
      menus
    }
  },
  computed: {
    key () {
      return this.$route.path
    }
  },
  methods: {
    toggleCollapse (value) {
      this.isCollapse = value
    }
  }
}
</script>
<style scoped>
.el-container {
  height: 100%;
}
.el-aside {
  background: white;
  overflow: hidden;
  width: 200px !important;
}
.el-main {
  padding: 0;
  background: #f0f2f5;
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.title {
  color: #fff;
  font-size: 20px;
  vertical-align: middle;
  text-align: center;
  line-height: 47px;
}
.project {
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #666;
  padding: 6px 0;
}
</style>
