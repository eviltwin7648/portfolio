import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MyExperience from "@/components/MyExperience";
import MySkills from "@/components/MySkills";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";


export default function Home() {
  return (
    <main>
      <Navbar />
      <section id="hero" className="md:mx-12 md:my-10 md:px-5 md:py-2 m-5">
        <Hero />
      </section>
      <section id="skills" className="md:mx-12 md:my-10 md:px-5 md:py-2 m-5">
        <MySkills />
      </section>

      <section className="bg-black text-white">
        <MyExperience />
      </section>
      <section id="about" className="md:mx-12 md:my-10 md:px-5 md:py-2 m-5">
        <About />
      </section>
      <section id="projects" className="bg-black text-white">
        <Projects />
      </section>

      <section id="contact" className="md:mx-12 md:my-10 md:px-5 md:py-2 m-5">
      <Contact />

      </section>
      <Footer  />
    </main>
  );
}
