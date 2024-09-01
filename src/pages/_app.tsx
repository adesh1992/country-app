import '../styles/globals.css';
import { AppProps } from 'next/app';
import { CountryProvider } from '../context/CountryContext';
import { useDarkMode } from '../hooks/useDarkMode';

function MyApp({ Component, pageProps }: AppProps) {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <CountryProvider>
      <div className={darkMode ? 'dark' : ''}>
        <Component {...pageProps} />
      </div>
    </CountryProvider>
  );
}

export default MyApp;
