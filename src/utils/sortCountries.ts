import { Country } from '../hooks/useCountries';

export const sortCountriesByPopulation = (countries: Country[], order: 'asc' | 'desc') => {
  return countries.sort((a, b) => {
    if (order === 'asc') {
      return a.population - b.population;
    }
    return b.population - a.population;
  });
};
