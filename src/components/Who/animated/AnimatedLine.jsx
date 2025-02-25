import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const AnimatedLine = () => {
  const [visible, setVisible] = useState(true);
  const [showLine, setShowLine] = useState(false); // Novo estado para controle do atraso

  useEffect(() => {
    // Define um atraso antes de exibir a linha
    const delay = setTimeout(() => setShowLine(true), 1000); // Ajuste o tempo em ms (1000ms = 1s)

    // Define um loop para reiniciar a animação
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => setVisible(true), 500);
    }, 2000);

    return () => {
      clearTimeout(delay);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-[3rem] translate-y-[-1.2rem]">
      {showLine && visible && (
        <motion.svg
          height="50"
          viewBox="0 0 200 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5 }} // Aumentei a duração para acompanhar a segunda linha
          className="w-full md:w-[27rem]"
        >
          <motion.path
            d="M0 0 Q100 0 350 0"
            stroke="#0f0f0f"
            strokeWidth="5"
            fill="transparent"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5 }}
          />
        </motion.svg>
      )}
    </div>
  );
};

export default AnimatedLine;
