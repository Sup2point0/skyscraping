<script lang="ts">

import Site from "#src/site-data.json";

import Header from "#parts/header.svelte";
import Footer from "#parts/footer.svelte";

import { base } from "$app/paths";


const paths: string[] = Site.index.thoughts.pages;

</script>


<article>
  <Header title="Showerthoughts" capt="Reflections on the art of Skyscrapers" />

  <div class="content">
    <p>
      These pages contain my thoughts and feelings on Skyscrapers.
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
