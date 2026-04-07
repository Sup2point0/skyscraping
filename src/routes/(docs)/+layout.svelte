<script>

import "#styles/essence.scss";
import "#styles/puzzles.scss";

import { prefs } from "#scripts/stores";

import NavPane from "#parts/nav/pane.nav.svelte";
import NavBar  from "#parts/nav/bar.svelte";
import Prefs   from "#parts/prefs/prefs.svelte";

import { onMount } from "svelte";


let { children } = $props();


let mobile = $state(false);

onMount(() => {
  check_mobile();

  window.addEventListener("resize", () => {
    check_mobile();
  });
})

function check_mobile() {
  if (window?.matchMedia("(max-width: 50rem)").matches) {
    mobile = true;
  } else {
    mobile = false;
  }
}

</script>


<div class={["layout", { mobile }, prefs]}>
  {#if mobile}
    <NavBar />
  {:else}
    <div class="nav-pane">
      <NavPane />
    </div>
  {/if}

  <main>
    <Prefs {mobile} />

    {#if children}
      {@render children()}
    {:else}
      <p class="error"> Uh, something’s gone really wrong! </p>
    {/if}
  </main>
</div>


<style lang="scss">

.layout {
  width: 100%;
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  justify-content: stretch;

  &.mobile {
    flex-flow: column nowrap;
  }
}

.nav-pane {
  max-height: 100vh;
  overflow-y: auto;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  align-self: flex-start;
}

main {
  flex: 20 0;
  padding: 2rem 3rem;

  .layout.mobile & {
    padding: 2rem 8vw;
  }
}

</style>
