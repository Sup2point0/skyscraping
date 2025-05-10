<script>

import Header from "#parts/header.svelte"
import Footer from "#parts/footer.svelte";

import Content from "./~content.svx";
import { metadata as page } from "./~content.svx";

</script>


<article>
  <Header title={page.head} capt={page.capt} />
  
  <div class="content">
    <Content />
  </div>

  <Footer date={page.date_display} path={page.path} />
</article>
