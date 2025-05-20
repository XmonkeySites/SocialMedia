import { useState, useEffect } from "react";

import { Cards } from "./cmcards/Cards";


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

      <div className="container]">
        <h2 className="py-[3rem] text-[1.8rem] lg:text-3xl font-[montserrat] font-semibold text-[#FD6F01] text-center ">
          Aprenda de uma vez por todas
        </h2>
        <div className="container mx-auto ">
          <Cards />
        </div>
      </div>
      <a
        href="https://wa.me/5571984782690"
        target="_blank"
        className="items-center"
      >
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
