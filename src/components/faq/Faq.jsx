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
      question: "1. O curso é presencial. Terei acesso a algo depois do evento?",
      answer:
        "Sim! Os participantes terão acesso a um material exclusivo pós-evento com os principais tópicos abordados, além de um grupo para troca de experiências e network com outros social media estratégicos.",
    },
    {
      question: "2. Para quem é indicado o Social Media Premium? ",
      answer:
        "Para social media que já têm alguma experiência, mas querem deixar de ser operacionais e começar a atuar de forma estratégica, sendo vistos como especialistas no que fazem.        ",
    },
    {
      question: "3. O que vou aprender nesse curso que não aprendi em outros?",
      answer:
        "Estratégias reais, criadas e testadas por uma equipe que vive o marketing todos os dias. Você vai aprender posicionamento, autoridade, bastidores reais, estratégias avançadas, atendimento de alto padrão e como se destacar em um mercado competitivo.        ",
    },
    {
      question: "4. Há algum suporte disponível durante o curso?",
      answer:
        "Sim! Além das aulas completas, você terá suporte direto na plataforma para tirar dúvidas e um grupo exclusivo de alunos. Aqui, você não aprende sozinho. Nossa missão é garantir que você aplique e tenha resultados reais no mercado.",
    },
    {
      question: "5. Esse curso é diferente do Social Media Gold?",
      answer:
        "Sim! O Social Media Premium é um passo além. Aqui o foco é te posicionar como autoridade além de viver nossa metodologia presencialmente.",
    },
  ];

  return (
    <section className=" text-white bgcardorange">
      <div className="max-w-[90%] container mx-auto py-8 lg:flex lg:items-center lg:justify-center ">
        <div className="text-center mb-6 lg:w-[40%] lg:flex lg:flex-col ">
          <h2
            className="text-[8rem] md:text-[10rem] font-bold  text-[#120736] font-[poppins] leading-[7.5rem] md:leading-[10rem]   "
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
              className={`border border-[#f1f1f1] rounded-md p-4 cursor-pointer w-[90%] mx-auto ${
                activeIndex === index ? "bg-[#000016]" : "bg-[#120736]/95"
              }`}
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-medium flex items-center justify-between text-white">
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
