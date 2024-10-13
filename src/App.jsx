import About from "./components/About/About";
import ServicesCards from "./components/Services/ServicesCards";
import Cta from "./components/CTA/CTA";
import Contact from "./components/Contact/Contact";
import CookieBar from "./components/CookieBar/CookieBar";
import Footer from "./components/Footer.jsx/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import WhyChooseus from "./components/WhyChooseUS/WhyChooseus";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <ServicesCards />
      <WhyChooseus />
      <Cta />
      <Contact />
      <Footer />
      <CookieBar />
    </>
  );
}

export default App;
