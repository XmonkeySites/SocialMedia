import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "../swiper/style.css";
import { Pagination, Autoplay } from "swiper/modules";

import result from "/lud.webp";
import result1 from "/kaka.webp";
import result2 from "/loren.webp";
import result3 from "/dudu.webp";

import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/400.css";

// Componente de Card
const CardModule = ({ imgs, name, about, funct }) => {
  return (
    <div className="w-full flex-col font-[montserrat] gap-3 flex items-center justify-center">
      <img
        src={imgs}
        alt={`Imagem de ${name}`}
        loading="lazy"
        className="object-cover rounded-lg w-[20rem] h-auto"
        width="300"
        height="300"
      />
      <h2 className="text-white text-2xl font-semibold ">{name}</h2>
      <p className="text-white font-light text-center ">{about}</p>
      <span className="text-[#CF3300] font-bold">
        <i>{funct} </i>
      </span>
    </div>
  );
};

export const Swipers = () => {
  const resultados = [
    {
      imgs: result,
      name: "Ludmila Valesco",
      about:
        "Com experiência em gestão e expansão de franquias, Ludmila é referência em implantar a metodologia da Xmonkey e alavancar negócios em todo Brasil.",
      funct: "Diretora de Franquias",
    },
    {
      imgs: result1,
      name: "Kaka Veloso",
      about:
        "Kaka lidera a estratégia comercial da Xmonkey, criando novas oportunidades e garantindo resultados excepcionais para nossos franqueados.",
      funct: "Diretora Comercial",
    },
    {
      imgs: result2,
      name: "Lorena Velasco",
      about:
        "Lidera toda a equipe operacional, garantindo uma entrega de excelência, profissionalismo e alto padrão de qualidade para os clientes",
      funct: "Diretora Operacional",
    },
    {
      imgs: result3,
      name: "Eduardo Filho",
      about:
        "Especialista em finanças e processos, Eduardo assegura a solidez financeira e a gestão eficiente de todos os recursos da empresa.",
      funct: "Diretor Administrativo",
    },
  ];

  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={15}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      breakpoints={{
        0: { slidesPerView: 1, spaceBetween: 0 },
        768: { slidesPerView: 2, spaceBetween: 15 },
        1024: { slidesPerView: 3, spaceBetween: 40 },
      }}
      modules={[Pagination, Autoplay]}
      className="swiper"
    >
      {resultados.map((item, index) => (
        <SwiperSlide key={index}>
          <CardModule
            imgs={item.imgs}
            index={index}
            name={item.name}
            about={item.about}
            funct={item.funct}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
