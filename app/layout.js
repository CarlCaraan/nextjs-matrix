// Styles
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative antialiased font-sans text-dark">
        {children}
      </body>
    </html>
  );
}
