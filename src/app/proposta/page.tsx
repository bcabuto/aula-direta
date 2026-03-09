"use client";

import { useState } from "react";

const features = [
  { name: "Site institucional completo", s1: true, s2: true, s3: true },
  { name: "Design responsivo + SEO", s1: true, s2: true, s3: true },
  { name: "Catálogo de cursos com detalhe", s1: true, s2: true, s3: true },
  { name: "Formulário de contato + WhatsApp", s1: true, s2: true, s3: true },
  { name: "Deploy + domínio personalizado", s1: true, s2: true, s3: true },
  { name: "Checkout com pagamento real", s1: false, s2: true, s3: true },
  { name: "PIX, cartão e boleto", s1: false, s2: true, s3: true },
  { name: "Emails transacionais", s1: false, s2: true, s3: true },
  { name: "Gestão de cursos (adicionar, editar, remover)", s1: false, s2: true, s3: true },
  { name: "Painel administrativo", s1: false, s2: "Cursos + Matrículas", s3: true },
  { name: "Login e área do aluno", s1: false, s2: false, s3: true },
  { name: "Videoaulas e progresso", s1: false, s2: false, s3: true },
  { name: "Avaliações e certificados", s1: false, s2: false, s3: true },
  { name: "Dashboard com métricas", s1: false, s2: false, s3: true },
];

function Check() {
  return (
    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-600">
      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
    </span>
  );
}

function Dash() {
  return <span className="text-gray-300 text-lg">—</span>;
}

