<script>
  import "../app.postcss";
  import { MoonOutline } from "svelte-ionicons";
</script>

<header
  class="flex justify-between px-16 py-6 shadow-md shadow-light-input/10 bg-light-element relative z-10"
>
  <h1 class="text-xl font-bold">Where in the world?</h1>
  <button class="space-x-1">
    <MoonOutline size="16" class="inline align-middle" />
    <span class="align-middle">Dark Mode</span>
  </button>
</header>
