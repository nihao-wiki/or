<script lang="ts" setup>
import { ref, computed } from 'vue';
import { useData } from 'vitepress/dist/client/theme-default/composables/data';
import useCurrency from '../../../hooks/useCurrency';
import Modal from '../common/Modal.vue';
import { normalizeLink } from '../../utils';

const { site, localeIndex, page, theme, hash } = useData();
const { currency } = useCurrency();
const isModalVisible = ref(false);

const currentLang = computed(() => ({
  label: site.value.locales[localeIndex.value]?.label,
  link:
    site.value.locales[localeIndex.value]?.link ||
    (localeIndex.value === 'root' ? '/' : `/${localeIndex.value}/`),
}));

const localeLinks = computed(() =>
  Object.entries(site.value.locales).flatMap(([key, value]) => ({
    text: (value as any).label,
    link:
      normalizeLink(
        (value as any).link || (key === 'root' ? '/' : `/${key}/`),
        theme.value.i18nRouting !== false,
        page.value.relativePath.slice(currentLang.value.link.length - 1),
        !site.value.cleanUrls
      ) + hash.value,
  }))
);

const openModal = () => {
  isModalVisible.value = true;
};

const closeModal = () => {
  isModalVisible.value = false;
};

const updateModal = (visible) => {
  console.log(visible);
  isModalVisible.value = visible;
};
</script>

<template>
  <div class="VPNavBarTranslations" @click="openModal">
    <div class="items">
      <span class="title">
        <span>{{ currentLang.label }}</span>
        <span class="divider" />
        <span>{{ currency }}</span>
      </span>
      <Modal v-model="isModalVisible" @update:visible="updateModal">
        <template v-for="locale in localeLinks" :key="locale.link">
          <div>{{ locale }}</div>
        </template>
      </Modal>
    </div>
  </div>
</template>

<style scoped>
.VPNavBarTranslations {
  display: none;
}

@media (min-width: 1280px) {
  .VPNavBarTranslations {
    display: flex;
    align-items: center;
  }
}

.translations:hover {
  background-color: var(--vp-c-gray-soft);
  border-radius: 20px;
  cursor: pointer;
}

.translations::before {
  display: none;
  content: '';
}

.title {
  display: flex;
  align-items: center;
  padding: 0 16px;
  line-height: 32px;
  font-size: 14px;
  font-weight: 700;
  color: var(--vp-c-text-1);
}

.divider {
  margin: 0 8px;
  width: 1px;
  height: 17px;
  background-color: var(--vp-c-divider);
}
</style>
