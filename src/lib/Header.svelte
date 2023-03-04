<script>
  import "../app.postcss";
  import DarkModeToggle from "$lib/DarkModeToggle.svelte";
</script>

<header
  class="flex justify-between sm:px-16 px-8 sm:py-6 py-10 shadow-strong bg-light-element dark:bg-dark-element relative z-10"
>
  <h1 class="text-xl font-bold">Where in the world?</h1>
  <DarkModeToggle />
</header>
