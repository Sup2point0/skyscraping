<script>

import "#styles/essence.scss";

import Nav from "#parts/nav.svelte";

let { children } = $props();

</script>


<div class="layout">
  <Nav />

  <main>
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
