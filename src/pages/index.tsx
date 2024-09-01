import { useState } from 'react';
import { useCountries } from '../hooks/useCountries';
import CountryCard from '../components/CountryCard';
import RegionFilter from '../components/RegionFilter';
import SearchBar from '../components/SearchBar';
import { filterCountriesByRegion } from '../utils/filterCountries';
import { useRouter } from 'next/router';

const HomePage: React.FC = () => {
  const { countries, loading, error } = useCountries();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const router = useRouter();

  const regions = [...new Set(countries.map(country => country.region))];

  const filteredCountries = filterCountriesByRegion(countries, selectedRegion).filter(country =>
    country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <SearchBar onSearch={setSearchQuery} />
      <RegionFilter
        regions={regions}
        selectedRegion={selectedRegion}
        onSelectRegion={setSelectedRegion}
      />
      <div className="country-grid">
        {filteredCountries.map(country => (
          <CountryCard
            key={country.name.common}
            country={country}
            onClick={() => router.push(`/${country.name.common.toLowerCase()}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
