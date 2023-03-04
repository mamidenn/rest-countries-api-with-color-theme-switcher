<script>
  import "../app.postcss";
  import Header from "$lib/Header.svelte";
</script>

<svelte:head>
  <script lang="ts">
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  </script>
</svelte:head>

<Header />
<main class="container mx-auto sm:my-14 my-8 px-8">
  <slot />
</main>
