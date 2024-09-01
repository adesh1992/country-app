import React, { createContext, useContext, useState } from 'react';
import { Country } from '../hooks/useCountries';

interface CountryContextProps {
  countries: Country[];
  setCountries: (countries: Country[]) => void;
}

const CountryContext = createContext<CountryContextProps | undefined>(undefined);

export const CountryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [countries, setCountries] = useState<Country[]>([]);

  return (
    <CountryContext.Provider value={{ countries, setCountries }}>
      {children}
    </CountryContext.Provider>
  );
};

export const useCountryContext = () => {
  const context = useContext(CountryContext);
  if (!context) {
    throw new Error('useCountryContext must be used within a CountryProvider');
  }
  return context;
};
