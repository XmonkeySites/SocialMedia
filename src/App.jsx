import "./App.css";
import { Scards } from "./components/cards/Scards";
import { Faq } from "./components/faq/Faq";
import { Hero } from "./components/hero/Hero";
import { Plan } from "./components/plans/Plans";
import { Who } from "./components/Who/Who";
import { Why } from "./components/why/why";
import { Footer } from "./components/footer/Footer";
import { Aboutme } from "./components/aboutme/Aboutme";
import { Local } from "./components/local/Local";
import FeaturesSection from "./components/sectt/FeaturesSection";

function App() {
  return (
    <>
      <Hero/>
      <Scards />
      <Who />
      <Why />
      <Plan />
      <Local/>
      <FeaturesSection/>
     <Aboutme/>
      <Faq />
      <Footer />
    </>
  );
}

export default App;
