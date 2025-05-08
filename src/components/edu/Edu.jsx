
import dudu from "/edu.webp";
import cell from "/bgcardcell.webp";
import mac from "/bgcardmac.webp";
import desk from "/bgcarddesk.webp";

import "@fontsource/poppins/400.css";

export function Edu() {

  return (
    <section className="py-10 relative">
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
      <div className="flex flex-col-reverse container w-[90%] mx-auto lg:flex-row lg:gap-5 2xl:w-[60%] toLeft relative">
        <div className="flex flex-col gap-5 items-center text-white lg:w-[40%] lg:mx-auto lg:items-start">
          <h1 className="pt-10 text-[1.3rem] tracking-[.15rem] text-orange lg:pl-5">
            A MENTE POR TRÁS DE TUDO
          </h1>
          <h2 className="text-[3rem] lg:border-l-4 lg:border-[#D1AE6C] lg:pl-4">
            Eduardo Filho
          </h2>
          <p className="relative text-[#D1AE6C] top-[-20px] lg:pl-5">
            @eduxmonkey
          </p>
          <div className="flex flex-col text-center gap-4 font-[poppins]  lg:text-start lg:pl-5">
            <p>
              Administrador de empresas especializado em marketing, Eduardo
              acumula 15 anos de experiência em marketing e vendas, tendo atuado
              em multinacionais e hoje é diretor Xmonkey Academy.
            </p>
            <p>
              Em 2019, fundou a Xmonkey com suas sócias, em plena pandemia, e
              liderou a empresa a crescer 83% em 2024, tornando-a referência no
              mercado digital. A Xmonkey é uma agência premiada e reconhecida
              como Top of Mind em marketing digital.
            </p>
            <p>
              No curso “Marketing Digital: Transforme Seu Instagram em uma
              Máquina de Vendas”, você terá acesso às melhores estratégias que
              impulsionam nosso crescimento e o de nossos clientes. É a sua
              oportunidade de aprender com quem vive o marketing digital e
              aplica técnicas comprovadas no dia a dia. Garanta sua vaga agora e
              domine o mercado em 2025!
            </p>
          </div>
        </div>
        <div className="">
          <img
            className="rounded-3xl w-[400px] lg:w-[550px]"
            src={dudu}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
