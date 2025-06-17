<script>

import "#styles/essence.scss";

import Clicky from "#parts/clicky.svelte";

import { base } from "$app/paths";

</script>


<div class="root">
  <main>

<header>
  <h1> Skyscraping </h1>
  <p class="caption"> by Sup#2.0 </p>
</header>

<section>
  <div class="para">
    <p> This is a deep dive into strategies and techniques for solving <em>Skyscrapers</em>, a Sudoku-style variety of puzzle. </p>
    <p> Whether you’re a novice looking to learn, an experienced samurai sharpening their arsenal, or you thought this would be about the miraculous engineering of really tall buildings, there’s something here for you. </p>
  </div>

  <Clicky intern="walk/foreword">
    Shall we depart upon our adventure?
  </Clicky>
</section>

<section>
  <div class="para">
    <p> Never heard of Skyscrapers? </p>
    <p> Awesome. You should give one a shot. Yep, right now! It takes about, like, 30 seconds to learn. <a href="{base}/showerthoughts/why">Here’s why you’ll love Skyscrapers.</a> </p>
  </div>

  <Clicky intern="walk/primer">
    Here’s how they work.
  </Clicky>
</section>

<section>
  <h2> Landmarks to Explore... </h2>
</section>

<footer>
  <ul class="links">
    <li> <a href="{base}/info/synopsis">synopsis</a> </li>
    <li> <a href="{base}/info/faq">FAQ</a> </li>
    <li> <a href="{base}/info/edu">decoded</a> </li>
    <li> <a href="{base}/info/licence">licence</a> </li>
  </ul>
</footer>

  </main>
</div>


<style lang="scss">

.root {
  padding: 4rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

main {
  @include font-body;
  text-align: center;
}

header {
  h1 {
    padding-bottom: 0.25em;
    margin: 0;
    color: $col-text-highlight;
    font-weight: normal;
    font-size: 400%;
    font-style: italic;
  }

  p.caption {
    margin: 0;
  }
}

section {
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    width: 80%;
    margin: 0;
    padding-bottom: 0.75em;
    font-weight: 500;
    border-bottom: 1px solid $col-line;
  }

  .para {
    width: 75%;
    padding-bottom: 1em;
  }

  p {
    margin: 0.5em 0;
  }
}

a {
  @include link-underline();
}

ul {
  display: flex;
  flex-direction: row wrap;
  justify-content: center;
  gap: 1em;
  list-style: none;
}

</style>
