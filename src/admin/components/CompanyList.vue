<script setup>
import { computed, reactive, ref, watch } from 'vue';
import CompanyItem from '@/admin/components/CompanyItem';
import EmptyList from '@/admin/components/EmptyList';
import { companies } from '@/index/store/data';

const search_text = ref('');
const test_data = reactive(companies);
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
const filteredCompanies = computed(() => {
  const foundCompanies = test_data.filter(company =>
    company.title.toLowerCase().includes(search_text.value.toLowerCase()),
  );
  return foundCompanies.slice(start.value, end.value);
});
const isCompanyListNotEmpty = computed(() => {
  return filteredCompanies.value.length > 0;
});
const hasNextPage = computed(() => {
  return filteredCompanies.value.length >= end.value;
});
const hasPreviousPage = computed(() => {
  return page.value > 1;
});

watch(search_text, () => {
  page.value = 1;
  history.pushState(
    null,
    document.title,
    `${window.location.pathname}?search_text=${search_text.value}&page=${page.value}`,
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
  <ul v-if="isCompanyListNotEmpty">
    <CompanyItem
      v-for="company of filteredCompanies"
      :company="company"
      :key="company.id"
    />
  </ul>
  <EmptyList v-else />
  <div>
    <router-link
      :to="{ name: 'create company page', params: { company: null } }"
    >
      Добавить компанию
    </router-link>
    <button @click="page = page - 1" v-if="hasPreviousPage">Назад</button>
    <button @click="page = page + 1" v-if="hasNextPage">Вперед</button>
  </div>
</template>
