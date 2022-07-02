<script>
import { defineComponent } from '@vue/composition-api'
import HelloWorld from './components/HelloWorld.vue'
import RawTable from './views/RawTable.vue'
import SimpleTable from './views/SimpleTable.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    SimpleTable,
    RawTable,
  },
})
</script>

<template>
  <div id="app">
    <!-- <img src="@/assets/logo.svg" alt="Vite logo" />
    <HelloWorld msg="Hello Vue 2 + Vite" /> -->
    <h1>表格自带的tooltip</h1>
    <raw-table></raw-table>
    <h1>使用el-tooltip</h1>
    <simple-table></simple-table>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.simple-table-popper {
  max-width: 50vw;
  max-height: 50vh;
  overflow-y: auto;
}
</style>
