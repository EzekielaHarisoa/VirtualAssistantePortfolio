import Navbar from "./components/Navbar.jsx"
import Home from "./components/Home.jsx"
import About from "./components/About.jsx"
 import Skills from "./components/Skills.jsx"
import Experience from "./components/Experience.jsx"
 import Contact from "./components/Contact.jsx"

export default function App() {
  return (
    <div>
      <div className="bg-gradient-to-r from-pink-300/80 to-pink-400/70 ">
         
        <div className="p-5 md:px-[15%] bg-gradient-to-r  from-pink-300/80 to-pink-300/70" id="home">
          <Navbar />
          <Home  />
          
        </div>
        <div id="about" className=" from-pink-200/80 to-pink-300/70">
          <About />
        </div>
        <div id="skills" className="p-4 md:px-[15%] bg-gradient-to-t from-pink-300/80 to-pink-300/70">
          <Skills />
        </div>
         <div id="experience" className="p-4 bg-gradient-to-b from-pink-300/80 to-pink-300/70">
          <Experience />
        </div>
        <div id="contact">
           <Contact />

        </div>   
      </div>
    </div>
  )
}
