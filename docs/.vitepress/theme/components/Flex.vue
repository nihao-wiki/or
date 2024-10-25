<template>
  <div class="flex"><slot></slot></div>
</template>

<style>
@media (min-width: 768px) {
  .flex {
    display: flex;
  }
  .flex > div {
    padding-right: 8px;
    min-height: 50%;
    flex: 1;
  }
  .flex > div:nth-last-child(1) {
    padding-right: 0;
  }
}

@media (max-width: 768px) {
  .flex > div {
    padding-bottom: 16px;
  }
  .flex > div:nth-last-child(1) {
    padding-bottom: 0;
  }
}
</style>
