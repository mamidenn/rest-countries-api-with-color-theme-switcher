<script lang="ts">
  import type { Country } from "$lib/Country";
  type CountryOverview = Pick<
    Country,
    "cca3" | "name" | "population" | "region" | "capital" | "flags"
  >;

  export let country: CountryOverview;
</script>

<article
  class="rounded-md shadow-md bg-light-element overflow-hidden focus-within:ring-1 ring-blue"
>
  <a href={`/country/${country.cca3}`} class="block h-full">
    <img
      src={country.flags.svg}
      alt={country.flags.alt}
      title={country.flags.alt}
      loading="lazy"
      class="w-full aspect-[3/2] object-cover"
    />
    <div class="p-8">
      <h2 class="font-bold text-xl mb-3">{country.name.common}</h2>
      <dl>
        <div>
          <dt>Population</dt>
          <dd>{country.population.toLocaleString()}</dd>
        </div>
        <div>
          <dt>Region</dt>
          <dd>{country.region}</dd>
        </div>
        <div>
          <dt>Capital</dt>
          <dd>{country.capital.join(", ")}</dd>
        </div>
      </dl>
    </div>
  </a>
</article>

<style lang="postcss">
  dt,
  dd {
    @apply inline;
  }
  dt {
    @apply font-normal;
  }
  dt::after {
    content: ": ";
  }
</style>
