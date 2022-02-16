<template>
  <div id="app">
    <top-bar v-if="$route.name !== 'login'"></top-bar>
    <router-view style="flex: 1" />
  </div>
</template>
<script>
import TopBar from './components/TopBar'
export default {
  components: { TopBar }
}
</script>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
}
.btn-primary {
  background-color: #0062ff;
  color: #fff;
  &:hover {
    background-color: #3381ff;
  }
  &:active {
    background-color: #004ecc;
  }
  &:focus {
    background-color: #004ecc;
  }
}
.btn-primary-outline {
  border: 1px solid #0062ff;
  background-color: #fff;
  &:hover {
    background-color: #eff4ff;
  }
  &:active {
    background-color: #b1cdff;
  }
  &:focus {
    background-color: #b1cdff;
  }
}

.small-btn {
  border: 1px solid #6b7588;
  background-color: #f0f2f5;
  border-radius: 3px;
  &:hover {
    background-color: #d7d9dc;
  }
  &:active {
    background-color: #c0c1c4;
  }
  &:focus {
    background-color: #c0c1c4;
  }
}
</style>
