const IntrestCard = () =>{
    return (
        <div className="h-[300px] w-[400px] flex flex-col border-[3px] border-[#1E2D3D] bg-[#011221] justify-center items-center rounded-[15px]">
            <div  className="h-[120px] w-[400px]  ">
                <img className="object-cover rounded-[15px] h-full w-full" src="./img/1.jpg" alt=""/>
            </div>
            <div className="title h-[60px] w-[100%]  text-[22px] text-[#4D5BCE] flex items-center justify-center">
                <p>C++</p>
            </div>
            <div className="description h-[120px] w-[100%] text-center text-[#607B96]">
                <p>I have been learning C++ from last 3 years and i am also studing DSA and consequtevely practising it on various platforms like leetcode , Geeks For Geeks , CodeChef. I am Solved more than 325 question on DSA on going continue.</p>
            </div>
        </div>
    )
}
export default IntrestCard