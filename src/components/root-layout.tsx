export function RootLayout({
  lang,
  children,
  className,
}: {
  children?: React.ReactNode;
  lang: string;
  className?: string;
}) {
  return (
    <html lang={lang} className="!scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={className}
        style={{
          fontFamily: "Public Sans, sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}
