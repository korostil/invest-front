<script setup>
import { ref, watch } from 'vue';
import ShareItem from '@/components/ShareItem';
import { shares as test_data } from '@/store/data';

const search_text = ref('');
let page = ref(1);
let hasNextPage = ref(true);

function filteredShares() {
  const start = (page.value - 1) * 2,
    end = page.value * 2;

  let search_str = search_text.value.toLowerCase(),
    shares = Object.assign([], test_data);

  const filteredShares = shares.filter(
    share =>
      share.title.toLowerCase().includes(search_str) ||
      share.ticker.toLowerCase().includes(search_str),
  );

  hasNextPage.value = filteredShares.length > end;

  return filteredShares.slice(start, end);
}

watch(search_text, () => {
  page.value = 1;
});
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
  <div>
    <button @click="page = page - 1" v-if="page > 1">Назад</button>
    <button @click="page = page + 1" v-if="hasNextPage">Вперед</button>
  </div>
</template>
