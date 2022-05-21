<template>
  <div id="app">
    <Layout />
  </div>
</template>

<script>
import Layout from './components/layout/index.vue'
export default {
  name: 'AppPage',
  components: { Layout },
  data () {
    return {
      isCollapse: true
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    toTest () {
      this.$router.push('/test')
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}
</style>
