<script setup>
import Currency from './Currency.vue';
</script>

<template>
  <div class="container">
    <Currency />
  </div>
</template>

<style scoped>
.container {
  margin: 0 0 0 16px;
}

@media (max-width: 768px) {
  .container {
    display: none;
  }
}
</style>
