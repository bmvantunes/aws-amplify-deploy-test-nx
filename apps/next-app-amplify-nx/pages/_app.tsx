import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>ZZZZZZZ</title>
      </Head>
      <div className="app">
        <main>
          HELLOOOOOOOOOOOOOOOOO
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default CustomApp;
