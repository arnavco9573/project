import "./App.css";
import Accordian from "./components/Accordian";
import BoxSec from "./components/BoxSec";
import CardHero from "./components/CardHero";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Join from "./components/Join";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <CardHero />
      <BoxSec />
      <Testimonials />
      <Accordian/>
      <Join/>
      <Footer/>
    </div>
  );
}

export default App;
