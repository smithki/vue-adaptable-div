<template>
<div></div>
</template>

<script lang="ts">
// --- Imports -------------------------------------------------------------- //

// Vendor
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

// --- Component ------------------------------------------------------------ //

@Component({
  name: 'AdaptableDiv',
  inheritAttrs: false,
})
export class AdaptableDiv extends Vue {}
</script>

