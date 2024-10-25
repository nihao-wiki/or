<script setup>
const props = defineProps(['word', 'as']);
</script>

<template>
  <div class="wrapper">
    <div class="word" v-for="w in props.word.split('')" :key="w">
      <div class="text">{{ w }}</div>
      <div class="dash middle"></div>
      <div class="dash vertical"></div>
    </div>
    <div class="description">
      <div>
        <slot name="pinyin"></slot> <slot name="ipa"></slot>
        <Speech :as="props.as || props.word"></Speech>
      </div>
      <div><slot></slot></div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  padding: 16px 0;
}

.word {
  display: inline-block;
  position: relative;
  font-family: '楷体', 'KaiTi', serif;
  font-size: 30px;
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: var(--vp-c-divider);
  border-radius: 4px;
  margin-right: 8px;
}

.word .text {
  position: relative;
  z-index: 1;
  color: var(--vp-c-text-1);
}

.word .dash {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.2;
  border-color: var(--vp-c-border);
}
.word .dash.middle {
  width: 100%;
  height: 50%;
  border-bottom: 1px dashed;
}
.word .dash.vertical {
  width: 50%;
  height: 100%;
  border-right: 1px dashed;
}

.description {
  font-size: 14px;
  line-height: 20px;
  color: var(--vp-c-text-2);
}
</style>
