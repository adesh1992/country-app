import { render, screen } from '@testing-library/react';
import HomePage from '../../pages/index';
import { useCountries } from '../../hooks/useCountries';

jest.mock('../../hooks/useCountries');

const mockCountries = [
  {
    name: { common: 'Testland' },
    population: 1000000,
    region: 'Europe',
    capital: ['Testville'],
    flags: { png: 'https://via.placeholder.com/150' },
    timezones: [],
    languages: {},
    currencies: {},
  },
];

describe('HomePage', () => {
  beforeEach(() => {
    (useCountries as jest.Mock).mockReturnValue({
      countries: mockCountries,
      loading: false,
      error: null,
    });
  });

  test('renders countries', () => {
    render(<HomePage />);
    expect(screen.getByText('Testland')).toBeInTheDocument();
  });

  test('shows loading state', () => {
    (useCountries as jest.Mock).mockReturnValue({
      countries: [],
      loading: true,
      error: null,
    });
    render(<HomePage />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('shows error state', () => {
    (useCountries as jest.Mock).mockReturnValue({
      countries: [],
      loading: false,
      error: 'Failed to fetch countries.',
    });
    render(<HomePage />);
    expect(screen.getByText('Failed to fetch countries.')).toBeInTheDocument();
  });
});
