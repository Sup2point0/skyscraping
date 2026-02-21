<script lang="ts">

import Site from "#src/site-data.json";

import Header from "#parts/header.svelte";
import Footer from "#parts/footer.svelte";

import { base } from "$app/paths";


const paths = [
  "articles/walkthrough/foreword.md",
  "articles/walkthrough/primer.md",
];

</script>


<article>
  <Header title="Walkthrough" capt="A guided tour through the art of skyscraping" />

  <div class="content">
    <p> Welcome to skyscraping! </p>
    <p> While there’s no compulsory “order” to any of this, this page collates the page of this website into a somewhat digestable order, switching between different types of pages to keep things dynamic and engaging. </p>
    <p> Nothing more to say. Enjoy! </p>

    <br>

    <ul>
      <li>
        <a href="{base}/walk/foreword">Foreword</a>
        <ul>
          <li><a href="{base}/walk/primer">Adventure Awaits</a></li>
        </ul>
      </li>

      <li>
        <a href="{base}/walk">Setting Out: <em>4x4</em></a>
        <ul>
          <li><a href="{base}/">The Game Plan</a></li>
          <li><a href="{base}/cases/stairs">Case: Stairs</a></li>
          <li><a href="{base}/cases/silhouette">Case: Silhouette</a></li>
          <li><a href="{base}/tech/pencilmarks">Technique: Pencil Marks</a></li>
          <li><a href="{base}/cases/blockade">Case: Blockade</a></li>
          <li><a href="{base}/">Clueless</a></li>
          <li><a href="{base}/tech/guesswork">Technique: Guesswork, I’m Guessing?</a></li>
        </ul>
      </li>
      
      <li>
        <a href="{base}/walk">Gearing Up: <em>5x5</em></a>
        <ul>
          <li><a href="{base}/"></a></li>
        </ul>
      </li>
      
      <li>
        <a href="{base}/walk">Bring the Heat: <em>6x6</em></a>
        <ul>
          <li><a href="{base}/"></a></li>
        </ul>
      </li>
      
      <li>
        <a href="{base}/walk">Gateway to Chaos: <em>7x7</em></a>
        <ul>
          <li><a href="{base}/"></a></li>
        </ul>
      </li>
      
      <li>
        <a href="{base}/walk">In the Deep End: <em>8x8</em></a>
        <ul>
          <li><a href="{base}/"></a></li>
        </ul>
      </li>
    </ul>
  </div>

  <Footer />
</article>
