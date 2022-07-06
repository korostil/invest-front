<script setup>
import 'vue-select/dist/vue-select.css';
import { Industries, Sectors } from '@/constants';
import { companies as test_data } from '@/index/store/data';
import vSelect from 'vue-select';

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
  <v-select
    :options="Object.values(Sectors).map(sector => sector.description)"
  ></v-select>
  <v-select
    :options="Object.values(Industries).map(industry => industry.description)"
  ></v-select>
  <button>Сохранить</button>
</template>
