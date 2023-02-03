

const Navbar=()=>{
    return(
        <div >
            <div className="navbar h-[50.19px] top-0 w-full border border-[#1E2D3D] flex text-[#607B96] text-[18px] justify-between items-center font-[fira code]">
                <div className="name  w-[40%] h-full border-[#1E2D3D]  flex items-center ">
                    <div className="border-r border-[#1E2D3D] h-full w-[80%] flex  items-center pl-5">
                        <p>vandan-hood</p>
                    </div>

                    <div className="  flex items-center justify-between border-r border-[#1E2D3D] w-full h-full">
                        <ul className="  flex items-center justify-around h-full w-full">
                            <li className="h-full border-r border-[#1E2D3D] flex items-center w-full justify-center">_hello</li>
                            <li className="h-full border-r border-[#1E2D3D] flex items-center w-full justify-center">_about-me</li>
                            <li className="h-full  flex items-center w-full justify-center">_projects</li>
                        </ul>
                    </div>
                </div>
                
                <div className="name flex w-[10%] border-l border-[#1E2D3D] justify-center items-center h-full">
                        _contact-me
                </div>
            </div>
        </div>
    )
}
export default Navbar