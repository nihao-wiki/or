<script setup>
import useCurrency from '../hooks/useCurrency';

const slots = defineSlots();
const { formattedAmount } = useCurrency(slots?.default?.()?.[0]?.children || 0);
</script>

<template>
  {{ formattedAmount}}
</template>
