<template>
  <div id="line" class="line">

  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  mounted(){
    //   this.$charts.line("line")
    // this.$charts.bing('line')
    this.$charts.chinaMap('line')
  }
}
</script>

<style>
.line{
    height: 400px;
    width: 100%;
    border: 1px solid red;
    margin-top: 20px;
}
</style>