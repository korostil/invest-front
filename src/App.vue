<template>
  <router-view>
    <SharesList />
  </router-view>
</template>

<script>
import SharesList from './components/ShareList.vue';

export default {
  name: 'App',
  components: {
    SharesList,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
