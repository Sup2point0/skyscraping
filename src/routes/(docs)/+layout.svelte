<script>

import "#styles/essence.scss";

import NavPane from "#parts/nav.pane.svelte";
import NavBar from "#parts/nav.bar.svelte";

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


<div class="layout" class:mobile>
  {#if !mobile}
    <div class="nav-pane">
      <NavPane />
    </div>
  {/if}

  <main>
    {#if mobile}
      <NavBar />
    {/if}

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
}

.layout.mobile main {
  padding: 2rem 8vw;
}

</style>
