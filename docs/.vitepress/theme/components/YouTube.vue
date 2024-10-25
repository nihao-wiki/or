<script setup>
import { useSlots, ref, onUnmounted } from 'vue';
import YouTube from './Icon/YouTube.vue';

const player = ref();
const onPlay = ref(false);
const props = defineProps(['link']);
const slots = useSlots();

const [url, param] = props.link.split('?');
const [videoId] = url.split('/').slice(-1);
const startSeconds = param
  .split('&')
  .map((p) => p.split('='))
  .find((p) => p[0] === 't')?.[1];

onUnmounted(() => {
  player?.value?.destroy?.();
});

const loadApi = (cb) => {
  if (window.YT) return cb();
  const tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  tag.onerror = () => window.open(props.link, '_blank', 'noopener,noreferrer');
  document.body.appendChild(tag);
  window.onYouTubeIframeAPIReadyCallbacks = [
    ...(window.onYouTubeIframeAPIReadyCallbacks || []),
    cb,
  ];
  window.onYouTubeIframeAPIReady = () => {
    window.onYouTubeIframeAPIReadyCallbacks.forEach((cb) => cb());
    delete window.onYouTubeIframeAPIReadyCallbacks;
    delete window.onYouTubeIframeAPIReady;
  };
};

const loadVideo = () => {
  if (onPlay.value === true) return;
  loadApi(() => {
    onPlay.value = true;
    player.value = new YT.Player(videoId, {
      width: '100%',
      playerVars: {
        playsinline: 1,
      },
      events: {
        onReady: () => {
          player.value.loadVideoById({ videoId, startSeconds });
        },
      },
    });
  });
};
</script>

<template>
  <div class="info custom-block wrapper" :style="{ flexWrap: onPlay ? 'wrap' : 'nowrap' }">
    <div class="cover" v-if="!!slots.cover && !onPlay">
      <a @click="loadVideo" class="VPLink link VPNavScreenMenuGroupLink cover">
        <slot name="cover"></slot
      ></a>
    </div>
    <div :id="videoId" :style="{ marginBottom: onPlay ? '8px' : '0' }"></div>
    <div class="container">
      <a
        class="VPLink link vp-external-link-icon VPNavScreenMenuGroupLink"
        :href="props.link"
        target="_blank"
        rel="noreferrer"
      >
        <YouTube fill="#ff0000"></YouTube>
        <span class="link-text"><slot name="title"></slot></span>
        <span class="author">@<slot name="author"></slot></span>
      </a>
      <div><slot name="description"></slot></div>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 768px) {
  .wrapper {
    display: flex;
    padding-bottom: 12px;
    cursor: pointer;
  }
  .cover {
    min-width: 38.2%;
    position: relative;
    margin: 0 12px 0 0;
    border-radius: 4px;
    overflow: hidden;
  }
}

@media (min-width: 768px) {
  .container {
    min-width: 400px;
  }
}

.container a {
  margin: 0;
}

.youtube-icon {
  display: inline-block;
  vertical-align: middle;
}
.author,
.link-text {
  padding-left: 4px;
}

.cover {
  position: relative;
  display: inline-block;
  &:hover .play {
    opacity: 0.5;
  }
}

.play {
  position: absolute;
  bottom: 32px;
  right: 16px;
  width: 100%;
  text-align: right;
  opacity: 0.4;
  transform: translateY(50%);
}
</style>
