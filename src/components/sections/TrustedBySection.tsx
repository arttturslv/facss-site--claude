import React from 'react';
import { AnimatedSection } from '../AnimatedSection';

const lenarge = "assets/clients/Lenarge.svg";
const rodeiro = "assets/clients/Rodeiro.svg";
const gerdau = "assets/clients/Gerdau.svg";
const rlr = "assets/clients/RLR.svg";
const aperam = "assets/clients/Aperam.svg";

export const TrustedBySection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20">
      <AnimatedSection>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-white/70 font-geist mb-8 sm:mb-12">
            Confiado por times de produto líderes no mercado
          </p>

          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
            <img
              src={lenarge}
              alt="Lenarge"
              className="h-8 sm:h-10 object-contain opacity-40 hover:opacity-80 transition-all duration-300 hover:scale-110"
            />
            <img
              src={rodeiro}
              alt="Rodeiro"
              className="h-8 sm:h-10 object-contain opacity-40 hover:opacity-80 transition-all duration-300 hover:scale-110"
            />
            <img
              src={gerdau}
              alt="Gerdau"
              className="h-8 sm:h-10 object-contain opacity-40 hover:opacity-80 transition-all duration-300 hover:scale-110"
            />
            <img 
              src={rlr} 
              alt="RLR" 
              className="h-8 sm:h-10 object-contain opacity-40 hover:opacity-80 transition-all duration-300 hover:scale-110" 
            />
            <img
              src={aperam}
              alt="Aperam"
              className="h-8 sm:h-10 object-contain opacity-40 hover:opacity-80 transition-all duration-300 hover:scale-110"
            />
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};