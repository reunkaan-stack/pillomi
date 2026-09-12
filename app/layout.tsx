import type { Metadata, Viewport } from "next";
import { Poppins, Caveat } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "700"],
  variable: "--font-caveat",
  display: "swap",
});

const siteUrl = "https://pillomi.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Pillomi | Seyahat Boyun Yastığı — Çok Yakında",
    template: "%s | Pillomi",
  },
  description:
    "Pillomi seyahat boyun yastığı: yumuşak dokulu, makinada yıkanabilir, her yolculukta yanında. Online satış çok yakında pillomi.com'da.",
  keywords: [
    "pillomi",
    "seyahat boyun yastığı",
    "travel neck pillow",
    "boyun yastığı",
    "uçak yastığı",
    "saç ekimi sonrası yastık",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Pillomi",
    locale: "tr_TR",
    title: "Pillomi | Seyahat Boyun Yastığı — Çok Yakında",
    description:
      "Her yolculukta yanında. Yumuşak dokulu, makinada yıkanabilir seyahat boyun yastığı. Online satış çok yakında.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pillomi | Seyahat Boyun Yastığı — Çok Yakında",
    description:
      "Her yolculukta yanında. Yumuşak dokulu, makinada yıkanabilir seyahat boyun yastığı.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#fbf6f0",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className={`${poppins.variable} ${caveat.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
