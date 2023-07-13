import Head from "next/head";

// Styles
import "./globals.css";

// Icon
import favicon from "../public/favicon.ico";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Icon */}
        <link rel="icon" type="icon" href={favicon}></link>
      </Head>
      <body className="relative antialiased font-sans text-dark">
        {children}
      </body>
    </html>
  );
}
