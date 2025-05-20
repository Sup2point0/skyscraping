<script lang="ts">

import Site from "#src/site-data.json";

import Header from "#parts/header.svelte";
import Footer from "#parts/footer.svelte";

import { base } from "$app/paths";


const paths: string[] = Site.index.cases.pages;

</script>


<article>
  <Header title="Cases" capt="Specific strategies in specific scenarios" />

  <div class="content">
    <p>
      These pages cover specific scenarios which you may encounter when completing Skyscrapers.
    </p>

    <ul>
      {#each paths as path}
        {@const page = Site.pages[path]}

        {#if page}
          <li>
            <a href="{base}/{page.dest}">{page.title}</a>
          </li>
        {/if}
      {/each}
    </ul>
  </div>

  <Footer />
</article>


<style lang="scss">



</style>
