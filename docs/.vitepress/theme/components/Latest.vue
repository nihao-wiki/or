<script setup>
import { data } from '../data/pages.data';
const { lastUpdatePage, titleProblemPages } = data;
const title = lastUpdatePage?.title;
const date = lastUpdatePage?.timestamp && new Date(lastUpdatePage.timestamp).toDateString();
const route = lastUpdatePage?.route;
</script>

<template>
  <div v-if="title && route" class="container">
    <span class="label">UPDATE</span>
    <a :href="route">
      <span>{{ title }}</span>
      <span style="margin-left: 8px">({{ date }})</span>
    </a>
  </div>
  <div v-if="titleProblemPages.length > 0" class="container">
    <div v-for="page in titleProblemPages" :key="page.route">
      <a :href="page.route">
        <span>{{ page.title }} ({{ page.problem }}, {{ page.title.length }}, {{ page.gap }})</span>
      </a>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 0 24px 24px 24px;
  text-align: center;
  font-size: 12px;
  font-weight: 600;
}

.label {
  background-color: var(--vp-custom-block-important-bg);
  padding: 6px 12px;
  margin-right: 8px;
  border-radius: 8px;
  font-size: 10px;
  font-weight: 800;
  user-select: none;
}
</style>
