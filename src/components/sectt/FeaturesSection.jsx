import { FaRocket, FaShieldAlt, FaUsers } from "react-icons/fa";

export default function FeaturesSection() {
  return (
    <section className="bgcardorange py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl container font-[montserrat] mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#120736] mb-4">
          Por que escolher a nossa solução?
        </h2>
        <p className="text-white mb-12 max-w-3xl mx-auto">
          Um conjunto completo de recursos para levar seu negócio ao próximo
          nível.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-10 mb-12">
          <div className="flex flex-col items-center text-center max-w-xs mx-auto">
            <FaRocket className="text-[#120736] text-6xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Performance Incrível</h3>
            <p className="text-white">
              Nosso sistema garante rapidez e estabilidade para sua aplicação.
            </p>
          </div>

          <div className="flex flex-col items-center text-center max-w-xs mx-auto">
            <FaShieldAlt className="text-[#120736] text-6xl mb-4" />
            <h3 className="text-xl  font-semibold mb-2">Segurança Total</h3>
            <p className="text-white">
              Protegemos seus dados com as melhores práticas e criptografia.
            </p>
          </div>

          <div className="flex flex-col items-center text-center max-w-xs mx-auto">
            <FaUsers className="text-[#120736] text-6xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Suporte Especializado
            </h3>
            <p className="text-white">
              Nossa equipe está sempre pronta para ajudar você a crescer.
            </p>
          </div>
        </div>

  
      </div>
    </section>
  );
}
