const HomeContent = () =>{
    return (
        <div className="home-wrap h-[80%] w-full flex justify-center items-center text-[#607B96] ">
            <div className="leftcontent h-[100%] w-full flex justify-center flex-col items-end text-left">
               <p>
               <p className="text-[18px] text-[#E5E9F0]">Hi all, I am</p>
                
                
                
                <p className="text-[62px] text-[#E5E9F0]">Vandan Hood</p>
            
            
                <p className="text-[32px] text-[#4D5BCE]"> {'>'} Web Developer</p>

                <div className="proper pt-[20px]">
                    <p>
                         {'//'}&nbsp;&nbsp; Hello everyone i am kin about Data Structure and <br/> {'//'}&nbsp;&nbsp; Algorithm . I am a enthussiast learner and trying to <br/> {'//'}&nbsp;&nbsp;  learn Web Development
                    </p>
                    
                </div>
               </p>
                    
                
            </div>
            <div className="rightcontent h-[100%] w-full flex justify-center flex-col items-first">
                <div className="h-[100%] w-[100%] flex justify-center items-center">
                    <img className=" w-[275px]"src="./img/photo.jpeg" alt=""/>
                </div>
            </div>
        </div>
    )

}

export default HomeContent