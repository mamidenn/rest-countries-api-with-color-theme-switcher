import type { Country } from "$lib/Country";
import type { PageLoad } from "./$types";

export const load = (async ({ params, fetch }) => {
  const { cca3 } = params;
  const country = (await fetch(
    `https://restcountries.com/v3.1/alpha/${cca3}?fields=name,population,region,subregion,capital,tld,currencies,languages,flags,borders`
  ).then((res) => res.json())) as Pick<
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
    | "borders"
  >;
  if (country.borders.length === 0)
    return { country: { ...country, borders: [] } };
  const neighbors = (await fetch(
    `https://restcountries.com/v3.1/alpha?codes=${country.borders.join(
      ","
    )}&fields=name,cca3`
  ).then((res) => res.json())) as Pick<Country, "name" | "cca3">[];
  return { country: { ...country, borders: neighbors } };
}) satisfies PageLoad;
