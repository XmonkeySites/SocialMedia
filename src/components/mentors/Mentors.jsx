import cell from "/bgcardcell.webp";
import mac from "/bgcardmac.webp";
import desk from "/bgcarddesk.webp";
import garantia from "/garantia.webp";
import {Clock} from "../clock/Clock"

import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/200.css";


export function Mentors() {
  return (
    <div className="flex flex-col items-center relative py-[5rem]">
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

      <div className="flex flex-col items-center">
   
        <div className="flex flex-col items-center gap-[1rem] bg-[#37373b]/45 w-[90%]  rounded-2xl px-[1.2rem] py-[3.5rem]">
          <img src={garantia} alt="img" className="w-[14rem]" />
          <h3 className="text-[1.8rem] font-semibold font-[montserrat] text-[#f1f1f1] ">
            Garantia 7 dias!
          </h3>
          <p className="text-[1rem] font-extralight text-[#f1f1f1] font-[montserrat] text-center">
            Confiamos tanto na eficácia do nosso produto que oferecemos uma
            garantia incondicional de 7 dias
          </p>
        </div>
      </div>
    </div>
  );
}
