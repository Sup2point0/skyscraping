<!-- @component Header

A page header.
-->

<script lang="ts">

interface Props {
  title?: string;
  capt?: string;
}

let { title, capt }: Props = $props();

</script>


<header>
  <h1> {title ?? "Untitled Page"} </h1>

  {#if capt}
    <p class="caption"> {capt} </p>
  {/if}
</header>


<style lang="scss">

header {
  padding: 0 0 0.8rem;
}

h1 {
  padding-bottom: 0.25em;
  @include font-body;
  font-size: 250%;
  font-weight: 400;
}

p.caption {
  @include font-body;
  color: $col-text-deut;
}

</style>
