import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MyExperience from "@/components/MyExperience";
import MySkills from "@/components/MySkills";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Testomonials from "@/components/Testomonials";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section id="hero" className="mx-12 my-2 px-5 py-2">
        <Hero />
      </section>
      <section id="skills" className="mx-12 my-10 px-5 py-2">
        <MySkills />
      </section>

      <section className="bg-black text-white">
        <MyExperience />
      </section>
      <section id="about" className="mx-12 my-10 px-5 py-2">

      <About />
      </section>
      <Projects />
      <Testomonials />
      <Contact />
      <Footer />
    </main>
  );
}
