import {Button, ButtonGroup} from "@nextui-org/button";
import { Skill } from "./skill";
import { skills } from "./skills";
import { HeaderSeccion } from "./headerSeccion";

function AboutMe(){
    return (
        <>
        <div className="mx-auto text-center pt-20 pb-40 bg-slate-50">
            <HeaderSeccion nombre={'ABOUT ME'} parrafo={'Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology'}></HeaderSeccion>
            <div className="mx-auto block lg:flex lg:justify-center gap-20 md:gap-32 mt-20 lg:ps-20 xl:ps-40 lg:ms-0">
                <div className=" max-w-[800px]">
                    <div className=" justify-items-start">
                    <h3 className="text-[1.2rem] md:text-[1.6rem]  font-bold  ms-3 md:ms-2 text-left tracking-wide w-auto text-black">Get to know me!</h3>
                    </div>
                    
                    <div className="text-left text-[0.95rem] md:text-[1.1rem] justify-center  max-w-[570px] md:ms-2  mt-10 text-neutral-600 leading-8">
                        <p className="mb-4">I'm a <strong>Frontend Focused Web Developer </strong> 
                             building and managing the Front-end of Websites 
                            and Web Applications that leads to the success of the overall 
                            product. Check out some of my work in the <strong>Projects</strong> section.</p>
                        <p className="mb-4">I also like sharing content related to the stuff that I have 
                            learned over the years in <strong>Web Development</strong> so it can help other
                             people of the Dev Community. Feel free to Connect or Follow me
                              on my <a href="#" className=" text-violet-700 font-bold underline">Linkedin</a> and <a href="#"  className=" text-violet-700 font-bold underline">Instagram</a> where I post useful content related
                               to Web Development and Programming</p>
                        <p>
                        I'm open to <strong>Job</strong> opportunities where I can contribute,
                         learn and grow. If you have a good opportunity that matches
                          my skills and experience then don't hesitate to <strong>contact</strong> me.
                        </p>

                        <Button className='translate-y-1 hover:translate-y-0 rounded-md mt-10 h-12 md:h-14 w-40 md:w-44 bg-violet-600 tracking-wider text-sm md:text-base  font-bold text-white'>CONTACT</Button>
                    </div>
                </div>
                <div className=" max-w-[800px]">
                    <h3 className="text-[1.2rem] md:text-[1.6rem] font-bold text-left ms-3 md:ms-2 tracking-wide me-20 lg:mt-0 mt-10 text-black">My Skills</h3>    
                    <div className="flex flex-wrap max-w-[600px] mt-8 me-20">
                    {
                        skills.map((element, index) =>{
                            return(
                                <Skill key = {index} nombre={element.nombre} />
                            )
                        })
                    }
                    </div>
                    
                </div>    
            </div>            

        </div> 
        
        </>
    )
}

export default AboutMe