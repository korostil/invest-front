<script setup>
import { companies as test_data } from '@/index/store/data';

function getCompanyById(pk) {
  let companies = Object.assign([], test_data);
  let company = companies.find(company => {
    return company.id === pk;
  });
  if (!company) {
    return '';
  }
  return company.title;
}
</script>

<template>
  <h1 v-if="this.$route.params.company">
    {{ getCompanyById(parseInt(this.$route.params.company)) }}
  </h1>
  <input v-else placeholder="Название" />
  <input placeholder="Описание" />
  <button>Сохранить</button>
</template>
