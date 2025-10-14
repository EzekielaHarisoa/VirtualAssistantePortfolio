import { Title } from "./Title"; 
import ImgSearch from "../assets/skills/ImgSearch.png"
import ImgMS from "../assets/skills/ImgMS.png"
import ImgSMM from "../assets/skills/ImgSMM.png"
import ImgMail from "../assets/skills/ImgMail.png"
import ImgEdit from "../assets/skills/ImgEdit.png"
import ImgCanva from "../assets/skills/ImgCanva.png"
import ImgService from "../assets/skills/ImgService.png"
import ImgSchedul from "../assets/skills/ImgSchedul.png"
import ImgCommunication from "../assets/skills/ImgCommunication.png"

const skillsTecnical=[
    {id:1, name:"Seach in internet",description:"" ,image:ImgSearch},
    {id:2, name:"Microsoft office tools",description:"Microsoft Word, Excel, PowerPoint" , image:ImgMS},
    {id:3, name:"Social media management",description:"Content creation , Scheduling post" , image:ImgSMM},
    {id:4, name:"Email manager", description:"Gmail, Outlook - Filtering, organizing, responding" ,image:ImgMail},
    {id:5, name:"Writting & Editing",description:"professional email, reports, blogs posts" , image:ImgEdit},
    {id:6, name:"Design basics", description:" using Canva for visual and brandling" ,image:ImgCanva},
    {id:7, name:"Customer servie",description:"Chat or email support " , image:ImgService},
    {id:8, name:"Scheduling & planning", description:"Google Calendar, Trello, Notion" ,image:ImgSchedul},
    {id:9, name:"Communication tools", description:"Zoom, whatsapp , Slack , Google meet" ,image:ImgCommunication},

]
const skillsCore=[
    {id:1, content:"Exelent written and verbal communication" ,},
    {id:2, content:"Strong organization in multitasking" },
    {id:3, content:"Confidentiality and professionalism"},
    {id:4, content:"Time management and ability to meet deadlines" },
    {id:5, content:"Self-motivated and able to work independantly" },
    {id:6, content:"Quick-motivated and able to work independantly"},

]
export function Skills(){
    return(
        <div className="flex flex-col ">
            <Title titre="Skills"/>
            <div>
                <h2 className="text-2xl text-white text-font-semibold mb-8 border-l-4 pl-4 border-pink-500 ">Technical Skills</h2>
                <div className="flex items-center justify-center md:mt-2 ">
                <div className=" md:grid md:grid-cols-3  flex flex-col gap-4 justify-center  ">
                    {skillsTecnical.map((skil)=>(
                        <div className="flex flex-row-reverse bg-base-200  shadow-xl w-fill  rounded-xl p-2 h-fill gap-4 justify-center  items-center ">
                           
                            <div className="text-gray-500 ">
                                <h2 className=" text-md font-semibold mb-1 md:text-left">{skil.name}</h2>
                                <p className="text-sm ">{skil.description}</p>
                            </div>
                           
                            <div className="w-10 h-10 p-2 rounded-full flex items-center justify-center ">
                                   <img className="object-cover w-ull h-full runded-full" src={skil.image} alt="" />

                            </div>
                        </div>
                    ))}
                </div>
               
            </div>
            </div>
            <div className="mt-12 " >
                 <h2 className="text-2xl text-font-semibold text-white mb-8 border-l-4 pl-4 border-pink-500 ">Core skills</h2>
                    <div className=" md:grid md:grid-cols-3  flex flex-col gap-4 justify-center  ">
                    {skillsCore.map((skil)=>(
                        <div className="flex flex-row-reverse bg-base-200  border-l-4 border-white  shadow-xl w-fill h-16  rounded-xl p-2 h-fill gap-4 justify-center  items-center ">
                           
                            <div className="text-gray-500 ">
                                <p className="text-bold  items-start text-sm text-center ">{skil.content}</p>
                            </div>
                           
      
                        </div>
                    ))}
                </div>



            </div>
            <div></div>
        </div>
    )
}