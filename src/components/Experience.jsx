
import { Title } from "./Title";


export function Experience(){
   return (
    <div className="flex flex-col items-center justify-center  py-16 gap-4">
      <Title titre={"Experience"}/>
      <div className="relative w-full max-w-4xl bg-pink-200  mt-10  rounded-xl pt-6 px-4">
        {/* Ligne verticale */}
        <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-pink-500 hidden md:block"></div>

        {/* STEP 1 */}
        <div className="flex flex-col md:flex-row items-center md:justify-between mb-16 relative">
          <div className="order-2 md:order-1 md:w-1/2 text-center md:text-right px-4">
            <h3 className="text-2xl font-bold text-pink-500">Administrative Assistant</h3>
            <p className=" opacity-80 text-sm text-white mr-5">
              Planing organisation,document management ,
              and project follow-up to ensure activities run smooth    
                          </p>
          </div>

          <div className="order-1 md:order-2 md:w-1/2 flex justify-center md:justify-start">
            <div className="relative">
              <div className=" bg-pink-500 rotate-45 w-24 h-24 rounded-lg"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-base-100 w-20 h-20 rotate-45 rounded-lg flex items-center justify-center shadow-md">
                  <span className="font-bold text-xl text-pink-500">2022</span>
                </div>
              </div>
              <div className="absolute right-[-1.5rem] top-1/2 -translate-y-1/2 hidden md:block">
                <div className="w-8 h-1 bg-pink-500"> </div>
                <div className="w-3 h-3 bg-pink-500 rounded-full mt-[-2px]"></div>
              </div>
            </div>
          </div>
        </div>

        {/* STEP 2 */}
        <div className="flex flex-col md:flex-row items-center md:justify-between  mb-16  relative">
          <div className="order-2 md:order-2 md:w-1/2 text-center md:text-left px-4">
            <h3 className="text-2xl font-bold text-pink-500">AI Data Annotation</h3>
            <p className="  text-white text-sm text-bold md:ml-5">
             
               Annotating and organizing data for training and improving artificial intelligence models, with precision and quality  

        </p>
          </div>

          <div className="order-1 md:order-1 md:w-1/2 flex justify-center md:justify-end">
            <div className="relative">
              <div className="bg-pink-500 rotate-45 w-24 h-24 rounded-lg"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-base-100 w-20 h-20 rotate-45 rounded-lg flex items-center justify-center shadow-md">
                  <span className="font-bold text-xl text-pink-500">2023</span>
                </div>
              </div>
              <div className="absolute left-[-1.5rem] top-1/2 -translate-y-1/2 hidden md:block">
                <div className="w-8 h-1 bg-pink-500"></div>
                <div className="w-3 h-3 bg-pink-500 rounded-full mt-[-2px]"></div>
              </div>
            </div>
          </div>
        </div>


        {/* STEP 3 */}
        <div className="flex flex-col md:flex-row items-center md:justify-between mb-16 relative">
          <div className="order-2 md:order-1 md:w-1/2 text-center md:text-right px-4">
            <h3 className="text-2xl font-bold text-pink-500"> Social Media Management</h3>
            <p className=" opacity-80 text-sm md:mr-5 text-white">
             Managging and animating, content creation, community manager 
            </p>
          </div>

          <div className="order-1 md:order-2 md:w-1/2 flex justify-center md:justify-start">
            <div className="relative">
              <div className=" bg-pink-500 rotate-45 w-24 h-24 rounded-lg"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-base-100 w-20 h-20 rotate-45 rounded-lg flex items-center justify-center shadow-md">
                  <span className="font-bold text-xl text-pink-500">2024</span>
                </div>
              </div>
              <div className="absolute right-[-1.5rem] top-1/2 -translate-y-1/2 hidden md:block">
                <div className="w-8 h-1 bg-pink-500"> </div>
                <div className="w-3 h-3 bg-pink-500 rounded-full mt-[-2px]"></div>
              </div>
            </div>
          </div>
        </div>
       {/* STEP 4 */}
        <div className="flex flex-col md:flex-row items-center md:justify-between  mb-16  relative">
          <div className="order-2 md:order-2 md:w-1/2 text-center md:text-left px-4">
            <h3 className="text-2xl font-bold text-pink-500">Virtual Assistant</h3>
            <p className="  text-white md:ml-5 text-sm text-bold">
               Remote support with emails, shceduling, coordination, and operational tasks   
                         </p>
          </div>

          <div className="order-1 md:order-1 md:w-1/2 flex justify-center md:justify-end">
            <div className="relative">
              <div className="bg-pink-500 rotate-45 w-24 h-24 rounded-lg"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-base-100 w-20 h-20 rotate-45 rounded-lg flex items-center justify-center shadow-md">
                  <span className="font-bold text-xl text-pink-500">2025</span>
                </div>
              </div>
              <div className="absolute left-[-1.5rem] top-1/2 -translate-y-1/2 hidden md:block">
                <div className="w-8 h-1 bg-pink-500"></div>
                <div className="w-3 h-3 bg-pink-500 rounded-full mt-[-2px]"></div>
              </div>
            </div>
          </div>
        </div>



      </div>
    </div>
  );
}