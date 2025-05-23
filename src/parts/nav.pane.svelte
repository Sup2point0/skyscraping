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
    <NavLink text="Glossary" intern="jargon" />
  </section>

  <section>
    <NavLink text="Walkthrough" intern="walkthrough" header={true} />
    <NavLink text="Foreword" intern="walk/foreword" />
    <NavLink text="Primer" intern="walk/primer" />
    <NavLink text="Clueless" intern="walk/clueless" />
  </section>

  <section>
    <NavLink text="Techniques" intern="tech" header={true} />
    <NavLink text="Guesswork, I’m Guessing?" intern="tech/guesswork" />
    <NavLink text="Pencil Marks" intern="tech/pencil-marks" />
    <NavLink text="Haven" intern="tech/haven" />
    <NavLink text="Pinpoint" intern="tech/pinpoint" />
    <NavLink text="Couples" intern="tech/couples" />
  </section>

  <section>
    <NavLink text="Cases" intern="cases" header={true} />
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
    <NavLink text="Showerthoughts" intern="thoughts" header={true} />
    <NavLink text="The Discrete Difficulty of Size" intern="thoughts/size" />
    <NavLink text="Satisfaction" intern="thoughts/satisfaction" />
    <NavLink text="Guesswork vs Imagination" intern="thoughts/imagination-vs-guesswork" />
    <NavLink text="Nontriviality" intern="thoughts/nontriviality" />
  </section>

  <section>
    <NavLink text="Meta" intern="info" header={true} />
    <NavLink text="Synopsis" intern="info/synopsis" />
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
