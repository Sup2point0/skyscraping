<!-- @component Prefs

A corner button and associated overlay for configuring preferences (desktop UI).
-->

<script lang="ts">

import PrefsPane from "./pane.prefs.svelte";
import MinorClicky from "#parts/clicky.micro.svelte";

import { fade, fly } from "svelte/transition";
import { cubicIn, expoOut } from "svelte/easing";


interface Props {
  mobile: boolean;
}

let { mobile } = $props();


let shown = $state(false);

</script>


<div class="clicky-container">
  <MinorClicky onclick={() => { shown = !shown; }}>
    <div style:transform="translateY(0.24em)">*</div>
  </MinorClicky>
</div>

{#if !mobile && shown}
  <div class="overlay"
    in:fly={{ duration: 500, x: "2rem", easing: expoOut }}
    out:fly={{ duration: 200, x: "2rem", easing: cubicIn }}
  >
    <div class="exit"
      in:fade={{ duration: 250, delay: 400 }}
      out:fade={{ duration: 250 }}
    >
      <MinorClicky text="×" onclick={() => { shown = false; }} />
    </div>

    <PrefsPane />
  </div>
{/if}


<style lang="scss">

.clicky-container {
  position: absolute;
  top: 2rem;
  right: 2rem;
}

.overlay {
  min-width: 20em;
  max-width: 20vw;
  overflow-y: auto;
  position: fixed;
  top: 5rem;
  right: 2rem;
  z-index: 20;
  backdrop-filter: blur(36px);
  box-shadow: 0 2px 4px $col-line;

  .exit {
    position: absolute;
    top: 1rem;
    right: 1rem;
    z-index: 25;
  }
}

</style>
