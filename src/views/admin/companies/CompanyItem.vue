<script setup>
const props = defineProps({
  company: Object,
});
</script>

<template>
  <li>
    <router-link
      :to="{
        name: 'admin company page',
        params: { company: company.id },
      }"
    >
      {{ company.title }}
    </router-link>
  </li>
</template>
