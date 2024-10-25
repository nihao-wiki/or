<script setup>
import useCurrency from '../hooks/useCurrency';

const { currency, currencies } = useCurrency();
</script>

<template>
  <select class="select" v-model="currency">
    <option v-for="(c, name) in currencies" :value="name" :key="name">
      {{ c.unit }} - {{ name }}
    </option>
  </select>
</template>

<style scoped>
.select {
  border: 1px solid var(--vp-input-border-color);
  border-radius: 4px;
  padding: 0 4px;
}
</style>
