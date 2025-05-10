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


<div class="layout">
  {#if !mobile}
    <NavPane />
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

$mobile-width: 50rem;

.layout {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-flow: row nowrap;
  justify-content: stretch;
}

main {
  flex: 20 0;
  padding: 2rem 3rem;
  overflow-y: auto;
}

</style>
