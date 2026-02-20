<!-- @component Header

A page header.
-->

<script lang="ts">

import katex from "katex";


interface Props {
  title?: string;
  capt?: string;
}

let { title, capt }: Props = $props();


function render_katex(title: string): string[]
{
  return title.split(/(\$[^$]+\$)/).map(
    chunk => (
        chunk.startsWith("$")
      ? katex.renderToString(chunk.slice(1, -1), {
          displayMode: false,
          throwOnError: false,
        })
      : chunk
    )
  );
}

</script>


<svelte:head>
  <title> {title} · Skyscraping </title>

  {#if capt}
    <meta name="description" content={capt} />
  {/if}
</svelte:head>

<header>
  <h1>
    {#if title}
      {#each render_katex(title) as chunk}
        {@html chunk}
      {/each}

    {:else}
      Untitled Page

    {/if}
  </h1>

  {#if capt}
    <p class="caption">
      {#each render_katex(capt) as chunk}
        {@html chunk}
      {/each}
    </p>
  {/if}
</header>


<style lang="scss">

header {
  padding: 0 0 1rem;
}

h1 {
  padding-bottom: 0.25em;
  @include font-body;
  font-size: 250%;
  font-weight: 400;
}

p.caption {
  @include font-body;
  font-size: 125%;
  color: $col-text-deut;
}

</style>
