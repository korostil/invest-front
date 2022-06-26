<script setup>
import ShareItem from '@/components/ShareItem';
import { ref } from 'vue';
import { shares as test_data } from '@/store/data';

const search_text = ref('');

function filteredShares() {
  let search_str = search_text.value.toLowerCase(),
    shares = Object.assign([], test_data);

  return shares.filter(
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
      <ShareItem
        :share="share"
        v-for="share of filteredShares()"
        :key="share.id"
      />
    </ul>
  </div>
</template>
