import { useState } from "react";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
  

  return (
    
      <main className="px-6 font-quicksand bg-gray-900 min-h-screen transition-colors duration-500">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
        
        <footer className="mt-0 pt-32 p-2 font-quicksand text-white bg-linear-to-b from-gray-900 to-gray-800">
        <h1 className=" text-7xl">Thanks</h1>
      </footer>
      </main>
  );
}

export default App;