export default function PropostaPage() {
  const [expandedScenario, setExpandedScenario] = useState<number | null>(2);

  return (
    <div className="min-h-screen bg-[#F5F7FA]" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      {/* Cover */}
      <header className="bg-gradient-to-br from-[#1B3A6B] via-[#1B3A6B] to-[#2a5298] text-white relative overflow-hidden">
        <div className="absolute top-[-40%] right-[-15%] w-[400px] h-[400px] bg-white/[0.03] rounded-full" />
        <div className="absolute bottom-[-30%] left-[-10%] w-[350px] h-[350px] bg-[#F5A623]/[0.06] rounded-full" />

        <div className="relative z-10 max-w-3xl mx-auto px-5 py-12 md:py-16">
          <div className="flex items-center gap-2.5 mb-8">
            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
            </div>
            <span className="text-xl font-bold">Aula</span>
            <span className="text-xl font-bold text-[#F5A623]">Direta</span>
          </div>

          <h1 className="text-3xl md:text-[42px] font-extrabold leading-tight mb-3">Proposta Comercial</h1>
          <p className="text-white/60 text-base md:text-lg">Desenvolvimento de plataforma web para cursos técnicos EAD</p>

          <div className="flex flex-wrap gap-6 md:gap-10 mt-8 text-sm">
            <div>
              <span className="text-white/40 block">Cliente</span>
              <span className="text-white/90 font-semibold">Aula Direta</span>
            </div>
            <div>
              <span className="text-white/40 block">Responsável</span>
              <span className="text-white/90 font-semibold">Bruno Cabuto</span>
            </div>
            <div>
              <span className="text-white/40 block">Data</span>
              <span className="text-white/90 font-semibold">08 de março de 2026</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-5 py-10 md:py-14">

        {/* Sobre */}
        <section className="mb-12">
          <SectionTitle>Sobre o Projeto</SectionTitle>
          <p className="text-gray-600 leading-relaxed">
            Desenvolvimento de plataforma web profissional para a <strong className="text-[#1B3A6B]">Aula Direta</strong> — empresa de cursos técnicos EAD. O objetivo é criar uma presença digital moderna que apresente os cursos, transmita credibilidade e converta visitantes em alunos matriculados.
          </p>
        </section>

        {/* Cenários */}
        <section className="mb-12">
          <SectionTitle>Cenários de Desenvolvimento</SectionTitle>
          <p className="text-gray-500 text-sm mb-6">Cada cenário é incremental — o seguinte inclui tudo do anterior.</p>

          <div className="space-y-4">
            {/* Cenário 1 */}
            <ScenarioCard
              number={1}
              title="Site Institucional"
              subtitle="Site vitrine profissional com foco em captação de leads e apresentação dos cursos."
              price="3.500"
              timeline="2 a 3 semanas"
              isExpanded={expandedScenario === 1}
              onToggle={() => setExpandedScenario(expandedScenario === 1 ? null : 1)}
              payments={[
                { label: "50% na aprovação", value: "R$ 1.750" },
                { label: "50% na entrega", value: "R$ 1.750" },
              ]}
              features={[
                "Página inicial com hero, diferenciais, cursos em destaque e depoimentos",
                "Página \"Sobre Nós\" com história, missão, visão e valores",
                "Catálogo de cursos com filtro por área e página de detalhe de cada curso",
                "FAQ, página de Contato com formulário funcional e envio por email",
                "Integração com WhatsApp (botão flutuante) e design 100% responsivo",
                "SEO básico (meta tags, Open Graph, sitemap) + deploy + domínio",
              ]}
            />

            {/* Cenário 2 */}
            <ScenarioCard
              number={2}
              title="Site com Checkout e Pagamento Online"
              subtitle="Tudo do Cenário 1 + fluxo completo de matrícula com pagamento real integrado."
              price="7.500"
              timeline="4 a 6 semanas"
              recommended
              isExpanded={expandedScenario === 2}
              onToggle={() => setExpandedScenario(expandedScenario === 2 ? null : 2)}
              payments={[
                { label: "40% na aprovação", value: "R$ 3.000" },
                { label: "30% na entrega do checkout + painel", value: "R$ 2.250" },
                { label: "30% na entrega final", value: "R$ 2.250" },
              ]}
              features={[
                "Fluxo de matrícula em 3 etapas (dados pessoais → pagamento → confirmação)",
                "Gateway de pagamento: PIX com QR Code, cartão com parcelamento e boleto",
                "Banco de dados para matrículas com atualização automática de status",
                "Emails transacionais automáticos (confirmação, comprovante de pagamento)",
                "Painel de gestão de cursos: criar, editar, ativar/desativar e excluir cursos sem depender do desenvolvedor",
                "Painel administrativo para matrículas, pagamentos e relatórios básicos",
              ]}
            />

            {/* Cenário 3 */}
            <ScenarioCard
              number={3}
              title="Plataforma Completa com Área do Aluno"
              subtitle="Tudo do Cenário 2 + portal do aluno e painel administrativo completo."
              price="15.000"
              timeline="7 a 10 semanas"
              isExpanded={expandedScenario === 3}
              onToggle={() => setExpandedScenario(expandedScenario === 3 ? null : 3)}
              payments={[
                { label: "30% na aprovação", value: "R$ 4.500" },
                { label: "25% na entrega da área do aluno", value: "R$ 3.750" },
                { label: "25% na entrega do painel admin", value: "R$ 3.750" },
                { label: "20% na entrega final", value: "R$ 3.000" },
              ]}
              features={[
                "Área do Aluno: login seguro, dashboard \"Meus Cursos\", videoaulas por módulo, progresso",
                "Download de materiais complementares (PDFs, apostilas) e avaliações online",
                "Emissão automática de certificado de conclusão em PDF",
                "Painel Admin completo: gestão de cursos, alunos, videoaulas e financeiro",
                "Dashboard com métricas (alunos ativos, receita, conversão) e comunicados",
              ]}
            />
          </div>
        </section>

        {/* Comparativo */}
        <section className="mb-12">
          <SectionTitle>Comparativo</SectionTitle>

          {/* Desktop table */}
          <div className="hidden md:block bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className="text-left p-4 bg-[#1B3A6B] text-white font-semibold w-[40%]">Funcionalidade</th>
                  <th className="text-center p-4 bg-[#1B3A6B] text-white font-semibold">Cenário 1</th>
                  <th className="text-center p-4 bg-[#F5A623] text-white font-semibold">Cenário 2 ⭐</th>
                  <th className="text-center p-4 bg-[#1B3A6B] text-white font-semibold">Cenário 3</th>
                </tr>
              </thead>
              <tbody>
                {features.map((f, i) => (
                  <tr key={f.name} className={i % 2 === 0 ? "bg-gray-50/50" : ""}>
                    <td className="p-3.5 pl-4 text-gray-700 font-medium">{f.name}</td>
                    <td className="p-3.5 text-center">{f.s1 === true ? <Check /> : <Dash />}</td>
                    <td className="p-3.5 text-center">{f.s2 === true ? <Check /> : typeof f.s2 === "string" ? <span className="text-[#F5A623] font-semibold text-xs">{f.s2}</span> : <Dash />}</td>
                    <td className="p-3.5 text-center">{f.s3 === true ? <Check /> : <Dash />}</td>
                  </tr>
                ))}
                <tr className="bg-gray-100 font-bold">
                  <td className="p-4 pl-4 text-[#1B3A6B]">Investimento</td>
                  <td className="p-4 text-center text-[#1B3A6B] text-base">R$ 3.500</td>
                  <td className="p-4 text-center text-[#F5A623] text-lg">R$ 7.500</td>
                  <td className="p-4 text-center text-[#1B3A6B] text-base">R$ 15.000</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden space-y-4">
            {[
              { num: 1, key: "s1" as const, price: "R$ 3.500", rec: false },
              { num: 2, key: "s2" as const, price: "R$ 7.500", rec: true },
              { num: 3, key: "s3" as const, price: "R$ 15.000", rec: false },
            ].map((scenario) => (
              <div key={scenario.num} className={`bg-white rounded-xl border-2 overflow-hidden ${scenario.rec ? "border-[#F5A623] shadow-md" : "border-gray-100"}`}>
                <div className={`p-4 ${scenario.rec ? "bg-gradient-to-r from-[#1B3A6B] to-[#2a5298] text-white" : "bg-gray-50"}`}>
                  {scenario.rec && <span className="text-[10px] font-bold uppercase tracking-wider text-[#F5A623] block mb-1">⭐ Recomendado</span>}
                  <div className="flex items-center justify-between">
                    <span className={`font-bold ${scenario.rec ? "text-white" : "text-[#1B3A6B]"}`}>Cenário {scenario.num}</span>
                    <span className={`text-xl font-extrabold ${scenario.rec ? "text-[#F5A623]" : "text-[#1B3A6B]"}`}>{scenario.price}</span>
                  </div>
                </div>
                <div className="p-4 space-y-2">
                  {features.map((f) => {
                    const val = f[scenario.key];
                    return (
                      <div key={f.name} className="flex items-center justify-between text-sm">
                        <span className="text-gray-600 pr-2">{f.name}</span>
                        <span className="shrink-0">
                          {val === true ? <Check /> : typeof val === "string" ? <span className="text-[#F5A623] font-semibold text-xs">{val}</span> : <Dash />}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tecnologias */}
        <section className="mb-12">
          <SectionTitle>Tecnologias</SectionTitle>
          <p className="text-gray-500 text-sm mb-4">Ferramentas modernas que garantem performance, segurança e escalabilidade.</p>
          <div className="flex flex-wrap gap-2">
            {[
              { name: "Next.js + React", color: "#000" },
              { name: "Tailwind CSS", color: "#38bdf8" },
              { name: "Supabase", color: "#3ecf8e" },
              { name: "Gateway de Pagamento", color: "#635bff" },
              { name: "Vercel", color: "#000" },
              { name: "Resend (emails)", color: "#0ea5e9" },
            ].map((t) => (
              <span key={t.name} className="inline-flex items-center gap-2 px-3.5 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 font-medium">
                <span className="w-2 h-2 rounded-full" style={{ background: t.color }} />
                {t.name}
              </span>
            ))}
          </div>
        </section>

        {/* Não incluso */}
        <section className="mb-12">
          <SectionTitle>O que não está incluso</SectionTitle>
          <div className="bg-white rounded-xl border border-gray-100 p-5">
            <ul className="space-y-2 text-sm text-gray-600">
              {[
                "Produção de conteúdo (textos dos cursos, videoaulas, fotos)",
                "Registro de domínio (custo aproximado: R$ 40/ano)",
                "Custos de hospedagem (Vercel — gratuito ou ~$20/mês no Pro)",
                "Taxas do gateway de pagamento (definidas pelo provedor)",
                "Manutenção mensal após entrega (pode ser contratada à parte)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="text-[#F5A623] font-bold mt-0.5">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Manutenção */}
        <section className="mb-12">
          <SectionTitle>Manutenção Mensal</SectionTitle>
          <p className="text-gray-500 text-sm mb-4">Planos opcionais para manter o site atualizado após a entrega.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { name: "Básico", desc: "Correção de bugs e atualizações de segurança", price: "R$ 300" },
              { name: "Intermediário", desc: "Básico + pequenas alterações e melhorias", price: "R$ 600" },
              { name: "Completo", desc: "Intermediário + novas funcionalidades sob demanda", price: "R$ 1.200" },
            ].map((plan) => (
              <div key={plan.name} className="bg-white rounded-xl border border-gray-100 p-5 text-center">
                <h4 className="font-bold text-[#1B3A6B] mb-1">{plan.name}</h4>
                <p className="text-xs text-gray-500 mb-3 leading-relaxed">{plan.desc}</p>
                <p className="text-xl font-extrabold text-[#F5A623]">{plan.price}<span className="text-xs font-normal text-gray-400">/mês</span></p>
              </div>
            ))}
          </div>
        </section>

        {/* Validade */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 bg-amber-50 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold border border-amber-200">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
            Proposta válida por 30 dias
          </span>
        </div>
      </main>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#1B3A6B] to-[#2a5298] text-white py-12">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3">Próximos Passos</h2>
          <p className="text-white/60 mb-8">Vamos transformar a Aula Direta em referência no mercado de cursos técnicos.</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            {[
              { n: "1", title: "Escolha", text: "Selecione o cenário ideal para o momento do negócio" },
              { n: "2", title: "Alinhamento", text: "Reunião rápida para detalhes e assinatura do contrato" },
              { n: "3", title: "Início", text: "Pagamento da 1ª parcela e início do desenvolvimento" },
            ].map((step) => (
              <div key={step.n} className="flex gap-3 bg-white/[0.06] rounded-xl p-4">
                <div className="w-8 h-8 min-w-[32px] bg-[#F5A623] rounded-full flex items-center justify-center font-bold text-sm">{step.n}</div>
                <div>
                  <p className="font-bold text-sm">{step.title}</p>
                  <p className="text-white/60 text-xs leading-relaxed">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500 bg-white border-t border-gray-100">
        <p className="font-semibold text-gray-700">Bruno Cabuto — Desenvolvimento Web</p>
        <p>brucabuto@gmail.com • (11) 99476-3857</p>
      </footer>
    </div>
  );
}

/* ---- Sub-components ---- */

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl md:text-2xl font-extrabold text-[#1B3A6B] mb-1 pb-2 border-b-[3px] border-[#F5A623] inline-block mb-4">
      {children}
    </h2>
  );
}

function ScenarioCard({
  number, title, subtitle, price, timeline, recommended, isExpanded, onToggle, payments, features,
}: {
  number: number;
  title: string;
  subtitle: string;
  price: string;
  timeline: string;
  recommended?: boolean;
  isExpanded: boolean;
  onToggle: () => void;
  payments: { label: string; value: string }[];
  features: string[];
}) {
  return (
    <div className={`rounded-2xl overflow-hidden border-2 transition-all ${recommended ? "border-[#F5A623] shadow-lg shadow-[#F5A623]/10" : "border-gray-200"}`}>
      {/* Header - always visible */}
      <button onClick={onToggle} className="w-full text-left">
        <div className={`p-5 md:p-6 ${recommended ? "bg-gradient-to-r from-[#1B3A6B] to-[#2a5298]" : "bg-white"}`}>
          {recommended && (
            <span className="inline-flex items-center gap-1.5 bg-[#F5A623] text-white text-[11px] font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-3">
              ⭐ Recomendado
            </span>
          )}
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <h3 className={`text-lg md:text-xl font-bold ${recommended ? "text-white" : "text-gray-900"}`}>
                Cenário {number} — {title}
              </h3>
              <p className={`text-sm mt-1 ${recommended ? "text-white/60" : "text-gray-500"}`}>{subtitle}</p>
            </div>
            <div className="text-right shrink-0">
              <p className={`text-2xl md:text-3xl font-extrabold ${recommended ? "text-[#F5A623]" : "text-[#1B3A6B]"}`}>
                R$ {price}
              </p>
              <p className={`text-xs mt-0.5 ${recommended ? "text-white/40" : "text-gray-400"}`}>{timeline}</p>
            </div>
          </div>
          <div className="flex items-center justify-center mt-3">
            <svg className={`w-5 h-5 transition-transform ${isExpanded ? "rotate-180" : ""} ${recommended ? "text-white/40" : "text-gray-400"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
          </div>
        </div>
      </button>

      {/* Body - expandable */}
      {isExpanded && (
        <>
          <div className="p-5 md:p-6 bg-white border-t border-gray-100">
            <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wide mb-4">
              {number > 1 ? `Tudo do Cenário ${number - 1}, mais:` : "O que está incluso"}
            </h4>
            <ul className="space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-gray-600">
                  <span className="inline-flex items-center justify-center w-5 h-5 min-w-[20px] rounded-full bg-emerald-100 mt-0.5">
                    <svg className="w-3 h-3 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="px-5 md:px-6 py-4 bg-gray-50 border-t border-gray-100">
            <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wide mb-3">Condições de pagamento</h4>
            <div className="space-y-1.5">
              {payments.map((p) => (
                <div key={p.label} className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">{p.label}</span>
                  <span className="font-bold text-[#1B3A6B]">{p.value}</span>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
