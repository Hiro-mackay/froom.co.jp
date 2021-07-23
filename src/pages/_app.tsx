import '../styles/tailwind.compiled.css';
import '../styles/base.css';
import 'katex/dist/katex.css';
import { useRouter } from 'next/router';
import * as gtag from '../lib/gtag';
import { useEffect } from 'react';

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  useEffect(() => {
    if (!gtag.GA_TRACKING_ID) return;

    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  return <Component {...pageProps} />;
};
export default App;
