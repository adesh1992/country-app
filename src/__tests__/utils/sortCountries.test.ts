import { sortCountriesByPopulation } from '../../utils/sortCountries';

const mockCountries = [
  { population: 1000, name: { common: 'A' }, region: '', capital: [], flags: { png: '' }, timezones: [], languages: {}, currencies: {} },
  { population: 2000, name: { common: 'B' }, region: '', capital: [], flags: { png: '' }, timezones: [], languages: {}, currencies: {} },
  { population: 1500, name: { common: 'C' }, region: '', capital: [], flags: { png: '' }, timezones: [], languages: {}, currencies: {} },
];

test('sorts countries by population ascending', () => {
  const sorted = sortCountriesByPopulation(mockCountries, 'asc');
  expect(sorted[0].population).toBe(1000);
  expect(sorted[2].population).toBe(2000);
});

test('sorts countries by population descending', () => {
  const sorted = sortCountriesByPopulation(mockCountries, 'desc');
  expect(sorted[0].population).toBe(2000);
  expect(sorted[2].population).toBe(1000);
});
