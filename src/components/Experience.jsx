import { Title } from "./Title";
// const expertise=[
//     {id:1,name:"Administrative Assistant -3+ years", description:"Planing organisation,document management , and project follow-up to ensure activities run smooth", image:ImgAdmin}
//    ,{id:2,name:"Virtual Assistant  ", description:"Remote support with emails, shceduling, coordination, and operational tasks ", image:ImgVA}
//    ,{id:3,name:"Social Media Management ", description:"Managging and animating, content creation, community manager ", image:ImSO}
//    ,{id:4,name:"AI Data Annotation  ", description:"Annotating and organizing data for training and improving artificial intelligence models, with precision and quality", image:ImgAI}
//    ] 
export function Experience(){
    return(
<div>
 <Title titre="Experience"/>
 <div className="" >
    <ul class="timeline timeline-snap-icon max-md:timeline-compact text-gray-500 timeline-pink-500 timeline-vertical">
      <li >
    
    <div class="timeline-start mb-10 md:text-end bg-base-200 md:mr-5 md:border-r-4 border-white rounded-lg p-4">
      <time class="font-mono italic">2020</time>
      <div class="text-lg font-black">Administrative Assistant</div>
      Planing organisation,document management ,
       and project follow-up to ensure activities run smooth
    </div>
    <hr />
  </li>
  <li>
    <hr />
   
    <div class="timeline-end md:mb-10 bg-base-200 md:ml-5 md:border-l-4 border-white rounded-lg p-4">
      <time class="font-mono italic">2023</time>
      <div class="text-lg font-black">AI Data Annotation</div>
Annotating and organizing data for training and improving artificial intelligence models, with precision and quality    </div>
    <hr />
  </li>
  <li>
    <hr />
   
    <div class="timeline-start mb-10 md:text-end bg-base-200 md:mr-5 md:border-r-4 border-white rounded-lg p-4">
      <time class="font-mono italic">2024</time>
      <div class="text-lg font-black">Social Media Management</div>
     Managging and animating, content creation, community manager 
    </div>
    <hr />
  </li>
  <li>
    <hr />
 
    <div class="timeline-end  md:mb-10 bg-base-200 md:ml-5 md:border-l-4 border-white rounded-lg p-4">
      <time class="font-mono italic">2025</time>
      <div class="text-lg  font-extrabold ">Virtual Assistant</div>
Remote support with emails, shceduling, coordination, and operational tasks    </div>
    <hr />
  </li>
 
</ul>
            </div>
        </div>
    )
}