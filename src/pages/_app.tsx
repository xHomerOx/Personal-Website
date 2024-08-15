import { AppProps } from 'next/app';
import { HeaderProvider } from '@/context/_HeaderContext';
import Header from '@/components/layout/Header';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <HeaderProvider>
      <Header />
      <Component {...pageProps} />
    </HeaderProvider>
  );
};

export default MyApp;