<script setup>
import { companies as test_data } from '@/store/data';

function getCompanyById(pk) {
  let companies = Object.assign([], test_data);
  let company = companies.find(company => {
    return company.id === pk;
  });
  return company.title;
}
</script>

<template>
  <h1>{{ getCompanyById(parseInt(this.$route.params.company)) }}</h1>
  <input placeholder="Описание" />
  <button>Сохранить</button>
</template>
