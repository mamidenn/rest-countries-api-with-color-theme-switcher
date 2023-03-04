<script>
  import "../app.postcss";
  import { MoonOutline } from "svelte-ionicons";

  function toggleDarkMode() {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    }
  }
</script>

<header
  class="flex justify-between sm:px-16 px-8 sm:py-6 py-10 shadow-strong bg-light-element dark:bg-dark-element relative z-10"
>
  <h1 class="text-xl font-bold">Where in the world?</h1>
  <button class="space-x-1" on:click={toggleDarkMode}>
    <MoonOutline size="16" class="inline align-middle" />
    <span class="align-middle">Dark Mode</span>
  </button>
</header>
