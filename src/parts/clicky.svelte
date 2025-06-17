<!-- @component Clicky

A button or link button.
-->

<script lang="ts">

import { base } from "$app/paths";

interface Props {
  text?: string;
  link?: string;
    intern?: string;
  children?: any;
}

let { text, link, intern, children }: Props = $props();

</script>


{#snippet content()}
  {#if children}
    {@render children()}
  {:else}
    {text}
  {/if}
{/snippet}


{#if link || intern}
  <a class="clicky" href={link || `${base}/${intern}`}>
    {@render content()}
  </a>
{:else}
  <button class="clicky">
    {@render content()}
  </button>
{/if}


<style lang="scss">

.clicky {
  padding: 0.5em 1em;
  @include font-ui;
  color: $col-prot;
  font-size: 1rem;
  text-decoration: none;
  background: transparent;
  border: 2px solid $col-prot;
  transition: all 0.1s ease-out;

  &:hover, &:focus-visible {
    cursor: pointer;
    color: white;
    background: $col-prot;
  }

  &:active {
    filter: brightness(90%);
  }
}

</style>
