import ProjectCard from "./ProjectCard"



const Project = () =>{
    return(
        <div className="h-full w-full mb-[100px]">
            <p className="text-[32px] text-[#E5E9F0] text-center mb-[40px]">Projects</p>
            <div className="h-full w-full flex items-center flex-col ">
                <ProjectCard></ProjectCard>
                <ProjectCard></ProjectCard>
                <ProjectCard></ProjectCard>
            </div>
        </div>
)

}

export default Project