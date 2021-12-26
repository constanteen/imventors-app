import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import LandingPage from '../src/layouts/LandingPage/LandingPage';
import Dashboard from '../src/layouts/Dashboard/Dashboard';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  if (router.pathname.startsWith('/dashboard')) {
    return (
      <Dashboard>
        <Component {...pageProps} />
      </Dashboard>
    )
  }

  return (
    <LandingPage>
      <Component {...pageProps} />
    </LandingPage>
  )
}

export default MyApp
