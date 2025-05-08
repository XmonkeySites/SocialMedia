import React, { useState } from "react";




import "@fontsource/montserrat/500.css";
import "@fontsource/poppins/700.css";
import AnimatedLine from "../Who/animated/AnimatedLine";



export function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "1. O curso é adequado para iniciantes?",
      answer:
        "O Social Media PRO foi desenvolvido exclusivamente para profissionais que já atuam na área e querem elevar seu nível, atrair clientes HiTkt e aumentar seu faturamento.",
    },
    {
      question: "2. Quanto tempo dura o curso?",
      answer:
        "O curso tem +30 aulas diretas ao ponto, com um conteúdo 100% prático e aplicável. Você pode assistir no seu próprio ritmo e já começar a implementar as estratégias desde a primeira aula. Além disso, o acesso é vitalício, então você pode revisar as aulas sempre que quiser.",
    },
    {
      question: "3. Como faço para acessar o conteúdo?",
      answer:
        "Assim que sua inscrição for confirmada, você poderá acessar.  Todo o conteúdo fica disponível 24h por dia, no celular, tablet ou computador, para que você estude quando e onde quiser.",
    },
    {
      question: "4. Há algum suporte disponível durante o curso?",
      answer:
        "Sim! Além das aulas completas, você terá suporte direto na plataforma para tirar dúvidas e um grupo exclusivo de alunos. Aqui, você não aprende sozinho. Nossa missão é garantir que você aplique e tenha resultados reais no mercado.",
    },
    {
      question: "5. Os conteúdos do curso são atualizados?",
      answer:
        "Sim! O mercado digital muda constantemente, e por isso mantemos nosso conteúdo sempre atualizado com as melhores estratégias, tendências e ferramentas do momento. Ao se inscrever, você garante acesso vitalício, incluindo todas as futuras atualizações e novos materiais que forem adicionados.",
    },
  ];

  return (
    <section
      className=" text-white bgcardorange"
   
    >
      <div className="max-w-[90%] container mx-auto py-8 lg:flex lg:items-center lg:justify-center ">
        <div className="text-center mb-6 lg:w-[40%] lg:flex lg:flex-col ">
          <h2
            className="text-[8rem] md:text-[10rem] font-bold  text-[#1d1d1d] font-[poppins] leading-[7.5rem] md:leading-[10rem]   "
            style={{ WebkitTextStroke: "2px white" }}
          >
            FAQ
          </h2>
          <p className=" text-white text-[1.4rem] md:text-[1.8rem] flex flex-col md:translate-x-[-2.2rem] font-[montserrat] font-medium gap-[1rem]">
            DÚVIDAS FREQUENTES
            <div className="translate-x-[-3rem]  md:translate-x-[-5rem]">
              <AnimatedLine />
            </div>
          </p>
        </div>
        <div className="space-y-4 py-5 lg:w-[50%]">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border border-[#f1f1f1] rounded-md p-4 cursor-pointer w-[95%] mx-auto ${
                activeIndex === index ? "bg-[#252525]" : "bg-[#252525]/90"
              }`}
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-medium flex items-center justify-between text-[#F4C257]">
                {faq.question}
                <span>{activeIndex === index ? "-" : "+"}</span>
              </h3>
              <div
                className={`${
                  activeIndex === index
                    ? "max-h-screen opacity-100"
                    : "max-h-0 opacity-0"
                } overflow-hidden transition-all duration-500 ease-in-out`}
              >
                <p className="mt-2 text-gray-300">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
