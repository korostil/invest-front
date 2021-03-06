<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
// import ShareList from '@/components/ShareList'
export default {
  name: 'App',

  components: {
    // ShareList
  }
}
</script>

<style>
@import './assets/styles/bootstrap.min.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0 auto;
  max-width: 1024px;
}
html {
  font-size: 20px;
}
</style>
