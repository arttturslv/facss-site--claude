import React from 'react';
import { AnimatedSection } from '../AnimatedSection';
import { InfiniteScroll } from '../InfiniteScroll';

const google = "assets/techstack/Google.png";
const cloud = "assets/techstack/Cloud.png";
const tailwind = "assets/techstack/Tailwind.png";
const react = "assets/techstack/React.png";
const typescript = "assets/techstack/Typescript.png";
const ionic = "assets/techstack/Ionic.png";
const firebase = "assets/techstack/Firebase.png";
const gemini = "assets/techstack/Gemini.png";

export const TechnologiesSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20">
      <AnimatedSection>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-white/70 font-geist mb-8 sm:mb-12">
            Utilizando as melhores tecnologias do mercado - Parceiros da
            Google
          </p>

          <InfiniteScroll speed={25} pauseOnHover={true}>
            <img
              src={google}
              alt="Google"
              className="h-8 sm:h-10 object-contain opacity-50 hover:opacity-90 transition-all duration-300 hover:scale-105"
            />
            <img
              src={cloud}
              alt="Google Cloud"
              className="h-10 sm:h-12 object-contain opacity-50 hover:opacity-90 transition-all duration-300 hover:scale-105"
            />
            <img
              src={firebase}
              alt="Firebase"
              className="h-8 sm:h-10 object-contain opacity-50 hover:opacity-90 transition-all duration-300 hover:scale-105"
            />
            <img
              src={gemini}
              alt="Gemini"
              className="h-8 sm:h-10 object-contain opacity-50 hover:opacity-90 transition-all duration-300 hover:scale-105"
            />
            <img
              src={tailwind}
              alt="Tailwind CSS"
              className="h-10 sm:h-12 object-contain opacity-50 hover:opacity-90 transition-all duration-300 hover:scale-105"
            />
            <img
              src={react}
              alt="React"
              className="h-10 sm:h-12 object-contain opacity-50 hover:opacity-90 transition-all duration-300 hover:scale-105"
            />
            <img
              src={typescript}
              alt="TypeScript"
              className="h-8 sm:h-10 object-contain opacity-50 hover:opacity-90 transition-all duration-300 hover:scale-105"
            />
            <img
              src={ionic}
              alt="Ionic"
              className="h-8 sm:h-10 object-contain opacity-50 hover:opacity-90 transition-all duration-300 hover:scale-105"
            />
          </InfiniteScroll>
        </div>
      </AnimatedSection>
    </section>
  );
};