<script>

import "#styles/essence.scss";

import Clicky from "#parts/clicky.svelte";

import { base } from "$app/paths";

</script>


<svelte:head>
  <title> Skyscraping · by Sup#2.0 </title>
</svelte:head>


<div class="root">
  <main>

<header>
  <img alt="" src="{base}/skyscraping-icon.svg">

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
  <h2> Never heard of Skyscrapers? </h2>

  <div class="para">
    <p> Awesome. You should give one a shot. Yep, right now! It takes about, like, 30 seconds to learn. <!--<a href="{base}/showerthoughts/why">Here’s why you’ll love Skyscrapers.</a>--> </p>
  </div>

  <Clicky intern="walk/primer">
    Here’s how they work.
  </Clicky>
</section>

<section>
  <h2> Landmarks to Explore... </h2>

  <ul class="cards">    
    <a class="card" href="{base}/tech">
      <h3> Techniques </h3>
      <p> General strategies for solving Skyscrapers. </p>
    </a>
    
    <a class="card" href="{base}/cases">
      <h3> Cases </h3>
      <p> Specific scenarios encountered when solving Skyscrapers. </p>
    </a>
    
    <a class="card" href="{base}/thoughts">
      <h3> Showerthoughts </h3>
      <p> Reflections on the art of Skyscrapers. </p>
    </a>
    
    <a class="card" href="{base}/solutions">
      <h3> Solutions </h3>
      <p> Walkthroughs to select Skyscrapers puzzles. </p>
    </a>
  </ul>
</section>

<section>
  <h2> The Adventure </h2>

  <ul class="cards">
    <a class="card" href="{base}/walk/4x4">
      <h3> Setting Out: <em>4x4</em> </h3>
      <p> The easiest ones can be solved in no time, even with no prior experience. Generally trivial, but really good for building your intuition and familiarity as a beginner. </p>
    </a>
    
    <a class="card" href="{base}/walk/5x5">
      <h3> Gearing Up: <em>5x5</em> </h3>
      <p> Such a wide range of difficulty levels can be achieved just 1 size above 4x4. </p>
    </a>
    
    <a class="card" href="{base}/walk/6x6">
      <h3> Bring the Heat: <em>6x6</em> </h3>
      <p> Incredible openness and complexity. </p>
    </a>
    
    <a class="card" href="{base}/walk/7x7">
      <h3> Gateway to Chaos: <em>7x7</em> </h3>
      <p>  </p>
    </a>
  </ul>
</section>

<section>
  <blockquote>
    <h3> Looking for an app to solve Skyscrapers? </h3>
    <p> <a target="_blank" href="https://sup2point0.github.io/lattix">lattix<sup>↗</sup></a> is a lightweight web app I made for solving any grid puzzles, like <em>Skyscrapers</em> or <em>Sudoku</em>. It’s got tons of quality-of-life features including multiselect, keybinds, and cell highlighting, and is super customisable. </p>
  </blockquote>
</section>

<section>
  <blockquote>
    <h3> Do you like integration? </h3>
    <p> If you’re here cuz you like Skyscrapers puzzles, you’re probabilistically much more likely to be a maths fan as well. If you happen to like integration, I’ve written over 300 integrals which are on my site <a target="_blank" href="https://sup2point0.github.io/integrity">Integrity<sup>↗</sup></a>. </p>
  </blockquote>
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
  max-width: 60rem;
  @include font-body;
  text-align: center;
}

header {
  padding-bottom: 0.5rem;

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
    font-size: 120%;
  }

  img {
    max-width: 8em;
    aspect-ratio: 1;
  }
}

section {
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    width: 60%;
    padding-bottom: 0.75em;
    margin: 0 0 0.75em;
    font-weight: 500;
    border-bottom: 1px solid $col-line;
  }
}

footer {
  padding-top: 2rem;
}

.para {
  width: 75%;
  padding-bottom: 2em;

  p {
    margin: 0.75em 0;
    line-height: 160%;
  }
}

ul {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 1em;
  list-style: none;
}

.cards {
  padding-top: 1rem;
}

.card {
  flex: 1 1 15em;
  min-width: 15em;
  max-width: 30vw;
  padding: 1rem 1.5rem;
  color: unset;
  text-decoration: none;
  background: light-dark(white, black);
  box-shadow: 0 2px 4px $col-line;
  transition: all 0.1s ease-out;

  &:hover, &:focus-visible {
    cursor: pointer;
    box-shadow: 0 4px 8px $col-line;

    h3 {
      color: $col-deut;
    }
  }

  h3 {
    margin-bottom: 0.5em;
    color: $col-prot;
    font-weight: 500;
  }
}

blockquote {
  width: 75%;
  padding: 1.5rem 2rem;
  @include font-ui;
  border: 1px solid $col-prot;

  h3 {
    padding-bottom: 0.5em;
    font-weight: 500;
  }

  p {
    font-weight: 350;
    line-height: 150%;
  }
}

a:not(.card) {
  @include link-underline();
}

</style>
