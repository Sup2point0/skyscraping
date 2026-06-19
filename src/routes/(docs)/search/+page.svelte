<script lang="ts">

import { pages } from "#src/site-data.json" with { type: "json" };

import { filter_pages } from "./filter";

import Header from "#parts/header.svelte";

import { onMount } from "svelte";
import { base } from "$app/paths";


let search_input: HTMLInputElement;
onMount(() => search_input?.focus());

let query = $state("");

let pages_filtered = $derived(filter_pages(query, pages));

</script>


<Header title="Search" />

<search>
  <input type="search"
    placeholder="where to today?"
    bind:this={search_input}
    bind:value={query}
  />
</search>

<ul class="results">
  {#each pages_filtered as page}
    <li>
      <a href="{base}/{page.dest}">
        <div class="upper">
          <h4> {@html page.title} </h4>
          {#if page.dest}
            <p class="link"> {page.dest.split("/")[0]} </p>
          {/if}
        </div>
        <p> {@html page.capt} </p>
      </a>
    </li>
  {/each}
</ul>


<style lang="scss">

search {
  padding-bottom: 2rem;
}

input {
  appearance: none;
  min-width: min(50vw, 40em);
  padding: 0.5em 1em;
  @include font-ui;
  font-size: 90%;
  border: 1px solid $col-line;
  outline: none;
  transition: all 0.1s ease-out;

  &::placeholder {
    color: $col-text-deut;
  }

  &:hover {
    cursor: text;
    border-color: $col-prot;
  }
}

ul {
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20em, 1fr));
  gap: 1rem;

  li {
    flex: 1 1 15em;
    background: light-dark(white, black);
    box-shadow: 0 2px 4px $col-line;
    transition: all 0.1s ease-out;

    &:hover, &:focus-visible {
      cursor: pointer;
      box-shadow: 0 4px 8px $col-line;

      .upper h4 {
        color: $col-deut;
      }
    }
  }

  a {
    display: block;
    padding: 1rem 1.5rem;
    @include font-body;
    color: unset;
    text-decoration: none;

    .upper {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      gap: 0.5rem;

      h4 {
        margin-bottom: 0.5em;
        color: $col-prot;
        font-weight: 500;
      }

      p.link {
        @include font-ui;
        color: $col-text-deut;
        font-size: 80%;
      }
    }
  }
}

</style>
