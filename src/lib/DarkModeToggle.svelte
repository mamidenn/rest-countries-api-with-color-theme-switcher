<script>
  import "../app.postcss";
  import { MoonOutline, SunnyOutline } from "svelte-ionicons";
  import { browser } from "$app/environment";

  let darkMode = browser && document.documentElement.classList.contains("dark");

  function toggleDarkMode() {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      darkMode = false;
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      darkMode = true;
    }
  }
</script>

<button class="space-x-1" on:click={toggleDarkMode}>
  {#if darkMode}
    <SunnyOutline size="16" class="inline align-middle" />
    <span class="align-middle">Light Mode</span>
  {:else}
    <MoonOutline size="16" class="inline align-middle" />
    <span class="align-middle">Dark Mode</span>
  {/if}
</button>
