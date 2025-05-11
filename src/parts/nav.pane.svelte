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
    <h3> Foreword </h3>
    <NavLink text="Wait, Skyscrapers?" intern="foreword" />
    <NavLink text="Adventure Awaits" intern="primer" />
    <NavLink text="Glossary" intern="jargon" />
  </section>

  <section>
    <h3> Setting Out: <span class="num">4x4</span> </h3>
    <NavLink text="Case: Silhouette" intern="cases/silhouette" />
    <NavLink text="Case: Stairs" intern="cases/stairs" />
    <NavLink text="Technique: Pencil Marks" intern="tech/pencil-marks" />
    <NavLink text="Case: Blockade" intern="cases/blockade" />
    <NavLink text="Clueless" intern="4x4/clueless" />
    <NavLink text="Technique: Guesswork, I’m Guessing?" intern="tech/guesswork" />
  </section>

  <section>
    <h3> Gearing Up: <span class="num">5x5</span> </h3>
    <NavLink text="Technique: Haven" intern="tech/haven" />
    <NavLink text="Case: Slide" intern="cases/" />
    <NavLink text="Case: Leap of Faith" intern="cases/" />
    <NavLink text="Case: High-Rise" intern="cases/" />
  </section>

  <section>
    <h3> Bring the Heat: <span class="num">6x6</span> </h3>
    <NavLink text="Case" intern="cases/" />
  </section>

  <section>
    <h3> In the Deep End: <span class="num">7x7</span> </h3>
    <NavLink text="Case" intern="cases/" />
  </section>

  <section>
    <h3> Showerthoughts </h3>
    <NavLink text="The Discrete Difficulty of Size" intern="thoughts/size" />
    <NavLink text="Satisfaction" intern="thoughts/" />
    <NavLink text="Guesswork vs Imagination" intern="thoughts/" />
    <NavLink text="Nontriviality" intern="thoughts/" />
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
