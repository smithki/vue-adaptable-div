<template>
<div
  :style="{
    'height': !!viewHeight ? `${viewHeight}px` : '100%',
    'transition-property': noTransition ? undefined : 'height',
    'transition-duration': noTransition ? undefined : `${transitionDuration}ms`,
    'transition-timing-funtion': noTransition ? undefined : transitionTimingFunction,
    'transition-delay': noTransition ? undefined : `${transitionDelay}ms`,
    'overflow': 'hidden',
  }">

  <div ref="view">
    <slot></slot>
  </div>
</div>
</template>

<script lang="ts">
// --- Imports -------------------------------------------------------------- //

import { Subscription } from 'rxjs';
import Vue, { VueConstructor } from 'vue';
import { watchResize } from 'watch-resize';

// -------------------------------------------------------------------------- //

export interface AdaptableDivData {
  viewEl: HTMLDivElement | null;
  viewElResizeSubscription: Subscription | null;
  viewHeight: number;
  viewWidth: number;
}

export default Vue.extend({
  name: 'AdaptableDiv',

  data(): AdaptableDivData {
    return {
      viewEl: null,
      viewElResizeSubscription: null,
      viewHeight: 0,
      viewWidth: 0,
    };
  },

  props: {
    transitionDuration: { type: Number, default: 200 },
    transitionTimingFunction: { type: String, default: 'ease' },
    transitionDelay: { type: Number, default: 0 },
    noTransition: Boolean,
  },

  mounted() {
    this.viewEl = this.$refs['view'] as HTMLDivElement;
    this.setDimensions();
    this.watchViewElForResize();
  },

  beforeDestroy() {
    if (this.viewElResizeSubscription) this.viewElResizeSubscription.unsubscribe();
    this.viewElResizeSubscription = null;
  },

  methods: {
    async watchViewElForResize() {
      await this.$nextTick();

      const resize$ = await watchResize(this.viewEl!);
      this.viewElResizeSubscription = resize$.subscribe(() => {
        console.log('here');
        requestAnimationFrame(() => this.setDimensions());
      });
    },

    setDimensions() {
      const boundingRect = this.viewEl!.getBoundingClientRect();
      this.viewHeight = boundingRect.height;
      this.viewWidth = boundingRect.width;
    },
  },
});
</script>


