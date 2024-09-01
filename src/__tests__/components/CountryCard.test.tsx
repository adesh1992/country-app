import { render, screen } from '@testing-library/react';
import CountryCard from '../../components/CountryCard';

const mockCountry = {
  name: { common: 'Testland' },
  population: 1000000,
  region: 'Europe',
  capital: ['Testville'],
  flags: { png: 'https://via.placeholder.com/150' },
  timezones: [],
  languages: {},
  currencies: {},
};

test('renders CountryCard with correct data', () => {
  render(<CountryCard country={mockCountry} onClick={() => {}} />);

  expect(screen.getByText('Testland')).toBeInTheDocument();
  expect(screen.getByText('Capital: Testville')).toBeInTheDocument();
  expect(screen.getByText('Population: 1,000,000')).toBeInTheDocument();
  expect(screen.getByText('Region: Europe')).toBeInTheDocument();
});
