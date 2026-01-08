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
      <body>
        <Header />
        {children}
        <Footer/>

      </body>
    </html>
  );
}
