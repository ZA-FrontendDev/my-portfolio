import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import Experience from "./components/Experience";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0a0a0f] overflow-hidden">
      <Navbar />
      <HeroSection />
      <div className="container mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 py-4 w-full">
        <AboutSection />
        <Experience />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
