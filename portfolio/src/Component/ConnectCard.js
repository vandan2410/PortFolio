
const ConnectCard = (props) =>{
    return (
        <div className="h-[150px] w-[500px]  border-[3px] m-[40px] border-[#1E2D3D] bg-[#011221] flex  text-[#607B96]">
            <div className=" h-full w-[130px] flex justify-center items-center ">
                <img className="h-[60px] w-[60px] " src={props.link} alt=""/>
            </div>
            <div className="text-center h-full w-[270px]" >
                <p className="text-[28px] h-[75px] w-full flex justify-center items-center">{props.title}</p>
                <p>{props.content}</p>
            </div>
        </div>
    )
}
export default ConnectCard