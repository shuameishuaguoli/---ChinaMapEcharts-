<template>
  <div class="son">
      我是子组件 
      <!-- 子组件中使用父组件中的数据就像使用data中的数据一样，直接使用差值表达式即可 -->
      <p>
          {{ par }}{{ par1 }}
      </p>
      <ul>
          <li v-for="(item,index) in par2" :key="index">
              {{ item }}
          </li>
      </ul>
      <span v-for="(item,index) in par3" :key="index">
          {{item}}
      </span>
      <button @click="xiugai1" @dblclick="dbclick">通知父组件修改值</button>
      <button @click="chuanFather" @dblclick="chuanFather2">给父组件传值</button>
      <!-- 发布组件 -->
      <button @click="fabu"> 向兄弟组件发布信息 </button>
      <span>{{son3}}</span>
  </div>
</template>

<script>
// 引入EventBus文件
import EventBus from '../bus/'
export default {
    // 子组件中使用props来接收par传过来的值
    props:{
        par:{
            // par传过来的类型是type指定的
            type:String,
            // 是否是必传的是require指定的
            require:true
        },
        par1:{
            type:String,
            require:true
        },
        par2:{
            type:Array,
            require:true
        },
        par3:{
            type:Object,
            require:true
        }
    },
  data () {
    return {
        son1 : '我是子组件的值',
        son2 : '我是兄弟组件的值',
        son3 : ''
    }
  },
  mounted() {
      EventBus.$on('onFaBu',date=>{
          this.son3 = date
      })
  },
  methods: {
    //   发布内容的组件方法
      fabu(){
          EventBus.$emit('onFabu',this.son2)
      },
      xiugai1(){
          this.$emit('xiugai1')
      },
      dbclick(){
          this.$emit('xiugai2')
      },
      chuanFather(){
          this.$emit('chuan',this.son1)
      },
      chuanFather2(){
          this.son1 = '更改后的子组件的值'
      }
  },
}
</script>

<style>
    .son{
        width: 300px;
        height: 300px;
        border: 1px solid blue;
        margin-left: 330px;
        margin-top: -20px;
    }
</style>