import Link from "next/link";
import type { Course } from "@/data/courses";

const areaColors: Record<string, string> = {
  "Saúde": "bg-red-100 text-red-700",
  "Tecnologia": "bg-blue-100 text-blue-700",
  "Gestão": "bg-green-100 text-green-700",
  "Educação": "bg-purple-100 text-purple-700",
};

export default function CourseCard({ course }: { course: Course }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden group">
      <div className="relative h-48 overflow-hidden">
        <img
          src={course.image}
          alt={course.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold ${areaColors[course.area] || "bg-gray-100 text-gray-700"}`}>
          {course.area}
        </span>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-[#1B3A6B] mb-2 line-clamp-1">{course.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{course.shortDescription}</p>
        <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            {course.duration}
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            {course.modality}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs text-gray-500">A partir de</span>
            <p className="text-xl font-bold text-[#F5A623]">
              R$ {course.installmentPrice.toFixed(2).replace(".", ",")}
              <span className="text-sm font-normal text-gray-500">/mês</span>
            </p>
          </div>
          <Link
            href={`/cursos/${course.slug}`}
            className="bg-[#1B3A6B] hover:bg-[#152d54] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            Saiba mais
          </Link>
        </div>
      </div>
    </div>
  );
}
