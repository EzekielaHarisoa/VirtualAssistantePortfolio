import { Download,Mail } from "lucide-react"
import myImg from "../assets/mimi.jpeg"
export function Home(){
    return(
        <div className="flex flex-col-reverse items-center justify-center my-1 md:flex-row md:my-320 md:mt-10">
            <div className="flex flex-col">
                <h1 className="mt-6 text-3xl  font-semibold text-center md:text-left md:mt-0 md:text-5xl">Hello! <br />I'm   <span className="text-secondary">Alexandra</span> </h1>
                <p className="my-4 text-center text-md md:text-left"> I'am a virtual assistante <br />
                  to help you to achive your to make your job easy

                </p>
                <div className="flex flex-row gap-4 " >
                    <a className="btn-secondary btn  btn-outline md:w-fit " href="#">
                        <Download className="w-5 h-5"/>
                      Download cv
                    </a>
                    <a className="btn btn-secondary md:w-fit" href="#">
                        <Mail className="w-5 h-5"/>
                        Contact-me

                    </a>
                </div>

            </div>
            <div className="md:ml-60">
                <img src={myImg} alt="" className="object-cover border-8 shadow-xl border-secondary w-96 h-96 " style={{borderRadius:"10% 30% 50% 50% /10% 60% 50% 80% "}}/>
            </div>
        </div>
    )
}