<!-- @component Settings

Options for configuring user preferences.
-->

<script lang="ts">

import { prefs } from "#scripts/stores";

</script>


<form>
  <section>
    <input id="center-puzzles" type="checkbox" bind:checked={prefs.center_puzzles}>

    <label for="center-puzzles">
      <h4> Center Puzzles </h4>
      <p> Horizontally align puzzles to the middle of the page. </p>
    </label>
  </section>
  
  <section>
    <input id="underline-links" type="checkbox" bind:checked={prefs.underline_links}>

    <label for="underline-links">
      <h4> Underline Links </h4>
      <p> Display a line below links for accessibility. </p>
    </label>
  </section>
  
  <section>
    <input id="show-glossary-links" type="checkbox" bind:checked={prefs.show_glossary_links}>

    <label for="show-glossary-links">
      <h4> Show Glossary Links </h4>
      <p> Include links to terms in the Glossary. You may wish to disable this if you are familiar with them and find the links distracting. </p>
    </label>
  </section>
  
  <section>
    <input id="dotted-glossary-links" type="checkbox" bind:checked={prefs.dotted_glossary_links}>

    <label for="dotted-glossary-links">
      <h4> Dotted Glossary Links </h4>
      <p> Use alternate dotted underlines for links to terms in the Glossary. Note that this has no effect if <strong>Underline Links</strong> is disabled. </p>
    </label>
  </section>
</form>


<style lang="scss">

form {
  width: 100%;
  padding: 1.5rem 1rem;
  display: flex;
  flex-flow: column nowrap;
  gap: 1.25rem;
}

section {
  display: flex;
  flex-flow: row nowrap;
  align-items: start;
  gap: 1rem;
}

input {
  margin-top: 0.25rem;
}

label {  
  &:hover {
    cursor: pointer;
  }

  h4 {
    padding-bottom: 0.4em;
    @include font-ui;
    font-weight: normal;
    font-size: 100%;
  }

  p {
    @include font-body;
    font-size: 80%;
    color: $col-text-deut;
  }
}

</style>
