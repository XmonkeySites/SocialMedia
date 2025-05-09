import { Wcards } from "./Wcards";
import AnimatedLine from "./animated/AnimatedLine";




import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";



export function Who(){
    return (
      <div className="flex flex-col items-center bgcardorange text-[2rem] py-[2rem] relative">
        <div className="flex flex-col items-center container">
          <h2 className="font-[montserrat] text-3xl text-center text-white font-semibold my-[1rem] lg:w-3xl ">
            Transforme-se em um social media de alta performance,
            <div className="flex flex-col items-center gap-[1rem]">
              <span className="text-[#120736] font-bol1d ">
                tendo uma carteira HiTkt.
              </span>
              <AnimatedLine />
            </div>
          </h2>
          <div className="items-center justify-center mx-auto ">
            <Wcards />
          </div>
        </div>
      </div>
    );
}