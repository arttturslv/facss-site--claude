import React from 'react';
import { AnimatedSection } from '../AnimatedSection';
import { AnimatedCounter } from '../AnimatedCounter';

const lenarge = "assets/clients/Lenarge.svg";
const gerdau = "assets/clients/Gerdau.svg";
const aperam = "assets/clients/Aperam.svg";
const guilherme = "assets/people/guilherme.png";
const felipe = "assets/people/felipe.png";
const gustavo = "assets/people/gustavo.png";

export const ResultsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-fira font-bold text-white mb-6">
            Resultados
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl font-geist font-light text-white/90 max-w-4xl mx-auto">
            Na FACSS, unimos{" "}
            <span className="text-facss-green/70">
              profundidade técnica
            </span>
            , visão estratégica e compromisso com qualidade para desenvolver
            aplicativos que entregam resultado —{" "}
            <span className="text-facss-green/70">hoje e no futuro</span>.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <AnimatedSection delay={100} className="text-center">
            <AnimatedCounter 
              value={1000000} 
              className="text-4xl sm:text-5xl lg:text-6xl font-fira font-bold text-white mb-2"
            />
            <div className="text-white/80 font-geist font-light">
              Usuários únicos por ano
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200} className="text-center">
            <AnimatedCounter 
              value={190000} 
              className="text-4xl sm:text-5xl lg:text-6xl font-fira font-bold text-white mb-2"
            />
            <div className="text-white/80 font-geist font-light">
              Requisições de API por dia
            </div>
          </AnimatedSection>

          <AnimatedSection delay={300} className="text-center">
            <AnimatedCounter 
              value={14} 
              className="text-4xl sm:text-5xl lg:text-6xl font-fira font-bold text-white mb-2"
            />
            <div className="text-white/80 font-geist font-light">
              Apps de sucesso criados
            </div>
          </AnimatedSection>

          <AnimatedSection delay={400} className="text-center">
            <AnimatedCounter 
              value={1000000000} 
              className="text-4xl sm:text-5xl lg:text-6xl font-fira font-bold text-white mb-2"
            />
            <div className="text-white/80 font-geist font-light">
              Reais trafegados por ano
            </div>
          </AnimatedSection>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Testimonial 1 */}
          <div className="bg-gradient-to-t from-facss-dark/10 via-facss-green/5 to-facss-green/10 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-[1.02] h-full flex flex-col">
            <div className="mb-4">
              <img
                src={lenarge}
                alt="Lenarge Logo"
                className="h-8 object-contain opacity-80"
              />
            </div>

            <blockquote className="text-white/90 font-geist leading-relaxed mb-6 flex-grow">
              "Trabalhar com a FACSS foi uma das decisões mais estratégicas
              que tomamos. A excelência técnica, o comprometimento com
              resultados e a visão inovadora são diferenciais raros no
              mercado."
            </blockquote>

            <div className="flex items-center space-x-3 mt-auto">
              <img
                src={guilherme}
                alt="Guilherme Silva"
                className="w-11 h-11 rounded-full object-cover"
              />
              <div>
                <div className="text-white font-fira font-medium">
                  Guilherme Silva
                </div>
                <div className="text-white/60 text-sm">CEO</div>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-gradient-to-t from-facss-dark/10 via-facss-green/5 to-facss-green/10 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-[1.02] h-full flex flex-col">
            <div className="mb-4">
              <img
                src={gerdau}
                alt="Gerdau Logo"
                className="h-8 object-contain opacity-80"
              />
            </div>

            <blockquote className="text-white/90 font-geist leading-relaxed mb-6 flex-grow">
              "Escolher a FACSS como parceira foi um divisor de águas. O
              time não apenas entregou o que prometeu, mas superou
              expectativas em prazos e qualidade."
            </blockquote>

            <div className="flex items-center space-x-3 mt-auto">
              <img
                src={felipe}
                alt="Felipe e Silva"
                className="w-11 h-11 rounded-full object-cover"
              />
              <div>
                <div className="text-white font-fira font-medium">
                  Felipe e Silva
                </div>
                <div className="text-white/60 text-sm">CFO</div>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-gradient-to-t from-facss-dark/10 via-facss-green/5 to-facss-green/10 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-[1.02] h-full flex flex-col md:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <img
                src={aperam}
                alt="Aperam Logo"
                className="h-8 object-contain opacity-80"
              />
            </div>

            <blockquote className="text-white/90 font-geist leading-relaxed mb-6 flex-grow">
              "A experiência com a FACSS foi extremamente positiva.
              Encontramos uma equipe preparada, com domínio técnico
              impressionante e uma abordagem consultiva."
            </blockquote>

            <div className="flex items-center space-x-3 mt-auto">
              <img
                src={gustavo}
                alt="Gustavo Vitorino S."
                className="w-11 h-11 rounded-full object-cover"
              />
              <div>
                <div className="text-white font-fira font-medium">
                  Gustavo Vitorino S.
                </div>
                <div className="text-white/60 text-sm">CEO</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};