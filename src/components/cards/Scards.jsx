import {Cards} from './cmcards/Cards'
import cell from "/bgcardcell.webp";
import mac from "/bgcardmac.webp";
import desk from "/bgcarddesk.webp";

import "@fontsource/montserrat/600.css";

export function Scards() {
  return (
    <div className="flex flex-col items-center  pb-[3rem] relative">
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
      <div className="w-[90%]">
        <h2 className="py-[3rem] text-[1.8rem] lg:text-3xl font-[montserrat] font-semibold text-[#F4C257] text-center ">
          Aprenda de uma vez por todas</h2>
        <Cards />
      </div>
    </div>
  );
}
