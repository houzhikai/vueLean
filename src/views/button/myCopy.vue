<template>
  <div>
    <Breadcrumb :list="list" />
    <el-form class="formPage">
      <el-form-item label="11">
        <Copy label="1111112221" />
      </el-form-item>
      <el-form-item label="不提示">
        <Copy :disabled="true"
          label="这是很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的内容"
        />
      </el-form-item>
      <el-form-item label="提示信息">
        <Copy label="这是一条长度适中的内容" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import Breadcrumb from '../../components/breadcrumb.vue'
import Copy from '../../components/copy.vue'
import FormPage from '../../components/formPage.vue'
export default {
  name: 'orderListAll',
  components: { Breadcrumb, Copy, FormPage },
  data () {
    return {
      list: ['按钮', '复制'],
      disabled: false
    }
  }
}
</script>
<style scoped>
.formPage {
  background: white;
  padding: 20px;
  margin-top: 20px;
}
</style>
