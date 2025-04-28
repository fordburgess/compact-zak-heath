import { useState, useEffect } from 'react';
import { AppProps } from 'next/app';
import '../app/globals.css';
import Layout from '@/components/layout';
import Loading from '@/components/loading';
import { useRouter } from 'next/router';

const App = ({ Component, pageProps }: AppProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    console.log(`router state: ${loading}`)
    const handleStart = (url: string) => {
      setLoading(true);
    };
    const handleComplete = (url: string) => {
      setLoading(false);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  return (
    <>
      {
        loading ? (
          <Loading />
        ) : (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )
      }
    </>
  )
}

export default App;
