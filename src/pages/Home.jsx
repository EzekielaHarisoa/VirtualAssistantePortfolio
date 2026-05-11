import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Skills from "../components/Skills";
import Testimonials from "../components/Testimonials";
import Projects from "../components/Projects";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <div className="bg-[#fff8f8] overflow-hidden">
      <Navbar />
      <Hero />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Services />
        <About />
        <Skills />
        <Testimonials />
        <Projects />
      </div>

      <CTA />
      <Footer />
    </div>
  );
}