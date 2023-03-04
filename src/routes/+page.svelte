<script lang="ts">
  import FilterDropdown from "$lib/FilterDropdown.svelte";
  import OverviewCard from "$lib/OverviewCard.svelte";
  import SingleTextForm from "$lib/SingleTextForm.svelte";
  import Fuse from "fuse.js";
  import { Search } from "svelte-ionicons";
  import type { PageData } from "./$types";

  export let data: PageData;

  const fuse = new Fuse(data.countries, {
    keys: [
      "name.common",
      "name.official",
      "capital",
      {
        name: "name.nativeName",
        getFn: (obj) =>
          Object.values(obj.name.nativeName)
            .map(({ official, common }) => `${official} (${common})`)
            .join(" "),
      },
    ],
  });
  $: countries = (
    search ? fuse.search(search).map((result) => result.item) : data.countries
  ).filter((country) => !filterRegion || country.region === filterRegion);

  const regions = [...new Set(data.countries.map((country) => country.region))];

  let filterRegion: string | null;
  let search = data.search ?? "";
</script>

<main class="container mx-auto my-14">
  <div class="flex justify-between mb-14">
    <SingleTextForm bind:text={search} action="?/search" name="search">
      <Search size="16" slot="icon" />
    </SingleTextForm>
    <FilterDropdown options={regions} bind:selected={filterRegion} />
  </div>
  <div class="grid lg:grid-cols-4 sm:grid-cols-2 gap-24">
    {#each countries as country (country.cca3)}
      <OverviewCard {country} />
    {/each}
  </div>
</main>
