import { Plus } from "lucide-react"
import { Navbar } from "./components/Navbar"
import { Home } from "./components/Home"
import { About } from "./components/About"
import { Skills } from "./components/Skills"
import { Experience } from "./components/Experience"
import { Contact } from "./components/Contact"
function App() {


  return (
      <div className="bg-pink-300">
      <div className="p-5 md:px-[15%]">
        <Navbar/>
        <Home/>
      </div>
      <About/>
      <div className="p-4 md:px-[15%]">
        <Skills/>
      </div>
      <div className="p-4 md:px-[15%] ">
         <Experience/>
      </div>
         <Contact/>
    
      </div>


  )
}

export default App
