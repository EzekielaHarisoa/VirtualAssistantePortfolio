import { Download } from "lucide-react"
import myImg from "../assets/nounoun.png"
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl mx-auto px-6 py-12 mb-5 mt-20
                        rounded-xl
                        ">
    
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-800 leading-tight">
          Hello! <br />
          I'm <span className="font-pacifico text-bold text-pink-500">Alexandra</span>
        </h1>

        <p className="my-5 text-gray-800/95 text-base md:text-lg max-w-md">
          I'am a virtual assistante <br />
          to help you to achive your to make your job easy
        </p>

        <div className="flex flex-wrap gap-4 mt-2 justify-center md:justify-start">
          <a
            href="https://drive.google.com/file/d/1h2JXq_AZkFejxTNPUqW4eSwIGvHN4ThC/view?usp=drivesdk"
            className="btn btn-outline hover:border-pink-500  text-pink-500 hover:bg-pink-500 hover:text-pink-300 transition-all duration-200"
          >
            <Download className="w-5 h-5 mr-2" />
            Download CV
          </a>

          <a
            href="https://wa.me/261322063222"
            className="btn bg-pink-500 border-pink-300 hover:bg-pink-500 hover:text-pink-300 text-pink-300 transition-all duration-200"
          >
            <FaWhatsapp className="w-5 h-5 mr-2" />
            
            Contact Me
          </a>
        </div>
      </div>

      
      <div className="mb-10 md:mb-0 md:ml-20">
        <img
          src={myImg}
          alt="Alexandra portrait"
          className="w-72 md:w-96 object-cover border-8 border-pink-300 shadow-xl"
          style={{
            borderRadius: "70% 30% 30% 70% / 60% 40% 60% 40%",
          }}
        />
      </div>
    </section>
  )
}
