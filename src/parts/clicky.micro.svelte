<!-- @component `MicroClicky`

A small, secondary button that turns solid on hover, usually square with an icon.
-->

<script lang="ts">

interface Props {
  text?: string;
  onclick: (e: MouseEvent) => void;
  children?: any;
}

let { text, onclick, children }: Props = $props();

</script>


<button {onclick}>
  {#if children}
    {@render children()}
  {:else}
    {@html text}
  {/if}
</button>


<style lang="scss">

button {
  padding: 0 0.25em 0.05em;
  @include font-ui;
  font-size: 200%;
  color: light-dark(
    rgb(black, 30%),
    rgb(white, 80%));  line-height: 100%;
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
