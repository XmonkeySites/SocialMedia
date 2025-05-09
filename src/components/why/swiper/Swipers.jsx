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
    <div className="flex flex-col bg-[#000027] w-[15rem] h-[22rem] lg:w-[17rem] drop-shadow-xl shadow shadow-gray-800 lg:h-[25rem] border border-gray-600/40 px-[0.8rem] rounded-md">
      <hr className="w-14 border-2 border-[#FD6F01] translate-x-7 glowing-hr" />
      <div className="flex flex-col mt-5 gap-5">
        <FaCheck className="text-4xl text-[#FD6F01] my-1 translate-x-[2.5rem] translate-y-[-0.5rem]" />

        <h3 className="text-[#FD6F01] text-lg font-montserrat font-semibold">
          {title}
        </h3>
        <span className="text-white text-base  font-montserrat">{text}</span>
      </div>
    </div>
  );
};

// Lista de módulos
const modules = [
  {
    title: "Módulo 1: Universo Social Media",

    text: "Descubra as oportunidades do mercado e como se tornar um social media de alta performance. Bônus: Guia prático de atuação.",
  },
  {
    title: "Módulo 2: Cliente certo, dinheiro certo",

    text: "Aprenda a prospectar, atrair e manter clientes de alto valor, quebrando objeções e aumentando vendas. Bônus: Modelo de proposta comercial.",
  },
  {
    title: "Módulo 3: O processo de gestão",

    text: "Defina público-alvo, estruture um planejamento estratégico e monitore seus resultados com eficiência. Bônus: Modelo de briefing onboarding.",
  },
  {
    title: "Módulo 4: Criação de conteúdo",

    text: "Organize seu perfil, domine storytelling, gatilhos mentais e aprenda a criar conteúdos que vendem. Bônus: 30 dias de conteúdos, prompts de ChatGPT e pack de ícones.",
  },
  {
    title: "Módulo 5: Luz, câmera, ação",

    text: "Melhore sua gravação e aprenda a editar vídeos no CapCut para aumentar o engajamento. Bônus: Lista de materiais para gravação.",
  },
  {
    title: "Módulo 6: Construindo uma carreira sólida",

    text: "Fortaleça seu posicionamento, crie autoridade, faça networking e desenvolva um portfólio de impacto. Bônus: Mapa de posicionamento.",
  },
  {
    title: "Módulo 7:Profissionalize seu trabalho",

    text: "Formalize seu negócio, precifique corretamente seus serviços e proteja-se com contratos. Bônus: Modelos prontos de precificação e contratos",
  },

  {
    title: "Módulo Bônus: Fundamentos de Tráfego Pago",
    text: "Aprenda os princípios do tráfego pago, como configurar campanhas no Meta Ads e Google Ads, segmentar o público certo e analisar métricas para otimizar resultados.",
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
        1024: { slidesPerView: 4, spaceBetween: 10 },
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
