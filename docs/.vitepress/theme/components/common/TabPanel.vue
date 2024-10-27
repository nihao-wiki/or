<script lang="ts" setup>
import { inject, onMounted, onBeforeUnmount, ref, watch, defineProps } from 'vue';

const { title } = defineProps({ title: String });
const index = ref<number>();
const isActive = ref<boolean>(false);

const selectedIndex = inject<any>('selectedIndex');
const registerTab = inject<any>('registerTab');
const unregisterTab = inject<any>('unregisterTab');

const tab = {
  title,
  isActive,
};

onMounted(() => {
  index.value = registerTab(tab);
  isActive.value = selectedIndex.value === index.value;
});

onBeforeUnmount(() => {
  unregisterTab(tab);
});

watch(selectedIndex, (newIndex: number) => {
  isActive.value = newIndex === index.value;
});
</script>

<template>
  <div v-if="isActive" class="tab-panel">
    <slot></slot>
  </div>
</template>

<style scoped>
.tab-panel {
  padding: 20px;
}
</style>
