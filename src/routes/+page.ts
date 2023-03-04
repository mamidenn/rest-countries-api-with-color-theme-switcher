import type { Country } from "../lib/Country";
import type { PageLoad } from "./$types";

export const load = (async ({ fetch, url }) => {
  const countries = (await fetch(
    "https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags,cca3"
  ).then((res) => res.json())) as Pick<
    Country,
    "name" | "population" | "region" | "capital" | "flags" | "cca3"
  >[];
  return {
    search: url.searchParams.get("search"),
    countries: countries.sort((a, b) => b.population - a.population),
  };
}) satisfies PageLoad;
