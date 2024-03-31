import {Button, ButtonGroup} from "@nextui-org/button";

export function Project({nombre, parrafo, imagen}){

    return (
        <div className="mx-auto block lg:flex mt-20 gap-10 ">
            <div className="mx-auto me-0 px-10 lg:px-0 sm:max-w-full lg:max-w-[600px] xl:max-w-[725px] ">
                <img src={imagen} alt={nombre} />
            </div>
            <div className="mx-auto px-10 lg:px-0 lg:ms-0 mt-[4.5rem] text-center lg:text-left max-w-full lg:max-w-[470px] ">
                <h3 className=" text-[1.4rem]  md:text-[1.6rem] lg:text-[1.7rem] font-bold tracking-wide">{nombre}</h3>
                <p className=" text-center lg:text-left text-[0.9rem]  md:text-[1.1rem] mt-8 text-neutral-600 leading-8 ">{parrafo}</p>
                <Button data-hover="false" className='translate-y-1 hover:translate-y-0 rounded-md mt-10 h-14  w-48 bg-violet-600 tracking-wider text-base  font-bold text-white'>CASE STUDY</Button>
            </div>
            
        </div>
    )
}