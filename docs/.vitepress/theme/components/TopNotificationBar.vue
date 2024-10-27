<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue';
import { useData } from 'vitepress';
import { getUserBrowserLanguage } from '../../helpers/browser';
import { hostname } from '../../constants/meta';

const redirect = ref();
const { site, localeIndex } = useData();
const { primary, all } = getUserBrowserLanguage();
const locales = Object.keys(site.value.locales);

const init = () => {
  if (primary !== localeIndex.value) {
    all.every((lang) => {
      if (locales.includes(lang)) {
        const { redirectTemplate, label } = site.value.locales[lang] as any;
        if (redirectTemplate) {
          redirect.value = redirectTemplate.replace(
            ':locale',
            `<a href="${hostname}/${lang}/" hreflang="${lang}">${hostname}/${lang}/</a>`
          );
        }
        return false;
      }
      return true;
    });
  } else {
    redirect.value = null;
  }
};

onMounted(() => {
  init();
});

watch([localeIndex], () => {
  init();
});
</script>

<template>
  <div v-if="redirect" class="banner-content" v-html="redirect" />
</template>

<style>
.banner-content {
  font-size: 14px;
  padding: 0 16px;
  height: 50px;
  line-height: 50px;
  background-color: var(--vp-carbon-ads-text-color);
  color: var(--vp-carbon-ads-bg-color);
}

.banner-content + .VPNav {
  background-color: red;
}

.banner-content a {
  font-weight: bold;
  text-decoration: underline;
}
</style>
