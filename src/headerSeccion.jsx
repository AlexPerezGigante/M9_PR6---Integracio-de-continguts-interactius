export function HeaderSeccion({nombre, parrafo}){

    return (
    <div>
        <h2 className=" text-[2rem] md:text-[2.5rem] font-bold tracking-widest">{nombre}</h2>
            <div className="mt-5 w-[2rem] h-[5px] bg-violet-700 mx-auto rounded-xl"></div>
            <div className="mx-auto max-w-[850px]">
                <p className="mt-5 px-3 text-neutral-600 text-base sm:text-lg lg:text-xl">{parrafo}</p>
            </div>
    </div>
        
    )
}