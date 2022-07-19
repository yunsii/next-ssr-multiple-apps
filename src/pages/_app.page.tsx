import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <div>_app</div>
      <hr />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
