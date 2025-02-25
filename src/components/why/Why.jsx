import { useState, useEffect } from "react";
import cell from "/bgcardcell.webp";
import mac from "/bgcardmac.webp";
import desk from "/bgcarddesk.webp";

import { TbAccessibleFilled } from "react-icons/tb";
import { PiMagnifyingGlassFill } from "react-icons/pi";

import "@fontsource/poppins/300.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/500.css";

import { PiCaretCircleDoubleRightLight } from "react-icons/pi";
import { Swipers } from "./swiper/Swipers";
import Video from "./vid/Video";


export function Why() {
  const [angle, setAngle] = useState(196);

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prevAngle) => (prevAngle + 1) % 360);
    }, 10);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex flex-col items-center  relative pb-[3rem]">
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

      <PiCaretCircleDoubleRightLight className="text-[3.5rem]  translate-y-[-1.3rem] text-[#D1AE6C] bg-[#222122] rounded-[100px] rotate-[90deg]" />

      <h2 className="text-[1.6rem] font-semibold text-center font-[poppins] text-white my-[2.5rem] ">
        O passo a passo para sua{" "}
        <span className="text-[#D1AE6C]">independência financeira</span>
      </h2>
      <div className="flex flex-col gap-6 items-center ">
        <div className="w-full">
          <Swipers />
        </div>
        <div className="flex flex-col items-center gap-[2rem] md:grid md:grid-cols-2 justify-center my-[3rem]">
          <div className=" flex items-center gap-[1rem] bg-[#0f0f0f]/40 border-[#F4C257] border-1 rounded-lg px-[3rem] py-[0.45rem]">
            <TbAccessibleFilled className="text-[#D1AE6C] text-[1.8rem] xl:text-[2.3rem]" />
            <span className="text-[1.15rem] xl:text-[1.5rem] font-light  font-[poppins] text-center text-white">
              Interativa e acessível
            </span>
          </div>
          <div className=" flex items-center gap-[1rem] bg-[#0f0f0f]/40 border-[#F4C257] border-1 rounded-lg px-[2.6rem] py-[0.45rem]">
            <PiMagnifyingGlassFill className="text-[#D1AE6C] text-[1.8rem] xl:text-[2.3rem]" />
            <span className="text-[1.15rem]  xl:text-[1.5rem] font-light  font-[poppins] text-center text-white">
              Facilmente navegável
            </span>
          </div>
        </div>
        <div>

        <h2 className="text-[1.7rem] font-semibold w-[60%] mx-auto md:w-auto font-[poppins] text-center text-white ">
          Eu quero que você viva essa transformação
        </h2>
        </div>
        <Video />
      </div>

      <div className="flex flex-col items-center">
        <h2 className="text-[1.7rem] font-semibold font-[poppins] text-center text-white lg:w-[29rem]">
          e se <span className="text-[#D1AE6C]">destaque no mercado </span> com
          a Metodologia da Xmonkey
        </h2>
        <a href="">
          <div
            className="w-auto h-auto flex items-center justify-center mt-[2rem] rounded-md px-[2.3rem] py-[0.8rem]"
            style={{
              backgroundImage: `linear-gradient(${angle}deg, #FCD688 0%, #9A6C2E 100%)`,
              transition: "background-image 0.05s linear",
            }}
          >
            <h1 className="text-black text-[1.2rem] font-medium text-center font-[poppins]">
              QUERO COMEÇAR AGORA
            </h1>
          </div>
        </a>
      </div>
    </div>
  );
}
