<script setup>
import { useData } from 'vitepress';
import { useSidebar } from 'vitepress/theme';

const { theme, frontmatter } = useData();
const { hasSidebar } = useSidebar();
</script>

<template>
  <template v-if="theme.footer && frontmatter.footer !== false && !hasSidebar">
    <div class="sitemap">
      <div class="container">
        <div class="sitemap-col" v-for="category in theme?.bottomNav || []" :key="category.text">
          <div class="sitemap-title">{{ category.text }}</div>
          <ul>
            <li v-for="item in category?.items || []" :key="item.text">
              <a class="vp-link link" :href="item.link">{{ item.text }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <footer class="VPFooter">
      <div class="container">
        <p v-if="theme.footer.message" class="message" v-html="theme.footer.message"></p>
        <p v-if="theme.footer.copyright" class="copyright" v-html="theme.footer.copyright"></p>
      </div>
    </footer>
  </template>
</template>

<style scoped>
.sitemap,
.action {
  background: var(--vp-c-bg-soft);
  z-index: 1;
}

.sitemap .container,
.action .container {
  max-width: 900px;
  margin: 0 auto;
  columns: 1;
  padding: 24px 32px;
  display: flex;
  justify-content: space-between;
}

.action .container {
  padding-top: 0;
  padding-bottom: 0;
  select {
    background: var(--vp-c-bg-soft);
  }
}

.sitemap-title {
  font-weight: 500;
  color: var(--vp-c-text-1);
  margin-bottom: 0.25em;
}

.sitemap .vp-link {
  font-size: 0.9em;
  color: var(--vp-c-text-2);
}

.sitemap-col {
  margin-bottom: 2em;
  break-inside: avoid;
  text-align: left;
}

@media (max-width: 768px) {
  .sitemap .container {
    display: block;
  }
}

.VPFooter {
  position: relative;
  z-index: var(--vp-z-index-footer);
  background-color: var(--vp-c-bg-soft);
}

.VPFooter.has-sidebar {
  display: none;
}

.VPFooter :deep(a) {
  text-decoration-line: underline;
  text-underline-offset: 2px;
  transition: color 0.25s;
}

.VPFooter :deep(a:hover) {
  color: var(--vp-c-text-1);
}

@media (min-width: 768px) {
  .VPFooter {
    padding: 32px;
  }
}

.container {
  margin: 0 auto;
  max-width: var(--vp-layout-max-width);
  text-align: center;
}

.message,
.copyright {
  line-height: 24px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}
</style>
