// pages/_document.tsx

import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Here you can add other global meta tags, link to fonts, etc. */}
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* Tawk.to Chatbot Script */}
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
                var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
                (function(){
                  var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                  s1.async=true;
                  s1.src='https://embed.tawk.to/6804f47a30ebf5190d221bf0/1ip9llvuv';
                  s1.charset='UTF-8';
                  s1.setAttribute('crossorigin','*');
                  s0.parentNode.insertBefore(s1,s0);
                })();
              `,
            }}
          ></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
