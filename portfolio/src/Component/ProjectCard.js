

const ProjectCard = () =>{

    return(
        <div className="border border-[#1E2D3D] h-[270px] w-[1400px] mb-[50px] flex bg-[#011221]">
            <div className="h-full  w-[400px] flex justify-center items-center border-[3px] border-[#1E2D3D]">
                <img className="h-[180px] w-[370px]" src="./img/Screenshot (56).png" alt=""/>
            </div>
            <div className="h-full w-[1000px] text-center flex flex-col justify-center items-center">
                <p className="ProjectTitle text-[22px] text-[#4D5BCE] m-[10px]">PortFolio Website</p>
                <p className="description text-[#607B96] text-[17px] text-justify w-[900px] ">This portfolio website project is developed using Reactjs and serves as an online platform to showcase personal information, technical knowledge and skills. The website will feature an about me section that highlights the individual's background, education and work experience. A section dedicated to technical knowledge will showcase the individual's proficiency in various technologies and programming languages. The skills section will provide a comprehensive overview of the individual's expertise in various fields such as project management, teamwork and leadership. The website will be user-friendly, responsive, and aesthetically pleasing, making it easy for potential employers or clients to view and understand the individual's qualifications.</p>
            </div>
        </div>
    )
} 

export default ProjectCard