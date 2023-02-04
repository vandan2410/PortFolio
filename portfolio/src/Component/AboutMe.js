import './IntrestCard';
import IntrestCard from './IntrestCard';


const AboutMe = () =>{
    return(
        <div className="h-[100vh] w-[100%] text-[#607B96] flex flex-col items-center justify-center ">
            <div className="bio h-[100%] w-[80%] flex items-center justify-center text-justify flex-col">
                <p className="text-[32px] text-[#E5E9F0] ">Bio</p>
                <p className="pt-[12px] text-[18px]">I am a third-year student in the Department of Information Technology at Vishwakarma Institute of Information Technology. I have a strong interest in competitive coding and web development, with a focus on constantly improving my skills and knowledge. With a passion for technology, I have already solved over 300 data structure and algorithms (DSA) questions and have a solid understanding of HTML, CSS, JavaScript, and ReactJS.

                I regularly participates in coding competitions and hackathons, using these opportunities to apply my skills and test my limits. I am a quick learner and is always on the lookout for new technologies and programming languages to add to my toolkit.

                With a goal to make a positive impact in the tech industry, I am dedicated to my studies and  determined to build a successful career in the field. I have strong work ethic, technical expertise, and passion for technology make me an asset to any team and an up-and-coming talent in the industry.
                </p>
            </div>
            <div className="intrest h-[100%] flex w-[100%]">
                <IntrestCard></IntrestCard>
                <IntrestCard></IntrestCard>
                <IntrestCard></IntrestCard>
            </div>
            
        </div>
    )

}
export default AboutMe