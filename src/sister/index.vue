<template>
  <div class="sister">
      我是兄弟组件
      <span>{{ message }}</span>
        <button @click="onFabu">向son组件发送数据</button>
  </div>
</template>

<script>
// 引入bus文件
import EventBus from '../bus/'
export default {
  data () {
    return {
        message:'',
        message2:'我是Sister组件中的值'
    }
  },
  methods: {
      onFabu(){
          EventBus.$emit('onFaBu',this.message2)
      }
  },
  mounted() {
      EventBus.$on('onFabu',date => {
          this.message = date
      })
  },
}
</script>

<style>
 .sister{
        width: 300px;
        height: 300px;
        border: 1px solid blue;
        margin-left: 660px;
        margin-top: -300px;
    }
</style>