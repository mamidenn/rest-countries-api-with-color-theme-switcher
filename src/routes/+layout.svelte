<script>
  import "../app.postcss";
  import Header from "$lib/Header.svelte";
</script>

<Header />
<main class="container mx-auto sm:my-14 my-8 px-8">
  <slot />
</main>
