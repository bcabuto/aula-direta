import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proposta Comercial — Aula Direta",
  description: "Proposta de desenvolvimento da plataforma Aula Direta",
  robots: "noindex, nofollow",
};

export default function PropostaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="proposta-standalone">
      {children}
    </div>
  );
}
