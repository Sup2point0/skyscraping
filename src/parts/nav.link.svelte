<!-- @component NavLink

A link in the navigation bar.
-->

<script lang="ts">

import { base } from "$app/paths";

interface Props {
  text: string;
  link?: string;
    intern?: string;
  header?: boolean;
  disabled?: boolean;
}

let { text, link, intern, header = false, disabled = false }: Props = $props();

</script>


<a class={{ header, disabled }}
  href={link ?? `${base}/${intern}`}
>
  {text}
</a>


<style lang="scss">

a {
  padding: 0.2em 1em;
  @include font-body;
  color: $col-text;
  text-decoration: none;
  transition: all 0.1s ease-out;

  @media (prefers-contrast: more) { text-decoration: underline; }

  &:hover, &:focus-visible,
  &.header:hover, &.header:focus-visible {
    color: $col-deut;
    background: light-dark(
      rgb(black, 2%),
      rgb(white, 8%));

      @media (prefers-contrast: more) {
        color: $col-deut-contrast;
      }
  }

  &:active, &.header:active {
    background: light-dark(
      rgb(black, 5%),
      rgb(white, 16%));
  }

  &.header {
    margin: 0 0 0.25em;
    padding: 0.2em 0.5em;
    @include font-body;
    font-weight: 500;
    font-size: 100%;
    color: $col-prot;
    @media (prefers-contrast: more) { color: $col-prot-contrast; }
  }

  &.disabled {
    pointer-events: none;
    opacity: 20%;
  }
}

</style>
