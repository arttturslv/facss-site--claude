/** @format */

import React from "react";
import { ContactForm } from "../ContactForm";

const map = "assets/map.png";

export const ContactSection: React.FC = () => {
  return (
    <section id="contato" className="py-16 sm:py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-fira font-bold text-white mb-6">
            Contato
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl font-geist font-light text-white/90 max-w-4xl mx-auto">
            Entre em contato para saber mais sobre nossos produtos, serviços e
            como a FACSS pode ser a{" "}
            <span className="text-facss-green/80">solução digital</span> dos
            seus problemas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map */}
          <div className="relative max-lg:flex max-lg:items-center max-lg:justify-center">
            <div
              className="aspect-square max-lg:w-[80%] max-lg:max-w-[400px] rounded-lg bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(rgba(14, 19, 31, 0.5), rgba(14, 19, 31, 0.7)), url(${map})`,
              }}
            />
          </div>

          {/* Contact Form */}
          <div className="flex justify-center">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};
