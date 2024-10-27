import { useData } from 'vitepress';

export default function useLocale() {
  const { theme } = useData();
  const $t = (key: string): string => {
    if (typeof theme.value?.i18n?.[key] === 'string') return theme.value.i18n[key];
    return key;
  };
  return { $t };
}
