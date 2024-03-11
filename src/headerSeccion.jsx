export function HeaderSeccion({nombre, parrafo}){

    return (
    <div>
        <h2 className=" text-[2.5rem] font-bold tracking-wide">{nombre}</h2>
            <div className="mt-5 w-[2rem] h-[5px] bg-violet-700 mx-auto rounded-xl"></div>
            <div className="mx-auto w-[850px]">
                <p className="mt-5 text-neutral-600 text-xl">{parrafo}</p>
            </div>
    </div>
        
    )
}