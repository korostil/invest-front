<script setup>
import { ref } from 'vue';
import ShareItem from '@/components/ShareItem';

const shares = ref([
  { id: 1, title: 'Tesla', ticker: 'TSLA' },
  { id: 2, title: 'Yandex', ticker: 'YNDX' },
  { id: 3, title: 'Yandex', ticker: 'YNDXD' },
]);
</script>

<template>
  <div>
    <ul>
      <ShareItem :share="share" v-for="share of shares" :key="share.id" />
    </ul>
  </div>
</template>
