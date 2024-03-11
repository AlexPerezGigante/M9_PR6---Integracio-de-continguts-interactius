function AboutMe(){
    return (
        <>
        <div className="mx-auto text-center mt-20">
            <h2 className=" text-[2.5rem] font-bold tracking-wide">ABOUT ME</h2>
            <div className="mt-5 w-[2rem] h-[5px] bg-violet-700 mx-auto rounded-xl"></div>
            <div className="mx-auto w-[850px]">
                <p className="mt-5 text-neutral-600 text-xl">Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
            </div>
            <div className="flex mx-auto gap-12 mt-10">
                <div className="">
                    <h3>Get to know me!</h3>
                </div>
                <div className="">
                    <h3 className=" text-left">My Skills</h3>    
                </div>    
            </div>            

        </div> 
        
        </>
    )
}

export default AboutMe