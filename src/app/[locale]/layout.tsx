import "../globals.css";
import Script from "next/script";
import SitejetsInit from "@/components/SitejetsInit";

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;
  return (
    <html lang={resolvedParams.locale}>
      <head>
        <title>nesco.kz</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/images/16x16/15272829/NEScOwhite-L-l3mLjtlMNfQ2gCwnxmqw-T9tmA2pJdq7AF4JR2j44SQ.png" sizes="16x16" />
        <link rel="icon" type="image/png" href="/images/32x32/15272829/NEScOwhite-L-l3mLjtlMNfQ2gCwnxmqw-T9tmA2pJdq7AF4JR2j44SQ.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="/images/96x96/15272829/NEScOwhite-L-l3mLjtlMNfQ2gCwnxmqw-T9tmA2pJdq7AF4JR2j44SQ.png" sizes="96x96" />
        <link rel="apple-touch-icon-precomposed" sizes="152x152" href="/images/152x152/15272829/NEScOwhite-L-l3mLjtlMNfQ2gCwnxmqw-T9tmA2pJdq7AF4JR2j44SQ.png" />
      </head>
      <body className={`page-12029726 pagelayout-1 index culture-${resolvedParams.locale}`}>
        <SitejetsInit />
        {children}
        <Script src="/webcard/static/app.bundle.1773313786.js" strategy="afterInteractive" />
        <Script src="/js/custom.250403193652.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
