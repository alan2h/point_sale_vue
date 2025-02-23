<script setup>
import { RouterLink } from 'vue-router'
import LinkView from '@/components/LinkComponent.vue'
import LogoView from './LogoView.vue';
</script>
<template>
  <header class="px-10 py-5 bg-gray-700 flex justify-between absolute top-0 w-full z-10">
    <LogoView />
    <nav>
      <router-link class="rounded text-white font-bold p-2" :to="{name: 'products'}" > Productos </router-link>
      <LinkView to="shop">Ir a tienda</LinkView>
    </nav>
  </header>
</template>
<style scoped></style>
