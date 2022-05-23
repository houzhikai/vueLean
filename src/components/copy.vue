<template>
  <el-button type="text" :aria-label="label" :data-clipboard-text="label" class="btn">
    <el-tooltip :label="label"  :content="label" placement="top" :disabled="disabled ">
      <span class="content">{{label}}</span>
    </el-tooltip>
  </el-button>
</template>

<script>
import Clipboard from 'clipboard'
export default {
  name: 'CopyPage',
  props: {
    label: { type: String, default: '复制' },
    disabled: Boolean
  },
  mounted () {
    const clipboard = new Clipboard('.btn')
    clipboard.on('success', () => {
      this.$message({message: '复制成功！', type: 'success'})
    })
  }

}
</script>

<style>
.btn{
  color: #409eff;
}
.content{
  display: inline-block;
  max-width: 200px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

}
</style>
