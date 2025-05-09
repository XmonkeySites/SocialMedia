import { useState, useEffect } from "react";

import { Cards } from "./cmcards/Cards";
import cell from "/bgcardcell.webp";
import mac from "/bgcardmac.webp";
import desk from "/bgcarddesk.webp";

import "@fontsource/montserrat/600.css";

export function Scards() {
    const [angle, setAngle] = useState(196);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setAngle((prevAngle) => (prevAngle + 1) % 360);
      }, 10);
      return () => clearInterval(interval);
    }, []);
  return (
    <div className="flex flex-col items-center bgcardblue  pb-[3rem] relative">
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
      <div className="container]">
        <h2 className="py-[3rem] text-[1.8rem] lg:text-3xl font-[montserrat] font-semibold text-[#FD6F01] text-center ">
          Aprenda de uma vez por todas
        </h2>
        <Cards />
      </div>
      <a href="" className="items-center">
        <div
          className="w-auto h-auto flex items-center justify-center my-[2rem] rounded-md px-[2.3rem] py-[0.8rem]"
          style={{
            backgroundImage: `linear-gradient(${angle}deg,  #FD6F01 0%, #FFB000 100%)`,
            transition: "background-image 0.05s linear",
          }}
        >
          <h1 className="text-black text-[1.2rem] font-medium text-center font-[poppins]">
            QUERO MINHA VAGA
          </h1>
        </div>
      </a>
    </div>
  );
}
