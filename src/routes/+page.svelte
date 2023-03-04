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

<div class="flex flex-wrap gap-14 justify-between sm:mb-14 mb-10">
  <div class="w-full sm:w-2/5 min-w-[256px]">
    <SingleTextForm bind:text={search} action="?/search" name="search">
      <Search size="16" slot="icon" />
    </SingleTextForm>
  </div>
  <FilterDropdown options={regions} bind:selected={filterRegion} />
</div>
<div
  class="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 sm:mx-0 mx-10 sm:gap-24 gap-12"
>
  {#each countries as country (country.cca3)}
    <OverviewCard {country} />
  {/each}
</div>
