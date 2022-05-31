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
