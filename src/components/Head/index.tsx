import React from 'react';
import Heads from 'next/head';
const ogImageUrl = 'https://notion-blog.now.sh/og-image.png';


export const Head = ({ titlePre = '' }) => {
  return (
    <Heads>
      <title>{titlePre ? `${titlePre} |` : ''} My Notion Blog</title>
      <meta name="description" content="An example Next.js site using Notion for the blog" />
      <meta name="og:title" content="Froom Inc." />
      <meta property="og:image" content={ogImageUrl} />
      <meta name="twitter:site" content="Froom Inc." />
      <meta name="twitter:card" content="" />
      <meta name="twitter:image" content={ogImageUrl} />
      <script>
        {`(function(d) {
                var config = {kitId: 'azl7goz',scriptTimeout: 3000,async: true},
                h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
            })(document)`}
      </script>
    </Heads>
  );
};
