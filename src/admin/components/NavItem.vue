<script setup>
defineProps({ title: String, routerName: String });
</script>

<template>
  <div>
    <router-link :to="{ name: routerName }">
      {{ title }}
    </router-link>
  </div>
</template>
