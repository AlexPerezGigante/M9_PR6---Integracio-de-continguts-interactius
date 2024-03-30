import { HeaderSeccion } from "./headerSeccion"
import { proyectos } from "./proyectos"
import { Project } from "./project"

function Projects(){
    return (
        <>
        <div className="mx-auto text-center mt-20">
            <HeaderSeccion nombre={'PROJECTS'} parrafo={'Here you will find some of the personal and clients projects that I created with each project containing its own case study'}></HeaderSeccion>
            <div className="mx-auto">
            {
                proyectos.map((element, index) =>{
                    return(
                        <Project key = {index} nombre={element.nombre} parrafo={element.parrafo} imagen={element.imagen} />
                    )
                })
            }
            </div>
            

        </div> 
        
        </>
    )
}

export default Projects