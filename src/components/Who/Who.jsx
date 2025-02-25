import { Wcards } from "./Wcards";
import AnimatedLine from "./animated/AnimatedLine";

import cell from "/bgvideocell.webp";
import mac from "/bgvideomac.webp";
import desk from "/bgvideodesk.webp";



import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";



export function Who(){
    return (
      <div className="flex flex-col items-center text-[2rem] py-[3rem] relative">
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
<div className="w-[60%] h-[40rem] bg-amber-700"></div>
        
        <h2 className="font-[montserrat] text-3xl text-center text-white font-semibold my-[1rem] w-[70%] ">
          Transforme-se em um social media de alta performance,
          <div className="flex flex-col items-center gap-[1rem]">
            <span className="text-[#0f0f0f] font-bol1d ">
              tendo uma carteira HiTkt.
            </span>
            <AnimatedLine />
          </div>
        </h2>
        <div className="items-center justify-center mx-auto lg:translate-x-[1.7rem]">
          <Wcards />
        </div>
      </div>
    );
}