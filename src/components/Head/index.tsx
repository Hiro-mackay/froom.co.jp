import React from 'react';
import Heads from 'next/head';
import { useRouter } from 'next/router';

export const Head = ({ titlePre, description = '' }) => {
  const router = useRouter();
  return (
    <Heads>
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <title>{titlePre === 'Home' ? 'Make Learn Interesting' : `${titlePre}`} | Froom Inc.</title>
      <link rel="icon" href="/images/favicon.ico" />
      <meta name="description" content={description || '株式会社Froomは、「Make Learn Interesting」をミッションに、教育活動のOMO（Online Merges with Offline）を実現する企業です。'} />
      <meta property="og:url" content={router.basePath} />
      <meta property="og:title" content="Froom Inc. Make Learn Interesting" />
      <meta property="og:description" content={description || '株式会社Froomは、「Make Learn Interesting」をミッションに、教育活動のOMO（Online Merges with Offline）を実現する企業です。'} />
      <meta property="og:image" content="/images/og-image.png" />
      <meta name="twitter:site" content="Froom Inc. Make Learn Interesting" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="/images/og-image.png" />

      <meta charSet="utf-8" />

      <script>
        {`(function(d) {
                var config = {kitId: 'azl7goz',scriptTimeout: 3000,async: true},
                h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
            })(document)`}
      </script>
    </Heads>
  );
};
