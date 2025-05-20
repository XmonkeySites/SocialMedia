import { Swipers } from "./swiper/swipers";



export function Aboutme() {
  return (
    <section className="pt-[3rem] bgcardblue relative ">

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
