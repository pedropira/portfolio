import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pedro Pira | Full Stack Developer",
  description: "Software Analyst and Developer. Specializing in transforming technical challenges into tangible solutions with React.js, FastAPI, and robust architecture. I don't solve problems, I create solutions.",
  keywords: ["Pedro Pira", "Pedro Daniel Pirachican", "Developer", "Full Stack", "React", "Next.js", "Tunja", "Colombia", "Frontend", "Backend", "FastAPI"],
  authors: [{ name: "Pedro Pira" }],
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://pedropira.dev", // Cambiar por tu URL final
    title: "Pedro Pira | Full Stack Developer",
    description: "I don't solve problems, I create solutions. Professional Developer Portfolio.",
    siteName: "Pedro Pira Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pedro Pira Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pedro Pira | Full Stack Developer",
    description: "I don't solve problems, I create solutions. Professional Developer Portfolio.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
