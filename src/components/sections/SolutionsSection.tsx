import React from 'react';
import { Users, TrendingUp, Lock } from 'lucide-react';
import { AnimatedSection } from '../AnimatedSection';

export const SolutionsSection: React.FC = () => {
  return (
    <section id="solucoes" className="py-16 sm:py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-fira font-bold text-white mb-6">
            Soluções
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
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1 */}
          <AnimatedSection delay={100} animation="scale-in">
            <div className="bg-gradient-to-t from-facss-dark/10 via-facss-green/5 to-facss-green/10 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-[1.02] h-full">
              <div className="flex flex-col items-center text-center space-y-4 h-full">
                <div className="w-6 h-6 flex-shrink-0">
                  <Users className="text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-fira font-extrabold text-white">
                  Equipe Especializada
                </h3>
                <p className="text-white/90 font-geist leading-relaxed flex-grow">
                  Trabalhamos com um conjunto restrito de tecnologias,
                  justamente para garantir domínio completo em tudo que
                  desenvolvemos, garantindo ainda mais as nossas entregas.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Card 2 */}
          <AnimatedSection delay={200} animation="scale-in">
            <div className="bg-gradient-to-t from-facss-dark/10 via-facss-green/5 to-facss-green/10 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-[1.02] h-full">
              <div className="flex flex-col items-center text-center space-y-4 h-full">
                <div className="w-6 h-6 flex-shrink-0">
                  <TrendingUp className="text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-fira font-extrabold text-white">
                  Apps prontos para escalar
                </h3>
                <p className="text-white/90 font-geist leading-relaxed flex-grow">
                  Desde o planejamento técnico até a escolha da
                  infraestrutura, tudo é pensado para crescer junto com o seu
                  negócio. Arquiteturas resilientes, componentes reutilizáveis
                  e infraestrutura elástica permitem que seu app atenda desde
                  o primeiro usuário até milhões — sem recomeçar do zero.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Card 3 */}
          <AnimatedSection delay={300} animation="scale-in" className="md:col-span-2 lg:col-span-1">
            <div className="bg-gradient-to-t from-facss-dark/10 via-facss-green/5 to-facss-green/10 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-[1.02] h-full">
              <div className="flex flex-col items-center text-center space-y-4 h-full">
                <div className="w-6 h-6 flex-shrink-0">
                  <Lock className="text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-fira font-extrabold text-white">
                  Segurança de ponta a ponta
                </h3>
                <p className="text-white/90 font-geist leading-relaxed flex-grow">
                  Com uma equipe multidisciplinar, desenvolvemos em todas as
                  pessoas habilidades de desenvolvimento seguro. Gerimos com
                  afinco as tecnologias ao qual nossos apps dependem,
                  antecipando-nos à todas as vulnerabilidades detectadas ao
                  longo do tempo.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};