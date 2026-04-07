<!-- @component NavBar

The global top navigation bar for mobile.
-->

<script lang="ts">

import NavPane from "./pane.svelte";
import NavClicky from "./clicky.nav.svelte";

import { slide } from "svelte/transition";
import { expoIn, expoOut } from "svelte/easing";
import { base } from "$app/paths";

let shown = $state(false);

</script>


<div class="nav-bar">
  <nav>
    <div class="left">
      <a href="https://sup2point0.github.io/skyscraping">
        <img alt="" src="{base}/skyscraping-icon.svg">
      </a>
    </div>

    <div class="right">
      <NavClicky text="" onclick={() => {}} />

      <button id="nav" onclick={() => { shown = !shown; }}>
        ≡
      </button>
    </div>
  </nav>

  {#if shown}
    <div class="nav-overlay"
      in:slide={{ duration: 500, easing: expoIn }}
      out:slide={{ duration: 500, easing: expoOut }}
    >
      <NavPane mobile={true} />
    </div>
  {/if}
</div>


<style lang="scss">

.nav-bar {
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

.nav-overlay {
  width: 80vw;
  height: 90vh;
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

button#nav {
  padding: 0 0.25em 0.05em;
  @include font-ui;
  font-size: 200%;
  color: light-dark(
    rgb(black, 30%),
    rgb(white, 80%));
  line-height: 100%;
  background: none;
  border: none;
  transition: all 0.1s ease-out;

  &:hover, &:focus-visible {
    cursor: pointer;
    color: white;
    background: $col-prot;
  }

  &:active {
    filter: brightness(90%);
  }
}

</style>
