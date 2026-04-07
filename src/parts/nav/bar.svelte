<!-- @component NavBar

The global top navigation bar for mobile.
-->

<script lang="ts">

import NavPane from "./pane.nav.svelte";
import PrefsPane from "#parts/prefs/pane.prefs.svelte";
import MinorClicky from "#parts/clicky.micro.svelte";

import { fade, slide } from "svelte/transition";
import { expoIn, expoOut } from "svelte/easing";
import { base } from "$app/paths";


let shown_overlay: "nav" | "prefs" | null = $state(null);

</script>


<div class="nav-container">
  <nav>
    <div class="left">
      <a href="https://sup2point0.github.io/skyscraping">
        <img alt="" src="{base}/skyscraping-icon.svg">
      </a>
    </div>

    <div class="right">
      <MinorClicky onclick={() => {
        shown_overlay = shown_overlay === "prefs" ? null : "prefs";
      }}>
        <div style:transform="translateY(0.24em)">*</div>
      </MinorClicky>

      <MinorClicky text="≡" onclick={() => {
        shown_overlay = shown_overlay === "nav" ? null : "nav";
      }} />
    </div>
  </nav>

  {#if shown_overlay}
    <div class="exit"
      in:fade={{ duration: 250, delay: 400 }}
      out:fade={{ duration: 250 }}
    >
      <MinorClicky text="×" onclick={() => { shown_overlay = null; }} />
    </div>

    <div class="overlay {shown_overlay}"
      in:slide={{ duration: 500, easing: expoIn }}
      out:slide={{ duration: 500, easing: expoOut }}
    >
      {#if shown_overlay === "nav"}
        <NavPane mobile={true} />
      {:else if shown_overlay === "prefs"}
        <PrefsPane />
      {/if}
    </div>
  {/if}
</div>


<style lang="scss">

.nav-container {
  width: 100%;
  padding: 0.5rem 2rem;
  margin-top: 1rem;
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(36px);
}

nav {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}


.exit {
  margin-top: 1.5rem;
  margin-right: 1.5rem;
  position: absolute;
  right: 2rem;
  z-index: 25;
}

.overlay {
  width: 80vw;
  height: 90vh;
  margin-top: 0.5rem;
  overflow-x: hidden;
  overflow-y: auto;
  position: absolute;
  right: 2rem;
  z-index: 20;
  background: light-dark(white, black);
  backdrop-filter: blur(36px);  // FIXME
  box-shadow: 0 2px 4px $col-line;
}

img {
  max-height: 2em;
  aspect-ratio: 1;
  transition: filter 0.1s ease-out;

  &:hover {
    filter: brightness(90%);
  }
}

</style>
