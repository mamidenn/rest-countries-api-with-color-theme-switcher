<script lang="ts">
  import type { Country } from "$lib/Country";

  type CountryDetail = Pick<
    Country,
    | "name"
    | "population"
    | "region"
    | "subregion"
    | "capital"
    | "tld"
    | "currencies"
    | "languages"
    | "flags"
  > & { borders: Pick<Country, "name" | "cca3">[] };

  export let country: CountryDetail;
</script>

<div class="grid sm:grid-cols-[2fr_1fr_1fr] gap-x-24 gap-y-6">
  <img class="row-span-3" src={country.flags.svg} alt={country.flags.alt} />
  <h2 class="sm:col-span-2 text-3xl font-bold">
    {country.name.common}
  </h2>
  <dl>
    <div>
      <dt>Native Name</dt>
      <dd>
        {Object.values(country.name.nativeName)
          .map((v) => v.common)
          .join(", ")}
      </dd>
    </div>
    <div>
      <dt>Population</dt>
      <dd>{country.population.toLocaleString()}</dd>
    </div>
    <div>
      <dt>Region</dt>
      <dd>{country.region}</dd>
    </div>
    <div>
      <dt>Sub Region</dt>
      <dd>{country.subregion}</dd>
    </div>
    <div>
      <dt>Capital</dt>
      <dd>{country.capital.join(", ")}</dd>
    </div>
  </dl>
  <dl>
    <div>
      <dt>Top Level Domain</dt>
      <dd>{country.tld.join(", ")}</dd>
    </div>
    <div>
      <dt>Currencies</dt>
      <dd>
        {Object.values(country.currencies)
          .map((v) => v.name)
          .join(", ")}
      </dd>
    </div>
    <div>
      <dt>Languages</dt>
      <dd>
        {Object.values(country.languages).join(", ")}
      </dd>
    </div>
  </dl>
  {#if country.borders.length > 0}
    <div class="sm:col-span-2 flex sm:flex-row flex-col gap-4 sm:items-center">
      <h2 class="whitespace-nowrap font-normal">Border Countries:</h2>
      <ul class="flex flex-wrap gap-3">
        {#each country.borders as border (border.cca3)}
          <li>
            <a class="button" href="/country/{border.cca3}/">
              {border.name.common}
            </a>
          </li>
        {/each}
      </ul>
    </div>
  {/if}
</div>

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
