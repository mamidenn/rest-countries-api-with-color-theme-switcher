<script lang="ts">
  import CountryDetail from "$lib/CountryDetail.svelte";
  import type { PageData } from "./$types";
  import { ArrowBack } from "svelte-ionicons";

  export let data: PageData;
</script>

<a class="button mb-16" href="/">
  <ArrowBack class="inline-block align-middle" />
  <span class="align-middle">Back</span>
</a>
<CountryDetail country={data.country} />
