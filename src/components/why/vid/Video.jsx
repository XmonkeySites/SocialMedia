import celular from "/celular.webp";
import video4 from "/video4.mp4";

export default function VideoGallery() {
  return (
    <div className="flex justify-center items-center w-full mx-auto px-4">
      <div className="relative flex justify-center items-center">
        {/* Imagem do celular */}
        <img
          src={celular}
          alt="Celular"
          className="w-[20rem] h-[37rem] max-w-full"
        />

        {/* Vídeo posicionado dentro da tela do celular */}
        <div className="absolute w-[75%] h-[75%] top-[16%] left-[12.5%] overflow-hidden pointer-events-auto">
          <video
            className="w-full h-full rounded-lg shadow-lg object-cover"
            controls
            loop
            preload="metadata"
          >
            <source src={video4} type="video/mp4" />
            Seu navegador não suporta vídeos.
          </video>
        </div>
      </div>
    </div>
  );
}
