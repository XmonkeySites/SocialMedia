import { section } from "framer-motion/client";
import React, { useState, useEffect } from "react";

import cell from "/bgvideocell.webp";
import mac from "/bgvideomac.webp";
import desk from "/bgvideodesk.webp";

import box from "/bgcardmac.webp";


import { BsBoxArrowInUpRight } from "react-icons/bs";




export function Clock() {


  const [angle, setAngle] = useState(196);

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prevAngle) => (prevAngle + 1) % 360);
    }, 10);
    return () => clearInterval(interval);
  }, []);

  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();

      // Defina o início do dia (primeiro segundo do dia atual)
      const startTime = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        0,
        0,
        0
      );

      // Alterna entre 48h e 24h com base no dia atual
      const is48Hours = now.getDate() % 2 === 0;

      // Defina o tempo final (endTime)
      const endTime = new Date(startTime);
      if (is48Hours) {
        endTime.setHours(endTime.getHours() + 48); // Adiciona 48h a partir do início do dia
      } else {
        endTime.setHours(endTime.getHours() + 24); // Adiciona 24h a partir do início do dia
      }

      const difference = endTime - now;

      if (difference > 0) {
        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ hours, minutes, seconds });
      } else {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Atualiza o contador a cada segundo
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer); // Limpa o intervalo ao desmontar o componente
  }, []);

  return (
    <section className="w-full relative">
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

      <div className="flex items-center justify-center  lg:py-10 rounded-md">
        <div className="flex flex-col lg:flex-row items-center justify-center text-black  font-semibold p-6 rounded-md max-w-lg lg:max-w-full relative mx-auto gap-6 lg:gap-20">
          <hr className="w-[100vw] border-1  border-[#F4C257] left-0 bottom-0 absolute md:hidden" />
          {/* Relógio */}
          <img
            src={box}
            alt=""
            className="absolute w-full h-full z-[-1] md:rounded-xl"
          />
          <div className="flex gap-4 bg-white border-2 border-[#D1AE6C] b rounded-xl p-4 shadow-lg justify-center lg:ml-10">
            {["Horas", "Minutos", "Segundos"].map((label, index) => (
              <div key={label} className="time-unit">
                <span className="time-number">
                  {Object.values(timeLeft)[index]}
                </span>
                <span className="time-label">{label}</span>
              </div>
            ))}
          </div>

          {/* Conteúdo */}
          <div className="text-center p-6 rounded-lg shadow-xl border-1 border-[#D1AE6C] lg:w-[500px] ">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#F4C257]">
              Promoção por tempo{" "}
              <span className="uppercase text-white underline">LIMITADO</span>
            </h1>
            <p className="text-lg sm:text-xl line-through text-gray-300 mt-2">
              DE: R$1.197,00
            </p>
            <div className="price-box mt-4 text-white items-center justify-center flex ">
              <span className="price-label mr-4">POR:</span>
              <span className="text-orange font-semibold flex items-center mt-0 text-[1.5rem]">
                R$ 597,00
              </span>
            </div>
            <p className="text-xs sm:text-sm text-gray-300 mt-2">
              em até 10x s/juros no cartão de crédito
            </p>
            <div className="flex items-center justify-center py-3 "></div>
            <a href="">
              <div
                className="w-auto h-auto flex items-center justify-center  rounded-md px-[2.3rem] py-[0.8rem]"
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
    </section>
  );
}
