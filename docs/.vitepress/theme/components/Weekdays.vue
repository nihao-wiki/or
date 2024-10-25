<script setup>
import { computed } from 'vue';
const props = defineProps(['arrival', 'departure']);

const week = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const nextDay = (i) => (i === 6 ? 0 : i + 1);
const countDays = (i, j) => {
  if (j > i) return j - i + 1;
  if (j < i) return countDays(i, 6) + j + 1;
  return 0;
};
const findLongestPlan = (inWeekdays, outWeekdays) => {
  let length = 0;
  for (let i = 0; i < 7; ++i) {
    if (inWeekdays[i]) {
      for (let j = nextDay(i); j !== i; j = nextDay(j)) {
        if (outWeekdays[j]) {
          length = Math.max(length, countDays(i, j));
          if (length === 7) break;
        }
      }
    }
  }
  return length;
};

const longestPlan = computed(() => findLongestPlan(props.arrival, props.departure));
</script>

<template>
  <div v-if="longestPlan > 0">{{ longestPlan }} days</div>
  <div v-else>infeasible</div>
</template>
