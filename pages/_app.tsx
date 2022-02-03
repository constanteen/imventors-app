import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import LandingPage from '../src/layouts/LandingPage/LandingPage';
import Dashboard from '../src/layouts/Dashboard/Dashboard';
import HeadComponent from '../src/layouts/shared/HeadComponent';
import {SessionProvider} from 'next-auth/react';
import { Provider } from 'react-redux';
import { useStore } from '../store/store';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const store = useStore(pageProps.initialReduxState);

  if (router.pathname.startsWith('/dashboard')) {
    return (
      <SessionProvider session={pageProps.session}>
        <Provider store={store}>
          <Dashboard>
            <HeadComponent />
            <Component {...pageProps} />
          </Dashboard>
        </Provider>
      </SessionProvider>
    )
  }

  if (router.pathname.startsWith('/account-confirm-email/')) {
    return (
      <>
        <HeadComponent />
        <Component {...pageProps} />
      </>
    )
  }

  if (router.pathname.startsWith('/auth')) {
    return (
      <Provider store={store}>
        <HeadComponent />
        <Component {...pageProps} />
      </Provider>
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
