<script setup>
import { ref } from 'vue';
import ShareItem from '@/components/ShareItem';

const test_data = [
  { id: 1, title: 'Tesla', ticker: 'TSLA' },
  { id: 2, title: 'Yandex', ticker: 'YNDX' },
  { id: 3, title: 'Yandex', ticker: 'YNDXD' },
];
const shares = ref(Object.assign([], test_data));
const search_text = ref();
function search() {
  let search_str = search_text.value.toLowerCase(),
    shares_list = Object.assign([], test_data);
  shares.value = shares_list.filter(
    share =>
      share.title.toLowerCase().includes(search_str) ||
      share.ticker.toLowerCase().includes(search_str),
  );
}
</script>

<template>
  <div>
    <input
      v-model="search_text"
      placeholder="Введите название или тикер инструмента"
    />
    <button @click="search">Искать</button>
  </div>
  <div>
    <ul>
      <ShareItem :share="share" v-for="share of shares" :key="share.id" />
    </ul>
  </div>
</template>
