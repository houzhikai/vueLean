<template>
  <div>
    <!-- <FormPage title="首页form实例"></FormPage> -->
    <Breadcrumb :list="list"/>
  </div>
</template>

<script>
import FormPage from '../../components/formPage.vue'
import Breadcrumb from '../../components/breadcrumb.vue'
export default {
  name: 'HomePage',
  components: { FormPage, Breadcrumb },
  data () {
    return {
      list: [
        '我的首页'
      ]
    }
  }
}
</script>
<style scoped>

</style>
