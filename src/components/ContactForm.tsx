import React, { useState } from 'react';
import { Briefcase, Info, Mail, MessageSquare, User } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Nome é obrigatório";
    if (!formData.email.trim()) newErrors.email = "Email é obrigatório";
    if (!formData.email.includes("@"))
      newErrors.email = "Email deve ter formato válido";
    if (!formData.message.trim()) newErrors.message = "Mensagem é obrigatória";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert("Mensagem enviada com sucesso!");
      setFormData({
        name: "",
        position: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch {
      alert("Erro ao enviar mensagem. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md">
      <div>
        <label
          htmlFor="name"
          className="flex items-center gap-2 text-sm font-light text-white mb-2"
        >
          <User className="size-5" />
          Seu nome
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className="w-full px-3 py-2 bg-facss-dark border border-gray-700 rounded-md text-white placeholder-white/40 focus:ring-2 focus:ring-facss-green focus:border-transparent outline-none transition-all"
          placeholder="Digite seu nome completo"
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className="text-red-400 text-xs mt-1">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="position"
          className="flex items-center gap-2 text-sm font-light text-white mb-2"
        >
          <Briefcase className="size-5" />
          Seu cargo
        </label>
        <select
          id="position"
          name="position"
          value={formData.position}
          onChange={handleInputChange}
          className="w-full px-3 py-2 bg-facss-dark border border-gray-700 rounded-md text-white focus:ring-2 focus:ring-facss-green focus:border-transparent outline-none transition-all"
        >
          <option value="" className="text-white/40">
            Selecione seu cargo
          </option>
          <option value="CEO">CEO</option>
          <option value="CTO">CTO</option>
          <option value="Gerente">Gerente</option>
          <option value="Estudante">Estudante</option>
          <option value="Desenvolvedor">Desenvolvedor</option>
          <option value="Outro">Outro</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="email"
          className="flex items-center gap-2 text-sm font-light text-white mb-2"
        >
          <Mail className="size-5" />
          Seu email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full px-3 py-2 bg-facss-dark border border-gray-700 rounded-md text-white placeholder-white/40 focus:ring-2 focus:ring-facss-green focus:border-transparent outline-none transition-all"
          placeholder="seu@email.com"
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className="text-red-400 text-xs mt-1">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="subject"
          className="flex items-center gap-2 text-sm font-light text-white mb-2"
        >
          <Info className="size-5" />
          Assunto
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
          className="w-full px-3 py-2 bg-facss-dark border border-gray-700 rounded-md text-white focus:ring-2 focus:ring-facss-green focus:border-transparent outline-none transition-all"
        >
          <option value="" className="text-white/40">
            Selecione o assunto
          </option>
          <option value="Parcerias comerciais">Parcerias comerciais</option>
          <option value="Contratar serviço">Contratar serviço</option>
          <option value="Quero trabalhar na FACSS">
            Quero trabalhar na FACSS
          </option>
          <option value="Outro">Outro</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="flex items-center gap-2 text-sm font-light text-white mb-2"
        >
          <MessageSquare className="size-5" />
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          rows={4}
          className="w-full px-3 py-2 bg-facss-dark border border-gray-700 rounded-md text-white placeholder-white/40 focus:ring-2 focus:ring-facss-green focus:border-transparent outline-none transition-all resize-none"
          placeholder="Conte-nos sobre seu projeto..."
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="text-red-400 text-xs mt-1">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-white text-black font-medium py-3 px-6 rounded-md hover:bg-gray-100 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-facss-dark transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Enviando..." : "Enviar mensagem"}
      </button>
    </form>
  );
};