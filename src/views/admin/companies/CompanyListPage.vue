<script setup></script>

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
      <li>
        <router-link
          :to="{ name: 'admin company page', params: { company: 1 } }"
        >
          Great company
        </router-link>
      </li>
      <li>
        <router-link
          :to="{ name: 'admin company page', params: { company: 2 } }"
        >
          Another Great company
        </router-link>
      </li>
    </ul>
  </div>
  <div>
    <button>Назад</button>
    <button>Вперед</button>
  </div>
</template>
