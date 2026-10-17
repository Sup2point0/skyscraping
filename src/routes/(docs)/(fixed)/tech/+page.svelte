<script lang="ts">

import Site from "#src/site-data.json";

import { base } from "$app/paths";


const paths: string[] = Site.tags.tech;

</script>


<p>
  These pages cover general strategies for solving any kind of Skyscrapers.
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
