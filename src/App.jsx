import { Plus } from "lucide-react"
import { Navbar } from "./components/Navbar"
import { Home } from "./components/Home"
import { About } from "./components/About"
import { Experience } from "./components/Experience"
function App() {


  return (
      <div className="bg-gradient-to-b from-pink-300  via-pink-5000 to-pink-400 text-white">
      <div className="p-5 md:px-[15%]">
        <Navbar/>
        <Home/>
      </div>
      <About/>
      <div className="p-4 md:px-[15%]">
        <Experience/>
      </div>
      </div>


  )
}

export default App
