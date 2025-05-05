<!-- @component NavPane

The global side navigation pane
-->

<script lang="ts">

import NavLink from "#parts/nav.link.svelte";

</script>


<nav>
  <section>
    <h3> Setting Out: <span class="numeric">4x4</span> </h3>
    <NavLink text="Case" intern="case/" />
    <NavLink text="Case" intern="case/" />
    <NavLink text="Case" intern="case/" />
    <NavLink text="Case" intern="case/" />
    <NavLink text="Case" intern="case/" />
    <NavLink text="Case" intern="case/" />
    <NavLink text="Case" intern="case/" />
    <NavLink text="Case" intern="case/" />
  </section>

  <section>
    <h3> Gearing Up: <span class="numeric">5x5</span> </h3>
    <NavLink text="Case" intern="case/" />
    <NavLink text="Case" intern="case/" />
    <NavLink text="Case" intern="case/" />
    <NavLink text="Case" intern="case/" />
    <NavLink text="Case" intern="case/" />
    <NavLink text="Case" intern="case/" />
    <NavLink text="Case" intern="case/" />
    <NavLink text="Case" intern="case/" />
    <NavLink text="Case" intern="case/" />
  </section>

  <section>
    <h3> Bring the Heat: <span class="numeric">6x6</span> </h3>
    <NavLink text="Case" intern="case/" />
    <NavLink text="Case" intern="case/" />
    <NavLink text="Case" intern="case/" />
    <NavLink text="Case" intern="case/" />
    <NavLink text="Case" intern="case/" />
    <NavLink text="Case" intern="case/" />
    <NavLink text="Case" intern="case/" />
    <NavLink text="Case" intern="case/" />
    <NavLink text="Case" intern="case/" />
  </section>
</nav>


<style lang="scss">

nav {
  flex-grow: 1;
  max-width: 25vw;
  padding: 1.25rem 1.5rem 5rem;
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

    .numeric {
      font-style: italic;
    }
  }
}

</style>
