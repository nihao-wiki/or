<script lang="ts" setup>
import { ref, computed } from 'vue';
import { useData } from 'vitepress/dist/client/theme-default/composables/data';
import useCurrency from '../../../hooks/useCurrency';
import useLocale from '../../../hooks/useLocale';
import { getUserBrowserLanguage } from '../../../helpers/browser';
import { langRoot } from '../../../constants/locales';
import Modal from '../common/Modal.vue';
import TabGroup from '../common/TabGroup.vue';
import TabPanel from '../common/TabPanel.vue';
import { normalizeLink } from '../../utils';

const { site, localeIndex, page, theme, hash } = useData();
const { currency, currencies } = useCurrency();
const { $t } = useLocale();
const isModalVisible = ref(false);
const { all } = getUserBrowserLanguage();

const currentLang = computed(() => ({
  label: site.value.locales[localeIndex.value]?.label,
  link:
    site.value.locales[localeIndex.value]?.link ||
    (localeIndex.value === 'root' ? '/' : `/${localeIndex.value}/`),
}));

const localeLinks = computed(() =>
  Object.entries(site.value.locales).flatMap(([key, value]) => ({
    lang: key === 'root' ? langRoot : key,
    region: (value as any).region,
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

const suggestedLocaleLinks = computed(() => {
  const links: any[] = [];
  localeLinks.value.forEach(locale => {
    const i = all.indexOf(locale.lang);
    if (i > -1) {
      links[i] = locale;
    }
  });
  return links.filter(Boolean);
});

const openModal = () => {
  isModalVisible.value = true;
};

const closeModal = () => {
  isModalVisible.value = false;
};

const updateModal = (visible) => {
  isModalVisible.value = visible;
};

const updateCurrency = (shortname) => () => {
  currency.value = shortname;
  closeModal();
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
      <Modal v-model="isModalVisible" @update:visible="updateModal" :width="550">
        <TabGroup>
          <TabPanel :title="$t('Region and Language')">
            <div class="label">{{ $t('Suggested region and language') }}</div>
            <div class="container">
              <template v-for="locale in suggestedLocaleLinks" :key="locale.link">
                <a :href="locale.link" :hreflang="locale.lang" :onClick="closeModal"
                  ><div class="button" v-if="all.includes(locale.lang)">
                    <div class="region">{{ locale.region }}</div>
                    <div class="language">{{ locale.text }}</div>
                  </div>
                </a>
              </template>
            </div>
            <div class="label">{{ $t('Choose a region and language') }}</div>
            <div class="container">
              <template v-for="locale in localeLinks" :key="locale.link">
                <a :href="locale.link" :hreflang="locale.lang" :onClick="closeModal"
                  ><div class="button" v-if="all.includes(locale.lang)">
                    <div class="region">{{ locale.region }}</div>
                    <div class="language">{{ locale.text }}</div>
                  </div>
                </a>
              </template>
            </div>
          </TabPanel>
          <TabPanel :title="$t('Currency')">
            <div class="label">{{ $t('Choose a currency') }}</div>
            <div class="container">
              <template v-for="(currency, shortname) in currencies" :key="currency.name">
                <a :onClick="updateCurrency(shortname)"
                  ><div class="button">
                    <div class="region">{{ currency.name }}</div>
                    <div class="language">{{ shortname }}</div>
                  </div>
                </a>
              </template>
            </div>
          </TabPanel>
        </TabGroup>
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

.label {
  font-size: 16px;
  font-weight: 600;
  padding: 24px 0 8px 0;
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

.container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.button {
  display: flex;
  flex-direction: column;
  width: 150px;
  height: 50px;
  line-height: 50px;
  border-radius: 8px;
  cursor: pointer;
  padding: 11px 8px;
}

.button:hover {
  background-color: #000;
  color: #fff;
}

.region {
  font-size: 12px;
  line-height: 12px;
}

.language {
  font-size: 14px;
  line-height: 14px;
}

.divider {
  margin: 0 8px;
  width: 1px;
  height: 17px;
  background-color: #000;
}
</style>
