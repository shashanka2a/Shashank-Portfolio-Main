import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#FF0040" />
        <meta name="description" content="Shashank Jagannatham's portfolio showcasing full-stack development projects, startup ventures, and hackathon achievements" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        
        {/* Additional meta tags for better SEO */}
        <meta name="author" content="Shashank Jagannatham" />
        <meta name="keywords" content="portfolio, web developer, full-stack, React, Next.js, startup, hackathon" />
        <meta property="og:title" content="Shashank Jagannatham - Web-Slinger Developer" />
        <meta property="og:description" content="Swinging through the multiverse of modern web development! From React dimensions to Node.js realms." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bangers&family=Comic+Neue:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
