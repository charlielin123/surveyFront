<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <RouterLink :to="{ name: 'survey' }">link</RouterLink>
  <main>
    <TheWelcome />
  </main>
</template>
