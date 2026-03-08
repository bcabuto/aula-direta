"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { courses } from "@/data/courses";

export default function CourseDetailPage() {
  const params = useParams();
  const course = courses.find((c) => c.slug === params.slug);
  const [openModule, setOpenModule] = useState<number | null>(0);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#1B3A6B] mb-4">Curso não encontrado</h1>
          <Link href="/cursos" className="text-[#F5A623] hover:underline">Voltar aos cursos</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1B3A6B] to-[#2a5298] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-white/60 text-sm mb-4">
            <Link href="/" className="hover:text-white">Início</Link>
            <span>/</span>
            <Link href="/cursos" className="hover:text-white">Cursos</Link>
            <span>/</span>
            <span className="text-white">{course.name}</span>
          </div>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <span className="inline-block bg-white/10 text-sm px-3 py-1 rounded-full mb-4">{course.area}</span>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.name}</h1>
              <p className="text-white/80 text-lg mb-6">{course.shortDescription}</p>
              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#F5A623]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span>Duração: {course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#F5A623]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                  <span>Carga: {course.workload}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#F5A623]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  <span>{course.modality}</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 text-gray-800 w-full md:w-80 shadow-xl">
              <div className="mb-4">
                <img src={course.image} alt={course.name} className="w-full h-40 object-cover rounded-lg" />
              </div>
              <div className="text-center mb-4">
                <span className="text-sm text-gray-500">Investimento</span>
                <p className="text-3xl font-bold text-[#1B3A6B]">
                  {course.installments}x de R$ {course.installmentPrice.toFixed(2).replace(".", ",")}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  ou R$ {course.price.toFixed(2).replace(".", ",")} à vista
                </p>
              </div>
              <Link
                href={`/matricula/${course.slug}`}
                className="block w-full bg-[#F5A623] hover:bg-[#e0950e] text-white font-semibold py-3 rounded-lg text-center transition-colors"
              >
                Matricule-se agora
              </Link>
              <p className="text-xs text-gray-400 text-center mt-3">
                Reconhecido pelo MEC/SISTEC
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Sobre o curso */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-2xl font-bold text-[#1B3A6B] mb-4">Sobre o Curso</h2>
                <p className="text-gray-600 leading-relaxed">{course.description}</p>
              </div>

              {/* Público alvo */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-2xl font-bold text-[#1B3A6B] mb-4">Público-Alvo</h2>
                <p className="text-gray-600 leading-relaxed">{course.targetAudience}</p>
              </div>

              {/* Grade Curricular */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-2xl font-bold text-[#1B3A6B] mb-4">Grade Curricular</h2>
                <div className="space-y-3">
                  {course.curriculum.map((mod, index) => (
                    <div key={index} className="border border-gray-100 rounded-lg overflow-hidden">
                      <button
                        className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                        onClick={() => setOpenModule(openModule === index ? null : index)}
                      >
                        <span className="font-semibold text-[#1B3A6B]">{mod.module}</span>
                        <svg
                          className={`w-5 h-5 text-[#F5A623] shrink-0 transition-transform ${openModule === index ? "rotate-180" : ""}`}
                          fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {openModule === index && (
                        <div className="px-4 pb-4">
                          <ul className="space-y-2">
                            {mod.subjects.map((subject) => (
                              <li key={subject} className="flex items-center gap-2 text-gray-600 text-sm">
                                <svg className="w-4 h-4 text-[#F5A623] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                {subject}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Mercado */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-bold text-[#1B3A6B] mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#F5A623]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  Mercado de Trabalho
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{course.jobMarket}</p>
              </div>

              {/* Salário */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-bold text-[#1B3A6B] mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#F5A623]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  Salário Médio
                </h3>
                <p className="text-2xl font-bold text-[#F5A623]">{course.averageSalary}</p>
                <p className="text-xs text-gray-400 mt-1">Fonte: pesquisa salarial 2025</p>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-[#1B3A6B] to-[#2a5298] rounded-xl p-6 text-white text-center">
                <h3 className="text-lg font-bold mb-2">Garanta sua vaga!</h3>
                <p className="text-white/80 text-sm mb-4">Vagas limitadas para a próxima turma. Não perca essa oportunidade.</p>
                <Link
                  href={`/matricula/${course.slug}`}
                  className="block w-full bg-[#F5A623] hover:bg-[#e0950e] text-white font-semibold py-3 rounded-lg text-center transition-colors"
                >
                  Matricule-se agora
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
