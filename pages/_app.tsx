import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import LandingPage from '../src/layouts/LandingPage/LandingPage';
import Dashboard from '../src/layouts/Dashboard/Dashboard';
import HeadComponent from '../src/layouts/shared/HeadComponent';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  if (router.pathname.startsWith('/dashboard')) {
    return (
      <Dashboard>
        <HeadComponent />
        <Component {...pageProps} />
      </Dashboard>
    )
  }

  if (router.pathname.startsWith('/auth')) {
    return (
      <>
        <HeadComponent />
        <Component {...pageProps} />
      </>
    )
  }

  return (
    <LandingPage>
      <HeadComponent />
      <Component {...pageProps} />
    </LandingPage>
  )
}

export default MyApp
