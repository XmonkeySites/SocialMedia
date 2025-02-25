import { FaStar } from "react-icons/fa";
import { FaFunnelDollar } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { IoMegaphone } from "react-icons/io5";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { AiOutlineAim } from "react-icons/ai";
import { FaMousePointer } from "react-icons/fa";

import "@fontsource/montserrat/500.css";

function getIcon(type) {
  switch (type) {
    case "funnel":
      return FaFunnelDollar;
    case "IoMegaphone":
      return IoIosPeople;
    case "megaphone":
      return IoMegaphone;
    case "glass":
      return PiMagnifyingGlassBold;
    case "aim":
      return AiOutlineAim;
    case "mouse":
      return FaMousePointer;
    default:
      return null;
  }

}




function Makecards({text,type}) {
  const Icon = getIcon(type);

  return (
    <div className="flex flex-col bg-[#0E0E0E] w-[100%] 2xl:w-[80%] mx-auto h-[13rem] border-gray-600/40 border-1 pr-[10px] rounded-md">
      <hr className="w-[3.5rem] border-[1.5px] border-[#F4C257] translate-x-[1.85rem] glowing-hr " />

      <div className="flex flex-col pl-[2rem] mt-[1.2rem] gap-5">
        {Icon && (
          <Icon className="text-[2.75rem] text-[#F4C257] my-1 translate-x-[0.4rem]" />
        )}
        <span className="text-white text-[1.1rem] font-medium  font-[montserrat] ">
          {text}{" "}
        </span>
      </div>
    </div>
  );
}

export function Cards() {
  return (
    <div className="flex flex-col items-center gap-[3rem] 2xl:gap-x-[0rem] md:grid md:grid-cols-2 lg:grid-cols-3">
      <Makecards
        type="funnel"
        text="As melhores estratégias do mercado
"
      />
      <Makecards
        type="IoMegaphone"
        text="Atrair clientes de alto valor
"
      />
      <Makecards type="megaphone" text="Se posicionar como autoridade" />
      <Makecards
        type="glass"
        text="Precificar de forma estratégica
"
      />
      <Makecards
        type="aim"
        text="Gerar resultados reais para seus clientes
"
      />
      <Makecards
        type="mouse"
        text="Ferramentas para otimizar seu trabalho
"
      />
    </div>
  );
}
