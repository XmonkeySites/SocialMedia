import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // Importando estilos do autoplay
import "../swiper/style.css";
import { Pagination, Autoplay } from "swiper/modules"; // Importando Autoplay
import { FaCheck } from "react-icons/fa6";

import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/400.css";
import { text, title } from "framer-motion/client";

// Componente de Card
const CardModule = ({ title, text }) => {
  return (
    <div className="flex flex-col bg-[#000027] w-[15rem] h-[19rem] lg:w-[19rem] drop-shadow-xl shadow shadow-gray-800 lg:h-[22rem] border border-gray-600/40 px-[0.8rem] rounded-md">
      <hr className="w-14 border-2 border-[#FD6F01] translate-x-7 glowing-hr" />
      <div className="flex flex-col mt-5 gap-5">
        <FaCheck className="text-4xl text-[#FD6F01] my-1 translate-x-[2.5rem] translate-y-[-0.5rem]" />

        <h3 className="text-[#FD6F01] text-lg font-montserrat font-semibold">
          {title}
        </h3>
        <span className="text-white text-md font-light  font-montserrat">
          {text}
        </span>
      </div>
    </div>
  );
};

// Lista de módulos
const modules = [
  {
    title: "Mentalidade de alta performance",
    text: "Adote uma postura estratégica e produtiva para se destacar como social media premium. Bônus: Guia de foco e organização.",
  },
  {
    title: "Atraia e feche com clientes premium",
    text: "Saia da zona do desconto e aprenda a negociar com clientes que valorizam seu trabalho. Bônus: Modelo de proposta comercial.",
  },
  {
    title: "Gestão e diagnóstico de perfis",
    text: "Vá além do conteúdo: entenda, analise e proponha estratégias que geram resultados reais. Bônus: Modelo de briefing e checklist.",
  },
  {
    title: "Planejamento que dá resultados",
    text: "Crie conteúdos com propósito, autoridade e foco em conversação. Bônus: Calendário de ideias + prompts de IA.",
  },
  {
    title: "Conteúdo que constrói marca e vende",
    text: "Use storytelling, copy e identidade visual para criar postagens estratégicas. Bônus: Templates de conteúdo e CTAs.",
  },
  {
    title: "Vídeo: da gravação à conversão",
    text: "Aprenda a gravar, roteirizar e editar vídeos que engajam e vendem. Bônus: Guia de gravação com celular.",
  },
  {
    title: "Sua marca pessoal como vitrine",
    text: "Construa um posicionamento forte e seja reconhecida como referência no digital. Bônus: Mapa de marca pessoal.",
  },
  {
    title: "Profissionalize seu trabalho",
    text: "Organize sua entrega, precifique com estratégia e tenha segurança jurídica. Bônus: Contratos e planilha de precificação.",
  },
  {
    title: "Fundamentos de tráfego pago",
    text: "Entenda o básico dos anúncios e comece a atrair mais vendas com tráfego. Bônus: Estrutura de campanha simples e eficaz.",
  },
];

// Componente do Swiper com loop e autoplay
export const Swipers = () => {
  return (
    <Swiper
      slidesPerView={1} /* Garantir que no mobile só exiba um slide */
      spaceBetween={0}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 0,
        } /* Corrigindo para telas pequenas */,
        768: { slidesPerView: 2, spaceBetween: 8 },
        1024: { slidesPerView: 3, spaceBetween: 10 },
        1560: { slidesPerView: 4, spaceBetween: 10 },
      }}
      modules={[Pagination, Autoplay]}
      className="swiper-container"
    >
      {modules.map((module, index) => (
        <SwiperSlide key={index}>
          <CardModule {...module} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
