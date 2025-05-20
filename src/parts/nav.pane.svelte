<!-- @component NavPane

The global side navigation pane.
-->

<script lang="ts">

import NavLink from "#parts/nav.link.svelte";

interface Props {
  mobile?: boolean;
}

let { mobile = false }: Props = $props();

</script>


<nav class:mobile>
  <NavLink text="Skyscraping" link="https://sup2point0.github.io/skyscraping" />

  <section>
    <h3> Walkthrough </h3>
    <NavLink text="Foreword" intern="foreword" />
    <NavLink text="Primer" intern="primer" />
    <NavLink text="Clueless" intern="clueless" />
    <NavLink text="Glossary" intern="jargon" />
  </section>

  <section>
    <h3> Techniques </h3>
    <NavLink text="Guesswork, I’m Guessing?" intern="tech/guesswork" />
    <NavLink text="Pencil Marks" intern="tech/pencil-marks" />
    <NavLink text="Haven" intern="tech/haven" />
    <NavLink text="Pinpoint" intern="tech/pinpoint" />
    <NavLink text="Couples" intern="tech/couples" />
  </section>

  <section>
    <h3> Cases </h3>
    <NavLink text="Silhouette" intern="cases/silhouette" />
    <NavLink text="Stairs" intern="cases/stairs" />
    <NavLink text="Blockade" intern="cases/blockade" />
    <NavLink text="Slide" intern="cases/" />
    <NavLink text="Leap of Faith" intern="cases/" />
    <NavLink text="High-Rise" intern="cases/" />
    <NavLink text="Slide" intern="cases/" />
    <NavLink text="Hideout" intern="cases/" />
    <NavLink text="Middle Ground" intern="cases/" />
    <NavLink text="Frontier" intern="cases/" />
  </section>

  <section>
    <h3> Showerthoughts </h3>
    <NavLink text="The Discrete Difficulty of Size" intern="thoughts/size" />
    <NavLink text="Satisfaction" intern="thoughts/satisfaction" />
    <NavLink text="Guesswork vs Imagination" intern="thoughts/imagination-vs-guesswork" />
    <NavLink text="Nontriviality" intern="thoughts/nontriviality" />
  </section>

  <section>
    <h3> Meta </h3>
    <NavLink text="Synopsis" intern="info/synopsis" />
    <NavLink text="FAQ" intern="info/faq" />
    <NavLink text="Licence" intern="info/licence" />
  </section>
</nav>


<style lang="scss">

nav {
  flex-grow: 1;
  max-width: 25vw;
  &.mobile { max-width: 100vw; }
  padding: 2.5rem 1.5rem 4rem;
  display: flex;
  flex-flow: column nowrap;
  gap: 1.5rem;
  overflow-y: auto;

  background: light-dark(
    rgb(black, 2%),
    rgb(white, 4%));
}

section {
  display: flex;
  flex-flow: column nowrap;

  h3 {
    margin: 0 0 0.5em;
    @include font-body;
    font-weight: 500;
    font-size: 100%;
    color: $col-prot;
    @media (prefers-contrast: more) { color: $col-prot-contrast; }

    .num {
      font-style: italic;
    }
  }
}

a {
  color: $col-text;
  text-decoration: none;
}

</style>
