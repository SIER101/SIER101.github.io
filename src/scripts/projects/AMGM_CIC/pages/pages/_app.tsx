import NavBar from '@/components/navbar';
import '@/styles/globals.css';
import 'katex/dist/katex.min.css';
import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps, router }: AppProps) {
  if (router.asPath.split('/', 2)[1] == 'framework') return <Component {...pageProps} />;
  return (
    <>
      <header style={{ position: 'sticky', top: '0', zIndex: '100' }}>
        <NavBar />
      </header>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}
