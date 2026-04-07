<!-- @component PrefsPane

Options for configuring user preferences.
-->

<script lang="ts">

import { prefs } from "#src/scripts/stores";

</script>


<form>
  <section>
    <input id="center-puzzles" type="checkbox" bind:checked={prefs.center_puzzles}>
    <label for="center-puzzles"> Center Puzzles </label>
  </section>
  
  <section>
    <input id="show-glossary-links" type="checkbox" bind:checked={prefs.show_glossary_links}>
    <label for="show-glossary-links"> Show Glossary Links </label>
  </section>
  
  <section>
    <input id="underline-links" type="checkbox" bind:checked={prefs.underline_links}>
    <label for="underline-links"> Underline Links </label>
  </section>
</form>


<style lang="scss">

form {
  width: 100%;
  padding: 1.5rem 1rem;
  display: flex;
  flex-flow: column nowrap;
  gap: 1rem;
}

section {
  display: flex;
  flex-flow: row nowrap;
  gap: 0.5rem;
}

label {
  @include font-ui;
}

</style>
