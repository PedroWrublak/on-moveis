"use client";

import { useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    telefone: "",
    ambiente: "",
    info: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Dados do formulário: ", form);

    try {
      const response = await emailjs.send(
        "service_m2s1yar",
        "template_au13kxn",
        {
          name: form.name,
          email: form.email,
          telefone: form.telefone,
          ambiente: form.ambiente,
          info: form.info,
        },
        "oPlQGIylC90OJt4sP"
      );

      console.log("Email enviado:", response.status);
      setSuccess(true);
      setForm({ name: "", email: "", telefone: "", ambiente: "", info: "" });
    } catch (error) {
      console.error("Erro ao enviar", error);
    }
  };

  const inputStyle =
    "text-black border placeholder-gray-300 border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#01187F]";

  return (
    <section id="contact" className="scroll-mt-28">
      <div className="bg-[#FCFCFC] p-20 max-w-3l mx-auto select-none">
        <h2 className="text-3xl md:text-4xl text-center text-[#264653] font-serif mb-3">
          ENTRE EM CONTATO
        </h2>
        <p className="text-center text-[#264653] mb-12">
          Solicite o orçamento para realizar seu sonho!
        </p>
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-2xl mx-auto bg-white rounded-xl shadow-md p-6 flex flex-col gap-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Digite seu nome completo"
            required
            value={form.name}
            onChange={handleChange}
            className={inputStyle}
          />
          <input
            type="email"
            name="email"
            placeholder="Digite seu melhor email"
            required
            value={form.email}
            onChange={handleChange}
            className={inputStyle}
          />
          <input
            type="tel"
            name="telefone"
            placeholder="Digite seu telefone com ddd"
            required
            value={form.telefone}
            onChange={handleChange}
            className={inputStyle}
          />
          <select
            name="ambiente"
            required
            value={form.ambiente}
            onChange={handleChange}
            className="border border-gray-300 text-black rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#01187F]"
          >
            <option value="">Selecione o ambiente desejado</option>
            <option value="Cozinha">Cozinha</option>
            <option value="Sala">Sala</option>
            <option value="Banheiro">Banheiro</option>
            <option value="Dormitório">Dormitório</option>
            <option value="Lavanderia">Lavanderia</option>
            <option value="Escritório">Escritório</option>
            <option value="Outro">Outro</option>
          </select>
          <textarea
            name="info"
            placeholder="Deixe uma mensagem adicional"
            required
            value={form.info}
            onChange={handleChange}
            rows={5}
            className={`${inputStyle} resize-none`}
          />

          <button
            type="submit"
            className="bg-[#01187F] text-white py-3 rounded-md font-semibold hover:opacity-70 transition"
          >
            Enviar
          </button>
          {success && (
            <p className="text-green-600 text-sm text-center font-medium">
              Mensagem enviada com sucesso! Entraremos em contato.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
