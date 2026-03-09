"use client";

import { useState } from "react";
import { courses } from "@/data/courses";
import CourseCard from "@/components/CourseCard";

const areas = ["Todos", "Saúde", "Tecnologia", "Gestão", "Educação"];

export default function CursosPage() {
  const [selectedArea, setSelectedArea] = useState("Todos");

  const filteredCourses = selectedArea === "Todos"
    ? courses
    : courses.filter((c) => c.area === selectedArea);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1B3A6B] to-[#2a5298] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nossos Cursos</h1>
          <p className="text-white/80 text-lg max-w-2xl">
            Escolha entre nossos cursos técnicos EAD e comece sua nova carreira.
          </p>
        </div>
      </section>

      {/* Filtros + Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filtros */}
          <div className="flex flex-wrap gap-3 mb-8">
            {areas.map((area) => (
              <button
                key={area}
                onClick={() => setSelectedArea(area)}
                className={`px-5 py-2 rounded-full font-medium text-sm transition-colors ${
                  selectedArea === area
                    ? "bg-[#1B3A6B] text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {area}
              </button>
            ))}
          </div>

          {/* Contagem */}
          <p className="text-gray-500 mb-6">
            {filteredCourses.length} curso{filteredCourses.length !== 1 ? "s" : ""} encontrado{filteredCourses.length !== 1 ? "s" : ""}
          </p>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <CourseCard key={course.slug} course={course} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
