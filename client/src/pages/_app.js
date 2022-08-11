import '../styles/index.scss';
import Head from 'next/head';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>OnlineChat</title>
      </Head>
      <div className="wrapper">
        <Component {...pageProps} />
      </div>
    </>
  );
}