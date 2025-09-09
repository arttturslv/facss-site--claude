/** @format */

import React from "react";
import { AnimatedSection } from "../AnimatedSection";

const phones = "assets/phones.png";

export const HeroSection: React.FC = () => {
  return (
    <section id="inicio" className="relative py-12 sm:py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <AnimatedSection className="space-y-6 order-last md:order-first">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-fira font-bold text-white leading-tight">
              Transformamos <span className="text-facss-green/70">ideias</span>{" "}
              em apps escaláveis e seguros
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl font-geist font-light text-white/90 leading-relaxed">
              Do{" "}
              <span className="text-facss-green/70">
                design à infraestrutura
              </span>
              , criamos{" "}
              <span className="text-facss-green/70">soluções digitais</span>{" "}
              robustas, prontas para crescer com o{" "}
              <span className="text-facss-green/70">seu negócio</span>.
            </p>

            <a
              href="#contato"
              className="inline-block bg-facss-green text-white font-geist max-sm:w-full max-sm:text-center font-medium px-6 py-3 rounded-md hover:bg-facss-green/90 focus:outline-none focus:ring-2 focus:ring-facss-green focus:ring-offset-2 focus:ring-offset-facss-dark transition-all transform hover:scale-105"
            >
              Entrar em contato
            </a>
          </AnimatedSection>

          {/* Image Container */}
          <AnimatedSection
            delay={400}
            className="relative order-first  md:order-last"
          >
            <div className="grid grid-cols-1 gap-4 max-w-md mx-auto lg:max-w-none">
              <div
                className="bg-no-repeat bg-center rounded-lg transform rotate-1 animate-float"
                style={{
                  backgroundImage: `url(${phones})`,
                  animation: "float 3s ease-in-out infinite",
                  height: "400px" /* <--- Defina a altura que você quiser */,
                  backgroundSize:
                    "contain" /* <--- Garante que a imagem caiba inteira */,
                }}
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
