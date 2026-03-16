import "./globals.css";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Attesi Mexico — Nature Retreat & Lodge",
  description:
    "A retreat space rooted in nature, reflection, and meaningful growth. Connect to the Earth, return to your soul at Attesi Mexico.",
  icons: {
    icon: [
      { url: "/assets/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/favicon-256.png", sizes: "256x256", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Attesi Mexico — Nature Retreat & Lodge",
    description:
      "A retreat space rooted in nature, reflection, and meaningful growth.",
    url: "https://attesi.mx",
    siteName: "Attesi Mexico",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LodgingBusiness",
              name: "Attesi Mexico",
              description:
                "A retreat space rooted in nature, reflection, and meaningful growth.",
              url: "https://attesi.mx",
              image:
                "https://attesi.mx/wp-content/uploads/2022/11/home-herobanner-1-1.jpg",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Manzana 004, 51009",
                addressLocality: "Barrio de San Miguel",
                addressRegion: "State of Mexico",
                addressCountry: "MX",
              },
              telephone: "+52 2072 225 187 47",
              email: "lodge@attesi.mx",
            }),
          }}
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
