<script setup>
import LinkView from '@/components/LinkComponent.vue'
import LogoView from './LogoView.vue';
</script>
<template>
  <header class="px-10 py-5 bg-gray-700 flex justify-between absolute top-0 w-full z-10">
    <LogoView />
    <nav>
      <LinkView to="admin">Administrador</LinkView>
    </nav>
  </header>
</template>
<style scoped></style>
