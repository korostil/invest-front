<script setup></script>

<template>
  <div>
    <router-link :to="{ name: 'admin homepage' }"> Admin </router-link>
  </div>
  <div>
    <router-link :to="{ name: 'admin companies page' }">
      Companies
    </router-link>
  </div>
  <router-view name="content" />
</template>
