import './IntrestCard';
import IntrestCard from './IntrestCard';

const Skills = () =>
{
    return (
        <div className="h-[60%] w-full mb-[150px]">
            <p className="text-[32px] text-[#E5E9F0] text-center mb-[40px]">Skills</p>
            <div className="flex justify-around">
                <IntrestCard></IntrestCard>
                <IntrestCard></IntrestCard>
                <IntrestCard></IntrestCard>
            </div>
        </div>
    )
}

export default Skills