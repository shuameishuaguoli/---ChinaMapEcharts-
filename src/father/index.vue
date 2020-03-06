<template>
  <div class="father">
      我是父组件
        <span>{{ jieguolai }}</span>
      <Son 
        :par="message" 
        :par1="message1" 
        :par2="message3"
        :par3="message4"
        @xiugai1 = "xiugai"
        @xiugai2 = "dbclick"
        @chuan = "chuan"
        @chuan2 = "chuan1"
        ></Son>
        <Sister></Sister>
        <!-- <button @click="onClick">获取疫情数据</button> -->
  </div>
</template>

<script>
import Son from '../son/'
import Sister from '../sister/'
export default {
    components:{
        Son,
        Sister
    },
  data () {
    return {
        message:'父组件数据',
        message1:'周杰伦',
        message3:['康辉','撒贝尼','朱广权','尼格买提'],
        message4:{
            name:'朱迅',
            age:29,
            sex:'女'
        },
        jieguolai:'123',
        jieguolai1:'456'
    }
  },
  methods: {
    xiugai(){
        this.message = '父组件数据被修改了'
    },
    dbclick(){
        this.message = '又回来了'
    },
    chuan(abc){
        this.jieguolai = abc
    },
    chuan1(abc){
        this.jieguolai1 = abc
    },
    //   获取疫情数据的方法
    onClick(){
       console.log('二个');
        
    }
  },
}
</script>

<style>
    .father{
        width: 300px;
        height: 300px;
        border: 1px solid red;
    }
</style>