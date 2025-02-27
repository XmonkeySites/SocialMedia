import { useState, useEffect } from "react";

import cell from "/bgvideocell.webp";
import mac from "/bgvideomac.webp";
import desk from "/bgvideodesk.webp";

import { FaCheckCircle } from "react-icons/fa";
import { BsBoxArrowInUpRight } from "react-icons/bs";


import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/200.css";
import AnimatedLine from "../Who/animated/AnimatedLine";

export function Plan() {
  const [angle, setAngle] = useState(196);

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prevAngle) => (prevAngle + 1) % 360);
    }, 10);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="relative flex flex-col items-center gap-[2rem] py-[2rem] lg:py-auto pb-[5rem]">
        <picture>
          <source srcSet={desk} media="(min-width: 1282px)" />
          <source
            srcSet={mac}
            media="(min-width: 768px) and (max-width: 1281px)"
          />
          <img
            src={cell}
            alt="background"
            className="w-[100vw] h-[100%] absolute z-[-1] top-0 right-0"
          />
        </picture>
        <div className="flex flex-col items-center ">
          <div className="flex flex-col items-center lg:flex-row w-[100vw] mx-auto justify-center lg:gap-[1.5rem]">
            <div className="flex flex-col items-center  justify-center ">
              <div className="flex flex-col items-center ">
                <h2 className="text-white font-semibold font-[poppins]  text-[1.8rem]  text-center">
                  Transforme seguidores
                </h2>

                <div className="flex flex-col items-center gap-[1rem]">
                  <span className="text-black font-semibold font-[poppins]  text-[1.8rem]  text-center">
                    em vendas!
                  </span>
                  <AnimatedLine />
                </div>
              </div>
              <div className="flex flex-col items-center  gap-[1rem] md:flex-row">
                <ul className="flex flex-col items-start gap-[1.5rem]">
                  <div className="w-full">
                    <li className="text-[1rem] font-[montserrat] text-white flex items-start gap-4">
                      <FaCheckCircle className="text-black text-[1.6rem]" />
                      Curso completo
                    </li>
                    <hr className="w-[20rem] lg:w-full border-1 border-gray-100/15 mt-[0.35rem] " />
                  </div>

                  <div className="w-full">
                    <li className="text-[1rem] font-[montserrat] text-white flex items-start gap-4">
                      <FaCheckCircle className="text-black text-[1.6rem]" />+ de
                      30 aulas
                    </li>
                    <hr className="w-[20rem] lg:w-full border-1 border-gray-100/15 mt-[0.35rem] " />
                  </div>
                  <div className="w-full">
                    <li className="text-[1rem] font-[montserrat] text-white flex items-start gap-4">
                      <FaCheckCircle className="text-black text-[1.6rem]" />
                      Livro digital
                    </li>
                    <hr className="w-[20rem] lg:w-full border-1 border-gray-100/15 mt-[0.35rem] " />
                  </div>
                  <div className="w-full">
                    <li className="text-[1rem] font-[montserrat] text-white flex items-start gap-4">
                      <FaCheckCircle className="text-black text-[1.6rem]" />
                      Suporte pela plataforma e direto
                    </li>
                    <hr className="w-[20rem] lg:w-full border-1 border-gray-100/15 mt-[0.35rem] " />
                  </div>
                </ul>

                <ul className="flex flex-col items-start gap-[1.5rem]">
                  <div className="w-full">
                    <li className="text-[1rem] font-[montserrat] text-white flex items-start gap-4">
                      <FaCheckCircle className="text-black text-[1.6rem]" />
                      Conteúdos exclusivos
                    </li>
                    <hr className="w-[20rem] lg:w-full border-1 border-gray-100/15 mt-[0.35rem] " />
                  </div>
                  <div className="w-full">
                    <li className="text-[1rem] font-[montserrat] text-white flex items-start gap-4">
                      <FaCheckCircle className="text-black text-[1.6rem]" />
                      Acesso ao grupo exclusivo
                    </li>
                    <hr className="w-[20rem] lg:w-full border-1 border-gray-100/15 mt-[0.35rem] " />
                  </div>
                  <div className="w-full">
                    <li className="text-[1rem] lg:w-full font-[montserrat] text-white flex items-start gap-4">
                      <FaCheckCircle className="text-black text-[1.6rem]" />
                      Certificado de Conclusão
                    </li>
                    <hr className="w-[20rem] lg:w-full border-1 border-gray-100/15 mt-[0.35rem] " />
                  </div>
                  <div className="w-full">
                    <li className="text-[1rem] font-[montserrat] text-white flex items-start gap-4">
                      <FaCheckCircle className="text-black text-[1.6rem]" />
                      Metodologia validada da Xmonkey
                    </li>
                    <hr className="w-[20rem] lg:w-full border-1 border-gray-100/15 mt-[0.35rem] " />
                  </div>
                </ul>
              </div>
            </div>
            <div className="bg-[#362D1C] flex flex-col items-center  rounded-2xl  w-[90%] lg:w-auto  2xl:w-[30%] py-[2rem] 2xl:py-[5rem] mt-[3rem]">
              <h2 className="text-white font-semibold font-[poppins]  text-[1.8rem]  text-center">
                Garanta seu acesso
              </h2>
              <span className="text-white font-semibold font-[poppins]  text-[1.95rem]  text-center">
                50% OFF
              </span>
              <span >

              <span className="text-white font-extralight font-[poppins]  text-[0.95rem]  text-center">
                De: R$1.197 por apenas
              </span>
              <hr className="text-white/30"/>
              </span>
              <span className="text-[#CB8F39] font-semibold text-[2rem]">
                R$ <span className="text-[3rem]">597</span>,00
              </span>
              <a href="">
                <div
                  className="w-auto h-auto flex items-center justify-center mt-[2rem] rounded-md px-[2.3rem] py-[0.8rem]"
                  style={{
                    backgroundImage: `linear-gradient(${angle}deg, #FCD688 0%, #9A6C2E 100%)`,
                    transition: "background-image 0.05s linear",
                  }}
                >
                  <div className="flex flex-row items-center gap-[1rem]">
                    <h1 className="text-black text-[1.2rem] font-medium text-center font-[poppins]">
                      Quero ser PRO
                    </h1>
                    <BsBoxArrowInUpRight className="text-black text-[2.2rem] " />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
