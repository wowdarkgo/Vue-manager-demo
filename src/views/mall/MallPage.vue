<template>
<div>
  <h3>{{sum}}</h3>
  <h3>{{this.$store.state.sum}}</h3>
  <h5>测试哈</h5>
</div>
</template>

<script>
export default {
name:"MallPage",
data(){
  return {}
},
computed: {
  sum () {
    return this.$store.state.sum 
  },
},
}
</script>

<style>

</style>