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
  <section>
    <NavLink text="Skyscraping" link="https://sup2point0.github.io/skyscraping" />
    <NavLink text="Notation" intern="notation" />
    <NavLink text="Glossary" intern="glossary" />
  </section>

  <section>
    <NavLink text="Walkthrough" intern="walk" header={true} />
    <NavLink text="Foreword" intern="walk/foreword" />
    <NavLink text="Primer" intern="walk/primer" />
    <NavLink text="Clueless" intern="walk/clueless" disabled={true} />
  </section>

  <section>
    <NavLink text="Techniques" intern="tech" header={true} />
    <NavLink text="Guesswork, I’m Guessing?" intern="tech/guesswork" />
    <NavLink text="Pencil Marks" intern="tech/pencilmarks" disabled={true} />
    <NavLink text="Haven" intern="tech/haven" disabled={true} />
    <NavLink text="Pinpoint" intern="tech/pinpoint" disabled={true} />
    <NavLink text="Couples" intern="tech/couples" disabled={true} />
  </section>

  <section>
    <NavLink text="Cases" intern="cases" header={true} />
    <NavLink text="Silhouette" intern="cases/silhouette" />
    <NavLink text="Stairs" intern="cases/stairs" />
    <NavLink text="Lighthouse" intern="cases/lighthouse" />
    <NavLink text="Blockade" intern="cases/blockade" />
    <NavLink text="Meet in the Middle" intern="cases/meet-in-the-middle" />
    <NavLink text="Slide" intern="cases/" disabled={true} />
    <NavLink text="Leap of Faith" intern="cases/leap-of-faith" />
    <NavLink text="High-Rise" intern="cases/high-rise" />
    <NavLink text="Slide" intern="cases/" disabled={true} />
    <NavLink text="Hideout" intern="cases/" disabled={true} />
    <NavLink text="Middle Ground" intern="cases/middle-ground" />
    <NavLink text="Frontier" intern="cases/" disabled={true} />
  </section>

  <section>
    <NavLink text="Showerthoughts" intern="thoughts" header={true} />
    <NavLink text="The Discrete Difficulty of Size" intern="thoughts/size" />
    <NavLink text="Satisfaction" intern="thoughts/satisfaction" disabled={true} />
    <NavLink text="Imagination vs Guesswork" intern="thoughts/imagination-vs-guesswork" />
    <NavLink text="Mistakes" intern="thoughts/mistakes" />
    <NavLink text="Nontriviality" intern="thoughts/nontriviality" disabled={true} />
  </section>

  <section>
    <NavLink text="Solutions" intern="solutions" header={true} />
    <NavLink text="A Curious Crossways" intern="solutions/curious-crossways" />
  </section>

  <section>
    <NavLink text="Meta" intern="info" header={true} />
    <NavLink text="Synopsis" intern="info/synopsis" disabled={true} />
    <NavLink text="FAQ" intern="info/faq" />
    <NavLink text="Licence" intern="info/licence" />
  </section>
</nav>


<style lang="scss">

nav {
  flex-grow: 1;
  max-width: 25vw;
  padding: 2.5rem 1vw 4rem;
  display: flex;
  flex-flow: column nowrap;
  gap: 1.5rem;
  overflow-y: auto;

  background: light-dark(
    rgb(black, 2%),
    rgb(white, 4%));
  
  &.mobile {
    max-width: 100vw;
  }
}

section {
  display: flex;
  flex-flow: column nowrap;
}

</style>
