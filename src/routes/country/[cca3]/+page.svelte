<script lang="ts">
  import CountryDetail from "$lib/CountryDetail.svelte";
  import type { PageData } from "./$types";
  import { ArrowBack } from "svelte-ionicons";
  import LinkButton from "$lib/LinkButton.svelte";

  export let data: PageData;
</script>

<div class="mb-16">
  <LinkButton href="/">
    <ArrowBack class="inline-block align-middle" />
    <span class="align-middle">Back</span>
  </LinkButton>
</div>
<CountryDetail country={data.country} />
