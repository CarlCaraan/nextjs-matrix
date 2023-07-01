import "./globals.css";
import "../public/google6f58b8895f43efb3.html";

// export const metadata = {
//   title: "Matrix Philippines - Software Solution for You",
//   description:
//     "Matrix is a dynamic, innovative, and forward-thinking start-up company based in Laguna that takes great pride in providing top-notch, cutting-edge, and low cost-effective web design services to cater to all your online needs.",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative antialiased font-sans text-dark">
        {children}
      </body>
    </html>
  );
}
