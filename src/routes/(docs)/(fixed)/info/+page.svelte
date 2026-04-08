<script lang="ts">

import Site from "#src/site-data.json";

import Header from "#parts/header.svelte";
import Footer from "#parts/footer.svelte";

import { base } from "$app/paths";


const paths: string[] = Site.index.info.pages;

</script>


<article>
  <Header title="Info" capt="Information on Skyscraping" />

  <div class="content">
    <ul>
      {#each paths as path}
        {@const page = Site.pages[path]}

        {#if page}
          <li>
            <a href="{base}/{page.dest}">{@html page.title}</a>
          </li>
        {/if}
      {/each}
    </ul>
  </div>

  <Footer />
</article>
