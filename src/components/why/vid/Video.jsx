import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import celular from "/celular.png";

import video1 from "/video1.webm";
import video2 from "/video2.webm";
import video3 from "/video3.webm";

const videos = [video1, video2, video3];

export default function VideoGallery() {
  return (
    <div className="flex justify-center items-center">
      {/* Layout para telas grandes (três celulares lado a lado) */}
      <div className="hidden lg:flex justify-center items-center gap-8">
        {videos.map((video, index) => (
          <div
            key={index}
            className="relative flex justify-center items-center"
          >
            {/* Imagem do celular */}
            <img
              src={celular}
              alt={`Celular ${index + 1}`}
              className="w-[20rem] h-[37rem] max-w-3xl"
            />

            {/* Vídeo posicionado dentro da tela do celular */}
            <div className="absolute w-[75%] h-[75%] top-[16%] left-[12.5%] overflow-hidden pointer-events-auto">
              <video
                className="w-full h-full rounded-lg shadow-lg object-cover"
                controls
                loop
                preload="metadata"
              >
                <source src={video} type="video/mp4" />
                Seu navegador não suporta vídeos.
              </video>
            </div>
          </div>
        ))}
      </div>

      {/* Layout para telas pequenas (um celular com slide de vídeos e botões dentro da tela) */}
      <div className="lg:hidden flex flex-col justify-center items-center relative">
        <div className="relative flex justify-center items-center">
          {/* Imagem do celular */}
          <img
            src={celular}
            alt="Celular único"
            className="w-[20rem] h-[37rem] max-w-3xl"
          />

          {/* Swiper para criar o carrossel de vídeos */}
          <div className="absolute w-[75%] h-[65%] top-[17%] left-[12.5%] overflow-hidden flex items-center">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={10}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              className="h-full w-full pointer-events-auto"
            >
              {videos.map((video, index) => (
                <SwiperSlide
                  key={index}
                  className="flex justify-center items-center h-full"
                >
                  <video
                    className="w-full h-[25rem] rounded-lg shadow-lg object-cover"
                    controls
                    loop
                    preload="metadata"
                  >
                    <source src={video} type="video/mp4" />
                    Seu navegador não suporta vídeos.
                  </video>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
