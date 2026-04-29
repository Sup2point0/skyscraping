<script lang="ts">

import Site from "#src/site-data.json";

import Header from "#parts/header.svelte";
import Footer from "#parts/footer.svelte";

import { base } from "$app/paths";


const paths: string[] = Site.index.cases.pages;

</script>


<article>
  <Header title="Cases" capt="Specific strategies in specific scenarios" />

  <div class="content">
    <p>
      As you solve Skyscrapers, you’ll no doubt pick up loads of tiny deductions that you can apply in under very specific circumstances. In these pages, I cover those that I’ve found.
    </p>

    <ul>
      {#each paths as path}
        {@const page = Site.pages[path]}

        {#if page}
          <li>
            <a href="{base}/{page.dest}">{page.title}</a>
          </li>
        {/if}
      {/each}
    </ul>

    <h2> How to Use Cases </h2>
    <p>
      As you can see, there’s a lot of cases, and I’m always adding more. This is because there’s pretty much no limit to specificity!
    </p>
    <p>
      In each page, you’ll find a quick, general summary at the very start. If it’s your first time reading about that case, you might find the summary quite dense and abstract. Afterwards, I include a number of concrete examples, from which you might be able to intuitively figure out exactly how the case works.
    </p>
    <p>
      The most important part is the explanation, where I cover the logic behind why the case works. This isn’t meant to be just for the curious, it’s how you learn and internalise the case (and become a better puzzle solver!).
    </p>
    <p>
      Finally, where I can I’ve added some challenge puzzles to help test your understanding. They’ll increase in complexity, with the final challenges often requiring deductions from other cases. This is all to build your familiarity with applying the cases in a real puzzle.
    </p>
    <p>
      This is my recommended reading order, but you can really use the pages however you like – maybe you want to understand the logic first before looking at the examples, or maybe you’ll skip the potentially confusing summary. It’s up to you =)
    </p>

    <h2> Reminders </h2>
    <ul>
      <li><p>
        Memorising the cases isn’t really the point – it’s about understanding the logic behind them. In fact, once you fully internalise the logic, they’ll probably start to seem obvious.
      </p></li>
      <li><p>
        A lot of cases are generic – they’ll apply even in puzzles of different sizes. (This is why you’ll often see me using numbers relative to <em>N</em>)
      </p></li>

      <li><p>
        While a case may not be applicable initially, with further deductions you may reach a state where you <em>can</em> apply it. Always be on the lookout, don’t be afraid to look over lanes you’ve already checked!
      </p></li>
    </ul>
  </div>

  <Footer />
</article>
