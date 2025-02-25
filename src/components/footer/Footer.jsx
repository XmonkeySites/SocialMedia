
import cell from "/bgcardcell.webp";
import mac from "/bgcardmac.webp";
import desk from "/bgcarddesk.webp";
import logo from "/logofooter.webp";

import "@fontsource/montserrat/500.css";

export function Footer() {


  return (
    <footer className=" text-white font-medium font-[poppins] py-8 relative">
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
      <div className="container mx-auto px-4 lg:px-0 toLeft">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img
            src={logo}
            alt="Logo Xmonkey"
            className="w-[300px]"
            loading="lazy"
          />
        </div>
        {/* Informações de Contato */}
        <div className="text-center space-y-2">
          <p className="text-mainBlue ">
            <strong>Endereço:</strong> R. Dr. José Peroba, 297 - Salas 404 à 408
            - Stiep, Salvador - BA, 41770-235
          </p>
          <p className="text-mainBlue">
            <strong>Telefone:</strong> 71 98478‑2690
          </p>
          <p className="text-mainBlue">
            <strong>E-mail:</strong> contato@xmonkeyacademy.com.br
          </p>
        </div>
        {/* Linha de separação */}
        <div className="mt-6 border-t border-mainBlue"></div>
        {/* Direitos reservados */}
        <p className="text-center text-sm text-mainBlue mt-4">
          &copy; {new Date().getFullYear()} Xmonkey. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
