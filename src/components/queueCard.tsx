const QueueCard = ({title,num,section, bg, textBg}: any) => {
    return (
        <div className="flex items-center px-[10px] w-[100%] rounded-[8px]" style={{background: bg}}>
            <div className="bg-white  rounded-[12px] px-[20px]">
            <p style={{color:textBg}} className="uppercase text-[60px] font-bold">{title}</p>
            </div>
            <div>
                <span className="text-[35px] uppercase font-bold block text-center text-white">{num}</span>
                <div className="h-[5px] w-[100%] bg-white"></div>
                <span className="text-[35px] font-bold uppercase text-white">{section}</span>
            </div>
        </div>
    )
}
export default QueueCard;