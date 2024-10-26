import { ref, computed, watch, onMounted } from 'vue';
import { currencies } from '../constants/locales';

const currency = ref('CNY');

watch([currency], () => {
  localStorage.setItem('currency', currency.value);
});

export default function useCurrency(amountInCNY = 0) {
  const formattedAmount = computed(() => {
    const { unit, ratio } = currencies[currency.value];
    const amount = (amountInCNY * ratio).toFixed(1);
    return `${unit}${amount}`;
  });

  onMounted(() => {
    const value = localStorage.getItem('currency');
    if (value) currency.value = value;
  });

  return { currency, currencies, formattedAmount };
}
