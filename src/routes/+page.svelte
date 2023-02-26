<script lang="ts">
  import { Search } from "svelte-ionicons";
  import Fuse from "fuse.js";
  import Dropdown from "$lib/Dropdown.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;

  const fuse = new Fuse(data.countries, {
    keys: [
      "name.common",
      { name: "name.official", weight: 0.7 },
      { name: "capital", weight: 0.5 },
    ],
  });
  $: countries = (
    search ? fuse.search(search).map((result) => result.item) : data.countries
  ).filter((country) => !filterRegion || country.region === filterRegion);

  const regions = [...new Set(data.countries.map((country) => country.region))];
  let filterRegion: string | null;

  let search = "";
</script>

<div class="flex justify-between mb-14">
  <form
    class="w-2/5 min-w-[256px] flex rounded-md font- text-light-input bg-light-element shadow-md shadow-light-input/10"
  >
    <button type="submit" class="px-8 py-6 rounded-l-md">
      <Search size="16" />
    </button>
    <input
      type="text"
      placeholder="Search for a country..."
      class="w-full h-full p-6 pl-2 rounded-r-md border-0 placeholder:text-light-input"
      bind:value={search}
    />
  </form>
  <Dropdown
    class="form-select border-0 text-start px-8 py-6 w-60 rounded-md text-light-input bg-light-element shadow-md shadow-light-input/10"
    menuClass="mt-1 left-0 right-0 text-light-input bg-light-element rounded-md py-4 shadow-md shadow-light-input/10"
    placeholder="Filter by Region"
    options={regions}
    let:option
    bind:selected={filterRegion}
  >
    <div
      class="px-8 py-1 hover:bg-light-input/5 {filterRegion === option
        ? 'bg-light-input/5'
        : ''}"
    >
      {option}
    </div>
  </Dropdown>
</div>
<div class="grid grid-cols-4 gap-24">
  {#each countries as country}
    <article class="rounded-md shadow-md bg-light-element">
      <img
        src={country.flags.svg}
        alt={country.flags.alt}
        title={country.flags.alt}
        loading="lazy"
        class="w-full rounded-t-md aspect-[3/2] object-cover"
      />
      <div class="p-8 font-light">
        <h2 class="font-bold text-xl mb-3">{country.name.common}</h2>
        <p>
          <strong>Population:</strong>
          {country.population.toLocaleString()}
        </p>
        <p><strong>Region:</strong> {country.region}</p>
        <p><strong>Capital:</strong> {country.capital.join(", ")}</p>
      </div>
    </article>
  {/each}
</div>

<style lang="postcss">
  strong {
    @apply font-normal;
  }
</style>
