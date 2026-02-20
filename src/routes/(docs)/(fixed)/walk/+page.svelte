<script lang="ts">

import Site from "#src/site-data.json";

import Header from "#parts/header.svelte";
import Footer from "#parts/footer.svelte";

import { base } from "$app/paths";


const paths = [
  "articles/walkthrough/foreword.md",
  "articles/walkthrough/primer.md",
];

</script>


<article>
  <Header title="Walkthrough" capt="A guided tour through the art of skyscraping" />

  <div class="content">
    <p>
      These pages build up an understanding of how to tackle Skyscrapers.
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
