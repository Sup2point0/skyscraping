<!-- @component NavBar

The global top navigation bar for mobile.
-->

<script lang="ts">

import NavPane   from "./pane.nav.svelte";
import PrefsPane from "./pane.prefs.svelte";
import Clicky    from "#parts/clicky.svelte";

import { fade, slide } from "svelte/transition";
import { expoIn, expoOut } from "svelte/easing";
import { base } from "$app/paths";
import { page } from "$app/state";


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
      {#if page.url.pathname != "/search"}
        <Clicky kind="micro" intern="search">
          <!-- NOTE: inlined so `currentColor` works -->
          <svg viewBox="0 0 2598 2598" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" overflow="hidden">
            <g><path d="M236.5 1162C236.5 661.354 642.354 255.5 1143 255.5 1643.65 255.5 2049.5 661.354 2049.5 1162 2049.5 1662.65 1643.65 2068.5 1143 2068.5 642.354 2068.5 236.5 1662.65 236.5 1162Z" stroke="currentColor" stroke-width="366.667" stroke-miterlimit="8" fill="none" fill-rule="evenodd"/><path d="M1784.5 1803.5 2362.39 2343.65" stroke="currentColor" stroke-width="366.667" stroke-linecap="round" stroke-miterlimit="8" fill="none" fill-rule="evenodd"/></g>
          </svg>
        </Clicky>
      {/if}

      <Clicky kind="micro" onclick={() => {
        shown_overlay = shown_overlay === "prefs" ? null : "prefs";
      }}>
        <div style:transform="translateY(0.24em)">*</div>
      </Clicky>

      <Clicky kind="micro" text="≡" onclick={() => {
        shown_overlay = shown_overlay === "nav" ? null : "nav";
      }} />
    </div>
  </nav>

  {#if shown_overlay}
    <div class="exit"
      in:fade={{ duration: 250, delay: 400 }}
      out:fade={{ duration: 250 }}
    >
      <Clicky kind="micro" text="×" onclick={() => { shown_overlay = null; }} />
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
  margin-bottom: 1rem;
  position: sticky;
  top: 0;
  z-index: 20;
  background: $col-back;
  box-shadow: 0 2px 4px $col-line;
}

nav {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  .left {
    a {
      display: block;
      height: 2em;
    }

    img {
      max-height: 2em;
      aspect-ratio: 1;
      transition: filter 0.1s ease-out;

      &:hover {
        filter: brightness(80%);
      }
    }
  }

  .right {
    display: flex;
    flex-flow: row wrap;
    gap: 0.5rem;

    svg {
      width: 1rem;
      aspect-ratio: 1 / 1;
      transform: translateY(-0.05rem);
    }
  }
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

</style>
