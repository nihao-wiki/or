<script setup>
const props = defineProps(['position', 'name']);
const gaode = `https://uri.amap.com/marker?position=${props.position}&name=${props.name}&src=nihao.wiki&coordinate=&callnative=1`;
</script>

<template>
  <span class="container">
    <a :href="gaode" target="_blank" rel="noopener noreferrer nofollow"
    ><svg
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
    >
      <path
        d="M137.923572 0.00064h292.991633v619.504579H0v-485.547269c0-35.504445 14.521638-69.601506 40.366315-94.678519A140.034647 140.034647 0 0 1 137.923572 0.00064z"
        fill="#C2F89D"
      ></path>
      <path
        d="M0 733.567246h426.501139V1023.552196H136.452217A136.516189 136.516189 0 0 1 0 887.099979v-153.532733zM528.856295 0.00064h358.243045A136.452217 136.452217 0 0 1 1023.551556 136.452857v494.759233H528.856295V0.00064z"
        fill="#EDF1F4"
      ></path>
      <path
        d="M537.492511 727.681824h484.843578v156.859276c0 36.9758-14.073834 72.480245-39.214819 98.58081a131.078571 131.078571 0 0 1-94.550575 40.87809H537.492511v-296.318176z"
        fill="#82E4FC"
      ></path>
      <path
        d="M374.363982 662.430413l-234.777138-131.718291 736.445344-375.515478-140.738339 715.52651-284.227472-164.024137-22.390191 117.132682-54.376176-161.401286z"
        fill="#0085FE"
      ></path>
      <path
        d="M832.467275 204.902867l-458.039321 457.399602 52.201129 162.168949 22.39019-119.3717 383.448002-500.196851z"
        fill="#0355ED"
      ></path>
      <path
        d="M498.149748 733.69519l-71.520665 90.8402 22.39019-119.3717 49.130475 28.5315z"
        fill="#0E24C0"
      ></path>
    </svg>
  </a>
  </span>
</template>

<style scoped>
.container a {
  display: inline-block;
}

.container svg {
  display: inline-block;
  vertical-align: middle;
}
</style>