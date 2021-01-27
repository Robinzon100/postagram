import Head from "next/head";
import "../styles/main.scss";
import Navigation from "components/global/Naviagtion/Navigation";

function MyApp({ Component, pageProps }) {
  return (
    <>
     <Head>
        <title>Oxeni</title>
        <link rel="shortcut icon" href="/svg/small_icon.svg" />
      </Head>
      <Head>
        <meta name="title" content="🔵 Oxeni" />
        <meta name="description" content="cutting edge technology to create true technical beauty of the future"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://oxeni.dev/meta_images/og_image.png"
        />
        <meta property="og:title" content="🔵 Oxeni" />
        <meta property="og:description" content="cutting edge technology to create true technical beauty of the future"
        />
        <meta property="og:image" content="/meta_images/og_image.png" />/
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://oxeni.dev/meta_images/og_image.png"
        />
        <meta property="twitter:title" content="🔵 Oxeni" />
        <meta property="twitter:description" content="cutting edge technology to create true technical beauty of the future"
        />
        <meta property="twitter:image" content="/meta_images/og_image.png" />
      </Head>


      <Navigation />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
