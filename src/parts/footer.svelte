<!-- @component Footer

The footer at the end of each page.
-->

<script lang="ts">

import { base } from "$app/paths";

interface Props {
  date?: string;
  path?: string;
}

let { date, path }: Props = $props();

</script>


<footer>
  <div class="info">
    {#if path}
      <p> View on <a target="_blank" href="https://github.com/Sup2point0/skyscraping/blob/main/{path}">GitHub</a> </p>
    {/if}
    
    {#if date}
      <p class="date"> Last updated <span>{date.split(" ").reverse().join(" ")}</span> </p>
    {/if}
  </div>

  <div class="about">
    <a href="https://sup2point0.github.io/skyscraping">
      <img alt="" src="{base}/skyscraping-icon.svg">
    </a>

    <p>
      <span style:font-size="120%">Skyscraping</span>&ensp;by <a target="_blank" href="https://github.com/Sup2point0">Sup#2.0</a>
    </p>
  </div>
</footer>


<style lang="scss">

footer {
  padding-top: 1rem;
  margin-top: 3rem;
  border-top: 1px solid $col-line;
}

p {
  @include font-body;
}

a:not(:has(img)) {
  @include link-underline;
}

.info {
  padding-bottom: 3rem;
  display: flex;
  flex-flow: row-reverse nowrap;
  justify-content: space-between;
  color: $col-text-deut;

  span {
    color: $col-text-highlight;
  }
}

.about {
  font-size: 80%;
  color: $col-text-deut;
  text-align: center;

  span {
    color: $col-text-highlight;
  }

  img {
    max-width: 4em;
    aspect-ratio: 1;
    margin-bottom: 0.5rem;
    transition: filter 0.1s ease-out;

    &:hover {
      filter: brightness(90%);
    }
  }
}

</style>
