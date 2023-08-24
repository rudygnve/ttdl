import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <meta charSet="utf-8" />
      <title>TTDL - Free TikTok Video Downloader</title>
      <link rel="canonical" href="https://ttdl-six.vercel.app/" />
      <meta
        property="og:title"
        content="Free TikTok Video Downloader Without Watermark"
      />
      <meta
        property="og:site_name"
        content="Free TikTok Video Downloader Without Watermark"
      />
      <meta
        property="description"
        content="TTDL is a free TikTok Video Downloader without watermark website. It allows users to download their favorite TikTok videos without any watermark or logo."
      ></meta>
      <meta property="og:url" content="https://ttdl-six.vercel.app/" />
      <meta
        property="og:description"
        content="TTDL is a free TikTok Video Downloader without watermark website. It allows users to download their favorite TikTok videos without any watermark or logo."
      />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="" />
      <script src="/assets/main.js"></script>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}