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
        <title>NEScO — National Engineering & Science Olympiad</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/images/149/15248642/logo2-eaRu4CpcSUUG0yx_VFAUbA.png" />
        <link rel="apple-touch-icon-precomposed" href="/images/149/15248642/logo2-eaRu4CpcSUUG0yx_VFAUbA.png" />
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
