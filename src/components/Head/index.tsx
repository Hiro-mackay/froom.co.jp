import React from 'react';
import NextHead from 'next/head';
import Script from 'next/script';
import { useRouter } from 'next/router';
import { GA_TRACKING_ID } from '../../lib/gtag';

export const Head = ({ titlePre, description = '' }) => {
  const router = useRouter();
  return (
    <NextHead>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta charSet="utf-8" />
      <title>{titlePre === 'Home' ? 'Make Make Learn Interesting' : `${titlePre}`} | Froom Inc.</title>
      <link rel="icon" href="/images/favicon.ico" />
      <meta name="description" content={description || '株式会社Froomは、「Make Learn Interesting」をミッションに、教育活動のOMO（Online Merges with Offline）を実現する企業です。'} />
      <meta name="google-site-verification" content="dy4zVD5RdchspJO3UPCW2FLC3P7TxqXB1OVtV6xKAAA" />
      <meta property="og:url" content={router.basePath} />
      <meta property="og:title" content="Froom Inc. Make Learn Interesting" />
      <meta property="og:description" content={description || '株式会社Froomは、「Make Learn Interesting」をミッションに、教育活動のOMO（Online Merges with Offline）を実現する企業です。'} />
      <meta property="og:image" content="/images/og-image.png" />
      <meta name="twitter:site" content="Froom Inc. Make Learn Interesting" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="/images/og-image.png" />
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(d) {
            var config = {
              kitId: 'azl7goz',
              scriptTimeout: 3000,
              async: true
            },
            h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
          })(document);`,
        }}
      />
      
      {GA_TRACKING_ID && (
        <>
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
        `,
            }}
          />
        </>
      )}
    </NextHead>
  );
};
