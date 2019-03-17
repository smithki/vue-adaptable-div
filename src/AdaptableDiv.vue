<template>
<div
  class="overflow-hidden"
  :style="{
    'max-height': !!viewHeight ? `${viewHeight}px` : undefined,
    'transition-property': noTransition && 'max-height',
    'transition-duration': noTransition && `${transitionDuration}ms`,
    'transition-timing-funtion': noTransition && transitionTimingFunction,
    'transition-delay': noTransition && `${transitionDelay}ms`,
  }">

  <div ref="view">
    <slot></slot>
  </div>
</div>
</template>

<script lang="ts">
// --- Imports -------------------------------------------------------------- //

import { Subscription } from 'rxjs';
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { watchResize } from 'watch-resize';

// -------------------------------------------------------------------------- //

@Component({
  name: 'AdaptableDiv',
})
export default class AdaptableDiv extends Vue {
  // --- Data --- //

  public viewEl!: HTMLDivElement | undefined;
  public viewElResizeSubscription: Subscription | null = null;
  public viewHeight: number = 0;
  public viewWidth: number = 0;

  // --- Props --- //

  @Prop({ type: Number, default: 200 })
  public transitionDuration!: number;

  @Prop({ type: String, default: 'ease' })
  public transitionTimingFunction!: string;

  @Prop({ type: Number, default: 0 })
  public transitionDelay!: number;

  @Prop(Boolean)
  public noTransition!: boolean;

  // --- Lifecycle --- //

  public mounted() {
    this.viewEl = this.$refs['view'] as HTMLDivElement;
    this.setDimensions();
    this.watchViewElForResize();
  }

  public beforeDestroy() {
    if (this.viewElResizeSubscription) this.viewElResizeSubscription.unsubscribe();
    this.viewElResizeSubscription = null;
  }

  // --- Business logic --- //

  public async watchViewElForResize() {
    await this.$nextTick();

    const resize$ = await watchResize(this.viewEl!);
    this.viewElResizeSubscription = resize$.subscribe(() => {
      requestAnimationFrame(() => this.setDimensions());
    });
  }

  public setDimensions() {
    const boundingRect = this.viewEl!.getBoundingClientRect();
    this.viewHeight = boundingRect.height;
    this.viewWidth = boundingRect.width;
  }
}
</script>

