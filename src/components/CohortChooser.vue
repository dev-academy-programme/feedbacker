<template>
  <div class="cohort-chooser">
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'cohort-chooser',
  computed: {
    count: () => store.state.msg
  }
}
</script>

<style scoped>
div {
  background-color: cornflowerblue;
}
</style>
