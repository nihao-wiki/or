---
layout: places
titleTemplate: 'China Travel Destinations - :title'
---

<script setup>
import { ref, computed } from 'vue'
import { placesByRegion, placesByProvince, placesByPopularity, placesBy72144VisaPolicy } from '../.vitepress/helpers/places';

console.log(placesByProvince, placesByPopularity, placesBy72144VisaPolicy);
</script>

## Popularity

<dl>
<dd v-for="city in placesByPopularity" :key="city.name">
{{ city.province }} {{ city.name }}
</dd>
</dl>

## Province

<div v-for="(cities, province) in placesByProvince" :key="province">
<div>{{ province }}</div>
<div>
<span v-for="city in cities" :key="city.name">
{{ city.name }}
</span>
</div>
</div>

## 72/144 Visa Policy

<div v-for="(cities, staying) in placesBy72144VisaPolicy" :key="staying">
<div>{{ staying }}</div>
<div>
<span v-for="city in cities" :key="city.name">
{{ city.name }}
</span>
</div>
</div>
