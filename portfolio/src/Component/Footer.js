
const Footer = () =>{
    return(
        <div className=" w-full overflow-hidden fixed bg-[#011627] bottom-0 footer  h-[50.19px] border border-[#1E2D3D] flex justify-between items-center text-[#607B96] text-[18px]">
            
                <div className="left-side flex items-center justify-center h-full w-[18%] border-r border-[#1E2D3D]">
                    <div className="find-me flex items-center justify-center border-r border-[#1E2D3D] h-full w-[80%]">
                        find me in:
                    </div>
                    <div className="logos flex h-full w-[100%]">
                        <div className="linkedin h-full w-full border-r border-[#1E2D3D] flex justify-center items-center">
                           <a href="https://www.linkedin.com/in/vandan-hood/" rel="noreferrer" target="_blank" ><img class="h-[25px] w-[25px]"src=".\img\icons8-linkedin-2-50.png" alt=""/></a>
                        </div>
                        <div className="twitter h-full w-full flex justify-center items-center ">
                            <a href="https://twitter.com/VandanHood" rel="noreferrer" target="_blank" ><img class="h-[25px] w-[25px]" src=".\img\icons8-twitter-50.png" alt=""/></a>
                        </div>
                    </div>
                </div>
                <div className="right-side h-full border-l border-[#1E2D3D] w-[12%]  flex justify-center items-center">
                    <a href="https://github.com/vandan2410" rel="noreferrer" target="_blank" >@vandan2410</a>
                    <img src=".\img\icons8-github-30.png" alt=""/>
                </div>
            
        </div>
    )
}
export default Footer