<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['update:modelValue']);

const closeModal = () => {
  emit('update:modelValue', false);
};
</script>

<template>
  <teleport to="body">
    <transition name="modal">
      <div v-if="modelValue" class="modal-overlay" @click="closeModal">
        <div class="modal" @click.stop>
          <slot></slot>
        </div></div
    ></transition>
  </teleport>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s ease;
  z-index: 9007199254740991;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.modal {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 100%;
  transform: scale(0.95);
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.modal-enter-active .modal,
.modal-leave-active .modal {
  transform: scale(1);
  opacity: 1;
}

.modal-enter-from .modal,
.modal-leave-to .modal {
  opacity: 0;
}

.modal-enter-from .modal-overlay,
.modal-leave-to .modal-overlay {
  opacity: 0;
}
</style>
