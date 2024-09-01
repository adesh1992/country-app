import React from 'react';
import Image from 'next/image';
import { Country } from '../hooks/useCountries';

interface CountryCardProps {
  country: Country;
  onClick: () => void;
}

const CountryCard: React.FC<CountryCardProps> = ({ country, onClick }) => {
  return (
    <div className="country-card" onClick={onClick}>
      <Image src={country.flags.png} alt={country.name.common} width={100} height={60} />
      <h3>{country.name.common}</h3>
      <p>Capital: {country.capital?.[0]}</p>
      <p>Population: {country.population.toLocaleString()}</p>
      <p>Region: {country.region}</p>
    </div>
  );
};

export default CountryCard;
