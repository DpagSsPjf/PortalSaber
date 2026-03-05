"use client";
import React, { useEffect, useState } from "react";
import { Banner } from "@/components/Banner";
import { LinkButton } from "@/components/LinkButton";
import { type Curso } from "@/lib/data";
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const [mainCourses, setMainCourses] = useState<Curso[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function loadMainCourses() {
      try {
        const res = await fetch("/api/cursos", { cache: "no-store" });
        if (!res.ok) throw new Error("Falha ao buscar cursos");
        const cursos: Curso[] = await res.json();
        setMainCourses(cursos); 
      } catch (err) {
        console.error("Erro ao carregar cursos:", err);
        setMainCourses([]);
      } finally {
        setIsLoading(false);
      }
    }

    loadMainCourses();
  }, []);

  const handleCourseClick = (courseSlug: string) => {
    window.location.href = `/cursos/${courseSlug}`;
  };


  return (
    <main className="min-h-screen bg-gray-50">
      <Banner
        title="Bem-vindo ao Portal Saber!"
        descricao="Nossa plataforma foi criada para ajudar profissionais a navegar por processos e ações
            de forma simples e eficiente. Explore nossos tutoriais e encontre o que você precisa!"
      />

      <section className="container mx-auto py-12 px-4">
        <div className="grid gap-8">
          <div className="p-8 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-blue-800">
                Principais Cursos
              </h2>
              <LinkButton href="/cursos" label="Todos os Cursos" />
            </div>

            {/* Loading state */}
            {isLoading ? (
              <div className="flex justify-center items-center py-8">
                <div className="w-8 h-8 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin"></div>
                <span className="ml-3 text-gray-600">Carregando cursos...</span>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {mainCourses.map((course) => (
                  <div
                    key={course.id}
                    className="relative p-4 bg-white rounded-lg shadow-md transition-all duration-300 cursor-pointer group hover:shadow-xl hover:shadow-blue-600/80 hover:-translate-y-1 hover:scale-105"
                    onClick={() => handleCourseClick(course.slug)}
                  >
                    

                    <h3 className="font-semibold text-lg text-gray-800 mb-2">
                      {course.title}
                    </h3>
                    {course.image && (
                      <div className="flex justify-center items-center h-48 overflow-hidden">
                        <img
                          src={course.image}
                          alt={course.title}
                          className="w-full h-full object-contain rounded transition-transform duration-300 ease-in-out"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {!isLoading && mainCourses.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-600">
                  Nenhum curso disponível no momento.
                </p>
                <LinkButton href="/cursos" label="Explorar Todos os Cursos" />
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
