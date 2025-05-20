import { useState, useEffect } from "react";

import { FaMapPin } from "react-icons/fa6";
import { BsCalendarDate } from "react-icons/bs";

export function Local() {
  const [angle, setAngle] = useState(196);

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prevAngle) => (prevAngle + 1) % 360);
    }, 10);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="py-[3rem] bgcardblue ">
      <div className="flex max-md:flex-col container max-xl:gap-6 justify-evenly">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.7995482821566!2d-38.45308022492332!3d-12.984669087331886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161b05ab119977%3A0xdb8716976dc33417!2sAtlanta%20Empresarial!5e0!3m2!1spt-BR!2sbr!4v1747771088250!5m2!1spt-BR!2sbr"
          className="w-full aspect-[4/3] rounded-lg shadow-lg border-0 lg:w-[550px]"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="text-white font-[montserrat] lg:w-lg ">
          <h2 className="text-[#fd6f01] font-semibold mb-15  text-4xl max-md:text-3xl ">
            Nosso Local!
          </h2>
          <ul className="space-y-5">
            <li className="flex gap-2 items-center">
              <FaMapPin size={28} className="text-[#fd6f01]" /> Rua Doutor José
              Peroba, 297, Edf Atlanta Empresarial, auditório, Salvador-BA
            </li>
            <li className="flex gap-2 items-center">
              <BsCalendarDate size={28} className="text-[#fd6f01]" />
              14/06/2025
            </li>
          </ul>
          <a
            href="https://wa.me/5571984782690"
            target="_blank"
            className="items-center max-md:justify-center flex"
          >
            <div
              className="w-auto h-auto flex items-center justify-center my-[2rem] rounded-md px-[2.3rem] py-[0.8rem]"
              style={{
                backgroundImage: `linear-gradient(${angle}deg,  #FD6F01 0%, #FFB000 100%)`,
                transition: "background-image 0.05s linear",
              }}
            >
              <h1 className="text-black text-[1.2rem] font-medium text-center font-[poppins]">
                APRENDA NOSSO METODO
              </h1>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
