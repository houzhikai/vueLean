<template>
  <div class="form">
    <h4>{{title}}</h4>
  </div>
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
h4{
  margin: 0 8px 0;
}
</style>
