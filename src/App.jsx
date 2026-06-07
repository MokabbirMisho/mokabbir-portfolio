import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-200">
      <Sidebar isDark={isDark} setIsDark={setIsDark} />

      <main className="lg:ml-72">
        <Hero />
        <Projects />
        <Skills />
        <Services />
        <Contact />
      </main>
    </div>
  );
}

export default App;
