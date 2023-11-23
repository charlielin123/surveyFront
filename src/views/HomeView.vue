<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import { RouterLink, RouterView } from 'vue-router';
import {ref} from 'vue';
const test=ref('')
</script>

<template>
  <button @click="test='test123'">test123</button>
  {{ test }}
  <RouterLink :to="{ name: 'survey' }">link</RouterLink>
  <main>
    <TheWelcome />
  </main>
</template>
