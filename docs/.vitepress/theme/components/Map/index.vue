<script>
import Map from './Map.vue';
export default {
  data: function () {
    return {
      lock: true,
    };
  },
  props: [
    'center',
    'points',
    'walking',
    'transit',
    'driving',
    'line',
    'divesites',
    'height',
    'zoom',
    'padding',
  ],
  computed: {
    $unlock: function () {
      this.lock = false;
    },
    _class: function () {
      return this.fullscreen ? 'map-wrapper map-fullscreen' : 'map-wrapper';
    },
    _points: function () {
      return typeof this.points === 'string'
        ? this.points.split(/[;|]/).map((point) => {
            const [lng, lat, address] = point.split(',');
            return { latitude: lat, longitude: lng, address };
          })
        : [];
    },
    _divesites: function () {
      return typeof this.divesites === 'string'
        ? this.divesites.split(/[;|]/).map((site) => {
            const [lng, lat, name] = site.split(',');
            return { latitude: lat, longitude: lng, name };
          })
        : [];
    },
    _center: function () {
      const [longitude, latitude] = typeof this.center === 'string' ? this.center.split(',') : [];
      return latitude && longitude
        ? { latitude, longitude }
        : // try using points as center
          this._points[0] && {
            latitude: this._points[0].latitude,
            longitude: this.points[0].longitude,
          };
    },
    _walking: function () {
      return typeof this.walking === 'string'
        ? this.walking.split(/[;|]/).map((point) => {
            const [lng, lat, address] = point.split(',');
            return { latitude: lat, longitude: lng, address };
          })
        : [];
    },
    _transit: function () {
      return typeof this.transit === 'string'
        ? this.transit.split(/[;|]/).map((point) => {
            const [lng, lat, address] = point.split(',');
            return { latitude: lat, longitude: lng, address };
          })
        : [];
    },
    _driving: function () {
      return typeof this.driving === 'string'
        ? this.driving.split(/[;|]/).map((point) => {
            const [lng, lat, address] = point.split(',');
            return { latitude: lat, longitude: lng, address };
          })
        : [];
    },
    _line: function () {
      return typeof this.line === 'string'
        ? this.line.split(/[;|]/).map((point) => {
            const [lng, lat] = point.split(',');
            return { latitude: lat, longitude: lng };
          })
        : [];
    },
  },
  components: {
    'v-map': Map,
  },
};
</script>

<template>
  <div class="map-wrapper">
    <div class="map-mask" v-if="lock" @click="$unlock">
      <div>
        <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M544 704a32 32 0 0 1-64 0v-128a32 32 0 0 1 64 0v128z m256.256-288H394.304V316.608A124.672 124.672 0 0 1 518.72 192a124.704 124.704 0 0 1 124.48 124.608 32 32 0 1 0 64 0A188.736 188.736 0 0 0 518.72 128c-103.904 0-188.416 84.608-188.416 188.608V416h-106.56A64 64 0 0 0 160 480.096v319.84A64 64 0 0 0 223.744 864h576.512A64 64 0 0 0 864 799.936v-319.84A64 64 0 0 0 800.256 416z"
            fill="#969697"
            style="--darkreader-inline-fill: #666e71"
          ></path>
        </svg>
        click to unlock
      </div>
    </div>
    <v-map
      :center="_center"
      :points="_points"
      :divesites="_divesites"
      :walking="_walking"
      :transit="_transit"
      :driving="_driving"
      :line="_line"
      :height="height"
      :padding="padding"
      :zoom="zoom"
    ></v-map>
  </div>
</template>

<style scoped>
.map-wrapper {
  position: relative;
}

.map-wrapper .map {
  width: 100%;
  height: 100%;
}

.map-mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  color: #969697;
  text-align: center;
  cursor: pointer;
}

.map-mask div {
  background-color: #fff;
  opacity: 0.8;
}

.icon {
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  vertical-align: top;
}
</style>
