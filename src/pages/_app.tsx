import { AppProps } from 'next/app';
import '../app/globals.css';
import Layout from '@/components/layout';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App;
