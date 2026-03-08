import Link from "next/link";

const values = [
  { title: "Missão", text: "Democratizar o acesso à educação técnica de qualidade, formando profissionais preparados para o mercado de trabalho através da modalidade EAD.", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
  { title: "Visão", text: "Ser a principal referência em cursos técnicos EAD no Brasil, reconhecida pela excelência na formação de profissionais e pela inovação pedagógica.", icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" },
  { title: "Valores", text: "Compromisso com a qualidade, acessibilidade, inovação, ética, transparência e respeito ao aluno em todas as etapas de sua formação.", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
];

const whyUs = [
  { title: "Certificação MEC/SISTEC", description: "Todos os cursos possuem registro no SISTEC, garantindo a validade nacional do seu diploma." },
  { title: "Plataforma Moderna", description: "Ambiente virtual de aprendizagem intuitivo, com videoaulas, materiais e avaliações online." },
  { title: "Suporte ao Aluno", description: "Equipe dedicada para tirar dúvidas e acompanhar sua jornada de aprendizado." },
  { title: "Preços Acessíveis", description: "Parcelas que cabem no seu bolso, com opções de pagamento via PIX, cartão e boleto." },
  { title: "Corpo Docente Qualificado", description: "Professores com experiência de mercado e formação acadêmica de excelência." },
  { title: "Flexibilidade", description: "Estude no seu ritmo, de qualquer lugar, conciliando com trabalho e outras atividades." },
];

export default function SobrePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1B3A6B] to-[#2a5298] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sobre a Aula Direta</h1>
          <p className="text-white/80 text-lg max-w-2xl">
            Conheça nossa história, nossa missão e por que somos a melhor escolha para sua formação técnica.
          </p>
        </div>
      </section>

      {/* História */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#1B3A6B] mb-6">Nossa História</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  A <strong className="text-[#1B3A6B]">Aula Direta</strong> nasceu da vontade de transformar vidas
                  através da educação profissional. Fundada em 2024, nossa instituição surgiu com a missão de
                  democratizar o acesso aos cursos técnicos de qualidade, utilizando a tecnologia como aliada.
                </p>
                <p>
                  Acreditamos que a educação é a ferramenta mais poderosa para a transformação social e profissional.
                  Por isso, investimos em uma plataforma moderna, professores qualificados e um modelo pedagógico
                  que realmente prepara o aluno para o mercado de trabalho.
                </p>
                <p>
                  Hoje, já impactamos a vida de mais de 5.000 alunos em todo o Brasil, com cursos nas áreas de
                  Saúde, Tecnologia, Gestão e Educação — todos reconhecidos pelo MEC e registrados no SISTEC.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
                alt="Equipe Aula Direta"
                className="rounded-xl shadow-lg w-full"
              />
              <div className="absolute -bottom-4 -right-4 bg-[#F5A623] text-white px-6 py-3 rounded-xl font-bold shadow-lg">
                Desde 2024
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão, Valores */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1B3A6B] mb-4">Missão, Visão e Valores</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((item) => (
              <div key={item.title} className="bg-[#F5F7FA] rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-[#1B3A6B] rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <svg className="w-8 h-8 text-[#F5A623]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1B3A6B] mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por que nos escolher */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1B3A6B] mb-4">Por que escolher a Aula Direta?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item) => (
              <div key={item.title} className="bg-white rounded-xl shadow-sm p-6 flex items-start gap-4">
                <div className="w-10 h-10 bg-[#F5A623]/10 rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-[#F5A623]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#1B3A6B] mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#F5A623] to-[#e8940a] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Pronto para começar?</h2>
          <p className="text-white/90 text-lg mb-8">
            Explore nossos cursos e dê o primeiro passo rumo à sua nova carreira.
          </p>
          <Link
            href="/cursos"
            className="bg-[#1B3A6B] hover:bg-[#152d54] text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg inline-block"
          >
            Conheça nossos cursos
          </Link>
        </div>
      </section>
    </>
  );
}
