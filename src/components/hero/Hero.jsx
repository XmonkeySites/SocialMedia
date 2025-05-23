import { useState, useEffect } from "react";

import logo from "/logot.png";
import cell from "/bghomecell.webp";
import tab from "/bgcardmac.webp";
import mac from "/bghomemac.webp";
import desk from "/bghomedesk.webp";
import peop from "/pleopes.webp";
import home from "/home.webp";

import "@fontsource/poppins/200.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";

export function Hero() {
  const [angle, setAngle] = useState(196);

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prevAngle) => (prevAngle + 1) % 360);
    }, 10);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div
        className=" flex flex-col items-center lg:items-end 2xl:items-center  bg-[#000016]/55 bg-gradient-custom-max-md mx-auto relative  overflow-hidden lg:flex-row
"

      >
        <picture>
          <source srcSet={desk} media="(min-width: 1282px)" />
          <source
            srcSet={mac}
            media="(min-width: 1024px) and (max-width: 1281px)"
          />
          <source
            srcSet={tab}
            media="(min-width: 786px) and (max-width: 1024px)"
          />
          <img
            src={cell}
            alt="background"
            className="w-[100vw] h-[100%] absolute z-[-3] top-0 right-0"
          />
        </picture>

        <div className=" flex flex-col max-md:text-center items-center container relative lg:my-[6rem] lg:items-start lg:ml-[8rem] 2xl:ml-[20rem] ">
          <img
            src={logo}
            alt="logo"
            className="w-[50%] md:w-[30%] mt-3 lg:w-[13rem]"
          />
          <div className="flex flex-col items-center w-[91%] lg:w-2xl lg:items-start">
            <h2 className="text-[1.37rem] 2xl:text-[2.3rem] font-semibold text-[#FD6F01] font-[poppins] lg:leading-[2.5rem]">
              Torne-se uma autoridade{" "}
              <span className=" text-white">para o marketing digital</span>{" "}
            </h2>

            <p className="text-white text-[0.9rem] 2xl:text-[1.5rem] font-extralight font-[poppins] mt-5  lg:text-justify">
              Saia do basíco e torne-se um social media de alta performance,
              <span className="text-[#FD6F01]">
                atraindo clientes de alto valor e se posicionando como
                especialista no digital.
              </span>
            </p>

            <div className="flex flex-col items-center gap-[1rem] md:flex-row md:mt-[1rem]">
              <img src={peop} alt="ref" className="w-[10rem] max-md:mt-8 " />
              <span className="text-[#FD6F01] flex flex-col font-medium font-[poppins]">
                <b> +720 clientes atendidos!</b>
                <span className="font-light">
                  Faturamento de mais de R$450 milhões
                </span>
              </span>
            </div>
            <a href="https://wa.me/5571984782690" target="_blank">
              <div
                className="w-auto h-auto flex items-center justify-center my-[2rem] rounded-md px-[2.3rem] py-[0.8rem]"
                style={{
                  backgroundImage: `linear-gradient(${angle}deg,  #FD6F01 0%, #FFB000 100%)`,
                  transition: "background-image 0.05s linear",
                }}
              >
                <h1 className="text-black text-[1.2rem] font-medium text-center font-[poppins]">
                  APRENDA NOSSO METODO
                </h1>
              </div>
            </a>
          </div>
          <div className="h-full">
          </div>
            <img
              src={home}
              alt=""
              className="bottom-0 w-[25rem] 2xl:w-[35rem] md:hidden lg:block lg:w-[30rem] mt-[3rem] md:w-[17rem] lg:absolute lg:right-0 xl:right-1/8  "
            />
        </div>
        <hr className="w-full border-2  border-[#FD6F01] left-0 bottom-0 absolute" />
      </div>
    </>
  );
}
