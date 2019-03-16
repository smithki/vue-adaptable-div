<template>
<div>Hello world</div>
</template>

<script lang="ts">
// --- Imports -------------------------------------------------------------- //

// Vendor
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

// --- Component ------------------------------------------------------------ //

@Component({
  name: 'AdaptableDiv',
})
export default class AdaptableDiv extends Vue {}
</script>

