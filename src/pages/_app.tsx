import { AppProps } from 'next/app';
import { AppProvider } from '@/context/_AppContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
     <AppProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </AppProvider>
  );
};

export default MyApp;