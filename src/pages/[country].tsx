import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { Country } from '../hooks/useCountries';
import Image from 'next/image';

interface CountryDetailsProps {
  country: Country;
}

const CountryDetails: React.FC<CountryDetailsProps> = ({ country }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <p>Loading...</p>;
  }

  return (
    <div className="country-details">
      <button onClick={() => router.back()}>Back</button>
      <Image src={country?.flags.png} alt={country?.name?.common} width={320} height={200} />
      <h1>{country?.name?.common}</h1>
      <p>Capital: {country?.capital?.[0]}</p>
      <p>Population: {country?.population.toLocaleString()}</p>
      <p>Region: {country?.region}</p>
      <p>Timezones: {country?.timezones.join(', ')}</p>
      <p>Languages: {Object.values(country?.languages).join(', ')}</p>
      <p>Currencies: {Object.values(country?.currencies).map(currency => currency?.name).join(', ')}</p>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch('https://restcountries.com/v3.1/all');
  const countries: Country[] = await response.json();

  const paths = countries.map((country) => ({
    params: { country: country?.name?.common?.toLowerCase() },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const countryName = params?.country;
  const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
  const country = await response.json();

  return {
    props: {
      country: country[0] ?? {},
    },
  };
};

export default CountryDetails;
