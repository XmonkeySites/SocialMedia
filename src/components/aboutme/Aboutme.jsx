import { Swipers } from "./swiper/swipers";

import cell from "/bgcardcell.webp";
import mac from "/bgcardmac.webp";
import desk from "/bgcarddesk.webp";


export function Aboutme() {
  return (
    <section className="pt-[3rem] relative ">
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
      <div className="flex flex-col items-center gap-[3rem]">
        <h2 className="text-2xl font-semibold font-[poppins] text-white text-center ">
          QUEM É CADA ESPECIALISTA
        </h2>

        <div className="flex flex-col w-full items-center justify-center mb-[4rem]">
          <Swipers />
        </div>
      </div>
    </section>
  );
}
