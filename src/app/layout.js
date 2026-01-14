import "./globals.css";
import Header from "../components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Bitfix | Smart Digital Solutions",
  description:
    "Bitfix is a technology company providing web development, software solutions, mobile applications, and digital services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head  className="overflow-x-hidden">
        <title>Bitfix</title>
        <meta name="description" content="Bitfix website" />

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-MN4WJYBWEB"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-MN4WJYBWEB');
      `,
          }}
        />
      </head>

      <body className="overflow-x-hidden">
        <Header />
        {children}
        <Footer />

      </body>
    </html>
  );
}
