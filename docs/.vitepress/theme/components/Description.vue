<script setup>
const props = defineProps({
  col: {
    type: Number,
    default: 3,
  },
});
</script>

<template>
  <div class="description-container">
    <slot></slot>
  </div>
</template>

<style>
.description-container {
  width: 100%;
  display: flex;
  position: relative;
  flex-wrap: wrap;
}
.description-container div {
  width: 50%;
  overflow: hidden;
  font-size: 14px;
  padding: 2px 8px;
}
.description-container div[long] {
  width: 100%;
}

@media (max-width: 768px) {
  .description-container div {
    width: 100%;
  }
}

.description-container div i {
  font-style: normal;
  color: var(--vp-c-text-2);
}
.description-container div i::after {
    content: ':';
    position: relative;
    top: -0.5px;
    margin-inline: 1px 8px;
}
.description-container div b {
  font-weight: 400;
}
</style>
