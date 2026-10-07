<script lang="ts">

import "#styles/essence.scss";
import "#styles/puzzles.scss";

import type { PageData } from "stranger-squarkdown";

import { prefs } from "#scripts/stores";

import Header   from "#parts/header.svelte"
import Footer   from "#parts/footer.svelte";
import NavPane  from "#parts/nav/pane.nav.svelte";
import NavBar   from "#parts/nav/bar.nav.svelte";
import Controls from "#parts/nav/controls.svelte";

import { onMount } from "svelte";
import { page as _page } from "$app/state";


let { children } = $props();

let page: PageData<"short"> = $derived(_page.data);


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


<div class={["layout", { mobile }, $prefs]}>
  {#if mobile}
    <NavBar />
  {:else}
    <div class="nav-pane">
      <NavPane />
    </div>
  {/if}

  <main>
    {#if !mobile}
      <Controls />
    {/if}

    <article>
      <Header title={page.head} capt={page.capt} />
      
      <div class="content">
        {@render children()}
      </div>

      <Footer date={page.update_raw} path={page.path} />
    </article>
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
  background: $col-back-deut;
}

main {
  flex: 20 0;
  padding: 2rem 3rem;

  .layout.mobile & {
    padding: 2rem 5vw;
  }
}

</style>
