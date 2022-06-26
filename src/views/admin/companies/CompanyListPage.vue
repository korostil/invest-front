<script setup>
import CompanyItem from '@/views/admin/companies/CompanyItem';
import { ref } from 'vue';
import { companies as test_data } from '@/store/data';

const search_text = ref('');

function filteredCompanies() {
  let search_str = search_text.value.toLowerCase(),
    companies = Object.assign([], test_data);

  return companies.filter(company =>
    company.title.toLowerCase().includes(search_str),
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
      <CompanyItem
        :company="company"
        v-for="company of filteredCompanies()"
        :key="company.id"
      />
    </ul>
  </div>
  <div>
    <button>Назад</button>
    <button>Вперед</button>
  </div>
</template>
