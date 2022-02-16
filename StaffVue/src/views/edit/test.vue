<template>
  <div class="select-box _r_select_my_use" @click="activeFn">
    <div class="line">
      <div class="label _r_select_my_use">{{ label }}</div>
      <div class="select-right _r_select_my_use" :class="[active ? 'active' : '', txt ? '' : 'gray']">
        {{ txt ? txt : placeholder }}
      </div>
      <div class="list _r_select_my_use" v-if="active">
        <div class="select-part _r_select_my_use" v-for="(item, index) in list" :key="index" @click="chooseFn(item)">
          {{ item }}
        </div>
      </div>
    </div>
    <div class="line">
      <div class="label _r_select_my_use">{{ label }}</div>
      <div class="select-right _r_select_my_use" :class="[active ? 'active' : '', txt ? '' : 'gray']">
        {{ txt ? txt : placeholder }}
      </div>
      <div class="list _r_select_my_use" v-if="active">
        <div class="select-part _r_select_my_use" v-for="(item, index) in list" :key="index" @click="chooseFn(item)">
          {{ item }}
        </div>
      </div>
    </div>
    <div class="line">
      <div class="label _r_select_my_use">{{ label }}</div>
      <div class="select-right _r_select_my_use" :class="[active ? 'active' : '', txt ? '' : 'gray']">
        {{ txt ? txt : placeholder }}
      </div>
      <div class="list _r_select_my_use" v-if="active">
        <div class="select-part _r_select_my_use" v-for="(item, index) in list" :key="index" @click="chooseFn(item)">
          {{ item }}
        </div>
      </div>
    </div>
    <div class="line">
      <div class="label _r_select_my_use">{{ label }}</div>
      <div class="select-right _r_select_my_use" :class="[active ? 'active' : '', txt ? '' : 'gray']">
        {{ txt ? txt : placeholder }}
      </div>
      <div class="list _r_select_my_use" v-if="active">
        <div class="select-part _r_select_my_use" v-for="(item, index) in list" :key="index" @click="chooseFn(item)">
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
let _active_select_index = 0 // 全局计数器，所有组件都用。 点击+1， 最高的是当前组件。其他组件关闭弹窗
export default {
  name: 'my-select',
  props: {
    label: {
      type: String,
      default: 'label'
    },
    list: {
      type: Array,
      default: () => ['值1', '值2', '值3']
    },
    defTxt: {
      type: String,
      default: '默认值'
    },
    placeholder: {
      type: String,
      default: '输入值'
    }
  },
  // props: ['label', 'list', 'defTxt', 'placeholder'],
  components: {},
  data() {
    return {
      txt: this.defTxt || null,
      active: false, // 弹窗是否展示
      active_select_index: 0, // 当前组件计数器
      eventFn: e => {
        const className = e.target.className
        // 如果不是最高层级的组件 关闭弹窗
        if (this.active_select_index !== _active_select_index) {
          this.active = false
        }
        // 如果有_r_select_my_use类名 点击的不是该组件 需要关闭弹窗
        if (className.indexOf('_r_select_my_use') === -1) {
          this.active = false
        }
      }
    }
  },
  computed: {},
  created() {},
  mounted() {
    document.addEventListener('click', this.eventFn)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.eventFn)
  },
  methods: {
    activeFn() {
      // 点击组件 弹窗显示隐藏
      this.active = !this.active

      // 全局计数器+1
      _active_select_index += 1

      // 当前组件计数器 赋值
      this.active_select_index = _active_select_index
    },
    chooseFn(obj) {
      this.txt = obj.value
      this.$emit('chooseFn', obj)
    }
  }
}
</script>

<style lang="scss" scoped>
.select-box {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  .line {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .select-right {
    position: relative;
    padding-right: 50px;
    cursor: pointer;
    &::after {
      content: '';
      position: absolute;
      width: 34px;
      height: 34px;
      right: 0;
      top: -5px;
      background: url('../../assets/image/arrow_down.png') center/100% no-repeat;
    }
    &.active::after {
      background: url('../../assets/image/arrow_down.png') center/100% no-repeat;
    }
    &.gray {
      color: #a8a8a8;
    }
  }
  .list {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    max-height: 200px;
    transform: translateY(100%);
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
    overflow-y: auto;
    z-index: 9;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
    .select-part {
      height: 67px;
      line-height: 67px;
      text-align: center;
      background-color: #f9f9f9;
      color: #434343;
      font-size: 16px;
      &:hover {
        background-color: #fff;
      }
    }
  }
}
</style>
