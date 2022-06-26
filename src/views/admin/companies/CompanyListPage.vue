<script setup>
import { ref, watch } from 'vue';
import CompanyItem from '@/views/admin/companies/CompanyItem';
import { companies as test_data } from '@/store/data';

const search_text = ref('');
let page = ref(1);
let hasNextPage = ref(true);

const windowData = Object.fromEntries(
  new URL(window.location).searchParams.entries(),
);
if (windowData.search_text) {
  search_text.value = windowData.search_text;
}
if (windowData.page) {
  page.value = parseInt(windowData.page);
}

function filteredCompanies() {
  const start = (page.value - 1) * 2,
    end = page.value * 2;

  let search_str = search_text.value.toLowerCase(),
    companies = Object.assign([], test_data);

  const filteredCompanies = companies.filter(company =>
    company.title.toLowerCase().includes(search_str),
  );

  hasNextPage.value = filteredCompanies.length > end;

  return filteredCompanies.slice(start, end);
}

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
  <div>
    <ul>
      <CompanyItem
        :company="company"
        v-for="company of filteredCompanies()"
        :key="company.id"
      />
    </ul>
  </div>
  <div>
    <button @click="page = page - 1" v-if="page > 1">Назад</button>
    <button @click="page = page + 1" v-if="hasNextPage">Вперед</button>
  </div>
</template>
