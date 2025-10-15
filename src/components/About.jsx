import { Laptop, LetterText, Rocket } from "lucide-react";
import { Title } from "./Title";
import myImg from "../assets/mimi.jpeg"

const aboutSection=[
    {id:1, title:"Assistante Virtual",description:"I 'm a virtual assistante ", icon:<Laptop className="scale-150 text-pink-500"/>},
    {id:1, title:"Translator",description:"I 'm a translator with bilangue (French and Engish) ", icon:<LetterText className="scale-150 text-pink-500"/>},
    {id:1, title:"Writer", description:"I ,m a writer (French and Engish)",icon:<Rocket className="scale-150 text-pink-500"/>}

]

export function About(){
    return(
        <div className="p-6 mt-0   bg-pink-200  md:mb-32 text-white ">
            <Title titre="About"/>
            <div className="flex items-center justify-center md:h-screen">
                <div className="hidden md:block">
                    <img src={myImg} className="w-97 h-96 object-cover boreder rounded-xl"/>
                </div>
                <div className="ml-4 space-y-4">
                    {
                        aboutSection.map((sec)=>(
                            <div className="flex flex-col items-center p-5 shadow-white-l rounded-xl md:flex-row bg-pink-300 md:w-96">
                                <div className="mb-2  mb:m-0">{sec.icon}</div>
                                <div className=" text-center md:ml-4 md:text-left">
                                    <h2 className="md-1 text-xl font-bold">{sec.title}</h2>
                                    <p className=" text-bold text-sm">{sec.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}