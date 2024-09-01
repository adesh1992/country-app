import { useState, useEffect } from 'react';
import axios from 'axios';

export interface Country {
  name: {
    common: string;
  };
  population: number;
  region: string;
  capital: string[];
  flags: {
    png: string;
  };
  timezones: string[];
  languages: { [key: string]: string };
  currencies: { [key: string]: { name: string } };
}

export const useCountries = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get<Country[]>('https://restcountries.com/v3.1/all');
        setCountries(response.data);
      } catch (err) {
        setError('Failed to fetch countries.');
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  return { countries, loading, error };
};
