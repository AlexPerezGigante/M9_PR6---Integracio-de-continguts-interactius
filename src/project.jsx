import {Button, ButtonGroup} from "@nextui-org/button";

export function Project({nombre, parrafo, imagen}){

    return (
        <div className="flex mt-20 gap-10 mx-auto">
            <div className=" w-[725px] ms-[20rem]">
                <img src={imagen} alt={nombre} />
            </div>
            <div className="mt-20 text-left w-[470px] ">
                <h3 className=" text-2xl font-bold tracking-wide">{nombre}</h3>
                <p className="text-left text-[1.1rem] mt-8 text-neutral-600 leading-8 ">{parrafo}</p>
                <Button className='translate-y-1 hover:translate-y-0 rounded-md mt-10 h-14  w-48 bg-violet-600 tracking-wider text-base  font-bold text-white'>CASE STUDY</Button>
            </div>
            
        </div>
    )
}