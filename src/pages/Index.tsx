import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Perspectives from "@/components/Perspectives";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ProgressBar from "@/components/ProgressBar";

const Index = () => {
  return (
    <>
      <ProgressBar />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Perspectives />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Index;
