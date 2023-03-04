<script lang="ts">
  import CountryDetail from "$lib/CountryDetail.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<div class="bg-light-element py-16">
  <div class="container mx-auto">
    <CountryDetail country={data.country} />
  </div>
</div>
