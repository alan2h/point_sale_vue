<script setup>
import LinkView from '@/components/LinkComponent.vue'
</script>
<template>
  <LinkView to="products">Volver a admin</LinkView>
  <h1 class="text-4xl font-black my-10">Nuevo producto</h1>
  <div class="flex justify-center bg-white shadow">
    <div class="mt-10 p-10 w-full 2xl:w-2/4">
      <FormKit type="form" submit-label="Crear producto">
        <FormKit type="text" :validation-messages="{required: 'Nombre del producto es obligatorio'}" label="Nombre" name="name" placeholder="Nombre de producto" validation="required"  />
        <FormKit type="file" :validation-messages="{required: 'Nombre del producto es obligatorio'}" label="Nombre" name="image" placeholder="Imagen del producto" validation="required"  />
      </FormKit>

    </div>
  </div>
</template>
<style scoped></style>
