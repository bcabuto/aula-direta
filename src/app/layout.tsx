import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aula Direta - Cursos Técnicos EAD",
  description: "Construa sua trajetória profissional com cursos técnicos EAD de qualidade. Modalidade a distância com praticidade e certificação.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} antialiased bg-[#F5F7FA]`}>
        {children}
      </body>
    </html>
  );
}
