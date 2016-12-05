<template>
  <div id="app">
    <cohort-chooser></cohort-chooser>
  </div>
</template>

<script>
import CohortChooser from './components/CohortChooser'

export default {
  name: 'app',
  components: {
    CohortChooser
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
