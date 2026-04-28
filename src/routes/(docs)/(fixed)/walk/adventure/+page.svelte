<script lang="ts">

import Site from "#src/site-data.json";

import Header from "#parts/header.svelte";
import Footer from "#parts/footer.svelte";

import { base } from "$app/paths";

</script>


<article>
  <Header title="Adventure" />

  <div class="content">
    <p> Welcome to skyscraping! </p>

    <br>

    <ul>
      <li><a href="{base}/walk/adventure/4x4">Setting Out: <em>4x4</em></a></li>
      <li><a href="{base}/walk/adventure">Gearing Up: <em>5x5</em></a></li>
      <li><a href="{base}/walk/adventure">Bring the Heat: <em>6x6</em></a></li>
      <li><a href="{base}/walk/adventure">Gateway to Chaos: <em>7x7</em></a></li>
      <li><a href="{base}/walk/adventure">In the Deep End: <em>8x8</em></a></li>
    </ul>
  </div>

  <Footer />
</article>
