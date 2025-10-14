import { Download,Mail } from "lucide-react"
import myImg from "../assets/nounoun.png"
export function Home(){
    return(
        <div className="flex flex-col-reverse items-center justify-center my-1 md:flex-row md:my-320 md:mt-10">
            <div className="flex flex-col">
                <h1 className="mt-6 text-3xl text-white  font-semibold text-center md:text-left md:mt-0 md:text-5xl">Hello! <br />I'm   <span className="text-lora text-pink-500">Alexandra</span> </h1>
                <p className="my-4 text-center text-white text-md md:text-left"> I'am a virtual assistante <br />
                  to help you to achive your to make your job easy

                </p>
                <div className="flex flex-row gap-4 " >
                    <a className="hover:bg-pink-500 btn hover:border-pink-500 border-pink-500 text-pink-500 btn-outline md:w-fit " href="#">
                        <Download className="w-5 h-5"/>
                      Download cv
                    </a>
                    <a className="btn bg-pink-500 border-pink-500 hover:bg-pink-400 hover:border-pink-500 text-white md:w-fit" href="#">
                        <Mail className="w-5 h-5"/>
                        Contact-me

                    </a>
                </div>

            </div>
            <div className="md:ml-60 " >
                <img src={myImg} alt="" className="object-cover  border-8 shadow-xl border-pink-500 w-96 h-auto " style={{borderRadius:"70% 30% 30% 70% / 60% 40% 60% 40%"}}/>
            </div>
        </div>
    )
}