import Link from "next/link";
import { courses } from "@/data/courses";
import { testimonials } from "@/data/testimonials";
import CourseCard from "@/components/CourseCard";
import TestimonialCard from "@/components/TestimonialCard";
import StatsSection from "@/components/StatsSection";

const differentials = [
  {
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    title: "Modalidade EAD",
    description: "Estude 100% online, no seu ritmo, de qualquer lugar do Brasil. Acesse as aulas quando e onde quiser.",
  },
  {
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    title: "Reconhecido pelo MEC/SISTEC",
    description: "Diploma com validade nacional, registrado no SISTEC e reconhecido pelo Ministério da Educação.",
  },
  {
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
    title: "Mais Oportunidades",
    description: "Aumente suas chances no mercado de trabalho com uma formação técnica de qualidade e reconhecida.",
  },
];

export default function Home() {
  const featuredCourses = courses.slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1B3A6B] via-[#1B3A6B] to-[#2a5298] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6">
              <svg className="w-4 h-4 text-[#F5A623]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Cursos reconhecidos pelo MEC/SISTEC
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Seu futuro começa com a{" "}
              <span className="text-[#F5A623]">decisão certa.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
              Agora é a hora de investir em você. Construa sua trajetória profissional
              com cursos técnicos EAD de qualidade e reconhecidos em todo o Brasil.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/cursos"
                className="bg-[#F5A623] hover:bg-[#e0950e] text-white font-semibold px-8 py-4 rounded-lg transition-colors text-center text-lg"
              >
                Conheça nossos cursos
              </Link>
              <a
                href="https://wa.me/5511999990000"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white/30 hover:border-white/60 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-center text-lg"
              >
                Fale com um consultor
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mb-4">
              Por que escolher a Aula Direta?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Oferecemos a melhor experiência em educação técnica a distância, com qualidade e reconhecimento nacional.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differentials.map((item) => (
              <div key={item.title} className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-[#F5A623]/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <svg className="w-8 h-8 text-[#F5A623]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1B3A6B] mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cursos em destaque */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mb-4">
              Cursos em Destaque
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Conheça nossos cursos técnicos mais procurados e comece sua nova carreira hoje mesmo.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCourses.map((course) => (
              <CourseCard key={course.slug} course={course} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/cursos"
              className="inline-flex items-center gap-2 bg-[#1B3A6B] hover:bg-[#152d54] text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Ver todos os cursos
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsSection />

      {/* Depoimentos */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mb-4">
              O que nossos alunos dizem
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Histórias reais de quem transformou sua carreira com a Aula Direta.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((t) => (
              <TestimonialCard key={t.name} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-to-r from-[#F5A623] to-[#e8940a] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Invista no seu futuro agora!
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Não perca mais tempo. Matricule-se em um dos nossos cursos técnicos e comece a construir a carreira que você sempre sonhou.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cursos"
              className="bg-[#1B3A6B] hover:bg-[#152d54] text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              Ver cursos disponíveis
            </Link>
            <a
              href="https://wa.me/5511999990000"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-100 text-[#1B3A6B] font-semibold px-8 py-4 rounded-lg transition-colors text-lg flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Falar pelo WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
