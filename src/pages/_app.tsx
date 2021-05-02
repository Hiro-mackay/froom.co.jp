import '../styles/tailwind.compiled.css';
import 'katex/dist/katex.css';
import { useRouter } from 'next/router';
import * as gtag from '../lib/gtag';
import { useEffect } from 'react';

export default ({ Component, pageProps }) => {
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
