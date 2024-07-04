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
      <Navbar/>
      <Hero/>
      <MySkills/>
      <MyExperience/>
      <About/>
      <Projects/>
      <Testomonials/>
      <Contact/>
      <Footer/>
    </main>
  );
}
