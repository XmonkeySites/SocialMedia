import { useState, useEffect } from "react";


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
    <section className="flex flex-col bgcardblue items-center  relative pb-[3rem]">


      <PiCaretCircleDoubleRightLight className="text-[3.5rem]  translate-y-[-1.3rem] text-[#FD6F01] bg-[#222122] rounded-[100px] rotate-[90deg]" />

      <h2 className="text-[1.6rem] font-semibold text-center font-[poppins] text-white my-[2.5rem] ">
        O passo a passo para sua{" "}
        <span className="text-[#FD6F01]">independência financeira</span>
      </h2>
      <div className="flex flex-col gap-6 items-center ">
        <div className="w-full">
          <Swipers />
        </div>
        <div className="flex flex-col items-center gap-[2rem] md:grid md:grid-cols-2 justify-center my-[3rem]">
          <div className=" flex items-center gap-[1rem] bg-[#0f0f0f]/40 border-[#FD6F01] border-1 rounded-lg px-[3rem] py-[0.45rem]">
            <TbAccessibleFilled className="text-[#FD6F01] text-[1.8rem] xl:text-[2.3rem]" />
            <span className="text-[1.15rem] xl:text-[1.5rem] font-light  font-[poppins] text-center text-white">
              Interativa e acessível
            </span>
          </div>
          <div className=" flex items-center gap-[1rem] bg-[#0f0f0f]/40 border-[#FD6F01] border-1 rounded-lg px-[2.6rem] py-[0.45rem]">
            <PiMagnifyingGlassFill className="text-[#FD6F01] text-[1.8rem] xl:text-[2.3rem]" />
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

      <div className="flex flex-col mt-10 items-center">
        <h2 className="text-[1.7rem] font-semibold font-[poppins] text-center text-white lg:w-[29rem]">
          e se <span className="text-[#FD6F01]">destaque no mercado </span> com
          a Metodologia da Xmonkey
        </h2>
        <a href="https://wa.me/5571984782690" target="_blank">
          <div
            className="w-auto h-auto flex items-center justify-center mt-[2rem] rounded-md px-[2.3rem] py-[0.8rem]"
            style={{
              backgroundImage: `linear-gradient(${angle}deg, #FD6F01 0%, #FFB000 100%)`,
              transition: "background-image 0.05s linear",
            }}
          >
            <h1 className="text-black text-[1.2rem] font-medium text-center font-[poppins]">
              QUERO COMEÇAR AGORA
            </h1>
          </div>
        </a>
      </div>
    </section>
  );
}
