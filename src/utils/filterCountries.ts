import { Country } from '../hooks/useCountries';

export const filterCountriesByRegion = (countries: Country[], region: string) => {
  if (!region) return countries;
  return countries.filter(country => country.region === region);
};
