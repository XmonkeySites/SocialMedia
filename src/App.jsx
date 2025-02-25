import "./App.css";
import { Scards } from "./components/cards/Scards";
import { Faq } from "./components/faq/Faq";
import { Hero } from "./components/hero/Hero";
import { Mentors } from "./components/mentors/Mentors";
import { Plan } from "./components/plans/Plans";
import { Who } from "./components/Who/Who";
import { Why } from "./components/why/why";
import { Edu } from "./components/edu/Edu";
import { Footer } from "./components/footer/Footer";
import { Clock } from "./components/clock/Clock";

function App() {
  return (
    <>
      <Hero />
      <Scards />
      <Who />
      <Why />
      <Plan />
      <Mentors />
      <Faq />
      <Edu />
      <Clock />
      <Footer />
    </>
  );
}

export default App;
