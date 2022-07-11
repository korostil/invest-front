<script setup>
import { computed, reactive, ref, watch } from 'vue';
import EmptyList from '@/admin/components/EmptyList';
import ShareItem from '@/index/components/ShareItem';
import { shares } from '@/index/store/data';

const search_text = ref('');
const test_data = reactive(shares);
let page = ref(1);

const windowData = Object.fromEntries(
  new URL(window.location).searchParams.entries(),
);
if (windowData.search_text) {
  search_text.value = windowData.search_text;
}
if (windowData.page) {
  page.value = parseInt(windowData.page);
}

const start = computed(() => {
  return (page.value - 1) * 2;
});
const end = computed(() => {
  return page.value * 2;
});
const filteredShares = computed(() => {
  let search_str = search_text.value.toLowerCase();

  const foundShares = test_data.filter(
    share =>
      share.title.toLowerCase().includes(search_str) ||
      share.ticker.toLowerCase().includes(search_str),
  );

  return foundShares.slice(start.value, end.value);
});
const isShareListNotEmpty = computed(() => {
  return filteredShares.value.length > 0;
});
const hasNextPage = computed(() => {
  return filteredShares.value.length >= end.value;
});
const hasPreviousPage = computed(() => {
  return page.value > 1;
});

watch(search_text, () => {
  page.value = 1;
  history.pushState(
    null,
    document.title,
    `${window.location.pathname}?search_text=${search_text.value}`,
  );
});
watch(page, () => {
  history.pushState(
    null,
    document.title,
    `${window.location.pathname}?search_text=${search_text.value}&page=${page.value}`,
  );
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
  <ul v-if="isShareListNotEmpty">
    <ShareItem v-for="share of filteredShares" :share="share" :key="share.id" />
  </ul>
  <EmptyList v-else />
  <div>
    <button @click="page = page - 1" v-if="hasPreviousPage">Назад</button>
    <button @click="page = page + 1" v-if="hasNextPage">Вперед</button>
  </div>
</template>
