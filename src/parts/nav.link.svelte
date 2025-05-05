<!-- @component NavLink

A link in the navigation bar.
-->

<script lang="ts">

import { base } from "$app/paths";

interface Props {
  text: string;
  link?: string;
    intern?: string;
}

let { text, link, intern }: Props = $props();

</script>


<a href={link ?? `${base}/${intern}`}>
  {text}
</a>


<style lang="scss">

a {
  padding: 0.2em 0.5em;
  @include font-body;
  color: $col-text;
  text-decoration: none;

  transition: all 0.1s ease-out;

  @media (prefers-contrast: more) { text-decoration: underline; }

  &:hover, &:focus-visible {
    color: $col-deut;
    background: light-dark(
      rgb(black, 2%),
      rgb(white, 8%));

      @media (prefers-contrast: more) {
        color: $col-deut-contrast;
      }
  }

  &:active {
    background: light-dark(
      rgb(black, 5%),
      rgb(white, 16%));
  }
}

</style>
