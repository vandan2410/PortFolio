import ConnectCard from "./ConnectCard"

const Connect = () =>{
    const connect = [
        {link : './img/call.png', title : 'Phone' , Content : 9146845926 },
        {link : './img/mail.png', title : 'Mail' , Content : 'vandanc71@gmail.com' },
        {link : './img/address.png', title : 'Address' , Content : '302 Sankalp Sankul near VIIT main gate Kondhwa Pune 411048' },
    ]
    return(
        <div className="bottom-0 h-[360px] w-full border-[3px] border-[#1E2D3D] ">
            <p className="text-[32px] text-[#E5E9F0] text-center mt-[20px]">Connect</p>
            <div className="flex justify-around">
                <ConnectCard link={connect[0].link} title={connect[0].title} content={connect[0].Content} />
                <ConnectCard link={connect[1].link} title={connect[1].title} content={connect[1].Content}/>
                <ConnectCard link={connect[2].link} title={connect[2].title} content={connect[2].Content}/>
            </div>
        </div>
    )

}
export default Connect