import { HeaderSeccion } from "./headerSeccion"
import { projects } from "./projects"
import { Project } from "./project"

function Projects(){
    return (
        <>
        <div className="mx-auto text-center mt-20">
            <HeaderSeccion nombre={'PROJECTS'} parrafo={'Here you will find some of the personal and clients projects that I created with each project containing its own case study'}></HeaderSeccion>
            {
                        projects.map((element, index) =>{
                            return(
                                <Project key = {index} nombre={element.nombre} parrafo={element.parrafo} imagen={element.imagen} />
                            )
                        })
                    }

        </div> 
        
        </>
    )
}

export default Projects