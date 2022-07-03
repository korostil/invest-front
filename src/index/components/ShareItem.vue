<script setup>
const props = defineProps({
  share: Object,
});
</script>

<template>
  <li class="share">
    <span class="ticker">
      <router-link :to="{ name: 'share', params: { ticker: share.ticker } }">
        {{ share.ticker }}
      </router-link>
    </span>
    {{ share.title }}
  </li>
</template>
