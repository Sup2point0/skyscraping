<!-- @component NavBar

The global top navigation bar for mobile.
-->

<script lang="ts">

import NavPane from "#parts/nav.pane.svelte";

import { slide } from "svelte/transition";
import { expoIn, expoOut } from "svelte/easing";
import { base } from "$app/paths";

let shown = $state(false);

</script>


<div class="nav-bar">
  <nav>
    <a href="https://sup2point0.github.io/skyscraping">
      <img alt="" src="{base}/skyscraping-icon.svg">
    </a>

    <button id="nav" onclick={() => { shown = !shown; }}>
      =
    </button>
  </nav>

  {#if shown}
    <div class="nav-pane"
      in:slide={{ duration: 600, easing: expoIn }}
      out:slide={{ duration: 600, easing: expoOut }}
    >
      <NavPane mobile={true} />
    </div>
  {/if}
</div>


<style lang="scss">

.nav-bar {
  width: 100%;
  margin-bottom: 2rem;
  position: relative;
}

nav {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}

.nav-pane {
  width: 100%;
  position: absolute;
  background: light-dark(white, black);
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
  padding: 0 0.35em;
  @include font-ui;
  font-size: 200%;
  background: none;
  border: none;
  transition: all 0.1s ease-out;

  &:hover, &:focus-visible {
    color: white;
    background: $col-prot;
  }

  &:active {
    filter: brightness(90%);
  }
}

</style>
