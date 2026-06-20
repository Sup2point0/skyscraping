<!-- @component `Clicky`

A button or link button.
-->

<script lang="ts">

import { base } from "$app/paths";

interface Props {
  kind: "micro" | "macro";
  text?: string;
  link?: string;
    intern?: string;
  onclick?: (e: MouseEvent) => void;
  children?: any;
}

let { kind, text, link, intern, onclick, children }: Props = $props();

</script>


{#snippet content()}
  {#if children}
    {@render children()}
  {:else}
    {@html text}
  {/if}
{/snippet}


{#if link || intern}
  <a class="clicky-{kind}" href={link || `${base}/${intern}`}>
    {@render content()}
  </a>
{:else}
  <button class="clicky-{kind}" {onclick}>
    {@render content()}
  </button>
{/if}


<style lang="scss">

.clicky-macro {
  display: block;
  padding: 0.5em 1em;
  margin: 0;
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

.clicky-micro {
  padding: 0 0.25em 0.05em;
  @include font-ui;
  font-size: 200%;
  color: oklch(0.7 0 0);
  line-height: 100%;
  text-decoration: none;
  background: none;
  border: none;
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
