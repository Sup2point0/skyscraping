<!-- @component Controls

Corner buttons and associated overlays.
-->

<script lang="ts">

import PrefsPane from "./pane.prefs.svelte";
import Clicky    from "#parts/clicky.svelte";

import { fade, fly } from "svelte/transition";
import { cubicIn, expoOut } from "svelte/easing";


let show_prefs = $state(false);

</script>


<div class="controls">
  <Clicky kind="micro" intern="search">
    <!-- NOTE: inlined so `currentColor` works -->
    <svg viewBox="0 0 2598 2598" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" overflow="hidden">
      <g><path d="M236.5 1162C236.5 661.354 642.354 255.5 1143 255.5 1643.65 255.5 2049.5 661.354 2049.5 1162 2049.5 1662.65 1643.65 2068.5 1143 2068.5 642.354 2068.5 236.5 1662.65 236.5 1162Z" stroke="currentColor" stroke-width="366.667" stroke-miterlimit="8" fill="none" fill-rule="evenodd"/><path d="M1784.5 1803.5 2362.39 2343.65" stroke="currentColor" stroke-width="366.667" stroke-linecap="round" stroke-miterlimit="8" fill="none" fill-rule="evenodd"/></g>
    </svg>
  </Clicky>

  <Clicky kind="micro" onclick={() => { show_prefs = !show_prefs; }}>
    <div style:transform="translateY(0.24em)">*</div>
  </Clicky>
</div>

{#if show_prefs}
  <div class="overlay"
    in:fly={{ duration: 500, x: "2rem", easing: expoOut }}
    out:fly={{ duration: 200, x: "2rem", easing: cubicIn }}
  >
    <div class="exit"
      in:fade={{ duration: 250, delay: 400 }}
      out:fade={{ duration: 250 }}
    >
      <Clicky kind="micro" onclick={() => { show_prefs = false; }}>
        <div style:transform="translateY(0.05em)">×</div>
      </Clicky>
    </div>

    <PrefsPane />
  </div>
{/if}


<style lang="scss">

.controls {
  position: absolute;
  top: 2rem;
  right: 2rem;
  display: flex;
  flex-flow: row wrap;
  gap: 0.5rem;

  svg {
    width: 1rem;
    aspect-ratio: 1 / 1;
    transform: translateY(-0.1rem);
  }
}

.overlay {
  overflow-y: auto;
  min-width: 20em;
  max-width: 20vw;
  padding-top: 0.5rem;
  position: fixed;
  top: 5rem;
  right: 2rem;
  z-index: 20;
  background: light-dark(white, black);
  box-shadow: 0 2px 4px $col-line;

  .exit {
    position: absolute;
    top: 0.8rem;
    right: 1rem;
    z-index: 25;
  }
}

</style>
