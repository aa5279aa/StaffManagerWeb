<template>
  <div>
    <span>软件更新</span>
    <uiType0 title="type0，传入的内容" idx="0" @message="getMessage"></uiType0>
    <uiType22 title="type1，档位信息选择" :selects="selector1" @childByValue="childByVlaue"></uiType22>
    <uiType2 title="type2，档位信息单一选择" :selects="selector0"></uiType2>
    <uiType1 title="type3，名称title" value="值value很长很长很长啊"></uiType1>
    <uiType7 :dataList="dataList" ref="uiType7"></uiType7>
    <button @click="submit">提交</button>
  </div>
</template>

<script>
import uiType0 from '../uiType/uiType0'
import uiType22 from '../uiType/uiType22'
import uiType2 from '../uiType/uiType2'
import uiType1 from '../uiType/uiType1'
import uiType7 from '../uiType/uiType7'

export default {
  components: {
    uiType0,
    uiType22,
    uiType2,
    uiType1,
    uiType7
  },
  data() {
    return {
      msg: 'wwwww',
      selector0: ['值1'],
      selector1: ['值1', '值2', '值3'],
      dataList: [
        { name: '轨压传感器1', desc: '轨压传感器描述', status: true, isChecked: false },
        {
          name: '轨压传2',
          desc: '轨压传感器描述特别长的字符串特别长的字符串特别长的字符串特别长的字符串特别长的字符串特别长的字符串特别长的字符串特别长的字符串特别长的字符串特别长的字符串特别长的字符串特别长的字符串',
          status: true,
          isChecked: true
        },
        { name: '轨传感器3', desc: '轨压传感器描述', status: false, isChecked: false }
      ]
    }
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    childByValue(childValue) {
      console.log(childValue)
    },
    getMessage(val) {
      alert(val)
    },
    submit() {
      var uiType = this.$refs.uiType7
      console.log(JSON.stringify(uiType.getData()))
    }
  }
}
</script>

<style lang="scss" scoped></style>
