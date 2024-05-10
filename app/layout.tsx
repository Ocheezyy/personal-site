import type { Metadata } from "next";
import "./globals.css";
import { Archivo } from 'next/font/google';
// import './styles.css'

const archivo = Archivo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-archivo',
});


export const metadata: Metadata = {
  title: "Sean O'Donnell",
  description: "About Sean",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={archivo.variable}>
        {children}
      </body>
    </html>
  );
}
