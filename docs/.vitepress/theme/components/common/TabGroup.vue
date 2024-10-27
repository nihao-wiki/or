<script lang="ts" setup>
import { provide, ref, watch } from 'vue';

const selectedIndex = ref(0);
const tabs = ref<Array<{ isActive: boolean }>>([]);

const selectTab = (index) => {
  selectedIndex.value = index;
};

const registerTab = (tab) => {
  tabs.value.push(tab);
  return tabs.value.length - 1;
};

const unregisterTab = (tab) => {
  tabs.value = tabs.value.filter((t) => t !== tab);
};

provide('selectedIndex', selectedIndex);
provide('registerTab', registerTab);
provide('unregisterTab', unregisterTab);

watch(selectedIndex, (newIndex) => {
  tabs.value.forEach((tab, index) => {
    if (index === newIndex) {
      tab.isActive = true;
    } else {
      tab.isActive = false;
    }
  });
});
</script>

<template>
  <div class="tab-group">
    <div class="tab-header">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        :class="{ active: selectedIndex === index }"
        @click="selectTab(index)"
      >
        {{ tab.title }}
      </button>
    </div>
    <div class="tab-content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.tab-group {
  width: 100%;
}

.tab-header {
  display: flex;
}

.tab-header button {
  padding: 10px 20px;
  cursor: pointer;
  border: none;
  background: none;
  font-size: 16px;
  font-weight: bold;
  color: var(--vp-c-text-1);
  margin-right: 5px;
  border-bottom: 2px solid transparent;
}

.tab-header button.active {
  border-bottom: 2px solid var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.tab-content {
  padding: 0;
}
</style>
